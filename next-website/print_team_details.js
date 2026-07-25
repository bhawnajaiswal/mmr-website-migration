const fs = require('fs');

const fileContent = fs.readFileSync('page_1801_elementor_data.json', 'utf8');
const data = JSON.parse(fileContent);

const printElement = (el, depth = 0) => {
  const prefix = '  '.repeat(depth);
  console.log(`${prefix}Element: ${el.elType || el.widgetType} (ID: ${el.id})`);
  if (el.widgetType) {
    if (el.settings) {
      if (el.settings.title) console.log(`${prefix}  Title: ${el.settings.title}`);
      if (el.settings.editor) console.log(`${prefix}  Editor (truncated): ${el.settings.editor.substring(0, 300)}`);
      if (el.settings.image) console.log(`${prefix}  Image: ${JSON.stringify(el.settings.image)}`);
      if (el.settings.link) console.log(`${prefix}  Link: ${JSON.stringify(el.settings.link)}`);
      if (el.settings.icon_list) {
        console.log(`${prefix}  Icon List:`);
        el.settings.icon_list.forEach((item, idx) => {
          console.log(`${prefix}    ${idx + 1}. Text: ${item.text}, Link: ${JSON.stringify(item.link)}`);
        });
      }
    }
  }
  if (el.elements && el.elements.length > 0) {
    el.elements.forEach(sub => {
      printElement(sub, depth + 1);
    });
  }
};

data.forEach((sec, idx) => {
  console.log(`\n=== SECTION ${idx + 1} (ID: ${sec.id}) ===`);
  printElement(sec);
});
