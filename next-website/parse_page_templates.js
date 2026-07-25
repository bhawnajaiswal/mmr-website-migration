const fs = require('fs');

const sqlPath = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/legacy/database/u666490538_pAxQz.sql';
const targetPageId = '159';

const extractElementorData = () => {
  const content = fs.readFileSync(sqlPath, 'utf8');
  console.log(`Searching for postmeta for Post ID: ${targetPageId}...`);
  
  let searchPos = 0;
  let elementorData = null;
  
  while (true) {
    const idx = content.indexOf("INSERT INTO `wp_postmeta`", searchPos);
    if (idx === -1) break;
    const endIdx = content.indexOf(';\n', idx);
    if (endIdx === -1) break;
    const statement = content.slice(idx, endIdx);
    
    let parenDepth = 0;
    let inString = false;
    let stringChar = '';
    let currentTuple = '';
    
    for (let i = 0; i < statement.length; i++) {
      const char = statement[i];
      if (inString) {
        currentTuple += char;
        if (char === stringChar) {
          let bsCount = 0;
          let bsPos = i - 1;
          while (bsPos >= 0 && statement[bsPos] === '\\') { bsCount++; bsPos--; }
          if (bsCount % 2 === 0) inString = false;
        }
      } else {
        if (char === "'" || char === '"') {
          inString = true; stringChar = char; currentTuple += char;
        } else if (char === '(') {
          parenDepth++; if (parenDepth === 1) currentTuple = ''; else currentTuple += char;
        } else if (char === ')') {
          parenDepth--;
          if (parenDepth === 0) {
            // Process current tuple
            const cols = []; let curCol = ''; let inStr = false; let strCh = '';
            for (let j = 0; j < currentTuple.length; j++) {
              const ch = currentTuple[j];
              if (inStr) {
                curCol += ch;
                if (ch === strCh) {
                  let bsC = 0; let bsP = j - 1;
                  while (bsP >= 0 && currentTuple[bsP] === '\\') { bsC++; bsP--; }
                  if (bsC % 2 === 0) inStr = false;
                }
              } else {
                if (ch === "'" || ch === '"') {
                  inStr = true; strCh = ch; curCol += ch;
                } else if (ch === ',') {
                  cols.push(curCol.trim()); curCol = '';
                } else {
                  curCol += ch;
                }
              }
            }
            cols.push(curCol.trim());
            
            const cleanVal = (val) => {
              if (!val) return '';
              if ((val.startsWith("'") && val.endsWith("'")) || (val.startsWith('"') && val.endsWith('"'))) {
                return val.slice(1, -1).replace(/\\'/g, "'").replace(/\\"/g, '"');
              }
              return val;
            };
            
            const postId = cleanVal(cols[1]);
            const metaKey = cleanVal(cols[2]);
            const metaVal = cleanVal(cols[3]);
            
            if (postId === targetPageId && metaKey === '_elementor_data') {
              elementorData = metaVal;
              break;
            }
          } else {
            currentTuple += char;
          }
        } else {
          if (parenDepth > 0) currentTuple += char;
        }
      }
    }
    
    if (elementorData) break;
    searchPos = endIdx + 2;
  }
  
  if (elementorData) {
    fs.writeFileSync('page_1801_elementor_data.json', elementorData);
    console.log('Successfully saved Elementor data to page_1801_elementor_data.json');
    
    // Parse and print structure
    try {
      const data = JSON.parse(elementorData);
      console.log('Total sections found:', data.length);
      data.forEach((sec, sIdx) => {
        console.log(`\nSection ${sIdx + 1} ID: ${sec.id}`);
        if (sec.settings) console.log(`  Settings:`, JSON.stringify(sec.settings));
        sec.elements.forEach((col, cIdx) => {
          console.log(`  Column ${cIdx + 1} ID: ${col.id}`);
          col.elements.forEach((widget, wIdx) => {
            console.log(`    Widget ${wIdx + 1}: ${widget.widgetType || widget.elType} (ID: ${widget.id})`);
            if (widget.settings) console.log(`      Settings Summary:`, Object.keys(widget.settings).join(', '));
            if (widget.widgetType === 'form') {
              console.log(`      Form Fields:`, JSON.stringify(widget.settings.form_fields));
            }
          });
        });
      });
    } catch (e) {
      console.error('Error parsing JSON:', e.message);
    }
  } else {
    console.log('Could not find _elementor_data for Post ID 1801.');
  }
};

extractElementorData();
