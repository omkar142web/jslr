import { javascriptCourse } from './javascript.js';
import { pythonCourse } from './python.js';

export const courseRegistry = {
  coding: {
    id: 'coding',
    title: 'Coding',
    iconText: 'Code',
    description: 'Learn programming languages and software development.',
    subjects: {
      javascript: {
        id: 'javascript',
        title: 'JavaScript',
        iconText: 'JS',
        description: 'Learn JavaScript from fundamentals to advanced topics.',
        course: javascriptCourse
      },
      python: {
        id: 'python',
        title: 'Python',
        iconText: 'Py',
        description: 'Master Python programming for web development and data science.',
        course: pythonCourse
      },
      rust: {
        id: 'rust',
        title: 'Rust',
        iconText: 'Rs',
        description: 'Build reliable and efficient software with Rust.',
        course: null
      }
    }
  },
  science: {
    id: 'science',
    title: 'Science',
    iconText: 'Sci',
    description: 'Explore physics, chemistry, biology and more.',
    subjects: {
      physics: {
        id: 'physics',
        title: 'Physics',
        iconText: 'Phy',
        description: 'Understand the fundamental laws of nature.',
        course: null
      },
      chemistry: {
        id: 'chemistry',
        title: 'Chemistry',
        iconText: 'Chem',
        description: 'Discover the properties of matter and chemical reactions.',
        course: null
      }
    }
  },
  humanities: {
    id: 'humanities',
    title: 'Humanities',
    iconText: 'Hum',
    description: 'Study history, philosophy, and society.',
    subjects: {
      history: {
        id: 'history',
        title: 'History',
        iconText: 'His',
        description: 'Explore the past to understand the present.',
        course: null
      }
    }
  },
  finance: {
    id: 'finance',
    title: 'Finance',
    iconText: 'Fin',
    description: 'Learn about economics, markets, and personal finance.',
    subjects: {
    }
  },
  arts: {
    id: 'arts',
    title: 'Arts',
    iconText: 'Art',
    description: 'Explore visual arts, music, and literature.',
    subjects: {
    }
  },
  health: {
    id: 'health',
    title: 'Health',
    iconText: 'Med',
    description: 'Learn about human health, medicine, and wellness.',
    subjects: {
    }
  }
};