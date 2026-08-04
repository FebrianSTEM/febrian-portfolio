import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useProjectsAndCertsFilter } from '../useProjectsAndCertsFilter';

describe('useProjectsAndCertsFilter', () => {
  it('should initialize with default categories and courses', () => {
    const { result } = renderHook(() => useProjectsAndCertsFilter());

    expect(result.current.selectedCategory).toBe('All');
    expect(result.current.searchTerm).toBe('');
    expect(result.current.selectedCourse).toBeNull();
    expect(result.current.categories.length).toBeGreaterThan(0);
    expect(result.current.projects.length).toBeGreaterThan(0);
    expect(result.current.filteredCourses.length).toBe(result.current.allCourses.length);
  });

  it('should support initial options', () => {
    const { result } = renderHook(() =>
      useProjectsAndCertsFilter({
        initialCategory: 'Data & Analytics',
        initialSearchTerm: 'Google',
      })
    );

    expect(result.current.selectedCategory).toBe('Data & Analytics');
    expect(result.current.searchTerm).toBe('Google');
    expect(result.current.filteredCourses.every((c) => c.category === 'Data & Analytics')).toBe(true);
  });

  it('should filter courses when category is selected', () => {
    const { result } = renderHook(() => useProjectsAndCertsFilter());

    act(() => {
      result.current.setSelectedCategory('Cybersecurity');
    });

    expect(result.current.selectedCategory).toBe('Cybersecurity');
    expect(result.current.filteredCourses.length).toBeGreaterThan(0);
    expect(result.current.filteredCourses.every((c) => c.category === 'Cybersecurity')).toBe(true);
  });

  it('should filter courses when search term changes', () => {
    const { result } = renderHook(() => useProjectsAndCertsFilter());

    act(() => {
      result.current.setSearchTerm('Python');
    });

    expect(result.current.searchTerm).toBe('Python');
    expect(result.current.filteredCourses.length).toBeGreaterThan(0);
    expect(
      result.current.filteredCourses.every(
        (c) =>
          c.title.toLowerCase().includes('python') ||
          c.description.toLowerCase().includes('python') ||
          c.skills.some((s) => s.toLowerCase().includes('python'))
      )
    ).toBe(true);
  });

  it('should return correct category count', () => {
    const { result } = renderHook(() => useProjectsAndCertsFilter());

    const totalCount = result.current.getCategoryCount('All');
    expect(totalCount).toBe(result.current.allCourses.length);

    const seCount = result.current.getCategoryCount('Software Engineering');
    expect(seCount).toBeGreaterThan(0);
  });

  it('should reset filters', () => {
    const { result } = renderHook(() => useProjectsAndCertsFilter());

    act(() => {
      result.current.setSelectedCategory('Data & Analytics');
      result.current.setSearchTerm('TensorFlow');
    });

    expect(result.current.selectedCategory).toBe('Data & Analytics');
    expect(result.current.searchTerm).toBe('TensorFlow');

    act(() => {
      result.current.resetFilters();
    });

    expect(result.current.selectedCategory).toBe('All');
    expect(result.current.searchTerm).toBe('');
  });

  it('should select skill filter and update selectedCourse', () => {
    const { result } = renderHook(() => useProjectsAndCertsFilter());

    act(() => {
      result.current.handleSelectSkillFilter('AWS');
    });
    expect(result.current.searchTerm).toBe('AWS');

    const course = result.current.filteredCourses[0];
    act(() => {
      result.current.setSelectedCourse(course);
    });
    expect(result.current.selectedCourse).toEqual(course);
  });
});
