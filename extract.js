const fs = require("fs");
const path = require("path");
const acorn = require("acorn");
const astring = require("astring");

const SCRIPT_PATH = path.join(__dirname, "script.js");
const CONTENT_DIR = path.join(__dirname, "content");
const DATA_DIR = path.join(__dirname, "data");
const JS_DIR = path.join(__dirname, "js");

// Ensure directories exist
[CONTENT_DIR, DATA_DIR, JS_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const content = fs.readFileSync(SCRIPT_PATH, "utf-8");

const START_MARKER = "/* ============================================================\r\n   SECTION 1: COURSE DATA";
const START_MARKER_LF = "/* ============================================================\n   SECTION 1: COURSE DATA";

let startIndex = content.indexOf(START_MARKER);
if (startIndex === -1) {
  startIndex = content.indexOf(START_MARKER_LF);
}

const SPLIT_MARKER = "/* ============================================================\r\n   SECTION 3: APP INITIALIZATION";
const SPLIT_MARKER_LF = "/* ============================================================\n   SECTION 3: APP INITIALIZATION";

let splitIndex = content.indexOf(SPLIT_MARKER);
if (splitIndex === -1) {
  splitIndex = content.indexOf(SPLIT_MARKER_LF);
}

const dataPart = content.substring(startIndex, splitIndex);
const appPart = content.substring(splitIndex);

// Parse logic
let ast;
try {
  ast = acorn.parse(dataPart, { ecmaVersion: 2020 });
} catch (e) {
  console.error("Acorn Parse Error:", e.message);
  process.exit(1);
}

// Find javascriptCourse declaration
let courseNode = null;
let courseRegistryNode = null;

ast.body.forEach(node => {
  if (node.type === "VariableDeclaration") {
    node.declarations.forEach(decl => {
      if (decl.id.name === "javascriptCourse") {
        courseNode = decl.init;
      }
      if (decl.id.name === "courseRegistry") {
        courseRegistryNode = decl.init;
      }
    });
  }
});

// Convert AST nodes to JS objects using simple deep copy evaluation
// We can reconstruct the javascriptCourse object using new Function 
// but we just generate code and eval that specific code with no extra comments.
const courseCode = astring.generate(courseNode);

// Re-evaluate just the pure data objects without external garbage
let javascriptCourse;
try {
  javascriptCourse = new Function("return " + courseCode + ";")();
} catch(e) {
  console.error("Eval error on pure course AST string:", e);
  process.exit(1);
}

// Extract the Text properties that were dynamically added in Section 2
ast.body.forEach(node => {
  if (node.type === "ExpressionStatement" && node.expression.type === "AssignmentExpression") {
    if (node.expression.left.type === "MemberExpression") {
      // Find assignments like: javascriptCourse.sections[4].lessons[0].Text = `...`;
      try {
        const generatedAccess = astring.generate(node.expression.left);
        
        let val = "";
        if (node.expression.right.type === "TemplateLiteral") {
            // For template literals we just want the raw string values combined
            val = node.expression.right.quasis.map(q => q.value.raw).join("");
        } else if (node.expression.right.type === "Literal") {
            val = node.expression.right.value;
        }

        let parts = generatedAccess.split('.');
        if(parts[0] === 'javascriptCourse') {
            let target = javascriptCourse;
            for(let i=1; i < parts.length - 1; i++) {
                let prop = parts[i];
                if(prop.endsWith(']')) {
                    let name = prop.substring(0, prop.indexOf('['));
                    let idx = parseInt(prop.substring(prop.indexOf('[')+1, prop.length-1));
                    target = target[name][idx];
                } else {
                    target = target[prop];
                }
            }
            let lastProp = parts[parts.length-1];
            target[lastProp] = val;
        }
      } catch(e) {
        // ignore
        console.error(e)
      }
    }
  }
});


const courseId = "javascript";
const courseContentDir = path.join(CONTENT_DIR, courseId);
if (!fs.existsSync(courseContentDir)) fs.mkdirSync(courseContentDir, { recursive: true });

const searchIndex = [];

// Extract HTML content
javascriptCourse.sections.forEach((section, sIdx) => {
  const sectionId = section.id || `section-${sIdx}`;
  const sectionDir = path.join(courseContentDir, sectionId);
  
  if (section.lessons) {
    if (!fs.existsSync(sectionDir)) fs.mkdirSync(sectionDir, { recursive: true });
    
    section.lessons.forEach((lesson, lIdx) => {
      const slug = lesson.slug || `lesson-${lIdx}`;
      if (lesson.Text) {
        const filePath = path.join(sectionDir, `${slug}.html`);
        fs.writeFileSync(filePath, lesson.Text, "utf-8");
        
        // Strip out HTML tags for search snippet
        const plainText = lesson.Text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
        searchIndex.push({
          courseId,
          sectionId,
          lessonIndex: lIdx,
          title: lesson.title,
          snippet: plainText.substring(0, 200) + "..."
        });
        
        lesson.contentUrl = `content/${courseId}/${sectionId}/${slug}.html`;
        delete lesson.Text;
      } else {
        searchIndex.push({
          courseId,
          sectionId,
          lessonIndex: lIdx,
          title: lesson.title,
          snippet: lesson.title
        });
      }
    });
  }
  
  if (section.subsections) {
    section.subsections.forEach((sub, subIdx) => {
      const subDir = path.join(sectionDir, `sub-${subIdx}`);
      if (sub.lessons) {
        if (!fs.existsSync(subDir)) fs.mkdirSync(subDir, { recursive: true });
        sub.lessons.forEach((lesson, lIdx) => {
          const slug = lesson.slug || `lesson-${lIdx}`;
          if (lesson.Text) {
            const filePath = path.join(subDir, `${slug}.html`);
            fs.writeFileSync(filePath, lesson.Text, "utf-8");
            const plainText = lesson.Text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
            searchIndex.push({
              courseId,
              sectionId,
              subSectionIndex: subIdx,
              lessonIndex: lIdx,
              title: lesson.title,
              snippet: plainText.substring(0, 200) + "..."
            });
            lesson.contentUrl = `content/${courseId}/${sectionId}/sub-${subIdx}/${slug}.html`;
            delete lesson.Text;
          } else {
            searchIndex.push({
              courseId,
              sectionId,
              subSectionIndex: subIdx,
              lessonIndex: lIdx,
              title: lesson.title,
              snippet: lesson.title
            });
          }
        });
      }
    });
  }
});

// Write search index
fs.writeFileSync(path.join(DATA_DIR, "search_index.json"), JSON.stringify(searchIndex, null, 2), "utf-8");

// Write clean data files
const jsCourseExport = `export const javascriptCourse = ${JSON.stringify(javascriptCourse, null, 2)};`;
fs.writeFileSync(path.join(DATA_DIR, "javascript.js"), jsCourseExport, "utf-8");

const registryExport = `import { javascriptCourse } from './javascript.js';\n\nexport const courseRegistry = [\n  {\n    id: "javascript",\n    title: "JavaScript",\n    iconText: "JS",\n    description: "Learn JavaScript from fundamentals to advanced topics.",\n    course: javascriptCourse\n  }\n];`;
fs.writeFileSync(path.join(DATA_DIR, "registry.js"), registryExport, "utf-8");

// Write app.js
fs.writeFileSync(path.join(JS_DIR, "app.js"), appPart, "utf-8");

// Back up original and move script.js
fs.renameSync(SCRIPT_PATH, SCRIPT_PATH + ".bak");

console.log("Extraction successful!");
