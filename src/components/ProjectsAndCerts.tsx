import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FolderGit2, Award, Calendar } from 'lucide-react';

export const ProjectsAndCerts: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Personal Projects Subsection */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">Portfolio Project</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Personal <span className="text-gradient-blue">Projects</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            {PORTFOLIO_DATA.projects.map((proj) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-glass-card p-8 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-blue-500/40"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
                      <FolderGit2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {proj.title}
                      </h4>
                      <span className="text-xs font-mono text-cyan-400">Automated Data Scraper & Alert Engine</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {proj.description}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Tech Stack:</span>
                  {proj.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-blue-950/80 text-cyan-300 border border-cyan-500/20"
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
          <div className="text-center mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">Professional Growth</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Courses & <span className="text-gradient-cyan">Certifications</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.courses.map((course, idx) => (
              <motion.div
                key={`${course.title}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                      {course.title}
                    </h5>
                    <span className="text-xs text-slate-400">{course.organizer}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mt-4 pt-3 border-t border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>Issued: {course.issued}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
