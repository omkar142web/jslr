async function test() {
  console.log('Testing GET /api/registry');
  let res = await fetch('http://localhost:3050/api/registry');
  let data = await res.json();
  console.log('GET /api/registry ->', Object.keys(data).length, 'domains found.');

  if (!data.coding) data.coding = { id: 'coding', title: 'Coding', subjects: {} };
  data.coding.description = 'Updated description from test script ' + Date.now();

  console.log('Testing POST /api/registry');
  res = await fetch('http://localhost:3050/api/registry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      json: data,
      jsContent: 'export const courseRegistry = ' + JSON.stringify(data, null, 2) + ';'
    })
  });
  let postRes = await res.json();
  console.log('POST /api/registry ->', postRes);

  console.log('Testing GET /api/course/javascript');
  res = await fetch('http://localhost:3050/api/course/javascript');
  data = await res.json();
  console.log('GET /api/course/javascript ->', data.title);

  data.description = 'Updated desc ' + Date.now();

  console.log('Testing POST /api/course/javascript');
  res = await fetch('http://localhost:3050/api/course/javascript', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      json: data,
      jsContent: 'export const javascriptCourse = ' + JSON.stringify(data, null, 2) + ';'
    })
  });
  postRes = await res.json();
  console.log('POST /api/course/javascript ->', postRes);
}

test().catch(console.error);
