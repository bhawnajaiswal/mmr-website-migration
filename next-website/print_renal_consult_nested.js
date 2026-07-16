const fs = require('fs');

const fileContent = fs.readFileSync('page_1801_elementor_data.json', 'utf8');
const data = JSON.parse(fileContent);

const printWidget = (w, prefix = '    ') => {
  console.log(`${prefix}Widget: ${w.widgetType || w.elType} (ID: ${w.id})`);
  if (w.settings) {
    if (w.settings.title) console.log(`${prefix}  Title: ${w.settings.title}`);
    if (w.settings.editor) console.log(`${prefix}  Editor (truncated): ${w.settings.editor.substring(0, 150)}`);
    if (w.settings.form_fields) {
      console.log(`${prefix}  Form Fields:`);
      w.settings.form_fields.forEach(f => {
        console.log(`${prefix}    - Field type: ${f.field_type}, label: ${f.field_label}, placeholder: ${f.placeholder}`);
      });
    }
  }
};

const printElement = (el, depth = 0) => {
  const prefix = '  '.repeat(depth);
  console.log(`${prefix}Element: ${el.elType || el.widgetType} (ID: ${el.id})`);
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
