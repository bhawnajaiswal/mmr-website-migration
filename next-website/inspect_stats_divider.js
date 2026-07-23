const fs = require('fs');
const css = fs.readFileSync('c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/public/wp-content/uploads/elementor/css/post-5721.css', 'utf8');

const ids = ["6bafbdd0", "7663bb10", "7a157208", "3aad1aa2", "40d796a0", "19120458", "80c408a", "bab1ab9", "f01d966", "dde1c2c", "98cdd17", "f95d051", "72d7a9b"];

ids.forEach(id => {
  const reg = new RegExp(`\\.elementor-element-${id}[^{]*\\{[^}]*\\}`, 'g');
  const matches = css.match(reg) || [];
  console.log(`\n=== ID: ${id} ===`);
  matches.forEach(m => console.log(m));
});
