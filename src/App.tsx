import { JokeTicker } from './components/JokeTicker';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { ProjectsAndCerts } from './components/ProjectsAndCerts';
import { Education } from './components/Education';
import { ContactFooter } from './components/ContactFooter';
import { CosmicUniverseCanvas } from './components/CosmicUniverseCanvas';

export function App() {
  return (
    <div className="min-h-screen bg-[#050714] text-slate-200 selection:bg-cyan-500 selection:text-slate-950 font-sans relative overflow-x-hidden">
      {/* Cosmic Universe Background Canvas Engine */}
      <CosmicUniverseCanvas />

      {/* Main Content Layout Wrapper */}
      <div className="relative z-10">
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
    </div>
  );
}

export default App;
