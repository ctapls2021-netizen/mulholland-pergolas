const fs = require('fs');
let content = fs.readFileSync('src/components/PergolasHero.astro', 'utf8');

const parts = content.split('<div class="hero-form-col" id="estimate">');
if (parts.length > 2) {
  const before = parts[0];
  let after = parts[parts.length - 1];
  const afterParts = after.split('<!-- /hero-form-col -->');
  after = '<!-- /hero-form-col -->' + afterParts.slice(1).join('<!-- /hero-form-col -->');
  content = before + '<div class="hero-form-col" id="estimate">' + afterParts[0] + after;
  fs.writeFileSync('src/components/PergolasHero.astro', content, 'utf8');
  console.log('Cleaned hero-form-col! count was ' + parts.length);
} else {
  console.log('No duplicates found.');
}
