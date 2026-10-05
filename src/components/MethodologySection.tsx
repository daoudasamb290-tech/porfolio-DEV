import React, { useState } from 'react';
import { METHOD_STEPS } from '../data/portfolioData';

export const MethodologySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('01');

  return (
    <section className="py-20 bg-[#FAF9F5] border-b border-[#E7E5E4]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F26A1B] mb-2">
            PROCESSUS RIGOUREUX
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
            Ma méthode de travail
          </h2>
          <p className="mt-3 text-base text-[#57534E] leading-relaxed">
            Une démarche séquentielle et pragmatique pour garantir que chaque projet délivre un retour sur investissement tangible dès sa mise en ligne.
          </p>
        </div>

        {/* 5 Steps Grid matching Image 2 */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {METHOD_STEPS.map((step) => {
            const isActive = activeStep === step.num;

            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(step.num)}
                className={`bg-white rounded-xl p-5 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'border-[#F26A1B] shadow-sm ring-2 ring-[#F26A1B]/15 bg-[#FFFDFB]'
                    : 'border-[#E7E5E4] hover:border-[#D6D3D1] hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="text-2xl font-extrabold font-mono text-[#F26A1B] mb-2">
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold text-[#1C1917] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {isActive && (
                  <div className="mt-4 pt-3 border-t border-[#F4F2EC] text-[11px] text-[#78716C] italic">
                    {step.detail}
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
