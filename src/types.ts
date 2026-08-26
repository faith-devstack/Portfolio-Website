export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Frontend' | 'Backend & APIs' | 'AI Systems' | 'Full-Stack';
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
}

export interface SkillCategory {
  title: 'Frontend' | 'Backend & APIs' | 'Databases' | 'AI Systems' | 'DevOps & Tools';
  skills: string[];
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}
