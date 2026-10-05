import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { DavinLogo } from './DavinLogo';
import { ScreenView } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigateScreen: (screen: ScreenView) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateScreen, onOpenContact }) => {
  return (
    <footer className="bg-[#FAF9F5] border-t border-[#E7E5E4] pt-16 pb-12 text-[#57534E]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E7E5E4]">
          {/* Col 1: Brand & bio */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <DavinLogo variant="full" size="md" onClick={() => onNavigateScreen('portfolio')} />
              <p className="mt-4 text-xs sm:text-sm text-[#78716C] leading-relaxed max-w-sm">
                Développeur Full-Stack &amp; Architecte Web. Conception de plateformes robustes, performantes et centrées sur l'expérience utilisateur.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#D97706]">
              <span className="w-2 h-2 rounded-full bg-[#F26A1B] animate-pulse" />
              <span>Disponible pour de nouvelles opportunités</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1C1917] mb-4">
              NAVIGATION
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigateScreen('portfolio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#1C1917] transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <a href="#philosophie" className="hover:text-[#1C1917] transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#competences" className="hover:text-[#1C1917] transition-colors">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#projets" className="hover:text-[#1C1917] transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#parcours" className="hover:text-[#1C1917] transition-colors">
                  Parcours
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Info */}
          <div className="md:col-span-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1C1917] mb-4">
              CONTACT &amp; RÉSEAUX
            </div>
            <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed mb-4">
              N'hésitez pas à me joindre pour des missions freelance, du conseil technique ou un poste d'ingénierie.
            </p>
            <div className="text-xs text-[#1C1917] space-y-2.5 mb-4">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F26A1B] shrink-0" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono hover:text-[#F26A1B] transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F26A1B] shrink-0" />
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-mono hover:text-[#F26A1B] transition-colors text-[#57534E]"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[#78716C]">
                <MapPin className="w-4 h-4 text-[#F26A1B] shrink-0" />
                <span>Dakar / Sénégal &amp; Télétravail International</span>
              </div>
            </div>

            {/* Bouton WhatsApp direct */}
            <a
              href="https://wa.me/221772783150?text=Bonjour%20Papa%20Daouda,%20je%20vous%20contacte%20depuis%20votre%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#15803D] hover:text-[#166534] text-xs font-semibold transition-all duration-150 cursor-pointer shadow-xs active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-[#16A34A]" />
              <span>Discuter sur WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A29E]">
          <div>
            © {new Date().getFullYear()} DEV'S (Samb Papa Daouda). Tous droits réservés.
          </div>
          <div className="font-medium text-[#78716C]">
            Conçu avec rigueur &amp; modernité
          </div>
        </div>
      </div>
    </footer>
  );
};
