import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code, Database, Server, Cpu, BarChart3, CheckCircle2, Cloud } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Programming Languages": <Code className="w-5 h-5 text-blue-400" />,
  "Frameworks & Backend": <Server className="w-5 h-5 text-cyan-400" />,
  "APIs & Protocols": <Cpu className="w-5 h-5 text-indigo-400" />,
  "Databases & Caching": <Database className="w-5 h-5 text-emerald-400" />,
  "Analytics & BI": <BarChart3 className="w-5 h-5 text-sky-400" />,
  "Testing & Quality Assurance": <CheckCircle2 className="w-5 h-5 text-teal-400" />,
  "DevOps, Cloud & Management": <Cloud className="w-5 h-5 text-blue-500" />
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...PORTFOLIO_DATA.skills.map(s => s.category)];

  const filteredSkills = selectedCategory === 'All'
    ? PORTFOLIO_DATA.skills
    : PORTFOLIO_DATA.skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">Technical Proficiency</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-blue">Skills & Stack</span>
          </h3>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Comprehensive tools, frameworks, and technologies honed over 7+ years of software engineering.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-blue-500/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                  {CATEGORY_ICONS[skillGroup.category] || <Code className="w-5 h-5 text-blue-400" />}
                </div>
                <h4 className="font-bold text-white text-base group-hover:text-blue-400 transition-colors">
                  {skillGroup.category}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-900/90 text-blue-300 border border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-600/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
