const fs = require('fs');

const raw = fs.readFileSync('page_1801_elementor_data.json', 'utf8');
console.log('Length:', raw.length);
console.log('Context around position 10923:');
console.log(raw.substring(Math.max(0, 10923 - 100), Math.min(raw.length, 10923 + 100)));
