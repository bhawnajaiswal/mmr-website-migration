const fs = require('fs');
const path = require('path');

const srcCssDir = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/legacy/public_html/css';
const srcJsDir = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/legacy/public_html/js';

const destCssDir = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/public/css';
const destJsDir = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/public/js';
const destFontsDir = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/public/fonts';

// Helper to copy directory recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${srcPath} -> ${destPath}`);
    }
  }
}

// Helper to copy files matching specific extensions from a directory
function copyFilesByExtSync(src, dest, extensions) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (extensions.includes(ext)) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied: ${srcPath} -> ${destPath}`);
      }
    }
  }
}

try {
  console.log('--- COPYING CSS FILES ---');
  // Copy CSS files from legacy/public_html/css/ (excluding fontawesome subfolder)
  copyFilesByExtSync(srcCssDir, destCssDir, ['.css']);

  console.log('\n--- COPYING JS FILES ---');
  // Copy JS files from legacy/public_html/js/
  copyFilesByExtSync(srcJsDir, destJsDir, ['.js']);

  console.log('\n--- COPYING FONTAWESOME CSS ---');
  // Copy FontAwesome CSS folder structure
  const faCssSrc = path.join(srcCssDir, 'fontawesome/css');
  const faCssDest = path.join(destCssDir, 'fontawesome/css');
  if (fs.existsSync(faCssSrc)) {
    copyDirSync(faCssSrc, faCssDest);
  }

  console.log('\n--- COPYING FONTAWESOME WEBFONTS ---');
  // Copy webfonts directly to public/fonts/ as requested
  const faFontsSrc = path.join(srcCssDir, 'fontawesome/webfonts');
  if (fs.existsSync(faFontsSrc)) {
    copyDirSync(faFontsSrc, destFontsDir);
  }

  console.log('\nAsset copy completed successfully.');
} catch (err) {
  console.error('Error during asset copy:', err);
}
