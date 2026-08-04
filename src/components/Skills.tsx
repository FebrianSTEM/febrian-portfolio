import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code, Database, Server, Cpu, BarChart3, CheckCircle2, Cloud, Search } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Programming Languages": <Code className="w-4 h-4 text-blue-400" />,
  "Frameworks & Backend": <Server className="w-4 h-4 text-cyan-400" />,
  "APIs & Protocols": <Cpu className="w-4 h-4 text-indigo-400" />,
  "Databases & Caching": <Database className="w-4 h-4 text-emerald-400" />,
  "Analytics & BI": <BarChart3 className="w-4 h-4 text-amber-400" />,
  "Testing & Quality Assurance": <CheckCircle2 className="w-4 h-4 text-teal-400" />,
  "DevOps, Cloud & Management": <Cloud className="w-4 h-4 text-blue-500" />
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...PORTFOLIO_DATA.skills.map(s => s.category)];

  const filteredSkills = PORTFOLIO_DATA.skills
    .filter(s => selectedCategory === 'All' || s.category === selectedCategory)
    .map(s => {
      if (!searchQuery.trim()) return s;
      const filteredItems = s.items.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
      return { ...s, items: filteredItems };
    })
    .filter(s => s.items.length > 0);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <span>01 // STACK & PROFICIENCY</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Core & Skills
          </h3>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Battle-tested technologies, frameworks, databases, and enterprise platforms.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-10 space-y-4">
          {/* Quick Search Bar */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4 text-blue-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. C#, .NET, Python, AWS, Redis)..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#090D16] border border-slate-800 text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs font-mono text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                      : 'bg-[#090D16] text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-12 bg-[#090D16] rounded-2xl border border-slate-800">
            <p className="text-sm font-mono text-slate-400">No skills match "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs font-mono text-blue-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-[#090D16] p-5 rounded-2xl border border-slate-800/80 hover:border-blue-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                        {CATEGORY_ICONS[skillGroup.category] || <Code className="w-4 h-4 text-blue-400" />}
                      </div>
                      <h4 className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors">
                        {skillGroup.category}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {skillGroup.items.length}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800 hover:border-blue-500/50 hover:text-blue-300 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

