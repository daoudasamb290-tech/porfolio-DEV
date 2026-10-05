import React, { useState } from 'react';
import { ScreenView } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PhilosophySection } from './components/PhilosophySection';
import { TechArsenalSection } from './components/TechArsenalSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CaseStudySection } from './components/CaseStudySection';
import { ExperienceSection } from './components/ExperienceSection';
import { MethodologySection } from './components/MethodologySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Interactive App Screens
import { DemDriverScreen } from './components/screens/DemDriverScreen';
import { SanteMedsScreen } from './components/screens/SanteMedsScreen';
import { AnalyticsScreen } from './components/screens/AnalyticsScreen';
import { ArtisanProScreen } from './components/screens/ArtisanProScreen';

// Modals
import { ContactModal } from './components/modals/ContactModal';
import { CvModal } from './components/modals/CvModal';
import { ImageLinkGeneratorModal } from './components/ImageLinkGeneratorModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenView>('portfolio');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [imageToolModalOpen, setImageToolModalOpen] = useState(false);

  const handleNavigateScreen = (screen: ScreenView) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    if (currentScreen !== 'portfolio') {
      setCurrentScreen('portfolio');
      setTimeout(() => {
        document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C1917] flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Header
        currentScreen={currentScreen}
        onNavigateScreen={handleNavigateScreen}
        onOpenContact={() => setContactModalOpen(true)}
        onOpenImageTool={() => setImageToolModalOpen(true)}
      />

      {/* Screen Router */}
      <main className="flex-1">
        {currentScreen === 'portfolio' && (
          <>
            {/* Section 1: Hero Split (Info + Terminal + Workspace) */}
            <Hero
              onScrollToProjects={scrollToProjects}
              onOpenCvModal={() => setCvModalOpen(true)}
            />

            {/* Section 2: Philosophie & Valeurs (6 Cards) */}
            <PhilosophySection />

            {/* Section 3: Arsenal Technique (Technologies & Offline Optimization Banner) */}
            <TechArsenalSection />

            {/* Section 4: Réalisations Clés (Projects 1, 2, 3) */}
            <ProjectsSection onOpenScreen={handleNavigateScreen} />

            {/* Section 5: Étude de Cas Complète DEM Driver */}
            <CaseStudySection onOpenDemDriver={() => handleNavigateScreen('dem-driver')} />

            {/* Section 6: Évolution (Parcours & Expérience) */}
            <ExperienceSection />

            {/* Section 7: Processus Rigoureux (Ma méthode de travail) */}
            <MethodologySection />

            {/* Section 8: Confiance & Retours (Testimonials) */}
            <TestimonialsSection />

            {/* Section 9: Disponibilité Immédiate (Contact Box & Socials) */}
            <ContactSection
              onOpenContactModal={() => setContactModalOpen(true)}
              onOpenCvModal={() => setCvModalOpen(true)}
            />
          </>
        )}

        {currentScreen === 'dem-driver' && (
          <DemDriverScreen
            onBack={() => handleNavigateScreen('portfolio')}
            onNavigateScreen={handleNavigateScreen}
          />
        )}

        {currentScreen === 'sante-meds' && (
          <SanteMedsScreen
            onBack={() => handleNavigateScreen('portfolio')}
            onNavigateScreen={handleNavigateScreen}
          />
        )}

        {currentScreen === 'analytics' && (
          <AnalyticsScreen
            onBack={() => handleNavigateScreen('portfolio')}
            onNavigateScreen={handleNavigateScreen}
          />
        )}

        {currentScreen === 'artisan-pro' && (
          <ArtisanProScreen
            onBack={() => handleNavigateScreen('portfolio')}
            onNavigateScreen={handleNavigateScreen}
          />
        )}

        {currentScreen === 'cv' && (
          <div className="py-8">
            <CvModal isOpen={true} onClose={() => handleNavigateScreen('portfolio')} />
          </div>
        )}
      </main>

      {/* Global Footer */}
      {currentScreen === 'portfolio' && (
        <Footer
          onNavigateScreen={handleNavigateScreen}
          onOpenContact={() => setContactModalOpen(true)}
        />
      )}

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      <ImageLinkGeneratorModal
        isOpen={imageToolModalOpen}
        onClose={() => setImageToolModalOpen(false)}
      />
    </div>
  );
}
