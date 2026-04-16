const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  { name: 'home.jpg', width: 800 },
  { name: 'hero_background_image.jpg', width: 1200 }
];

async function optimize() {
  console.log('Starting image optimization...');
  
  for (const img of images) {
    const inputPath = path.join(__dirname, 'public', img.name);
    const outputPath = path.join(__dirname, 'public', img.name.replace('.jpg', '.webp'));
    
    if (fs.existsSync(inputPath)) {
      console.log(`Optimizing ${img.name}...`);
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .resize(img.width)
          .toFile(outputPath);
        console.log(`Created ${outputPath}`);
      } catch (err) {
        console.error(`Error optimizing ${img.name}:`, err.message);
      }
    } else {
      console.warn(`File not found: ${inputPath}`);
    }
  }
}

optimize();
