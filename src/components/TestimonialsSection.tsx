import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF9F5] border-b border-[#E7E5E4]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-widest text-[#78716C] mb-2">
            CONFIANCE &amp; RETOURS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
            Ce que disent les collaborateurs
          </h2>
        </div>

        {/* 2 Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-xl p-7 sm:p-8 border border-[#E7E5E4] shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* 5 Orange Stars */}
                <div className="flex items-center gap-1 text-[#F26A1B] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F26A1B]" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#44403C] leading-relaxed italic">
                  {t.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-[#F4F2EC] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF9F5] border border-[#E7E5E4] flex items-center justify-center font-bold text-xs text-[#1C1917] shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1C1917]">
                    {t.author}
                  </div>
                  <div className="text-xs text-[#78716C]">
                    {t.role}
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
