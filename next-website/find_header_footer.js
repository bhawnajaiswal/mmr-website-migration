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

  const templates = [];
  let currentTable = null;
  let currentBuffer = "";

  for await (const line of rl) {
    const trimmed = line.trim();
    if (trimmed.startsWith('INSERT INTO `wp_posts`')) {
      currentTable = 'posts';
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
          if (row.length >= 23) {
            const id = parseInt(row[0].trim(), 10);
            const title = cleanSqlString(row[5]);
            const content = cleanSqlString(row[4]);
            const status = cleanSqlString(row[7]);
            const type = cleanSqlString(row[20]);

            if ((type === 'elementor_library' || type === 'elementor-hf') && (status === 'publish' || status === 'draft')) {
              templates.push({ id, title, type, status, contentLen: content.length });
              
              const filename = `template-${id}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.html`;
              fs.writeFileSync(path.join(destDir, filename), content);
              console.log(`Saved template: ${filename} (Type: ${type}, Status: ${status})`);
            }
          }
        }
      }
      currentTable = null;
      currentBuffer = "";
    }
  }

  console.log('--- FOUND TEMPLATES (INCLUDING HF) ---');
  console.log(templates);

  fs.writeFileSync(path.join(destDir, 'templates_index.json'), JSON.stringify(templates, null, 2));
}

run().catch(err => console.error(err));
