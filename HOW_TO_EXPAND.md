# How to Expand ThinkBase

Congratulations on the transition to the multi-domain ThinkBase structure! 

To add new content, you just need to follow a consistent pattern to register the subject, define its structure, and write its HTML lessons. 

Here is the step-by-step Standard Operating Procedure (SOP) for expanding your platform:

---

## 1. Create the Course Data File
Create a new file in the `data/` folder that outlines the syllabus for your new subject. 
_Example: `data/python.js`_

This file should follow the exact same structure as `javascript.js`.

```javascript
// data/python.js
export const pythonCourse = {
  title: "Python Complete Guide",
  slug: "python-complete-guide",
  description: "Learn Python from the ground up.",
  level: "beginner",
  progress: 0,
  sections: [
    {
      id: "intro",
      title: "An Introduction to Python",
      description: "Basic introduction.",
      lessons: [
        {
          title: "Hello World",
          contentUrl: "domain/coding/python/intro/hello-world.html",
          tags: ["python", "intro"]
        }
      ]
    }
  ]
};
```

## 2. Register Your New Subject
Open up `data/registry.js`. 

First, import your new data file at the top:
```javascript
import { pythonCourse } from './python.js';
```

Then, find the domain (e.g., `coding`) and add your new subject to its `subjects` block:
```javascript
export const courseRegistry = {
  coding: {
    // ... metadata ...
    subjects: {
      javascript: {
         // ... js stuff ...
      },
      python: { // <--- ADD THIS
        id: "python",
        title: "Python",
        iconText: "Py",
        description: "Master Python programming for web development and data science.",
        course: pythonCourse // <--- LINK YOUR DATA HERE
      }
    }
  }
}
```

## 3. Create the Domain Folders
Inside the `domain/` directory, create the folders matching your new structure.
_Example:_
```
domain/
   coding/
      python/
         intro/
           hello-world.html
```

## 4. Write the Content
Create the actual `.html` files for your lessons in those folders. 

```html
<!-- domain/coding/python/intro/hello-world.html -->
<h2 class="section-title">Hello, World!</h2>
<p>In Python, printing is easy:</p>
<pre class="code-block"><code class="language-python">print("Hello, World!")</code></pre>
```

---

### Pro-Tips:
1. **Adding a entirely new Domain:** (e.g., "Engineering"). Just add a new block to `data/registry.js` alongside `coding`, `science`, etc., and create the folder `domain/engineering/`.
2. **Drafting Content:** If you add a lesson to your `data/<subject>.js` file but haven't written the HTML file yet, just omit the `contentUrl` property! The course viewer will recognize it as a draft and generate a beautiful "🚧 Coming Soon" UI block.
