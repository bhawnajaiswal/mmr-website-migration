const fs = require('fs');

const sqlPath = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/legacy/database/u666490538_pAxQz.sql';
const content = fs.readFileSync(sqlPath, 'utf8');
const lines = content.split('\n');

console.log('Searching for header/footer post types...');
lines.forEach((rawLine, idx) => {
  const line = rawLine.trim();
  if (line.startsWith('(') && (line.endsWith('),') || line.endsWith(');'))) {
    const tupleStr = line.substring(1, line.length - 2);
    try {
      const fields = [];
      let inString = false;
      let currentField = '';
      for (let i = 0; i < tupleStr.length; i++) {
        const char = tupleStr[i];
        if (char === "'" && (i === 0 || tupleStr[i - 1] !== '\\')) {
          inString = !inString;
        } else if (char === ',' && !inString) {
          fields.push(currentField.trim());
          currentField = '';
        } else {
          currentField += char;
        }
      }
      fields.push(currentField.trim());

      const post_type = fields[20];
      const title = fields[5];
      if (post_type && (post_type.includes('elementor') || post_type.includes('header') || post_type.includes('footer') || title.includes('Header') || title.includes('Footer'))) {
        console.log(`Line ${idx + 1}: ID=${fields[0]}, slug=${fields[11]}, type=${post_type}, status=${fields[7]}, title=${fields[5]}`);
      }
    } catch (e) {}
  }
});
