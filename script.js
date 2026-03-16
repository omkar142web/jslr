/* ============================================================
   JAVASCRIPT GUIDE — script.js
   Consolidated: Course Data + App Logic (sidebar + content)
   ============================================================ */


/* ============================================================
   SECTION 1: COURSE DATA
   ============================================================ */
const javascriptCourse = {
  title: "JavaScript Complete Guide",
  slug: "javascript-complete-guide",
  description: "A structured learning path covering JavaScript from fundamentals to advanced browser APIs.",
  level: "beginner-to-advanced",
  progress: 0,

  sections: [
    {
      id: "intro",
      title: "An Introduction",
      description: "Basic introduction to JavaScript and development tools.",
      lessons: [
        { title: "An Introduction to JavaScript", slug: "introduction-to-javascript", difficulty: "beginner", duration: "10 min", completed: false },
        { title: "Manuals and specifications",     slug: "manuals-and-specifications", difficulty: "beginner", completed: false },
        { title: "Code editors",                   slug: "code-editors",               difficulty: "beginner", completed: false },
        { title: "Developer console",              slug: "developer-console",           difficulty: "beginner", completed: false },
      ],
    },
    {
      id: "fundamentals",
      title: "JavaScript Fundamentals",
      description: "Core language concepts required for every JavaScript developer.",
      lessons: [
        { title: "Hello, world!",                        slug: "hello-world",          completed: false },
        { title: "Code structure",                       slug: "code-structure",       completed: false },
        { title: 'The modern mode, "use strict"',        slug: "use-strict",           completed: false },
        { title: "Variables",                            slug: "variables",            completed: false },
        { title: "Data types",                           slug: "data-types",           completed: false },
        { title: "Interaction: alert, prompt, confirm",  slug: "interaction",          completed: false },
        { title: "Type Conversions",                     slug: "type-conversion",      completed: false },
        { title: "Basic operators, maths",               slug: "operators",            completed: false },
        { title: "Comparisons",                          slug: "comparisons",          completed: false },
        { title: "Conditional branching: if, '?'",       slug: "if-else",              completed: false },
        { title: "Logical operators",                    slug: "logical-operators",    completed: false },
        { title: "Nullish coalescing operator '??'",     slug: "nullish-coalescing",   completed: false },
        { title: "Loops: while and for",                 slug: "loops",               completed: false },
        { title: "The switch statement",                 slug: "switch",              completed: false },
        { title: "Functions",                            slug: "functions",            completed: false },
        { title: "Function expressions",                 slug: "function-expressions", completed: false },
        { title: "Arrow functions",                      slug: "arrow-functions",      completed: false },
      ],
    },
    {
      id: "code-quality",
      title: "JavaScript Specials",
      description: "Best practices and debugging techniques.",
      lessons: [
        { title: "Code quality" },
        { title: "Debugging in the browser" },
        { title: "Coding Style" },
        { title: "Comments" },
        { title: "Ninja code" },
        { title: "Automated testing with Mocha" },
        { title: "Polyfills and transpilers" },
      ],
    },
    {
      id: "objects-basics",
      title: "Objects: The Basics",
      lessons: [
        { title: "Objects" },
        { title: "Object references and copying" },
        { title: "Garbage collection" },
        { title: 'Object methods, "this"' },
        { title: 'Constructor, operator "new"' },
        { title: "Optional chaining '?.'" },
        { title: "Symbol type" },
        { title: "Object to primitive conversion" },
      ],
    },
    {
      id: "data-types",
      title: "Data Types",
      lessons: [
        {
          title: "Methods of primitives",
          Text: `• Overview of the Topic
• Key Ideas and Explanations
• Supporting Details and Examples
• Final Thoughts and Observations

> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit voluptate quis eveniet molestias illum doloribus esse. Illum nobis consequatur ab recusandae a rerum veniam quibusdam hic quidem accusamus.

> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquid modi quos nesciunt recusandae veniam nostrum doloremque ad autem quae aspernatur soluta accusantium eligendi consequatur quam perspiciatis expedita.

> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facilis quam repellendus provident rem quae nulla reprehenderit iure fuga magni placeat illo sed temporibus.

> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores debitis quo enim dolore recusandae corrupti natus iste aut eligendi saepe et eum illum modi nesciunt ipsum tempore magnam amet.`,
        },
        { title: "Numbers",                         Text: "Numbers - empty for now!!" },
        { title: "Strings",                         Text: "Strings - empty for now!!" },
        { title: "Arrays",                          Text: "Arrays - empty for now!!" },
        { title: "Array methods",                   Text: "Array methods - empty for now!!" },
        { title: "Iterables",                       Text: "Iterables - empty for now!!" },
        { title: "Map and Set",                     Text: "Map and Set - empty for now!!" },
        { title: "WeakMap and WeakSet",             Text: "WeakMap and WeakSet - empty for now!!" },
        { title: "Object.keys, values, entries",    Text: "Object.keys, values, entries - empty for now!!" },
        { title: "Destructuring assignment",        Text: "Destructuring assignment - empty for now!!" },
        { title: "Date and time",                   Text: "Date and time - empty for now!!" },
        { title: "JSON methods, toJSON",            Text: "JSON methods, toJSON - empty for now!!" },
      ],
    },
    {
      id: "advanced-functions",
      title: "Advanced Working With Functions",
      lessons: [
        { title: "Recursion and stack" },
        { title: "Rest parameters and spread syntax" },
        { title: "Variable scope, closure" },
        { title: 'The old "var"' },
        { title: "Global object" },
        { title: "Function object, NFE" },
        { title: 'The "new Function" syntax' },
        { title: "Scheduling: setTimeout and setInterval" },
        { title: "Decorators and forwarding, call/apply" },
        { title: "Function binding" },
        { title: "Arrow functions revisited" },
      ],
    },
    {
      id: "prototypes",
      title: "Prototypes & Inheritance",
      lessons: [
        { title: "Prototypal inheritance" },
        { title: "F.prototype" },
        { title: "Native prototypes" },
        { title: "Prototype methods" },
      ],
    },
    {
      id: "classes",
      title: "Classes",
      lessons: [
        { title: "Class basic syntax" },
        { title: "Class inheritance" },
        { title: "Static properties and methods" },
        { title: "Private and protected properties" },
        { title: "Extending built-in classes" },
        { title: 'Class checking: "instanceof"' },
        { title: "Mixins" },
      ],
    },
    {
      id: "async",
      title: "Promises, Async/Await",
      lessons: [
        { title: "Introduction: callbacks" },
        { title: "Promise" },
        { title: "Promises chaining" },
        { title: "Error handling with promises" },
        { title: "Promise API" },
        { title: "Promisification" },
        { title: "Microtasks" },
        { title: "Async/await" },
      ],
    },
    {
      id: "modules",
      title: "Modules",
      lessons: [
        { title: "Modules introduction" },
        { title: "Export and Import" },
        { title: "Dynamic imports" },
      ],
    },
    {
      id: "browser",
      title: "Browser: Document, Events, Interfaces",
      subsections: [
        {
          title: "Document",
          lessons: [
            { title: "Browser environment, specs" },
            { title: "DOM tree" },
            { title: "Walking the DOM" },
            { title: "Searching: querySelector" },
            { title: "Node properties" },
            { title: "Attributes and properties" },
            { title: "Modifying the document" },
          ],
        },
        {
          title: "Events",
          lessons: [
            { title: "Introduction to browser events" },
            { title: "Bubbling and capturing" },
            { title: "Event delegation" },
            { title: "Browser default actions" },
            { title: "Dispatching custom events" },
          ],
        },
        {
          title: "UI Events",
          lessons: [
            { title: "Mouse events" },
            { title: "Pointer events" },
            { title: "Keyboard events" },
            { title: "Scrolling" },
          ],
        },
        {
          title: "Forms",
          lessons: [
            { title: "Form properties and methods" },
            { title: "focus and blur" },
            { title: "input and change events" },
            { title: "submit event" },
          ],
        },
      ],
    },
  ],
};


/* ============================================================
   SECTION 2: INJECT RICH HTML CONTENT
   Replace the "Numbers" lesson (index 1) with full doc HTML.
   ============================================================ */


javascriptCourse.sections[4].lessons[0].Text = `
<main class="doc">

<header class="doc-header">
<h1 class="doc-title">Methods of Primitives</h1>
<p class="doc-description">
JavaScript allows primitives such as strings and numbers to behave
like objects when accessing properties or methods.
</p>
</header>



<section class="doc-section">

<h2 class="section-title">Primitives vs Objects</h2>

<article class="concept-block">
<h3 class="concept-title">Primitive Values</h3>
<p class="concept-text">
A primitive is a value of a primitive type.
</p>
</article>

<table class="data-table">

<thead>
<tr>
<th>Primitive Types</th>
</tr>
</thead>

<tbody>

<tr><td>string</td></tr>
<tr><td>number</td></tr>
<tr><td>bigint</td></tr>
<tr><td>boolean</td></tr>
<tr><td>symbol</td></tr>
<tr><td>null</td></tr>
<tr><td>undefined</td></tr>

</tbody>

</table>


<article class="concept-block">
<h3 class="concept-title">Objects</h3>
<p class="concept-text">
Objects can store multiple values as properties and may contain functions.
</p>
</article>

<pre class="code-block"><code>
let john = {
name:"John",
sayHi:function(){
alert("Hi buddy!");
}
};

john.sayHi();
</code></pre>

</section>



<section class="doc-section">

<h2 class="section-title">Objects Are Heavier</h2>

<article class="concept-block">
<p class="concept-text">
Objects require additional resources because they store properties,
methods and internal structures.  
Primitives are lightweight and faster.
</p>
</article>

</section>



<section class="doc-section">

<h2 class="section-title">Primitive as an Object</h2>

<article class="concept-block">
<h3 class="concept-title">The JavaScript Solution</h3>
<p class="concept-text">
JavaScript allows primitives to access methods by temporarily wrapping
them inside special objects.
</p>
</article>

<ul class="summary-list">

<li>Primitives remain lightweight values.</li>

<li>Special wrapper objects provide methods.</li>

<li>The wrapper object is created temporarily and destroyed.</li>

</ul>

</section>



<section class="doc-section">

<h2 class="section-title">Wrapper Objects</h2>

<table class="data-table">

<thead>
<tr>
<th>Primitive</th>
<th>Wrapper Object</th>
</tr>
</thead>

<tbody>

<tr>
<td>string</td>
<td>String</td>
</tr>

<tr>
<td>number</td>
<td>Number</td>
</tr>

<tr>
<td>boolean</td>
<td>Boolean</td>
</tr>

<tr>
<td>symbol</td>
<td>Symbol</td>
</tr>

<tr>
<td>bigint</td>
<td>BigInt</td>
</tr>

</tbody>

</table>

</section>



<section class="doc-section">

<h2 class="section-title">Example: String Method</h2>

<article class="example-block">

<pre class="code-block"><code>
let str = "Hello";

alert(str.toUpperCase());
</code></pre>

<p class="example-note">
The primitive string temporarily becomes a String object
so that the method can run.
</p>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">What Happens Internally</h2>

<article class="concept-block">
<p class="concept-text">
When calling a method on a primitive:
</p>
</article>

<ul class="summary-list">

<li>A temporary wrapper object is created.</li>

<li>The method runs on that object.</li>

<li>The object is destroyed.</li>

</ul>

</section>



<section class="doc-section">

<h2 class="section-title">Number Methods</h2>

<article class="example-block">

<pre class="code-block"><code>
let n = 1.23456;

alert(n.toFixed(2));
</code></pre>

<p class="example-note">
The method rounds the number to the given precision.
</p>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Constructors for Wrappers</h2>

<article class="concept-block">
<p class="concept-text">
JavaScript also has constructors like
<code>String</code>, <code>Number</code>, and <code>Boolean</code>.
They can create wrapper objects, but using them with <code>new</code> is discouraged.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
alert(typeof 0);

alert(typeof new Number(0));
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Objects Are Always Truthy</h2>

<article class="example-block">

<pre class="code-block"><code>
let zero = new Number(0);

if(zero){
alert("zero is truthy!?!");
}
</code></pre>

</article>

<div class="note-block">
Objects are always truthy in JavaScript,
even if they contain values like 0 or false.
</div>

</section>



<section class="doc-section">

<h2 class="section-title">Type Conversion Using Constructors</h2>

<article class="concept-block">
<p class="concept-text">
Using <code>String()</code>, <code>Number()</code>, and <code>Boolean()</code>
without <code>new</code> is safe and commonly used for type conversion.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let num = Number("123");
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">null and undefined</h2>

<article class="concept-block">
<p class="concept-text">
The primitives <code>null</code> and <code>undefined</code> do not have wrapper objects
and do not support methods.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
alert(null.test);
</code></pre>

</article>

<div class="note-block">
Accessing properties on null or undefined results in an error.
</div>

</section>



<section class="doc-section" id="summary">

<h2 class="section-title">Summary</h2>

<ul class="summary-list">

<li>Primitives are lightweight values.</li>

<li>JavaScript temporarily wraps primitives in objects to access methods.</li>

<li>Wrapper objects include String, Number, Boolean, Symbol and BigInt.</li>

<li>Using constructors with <code>new</code> creates objects and is discouraged.</li>

<li>Using constructors without <code>new</code> converts values between types.</li>

<li>null and undefined do not provide methods.</li>

</ul>

</section>

</main>
`;





javascriptCourse.sections[4].lessons[1].Text = `
<main class="doc">

  <header class="doc-header">
    <h1 class="doc-title">JavaScript Numbers</h1>
    <p class="doc-description">
      In modern JavaScript there are two types of numbers: regular numbers stored in
      64-bit IEEE-754 format, and BigInt for arbitrarily large integers.
    </p>
  </header>

  <section class="doc-section" id="number-types">
    <h2 class="section-title">Number Types</h2>
    <article class="concept-block">
      <h3 class="concept-title">Regular Numbers</h3>
      <p class="concept-text">
        JavaScript numbers are stored in <strong>64-bit IEEE-754 double precision format</strong>,
        also known as "double precision floating point". This handles both integers and decimals.
      </p>
    </article>
    <article class="concept-block">
      <h3 class="concept-title">BigInt</h3>
      <p class="concept-text">
        <code>BigInt</code> represents integers of arbitrary length and is used when numbers
        exceed the safe integer range of <code>±(2<sup>53</sup> - 1)</code>.
      </p>
    </article>
  </section>

  <section class="doc-section" id="large-numbers">
    <h2 class="section-title">Writing Large Numbers</h2>
    <article class="example-block">
      <h3 class="example-title">Underscore Separator</h3>
      <pre class="code-block"><code>let billion = 1_000_000_000;</code></pre>
      <p class="example-note">Underscores improve readability and are ignored by JavaScript.</p>
    </article>
    <article class="example-block">
      <h3 class="example-title">Scientific Notation</h3>
      <pre class="code-block"><code>let billion = 1e9;
let value   = 7.3e9;</code></pre>
      <p class="example-note"><code>e</code> multiplies the number by powers of 10.</p>
    </article>
  </section>

  <section class="doc-section" id="small-numbers">
    <h2 class="section-title">Writing Small Numbers</h2>
    <pre class="code-block"><code>let microSecond = 1e-6;  // 0.000001</code></pre>
    <p class="section-note">Negative exponent divides the number by powers of 10.</p>
  </section>

  <section class="doc-section" id="numeral-systems">
    <h2 class="section-title">Hex, Binary and Octal</h2>
    <article class="example-block">
      <pre class="code-block"><code>let hex    = 0xff;        // 255
let binary = 0b11111111;  // 255
let octal  = 0o377;       // 255</code></pre>
    </article>
  </section>

  <section class="doc-section" id="base-conversion">
    <h2 class="section-title">Number Base Conversion</h2>
    <article class="example-block">
      <pre class="code-block"><code>let num = 255;

num.toString(16);  // "ff"
num.toString(2);   // "11111111"
num.toString(8);   // "377"</code></pre>
    </article>
    <div class="note-block">
      <p>The base can range from <strong>2 to 36</strong>. Base 36 is useful for encoding long numeric identifiers as short strings.</p>
    </div>
  </section>

  <section class="doc-section" id="rounding">
    <h2 class="section-title">Rounding Methods</h2>
    <table class="data-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Example (3.6)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><code>Math.floor()</code></td><td>Rounds down</td><td>3</td></tr>
        <tr><td><code>Math.ceil()</code></td><td>Rounds up</td><td>4</td></tr>
        <tr><td><code>Math.round()</code></td><td>Nearest integer</td><td>4</td></tr>
        <tr><td><code>Math.trunc()</code></td><td>Removes decimal part</td><td>3</td></tr>
      </tbody>
    </table>
  </section>

  <section class="doc-section" id="tofixed">
    <h2 class="section-title">toFixed()</h2>
    <pre class="code-block"><code>let num = 12.34;

num.toFixed(1);  // "12.3"
num.toFixed(5);  // "12.34000"</code></pre>
    <p class="section-note">The result of <code>toFixed()</code> is a <strong>string</strong>, not a number.</p>
  </section>

  <section class="doc-section" id="precision">
    <h2 class="section-title">Floating Point Precision</h2>
    <pre class="code-block"><code>0.1 + 0.2 === 0.3  // false
0.1 + 0.2          // 0.30000000000000004</code></pre>
    <p class="section-note">
      Decimal fractions cannot always be represented exactly in binary.
      Use <code>toFixed()</code> or integer math to avoid precision issues.
    </p>
  </section>

  <section class="doc-section" id="special-values">
    <h2 class="section-title">NaN and Infinity</h2>
    <pre class="code-block"><code>isNaN("text");         // true
isFinite(123);         // true
Number.isNaN(NaN);     // true
Number.isFinite(10);   // true

Infinity > 999999;     // true
-Infinity < -999999;   // true</code></pre>
  </section>

  <section class="doc-section" id="parse-functions">
    <h2 class="section-title">parseInt and parseFloat</h2>
    <article class="example-block">
      <pre class="code-block"><code>parseInt("100px");     // 100
parseFloat("12.5em");  // 12.5</code></pre>
    </article>
    <article class="example-block">
      <h3 class="example-title">parseInt with radix</h3>
      <pre class="code-block"><code>parseInt("ff",   16);  // 255
parseInt("2n9c", 36);  // 123456</code></pre>
    </article>
  </section>

  <section class="doc-section" id="math-object">
    <h2 class="section-title">Math Object</h2>
    <pre class="code-block"><code>Math.random();       // 0 to 1 (exclusive)
Math.max(3, 5, 10);  // 10
Math.min(1, 2);      // 1
Math.pow(2, 10);     // 1024
Math.sqrt(16);       // 4
Math.abs(-7);        // 7</code></pre>
  </section>

  <section class="doc-section" id="summary">
    <h2 class="section-title">Summary</h2>
    <ul class="summary-list">
      <li>Use <code>e</code> notation for very large or very small numbers.</li>
      <li>JavaScript supports hex <code>0x</code>, binary <code>0b</code>, and octal <code>0o</code> literals.</li>
      <li>Use <code>toString(base)</code> to convert a number to a different base.</li>
      <li>Use <code>Math.floor</code>, <code>ceil</code>, <code>round</code>, or <code>trunc</code> for rounding.</li>
      <li>Floating point arithmetic can lose precision — use <code>toFixed()</code> when displaying.</li>
      <li>Use <code>parseInt</code> and <code>parseFloat</code> to extract numbers from strings.</li>
    </ul>
  </section>

</main>
`;

javascriptCourse.sections[4].lessons[2].Text = `

<main class="doc">

<header class="doc-header">
<h1 class="doc-title">JavaScript Strings</h1>
<p class="doc-description">
Strings represent textual data in JavaScript. Internally they use UTF-16 encoding and can be written using single quotes, double quotes, or backticks.
</p>
</header>



<section class="doc-section">

<h2 class="section-title">Strings</h2>

<article class="concept-block">
<h3 class="concept-title">What are Strings?</h3>
<p class="concept-text">
In JavaScript textual data is stored as <strong>strings</strong>. There is no separate type for a single character.
</p>
</article>

<article class="concept-block">
<h3 class="concept-title">Internal Encoding</h3>
<p class="concept-text">
The internal format for strings is always <strong>UTF-16</strong>. It is not tied to the page encoding.
</p>
</article>

</section>



<section class="doc-section">

<h2 class="section-title">Quotes</h2>

<article class="example-block">

<h3 class="example-title">Different String Quotes</h3>

<pre class="code-block"><code>
let single = 'single-quoted';
let double = "double-quoted";
let backticks = \`backticks\`;
</code></pre>

<p class="example-note">
Single and double quotes behave the same. Backticks have additional capabilities.
</p>

</article>



<article class="example-block">

<h3 class="example-title">Embedding Expressions</h3>

<pre class="code-block"><code>
function sum(a, b) {
  return a + b;
}

alert(\`1 + 2 = \${sum(1, 2)}.\`);
</code></pre>

<p class="example-note">
Backticks allow expressions inside <code>\${...}</code>.
</p>

</article>



<article class="example-block">

<h3 class="example-title">Multiline Strings</h3>

<pre class="code-block"><code>
let guestList = \`Guests:
 * John
 * Pete
 * Mary
\`;

alert(guestList);
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Single/Double Quotes Cannot Span Lines</h3>

<pre class="code-block"><code>
let guestList = "Guests:
 * John";
</code></pre>

<p class="example-note">
This produces an error because traditional quotes do not support multiline strings.
</p>

</article>

<div class="note-block">
Backticks appeared later in JavaScript and are more versatile. They also support <strong>tagged templates</strong> using the syntax: <code>func\`string\`</code>.
</div>

</section>



<section class="doc-section">

<h2 class="section-title">Special Characters</h2>

<article class="example-block">

<pre class="code-block"><code>
let guestList = "Guests:\\n * John\\n * Pete\\n * Mary";
</code></pre>

<p class="example-note">
The <code>\\n</code> character represents a newline.
</p>

</article>



<article class="example-block">

<pre class="code-block"><code>
let str1 = "Hello\\nWorld";

let str2 = \`Hello
World\`;

alert(str1 == str2); // true
</code></pre>

</article>



<table class="data-table">

<thead>
<tr>
<th>Character</th>
<th>Description</th>
</tr>
</thead>

<tbody>

<tr><td>\\n</td><td>New line</td></tr>
<tr><td>\\r</td><td>Carriage return</td></tr>
<tr><td>\\'</td><td>Single quote</td></tr>
<tr><td>\\"</td><td>Double quote</td></tr>
<tr><td>\\\\</td><td>Backslash</td></tr>
<tr><td>\\t</td><td>Tab</td></tr>
<tr><td>\\b \\f \\v</td><td>Legacy control characters</td></tr>

</tbody>

</table>



<div class="note-block">
All special characters begin with a backslash <code>\\</code>, known as an <strong>escape character</strong>.
</div>



<article class="example-block">

<h3 class="example-title">Escaping Characters</h3>

<pre class="code-block"><code>
alert(\`The backslash: \\\\\`);
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Escaping Quotes</h3>

<pre class="code-block"><code>
alert('I\\'m the Walrus!');
alert("I'm the Walrus!");
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">String Length</h2>

<pre class="code-block"><code>
alert(\`My\\n\`.length); // 3
</code></pre>

<p class="section-note">
<code>length</code> is a property, not a function. Use <code>str.length</code>, not <code>str.length()</code>.
</p>

</section>



<section class="doc-section">

<h2 class="section-title">Accessing Characters</h2>

<pre class="code-block"><code>
let str = \`Hello\`;

str[0];
str.at(0);

str[str.length - 1];
str.at(-1);
</code></pre>



<article class="example-block">

<h3 class="example-title">Negative Index</h3>

<pre class="code-block"><code>
let str = \`Hello\`;

alert(str[-2]); // undefined
alert(str.at(-2)); // l
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Iterating Characters</h3>

<pre class="code-block"><code>
for (let char of "Hello") {
  alert(char);
}
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Strings are Immutable</h2>

<pre class="code-block"><code>
let str = 'Hi';

str[0] = 'h';
</code></pre>

<p class="section-note">
Strings cannot be changed directly.
</p>



<article class="example-block">

<pre class="code-block"><code>
let str = 'Hi';

str = 'h' + str[1];

alert(str); // hi
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Changing Case</h2>

<pre class="code-block"><code>
'Interface'.toUpperCase();
'Interface'.toLowerCase();

'Interface'[0].toLowerCase();
</code></pre>

</section>



<section class="doc-section">

<h2 class="section-title">Searching for Substrings</h2>

<article class="example-block">

<h3 class="example-title">indexOf()</h3>

<pre class="code-block"><code>
let str = 'Widget with id';

str.indexOf('Widget');
str.indexOf('widget');
str.indexOf("id");
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Searching Multiple Occurrences</h3>

<pre class="code-block"><code>
let str = 'As sly as a fox, as strong as an ox';
let target = 'as';

let pos = 0;

while (true) {
  let foundPos = str.indexOf(target, pos);

  if (foundPos == -1) break;

  pos = foundPos + 1;
}
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">includes / startsWith / endsWith</h3>

<pre class="code-block"><code>
"Widget with id".includes("Widget");

"Widget".startsWith("Wid");

"Widget".endsWith("get");
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Getting a Substring</h2>

<table class="data-table">

<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>

<tbody>

<tr>
<td><code>slice(start,end)</code></td>
<td>Selects from start to end</td>
</tr>

<tr>
<td><code>substring(start,end)</code></td>
<td>Selects between start and end</td>
</tr>

<tr>
<td><code>substr(start,length)</code></td>
<td>Selects length characters</td>
</tr>

</tbody>

</table>



<pre class="code-block"><code>
let str = "stringify";

str.slice(0,5);

str.substring(2,6);

str.substr(2,4);
</code></pre>

</section>



<section class="doc-section">

<h2 class="section-title">Comparing Strings</h2>

<pre class="code-block"><code>
'a' > 'Z';
'Österreich' > 'Zealand';
</code></pre>



<div class="note-block">
Strings are compared using their UTF-16 character codes.
</div>



<article class="example-block">

<h3 class="example-title">localeCompare()</h3>

<pre class="code-block"><code>
'Österreich'.localeCompare('Zealand');
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Character Codes</h2>

<pre class="code-block"><code>
"Z".codePointAt(0);
"z".codePointAt(0);

String.fromCodePoint(90);
</code></pre>

</section>



<section class="doc-section">

<h2 class="section-title">Summary</h2>

<ul class="summary-list">

<li>Strings represent textual data using UTF-16 encoding.</li>

<li>Strings can use single quotes, double quotes, or backticks.</li>

<li>Backticks allow multiline strings and embedded expressions.</li>

<li>Strings are immutable.</li>

<li>Use slice or substring to extract substrings.</li>

<li>Use indexOf, includes, startsWith and endsWith to search text.</li>

<li>Use localeCompare for language-aware comparisons.</li>

<li>Useful methods include <code>trim()</code> and <code>repeat()</code>.</li>

</ul>

</section>

</main>

`;

javascriptCourse.sections[4].lessons[3].Text = `

<main class="doc">

<header class="doc-header">
<h1 class="doc-title">JavaScript Arrays</h1>
<p class="doc-description">
Arrays are special objects designed to store ordered collections of data.
They allow easy access, insertion, and removal of elements using numeric indexes.
</p>
</header>



<section class="doc-section">

<h2 class="section-title">Arrays</h2>

<article class="concept-block">
<h3 class="concept-title">Ordered Collections</h3>
<p class="concept-text">
Objects store values using keys. But sometimes we need an ordered list
where elements have positions: first, second, third, etc.
Arrays are designed specifically for storing ordered collections.
</p>
</article>

<article class="concept-block">
<h3 class="concept-title">Why Not Objects?</h3>
<p class="concept-text">
Objects do not provide convenient ways to manage order. We cannot insert
properties between existing ones easily. Arrays solve this problem by
using numeric indexes.
</p>
</article>

</section>



<section class="doc-section">

<h2 class="section-title">Declaration</h2>

<article class="example-block">

<h3 class="example-title">Creating Arrays</h3>

<pre class="code-block"><code>
let arr = new Array();
let arr = [];
</code></pre>

<p class="example-note">
Square brackets <code>[]</code> are the most commonly used syntax.
</p>

</article>



<article class="example-block">

<h3 class="example-title">Array with Initial Values</h3>

<pre class="code-block"><code>
let fruits = ["Apple", "Orange", "Plum"];
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Accessing Elements</h2>

<pre class="code-block"><code>
let fruits = ["Apple", "Orange", "Plum"];

alert(fruits[0]); // Apple
alert(fruits[1]); // Orange
alert(fruits[2]); // Plum
</code></pre>



<article class="example-block">

<h3 class="example-title">Replace Element</h3>

<pre class="code-block"><code>
fruits[2] = "Pear";
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Add Element</h3>

<pre class="code-block"><code>
fruits[3] = "Lemon";
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Array Length</h3>

<pre class="code-block"><code>
let fruits = ["Apple", "Orange", "Plum"];

alert(fruits.length); // 3
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Arrays Can Store Any Type</h2>

<pre class="code-block"><code>
let arr = [
  "Apple",
  { name: "John" },
  true,
  function() { alert("hello"); }
];

alert(arr[1].name);
arr[3]();
</code></pre>

</section>



<section class="doc-section">

<h2 class="section-title">Trailing Comma</h2>

<pre class="code-block"><code>
let fruits = [
  "Apple",
  "Orange",
  "Plum",
];
</code></pre>

<p class="section-note">
Trailing commas make inserting or removing items easier.
</p>

</section>



<section class="doc-section">

<h2 class="section-title">Get Last Element with at()</h2>

<pre class="code-block"><code>
let fruits = ["Apple", "Orange", "Plum"];

alert(fruits[fruits.length - 1]);

alert(fruits.at(-1));
</code></pre>

<div class="note-block">
<code>arr.at(-1)</code> returns the last element.
Negative indexes count from the end of the array.
</div>

</section>



<section class="doc-section">

<h2 class="section-title">Stack and Queue</h2>

<article class="concept-block">
<h3 class="concept-title">Queue (FIFO)</h3>
<p class="concept-text">
Queue follows the First-In-First-Out principle.
Elements are added at the end and removed from the beginning.
</p>
</article>

<article class="concept-block">
<h3 class="concept-title">Stack (LIFO)</h3>
<p class="concept-text">
Stack follows the Last-In-First-Out principle.
Elements are added and removed from the end.
</p>
</article>

</section>



<section class="doc-section">

<h2 class="section-title">pop and push</h2>

<article class="example-block">

<h3 class="example-title">pop()</h3>

<pre class="code-block"><code>
let fruits = ["Apple", "Orange", "Pear"];

fruits.pop();

alert(fruits);
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">push()</h3>

<pre class="code-block"><code>
let fruits = ["Apple", "Orange"];

fruits.push("Pear");
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">shift and unshift</h2>

<article class="example-block">

<h3 class="example-title">shift()</h3>

<pre class="code-block"><code>
let fruits = ["Apple", "Orange", "Pear"];

fruits.shift();
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">unshift()</h3>

<pre class="code-block"><code>
let fruits = ["Orange", "Pear"];

fruits.unshift("Apple");
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Multiple Elements</h3>

<pre class="code-block"><code>
let fruits = ["Apple"];

fruits.push("Orange", "Peach");

fruits.unshift("Pineapple", "Lemon");
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Internals</h2>

<p class="concept-text">
Arrays are actually special objects. Their indexes work like object keys,
but JavaScript engines optimize them for fast ordered data storage.
</p>

<div class="note-block">
Avoid treating arrays like objects by adding random properties
or creating huge gaps between indexes.
</div>

</section>



<section class="doc-section">

<h2 class="section-title">Performance</h2>

<p class="concept-text">
Methods <code>push()</code> and <code>pop()</code> are fast because they work with the end
of the array. Methods <code>shift()</code> and <code>unshift()</code> are slower because
they must move all elements in memory.
</p>

</section>



<section class="doc-section">

<h2 class="section-title">Loops</h2>

<article class="example-block">

<h3 class="example-title">for Loop</h3>

<pre class="code-block"><code>
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert(arr[i]);
}
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">for...of</h3>

<pre class="code-block"><code>
let fruits = ["Apple", "Orange", "Plum"];

for (let fruit of fruits) {
  alert(fruit);
}
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Avoid for...in</h3>

<pre class="code-block"><code>
for (let key in arr) {
  alert(arr[key]);
}
</code></pre>

<p class="example-note">
This loop is designed for objects and may include non-numeric properties.
</p>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Length Property</h2>

<pre class="code-block"><code>
let arr = [1,2,3,4,5];

arr.length = 2;

alert(arr);
</code></pre>

<p class="section-note">
Reducing length truncates the array.
</p>

</section>



<section class="doc-section">

<h2 class="section-title">Multidimensional Arrays</h2>

<pre class="code-block"><code>
let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

alert(matrix[0][1]);
</code></pre>

</section>



<section class="doc-section">

<h2 class="section-title">Array toString</h2>

<pre class="code-block"><code>
let arr = [1,2,3];

alert(arr);

alert(String(arr));
</code></pre>

</section>



<section class="doc-section">

<h2 class="section-title">Comparing Arrays</h2>

<pre class="code-block"><code>
alert([] == []);
alert([0] == [0]);
</code></pre>

<div class="note-block">
Arrays should not be compared using <code>==</code>. They are objects and
only equal if they reference the same object.
</div>

</section>



<section class="doc-section">

<h2 class="section-title">Summary</h2>

<ul class="summary-list">

<li>Arrays store ordered collections of data.</li>

<li>Create arrays using <code>[]</code> or <code>new Array()</code>.</li>

<li>Elements are accessed using indexes starting from 0.</li>

<li><code>push()</code> and <code>pop()</code> work with the end of the array.</li>

<li><code>shift()</code> and <code>unshift()</code> work with the beginning.</li>

<li><code>for...of</code> is the recommended way to iterate arrays.</li>

<li>Arrays are objects and are copied by reference.</li>

<li>Do not compare arrays using <code>==</code>.</li>

</ul>

</section>

</main>

`;

javascriptCourse.sections[4].lessons[4].Text = `
<main class="doc">

<header class="doc-header">
<h1 class="doc-title">JavaScript Array Methods</h1>
<p class="doc-description">
Arrays provide many built-in methods to manipulate, search, transform, and iterate
over collections of data. In this chapter the methods are grouped by purpose
to make them easier to understand.
</p>
</header>


<section class="doc-section">

<h2 class="section-title">Add / Remove Items</h2>

<article class="concept-block">
<h3 class="concept-title">Basic Array Operations</h3>
<p class="concept-text">
We already know several methods that add or remove items from the beginning
or the end of an array.
</p>
</article>

<table class="data-table">
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>

<tbody>
<tr>
<td><code>arr.push(...items)</code></td>
<td>Add items to the end</td>
</tr>

<tr>
<td><code>arr.pop()</code></td>
<td>Remove item from the end</td>
</tr>

<tr>
<td><code>arr.shift()</code></td>
<td>Remove item from the beginning</td>
</tr>

<tr>
<td><code>arr.unshift(...items)</code></td>
<td>Add items to the beginning</td>
</tr>

</tbody>
</table>

</section>



<section class="doc-section">

<h2 class="section-title">splice()</h2>

<article class="concept-block">
<h3 class="concept-title">Removing Elements</h3>
<p class="concept-text">
Arrays are objects, so technically we could remove items using
<code>delete</code>. However this leaves empty holes in the array.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let arr = ["I", "go", "home"];

delete arr[1];

alert(arr[1]); // undefined

alert(arr.length); // 3
</code></pre>

<p class="example-note">
The element was removed but the array length stayed the same.
</p>

</article>



<article class="concept-block">
<h3 class="concept-title">The splice Method</h3>
<p class="concept-text">
The method <code>arr.splice()</code> is a powerful tool that can remove,
insert, or replace elements.
</p>
</article>

<pre class="code-block"><code>
arr.splice(start[, deleteCount, elem1, ..., elemN])
</code></pre>

<p class="section-note">
It modifies the array starting at <code>start</code>, removes
<code>deleteCount</code> elements, then inserts new elements.
</p>



<article class="example-block">

<h3 class="example-title">Delete Element</h3>

<pre class="code-block"><code>
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1);

alert(arr);
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Replace Elements</h3>

<pre class="code-block"><code>
let arr = ["I", "study", "JavaScript", "right", "now"];

arr.splice(0, 3, "Let's", "dance");

alert(arr);
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Return Removed Items</h3>

<pre class="code-block"><code>
let arr = ["I", "study", "JavaScript", "right", "now"];

let removed = arr.splice(0, 2);

alert(removed);
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Insert Without Removing</h3>

<pre class="code-block"><code>
let arr = ["I", "study", "JavaScript"];

arr.splice(2, 0, "complex", "language");

alert(arr);
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Negative Index</h3>

<pre class="code-block"><code>
let arr = [1,2,5];

arr.splice(-1,0,3,4);

alert(arr);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">slice()</h2>

<article class="concept-block">
<h3 class="concept-title">Create Subarrays</h3>
<p class="concept-text">
The method <code>arr.slice()</code> returns a new array containing
a portion of the original array.
</p>
</article>

<pre class="code-block"><code>
arr.slice([start], [end])
</code></pre>



<article class="example-block">

<pre class="code-block"><code>
let arr = ["t", "e", "s", "t"];

alert(arr.slice(1,3));
alert(arr.slice(-2));
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Copy Array</h3>

<pre class="code-block"><code>
let copy = arr.slice();
</code></pre>

<p class="example-note">
Calling slice with no arguments creates a full copy.
</p>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">concat()</h2>

<article class="concept-block">
<h3 class="concept-title">Combine Arrays</h3>
<p class="concept-text">
The method <code>arr.concat()</code> creates a new array by merging
the current array with other arrays or values.
</p>
</article>

<pre class="code-block"><code>
arr.concat(arg1, arg2...)
</code></pre>



<article class="example-block">

<pre class="code-block"><code>
let arr = [1,2];

alert(arr.concat([3,4]));
alert(arr.concat([3,4],[5,6]));
alert(arr.concat([3,4],5,6));
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Array-like Objects</h3>

<pre class="code-block"><code>
let arr = [1,2];

let arrayLike = {
  0:"something",
  length:1
};

alert(arr.concat(arrayLike));
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Symbol.isConcatSpreadable</h3>

<pre class="code-block"><code>
let arr = [1,2];

let arrayLike = {
  0:"something",
  1:"else",
  [Symbol.isConcatSpreadable]:true,
  length:2
};

alert(arr.concat(arrayLike));
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">forEach()</h2>

<article class="concept-block">
<h3 class="concept-title">Iterate Elements</h3>
<p class="concept-text">
The method <code>arr.forEach()</code> runs a function for each
element of the array.
</p>
</article>

<pre class="code-block"><code>
arr.forEach(function(item,index,array){
  // code
});
</code></pre>



<article class="example-block">

<pre class="code-block"><code>
["Bilbo","Gandalf","Nazgul"].forEach(alert);
</code></pre>

</article>



<article class="example-block">

<pre class="code-block"><code>
["Bilbo","Gandalf","Nazgul"].forEach(
(item,index,array)=>{
alert(\`\${item} is at index \${index}\`);
});
</code></pre>

</article>

</section>

<section class="doc-section">

<h2 class="section-title">Searching in Arrays</h2>

<article class="concept-block">
<h3 class="concept-title">indexOf, lastIndexOf and includes</h3>
<p class="concept-text">
These methods search for items in an array and behave similarly to their
string counterparts.
</p>
</article>

<table class="data-table">
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>

<tbody>

<tr>
<td><code>arr.indexOf(item, from)</code></td>
<td>Returns index of item or -1 if not found</td>
</tr>

<tr>
<td><code>arr.lastIndexOf(item)</code></td>
<td>Searches from right to left</td>
</tr>

<tr>
<td><code>arr.includes(item)</code></td>
<td>Returns true if item exists</td>
</tr>

</tbody>
</table>


<article class="example-block">

<pre class="code-block"><code>
let arr = [1, 0, false];

alert(arr.indexOf(0));
alert(arr.indexOf(false));
alert(arr.indexOf(null));

alert(arr.includes(1));
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">lastIndexOf</h3>

<pre class="code-block"><code>
let fruits = ['Apple','Orange','Apple'];

alert(fruits.indexOf('Apple'));
alert(fruits.lastIndexOf('Apple'));
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">includes Handles NaN</h3>

<pre class="code-block"><code>
const arr = [NaN];

alert(arr.indexOf(NaN));
alert(arr.includes(NaN));
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">find / findIndex</h2>

<article class="concept-block">
<h3 class="concept-title">Search with Conditions</h3>
<p class="concept-text">
The method <code>arr.find()</code> searches an array using a function
that returns a condition.
</p>
</article>


<pre class="code-block"><code>
let result = arr.find(function(item,index,array){
});
</code></pre>



<article class="example-block">

<pre class="code-block"><code>
let users = [
{id:1,name:"John"},
{id:2,name:"Pete"},
{id:3,name:"Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name);
</code></pre>

</article>



<article class="concept-block">
<h3 class="concept-title">findIndex and findLastIndex</h3>
<p class="concept-text">
<code>findIndex()</code> returns the index instead of the element.
<code>findLastIndex()</code> searches from right to left.
</p>
</article>



<article class="example-block">

<pre class="code-block"><code>
let users = [
{id:1,name:"John"},
{id:2,name:"Pete"},
{id:3,name:"Mary"},
{id:4,name:"John"}
];

alert(users.findIndex(user => user.name == "John"));

alert(users.findLastIndex(user => user.name == "John"));
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">filter()</h2>

<article class="concept-block">
<h3 class="concept-title">Multiple Matches</h3>
<p class="concept-text">
Unlike find(), the method <code>filter()</code> returns all matching
elements as a new array.
</p>
</article>


<pre class="code-block"><code>
let results = arr.filter(function(item,index,array){
});
</code></pre>



<article class="example-block">

<pre class="code-block"><code>
let users = [
{id:1,name:"John"},
{id:2,name:"Pete"},
{id:3,name:"Mary"}
];

let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">map()</h2>

<article class="concept-block">
<h3 class="concept-title">Transform Arrays</h3>
<p class="concept-text">
The method <code>map()</code> transforms each element and returns a
new array with the results.
</p>
</article>


<pre class="code-block"><code>
let result = arr.map(function(item,index,array){
});
</code></pre>



<article class="example-block">

<pre class="code-block"><code>
let lengths = ["Bilbo","Gandalf","Nazgul"]
.map(item => item.length);

alert(lengths);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">sort()</h2>

<article class="concept-block">
<h3 class="concept-title">Sorting Arrays</h3>
<p class="concept-text">
The method <code>arr.sort()</code> sorts array elements in place.
By default it sorts elements as strings.
</p>
</article>



<article class="example-block">

<pre class="code-block"><code>
let arr = [1,2,15];

arr.sort();

alert(arr);
</code></pre>

</article>



<article class="concept-block">
<h3 class="concept-title">Custom Sorting</h3>
<p class="concept-text">
To sort numbers correctly we pass a comparison function.
</p>
</article>



<article class="example-block">

<pre class="code-block"><code>
function compareNumeric(a,b){
if(a>b) return 1;
if(a==b) return 0;
if(a<b) return -1;
}

let arr=[1,2,15];

arr.sort(compareNumeric);

alert(arr);
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Short Version</h3>

<pre class="code-block"><code>
arr.sort((a,b)=>a-b);
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Sorting Strings</h3>

<pre class="code-block"><code>
let countries=['Österreich','Andorra','Vietnam'];

countries.sort((a,b)=>a.localeCompare(b));
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">reverse()</h2>

<article class="example-block">

<pre class="code-block"><code>
let arr=[1,2,3,4,5];

arr.reverse();

alert(arr);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">split() and join()</h2>

<article class="concept-block">
<h3 class="concept-title">Convert String ↔ Array</h3>
<p class="concept-text">
The method <code>split()</code> converts a string into an array,
while <code>join()</code> converts an array back into a string.
</p>
</article>



<article class="example-block">

<pre class="code-block"><code>
let names='Bilbo, Gandalf, Nazgul';

let arr=names.split(', ');

for(let name of arr){
alert(\`A message to \${name}\`);
}
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Limit Length</h3>

<pre class="code-block"><code>
let arr='Bilbo, Gandalf, Nazgul, Saruman'
.split(', ',2);

alert(arr);
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Split into Letters</h3>

<pre class="code-block"><code>
let str="test";

alert(str.split(''));
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">join()</h3>

<pre class="code-block"><code>
let arr=['Bilbo','Gandalf','Nazgul'];

let str=arr.join(';');

alert(str);
</code></pre>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">reduce() and reduceRight()</h2>

<article class="concept-block">
<h3 class="concept-title">Reduce Array to a Single Value</h3>
<p class="concept-text">
The methods <code>reduce()</code> and <code>reduceRight()</code> calculate a single value
based on the entire array.
</p>
</article>

<pre class="code-block"><code>
let value = arr.reduce(function(accumulator, item, index, array) {

}, initial);
</code></pre>

<table class="data-table">
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>

<tr>
<td><code>accumulator</code></td>
<td>Result of previous function call</td>
</tr>

<tr>
<td><code>item</code></td>
<td>Current array element</td>
</tr>

<tr>
<td><code>index</code></td>
<td>Position in array</td>
</tr>

<tr>
<td><code>array</code></td>
<td>The array itself</td>
</tr>

</tbody>
</table>



<article class="example-block">

<h3 class="example-title">Sum Example</h3>

<pre class="code-block"><code>
let arr=[1,2,3,4,5];

let result=arr.reduce(
(sum,current)=>sum+current,0
);

alert(result);
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Without Initial Value</h3>

<pre class="code-block"><code>
let arr=[1,2,3,4,5];

let result=arr.reduce(
(sum,current)=>sum+current
);

alert(result);
</code></pre>

</article>



<div class="note-block">
If the array is empty and no initial value is provided,
reduce will throw an error.
</div>

</section>



<section class="doc-section">

<h2 class="section-title">Array.isArray()</h2>

<article class="concept-block">
<h3 class="concept-title">Check if Value is Array</h3>
<p class="concept-text">
Arrays are technically objects, so <code>typeof</code> cannot distinguish
between objects and arrays.
</p>
</article>



<article class="example-block">

<pre class="code-block"><code>
alert(typeof {});
alert(typeof []);
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Correct Method</h3>

<pre class="code-block"><code>
alert(Array.isArray({}));
alert(Array.isArray([]));
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">thisArg Parameter</h2>

<article class="concept-block">
<h3 class="concept-title">Passing Context</h3>
<p class="concept-text">
Many array methods allow an optional <code>thisArg</code> parameter that
becomes the value of <code>this</code> inside the callback function.
</p>
</article>



<article class="example-block">

<pre class="code-block"><code>
let army={
minAge:18,
maxAge:27,

canJoin(user){
return user.age>=this.minAge &&
user.age<this.maxAge;
}
};

let users=[
{age:16},
{age:20},
{age:23},
{age:30}
];

let soldiers=
users.filter(army.canJoin,army);

alert(soldiers.length);
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Arrow Function Alternative</h3>

<pre class="code-block"><code>
users.filter(user =>
army.canJoin(user));
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Additional Useful Methods</h2>

<table class="data-table">
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>

<tbody>

<tr>
<td><code>arr.some(fn)</code></td>
<td>Returns true if any element matches condition</td>
</tr>

<tr>
<td><code>arr.every(fn)</code></td>
<td>Returns true if all elements match condition</td>
</tr>

<tr>
<td><code>arr.fill(value,start,end)</code></td>
<td>Fills array with repeating values</td>
</tr>

<tr>
<td><code>arr.copyWithin(target,start,end)</code></td>
<td>Copies elements within array</td>
</tr>

<tr>
<td><code>arr.flat(depth)</code></td>
<td>Flattens nested arrays</td>
</tr>

<tr>
<td><code>arr.flatMap(fn)</code></td>
<td>Map then flatten</td>
</tr>

</tbody>
</table>

</section>



<section class="doc-section">

<h2 class="section-title">Comparing Arrays</h2>

<article class="concept-block">
<h3 class="concept-title">Avoid == Operator</h3>
<p class="concept-text">
Arrays should not be compared with <code>==</code> because they are objects.
Two arrays are only equal if they reference the same object.
</p>
</article>



<article class="example-block">

<pre class="code-block"><code>
alert([]==[]);
alert([0]==[0]);
</code></pre>

</article>



<article class="example-block">

<h3 class="example-title">Correct Comparison</h3>

<pre class="code-block"><code>
function arraysEqual(arr1,arr2){

return arr1.length===arr2.length &&
arr1.every((value,index)=>
value===arr2[index]);

}

alert(arraysEqual([1,2],[1,2]));
</code></pre>

</article>

</section>



<section class="doc-section" id="summary">

<h2 class="section-title">Summary</h2>

<ul class="summary-list">

<li>Arrays provide many powerful built-in methods.</li>

<li>Use <code>push</code>, <code>pop</code>, <code>shift</code>, and <code>unshift</code> to add or remove items.</li>

<li><code>splice()</code> can insert, remove, or replace elements.</li>

<li><code>slice()</code> creates a copy or subarray.</li>

<li><code>concat()</code> merges arrays.</li>

<li><code>indexOf</code>, <code>includes</code>, <code>find</code>, and <code>filter</code> search arrays.</li>

<li><code>map()</code> transforms arrays.</li>

<li><code>sort()</code> and <code>reverse()</code> reorder arrays.</li>

<li><code>split()</code> and <code>join()</code> convert between arrays and strings.</li>

<li><code>reduce()</code> calculates a single value from the array.</li>

<li><code>Array.isArray()</code> checks if a value is an array.</li>

<li>Never compare arrays using <code>==</code>.</li>

</ul>

</section>

</main>


`;



javascriptCourse.sections[4].lessons[5].Text = `
<main class="doc">

<header class="doc-header">
<h1 class="doc-title">JavaScript Iterables</h1>
<p class="doc-description">
Iterable objects are a generalization of arrays. They allow any object to be used
in a <code>for..of</code> loop if it implements the proper iteration protocol.
</p>
</header>


<section class="doc-section">

<h2 class="section-title">What are Iterables?</h2>

<article class="concept-block">
<h3 class="concept-title">General Idea</h3>
<p class="concept-text">
Iterable objects are objects that can be looped over with <code>for..of</code>.
Arrays are iterable by default, but many other built-in objects such as strings
are iterable as well.
</p>
</article>

<article class="concept-block">
<h3 class="concept-title">Why Iterables?</h3>
<p class="concept-text">
Sometimes an object represents a collection of values (for example a list or set),
but it is not technically an array. Making it iterable allows us to loop through
its values easily using <code>for..of</code>.
</p>
</article>

</section>


<section class="doc-section">

<h2 class="section-title">Symbol.iterator</h2>

<article class="concept-block">
<h3 class="concept-title">Iteration Protocol</h3>
<p class="concept-text">
To make an object iterable, it must implement the special method
<code>Symbol.iterator</code>. When a <code>for..of</code> loop starts,
JavaScript calls this method to obtain an iterator object.
</p>
</article>

<article class="example-block">

<h3 class="example-title">Range Object Example</h3>

<pre class="code-block"><code>
let range = {
  from: 1,
  to: 5
};

range[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

for (let num of range) {
  alert(num);
}
</code></pre>

<p class="example-note">
The <code>next()</code> method returns objects like
<code>{done:false, value:...}</code>.
</p>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">Iterator vs Iterable</h2>

<article class="concept-block">
<h3 class="concept-title">Separation of Concerns</h3>
<p class="concept-text">
The iterable object itself does not generate values directly.
Instead, calling <code>obj[Symbol.iterator]() </code> returns an
iterator object that produces values through its <code>next()</code> method.
</p>
</article>

<article class="example-block">

<h3 class="example-title">Combined Iterator and Iterable</h3>

<pre class="code-block"><code>
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done:false, value:this.current++ };
    } else {
      return { done:true };
    }
  }
};

for (let num of range) {
  alert(num);
}
</code></pre>

<p class="example-note">
Here the object itself acts as the iterator.
</p>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">Infinite Iterators</h2>

<article class="concept-block">
<h3 class="concept-title">Endless Sequences</h3>
<p class="concept-text">
Iterators can generate infinite sequences. For example,
a range may extend to <code>Infinity</code>, or an iterator may
produce endless random numbers.
</p>
</article>

<div class="note-block">
Such loops would run forever unless manually stopped
using <code>break</code>.
</div>

</section>


<section class="doc-section">

<h2 class="section-title">Strings Are Iterable</h2>

<article class="example-block">

<pre class="code-block"><code>
for (let char of "test") {
  alert(char);
}
</code></pre>

</article>

<article class="example-block">

<h3 class="example-title">Surrogate Pairs</h3>

<pre class="code-block"><code>
let str = "𝒳😂";

for (let char of str) {
  alert(char);
}
</code></pre>

<p class="example-note">
Each character is correctly iterated even for complex Unicode symbols.
</p>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">Calling Iterator Manually</h2>

<article class="example-block">

<pre class="code-block"><code>
let str = "Hello";

let iterator = str[Symbol.iterator]();

while(true) {
  let result = iterator.next();

  if(result.done) break;

  alert(result.value);
}
</code></pre>

<p class="example-note">
This is rarely needed but provides more control than <code>for..of</code>.
</p>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">Iterables vs Array-Like</h2>

<article class="concept-block">
<h3 class="concept-title">Iterables</h3>
<p class="concept-text">
Objects implementing <code>Symbol.iterator</code>.
</p>
</article>

<article class="concept-block">
<h3 class="concept-title">Array-Like</h3>
<p class="concept-text">
Objects with numeric indexes and a <code>length</code> property
that resemble arrays.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};
</code></pre>

<p class="example-note">
This object is array-like but not iterable.
</p>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">Array.from</h2>

<article class="concept-block">
<h3 class="concept-title">Convert to Real Array</h3>
<p class="concept-text">
The method <code>Array.from()</code> converts iterable or
array-like objects into real arrays so that array methods
like <code>push</code>, <code>pop</code>, etc. can be used.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr = Array.from(arrayLike);

alert(arr.pop());
</code></pre>

</article>

<article class="example-block">

<h3 class="example-title">Convert Iterable</h3>

<pre class="code-block"><code>
let arr = Array.from(range);

alert(arr);
</code></pre>

</article>

<article class="example-block">

<h3 class="example-title">Mapping Function</h3>

<pre class="code-block"><code>
let arr = Array.from(range, num => num * num);

alert(arr);
</code></pre>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">Array.from with Strings</h2>

<article class="example-block">

<pre class="code-block"><code>
let str = "𝒳😂";

let chars = Array.from(str);

alert(chars[0]);
alert(chars[1]);
alert(chars.length);
</code></pre>

</article>

<article class="example-block">

<h3 class="example-title">Manual Equivalent</h3>

<pre class="code-block"><code>
let chars = [];

for (let char of str) {
  chars.push(char);
}
</code></pre>

</article>

</section>


<section class="doc-section" id="summary">

<h2 class="section-title">Summary</h2>

<ul class="summary-list">

<li>Objects that can be used in <code>for..of</code> are called iterable.</li>

<li>Iterable objects implement the <code>Symbol.iterator</code> method.</li>

<li>The iterator returned by it must implement <code>next()</code>.</li>

<li><code>next()</code> returns objects of form <code>{done,value}</code>.</li>

<li>Strings and arrays are built-in iterable objects.</li>

<li>Objects with numeric indexes and length are called array-like.</li>

<li><code>Array.from()</code> converts iterables or array-likes into real arrays.</li>

</ul>

</section>

</main>
`;

javascriptCourse.sections[4].lessons[6].Text = `
<main class="doc">

<header class="doc-header">
<h1 class="doc-title">JavaScript Map and Set</h1>
<p class="doc-description">
Until now we used <strong>Objects</strong> for keyed collections and
<strong>Arrays</strong> for ordered collections.  
However, JavaScript also provides two specialized structures:
<strong>Map</strong> and <strong>Set</strong>.
</p>
</header>


<section class="doc-section">

<h2 class="section-title">Map</h2>

<article class="concept-block">
<h3 class="concept-title">What is Map?</h3>
<p class="concept-text">
A <code>Map</code> is a collection of keyed data items similar to an object.
The major difference is that <strong>Map allows keys of any type</strong>.
Objects convert keys to strings, but Map preserves the key type.
</p>
</article>

<table class="data-table">
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>

<tr>
<td><code>new Map()</code></td>
<td>Create a new Map</td>
</tr>

<tr>
<td><code>map.set(key,value)</code></td>
<td>Store value by key</td>
</tr>

<tr>
<td><code>map.get(key)</code></td>
<td>Return value by key</td>
</tr>

<tr>
<td><code>map.has(key)</code></td>
<td>Check if key exists</td>
</tr>

<tr>
<td><code>map.delete(key)</code></td>
<td>Remove key/value pair</td>
</tr>

<tr>
<td><code>map.clear()</code></td>
<td>Remove all elements</td>
</tr>

<tr>
<td><code>map.size</code></td>
<td>Total number of elements</td>
</tr>

</tbody>
</table>

</section>


<section class="doc-section">

<h2 class="section-title">Map Example</h2>

<article class="example-block">

<pre class="code-block"><code>
let map = new Map();

map.set('1','str1');
map.set(1,'num1');
map.set(true,'bool1');

alert(map.get(1));
alert(map.get('1'));

alert(map.size);
</code></pre>

<p class="example-note">
Map keeps key types separate.  
Number <code>1</code> and string <code>"1"</code> are different keys.
</p>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">Objects as Keys</h2>

<article class="concept-block">
<h3 class="concept-title">Important Map Feature</h3>
<p class="concept-text">
Unlike objects, a Map can use other objects as keys.
This makes it very useful when associating data with specific objects.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let john = { name: "John" };

let visitsCountMap = new Map();

visitsCountMap.set(john,123);

alert(visitsCountMap.get(john));
</code></pre>

</article>

<div class="note-block">
Objects convert object keys to the same string
<code>"[object Object]"</code>, but Map keeps the object reference.
</div>

</section>


<section class="doc-section">

<h2 class="section-title">Map Key Comparison</h2>

<article class="concept-block">
<h3 class="concept-title">SameValueZero Algorithm</h3>
<p class="concept-text">
Map compares keys using the <strong>SameValueZero</strong> algorithm.
It behaves almost the same as strict equality <code>===</code>,
except that <code>NaN</code> is considered equal to <code>NaN</code>.
</p>
</article>

</section>


<section class="doc-section">

<h2 class="section-title">Method Chaining</h2>

<article class="example-block">

<pre class="code-block"><code>
map.set('1','str1')
   .set(1,'num1')
   .set(true,'bool1');
</code></pre>

<p class="example-note">
Each <code>set()</code> returns the map itself, allowing chained calls.
</p>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">Iterating Over Map</h2>

<table class="data-table">
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>

<tr>
<td><code>map.keys()</code></td>
<td>Iterates keys</td>
</tr>

<tr>
<td><code>map.values()</code></td>
<td>Iterates values</td>
</tr>

<tr>
<td><code>map.entries()</code></td>
<td>Iterates key/value pairs</td>
</tr>

</tbody>
</table>

<article class="example-block">

<pre class="code-block"><code>
let recipeMap = new Map([
 ['cucumber',500],
 ['tomatoes',350],
 ['onion',50]
]);

for(let vegetable of recipeMap.keys()){
 alert(vegetable);
}

for(let amount of recipeMap.values()){
 alert(amount);
}

for(let entry of recipeMap){
 alert(entry);
}
</code></pre>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">Map.forEach()</h2>

<article class="example-block">

<pre class="code-block"><code>
recipeMap.forEach((value,key,map)=>{
 alert(\`\${key}: \${value}\`);
});
</code></pre>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">Object.entries and Map</h2>

<article class="concept-block">
<h3 class="concept-title">Create Map from Object</h3>
<p class="concept-text">
<code>Object.entries(obj)</code> returns an array of
<code>[key,value]</code> pairs which can be used to create a Map.
</p>
</article>

<pre class="code-block"><code>
let obj={
 name:"John",
 age:30
};

let map=new Map(Object.entries(obj));

alert(map.get("name"));
</code></pre>

</section>


<section class="doc-section">

<h2 class="section-title">Object.fromEntries</h2>

<article class="concept-block">
<h3 class="concept-title">Convert Map to Object</h3>
<p class="concept-text">
The method <code>Object.fromEntries()</code> performs the reverse
operation and converts key/value pairs into a plain object.
</p>
</article>

<pre class="code-block"><code>
let map=new Map();

map.set("banana",1);
map.set("orange",2);
map.set("meat",4);

let obj=Object.fromEntries(map);

alert(obj.orange);
</code></pre>

</section>


<section class="doc-section">

<h2 class="section-title">Set</h2>

<article class="concept-block">
<h3 class="concept-title">Unique Values Collection</h3>
<p class="concept-text">
A <code>Set</code> is a collection of values where each value may appear
only once.
</p>
</article>

<table class="data-table">
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>

<tbody>

<tr>
<td><code>new Set(iterable)</code></td>
<td>Create a set</td>
</tr>

<tr>
<td><code>set.add(value)</code></td>
<td>Add value</td>
</tr>

<tr>
<td><code>set.delete(value)</code></td>
<td>Remove value</td>
</tr>

<tr>
<td><code>set.has(value)</code></td>
<td>Check if value exists</td>
</tr>

<tr>
<td><code>set.clear()</code></td>
<td>Remove all values</td>
</tr>

<tr>
<td><code>set.size</code></td>
<td>Total values count</td>
</tr>

</tbody>
</table>

</section>


<section class="doc-section">

<h2 class="section-title">Set Example</h2>

<article class="example-block">

<pre class="code-block"><code>
let set = new Set();

let john = {name:"John"};
let pete = {name:"Pete"};
let mary = {name:"Mary"};

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

alert(set.size);

for(let user of set){
 alert(user.name);
}
</code></pre>

<p class="example-note">
Duplicate values are automatically ignored.
</p>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">Iterating Over Set</h2>

<article class="example-block">

<pre class="code-block"><code>
let set=new Set(["oranges","apples","bananas"]);

for(let value of set){
 alert(value);
}

set.forEach((value,valueAgain,set)=>{
 alert(value);
});
</code></pre>

</article>

</section>


<section class="doc-section" id="summary">

<h2 class="section-title">Summary</h2>

<ul class="summary-list">

<li><strong>Map</strong> is a collection of key-value pairs.</li>

<li>Map allows keys of <strong>any type</strong>, including objects.</li>

<li>Map preserves insertion order during iteration.</li>

<li><code>Object.entries()</code> converts objects to Map format.</li>

<li><code>Object.fromEntries()</code> converts Map to object.</li>

<li><strong>Set</strong> is a collection of unique values.</li>

<li>Repeated values in a Set are automatically ignored.</li>

<li>Map and Set both support iteration using <code>for..of</code>.</li>

</ul>

</section>

</main>
`;


javascriptCourse.sections[4].lessons[7].Text = `
<main class="doc">

<header class="doc-header">
<h1 class="doc-title">JavaScript WeakMap and WeakSet</h1>
<p class="doc-description">
WeakMap and WeakSet are special collections that store objects with
<strong>weak references</strong>.  
If an object becomes unreachable elsewhere in the program,
JavaScript can automatically remove it from these collections
during garbage collection.
</p>
</header>


<section class="doc-section">

<h2 class="section-title">Garbage Collection Refresher</h2>

<article class="concept-block">
<h3 class="concept-title">Reachable Values</h3>
<p class="concept-text">
JavaScript keeps values in memory while they are <strong>reachable</strong>.
If no references to an object exist, the garbage collector removes it from memory.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let john = { name: "John" };

john = null;

// the object will be removed from memory
</code></pre>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">Objects Stored in Collections</h2>

<article class="concept-block">
<h3 class="concept-title">Objects Stay Alive in Collections</h3>
<p class="concept-text">
If an object is stored inside another structure (like an array or map),
it remains in memory while that structure exists.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let john = { name: "John" };

let array = [john];

john = null;

// object still exists in memory
// accessible via array[0]
</code></pre>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">WeakMap</h2>

<article class="concept-block">
<h3 class="concept-title">What is WeakMap?</h3>
<p class="concept-text">
WeakMap is similar to Map but with one major difference:
<strong>its keys must be objects</strong> and they are held
with weak references.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj,"ok");

// Error
weakMap.set("test","whoops");
</code></pre>

</article>

<div class="note-block">
Primitive values cannot be used as keys in WeakMap.
</div>

</section>


<section class="doc-section">

<h2 class="section-title">Automatic Garbage Collection</h2>

<article class="example-block">

<pre class="code-block"><code>
let john = { name: "John" };

let weakMap = new WeakMap();

weakMap.set(john,"...");

john = null;

// object is automatically removed
</code></pre>

<p class="example-note">
If the object has no other references, it disappears from memory
and from the WeakMap.
</p>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">WeakMap Methods</h2>

<table class="data-table">

<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>

<tbody>

<tr>
<td><code>weakMap.set(key,value)</code></td>
<td>Add key/value pair</td>
</tr>

<tr>
<td><code>weakMap.get(key)</code></td>
<td>Get value by key</td>
</tr>

<tr>
<td><code>weakMap.has(key)</code></td>
<td>Check if key exists</td>
</tr>

<tr>
<td><code>weakMap.delete(key)</code></td>
<td>Remove entry</td>
</tr>

</tbody>

</table>

<div class="note-block">
WeakMap does not support iteration methods such as
<code>keys()</code>, <code>values()</code>, or <code>entries()</code>.
</div>

</section>


<section class="doc-section">

<h2 class="section-title">Use Case: Additional Data Storage</h2>

<article class="concept-block">
<h3 class="concept-title">Attach Data to Objects</h3>
<p class="concept-text">
WeakMap is useful when you want to associate additional data with
an object that should disappear automatically once the object is gone.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let visitsCountMap = new WeakMap();

function countUser(user){

let count = visitsCountMap.get(user) || 0;

visitsCountMap.set(user,count + 1);

}
</code></pre>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">Use Case: Caching</h2>

<article class="concept-block">
<h3 class="concept-title">Cache Results</h3>
<p class="concept-text">
WeakMap can store cached results for objects without worrying
about memory leaks.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let cache = new WeakMap();

function process(obj){

if(!cache.has(obj)){

let result = /* heavy calculation */ obj;

cache.set(obj,result);

return result;

}

return cache.get(obj);

}
</code></pre>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">WeakSet</h2>

<article class="concept-block">
<h3 class="concept-title">What is WeakSet?</h3>
<p class="concept-text">
WeakSet works like Set but only stores objects
and removes them automatically once they become unreachable.
</p>
</article>

<table class="data-table">

<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>

<tbody>

<tr>
<td><code>weakSet.add(value)</code></td>
<td>Add object</td>
</tr>

<tr>
<td><code>weakSet.has(value)</code></td>
<td>Check membership</td>
</tr>

<tr>
<td><code>weakSet.delete(value)</code></td>
<td>Remove object</td>
</tr>

</tbody>

</table>

</section>


<section class="doc-section">

<h2 class="section-title">WeakSet Example</h2>

<article class="example-block">

<pre class="code-block"><code>
let visitedSet = new WeakSet();

let john = { name:"John" };
let pete = { name:"Pete" };
let mary = { name:"Mary" };

visitedSet.add(john);
visitedSet.add(pete);

alert(visitedSet.has(john));

john = null;

// automatically removed later
</code></pre>

<p class="example-note">
WeakSet is often used to track whether objects
have already been processed.
</p>

</article>

</section>


<section class="doc-section" id="summary">

<h2 class="section-title">Summary</h2>

<ul class="summary-list">

<li><strong>WeakMap</strong> stores key/value pairs where keys must be objects.</li>

<li>If an object key becomes unreachable, it is automatically removed.</li>

<li>WeakMap supports only <code>set</code>, <code>get</code>, <code>has</code>, and <code>delete</code>.</li>

<li>WeakMap cannot be iterated and has no <code>size</code> property.</li>

<li><strong>WeakSet</strong> stores unique objects with weak references.</li>

<li>Objects disappear from WeakSet automatically after garbage collection.</li>

<li>WeakMap and WeakSet are mainly used as <strong>secondary storage</strong> attached to objects.</li>

</ul>

</section>

</main>
`;

javascriptCourse.sections[4].lessons[8].Text = `
<main class="doc">

<header class="doc-header">
<h1 class="doc-title">Object.keys, Object.values, Object.entries</h1>
<p class="doc-description">
JavaScript provides helper methods to iterate over the keys and values
of plain objects. These methods make working with objects easier
and allow transformations similar to array operations.
</p>
</header>


<section class="doc-section">

<h2 class="section-title">Iteration Across Data Structures</h2>

<article class="concept-block">
<h3 class="concept-title">Common Iteration Methods</h3>
<p class="concept-text">
Many JavaScript data structures support iteration methods such as
<code>keys()</code>, <code>values()</code>, and <code>entries()</code>.
These methods are available in structures like <strong>Map</strong>,
<strong>Set</strong>, and <strong>Array</strong>.
</p>
</article>

<article class="concept-block">
<h3 class="concept-title">Objects Work Differently</h3>
<p class="concept-text">
Plain objects also support similar functionality, but the syntax is
slightly different. Instead of calling methods on the object directly,
we use static methods from the <code>Object</code> class.
</p>
</article>

</section>


<section class="doc-section">

<h2 class="section-title">Object.keys, Object.values, Object.entries</h2>

<table class="data-table">

<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>

<tbody>

<tr>
<td><code>Object.keys(obj)</code></td>
<td>Returns an array of object keys</td>
</tr>

<tr>
<td><code>Object.values(obj)</code></td>
<td>Returns an array of object values</td>
</tr>

<tr>
<td><code>Object.entries(obj)</code></td>
<td>Returns an array of <code>[key,value]</code> pairs</td>
</tr>

</tbody>

</table>

</section>


<section class="doc-section">

<h2 class="section-title">Map vs Object Syntax</h2>

<table class="data-table">

<thead>
<tr>
<th>Feature</th>
<th>Map</th>
<th>Object</th>
</tr>
</thead>

<tbody>

<tr>
<td>Call Syntax</td>
<td><code>map.keys()</code></td>
<td><code>Object.keys(obj)</code></td>
</tr>

<tr>
<td>Return Type</td>
<td>Iterable</td>
<td>Real Array</td>
</tr>

</tbody>

</table>

<div class="note-block">
Object methods return real arrays for historical reasons,
while Map methods return iterable objects.
</div>

</section>


<section class="doc-section">

<h2 class="section-title">Example</h2>

<article class="example-block">

<pre class="code-block"><code>
let user = {
  name: "John",
  age: 30
};

Object.keys(user);
// ["name","age"]

Object.values(user);
// ["John",30]

Object.entries(user);
// [["name","John"],["age",30]]
</code></pre>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">Looping Over Values</h2>

<article class="example-block">

<pre class="code-block"><code>
let user = {
  name: "John",
  age: 30
};

for (let value of Object.values(user)) {
  alert(value);
}
</code></pre>

<p class="example-note">
This loop prints the property values of the object.
</p>

</article>

</section>


<section class="doc-section">

<h2 class="section-title">Symbol Properties</h2>

<article class="concept-block">
<h3 class="concept-title">Ignored by Default</h3>
<p class="concept-text">
Just like the <code>for..in</code> loop, the methods
<code>Object.keys()</code>, <code>Object.values()</code>, and
<code>Object.entries()</code> ignore properties whose keys are Symbols.
</p>
</article>

<article class="concept-block">
<h3 class="concept-title">Accessing Symbol Keys</h3>
<p class="concept-text">
To get symbol properties, we can use
<code>Object.getOwnPropertySymbols(obj)</code> or
<code>Reflect.ownKeys(obj)</code>.
</p>
</article>

</section>


<section class="doc-section">

<h2 class="section-title">Transforming Objects</h2>

<article class="concept-block">
<h3 class="concept-title">Using Array Methods</h3>
<p class="concept-text">
Objects do not support array methods like
<code>map()</code> or <code>filter()</code>.
However, we can convert objects into arrays using
<code>Object.entries()</code>, apply transformations,
and convert them back with <code>Object.fromEntries()</code>.
</p>
</article>

</section>


<section class="doc-section">

<h2 class="section-title">Example: Transform Object Values</h2>

<article class="example-block">

<pre class="code-block"><code>
let prices = {
  banana: 1,
  orange: 2,
  meat: 4
};

let doublePrices = Object.fromEntries(

  Object.entries(prices).map(
    entry => [entry[0], entry[1] * 2]
  )

);

alert(doublePrices.meat);
</code></pre>

<p class="example-note">
First we convert the object to an array,
then transform it with <code>map()</code>,
and finally convert it back into an object.
</p>

</article>

</section>


<section class="doc-section" id="summary">

<h2 class="section-title">Summary</h2>

<ul class="summary-list">

<li><code>Object.keys(obj)</code> returns an array of keys.</li>

<li><code>Object.values(obj)</code> returns an array of values.</li>

<li><code>Object.entries(obj)</code> returns an array of key/value pairs.</li>

<li>These methods return real arrays instead of iterables.</li>

<li>Symbol properties are ignored by default.</li>

<li><code>Object.entries()</code> combined with <code>Object.fromEntries()</code>
allows powerful object transformations.</li>

</ul>

</section>

</main>
`;



javascriptCourse.sections[4].lessons[9].Text = `
<main class="doc">

<header class="doc-header">
<h1 class="doc-title">Destructuring Assignment</h1>
<p class="doc-description">
Destructuring assignment is a special JavaScript syntax that allows us to
<strong>unpack arrays or objects into multiple variables</strong>.
It is extremely useful when working with objects, arrays, and function parameters.
</p>
</header>


<section class="doc-section">

<h2 class="section-title">Why Destructuring Exists</h2>

<article class="concept-block">
<h3 class="concept-title">Two Core Data Structures</h3>
<p class="concept-text">
The two most used data structures in JavaScript are <strong>Object</strong> and <strong>Array</strong>.
Objects store data by keys and arrays store ordered collections.
</p>
</article>

<article class="concept-block">
<h3 class="concept-title">Selective Data Extraction</h3>
<p class="concept-text">
Often a function receives an object or array but only needs a few properties or elements.
Destructuring allows us to extract only what we need directly into variables.
</p>
</article>

</section>



<section class="doc-section">

<h2 class="section-title">Array Destructuring</h2>

<article class="example-block">

<pre class="code-block"><code>
let arr = ["John","Smith"];

let [firstName,surname] = arr;

alert(firstName);
alert(surname);
</code></pre>

<p class="example-note">
The first element of the array goes into the first variable,
the second element goes into the second variable.
</p>

</article>

<article class="example-block">

<h3 class="example-title">Using with split()</h3>

<pre class="code-block"><code>
let [firstName,surname] = "John Smith".split(" ");

alert(firstName);
alert(surname);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Destructuring Is Not Destructive</h2>

<article class="concept-block">
<p class="concept-text">
Destructuring does not modify the array.  
It simply copies the values into variables.
</p>
</article>

<pre class="code-block"><code>
let firstName = arr[0];
let surname = arr[1];
</code></pre>

</section>



<section class="doc-section">

<h2 class="section-title">Ignoring Elements</h2>

<article class="example-block">

<pre class="code-block"><code>
let [firstName, , title] =
["Julius","Caesar","Consul","of the Roman Republic"];

alert(title);
</code></pre>

<p class="example-note">
Extra commas allow skipping unwanted elements.
</p>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Works with Any Iterable</h2>

<article class="example-block">

<pre class="code-block"><code>
let [a,b,c] = "abc";

let [one,two,three] = new Set([1,2,3]);
</code></pre>

</article>

<article class="concept-block">
<p class="concept-text">
Destructuring internally uses iteration similar to <code>for..of</code>.
</p>
</article>

</section>



<section class="doc-section">

<h2 class="section-title">Assigning to Existing Objects</h2>

<article class="example-block">

<pre class="code-block"><code>
let user = {};

[user.name,user.surname] =
"John Smith".split(" ");

alert(user.name);
alert(user.surname);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Looping with Object.entries()</h2>

<article class="example-block">

<pre class="code-block"><code>
let user = {
name:"John",
age:30
};

for(let [key,value] of Object.entries(user)){
alert(\`\${key}:\${value}\`);
}
</code></pre>

</article>

<article class="example-block">

<h3 class="example-title">With Map</h3>

<pre class="code-block"><code>
let user = new Map();

user.set("name","John");
user.set("age","30");

for(let [key,value] of user){
alert(\`\${key}:\${value}\`);
}
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Swapping Variables</h2>

<article class="example-block">

<pre class="code-block"><code>
let guest="Jane";
let admin="Pete";

[guest,admin] = [admin,guest];

alert(\`\${guest} \${admin}\`);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Rest Operator</h2>

<article class="example-block">

<pre class="code-block"><code>
let [name1,name2,...rest] =
["Julius","Caesar","Consul","of the Roman Republic"];

alert(rest[0]);
alert(rest[1]);
alert(rest.length);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Default Values</h2>

<article class="example-block">

<pre class="code-block"><code>
let [name="Guest",surname="Anonymous"]=["Julius"];

alert(name);
alert(surname);
</code></pre>

</article>

<article class="example-block">

<h3 class="example-title">Using Functions as Defaults</h3>

<pre class="code-block"><code>
let [name=prompt("name?"),
surname=prompt("surname?")]
=["Julius"];
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Object Destructuring</h2>

<article class="example-block">

<pre class="code-block"><code>
let options={
title:"Menu",
width:100,
height:200
};

let {title,width,height}=options;

alert(title);
alert(width);
alert(height);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Renaming Variables</h2>

<article class="example-block">

<pre class="code-block"><code>
let options={
title:"Menu",
width:100,
height:200
};

let {width:w,height:h,title}=options;

alert(title);
alert(w);
alert(h);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Default Values for Objects</h2>

<article class="example-block">

<pre class="code-block"><code>
let options={title:"Menu"};

let {width=100,height=200,title}=options;

alert(title);
alert(width);
alert(height);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Rest Pattern with Objects</h2>

<article class="example-block">

<pre class="code-block"><code>
let options={
title:"Menu",
height:200,
width:100
};

let {title,...rest}=options;

alert(rest.height);
alert(rest.width);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Destructuring Without let</h2>

<article class="example-block">

<pre class="code-block"><code>
let title,width,height;

({title,width,height}=
{title:"Menu",width:200,height:100});
</code></pre>

</article>

<div class="note-block">
Parentheses are required because otherwise JavaScript interprets
the braces as a code block.
</div>

</section>



<section class="doc-section">

<h2 class="section-title">Nested Destructuring</h2>

<article class="example-block">

<pre class="code-block"><code>
let options={
size:{width:100,height:200},
items:["Cake","Donut"],
extra:true
};

let{
size:{width,height},
items:[item1,item2],
title="Menu"
}=options;

alert(title);
alert(width);
alert(height);
alert(item1);
alert(item2);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Smart Function Parameters</h2>

<article class="concept-block">
<p class="concept-text">
Destructuring is extremely useful when functions have many optional parameters.
Instead of remembering argument order, we can pass an object.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
function showMenu(
{title="Untitled",width=200,height=100,items=[]}
){
alert(\`\${title} \${width} \${height}\`);
alert(items);
}
</code></pre>

</article>

<article class="example-block">

<pre class="code-block"><code>
function showMenu(
{title="Menu",width=100,height=200}={}
){
alert(\`\${title} \${width} \${height}\`);
}
</code></pre>

</article>

</section>



<section class="doc-section" id="summary">

<h2 class="section-title">Summary</h2>

<ul class="summary-list">

<li>Destructuring extracts values from arrays or objects into variables.</li>

<li>Array syntax: <code>[item1,item2,...rest]</code></li>

<li>Object syntax: <code>{prop:varName=defaultValue,...rest}</code></li>

<li>Works with nested structures.</li>

<li>Supports default values.</li>

<li>Useful for swapping variables.</li>

<li>Very helpful for function parameters.</li>

</ul>

</section>

</main>
`;


javascriptCourse.sections[4].lessons[10].Text = `
<main class="doc">

<header class="doc-header">
<h1 class="doc-title">JavaScript Date and Time</h1>
<p class="doc-description">
JavaScript provides the built-in <code>Date</code> object to store and manage
dates and time. It allows us to measure time, work with timestamps,
and retrieve or modify date components.
</p>
</header>



<section class="doc-section">

<h2 class="section-title">What is Date?</h2>

<article class="concept-block">
<h3 class="concept-title">Date Object</h3>
<p class="concept-text">
The <code>Date</code> object stores both date and time together.
It provides methods for retrieving and modifying components like
year, month, day, hours, minutes, and seconds.
</p>
</article>

<article class="concept-block">
<h3 class="concept-title">Common Uses</h3>
<p class="concept-text">
Dates are commonly used to store creation or modification times,
measure performance, or display the current time.
</p>
</article>

</section>



<section class="doc-section">

<h2 class="section-title">Creating Dates</h2>

<table class="data-table">
<thead>
<tr>
<th>Constructor</th>
<th>Description</th>
</tr>
</thead>
<tbody>

<tr>
<td><code>new Date()</code></td>
<td>Create a Date for the current date and time</td>
</tr>

<tr>
<td><code>new Date(milliseconds)</code></td>
<td>Create a date from milliseconds since Jan 1, 1970</td>
</tr>

<tr>
<td><code>new Date(dateString)</code></td>
<td>Create a date by parsing a string</td>
</tr>

<tr>
<td><code>new Date(year, month, ...)</code></td>
<td>Create a date using components</td>
</tr>

</tbody>
</table>

</section>



<section class="doc-section">

<h2 class="section-title">Current Date</h2>

<article class="example-block">

<pre class="code-block"><code>
let now = new Date();

alert(now);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Timestamp Creation</h2>

<article class="concept-block">
<p class="concept-text">
A timestamp is the number of milliseconds that have passed
since January 1st, 1970 (UTC+0).
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let Jan01_1970 = new Date(0);

alert(Jan01_1970);

let Jan02_1970 = new Date(24 * 3600 * 1000);

alert(Jan02_1970);
</code></pre>

</article>

<article class="example-block">

<h3 class="example-title">Negative Timestamp</h3>

<pre class="code-block"><code>
let Dec31_1969 = new Date(-24 * 3600 * 1000);

alert(Dec31_1969);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Creating Date from String</h2>

<article class="example-block">

<pre class="code-block"><code>
let date = new Date("2017-01-26");

alert(date);
</code></pre>

</article>

<div class="note-block">
The time defaults to midnight GMT and is adjusted based
on the local timezone where the code runs.
</div>

</section>



<section class="doc-section">

<h2 class="section-title">Creating Date from Components</h2>

<article class="example-block">

<pre class="code-block"><code>
new Date(2011,0,1,0,0,0,0);

new Date(2011,0,1);
</code></pre>

</article>

<article class="concept-block">
<p class="concept-text">
Months are counted from 0 (January) to 11 (December).
Missing parameters default to zero.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let date = new Date(2011,0,1,2,3,4,567);

alert(date);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Accessing Date Components</h2>

<table class="data-table">
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>

<tr>
<td><code>getFullYear()</code></td>
<td>Get full year</td>
</tr>

<tr>
<td><code>getMonth()</code></td>
<td>Get month (0-11)</td>
</tr>

<tr>
<td><code>getDate()</code></td>
<td>Get day of month</td>
</tr>

<tr>
<td><code>getHours()</code></td>
<td>Get hour</td>
</tr>

<tr>
<td><code>getMinutes()</code></td>
<td>Get minutes</td>
</tr>

<tr>
<td><code>getSeconds()</code></td>
<td>Get seconds</td>
</tr>

<tr>
<td><code>getMilliseconds()</code></td>
<td>Get milliseconds</td>
</tr>

<tr>
<td><code>getDay()</code></td>
<td>Get day of week (0=Sunday)</td>
</tr>

</tbody>
</table>

<div class="note-block">
Avoid <code>getYear()</code>.  
It is deprecated. Use <code>getFullYear()</code> instead.
</div>

</section>



<section class="doc-section">

<h2 class="section-title">UTC Methods</h2>

<article class="example-block">

<pre class="code-block"><code>
let date = new Date();

alert(date.getHours());

alert(date.getUTCHours());
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Special Methods</h2>

<table class="data-table">
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>

<tbody>

<tr>
<td><code>getTime()</code></td>
<td>Returns timestamp in milliseconds</td>
</tr>

<tr>
<td><code>getTimezoneOffset()</code></td>
<td>Difference between UTC and local time zone</td>
</tr>

</tbody>

</table>

</section>



<section class="doc-section">

<h2 class="section-title">Setting Date Components</h2>

<table class="data-table">
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>

<tbody>

<tr><td>setFullYear()</td><td>Set year</td></tr>
<tr><td>setMonth()</td><td>Set month</td></tr>
<tr><td>setDate()</td><td>Set day of month</td></tr>
<tr><td>setHours()</td><td>Set hours</td></tr>
<tr><td>setMinutes()</td><td>Set minutes</td></tr>
<tr><td>setSeconds()</td><td>Set seconds</td></tr>
<tr><td>setMilliseconds()</td><td>Set milliseconds</td></tr>
<tr><td>setTime()</td><td>Set timestamp</td></tr>

</tbody>
</table>

</section>



<section class="doc-section">

<h2 class="section-title">Autocorrection</h2>

<article class="example-block">

<pre class="code-block"><code>
let date = new Date(2013,0,32);

alert(date);
</code></pre>

</article>

<article class="example-block">

<pre class="code-block"><code>
let date = new Date(2016,1,28);

date.setDate(date.getDate() + 2);

alert(date);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Date to Number</h2>

<article class="example-block">

<pre class="code-block"><code>
let date = new Date();

alert(+date);
</code></pre>

</article>

<article class="example-block">

<h3 class="example-title">Measuring Execution Time</h3>

<pre class="code-block"><code>
let start = new Date();

for(let i=0;i<100000;i++){
let doSomething=i*i*i;
}

let end = new Date();

alert(end - start);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Date.now()</h2>

<article class="concept-block">
<p class="concept-text">
<code>Date.now()</code> returns the current timestamp without
creating a Date object.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let start = Date.now();

for(let i=0;i<100000;i++){
let doSomething=i*i*i;
}

let end = Date.now();

alert(end - start);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Date.parse()</h2>

<article class="concept-block">
<p class="concept-text">
<code>Date.parse()</code> reads a date string and returns
the corresponding timestamp.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let ms = Date.parse("2012-01-26T13:51:50.417-07:00");

alert(ms);
</code></pre>

</article>

<article class="example-block">

<pre class="code-block"><code>
let date = new Date(Date.parse("2012-01-26T13:51:50.417-07:00"));

alert(date);
</code></pre>

</article>

</section>



<section class="doc-section" id="summary">

<h2 class="section-title">Summary</h2>

<ul class="summary-list">

<li>The <code>Date</code> object represents both date and time.</li>

<li>Months start from zero (January = 0).</li>

<li>Days of week start from zero (Sunday = 0).</li>

<li>Date objects auto-correct out-of-range values.</li>

<li>Subtracting two dates returns the difference in milliseconds.</li>

<li><code>Date.now()</code> returns the current timestamp.</li>

<li>JavaScript timestamps use milliseconds.</li>

<li>For higher precision in browsers use <code>performance.now()</code>.</li>

</ul>

</section>

</main>
`;

javascriptCourse.sections[4].lessons[11].Text = `
<main class="doc">

<header class="doc-header">
<h1 class="doc-title">JSON Methods and toJSON</h1>
<p class="doc-description">
JSON (JavaScript Object Notation) is a standard format used to convert
JavaScript objects into strings for storage or transmission and
convert them back into objects.
</p>
</header>


<section class="doc-section">

<h2 class="section-title">Why JSON Exists</h2>

<article class="concept-block">
<h3 class="concept-title">Object Serialization</h3>
<p class="concept-text">
Sometimes we need to convert a complex object into a string,
for example to send it over a network, save it to a database,
or print it in logs.
</p>
</article>

<article class="concept-block">
<h3 class="concept-title">Manual Conversion Problem</h3>
<p class="concept-text">
We could manually implement a method like <code>toString()</code>,
but that becomes difficult if objects become large or contain nested objects.
JSON provides a built-in solution for this problem.
</p>
</article>

</section>



<section class="doc-section">

<h2 class="section-title">JSON.stringify()</h2>

<article class="concept-block">
<p class="concept-text">
<code>JSON.stringify()</code> converts a JavaScript object into a JSON string.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let student = {
name: "John",
age: 30,
isAdmin: false,
courses: ["html","css","js"],
spouse: null
};

let json = JSON.stringify(student);

alert(typeof json);
alert(json);
</code></pre>

</article>

<div class="note-block">
The result is a string called a JSON-encoded or serialized object.
</div>

</section>



<section class="doc-section">

<h2 class="section-title">JSON Format Rules</h2>

<table class="data-table">

<thead>
<tr>
<th>Rule</th>
<th>Description</th>
</tr>
</thead>

<tbody>

<tr>
<td>Strings</td>
<td>Must use double quotes</td>
</tr>

<tr>
<td>Keys</td>
<td>Property names must also use double quotes</td>
</tr>

<tr>
<td>Allowed Types</td>
<td>Objects, Arrays, Strings, Numbers, Booleans, null</td>
</tr>

</tbody>

</table>

</section>



<section class="doc-section">

<h2 class="section-title">JSON.stringify with Primitives</h2>

<article class="example-block">

<pre class="code-block"><code>
JSON.stringify(1);
JSON.stringify("test");
JSON.stringify(true);
JSON.stringify([1,2,3]);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Values Ignored by JSON</h2>

<article class="concept-block">
<p class="concept-text">
Some JavaScript values are skipped during JSON conversion.
</p>
</article>

<table class="data-table">

<thead>
<tr>
<th>Ignored Value</th>
<th>Example</th>
</tr>
</thead>

<tbody>

<tr>
<td>Functions</td>
<td>object methods</td>
</tr>

<tr>
<td>Symbol keys</td>
<td>Symbol("id")</td>
</tr>

<tr>
<td>undefined</td>
<td>properties storing undefined</td>
</tr>

</tbody>

</table>

<article class="example-block">

<pre class="code-block"><code>
let user = {
sayHi(){
alert("Hello");
},
[Symbol("id")]:123,
something: undefined
};

JSON.stringify(user);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Nested Objects</h2>

<article class="example-block">

<pre class="code-block"><code>
let meetup = {
title:"Conference",
room:{
number:23,
participants:["john","ann"]
}
};

JSON.stringify(meetup);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Circular References</h2>

<article class="concept-block">
<p class="concept-text">
JSON cannot convert objects that reference themselves.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let room = {number:23};

let meetup = {
title:"Conference",
participants:["john","ann"]
};

meetup.place = room;
room.occupiedBy = meetup;

JSON.stringify(meetup);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">JSON.stringify Options</h2>

<pre class="code-block"><code>
JSON.stringify(value, replacer, space)
</code></pre>

<table class="data-table">

<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
</thead>

<tbody>

<tr>
<td>value</td>
<td>Value to encode</td>
</tr>

<tr>
<td>replacer</td>
<td>Filter properties or transform values</td>
</tr>

<tr>
<td>space</td>
<td>Pretty formatting indentation</td>
</tr>

</tbody>

</table>

</section>



<section class="doc-section">

<h2 class="section-title">Replacer Example</h2>

<article class="example-block">

<pre class="code-block"><code>
JSON.stringify(meetup,
["title","participants","place","name","number"]);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Replacer Function</h2>

<article class="example-block">

<pre class="code-block"><code>
JSON.stringify(meetup,function(key,value){

if(key == "occupiedBy") return undefined;

return value;

});
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Formatting JSON</h2>

<article class="example-block">

<pre class="code-block"><code>
JSON.stringify(user,null,2);
</code></pre>

</article>

<div class="note-block">
The third parameter controls indentation for readable output.
</div>

</section>



<section class="doc-section">

<h2 class="section-title">Custom toJSON()</h2>

<article class="concept-block">
<p class="concept-text">
Objects may define a <code>toJSON()</code> method.
JSON.stringify automatically calls it.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let room = {
number:23,
toJSON(){
return this.number;
}
};

JSON.stringify(room);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">JSON.parse()</h2>

<article class="concept-block">
<p class="concept-text">
<code>JSON.parse()</code> converts a JSON string back into a JavaScript object.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let numbers = "[0,1,2,3]";

numbers = JSON.parse(numbers);

alert(numbers[1]);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Parsing Complex JSON</h2>

<article class="example-block">

<pre class="code-block"><code>
let userData = '{ "name":"John","age":35,"friends":[0,1,2] }';

let user = JSON.parse(userData);

alert(user.friends[1]);
</code></pre>

</article>

</section>



<section class="doc-section">

<h2 class="section-title">Using reviver</h2>

<article class="concept-block">
<p class="concept-text">
The reviver function transforms values during parsing.
</p>
</article>

<article class="example-block">

<pre class="code-block"><code>
let str = '{"title":"Conference",
"date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str,function(key,value){

if(key=="date") return new Date(value);

return value;

});

alert(meetup.date.getDate());
</code></pre>

</article>

</section>



<section class="doc-section" id="summary">

<h2 class="section-title">Summary</h2>

<ul class="summary-list">

<li>JSON is a universal format for representing data.</li>

<li><code>JSON.stringify()</code> converts objects to JSON strings.</li>

<li><code>JSON.parse()</code> converts JSON strings back to objects.</li>

<li>JSON supports objects, arrays, strings, numbers, booleans and null.</li>

<li>Functions, symbols and undefined values are ignored.</li>

<li>The replacer argument customizes serialization.</li>

<li>The reviver argument customizes parsing.</li>

<li>If an object has <code>toJSON()</code>, it is used during serialization.</li>

</ul>

</section>

</main>
`;


/* ============================================================
   SECTION 3: APP INITIALIZATION
   Builds sidebar + handles lesson selection
   ============================================================ */
(function initApp() {

  // ── Config ──
  const ACTIVE_SECTION_INDEX = 4; // "Data Types"
  const lessons = javascriptCourse.sections[ACTIVE_SECTION_INDEX].lessons;

  // ── DOM references ──
  const navEl      = document.getElementById('lessonNav');
  const contentEl  = document.getElementById('lessonContent');
  const progressFill    = document.getElementById('progressFill');
  const progressPercent = document.getElementById('progressPercent');

  if (!navEl || !contentEl) {
    console.error('App: Required DOM elements not found.');
    return;
  }

  // ── Build sidebar items ──
  lessons.forEach((lesson, index) => {
    const btn = document.createElement('button');
    btn.className = 'lesson-item';
    btn.setAttribute('data-index', index);
    btn.setAttribute('aria-label', `Lesson ${index + 1}: ${lesson.title}`);

    const numSpan   = document.createElement('span');
    numSpan.className = 'lesson-num';
    numSpan.textContent = String(index + 1).padStart(2, '0');
    numSpan.setAttribute('aria-hidden', 'true');

    const titleSpan = document.createElement('span');
    titleSpan.className = 'lesson-title-text';
    titleSpan.textContent = lesson.title;

    btn.appendChild(numSpan);
    btn.appendChild(titleSpan);
    navEl.appendChild(btn);

    btn.addEventListener('click', () => selectLesson(index));
  });

  // ── Render lesson content ──
  function renderContent(lesson) {
    if (!lesson.Text) {
      // No content yet — show a placeholder
      return `
        <div class="placeholder-content">
          <div class="placeholder-icon">🚧</div>
          <h2 class="placeholder-title">${escapeHtml(lesson.title)}</h2>
          <p class="placeholder-text">
            This lesson is currently being written.
            Check back soon for the full content.
          </p>
          <span class="placeholder-tag">Coming Soon</span>
        </div>
      `;
    }

    const text = lesson.Text.trim();

    // If content starts with an HTML tag, inject it directly
    if (text.startsWith('<')) {
      return text;
    }

    // Otherwise, render plain text with formatting
    return renderPlainText(text);
  }

  // ── Plain text renderer ──
  // Converts `•` bullet lines and `>` blockquote lines into styled HTML
  function renderPlainText(text) {
    const lines = text.split('\n');
    const blocks = [];
    const bullets = [];

    const flushBullets = () => {
      if (bullets.length > 0) {
        const items = bullets
          .map(b => `<li class="bullet-item"><span class="bullet-dot" aria-hidden="true"></span><span>${escapeHtml(b)}</span></li>`)
          .join('\n');
        blocks.push(`<ul class="bullet-list">${items}</ul>`);
        bullets.length = 0;
      }
    };

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      if (trimmed.startsWith('• ')) {
        bullets.push(trimmed.slice(2));
      } else if (trimmed.startsWith('> ')) {
        flushBullets();
        blocks.push(`<blockquote>${escapeHtml(trimmed.slice(2))}</blockquote>`);
      } else {
        flushBullets();
        blocks.push(`<p>${escapeHtml(trimmed)}</p>`);
      }
    }

    flushBullets();

    return `<div class="rendered-text">${blocks.join('\n')}</div>`;
  }

  // ── Sanitize user/data strings ──
  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ── Update progress bar ──
  function updateProgress(activeIndex) {
    const pct = Math.round(((activeIndex + 1) / lessons.length) * 100);
    if (progressFill)    progressFill.style.width = pct + '%';
    if (progressPercent) progressPercent.textContent = pct + '%';
  }

  // ── Select and display a lesson ──
  function selectLesson(index) {
    const lesson = lessons[index];
    if (!lesson) return;

    // Update active sidebar state
    navEl.querySelectorAll('.lesson-item').forEach((el, i) => {
      const isActive = i === index;
      el.classList.toggle('active', isActive);
      el.setAttribute('aria-current', isActive ? 'true' : 'false');
    });

    // Render content
    contentEl.innerHTML = renderContent(lesson);

    // Trigger fade-in animation
    contentEl.classList.remove('animating');
    // Use requestAnimationFrame to force reflow before re-adding class
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        contentEl.classList.add('animating');
      });
    });

    // Scroll main area to top
    const mainEl = document.getElementById('mainContent');
    if (mainEl) mainEl.scrollTo({ top: 0, behavior: 'smooth' });

    // Update progress
    updateProgress(index);
  }

  // ── Init with first lesson ──
  selectLesson(0);

})();
