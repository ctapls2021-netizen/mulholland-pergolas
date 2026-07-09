const fs = require('fs');

let content = fs.readFileSync('src/components/PergolasHero.astro', 'utf8');

const html = `
 <!-- FINANCING BAR — solo mobile, entre hero y form -->
 <div class="financing-bar financing-bar--mobile">
   <div class="financing-inner">
     <p class="financing-text">
       <span class="financing-text-lines">
         <span class="financing-line-rule"></span>
         <span class="financing-label">
           <span class="financing-gold">0% FINANCING</span>
           <span class="financing-white"> AVAILABLE</span>
         </span>
         <span class="financing-line-rule"></span>
       </span>
     </p>
     <div class="financing-cards">
      <img src="/assets/images/hero/cc-paypal 1.svg" alt="PayPal" class="financing-card-icon" />
      <img src="/assets/images/hero/cc-amex 1.svg" alt="Amex" class="financing-card-icon" />
      <img src="/assets/images/hero/cc-discover 1.svg" alt="Discover" class="financing-card-icon" />
      <img src="/assets/images/hero/cc-mastercard 1.svg" alt="Mastercard" class="financing-card-icon" />
      <img src="/assets/images/hero/cc-visa 1.svg" alt="Visa" class="financing-card-icon" />
    </div>
   </div>
 </div>
`;

// Insert the HTML just before the mobile hero-form-col
// Wait, hero-form-col only exists ONCE in the file because it's ONLY in the mobile section! (Desktop uses form-container).
// Let's verify that hero-form-col is there.
const target = '<!-- RIGHT COLUMN: Form -->\n <div class="hero-form-col" id="estimate">';
if (content.includes(target)) {
  content = content.replace(target, html + '\n' + target);
} else {
  // Try looser
  const looseTarget = '<div class="hero-form-col" id="estimate">';
  content = content.replace(looseTarget, html + '\n' + looseTarget);
}

fs.writeFileSync('src/components/PergolasHero.astro', content, 'utf8');
console.log('Added mobile financing bar back.');

// Now let's update PergolasFinancing.astro to hide it on mobile
let financing = fs.readFileSync('src/components/PergolasFinancing.astro', 'utf8');
if (!financing.includes('display: none')) {
  financing = financing.replace('@media (max-width: 1200px) {', '@media (max-width: 1200px) {\n    .pergolas-financing {\n      display: none !important;\n    }');
  fs.writeFileSync('src/components/PergolasFinancing.astro', financing, 'utf8');
  console.log('Hid standalone financing on mobile.');
}
