const fs = require('fs');

try {
  const content = fs.readFileSync('home_page_elementor_data_5721.txt', 'utf8');
  // Use eval to parse it loosely since it has unescaped control characters
  const data = eval(content);
  fs.writeFileSync('home_page_elementor_data_5721.json', JSON.stringify(data, null, 2));
  console.log('Successfully parsed and formatted home_page_elementor_data_5721.json using eval!');
} catch (err) {
  console.error('Error formatting JSON:', err.message);
}
