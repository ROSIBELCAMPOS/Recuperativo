import type { Course } from '../Type/Index';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Desarrollo Web con React y TypeScript',
    shortDescription: 'Aprende a construir aplicaciones web modernas y robustas.',
    longDescription: 'Este curso intensivo te guiará a través de los fundamentos y conceptos avanzados de React y TypeScript para desarrollar interfaces de usuario interactivas y escalables. Cubriremos Hooks, Context API, Redux, y mucho más.',
    image: '../assets/RT.png',
    temario: [
      'Introducción a React y JSX',
      'Componentes funcionales y Hooks',
      'Manejo de estado con useState y useReducer',
      'Gestión de efectos con useEffect',
      'Tipado de componentes con TypeScript',
      'Context API y Redux para estado global',
      'Enrutamiento con React Router DOM',
      'Consumo de APIs REST',
      'Pruebas unitarias con Jest y React Testing Library'
    ],
    duration: '40 horas',
    modality: 'Online en vivo',
    price: '$350 USD',
    facilitator: { name: 'Ana Rodríguez', bio: 'Experta en frontend con más de 8 años de experiencia.' },
  },
  {
    id: '2',
    title: 'Fundamentos de Inteligencia Artificial',
    shortDescription: 'Explora los principios clave de la IA y sus aplicaciones.',
    longDescription: 'Descubre el apasionante mundo de la Inteligencia Artificial. Este curso aborda desde los algoritmos básicos de aprendizaje automático hasta la visión por computadora y el procesamiento del lenguaje natural, con ejemplos prácticos y proyectos.',
    image: '../assets/AI.png',
    temario: [
      'Introducción a la IA y Machine Learning',
      'Aprendizaje Supervisado y No Supervisado',
      'Redes Neuronales y Deep Learning',
      'Procesamiento del Lenguaje Natural (NLP)',
      'Visión por Computadora',
      'Ética en la IA'
    ],
    duration: '30 horas',
    modality: 'Online asíncrono',
    price: '$280 USD',
    facilitator: { name: 'Carlos López', bio: 'Investigador en IA y científico de datos.' },
  },
  {
    id: '3',
    title: 'Marketing Digital Estratégico',
    shortDescription: 'Domina las herramientas para posicionar tu marca en línea.',
    longDescription: 'Aprende a crear y ejecutar estrategias de marketing digital efectivas. Este curso cubre SEO, SEM, marketing de contenidos, redes sociales, email marketing y analítica web para potenciar tu presencia online.',
    image: '../assets/MD.png',
    temario: [
      'Introducción al Marketing Digital',
      'SEO y SEM',
      'Marketing de Contenidos',
      'Social Media Marketing',
      'Email Marketing',
      'Analítica Web con Google Analytics'
    ],
    duration: '25 horas',
    modality: 'Presencial',
    price: '$200 USD',
    facilitator: { name: 'Sofía Giménez', bio: 'Consultora de marketing digital con amplia trayectoria.' },
  },
];