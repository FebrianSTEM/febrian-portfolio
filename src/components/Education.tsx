import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, CheckCircle, Award } from 'lucide-react';

export const Education: React.FC = () => {
  const edu = PORTFOLIO_DATA.education[0];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05 // ACADEMIC BACKGROUND</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Degree
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-[#090D16] p-8 rounded-2xl border border-slate-800 relative overflow-hidden text-left shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-2">
                  <CheckCircle className="w-3 h-3" />
                  <span>{edu.status}</span>
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {edu.degree}
                </h4>
                <p className="text-base font-medium text-blue-400">
                  {edu.institution}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-xs font-mono text-slate-400 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-8">
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
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-amber-500/40 text-amber-300 font-semibold shadow-sm">
                    <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
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

