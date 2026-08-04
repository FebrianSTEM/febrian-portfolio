import { PORTFOLIO_DATA } from '../data/portfolioData';
import type {
  PortfolioData,
  PersonalInfo,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  ProjectItem,
  CourseItem,
} from '../types/domain';

export class PortfolioRepository {
  private data: PortfolioData;

  constructor(initialData: PortfolioData = PORTFOLIO_DATA) {
    this.data = initialData;
  }

  public getPersonal(): PersonalInfo {
    return this.data.personal;
  }

  public getSkills(): SkillCategory[] {
    return this.data.skills;
  }

  public getSkillCategories(): string[] {
    return ['All', ...this.data.skills.map((s) => s.category)];
  }

  public searchSkills(query: string, category: string = 'All'): SkillCategory[] {
    const term = query.toLowerCase().trim();
    return this.data.skills
      .filter((s) => category === 'All' || s.category === category)
      .map((s) => {
        if (!term) return s;
        const filteredItems = s.items.filter((item) =>
          item.toLowerCase().includes(term)
        );
        return { ...s, items: filteredItems };
      })
      .filter((s) => s.items.length > 0);
  }

  public getExperiences(): ExperienceItem[] {
    return this.data.experiences;
  }

  public getExperienceById(id: string): ExperienceItem | undefined {
    return this.data.experiences.find((exp) => exp.id === id);
  }

  public getEducation(): EducationItem[] {
    return this.data.education;
  }

  public getProjects(): ProjectItem[] {
    return this.data.projects;
  }

  public getCourses(): CourseItem[] {
    return this.data.courses;
  }

  public getCourseById(id: string): CourseItem | undefined {
    return this.data.courses.find((course) => course.id === id);
  }

  public getCourseCategories(): string[] {
    return [
      'All',
      'Software Engineering',
      'Web & Backend',
      'Data & Analytics',
      'Cybersecurity',
      'Enterprise Systems',
    ];
  }

  public getCoursesByCategory(category: string): CourseItem[] {
    if (!category || category === 'All') {
      return this.getCourses();
    }
    return this.data.courses.filter((c) => c.category === category);
  }

  public searchCourses(searchTerm: string, category: string = 'All'): CourseItem[] {
    const term = searchTerm.toLowerCase().trim();
    return this.data.courses.filter((course) => {
      const matchesCategory =
        category === 'All' || course.category === category;
      const matchesSearch =
        !term ||
        course.title.toLowerCase().includes(term) ||
        course.organizer.toLowerCase().includes(term) ||
        course.description.toLowerCase().includes(term) ||
        course.skills.some((s) => s.toLowerCase().includes(term)) ||
        course.category.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }

  public getAllData(): PortfolioData {
    return this.data;
  }
}

export const portfolioRepository = new PortfolioRepository();
