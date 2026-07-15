const fs = require('fs');
const path = require('path');

const ARGS = process.argv.slice(2);
const MODE_ARG = ARGS.find(arg => arg.startsWith('--mode='));
const MODE = MODE_ARG ? MODE_ARG.split('=')[1] : 'analysis'; // Default to analysis

// PORTABLE PATH RESOLUTION (Improvement 2)
const workspaceDir = path.resolve(__dirname, '..');
const srcWordpressExport = path.join(workspaceDir, 'legacy/wordpress-export');
const srcPublicHtml = path.join(workspaceDir, 'legacy/public_html');
const destPublicDir = path.join(workspaceDir, 'next-website/public');

// Directory paths
const pathsMap = {
  uploads: {
    src: path.join(srcWordpressExport, 'uploads'),
    dest: path.join(destPublicDir, 'wp-content/uploads'),
    excludeDirs: ['cache', 'tmp', 'temp', 'logs']
  },
  theme: {
    src: path.join(srcWordpressExport, 'themes/hello-elementor'),
    dest: path.join(destPublicDir, 'wp-content/themes/hello-elementor'),
    excludeDirs: ['includes', 'template-parts', 'cache', 'tmp', 'temp'],
    excludeExts: ['.php']
  },
  customCss: {
    src: path.join(srcPublicHtml, 'css'),
    dest: path.join(destPublicDir, 'css'),
    excludeDirs: ['fontawesome']
  },
  customJs: {
    src: path.join(srcPublicHtml, 'js'),
    dest: path.join(destPublicDir, 'js'),
    excludeDirs: []
  },
  fontawesome: {
    src: path.join(srcPublicHtml, 'css/fontawesome'),
    dest: path.join(destPublicDir, 'css/fontawesome'),
    excludeDirs: []
  }
};

// Page-specific Elementor CSS mappings (Improvement 1)
const elementorPageMappings = {
  "home": "/wp-content/uploads/elementor/css/post-5721.css",
  "about": "/wp-content/uploads/elementor/css/post-5925.css",
  "treatment-services": "/wp-content/uploads/elementor/css/post-5948.css",
  "ivf": "/wp-content/uploads/elementor/css/post-5969.css",
  "iui": "/wp-content/uploads/elementor/css/post-6201.css",
  "ivm": "/wp-content/uploads/elementor/css/post-6206.css",
  "fertility-preservation-2": "/wp-content/uploads/elementor/css/post-6211.css",
  "icsi-treatment": "/wp-content/uploads/elementor/css/post-6217.css",
  "infertility-men-women": "/wp-content/uploads/elementor/css/post-6222.css",
  "ectopic-pregnancy-2": "/wp-content/uploads/elementor/css/post-6227.css",
  "female-infertility": "/wp-content/uploads/elementor/css/post-6232.css",
  "male-infertility": "/wp-content/uploads/elementor/css/post-6237.css",
  "infertility-testing": "/wp-content/uploads/elementor/css/post-6242.css",
  "daignostic": "/wp-content/uploads/elementor/css/post-6253.css",
  "renal-care-2": "/wp-content/uploads/elementor/css/post-6144.css",
  "capd": "/wp-content/uploads/elementor/css/post-6358.css",
  "evaluation-of-proteinuria": "/wp-content/uploads/elementor/css/post-6366.css",
  "uti-urinary-tract-infection": "/wp-content/uploads/elementor/css/post-6374.css",
  "faqs": "/wp-content/uploads/elementor/css/post-6174.css",
  "our-expert-team": "/wp-content/uploads/elementor/css/post-6166.css",
  "facilities": "/wp-content/uploads/elementor/css/post-155.css",
  "our-philosophy": "/wp-content/uploads/elementor/css/post-6385.css",
  "infrastructure": "/wp-content/uploads/elementor/css/post-1588.css",
  "feedback": "/wp-content/uploads/elementor/css/post-6718.css",
  "contact-us": "/wp-content/uploads/elementor/css/post-6684.css",
  "news-blogs": "/wp-content/uploads/elementor/css/post-159.css",
  "career": "/wp-content/uploads/elementor/css/post-161.css",
  "privacy-policy": "/wp-content/uploads/elementor/css/post-3.css",
  "disclaimer": "/wp-content/uploads/elementor/css/post-4148.css",
  "terms-of-use": "/wp-content/uploads/elementor/css/post-4160.css",
  "thank-you-book-consultancy": "/wp-content/uploads/elementor/css/post-1559.css",
  "consultation": "/wp-content/uploads/elementor/css/post-1801.css",
  "consultation-for-renal-problems": "/wp-content/uploads/elementor/css/post-3731.css",
  "why-mmr-hospital-ivf-center": "/wp-content/uploads/elementor/css/post-6652.css"
};

// Recursive file scanner for analysis or copy
function scanDirectory(src, dest, config, executeCopy = false) {
  let fileCount = 0;
  let byteCount = 0;
  const copiedPaths = [];

  if (!fs.existsSync(src)) {
    return { fileCount, byteCount, copiedPaths };
  }

  if (executeCopy && !fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      if (config.excludeDirs && config.excludeDirs.includes(entry.name.toLowerCase())) {
        continue;
      }
      const subResult = scanDirectory(srcPath, destPath, config, executeCopy);
      fileCount += subResult.fileCount;
      byteCount += subResult.byteCount;
      copiedPaths.push(...subResult.copiedPaths);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (config.excludeExts && config.excludeExts.includes(ext)) {
        continue;
      }

      const stat = fs.statSync(srcPath);
      fileCount++;
      byteCount += stat.size;

      if (executeCopy) {
        fs.copyFileSync(srcPath, destPath);
        const relativeDest = destPath.replace(destPublicDir, '').replace(/\\/g, '/');
        copiedPaths.push(relativeDest);
      }
    }
  }

  return { fileCount, byteCount, copiedPaths };
}

function runAnalysis() {
  console.log('==================================================');
  console.log('         PHASE 3.1: ASSET ANALYSIS (PORTABLE)     ');
  console.log('==================================================\n');

  let totalFiles = 0;
  let totalBytes = 0;
  let sourceError = false;

  for (const [key, paths] of Object.entries(pathsMap)) {
    console.log(`Analyzing: ${key.toUpperCase()}`);
    if (!fs.existsSync(paths.src)) {
      console.error(`[ERROR] Source path does not exist: ${paths.src}`);
      sourceError = true;
      continue;
    }
    const { fileCount, byteCount } = scanDirectory(paths.src, paths.dest, paths, false);
    totalFiles += fileCount;
    totalBytes += byteCount;
  }

  console.log('--------------------------------------------------');
  console.log(`Total Files: ${totalFiles} | Total Size: ${(totalBytes / (1024 * 1024)).toFixed(2)} MB`);
  console.log('--------------------------------------------------');

  if (sourceError) {
    process.exit(1);
  }
}

function runCopyAndGenerateManifest() {
  const manifest = {
    css: [],
    js: [],
    themeCss: [],
    fonts: [],
    pages: {} // EXTENDED FOR PAGE SPECIFIC STYLES (Improvement 1)
  };

  for (const [key, paths] of Object.entries(pathsMap)) {
    const { copiedPaths } = scanDirectory(paths.src, paths.dest, paths, true);

    copiedPaths.forEach(relPath => {
      const ext = path.extname(relPath).toLowerCase();
      if (key === 'customCss') {
        manifest.css.push(relPath);
      } else if (key === 'customJs') {
        manifest.js.push(relPath);
      } else if (key === 'theme') {
        if (ext === '.css') {
          manifest.themeCss.push(relPath);
        }
      } else if (key === 'fontawesome') {
        if (ext === '.css') {
          manifest.css.push(relPath);
        } else if (['.ttf', '.woff', '.woff2', '.eot', '.svg'].includes(ext)) {
          manifest.fonts.push(relPath);
        }
      }
    });
  }

  // Populate page specific settings
  for (const [page, cssPath] of Object.entries(elementorPageMappings)) {
    manifest.pages[page] = {
      elementorCss: cssPath
    };
  }

  const manifestPath = path.join(workspaceDir, 'next-website/asset-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`Asset manifest updated at: ${manifestPath}`);
}

if (MODE === 'copy') {
  runCopyAndGenerateManifest();
} else {
  runAnalysis();
}
