import { useState, useMemo } from 'react';
import { portfolioRepository, PortfolioRepository } from '../services/portfolioRepository';
import type { CourseItem, ProjectItem } from '../types/domain';

export interface UseProjectsAndCertsFilterOptions {
  initialCategory?: string;
  initialSearchTerm?: string;
  repository?: PortfolioRepository;
}

export function useProjectsAndCertsFilter(options: UseProjectsAndCertsFilterOptions = {}) {
  const repo = options.repository || portfolioRepository;

  const [selectedCategory, setSelectedCategory] = useState<string>(
    options.initialCategory || 'All'
  );
  const [searchTerm, setSearchTerm] = useState<string>(
    options.initialSearchTerm || ''
  );
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  const categories = useMemo(() => {
    return repo.getCourseCategories();
  }, [repo]);

  const projects: ProjectItem[] = useMemo(() => {
    return repo.getProjects();
  }, [repo]);

  const allCourses = useMemo(() => {
    return repo.getCourses();
  }, [repo]);

  const filteredCourses: CourseItem[] = useMemo(() => {
    return repo.searchCourses(searchTerm, selectedCategory);
  }, [repo, searchTerm, selectedCategory]);

  const getCategoryCount = (category: string): number => {
    if (category === 'All') {
      return allCourses.length;
    }
    return allCourses.filter((course) => course.category === category).length;
  };

  const resetFilters = (): void => {
    setSelectedCategory('All');
    setSearchTerm('');
  };

  const handleSelectSkillFilter = (skill: string): void => {
    setSearchTerm(skill);
  };

  return {
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    selectedCourse,
    setSelectedCourse,
    categories,
    projects,
    allCourses,
    filteredCourses,
    getCategoryCount,
    resetFilters,
    handleSelectSkillFilter,
  };
}
