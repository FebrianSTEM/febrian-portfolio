import { JokeTicker } from './components/JokeTicker';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { ProjectsAndCerts } from './components/ProjectsAndCerts';
import { Education } from './components/Education';
import { ContactFooter } from './components/ContactFooter';

export function App() {
  return (
    <div className="min-h-screen bg-[#070a13] text-slate-200 selection:bg-blue-600 selection:text-white font-sans">
      {/* Running Wise Jokes Marquee at Top */}
      <JokeTicker />

      {/* Sticky Navigation Header */}
      <Header />

      {/* Main Landing Content */}
      <main>
        <Hero />
        <Skills />
        <Experience />
        <ProjectsAndCerts />
        <Education />
      </main>

      {/* Contact & Footer Section */}
      <ContactFooter />
    </div>
  );
}

export default App;
