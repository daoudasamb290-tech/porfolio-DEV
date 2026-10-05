import React, { useState } from 'react';
import { Eye, Code2, PlusCircle, BookOpen, Users, HelpCircle, CheckCircle } from 'lucide-react';
import { PHILOSOPHY_CARDS } from '../data/portfolioData';
import { Developer3DScene } from './Developer3DScene';

export const PhilosophySection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'detail':
        return <Eye className="w-5 h-5 text-[#F26A1B]" />;
      case 'clean-code':
        return <Code2 className="w-5 h-5 text-[#D97706]" />;
      case 'problem-solving':
        return <PlusCircle className="w-5 h-5 text-[#DC2626]" />;
      case 'continuous-learning':
        return <BookOpen className="w-5 h-5 text-[#2563EB]" />;
      case 'team-spirit':
        return <Users className="w-5 h-5 text-[#059669]" />;
      case 'curious-adaptable':
        return <HelpCircle className="w-5 h-5 text-[#7C3AED]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#F26A1B]" />;
    }
  };

  return (
    <section id="philosophie" className="py-20 bg-[#FAF9F5] border-b border-[#E7E5E4]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Text and 3D Scene side-by-side, vertically centered */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#78716C] mb-2">
              PHILOSOPHIE &amp; VALEURS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
              Développeur autodidacte, orienté impact concret
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
              J'ai forgé mes compétences sur le terrain en concevant des applications réelles. Mon obsession :
              la rapidité de chargement sur réseau 3G/4G, des interfaces intuitives pour des utilisateurs peu habitués au
              numérique, et une architecture backend Java infaillible.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0 flex items-center justify-center">
            <Developer3DScene className="mx-auto" />
          </div>
        </div>

        {/* 6 Cards Grid (3 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHILOSOPHY_CARDS.map((card) => {
            const isSelected = selectedCard === card.id;

            return (
              <div
                key={card.id}
                onClick={() => setSelectedCard(isSelected ? null : card.id)}
                className={`bg-white rounded-xl p-6 border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-[#F26A1B] shadow-md ring-2 ring-[#F26A1B]/15 translate-y-[-2px]'
                    : 'border-[#E7E5E4] hover:border-[#D6D3D1] hover:shadow-sm hover:translate-y-[-2px]'
                }`}
              >
                {/* Icon header matching Image 2 */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF9F5] border border-[#E7E5E4] flex items-center justify-center">
                    {getIcon(card.id)}
                  </div>
                  <span className="text-[11px] font-mono text-[#A8A29E] tracking-wider uppercase">
                    {card.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1C1917] tracking-tight mb-2.5">
                  {card.title}
                </h3>

                <p className="text-sm text-[#57534E] leading-relaxed">
                  {card.description}
                </p>

                {isSelected && (
                  <div className="mt-4 pt-3 border-t border-[#F4F2EC] text-xs font-medium text-[#F26A1B] flex items-center gap-1.5 animate-in fade-in duration-150">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F26A1B]" />
                    <span>Principe appliqué dans tous les déploiements de Dakar</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
