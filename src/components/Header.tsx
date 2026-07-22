import React, { useState, useEffect } from 'react';
import { Download, MessageCircle, Mail, Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/85 backdrop-blur-md border-b border-blue-500/20 shadow-lg shadow-blue-950/20' : 'bg-transparent py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-extrabold text-white text-xl shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
              FM
            </div>
            <div>
              <span className="font-bold text-white tracking-wide text-base sm:text-lg block group-hover:text-blue-400 transition-colors">
                M. Febrian Maulana
              </span>
              <span className="text-xs text-blue-400/90 font-mono tracking-wider uppercase block">
                Senior Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Skills</a>
            <a href="#experience" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Projects & Certs</a>
            <a href="#education" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Education</a>
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Link */}
            <a
              href={PORTFOLIO_DATA.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:scale-105 transition-all shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Email Link */}
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 hover:scale-105 transition-all shadow-sm"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Download Real CV Button */}
            <a
              href={PORTFOLIO_DATA.personal.cvFileUrl}
              download="CV_Muhammad_Febrian_Maulana_2026.pdf"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PORTFOLIO_DATA.personal.cvFileUrl}
              download="CV_Muhammad_Febrian_Maulana_2026.pdf"
              className="p-2 rounded-lg bg-blue-600 text-white text-xs font-medium flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 border-b border-blue-500/20 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-blue-400"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-blue-400"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-blue-400"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-blue-400"
          >
            Projects & Certs
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-blue-400"
          >
            Education
          </a>
          
          <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 font-medium text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 font-medium text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a
              href={PORTFOLIO_DATA.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-800 text-slate-300"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-800 text-slate-300"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
