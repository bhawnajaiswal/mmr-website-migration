const fs = require('fs');

function getPngSize(buffer) {
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return { width, height };
}

function getJpgSize(buffer) {
  let i = 2;
  while (i < buffer.length) {
    if (buffer[i] === 0xFF) {
      const marker = buffer[i + 1];
      if (marker === 0xC0 || marker === 0xC2) {
        // SOF0 or SOF2
        const height = buffer.readUInt16BE(i + 5);
        const width = buffer.readUInt16BE(i + 7);
        return { width, height };
      }
      i += 2;
    } else {
      i++;
    }
  }
  return null;
}

const files = [
  'public/wp-content/uploads/2024/03/Untitled-design-37.png',
  'public/wp-content/uploads/2024/03/Untitled-design-38.png',
  'public/wp-content/uploads/2024/03/woman-s-hands-support-human-embryo-icon-blurred-background-tree-scaled.jpg',
  'public/wp-content/uploads/2024/03/vitro-fertilization-human-female-cell-blue-background-microscopic-view-ivf-close-up-3d-rendering-scaled.jpg',
  'public/wp-content/uploads/2024/03/senior-man-suffering-from-kidney-pain-home-scaled.jpg',
  'public/wp-content/uploads/2024/03/urethra-kidneys-man-with-hands-holding-her-crotch-male-anatomy-concept-scaled.jpg'
];

files.forEach(f => {
  const buffer = fs.readFileSync(f);
  let size = null;
  if (f.endsWith('.png')) {
    size = getPngSize(buffer);
  } else {
    size = getJpgSize(buffer);
  }
  console.log(f, size);
});
