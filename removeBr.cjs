const fs = require('fs');
let content = fs.readFileSync('src/components/PergolasHero.astro', 'utf8');
content = content.replace(/<span class="pergolas-title-gold">Save 20%<\/span><br \/>/g, '<span class="pergolas-title-gold">Save 20%</span>');
fs.writeFileSync('src/components/PergolasHero.astro', content, 'utf8');
console.log('Replaced br tags');
