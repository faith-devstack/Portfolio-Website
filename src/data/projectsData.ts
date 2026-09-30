import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'blue-cabana',
    title: 'Blue Cabana',
    description:
      'A premium coffee and restaurant website concept focused on immersive visual storytelling and a refined hospitality experience. It combines elegant typography, atmospheric visuals, responsive layouts, and smooth motion to create a sophisticated digital presence for a modern hospitality brand. A key feature is its cinematic, scroll-driven hero experience, using a frame-based image sequence controlled by scrolling to create a continuous visual reveal.',
    image: '/projects/blue-cabana.svg',
    category: 'Frontend',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Lucide React'],
    liveLink: 'https://blucabana-website-3lsyfw1jv-faith-devstacks-projects.vercel.app/',
    year: '2025',
    role: 'Frontend & Interaction Engineer',
    highlights: [
      'Scroll-scrubbed, frame-based hero animation creating a continuous visual reveal',
      'Scroll-driven visual storytelling with atmospheric hospitality art direction',
      'Smooth transitions, animated content sections, and refined responsive hierarchy'
    ],
    architectureSummary:
      'Cinematic frontend web experience leveraging React and GSAP ScrollTrigger to orchestrate high-fidelity frame-by-frame scroll scrubbing, synchronized with typographic reveals and responsive layout flows.'
  },
  {
    id: 'subtrack',
    title: 'SubTrack',
    description:
      'SubTrack is a subscription management application designed to help users organize recurring expenses and monitor upcoming renewals from a centralized dashboard. It provides an interface for managing subscriptions, viewing spending summaries, exploring analytics, and accessing account settings. The application is deployed and actively maintained under continuous development.',
    image: '/projects/subtrack.svg',
    category: 'Full-Stack',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase'],
    liveLink: 'https://sub-track-alpha.vercel.app/',
    year: '2025',
    role: 'Full-Stack Developer',
    highlights: [
      'Centralized dashboard for tracking recurring expenses and upcoming renewals',
      'Subscription creation, expense categorization, and spending analytics summaries',
      'User settings management and structured administrative interface',
      'Single-page application powered by Vite, React, and Firebase services'
    ],
    architectureSummary:
      'Single Page Application developed with React, TypeScript, and Vite, leveraging Tailwind CSS for layout design and Firebase for backend authentication and document synchronization. Currently undergoing continued development and refinement.'
  },
  {
    id: 'pace-ecommerce',
    title: 'PACE E-Commerce',
    description:
      'A comprehensive full-stack e-commerce platform featuring dynamic product browsing, persistent cart management, and seamless checkout processing.',
    image: '/projects/pace-ecommerce.svg',
    category: 'Full-Stack',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://dr-tee-frontend.onrender.com',
    year: '2024',
    role: 'Full-Stack Developer',
    highlights: [
      'Engineered complete client-to-database shopping cart persistence and user checkout pipeline',
      'Structured modular REST endpoints for product catalog querying and status tracking',
      'Designed responsive catalog layout with instant category filtration'
    ],
    architectureSummary:
      'Full-stack MERN application deploying React on the client with Express/Node.js serving REST APIs and MongoDB handling product, order, and user document schemas.'
  },
  {
    id: 'family-tree',
    title: 'Family Tree Visualizer',
    description:
      'An interactive genealogical web application allowing users to map, visualize, and dynamically traverse multi-generational ancestral lineages.',
    image: '/projects/family-tree.svg',
    category: 'Frontend',
    techStack: ['React', 'CSS Modules', 'D3.js'],
    liveLink: 'https://akinlemibola-family-tree.vercel.app/',
    year: '2024',
    role: 'Frontend Engineer',
    highlights: [
      'Designed dynamic tree graph layout algorithm rendering generational parent-child hierarchies',
      'Engineered interactive zoom, pan, and node inspection drawers for deep branch review',
      'Formatted hierarchical JSON relational trees for smooth canvas re-rendering'
    ],
    architectureSummary:
      'React visualization client utilizing graph layout mathematics, SVG node render pipelines, and responsive tree state handling.'
  }
];
