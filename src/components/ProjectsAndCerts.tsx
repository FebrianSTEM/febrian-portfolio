import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA, type CourseItem } from '../data/portfolioData';
import { CredentialModal } from './CredentialModal';
import { FolderGit2, Award, Calendar, Search, ShieldCheck, ExternalLink, Eye, Sparkles } from 'lucide-react';

export const ProjectsAndCerts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  const categories = [
    'All',
    'Software Engineering',
    'Web & Backend',
    'Data & Analytics',
    'Cybersecurity',
    'Enterprise Systems',
  ];

  const filteredCourses = PORTFOLIO_DATA.courses.filter((course) => {
    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !term ||
      course.title.toLowerCase().includes(term) ||
      course.organizer.toLowerCase().includes(term) ||
      course.description.toLowerCase().includes(term) ||
      course.skills.some((s) => s.toLowerCase().includes(term)) ||
      course.category.toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Personal Projects Subsection */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              Portfolio Project
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Personal <span className="text-gradient-cosmic">Projects</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
            {PORTFOLIO_DATA.projects.map((proj) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="cosmic-card p-8 rounded-2xl border border-cyan-500/20 relative overflow-hidden group hover:border-purple-500/40"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                      <FolderGit2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {proj.title}
                      </h4>
                      <span className="text-xs font-mono text-cyan-300">
                        Automated Data Scraper & Alert Engine
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {proj.description}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">
                    Tech Stack:
                  </span>
                  {proj.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Subsection */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              Professional Growth & Qualifications
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Courses & <span className="text-gradient-nebula">Certifications</span>
            </h3>
            <p className="mt-3 text-slate-400 text-sm max-w-xl mx-auto">
              Verified LinkedIn credentials, enterprise architecture bootcamps, and high-impact specialized engineering certifications.
            </p>
          </div>

          {/* Search Bar & Category Filter Controls */}
          <div className="mb-10 space-y-5">
            {/* Search Input Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4 text-cyan-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by course title, issuer, or skill (e.g. .NET, AWS, Python, Security)..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-900/80 border border-cyan-500/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all backdrop-blur-md"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-mono text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => {
                const count =
                  cat === 'All'
                    ? PORTFOLIO_DATA.courses.length
                    : PORTFOLIO_DATA.courses.filter((c) => c.category === cat).length;

                const isActive = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all flex items-center gap-2 ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-105'
                        : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                        isActive
                          ? 'bg-slate-950/30 text-slate-950 font-bold'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
              <Award className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-slate-300">No credentials found</h4>
              <p className="text-sm text-slate-500 mt-1">
                Try adjusting your search query or switching categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:bg-cyan-900/50 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredCourses.map((course, idx) => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="cosmic-card p-6 rounded-2xl border border-cyan-500/15 bg-slate-900/70 backdrop-blur-md flex flex-col justify-between group hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
                  >
                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        {/* Issuer Logo Container */}
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-950 to-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0 shadow-inner">
                          <Award className="w-6 h-6 text-cyan-400 group-hover:text-purple-300 transition-colors" />
                        </div>

                        {/* Badges Container */}
                        <div className="flex flex-col items-end gap-1.5">
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded-full">
                            <ShieldCheck className="w-3 h-3" /> Verified
                          </span>
                          {course.featured && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                              <Sparkles className="w-2.5 h-2.5 text-cyan-400" /> Featured
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Course Title & Organizer */}
                      <h4 className="font-bold text-white text-base leading-snug group-hover:text-cyan-300 transition-colors mb-1">
                        {course.title}
                      </h4>
                      <div className="text-xs font-medium text-slate-400 mb-3">
                        {course.organizer}
                      </div>

                      {/* Description Snippet */}
                      <p className="text-xs text-slate-300/80 line-clamp-2 leading-relaxed mb-4">
                        {course.description}
                      </p>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {course.skills.slice(0, 4).map((skill) => (
                          <button
                            key={skill}
                            onClick={() => setSearchTerm(skill)}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-cyan-950/50 text-cyan-300/90 border border-cyan-500/20 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
                            title={`Filter by skill: ${skill}`}
                          >
                            {skill}
                          </button>
                        ))}
                        {course.skills.length > 4 && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-800 text-slate-400">
                            +{course.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Metadata & CTA Action Row */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 mt-2">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{course.issued}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedCourse(course)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-900/60 hover:text-cyan-100 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Details</span>
                        </button>
                        {course.credentialUrl && (
                          <a
                            href={course.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-300 hover:bg-slate-700 transition-colors"
                            title="Verify credential link"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

      {/* Credential Details Modal */}
      <CredentialModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </section>
  );
};
