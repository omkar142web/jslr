import fs from 'fs';
import path from 'path';

const DATA_DIR = path.resolve('data');

if (!fs.existsSync(DATA_DIR)) {
  console.error("Data directory not found");
  process.exit(1);
}

const files = fs.readdirSync(DATA_DIR);

for (const file of files) {
  if (file.endsWith('.js') && file !== 'registry.js') {
    const filePath = path.join(DATA_DIR, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Naively extract the object using regex/eval
    let match = content.match(/export const [a-zA-Z0-9_]+ = (\{[\s\S]*?\});/);
    if (!match) {
        match = content.match(/export const [a-zA-Z0-9_]+ = (\[[\s\S]*?\]);/);
    }

    if (match) {
      try {
        const obj = new Function('return ' + match[1])();
        const jsonPath = path.join(DATA_DIR, file.replace('.js', '.json'));
        fs.writeFileSync(jsonPath, JSON.stringify(obj, null, 2));
        console.log(`Generated JSON for course: ${file}`);
      } catch (e) {
        console.error(`Error processing course file ${file}:`, e);
      }
    }
  }
}

// Ensure registry JSON is generated
const registryPath = path.join(DATA_DIR, 'registry.js');
if (fs.existsSync(registryPath)) {
  const content = fs.readFileSync(registryPath, 'utf-8');
  const cleanContent = content.replace(/import .*?\n/g, '').replace(/[\s\S]*?export const courseRegistry =/, '').trim().replace(/;$/, '');
  
  // To evaluate properties like `course: javascriptCourse`, replace them with a string
  const evalContent = cleanContent.replace(/course:\s*([a-zA-Z0-9_]+)/g, "course: '$1'");
  
  try {
    const registryObj = new Function('return ' + evalContent)();
    
    // Process domains to map course var to courseFile
    Object.values(registryObj).forEach(domain => {
      Object.values(domain.subjects || {}).forEach(subj => {
        if (subj.course && subj.course !== 'null') {
          subj.courseVar = subj.course;
          subj.courseFile = `./${subj.course.replace('Course', '').toLowerCase()}.js`;
          // Note: our seed data for js is javascript.js, and variable is javascriptCourse
        } else {
          subj.courseVar = '';
          subj.courseFile = '';
        }
        delete subj.course;
      });
    });

    const jsonPath = path.join(DATA_DIR, 'registry.json');
    fs.writeFileSync(jsonPath, JSON.stringify(registryObj, null, 2));
    console.log(`Generated JSON for registry`);
  } catch (e) {
    console.error(`Error processing registry file:`, e);
  }
}

console.log("Seeding complete!");
