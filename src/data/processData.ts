import { ProcessStep } from '../types';

export const processData: ProcessStep[] = [
  {
    id: 1,
    title: 'Discover',
    description: 'Deconstructing requirements, evaluating functional scope, and establishing technical benchmarks.',
    icon: 'Search',
    detail: 'Scoping user journeys, performance criteria, and platform constraints prior to writing code.'
  },
  {
    id: 2,
    title: 'Architecture',
    description: 'Drafting data schemas, API contracts, state models, and selecting the optimal technology stack.',
    icon: 'Network',
    detail: 'Designing modular database relations, authentication flows, and scalable service boundaries.'
  },
  {
    id: 3,
    title: 'Design',
    description: 'Crafting responsive UI layouts, typographic hierarchies, and accessible design system foundations.',
    icon: 'PenTool',
    detail: 'Refining spatial rhythm, WCAG contrast compliance, and cohesive component primitives.'
  },
  {
    id: 4,
    title: 'Develop',
    description: 'Authoring maintainable, type-safe code across client interfaces and server-side services.',
    icon: 'Code',
    detail: 'Implementing clean React components, robust API route handlers, and efficient database queries.'
  },
  {
    id: 5,
    title: 'Test',
    description: 'Validating cross-browser behavior, edge cases, responsiveness, and performance metrics.',
    icon: 'TestTube',
    detail: 'Testing critical mutation pipelines, network resilience, and layout integrity across viewports.'
  },
  {
    id: 6,
    title: 'Deploy',
    description: 'Configuring automated build pipelines, production hosting, and domain edge delivery.',
    icon: 'Rocket',
    detail: 'Optimizing client bundles, caching headers, and deploying to fast edge infrastructure.'
  }
];
