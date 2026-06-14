
import TopNavBar from './components/TopNavBar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MindsetSection from './components/MindsetSection';
import DisciplinesSection from './components/DisciplinesSection';
import DivisionsSection from './components/DivisionsSection';
import ProjectsSection from './components/ProjectsSection';
import JournalSection from './components/JournalSection';
import ContactSection from './components/ContactSection';
import MegaFooter from './components/MegaFooter';
import AnimatedTopo from './components/AnimatedTopo';
import CursorGlow from './components/CursorGlow';

function App() {
  return (
    <div className="min-h-screen bg-transparent font-body-md text-on-surface">
      <CursorGlow />
      <AnimatedTopo />
      <TopNavBar />
      <main>
        <Hero />
        <AboutSection />
        <MindsetSection />
        <DisciplinesSection />
        <DivisionsSection />
        <ProjectsSection />
        <JournalSection />
        <ContactSection />
      </main>
      <MegaFooter />
    </div>
  );
}

export default App;
