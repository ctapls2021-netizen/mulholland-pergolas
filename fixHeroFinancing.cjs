const fs = require('fs');

let content = fs.readFileSync('src/components/PergolasHero.astro', 'utf8');

// 1. Remove all old raw HTML financing bars from mobile wrapper
// Look for <!-- FINANCING BAR --> up to </div> right before <!-- RIGHT COLUMN
const regex = /<!-- FINANCING BAR[\s\S]*?<div class="financing-bar financing-bar--mobile">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;
content = content.replace(regex, '');

// Also remove any existing mobile-financing-only just in case
content = content.replace(/<div class="mobile-financing-only">[\s\S]*?<\/div>\s*/g, '');

// 2. Add the import if not present
if (!content.includes('import PergolasFinancing')) {
  content = content.replace('import \'../styles/global.css\';', 'import \'../styles/global.css\';\nimport PergolasFinancing from \'./PergolasFinancing.astro\';');
}

// 3. Insert the component before the form
const insertTarget = '<!-- RIGHT COLUMN: Form -->';
content = content.replace(insertTarget, '<div class="mobile-financing-only">\n  <PergolasFinancing />\n </div>\n\n <!-- RIGHT COLUMN: Form -->');

fs.writeFileSync('src/components/PergolasHero.astro', content, 'utf8');
console.log('Fixed PergolasHero.astro with the actual component carefully!');
