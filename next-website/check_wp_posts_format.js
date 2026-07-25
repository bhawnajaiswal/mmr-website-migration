const fs = require('fs');

const sqlPath = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/legacy/database/u666490538_pAxQz.sql';
const content = fs.readFileSync(sqlPath, 'utf8');
const lines = content.split('\n');

lines.forEach((line, idx) => {
  if (line.includes("INSERT INTO `wp_posts`")) {
    console.log(`Line ${idx + 1} contains wp_posts insert:`);
    console.log(line.substring(0, 500));
  }
});
