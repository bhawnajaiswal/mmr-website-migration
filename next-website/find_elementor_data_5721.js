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

  let inMeta = false;
  let buffer = '';

  for await (const line of rl) {
    const trimmed = line.trim();
    if (trimmed.startsWith('INSERT INTO `wp_postmeta`')) {
      inMeta = true;
      buffer = line;
    } else if (inMeta) {
      buffer += ' ' + line;
    }

    if (inMeta && trimmed.endsWith(';')) {
      const searchStr = ", 5721, '_elementor_data',";
      const index = buffer.indexOf(searchStr);
      if (index !== -1) {
        console.log('Found elementor data for 5721!');
        
        let startPos = index;
        while (startPos > 0 && buffer[startPos] !== '(') {
          startPos--;
        }

        let parenCount = 1;
        let tuple = '';
        let escaped = false;
        let inString = false;
        let stringChar = null;

        for (let i = startPos + 1; i < buffer.length; i++) {
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

        // Find the JSON string literal in the tuple
        const keyIndex = tuple.indexOf("'_elementor_data'");
        if (keyIndex === -1) {
          console.error("Could not find meta key in tuple");
          return;
        }

        // Search for the next quote after the key
        let valueStartQuoteIndex = -1;
        let valueQuoteChar = null;
        for (let i = keyIndex + 17; i < tuple.length; i++) {
          if (tuple[i] === "'" || tuple[i] === '"') {
            valueStartQuoteIndex = i;
            valueQuoteChar = tuple[i];
            break;
          }
        }

        if (valueStartQuoteIndex === -1) {
          console.error("Could not find start quote for value");
          return;
        }

        // Extract value up to matching quote
        let metaValue = '';
        escaped = false;
        for (let i = valueStartQuoteIndex + 1; i < tuple.length; i++) {
          const char = tuple[i];
          if (escaped) {
            metaValue += char;
            escaped = false;
            continue;
          }
          if (char === '\\') {
            escaped = true;
            metaValue += char;
            continue;
          }
          if (char === valueQuoteChar) {
            break; // found end of string
          }
          metaValue += char;
        }

        // Clean escape sequences
        const cleaned = metaValue.replace(/\\'/g, "'")
                                 .replace(/\\"/g, '"')
                                 .replace(/\\\\/g, '\\')
                                 .replace(/\\n/g, '\n')
                                 .replace(/\\r/g, '\r')
                                 .replace(/\\t/g, '\t');
        
        try {
          const parsedJson = JSON.parse(cleaned);
          fs.writeFileSync('home_page_elementor_data_5721.json', JSON.stringify(parsedJson, null, 2));
          console.log('Successfully saved parsed Elementor JSON to home_page_elementor_data_5721.json');
        } catch (e) {
          console.log('Failed to parse JSON, writing raw text instead.', e.message);
          fs.writeFileSync('home_page_elementor_data_5721.txt', cleaned);
        }
        break;
      }
      inMeta = false;
      buffer = '';
    }
  }
}

run().catch(err => console.error(err));
