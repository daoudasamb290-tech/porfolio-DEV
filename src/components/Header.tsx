import React, { useState } from 'react';
import { DavinLogo } from './DavinLogo';
import { MessageSquare, LayoutGrid, Smartphone, Activity, FileText, ChevronDown } from 'lucide-react';
import { ScreenView } from '../types';

interface HeaderProps {
  currentScreen: ScreenView;
  onNavigateScreen: (screen: ScreenView) => void;
  onOpenContact: () => void;
  onOpenImageTool?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigateScreen,
  onOpenContact,
}) => {
  const [screensMenuOpen, setScreensMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const screensList: { id: ScreenView; label: string; icon: React.ReactNode; desc: string }[] = [
    {
      id: 'portfolio',
      label: 'Portfolio Complet',
      icon: <LayoutGrid className="w-4 h-4 text-[#F26A1B]" />,
      desc: 'Vue d’ensemble fidèle à la maquette',
    },
    {
      id: 'dem-driver',
      label: 'Écran DEM Driver',
      icon: <Smartphone className="w-4 h-4 text-[#EA580C]" />,
      desc: 'App mobile de réservation & Wave Money',
    },
    {
      id: 'sante-meds',
      label: 'Écran Santé & Médicaments',
      icon: <Activity className="w-4 h-4 text-[#0D9488]" />,
      desc: 'Plateforme officines & ordonnances',
    },
    {
      id: 'analytics',
      label: 'Écran Analyseur d’Annulations',
      icon: <LayoutGrid className="w-4 h-4 text-[#4F46E5]" />,
      desc: 'Dashboard décisionnel temps réel',
    },
    {
      id: 'artisan-pro',
      label: 'Écran ArtisanPro Sénégal',
      icon: <FileText className="w-4 h-4 text-[#EA580C]" />,
      desc: 'Devis & factures artisans hors-ligne',
    },
    {
      id: 'cv',
      label: 'Écran CV Formaté',
      icon: <FileText className="w-4 h-4 text-[#262C32]" />,
      desc: 'Curriculum Vitae complet & imprimable',
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E7E5E4] transition-all">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark (Single text element according to Top Bar Contract) */}
        <div className="flex items-center gap-3">
          <DavinLogo
            variant="compact"
            size="sm"
            onClick={() => onNavigateScreen('portfolio')}
            className="cursor-pointer"
          />
        </div>

        {/* Zone 2: Navigation Links (Clean text links with subtle hover) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]">
          <button
            onClick={() => onNavigateScreen('portfolio')}
            className={`transition-colors hover:text-[#1C1917] ${
              currentScreen === 'portfolio' ? 'text-[#1C1917] font-semibold' : ''
            }`}
          >
            Accueil
          </button>
          <a
            href="#philosophie"
            onClick={(e) => {
              if (currentScreen !== 'portfolio') {
                e.preventDefault();
                onNavigateScreen('portfolio');
                setTimeout(() => {
                  document.getElementById('philosophie')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="hover:text-[#1C1917] transition-colors"
          >
            À propos
          </a>
          <a
            href="#competences"
            onClick={(e) => {
              if (currentScreen !== 'portfolio') {
                e.preventDefault();
                onNavigateScreen('portfolio');
                setTimeout(() => {
                  document.getElementById('competences')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="hover:text-[#1C1917] transition-colors"
          >
            Compétences
          </a>
          <a
            href="#projets"
            onClick={(e) => {
              if (currentScreen !== 'portfolio') {
                e.preventDefault();
                onNavigateScreen('portfolio');
                setTimeout(() => {
                  document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="hover:text-[#1C1917] transition-colors"
          >
            Projets
          </a>
          <a
            href="#parcours"
            onClick={(e) => {
              if (currentScreen !== 'portfolio') {
                e.preventDefault();
                onNavigateScreen('portfolio');
                setTimeout(() => {
                  document.getElementById('parcours')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="hover:text-[#1C1917] transition-colors"
          >
            Parcours
          </a>

          {/* Écrans Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setScreensMenuOpen(!screensMenuOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-[#F4F2EC] hover:bg-[#EAE7DF] text-[#1C1917] rounded-md transition-colors"
              title="Naviguer entre les écrans de l'application"
            >
              <span>Écrans ({screensList.length})</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${screensMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {screensMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setScreensMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-[#E7E5E4] py-2 z-20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider text-[#A8A29E] uppercase border-b border-[#F4F2EC]">
                    Changer d'écran interactif
                  </div>
                  {screensList.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigateScreen(item.id);
                        setScreensMenuOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2.5 flex items-start gap-3 hover:bg-[#FAF9F5] transition-colors ${
                        currentScreen === item.id ? 'bg-[#FAF9F5] border-l-2 border-[#F26A1B]' : ''
                      }`}
                    >
                      <div className="mt-0.5 p-1 rounded-md bg-[#F4F2EC]">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#1C1917]">
                          {item.label}
                        </div>
                        <div className="text-[11px] text-[#78716C] leading-snug">
                          {item.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </nav>

        {/* Zone 3: Primary Actions (CTA Parlons-en) */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#F26A1B] hover:bg-[#D8580E] active:scale-[0.98] rounded-lg shadow-xs transition-all duration-150 cursor-pointer whitespace-nowrap"
          >
            <span>Parlons-en</span>
            <MessageSquare className="w-4 h-4 shrink-0" />
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#78716C] hover:text-[#1C1917] rounded-md"
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E7E5E4] bg-white px-4 py-3 space-y-2">
          <div className="text-xs font-semibold text-[#A8A29E] uppercase px-2 py-1">Navigation</div>
          <button
            onClick={() => {
              onNavigateScreen('portfolio');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 text-sm font-medium text-[#1C1917] hover:bg-[#FAF9F5] rounded-md"
          >
            Accueil (Portfolio)
          </button>
          <button
            onClick={() => {
              onNavigateScreen('dem-driver');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 text-sm font-medium text-[#1C1917] hover:bg-[#FAF9F5] rounded-md"
          >
            Écran DEM Driver
          </button>
          <button
            onClick={() => {
              onNavigateScreen('sante-meds');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 text-sm font-medium text-[#1C1917] hover:bg-[#FAF9F5] rounded-md"
          >
            Écran Santé & Médicaments
          </button>
          <button
            onClick={() => {
              onNavigateScreen('analytics');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 text-sm font-medium text-[#1C1917] hover:bg-[#FAF9F5] rounded-md"
          >
            Écran Analyseur d'Annulations
          </button>
          <button
            onClick={() => {
              onNavigateScreen('artisan-pro');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 text-sm font-medium text-[#1C1917] hover:bg-[#FAF9F5] rounded-md"
          >
            Écran ArtisanPro Sénégal
          </button>
          <button
            onClick={() => {
              onNavigateScreen('cv');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 text-sm font-medium text-[#1C1917] hover:bg-[#FAF9F5] rounded-md"
          >
            Curriculum Vitae (CV)
          </button>
        </div>
      )}
    </header>
  );
};
