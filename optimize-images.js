import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = 'd:/TechnoSky_Official/printsMatrix/frontend/public/hero_background_image.webp';
const outputPath = 'd:/TechnoSky_Official/printsMatrix/frontend/public/hero_background_image.webp';

async function convert() {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log('Successfully converted hero_background_image.webp to webp');
    
    // Also optimize the original JPG if we want to keep it as fallback
    const optimizedJpgPath = 'd:/TechnoSky_Official/printsMatrix/frontend/public/hero_background_image_optimized.webp';
    await sharp(inputPath)
      .jpeg({ quality: 75, progressive: true })
      .toFile(optimizedJpgPath);
    console.log('Successfully optimized hero_background_image.webp');

  } catch (error) {
    console.error('Error during conversion:', error);
  }
}

convert();
