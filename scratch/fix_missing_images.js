import fs from 'fs';
import path from 'path';

const baseDir = path.resolve('public/images');
const categories = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

let fixedCount = 0;

categories.forEach(cat => {
  const catDir = path.join(baseDir, cat);
  const files = fs.readdirSync(catDir);
  const validFiles = files.filter(f => fs.statSync(path.join(catDir, f)).size > 0);
  
  if (validFiles.length === 0) return;

  const expectedFiles = {
    clinic: ['hero.jpg', 'about-main.jpg', 'about-secondary.jpg', 'service-1.jpg', 'service-2.jpg', 'service-3.jpg', 'service-4.jpg', 'service-5.jpg', 'service-6.jpg', 'doctor-1.jpg', 'doctor-2.jpg', 'doctor-3.jpg', 'gallery-1.jpg', 'gallery-2.jpg', 'gallery-3.jpg', 'gallery-4.jpg', 'avatar-1.jpg', 'avatar-2.jpg', 'avatar-3.jpg'],
    dental: ['hero.jpg', 'about-main.jpg', 'about-secondary.jpg', 'service-1.jpg', 'service-2.jpg', 'service-3.jpg', 'service-4.jpg', 'doctor-1.jpg', 'doctor-2.jpg'],
    salon: ['hero.jpg', 'about-main.jpg', 'about-secondary.jpg', 'treatment-1.jpg', 'treatment-2.jpg', 'treatment-3.jpg', 'treatment-4.jpg', 'stylist-1.jpg', 'stylist-2.jpg'],
    gym: ['hero.jpg', 'about-main.jpg', 'about-secondary.jpg', 'trainer-1.jpg', 'trainer-2.jpg', 'trainer-3.jpg', 'trainer-4.jpg', 'program-1.jpg', 'program-2.jpg', 'program-3.jpg'],
    coaching: ['hero.jpg', 'about-main.jpg', 'about-secondary.jpg', 'course-1.jpg', 'course-2.jpg', 'course-3.jpg', 'course-4.jpg', 'mentor-1.jpg', 'mentor-2.jpg'],
    consulting: ['hero.jpg', 'about-main.jpg', 'about-secondary.jpg', 'service-1.jpg', 'service-2.jpg', 'service-3.jpg', 'service-4.jpg'],
    realestate: ['hero.jpg', 'about-main.jpg', 'about-secondary.jpg', 'prop-1.jpg', 'prop-2.jpg', 'prop-3.jpg', 'prop-4.jpg', 'prop-5.jpg', 'prop-6.jpg'],
    restaurant: ['hero.jpg', 'about-main.jpg', 'about-secondary.jpg', 'dish-1.jpg', 'dish-2.jpg', 'dish-3.jpg', 'dish-4.jpg', 'dish-5.jpg', 'dish-6.jpg']
  };

  const expected = expectedFiles[cat] || [];
  expected.forEach((file, idx) => {
    const filePath = path.join(catDir, file);
    if (!fs.existsSync(filePath) || fs.statSync(filePath).size === 0) {
      const fallbackFile = path.join(catDir, validFiles[idx % validFiles.length]);
      fs.copyFileSync(fallbackFile, filePath);
      console.log(`Fixed missing ${cat}/${file} using fallback ${validFiles[idx % validFiles.length]}`);
      fixedCount++;
    }
  });
});

console.log(`All missing images fixed! Total replaced: ${fixedCount}`);
