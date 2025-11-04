const fs = require('fs');
const path = require('path');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.tsx?$/.test(entry.name)) {
      let text = fs.readFileSync(full, 'utf8');
      const newText = text.replace(/(["'])([^"']+?)@\d[^"']*\1/g, (m, q, pkg) => `${q}${pkg}${q}`);
      if (newText !== text) {
        fs.writeFileSync(full, newText, 'utf8');
        console.log('Updated:', full);
      }
    }
  }
}

walk(path.join(__dirname, '..', 'src'));
console.log('Done');
