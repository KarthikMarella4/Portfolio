export interface Project {
  id: number;
  title: string;
  role: string;
  year: string;
  image: string;
  category: string;
  description: string;
  link: string;
}

export interface Skill {
  id: number;
  title: string;
  detail: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  link: string;
}

export interface Internship {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string | string[];
}