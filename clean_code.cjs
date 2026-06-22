const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (err.code === 'ENOTDIR' || err.code === 'EBADF') filelist.push(dirFile);
    }
  });
  return filelist;
};

const files = walkSync('./src').filter(f => f.endsWith('.astro'));

const replacements = [
  { regex: /\/\*.*?as requested.*?\*\//gi, replace: '' },
  { regex: /\/\*.*?User requested.*?\*\//gi, replace: '' },
  { regex: /\/\*.*?note: user wrote.*?\*\//gi, replace: '' },
  { regex: /\/\*.*?Figma.*?\*\//gi, replace: '' },
  { regex: /\/\*.*?Removed extra space.*?\*\//gi, replace: '' },
  { regex: /\/\*.*?As seen in the blue bounding box.*?\*\//gi, replace: '' },
  { regex: /\/\*.*?Match design specifications.*?\*\//gi, replace: '' },
  { regex: /\/\*.*?Removed left padding.*?\*\//gi, replace: '' },
  { regex: /\/\*.*?Adjusted for visual match.*?\*\//gi, replace: '' },
  { regex: /\/\*.*?Approximate size to fit box.*?\*\//gi, replace: '' },
  { regex: /\/\*.*?Assuming regular\/medium.*?\*\//gi, replace: '/* Regular/Medium weight */' },
  { regex: /\/\*.*?Requested exact width.*?\*\//gi, replace: '' },
  { regex: /\/\*.*?Slightly larger icon based on screenshot.*?\*\//gi, replace: '/* Scale icon for visibility */' },
  { regex: /\/\*.*?ExtraBold.*?\*\//g, replace: '/* Extra Bold */' },
  { regex: /\/\*.*?SemiBold.*?\*\//g, replace: '/* Semi Bold */' },
  { regex: /\/\*.*?Regular.*?\*\//g, replace: '/* Regular */' },
  { regex: /\/\*.*?Medium.*?\*\//g, replace: '/* Medium */' },
  { regex: /\/\*.*?Bold.*?\*\//g, replace: '/* Bold */' },
  // Spanish to English cleanups
  { regex: /<!--.*?Top reviews row.*?-->/gi, replace: '<!-- Top Reviews Row -->' },
  { regex: /<!--.*?Header texts.*?-->/gi, replace: '<!-- Header Content -->' },
  { regex: /<!--.*?Grid.*?-->/gi, replace: '<!-- Data Grid -->' },
  { regex: /<!--.*?Top Block.*?-->/gi, replace: '<!-- Top Section -->' },
  { regex: /<!--.*?Blue Bar.*?-->/gi, replace: '<!-- Primary Banner -->' },
  { regex: /<!--.*?Bottom Block.*?-->/gi, replace: '<!-- Bottom Section -->' },
  { regex: /<!--.*?Desktop single button.*?-->/gi, replace: '<!-- Desktop CTA -->' },
  { regex: /<!--.*?Mobile two buttons.*?-->/gi, replace: '<!-- Mobile CTA -->' },
  // Clean up any remaining extra spaces
  { regex: / \/\* \*\//g, replace: '' }
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Apply targeted replacements
  replacements.forEach(r => {
    content = content.replace(r.regex, r.replace);
  });

  // Clean up any double spaces left by removed comments
  content = content.replace(/  +/g, (match) => match.includes('\n') ? match : ' ');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Cleaned: ${file}`);
  }
});
console.log('Cleanup complete.');
