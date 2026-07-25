const fs = require('fs');

const sqlPath = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/legacy/database/u666490538_pAxQz.sql';
const content = fs.readFileSync(sqlPath, 'utf8');

console.log('SQL File Length:', content.length);

let pos = 0;
let foundCount = 0;
while (true) {
  const idx = content.indexOf("'6228'", pos);
  if (idx === -1) break;
  console.log(`Found '6228' at index ${idx}:`, content.slice(idx - 100, idx + 100));
  pos = idx + 6;
  foundCount++;
  if (foundCount > 10) break;
}
