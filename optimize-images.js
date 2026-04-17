import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = 'd:/TechnoSky_Official/printsMatrix/frontend/public/hero_background_image.webp';
const outputPath = 'd:/TechnoSky_Official/printsMatrix/frontend/public/hero_background_image.webp';

async function convert() {
  try {
    await sharp(inputPath)
      .resize(1200)
      .webp({ quality: 75 })
      .toFile(outputPath);
    console.log('Successfully optimized hero_background_image.webp');
    
    // Also generate a smaller version for mobile
    const mobilePath = 'd:/TechnoSky_Official/printsMatrix/frontend/public/hero_background_image_mobile.webp';
    await sharp(inputPath)
      .resize(800)
      .webp({ quality: 70 })
      .toFile(mobilePath);
    console.log('Successfully generated mobile version');

  } catch (error) {
    console.error('Error during conversion:', error);
  }
}

convert();
