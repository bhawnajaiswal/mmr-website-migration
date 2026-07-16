const fs = require('fs');

const cssPath = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/public/wp-content/uploads/elementor/css/post-5721.css';

try {
  const content = fs.readFileSync(cssPath, 'utf8');
  
  const target = '65c0718a';
  const idx = content.indexOf(target);
  if (idx !== -1) {
    console.log(`Found '${target}' in CSS:`);
    const start = content.lastIndexOf('{', idx);
    const end = content.indexOf('}', idx);
    const selStart = content.lastIndexOf('}', start);
    console.log(content.slice(selStart === -1 ? 0 : selStart + 1, end + 1).trim());
  } else {
    console.log(`Selector '${target}' NOT found.`);
  }
} catch (err) {
  console.error('Error:', err.message);
}
