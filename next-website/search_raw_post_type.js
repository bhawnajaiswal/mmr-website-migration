const fs = require('fs');

const sqlPath = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/legacy/database/u666490538_pAxQz.sql';
const content = fs.readFileSync(sqlPath, 'utf8');
const lines = content.split('\n');

console.log('Searching for lines containing post type and publish status...');
lines.forEach((line, idx) => {
  if (line.includes("INSERT INTO `wp_posts`")) {
    // Check if the next line has the post type and publish status
    const nextLine = lines[idx + 1];
    if (nextLine && nextLine.includes("'post'") && nextLine.includes("'publish'")) {
      console.log(`Line ${idx + 2}: length ${nextLine.length}`);
      console.log(nextLine.substring(0, 400));
    }
  }
});
