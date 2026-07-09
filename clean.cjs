const fs = require('fs');

const dContent = fs.readFileSync('src/components/PergolasHeroDesktopBackup.astro', 'utf8');
const dParts = dContent.split('<style>');
const dHtmlRaw = dParts[0].replace(/---\r?\n[\s\S]*?\r?\n---/, '').trim();
const dCssRaw = dParts[1] ? dParts[1].split('</style>')[0] : '';

const mContent = fs.readFileSync('src/components/PergolasHeroMobileBackup.astro', 'utf8');
const mParts = mContent.split('<style>');
const mHtmlRaw = mParts[0].replace(/---\r?\n[\s\S]*?\r?\n---/, '').trim();
let mCssRaw = mParts[1] ? mParts[1].split('</style>')[0] : '';

let cleanMHtml = mHtmlRaw;

// Remove everything after the FIRST <!-- /hero-form-col -->
const formEndMarker = '<!-- /hero-form-col -->';
const formEndIndex = cleanMHtml.indexOf(formEndMarker);
if (formEndIndex !== -1) {
  cleanMHtml = cleanMHtml.substring(0, formEndIndex + formEndMarker.length);
  // wait, what if there's a </div><!-- /hero-inner --> and </section> after it?
  // Let's add them back!
  cleanMHtml += '\n </div><!-- /hero-inner -->\n</section>';
}

// Ensure no duplicate <h1 class="hero-title">
const h1Regex = /<h1 class="hero-title">[\s\S]*?<\/h1>/g;
const h1Matches = cleanMHtml.match(h1Regex);
if (h1Matches && h1Matches.length > 1) {
  let first = true;
  cleanMHtml = cleanMHtml.replace(h1Regex, (m) => {
    if (first) { first = false; return m; }
    return '';
  });
}

// Ensure no duplicate hero-promo-box
const promoRegex = /<div class="hero-promo-box">[\s\S]*?<\/div>/g;
const promoMatches = cleanMHtml.match(promoRegex);
if (promoMatches && promoMatches.length > 1) {
  let first = true;
  cleanMHtml = cleanMHtml.replace(promoRegex, (m) => {
    if (first) { first = false; return m; }
    return '';
  });
}

// Clean any <br /> inside the title that we removed before
cleanMHtml = cleanMHtml.replace(/<span class="pergolas-title-gold">Save 20%<\/span>\s*<br\s*\/>/g, '<span class="pergolas-title-gold">Save 20%</span>');
cleanMHtml = cleanMHtml.replace(/<span class="pergolas-title-gold">Save 20%<\/span><br \/>/g, '<span class="pergolas-title-gold">Save 20%</span>');

// Clean CSS: make sure .pergolas-title-white has the exact Figma styles, no letter-spacing for gold
mCssRaw = mCssRaw.replace(/\.pergolas-title-white\s*\{[\s\S]*?\}/g, () => {
  return `.pergolas-title-white {
    color: #FFF !important;
    text-align: center !important;
    font-family: 'Raleway', sans-serif !important;
    font-size: 24px !important;
    font-style: normal !important;
    font-weight: 700 !important;
    line-height: 30px !important;
    letter-spacing: -1.5px !important;
  }`;
});
mCssRaw = mCssRaw.replace(/letter-spacing:\s*-1\.5px\s*!important;\s*\n/g, '');

const newContent = `---
import '../styles/global.css';
---
<div class="hero-desktop-wrapper">
${dHtmlRaw}
</div>

<div class="hero-mobile-wrapper">
${cleanMHtml}
</div>

<style>
  .hero-desktop-wrapper { display: block; }
  .hero-mobile-wrapper { display: none; }
  
  @media (max-width: 1200px) {
    .hero-desktop-wrapper { display: none !important; }
    .hero-mobile-wrapper { display: block !important; }
  }

${dCssRaw}

${mCssRaw}
</style>
`;

fs.writeFileSync('src/components/PergolasHero.astro', newContent, 'utf8');
console.log('Cleaned PergolasHero.astro form duplicates completely!');
