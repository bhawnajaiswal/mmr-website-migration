const fs = require('fs');
const readline = require('readline');
const path = require('path');

const workspaceDir = path.resolve(__dirname, '..');
const sqlPath = path.join(workspaceDir, 'legacy/database/u666490538_pAxQz.sql');
const destDir = path.join(workspaceDir, 'docs/inspection');

function parseInsertValues(valuesStr) {
  const rows = [];
  let currentVal = '';
  let inString = false;
  let stringChar = null;
  let escaped = false;
  let inTuple = false;
  let currentTuple = [];

  for (let i = 0; i < valuesStr.length; i++) {
    const char = valuesStr[i];

    if (escaped) {
      currentVal += char;
      escaped = false;
      continue;
    }

    if (char === '\\') {
      escaped = true;
      currentVal += char;
      continue;
    }

    if (inString) {
      if (char === stringChar) {
        if (valuesStr[i + 1] === stringChar) {
          currentVal += char;
          i++;
        } else {
          inString = false;
          stringChar = null;
        }
      } else {
        currentVal += char;
      }
      continue;
    }

    if (char === "'" || char === '"') {
      inString = true;
      stringChar = char;
      continue;
    }

    if (char === '(') {
      inTuple = true;
      currentTuple = [];
      currentVal = '';
      continue;
    }

    if (char === ')') {
      if (inTuple) {
        currentTuple.push(currentVal);
        rows.push(currentTuple);
        inTuple = false;
        currentVal = '';
      }
      continue;
    }

    if (char === ',') {
      if (inTuple) {
        currentTuple.push(currentVal);
        currentVal = '';
      }
      continue;
    }

    if (/\s/.test(char)) {
      continue;
    }

    currentVal += char;
  }

  return rows;
}

function cleanSqlString(str) {
  str = str.trim();
  return str.replace(/\\'/g, "'")
            .replace(/\\"/g, '"')
            .replace(/\\\\/g, '\\')
            .replace(/\\n/g, '\n')
            .replace(/\\r/g, '\r')
            .replace(/\\t/g, '\t');
}

async function run() {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const fileStream = fs.createReadStream(sqlPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const posts = {};
  const postmeta = [];
  const terms = {};
  const termTaxonomy = {};
  const termRelationships = [];

  let currentTable = null;
  let currentBuffer = "";

  for await (const line of rl) {
    const trimmed = line.trim();
    if (trimmed.startsWith('INSERT INTO `wp_posts`')) {
      currentTable = 'posts';
      currentBuffer = line;
    } else if (trimmed.startsWith('INSERT INTO `wp_postmeta`')) {
      currentTable = 'postmeta';
      currentBuffer = line;
    } else if (trimmed.startsWith('INSERT INTO `wp_terms`')) {
      currentTable = 'terms';
      currentBuffer = line;
    } else if (trimmed.startsWith('INSERT INTO `wp_term_taxonomy`')) {
      currentTable = 'term_taxonomy';
      currentBuffer = line;
    } else if (trimmed.startsWith('INSERT INTO `wp_term_relationships`')) {
      currentTable = 'term_relationships';
      currentBuffer = line;
    } else if (currentTable) {
      currentBuffer += " " + line;
    }

    if (currentTable && trimmed.endsWith(';')) {
      const valuesIndex = currentBuffer.indexOf('VALUES');
      if (valuesIndex !== -1) {
        const valuesStr = currentBuffer.substring(valuesIndex + 6);
        const rows = parseInsertValues(valuesStr);

        for (const row of rows) {
          if (currentTable === 'posts' && row.length >= 23) {
            const id = parseInt(row[0].trim(), 10);
            posts[id] = {
              id,
              title: cleanSqlString(row[5]),
              status: cleanSqlString(row[7]),
              type: cleanSqlString(row[20]),
              menu_order: parseInt(row[17].trim(), 10)
            };
          } else if (currentTable === 'postmeta' && row.length >= 4) {
            postmeta.push({
              postId: parseInt(row[1].trim(), 10),
              key: cleanSqlString(row[2]),
              val: cleanSqlString(row[3])
            });
          } else if (currentTable === 'terms' && row.length >= 4) {
            const id = parseInt(row[0].trim(), 10);
            terms[id] = { id, name: cleanSqlString(row[1]), slug: cleanSqlString(row[2]) };
          } else if (currentTable === 'term_taxonomy' && row.length >= 4) {
            const id = parseInt(row[0].trim(), 10);
            termTaxonomy[id] = { termId: parseInt(row[1].trim(), 10), taxonomy: cleanSqlString(row[2]) };
          } else if (currentTable === 'term_relationships' && row.length >= 3) {
            termRelationships.push({
              objectId: parseInt(row[0].trim(), 10),
              termTaxonomyId: parseInt(row[1].trim(), 10),
              order: parseInt(row[2].trim(), 10)
            });
          }
        }
      }
      currentTable = null;
      currentBuffer = "";
    }
  }

  // Find all menus registered in nav_menu taxonomy
  const menuTaxIds = [];
  for (const id in termTaxonomy) {
    if (termTaxonomy[id].taxonomy === 'nav_menu') {
      menuTaxIds.push(parseInt(id, 10));
    }
  }

  console.log('--- FOUND MENUS ---');
  menuTaxIds.forEach(taxId => {
    const termId = termTaxonomy[taxId].termId;
    const term = terms[termId];
    console.log(`Menu: "${term ? term.name : 'Unknown'}" (Taxonomy ID: ${taxId}, Term ID: ${termId})`);
  });

  // Map postmeta by postId for easy lookup
  const metaLookup = {};
  postmeta.forEach(m => {
    if (!metaLookup[m.postId]) {
      metaLookup[m.postId] = {};
    }
    metaLookup[m.postId][m.key] = m.val;
  });

  // Extract menu items for each menu
  menuTaxIds.forEach(taxId => {
    const termId = termTaxonomy[taxId].termId;
    const termName = terms[termId] ? terms[termId].name : 'Unknown';
    const menuItems = [];

    const itemIds = termRelationships
      .filter(r => r.termTaxonomyId === taxId)
      .map(r => r.objectId);

    itemIds.forEach(itemId => {
      const p = posts[itemId];
      if (p && p.type === 'nav_menu_item') {
        const meta = metaLookup[itemId] || {};
        const type = meta['_menu_item_type'] || '';
        const menuObject = meta['_menu_item_object'] || '';
        const menuObjectId = parseInt(meta['_menu_item_object_id'] || '0', 10);
        const parentId = parseInt(meta['_menu_item_menu_item_parent'] || '0', 10);
        const customUrl = meta['_menu_item_url'] || '';

        let finalTitle = p.title;
        let finalUrl = '';

        if (type === 'post_type') {
          const linkedPost = posts[menuObjectId];
          if (linkedPost) {
            finalTitle = finalTitle || linkedPost.title;
            finalUrl = `/${linkedPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/`;
          }
        } else if (type === 'custom') {
          finalUrl = customUrl;
        }

        menuItems.push({
          id: itemId,
          title: finalTitle || p.title,
          url: finalUrl || customUrl,
          parent: parentId,
          order: p.menu_order
        });
      }
    });

    menuItems.sort((a, b) => a.order - b.order);

    console.log(`\n--- MENU ITEMS FOR MENU: ${termName} ---`);
    console.log(JSON.stringify(menuItems, null, 2));

    const reportPath = path.join(workspaceDir, `docs/inspection/menu-${termName.toLowerCase().replace(/\s+/g, '-')}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(menuItems, null, 2));
    console.log(`Saved menu JSON to: ${reportPath}`);
  });
}

run().catch(err => console.error(err));
