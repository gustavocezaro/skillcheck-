import fs from 'fs';
import path from 'path';

const distDir = './dist';
const srcLanding = './site-source/landing';
const destLanding = './dist/landing';

console.log('Running post-build static assets copy...');

// 1. Copy index.html from site-source to dist
try {
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  fs.copyFileSync('./site-source/index.html', './dist/index.html');
  console.log('- Copied index.html to dist/index.html');
  fs.copyFileSync('./site-source/favicon.svg', './dist/favicon.svg');
  console.log('- Copied favicon.svg to dist/favicon.svg');
} catch (err) {
  console.error('Failed to copy root files:', err.message);
}

// 2. Copy the entire raw landing folder to dist/landing
try {
  if (fs.existsSync(srcLanding)) {
    if (!fs.existsSync(destLanding)) {
      fs.mkdirSync(destLanding, { recursive: true });
    }
    const files = fs.readdirSync(srcLanding);
    let count = 0;
    for (const file of files) {
      const srcFile = path.join(srcLanding, file);
      const destFile = path.join(destLanding, file);
      
      // Skip if it is a directory
      if (fs.lstatSync(srcFile).isDirectory()) continue;
      
      fs.copyFileSync(srcFile, destFile);
      count++;
    }
    console.log(`- Copied ${count} raw landing files to dist/landing/`);
  }
} catch (err) {
  console.error('Failed to copy landing files:', err.message);
}

// 3. Copy the assets directory (including tevonlogo.png) to dist/landing/assets
try {
  const srcAssets = './site-source/landing/assets';
  const destAssets = './dist/landing/assets';
  if (fs.existsSync(srcAssets)) {
    if (!fs.existsSync(destAssets)) {
      fs.mkdirSync(destAssets, { recursive: true });
    }
    const files = fs.readdirSync(srcAssets);
    let count = 0;
    for (const file of files) {
      const srcFile = path.join(srcAssets, file);
      const destFile = path.join(destAssets, file);
      if (fs.lstatSync(srcFile).isDirectory()) continue;
      fs.copyFileSync(srcFile, destFile);
      count++;
    }
    console.log(`- Copied ${count} asset files to dist/landing/assets/`);
  }
} catch (err) {
  console.error('Failed to copy assets:', err.message);
}

console.log('Static assets copy completed successfully.');

