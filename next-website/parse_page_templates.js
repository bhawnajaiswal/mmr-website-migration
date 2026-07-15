const fs = require('fs');
const path = require('path');

const src1 = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/legacy/wordpress-export/plugins/elementor/assets/css/frontend-lite.min.css';
const dest1 = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/public/css/frontend-lite.min.css';

const src2 = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/legacy/wordpress-export/plugins/pro-elements/assets/css/widget-slides.min.css';
const dest2 = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/next-website/public/css/widget-slides.min.css';

try {
  fs.copyFileSync(src1, dest1);
  console.log('Successfully copied frontend-lite.min.css');
  
  fs.copyFileSync(src2, dest2);
  console.log('Successfully copied widget-slides.min.css');
} catch (err) {
  console.error('Error copying files:', err.message);
}
