const fs = require('fs');
let content = fs.readFileSync('src/components/PergolasHero.astro', 'utf8');

// Find and remove the financing bar block in mobile wrapper
// It starts with <!-- FINANCING BAR
// and ends with </div> just before <!-- RIGHT COLUMN: Form -->
const regex = /<!-- FINANCING BAR[\s\S]*?<div class="financing-bar financing-bar--mobile">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

if (content.match(regex)) {
  content = content.replace(regex, '');
  fs.writeFileSync('src/components/PergolasHero.astro', content, 'utf8');
  console.log('Removed financing bar from mobile hero.');
} else {
  console.log('Could not find financing bar with regex. Let us try a looser one.');
  // Looser regex just in case
  const looseRegex = /<div class="financing-bar financing-bar--mobile">[\s\S]*?<!-- RIGHT COLUMN/
  if (content.match(looseRegex)) {
    content = content.replace(looseRegex, '<!-- RIGHT COLUMN');
    fs.writeFileSync('src/components/PergolasHero.astro', content, 'utf8');
    console.log('Removed financing bar via loose regex.');
  }
}
