import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3050;

app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));

const DATA_DIR = path.join(__dirname, '../data');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// ============== REGISTRY API ==============

app.get('/api/registry', (req, res) => {
  const jsonPath = path.join(DATA_DIR, 'registry.json');
  if (fs.existsSync(jsonPath)) {
    const data = fs.readFileSync(jsonPath, 'utf8');
    res.json(JSON.parse(data));
  } else {
    res.json({}); // Empty registry initially if JSON doesn't exist
  }
});

app.post('/api/registry', (req, res) => {
  const { json, jsContent } = req.body;
  
  if (!json || !jsContent) {
    return res.status(400).json({ error: 'Missing json or jsContent' });
  }

  // Save JSON source of truth
  fs.writeFileSync(path.join(DATA_DIR, 'registry.json'), JSON.stringify(json, null, 2));
  
  // Save JS export file
  fs.writeFileSync(path.join(DATA_DIR, 'registry.js'), jsContent);

  res.json({ success: true, message: 'Registry saved successfully!' });
});

// ============== COURSE API ==============

app.get('/api/course/:id', (req, res) => {
  const courseId = req.params.id;
  const jsonPath = path.join(DATA_DIR, `${courseId}.json`);
  
  if (fs.existsSync(jsonPath)) {
    const data = fs.readFileSync(jsonPath, 'utf8');
    res.json(JSON.parse(data));
  } else {
    // Return empty course structure
    res.json({
      exportVar: `${courseId}Course`,
      title: 'New Course',
      slug: courseId,
      description: '',
      level: 'beginner',
      sections: []
    });
  }
});

app.post('/api/course/:id', (req, res) => {
  const courseId = req.params.id;
  const { json, jsContent } = req.body;
  
  if (!json || !jsContent) {
    return res.status(400).json({ error: 'Missing json or jsContent' });
  }

  // Save JSON source of truth
  fs.writeFileSync(path.join(DATA_DIR, `${courseId}.json`), JSON.stringify(json, null, 2));
  
  // Save JS export file
  fs.writeFileSync(path.join(DATA_DIR, `${courseId}.js`), jsContent);

  res.json({ success: true, message: 'Course saved successfully!' });
});

// List all courses (just looking for .json files)
app.get('/api/courses', (req, res) => {
  try {
    const files = fs.readdirSync(DATA_DIR);
    const courses = files
      .filter(f => f.endsWith('.json') && f !== 'registry.json' && f !== 'search_index.json')
      .map(f => f.replace('.json', ''));
    res.json(courses);
  } catch (error) {
    res.json([]);
  }
});

app.listen(PORT, () => {
  console.log(`Admin Server running at http://localhost:${PORT}`);
});
