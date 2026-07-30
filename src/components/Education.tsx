import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, CheckCircle, Award } from 'lucide-react';

export const Education: React.FC = () => {
  const edu = PORTFOLIO_DATA.education[0];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-950/50">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="mb-10">
          <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">Academic Background</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-blue">Degree</span>
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-glass-card p-8 rounded-3xl border border-slate-800 relative overflow-hidden text-left shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-2">
                  <CheckCircle className="w-3 h-3" />
                  <span>{edu.status}</span>
                </span>
                <h4 className="text-2xl font-bold text-white mb-1">
                  {edu.degree}
                </h4>
                <p className="text-lg font-medium text-blue-400">
                  {edu.institution}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 text-sm font-mono text-slate-400 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{edu.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Graduation: {edu.period}</span>
              </div>
              {edu.gpa && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-cyan-500/10 border border-cyan-500/40 text-cyan-300 font-semibold shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0 animate-pulse" />
                    <span>GPA: {edu.gpa}</span>
                  </span>
                </div>
              )}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
