import React, { useState } from 'react';
import { ArrowRight, FileText, MapPin, Sparkles, Code, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TerminalCode } from './TerminalCode';
import papaDaoudaImg from '../assets/images/Papa daouda.jpg';

interface HeroProps {
  onScrollToProjects: () => void;
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToProjects, onOpenCvModal }) => {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <section className="pt-8 sm:pt-14 pb-14 border-b border-[#E7E5E4] bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Text & Metrics */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status kicker badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F26A1B]/10 text-[#D8580E] border border-[#F26A1B]/20">
                <span className="w-2 h-2 rounded-full bg-[#F26A1B] animate-pulse" />
                <span>{PERSONAL_INFO.tagline}</span>
              </span>
            </div>

            {/* Main Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1C1917] leading-[1.1] text-balance">
              {PERSONAL_INFO.name}
            </h1>

            <p className="mt-3 text-xl sm:text-2xl font-semibold text-[#57534E]">
              {PERSONAL_INFO.title}
            </p>

            <p className="mt-5 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onScrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#F26A1B] hover:bg-[#D8580E] active:scale-[0.98] rounded-lg shadow-sm transition-all duration-150 cursor-pointer"
              >
                <span>Voir mes projets</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#FAF9F5] bg-[#1C1917] hover:bg-[#2E2A27] active:scale-[0.98] rounded-lg shadow-sm transition-all duration-150 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Voir mon cv</span>
              </button>
            </div>

            {/* Hero Metrics Row */}
            <div className="mt-12 pt-8 border-t border-[#E7E5E4] grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight font-mono tabular-nums">
                  100%
                </div>
                <div className="mt-1 text-xs sm:text-sm text-[#78716C] font-medium leading-snug">
                  Autonome & Pragmatique
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F26A1B] tracking-tight font-mono tabular-nums">
                  4+
                </div>
                <div className="mt-1 text-xs sm:text-sm text-[#78716C] font-medium leading-snug">
                  Produits en Production
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
                  Dakar
                </div>
                <div className="mt-1 text-xs sm:text-sm text-[#78716C] font-medium flex items-center gap-1 leading-snug">
                  <MapPin className="w-3.5 h-3.5 text-[#F26A1B] shrink-0" />
                  <span>Sénégal & Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Arched Designer Shape with Concentric Rings matching img.jpg */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-6">
            {/* Concentric circular rings in background like in img.jpg */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
              <div className="w-60 h-60 rounded-full border border-[#F26A1B]/25" />
              <div className="absolute w-84 h-84 rounded-full border border-[#F26A1B]/15" />
              <div className="absolute w-[440px] h-[440px] rounded-full border border-[#F26A1B]/10" />
              <div className="absolute w-[560px] h-[560px] rounded-full border border-[#E7E5E4]" />
            </div>

            {!showTerminal ? (
              <div className="relative z-10 w-full max-w-[360px]">
                {/* Floating Top Badge */}
                <div className="absolute -top-3 -left-2 z-30 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-[#E7E5E4] flex items-center gap-1.5 text-xs font-semibold text-[#1C1917]">
                  <Sparkles className="w-3.5 h-3.5 text-[#F26A1B]" />
                  <span>Full-Stack &amp; Designer</span>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute -bottom-3 -right-2 z-30 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-[#E7E5E4] flex items-center gap-2 text-xs font-semibold text-[#1C1917]">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                  <span>Disponible · Dakar 🇸🇳</span>
                </div>

                {/* Arched Portrait Frame (Dome / Arch shape from img.jpg) */}
                <div className="rounded-t-[170px] sm:rounded-t-[200px] rounded-b-[32px] overflow-hidden bg-gradient-to-b from-[#1C2127] to-[#12161A] shadow-2xl border-4 border-white ring-1 ring-[#E7E5E4] group transition-all duration-300 hover:shadow-[0_20px_50px_rgba(242,106,27,0.18)]">
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden flex items-end justify-center">
                    {/* Subtle warm glow behind portrait */}
                    <div className="absolute top-10 w-44 h-44 rounded-full bg-[#F26A1B]/20 blur-2xl pointer-events-none" />

                    {/* Crisp Centered Portrait Photo */}
                    <img
                      src={papaDaoudaImg}
                      alt="Papa Daouda Samb • Développeur Full-Stack & Designer"
                      className="w-full h-full object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-104"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {/* Scrim overlay with typography */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5 pointer-events-none">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-extrabold text-base tracking-tight flex items-center gap-1.5">
                            <span>Papa Daouda Samb</span>
                            <span className="w-2 h-2 rounded-full bg-[#F26A1B] animate-pulse" />
                          </div>
                          <div className="text-[#D6D3D1] text-xs font-medium mt-0.5">
                            Développeur Full-Stack • React &amp; Java
                          </div>
                        </div>

                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#F26A1B] text-white shadow-xs">
                          Dakar
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Toggle to view terminal snippet */}
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => setShowTerminal(true)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#78716C] hover:text-[#1C1917] bg-white/90 hover:bg-white px-3.5 py-1.5 rounded-full border border-[#E7E5E4] shadow-xs transition-colors cursor-pointer"
                  >
                    <Code className="w-3.5 h-3.5 text-[#F26A1B]" />
                    <span>Afficher le terminal de dev</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full relative z-10 animate-in fade-in duration-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#78716C] flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#F26A1B]" />
                    <span>Console Développeur</span>
                  </span>
                  <button
                    onClick={() => setShowTerminal(false)}
                    className="text-xs font-semibold text-[#F26A1B] hover:underline cursor-pointer"
                  >
                    ← Revenir au portrait stylisé
                  </button>
                </div>
                <TerminalCode />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

