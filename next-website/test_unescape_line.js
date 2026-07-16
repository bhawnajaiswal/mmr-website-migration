const fs = require('fs');

const sqlPath = 'c:/Users/bhawn/OneDrive/ドキュメント/website-MMR/mmr-website-migration/legacy/database/u666490538_pAxQz.sql';
const content = fs.readFileSync(sqlPath, 'utf8');
const lines = content.split('\n');

// Line 7344 contains our data
const line = lines[7343]; // 0-indexed

// Let's find the tuple starting with (30549, 3731, '_elementor_data',
const searchStr = "(30549, 3731, '_elementor_data', '";
const startIdx = line.indexOf(searchStr);
if (startIdx === -1) {
  console.log('Could not find starting index of tuple');
  process.exit(1);
}

const valStartIdx = startIdx + searchStr.length - 1; // points to the single quote starting the JSON string
console.log('Value starts at:', valStartIdx);

// Find the closing single quote
let valEndIdx = -1;
for (let i = valStartIdx + 1; i < line.length; i++) {
  if (line[i] === "'") {
    // Check backslashes
    let bsCount = 0;
    let pos = i - 1;
    while (pos >= 0 && line[pos] === '\\') {
      bsCount++;
      pos--;
    }
    if (bsCount % 2 === 0) {
      valEndIdx = i;
      break;
    }
  }
}

console.log('Value ends at:', valEndIdx);
if (valEndIdx === -1) {
  console.log('Could not find closing quote');
  process.exit(1);
}

const rawVal = line.substring(valStartIdx + 1, valEndIdx);
console.log('Raw value length:', rawVal.length);

// SQL unescape
let unescaped = '';
for (let i = 0; i < rawVal.length; i++) {
  if (rawVal[i] === '\\') {
    i++;
    if (i >= rawVal.length) {
      unescaped += '\\';
      break;
    }
    const nextChar = rawVal[i];
    if (nextChar === 'r') {
      unescaped += '\r';
    } else if (nextChar === 'n') {
      unescaped += '\n';
    } else if (nextChar === 't') {
      unescaped += '\t';
    } else if (nextChar === "'") {
      unescaped += "'";
    } else if (nextChar === '"') {
      unescaped += '"';
    } else if (nextChar === '\\') {
      unescaped += '\\';
    } else {
      unescaped += '\\' + nextChar;
    }
  } else {
    unescaped += rawVal[i];
  }
}

console.log('Unescaped length:', unescaped.length);

try {
  const parsed = JSON.parse(unescaped);
  console.log('JSON parsed successfully!');
  fs.writeFileSync('page_1801_elementor_data.json', JSON.stringify(parsed, null, 2));
} catch (e) {
  console.error('Failed to parse:', e.message);
  const match = e.message.match(/position (\d+)/);
  if (match) {
    const pos = parseInt(match[1], 10);
    console.log('Context around error:');
    console.log(unescaped.substring(Math.max(0, pos - 100), Math.min(unescaped.length, pos + 100)));
  }
}
