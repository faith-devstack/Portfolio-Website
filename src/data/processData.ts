import { ProcessStep } from '../types';

export const processData: ProcessStep[] = [
  {
    id: 1,
    title: 'Discover',
    description: 'Understanding requirements, target audience, and defining project scope and technical feasibility.',
    icon: 'Search'
  },
  {
    id: 2,
    title: 'Architecture',
    description: 'Designing system diagrams, database schemas, and selecting the optimal technology stack.',
    icon: 'Network'
  },
  {
    id: 3,
    title: 'Design',
    description: 'Creating wireframes, UI/UX mockups, and defining the visual language and component library.',
    icon: 'PenTool'
  },
  {
    id: 4,
    title: 'Develop',
    description: 'Writing clean, scalable code following best practices, implementing frontend and backend features.',
    icon: 'Code'
  },
  {
    id: 5,
    title: 'Test',
    description: 'Conducting comprehensive unit, integration, and user acceptance testing to ensure reliability.',
    icon: 'TestTube'
  },
  {
    id: 6,
    title: 'Deploy',
    description: 'Setting up CI/CD pipelines, provisioning infrastructure, and launching the application.',
    icon: 'Rocket'
  }
];
