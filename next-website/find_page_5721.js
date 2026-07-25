const fs = require('fs');
const readline = require('readline');
const path = require('path');

const sqlPath = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/legacy/database/u666490538_pAxQz.sql';

async function run() {
  const fileStream = fs.createReadStream(sqlPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let inPosts = false;
  let buffer = '';

  for await (const line of rl) {
    const trimmed = line.trim();
    if (trimmed.startsWith('INSERT INTO `wp_posts`')) {
      inPosts = true;
      buffer = line;
    } else if (inPosts) {
      buffer += ' ' + line;
    }

    if (inPosts && trimmed.endsWith(';')) {
      const index = buffer.indexOf('(5721,');
      if (index !== -1) {
        console.log('Found (5721, in posts block!');
        let parenCount = 1;
        let tuple = '';
        let escaped = false;
        let inString = false;
        let stringChar = null;

        for (let i = index + 1; i < buffer.length; i++) {
          const char = buffer[i];
          tuple += char;

          if (escaped) {
            escaped = false;
            continue;
          }
          if (char === '\\') {
            escaped = true;
            continue;
          }
          if (inString) {
            if (char === stringChar) {
              inString = false;
              stringChar = null;
            }
            continue;
          }
          if (char === "'" || char === '"') {
            inString = true;
            stringChar = char;
            continue;
          }
          if (char === '(') {
            parenCount++;
          }
          if (char === ')') {
            parenCount--;
            if (parenCount === 0) {
              break;
            }
          }
        }
        // Save to a file
        fs.writeFileSync('home_page_post_5721.txt', '(5721,' + tuple);
        console.log('Saved to home_page_post_5721.txt');
        break;
      }
      inPosts = false;
      buffer = '';
    }
  }
}

run().catch(err => console.error(err));
