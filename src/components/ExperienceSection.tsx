import React, { useState } from 'react';
import { 
  Laptop, 
  Rocket, 
  GraduationCap, 
  ChevronDown, 
  Award, 
  Layout, 
  BarChart3, 
  MessageSquare,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { EXPERIENCES, DIPLOMAS_CERTIFICATIONS } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const getTimelineIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Rocket className="w-5 h-5 text-[#F26A1B]" />;
      case 1:
        return <Laptop className="w-5 h-5 text-[#0D9488]" />;
      case 2:
        return <Layout className="w-5 h-5 text-[#4F46E5]" />;
      case 3:
        return <ShieldCheck className="w-5 h-5 text-[#16A34A]" />;
      default:
        return <Laptop className="w-5 h-5 text-[#F26A1B]" />;
    }
  };

  const getEducationIcon = (iconType: string) => {
    switch (iconType) {
      case 'bac':
        return <GraduationCap className="w-5 h-5 text-[#2563EB]" />;
      case 'frontend':
        return <Layout className="w-5 h-5 text-[#F26A1B]" />;
      case 'data':
        return <BarChart3 className="w-5 h-5 text-[#0D9488]" />;
      case 'communication':
        return <MessageSquare className="w-5 h-5 text-[#7C3AED]" />;
      default:
        return <Award className="w-5 h-5 text-[#F26A1B]" />;
    }
  };

  return (
    <section id="parcours" className="py-20 bg-[#FAF9F5] border-b border-[#E7E5E4]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-[#78716C] mb-2">
            ÉVOLUTION &amp; FORMATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
            Parcours, Diplômes &amp; Expérience
          </h2>
          <p className="mt-3 text-base text-[#57534E] leading-relaxed">
            Un socle académique solide, des certifications spécialisées validées et une immersion terrain résolument orientée vers l'impact produit.
          </p>
        </div>

        {/* Section: Diplômes & Certifications Clés */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-[#F26A1B]" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#1C1917]">
              Diplômes &amp; Certifications Obtenus
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DIPLOMAS_CERTIFICATIONS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-5 border border-[#E7E5E4] hover:border-[#D6D3D1] hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#E7E5E4] flex items-center justify-center shrink-0">
                      {getEducationIcon(item.icon)}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#FAF9F5] text-[#78716C] border border-[#E7E5E4]">
                        {item.year}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        item.category === 'Diplôme'
                          ? 'bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]'
                          : 'bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]'
                      }`}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <h4 className="font-bold text-sm text-[#1C1917] tracking-tight leading-snug">
                    {item.title}
                  </h4>
                  <div className="text-[11px] font-medium text-[#78716C] mt-0.5">
                    {item.issuer}
                  </div>

                  <p className="text-xs text-[#57534E] mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F4F2EC]">
                  <div className="flex flex-wrap gap-1">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#FAF9F5] text-[#57534E] border border-[#E7E5E4]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Expériences Professionnelles */}
        <div className="mt-14">
          <div className="flex items-center gap-2 mb-6">
            <Laptop className="w-4 h-4 text-[#F26A1B]" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#1C1917]">
              Expérience Professionnelle &amp; Réalisations Terrain
            </h3>
          </div>

          {/* Timeline List */}
          <div className="space-y-4">
            {EXPERIENCES.map((exp, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={exp.role}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className={`bg-white rounded-xl p-6 sm:p-7 border transition-all duration-200 cursor-pointer ${
                    isExpanded
                      ? 'border-[#F26A1B]/40 shadow-sm ring-1 ring-[#F26A1B]/10'
                      : 'border-[#E7E5E4] hover:border-[#D6D3D1]'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    {/* Left: Icon & Info */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#E7E5E4] flex items-center justify-center shrink-0 mt-0.5">
                        {getTimelineIcon(index)}
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-[#1C1917] tracking-tight">
                          {exp.role}
                        </h4>
                        <div className="text-xs text-[#78716C] font-medium mt-0.5">
                          {exp.client}
                        </div>
                        <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    {/* Right: Date badge */}
                    <div className="shrink-0 flex items-center gap-2 self-start sm:self-auto font-mono text-xs font-semibold text-[#78716C]">
                      <span className="px-2.5 py-1 rounded-md bg-[#FAF9F5] border border-[#E7E5E4]">
                        {exp.period}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#A8A29E] transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="mt-5 pt-4 border-t border-[#F4F2EC] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs animate-in fade-in duration-200">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-[#1C1917]">Stack :</span>
                        {exp.tags?.map((tag) => (
                          <span key={tag} className="font-mono text-[11px] px-2 py-0.5 bg-[#FAF9F5] text-[#57534E] rounded border border-[#E7E5E4]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="text-[#16A34A] font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Vérifié en production</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

