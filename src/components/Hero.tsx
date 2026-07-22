import React from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle, Mail, Terminal, Zap, ShieldCheck, ChevronDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-blue-500/30 text-blue-300 text-xs font-mono mb-8 backdrop-blur-md shadow-inner shadow-blue-500/10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Senior Software Engineer • Enterprise Backend & Fullstack</span>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
        >
          Hi, I'm <span className="text-gradient-blue">{PORTFOLIO_DATA.personal.name}</span>
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl text-slate-300 font-medium max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Specializing in high-throughput enterprise systems, payment gateways, and batch performance optimization in <span className="text-blue-400 font-semibold">.NET 8, C#, Java, Python, and AWS</span>.
        </motion.p>

        {/* Summary Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {PORTFOLIO_DATA.personal.summary}
        </motion.p>

        {/* Call To Action Buttons (WhatsApp, Email, GitHub, LinkedIn, CV Download) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          {/* WhatsApp Direct */}
          <a
            href={PORTFOLIO_DATA.personal.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/40 transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Email Link */}
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5"
          >
            <Mail className="w-5 h-5" />
            <span>Send Email</span>
          </a>

          {/* Download Real CV */}
          <a
            href={PORTFOLIO_DATA.personal.cvFileUrl}
            download="CV_Muhammad_Febrian_Maulana_2026.pdf"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
          >
            <Download className="w-5 h-5 text-cyan-400" />
            <span>Download Real CV</span>
          </a>

          {/* GitHub */}
          <a
            href={PORTFOLIO_DATA.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/40 transition-all hover:-translate-y-0.5"
            title="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          {/* LinkedIn */}
          <a
            href={PORTFOLIO_DATA.personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/40 transition-all hover:-translate-y-0.5"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5 text-blue-400" />
          </a>
        </motion.div>

        {/* Key Performance Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {PORTFOLIO_DATA.personal.metrics.map((metric, index) => (
            <div key={index} className="bg-glass-card p-5 rounded-2xl text-left border border-slate-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                {index === 0 ? <Zap className="w-12 h-12 text-cyan-400" /> : index === 1 ? <ShieldCheck className="w-12 h-12 text-blue-400" /> : <Terminal className="w-12 h-12 text-indigo-400" />}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1 group-hover:text-blue-400 transition-colors">
                {metric.value}
              </div>
              <div className="text-xs font-mono uppercase text-blue-400 tracking-wider mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 leading-snug">
                {metric.highlight}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#skills"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="mt-16 text-slate-500 hover:text-blue-400 transition-colors flex flex-col items-center gap-1 cursor-pointer"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll Down</span>
        <ChevronDown className="w-5 h-5 text-blue-400" />
      </motion.a>

    </section>
  );
};
