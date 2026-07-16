const fs = require('fs');

const line = fs.readFileSync('raw_line_3731.txt', 'utf8');

// The line is: INSERT INTO `wp_postmeta` VALUES (meta_id, post_id, meta_key, meta_value);
// Let's parse the values. It usually looks like:
// (22055,3731,'_elementor_data','[JSON]')
// We can use a simple regex or parser. Let's find the third single quote after '3731' and '_elementor_data'.
const keyIdx = line.indexOf("'_elementor_data'");
if (keyIdx === -1) {
  console.log('Could not find meta key');
  process.exit(1);
}

// The next field is the meta value, which starts with a single quote.
const valStartIdx = line.indexOf("'", keyIdx + 17); // skip '_elementor_data' and comma/spaces
console.log('Value starts at:', valStartIdx);

// Let's find the closing quote of the value.
// Since the value is a SQL string literal, it escapes single quotes as \'
let valEndIdx = -1;
for (let i = valStartIdx + 1; i < line.length; i++) {
  if (line[i] === "'") {
    // Check if it's escaped by backslash
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

// SQL unescaping:
// \r -> CR
// \n -> LF
// \' -> '
// \" -> "
// \\ -> \
// Let's implement correct SQL unescaping of the string literal!
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
  console.log('Total sections:', parsed.length);
  fs.writeFileSync('page_1801_elementor_data.json', JSON.stringify(parsed, null, 2));
} catch (e) {
  console.error('Failed to parse:', e.message);
  console.log('Context around error:');
  // extract position from error message if available
  const match = e.message.match(/position (\d+)/);
  if (match) {
    const pos = parseInt(match[1], 10);
    console.log(unescaped.substring(Math.max(0, pos - 100), Math.min(unescaped.length, pos + 100)));
  }
}
