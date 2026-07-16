const fs = require('fs');

const fileContent = fs.readFileSync('page_1801_elementor_data.json', 'utf8');
const data = JSON.parse(fileContent);

console.log('Total sections:', data.length);
data.forEach((sec, sIdx) => {
  console.log(`\nSection ${sIdx + 1} ID: ${sec.id}`);
  if (sec.settings) console.log(`  Settings:`, JSON.stringify(sec.settings));
  sec.elements.forEach((col, cIdx) => {
    console.log(`  Column ${cIdx + 1} ID: ${col.id}`);
    col.elements.forEach((widget, wIdx) => {
      console.log(`    Widget ${wIdx + 1}: ${widget.widgetType || widget.elType} (ID: ${widget.id})`);
      if (widget.settings) {
        if (widget.settings.title) console.log(`      Title: ${widget.settings.title}`);
        if (widget.settings.editor) console.log(`      Editor text (truncated): ${widget.settings.editor.substring(0, 300)}`);
        if (widget.settings.form_fields) console.log(`      Form Fields:`, JSON.stringify(widget.settings.form_fields));
      }
    });
  });
});
