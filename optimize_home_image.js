import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function optimizeImage() {
    const inputPath = 'public/home.webp';
    const outputPath = 'public/home.webp';

    try {
        const info = await sharp(inputPath)
            .resize(800)
            .webp({ quality: 75, effort: 6 })
            .toFile(outputPath);
        
        console.log(`Successfully optimized image:`);
        console.log(`Original: ${fs.statSync(inputPath).size} bytes`);
        console.log(`New: ${info.size} bytes`);
        console.log(`Saved: ${fs.statSync(inputPath).size - info.size} bytes`);
    } catch (err) {
        console.error('Error optimizing image:', err);
    }
}

optimizeImage();
