export type CourseCategory = 
  | 'Software Engineering' 
  | 'Data & Analytics' 
  | 'Web & Backend' 
  | 'Cybersecurity' 
  | 'Enterprise Systems';

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location?: string;
  period: string;
  highlights: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  gpa?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
}

export interface CourseItem {
  id: string;
  title: string;
  organizer: string;
  organizerLogo?: string;
  issued: string;
  expiration?: string;
  credentialId?: string;
  credentialUrl?: string;
  category: CourseCategory;
  skills: string[];
  description: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface MetricItem {
  label: string;
  value: string;
  highlight: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  whatsappUrl: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  cvFileUrl: string;
  summary: string;
  metrics: MetricItem[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: SkillCategory[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  courses: CourseItem[];
}
