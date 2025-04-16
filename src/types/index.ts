export interface Project {
  title: string;
  description: string;
  githubUrl?: string;
  technologies: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
}

export interface Skill {
  category: string;
  items: string[];
}