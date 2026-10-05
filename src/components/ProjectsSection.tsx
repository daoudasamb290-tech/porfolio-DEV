import React, { useState } from 'react';
import { ArrowUpRight, Eye, Smartphone, HeartPulse, BarChart3, Wrench } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ScreenView } from '../types';

interface ProjectsSectionProps {
  onOpenScreen: (screenId: ScreenView) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenScreen }) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'dem-driver':
        return <Smartphone className="w-8 h-8 text-[#F26A1B]" />;
      case 'sante-meds':
        return <HeartPulse className="w-8 h-8 text-[#16A34A]" />;
      case 'analyseur-annulations':
        return <BarChart3 className="w-8 h-8 text-[#0284C7]" />;
      case 'artisan-pro':
        return <Wrench className="w-8 h-8 text-[#D97706]" />;
      default:
        return <Eye className="w-8 h-8 text-[#F26A1B]" />;
    }
  };

  return (
    <section id="projets" className="py-20 bg-[#FAF9F5] border-b border-[#E7E5E4]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-[#78716C] mb-2">
            RÉALISATIONS CLÉS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
            Projets conçus de A à Z
          </h2>
          <p className="mt-3 text-base text-[#57534E] leading-relaxed">
            Des plateformes opérationnelles qui tournent en direct et apportent de la valeur à leurs utilisateurs au quotidien.
          </p>
        </div>

        {/* 4 Project Cards Grid (2x2 Balanced Layout) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenScreen(project.screenId)}
              className="bg-white rounded-xl overflow-hidden border border-[#E7E5E4] shadow-xs hover:border-[#D6D3D1] hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Image Preview with Category Badge */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F4F2EC]">
                {!imageErrors[project.id] ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={() => {
                      setImageErrors((prev) => ({ ...prev, [project.id]: true }));
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-104"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1C2127] to-[#12161A] p-6 flex flex-col items-center justify-center text-center text-white relative">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-3">
                      {getProjectIcon(project.id)}
                    </div>
                    <div className="font-bold text-base text-white">{project.title}</div>
                    <div className="text-xs text-[#D6D3D1] mt-1 font-mono">{project.metrics}</div>
                  </div>
                )}

                {/* Category tag at top right */}
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/95 backdrop-blur-xs rounded-md text-[11px] font-semibold text-[#1C1917] shadow-xs border border-[#E7E5E4]/80">
                  {project.category}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#1C1917]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="px-4 py-2 rounded-xl bg-white text-xs font-bold text-[#1C1917] shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-4 h-4 text-[#F26A1B]" />
                    <span>Voir la démo</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-[#1C1917] tracking-tight group-hover:text-[#F26A1B] transition-colors flex items-center gap-1.5">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#78716C] group-hover:text-[#F26A1B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                  </div>

                  <p className="mt-3 text-sm text-[#57534E] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#F4F2EC]">
                  {/* Clean unboxed tags with subtle separators */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#78716C] mb-4">
                    {project.tags.map((tag, i) => (
                      <React.Fragment key={tag}>
                        <span className="font-mono text-[11px] font-medium text-[#44403C]">
                          {tag}
                        </span>
                        {i < project.tags.length - 1 && (
                          <span className="text-[#D6D3D1]" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Highlight Metric */}
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-[#FAF9F5]">
                    <span className="font-mono font-bold text-[#F26A1B] text-sm">
                      {project.metrics.split(' ')[0]} {project.metrics.split(' ')[1]}
                    </span>
                    <span className="text-[#78716C]">
                      {project.metrics.split(' ').slice(2).join(' ')}
                    </span>
                  </div>

                  {/* Single dedicated Demo Button */}
                  <div className="mt-4 pt-3 border-t border-[#F4F2EC]">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenScreen(project.screenId);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-[#1C1917] hover:bg-[#F26A1B] text-white transition-all shadow-xs cursor-pointer active:scale-98"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Voir la démo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

