const fs = require('fs');
const path = require('path');

const contentPath = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/home_page_post_5721.txt';
const targetDir = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/docs/inspection';
const targetPath = path.join(targetDir, 'homepage-sections-raw.html');

try {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const content = fs.readFileSync(contentPath, 'utf8');
  
  // Locate the start of '<style>/*! elementor'
  const startIdx = content.indexOf('<style>/*! elementor');
  if (startIdx !== -1) {
    const endIdx = content.indexOf("', 'Home'");
    const htmlContent = content.substring(startIdx, endIdx !== -1 ? endIdx : content.length);
    
    // Clean escaped characters
    const cleaned = htmlContent.replace(/\\'/g, "'")
                               .replace(/\\"/g, '"')
                               .replace(/\\\\/g, '\\')
                               .replace(/\\n/g, '\n')
                               .replace(/\\r/g, '\r')
                               .replace(/\\t/g, '\t');

    fs.writeFileSync(targetPath, cleaned);
    console.log('Successfully saved cleaned HTML to ' + targetPath);
  } else {
    console.log('Could not locate HTML start');
  }
} catch (err) {
  console.error('Error:', err.message);
}
