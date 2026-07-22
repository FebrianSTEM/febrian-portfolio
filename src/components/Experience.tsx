import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('vlink');

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-950/50">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">Track Record</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient-blue">Experiences</span>
          </h3>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Full history of engineering contributions across banking, hospital systems, property tech, and financial applications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
          
          {PORTFOLIO_DATA.experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Bullet Node */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-4 ${
                  index === 0 ? 'bg-blue-500 border-slate-950 ring-4 ring-blue-500/20' : 'bg-slate-700 border-slate-950'
                } group-hover:scale-125 transition-transform`} />

                {/* Experience Card */}
                <div 
                  onClick={() => setExpandedId(isExpanded ? '' : exp.id)}
                  className={`bg-glass-card p-6 rounded-2xl border transition-all cursor-pointer ${
                    isExpanded ? 'border-blue-500/50 shadow-xl shadow-blue-950/40 bg-slate-900/90' : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  
                  {/* Top Bar: Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="inline-block text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider mb-1">
                        {exp.company}
                      </span>
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h4>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-1 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        <span>{exp.period}</span>
                      </div>
                      {exp.location && (
                        <div className="hidden md:flex items-center gap-1 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-3 mt-4">
                    {exp.highlights.slice(0, isExpanded ? exp.highlights.length : 3).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                        <span>
                          {item.includes('Optimized payout settlement') ? (
                            <strong className="text-emerald-400 font-semibold">{item}</strong>
                          ) : (
                            item
                          )}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Expand / Collapse Indicator if many points */}
                  {exp.highlights.length > 3 && (
                    <button 
                      className="mt-3 text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <span>{isExpanded ? 'Show less' : `+${exp.highlights.length - 3} more details`}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-950/60 text-blue-300 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
