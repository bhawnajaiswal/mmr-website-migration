const fs = require('fs');

const sqlPath = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/legacy/database/u666490538_pAxQz.sql';
const content = fs.readFileSync(sqlPath, 'utf8');

const lines = content.split('\n');

console.log('Searching in wp_posts for feedback...');
lines.forEach((line, idx) => {
  if (line.includes("INSERT INTO `wp_posts`")) {
    let start = 0;
    while (true) {
      const pIdx = line.indexOf("(", start);
      if (pIdx === -1) break;
      const endIdx = line.indexOf(")", pIdx);
      if (endIdx === -1) break;
      const tuple = line.substring(pIdx + 1, endIdx);
      if (tuple.includes("'feedback'") || tuple.includes('"feedback"')) {
        console.log(`Line ${idx + 1} match:`, tuple.substring(0, 300));
      }
      start = endIdx + 1;
    }
  }
});
