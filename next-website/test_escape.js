const fs = require('fs');

const sqlPath = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/legacy/database/u666490538_pAxQz.sql';
const content = fs.readFileSync(sqlPath, 'utf8');

// Let's find where targetPageId = 3731 and meta_key = _elementor_data
const lines = content.split('\n');
for (const line of lines) {
  if (line.includes(",3731,") && line.includes("'_elementor_data'")) {
    console.log('Found insert line!');
    fs.writeFileSync('raw_line_3731.txt', line);
    break;
  }
}
