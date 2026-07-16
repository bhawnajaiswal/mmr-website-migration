const fs = require('fs');

const sqlPath = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/legacy/database/u666490538_pAxQz.sql';
const content = fs.readFileSync(sqlPath, 'utf8');

const lines = content.split('\n');
console.log('Total lines:', lines.length);

lines.forEach((line, idx) => {
  if (line.includes('3731') && line.includes('_elementor_data')) {
    console.log(`Line ${idx + 1}: length ${line.length}`);
    console.log(line.substring(0, 200));
  }
});
