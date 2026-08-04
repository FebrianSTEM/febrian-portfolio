import { describe, it, expect } from 'vitest';
import { PortfolioRepository, portfolioRepository } from '../portfolioRepository';
import type { PortfolioData } from '../../types/domain';

describe('PortfolioRepository', () => {
  it('should initialize with default PORTFOLIO_DATA', () => {
    const personal = portfolioRepository.getPersonal();
    expect(personal.name).toBe('MUHAMMAD FEBRIAN MAULANA');
    expect(personal.title).toBe('Senior Software Engineer');
  });

  it('should retrieve skills and skill categories', () => {
    const skills = portfolioRepository.getSkills();
    expect(skills.length).toBeGreaterThan(0);
    const categories = portfolioRepository.getSkillCategories();
    expect(categories).toContain('All');
    expect(categories).toContain('Programming Languages');
  });

  it('should search skills by query and category', () => {
    const results = portfolioRepository.searchSkills('C#', 'Programming Languages');
    expect(results.length).toBe(1);
    expect(results[0].items).toContain('C#');

    const emptyResults = portfolioRepository.searchSkills('NonExistentSkill123');
    expect(emptyResults.length).toBe(0);
  });

  it('should retrieve experiences and experience by id', () => {
    const experiences = portfolioRepository.getExperiences();
    expect(experiences.length).toBe(5);
    const vlink = portfolioRepository.getExperienceById('vlink');
    expect(vlink).toBeDefined();
    expect(vlink?.company).toBe('VLink Consulting');
  });

  it('should retrieve education, projects, and courses', () => {
    const education = portfolioRepository.getEducation();
    expect(education.length).toBeGreaterThan(0);

    const projects = portfolioRepository.getProjects();
    expect(projects.length).toBeGreaterThan(0);

    const courses = portfolioRepository.getCourses();
    expect(courses.length).toBeGreaterThan(0);
  });

  it('should retrieve courses by category and by id', () => {
    const seCourses = portfolioRepository.getCoursesByCategory('Software Engineering');
    expect(seCourses.every((c) => c.category === 'Software Engineering')).toBe(true);

    const datacamp = portfolioRepository.getCourseById('datacamp-ai-engineer');
    expect(datacamp).toBeDefined();
    expect(datacamp?.title).toBe('Associate AI Engineer for Developers');
  });

  it('should search courses by term and category', () => {
    const searchResult = portfolioRepository.searchCourses('Google', 'Data & Analytics');
    expect(searchResult.length).toBeGreaterThan(0);
    expect(searchResult.every((c) => c.category === 'Data & Analytics')).toBe(true);
  });

  it('should support custom PortfolioData in constructor', () => {
    const customData: PortfolioData = {
      personal: {
        name: 'Test Name',
        title: 'Test Title',
        location: 'Test Location',
        phone: '123',
        whatsappUrl: 'http',
        email: 'test@test.com',
        githubUrl: 'http',
        linkedinUrl: 'http',
        cvFileUrl: 'http',
        summary: 'Test summary',
        metrics: [],
      },
      skills: [{ category: 'Frontend', items: ['React', 'TypeScript'] }],
      experiences: [],
      education: [],
      projects: [],
      courses: [],
    };

    const customRepo = new PortfolioRepository(customData);
    expect(customRepo.getPersonal().name).toBe('Test Name');
    expect(customRepo.getSkills()[0].items).toContain('React');
  });
});
