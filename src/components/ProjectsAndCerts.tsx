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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Personal Projects Subsection */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 // PERSONAL PROJECTS</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Highlighted Software Projects
            </h3>
            <p className="mt-2 text-slate-400 text-sm max-w-xl mx-auto">
              Automated data ingestion engines, scraper tools, and utility frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
            {PORTFOLIO_DATA.projects.map((proj) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-[#090D16] p-7 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all relative overflow-hidden group shadow-lg"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 group-hover:scale-105 transition-transform">
                      <FolderGit2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {proj.title}
                      </h4>
                      <span className="text-xs font-mono text-blue-400">
                        Automated Data Scraper & Alert Engine
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {proj.description}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-500 mr-1.5">
                    Stack:
                  </span>
                  {proj.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>04 // CREDENTIALS & CERTIFICATIONS</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Certifications & Courses
            </h3>
            <p className="mt-2 text-slate-400 text-sm max-w-xl mx-auto">
              Verified LinkedIn credentials, backend architecture bootcamps, and specialized certifications.
            </p>
          </div>

          {/* Search Bar & Category Filter Controls */}
          <div className="mb-10 space-y-4">
            {/* Search Input Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4 text-blue-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, issuer, or skill (.NET, AWS, Python, Security)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#090D16] border border-slate-800 text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-all font-mono"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs font-mono text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills Bar */}
            <div className="flex flex-wrap items-center justify-center gap-1.5">
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
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                      isActive
                        ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                        : 'bg-[#090D16] text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-slate-800'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] ${
                        isActive
                          ? 'bg-slate-950/40 text-white font-bold'
                          : 'bg-slate-900 text-slate-500'
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
            <div className="text-center py-12 bg-[#090D16] rounded-2xl border border-slate-800">
              <Award className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <h4 className="text-base font-bold text-slate-300 font-mono">No credentials found</h4>
              <p className="text-xs text-slate-500 mt-1">
                Try adjusting your search terms or selecting another category.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-blue-400 hover:underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              <AnimatePresence>
                {filteredCourses.map((course, idx) => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="bg-[#090D16] p-5 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
                  >
                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        {/* Issuer Logo Container */}
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform shrink-0">
                          <Award className="w-5 h-5 text-blue-400" />
                        </div>

                        {/* Badges Container */}
                        <div className="flex flex-col items-end gap-1">
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded">
                            <ShieldCheck className="w-3 h-3" /> Verified
                          </span>
                          {course.featured && (
                            <span className="inline-flex items-center gap-1 text-[9px] font-mono text-blue-400 bg-blue-950/40 border border-blue-500/30 px-2 py-0.5 rounded">
                              <Sparkles className="w-2.5 h-2.5 text-amber-400" /> Featured
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Course Title & Organizer */}
                      <h4 className="font-bold text-white text-sm leading-snug group-hover:text-blue-300 transition-colors mb-1">
                        {course.title}
                      </h4>
                      <div className="text-xs font-mono text-slate-400 mb-3">
                        {course.organizer}
                      </div>

                      {/* Description Snippet */}
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                        {course.description}
                      </p>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {course.skills.slice(0, 4).map((skill) => (
                          <button
                            key={skill}
                            onClick={() => setSearchTerm(skill)}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800 hover:border-blue-500/50 hover:text-blue-300 transition-colors"
                            title={`Filter by skill: ${skill}`}
                          >
                            {skill}
                          </button>
                        ))}
                        {course.skills.length > 4 && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-500">
                            +{course.skills.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Metadata & Action Row */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 mt-2">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        <span>{course.issued}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setSelectedCourse(course)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5 text-blue-400" />
                          <span>Details</span>
                        </button>
                        {course.credentialUrl && (
                          <a
                            href={course.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded bg-slate-900 text-slate-400 hover:text-blue-400 border border-slate-800 transition-colors"
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

