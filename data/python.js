export const pythonCourse = {
  title: 'Python Complete Guide',
  slug: 'python-complete-guide',
  description: 'Learn Python programming from the ground up, suitable for beginners and aspiring data scientists.',
  level: 'beginner',
  progress: 0,
  sections: [
    {
      id: 'intro',
      title: 'Introduction to Python',
      description: 'Get started with Python syntax and basics.',
      lessons: [
        {
          title: 'Hello World',
          completed: false,
          contentUrl: 'domain/coding/python/intro/hello-world.html',
          tags: ['python', 'intro']
        },
        {
          title: 'Variables and Data Types',
          completed: false,
          contentUrl: 'domain/coding/python/intro/variables.html',
          tags: ['python', 'variables', 'data-types']
        }
      ]
    },
    {
      id: 'control-flow',
      title: 'Control Flow',
      description: 'Learn how to make decisions in your code.',
      lessons: [
        {
          title: 'If/Else Statements',
          completed: false,
          contentUrl: 'domain/coding/python/control-flow/if-else.html',
          tags: ['python', 'control-flow', 'conditionals']
        },
        {
          title: 'Loops (For and While)',
          completed: false,
          tags: ['python', 'loops']
        }
      ]
    }
  ]
};