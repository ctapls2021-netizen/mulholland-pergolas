const fs = require('fs');
const desktop = fs.readFileSync('src/components/PergolasHero.astro', 'utf8');
const mobile = fs.readFileSync('src/components/PergolasHeroMobileBackup.astro', 'utf8');

const getParts = (content) => {
  const parts = content.split('<style>');
  let html = parts[0];
  let css = parts[1] ? parts[1].split('</style>')[0] : '';
  html = html.replace(/---\r?\n[\s\S]*?\r?\n---/, '').trim();
  return { html, css };
};

const d = getParts(desktop);
const m = getParts(mobile);

const newContent = `---
import '../styles/global.css';
---
<div class="hero-desktop-wrapper">
${d.html}
</div>

<div class="hero-mobile-wrapper">
${m.html}
</div>

<style>
  .hero-desktop-wrapper { display: block; }
  .hero-mobile-wrapper { display: none; }
  
  @media (max-width: 1200px) {
    .hero-desktop-wrapper { display: none !important; }
    .hero-mobile-wrapper { display: block !important; }
  }

${d.css}

${m.css}
</style>
`;

fs.writeFileSync('src/components/PergolasHero.astro', newContent, 'utf8');
console.log('Merged successfully!');
