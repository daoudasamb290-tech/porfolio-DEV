import React, { useState } from 'react';
import { ArrowRight, Smartphone, CheckCircle, AlertTriangle, Zap, Server } from 'lucide-react';
import { CASE_STUDY_DEM_DRIVER } from '../data/portfolioData';

interface CaseStudySectionProps {
  onOpenDemDriver: () => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ onOpenDemDriver }) => {
  const [activeTab, setActiveTab] = useState<'study' | 'architecture'>('study');

  return (
    <section className="py-20 bg-[#FAF9F5] border-b border-[#E7E5E4]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F26A1B] mb-2">
              {CASE_STUDY_DEM_DRIVER.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
              {CASE_STUDY_DEM_DRIVER.title}
            </h2>
            <p className="mt-3 text-base text-[#57534E] leading-relaxed">
              {CASE_STUDY_DEM_DRIVER.subtitle}
            </p>
          </div>

          {/* Toggle Tab */}
          <div className="flex items-center gap-1 p-1 bg-[#F4F2EC] rounded-lg shrink-0">
            <button
              onClick={() => setActiveTab('study')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'study' ? 'bg-white text-[#1C1917] shadow-xs' : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              Étude de Cas
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'architecture' ? 'bg-white text-[#1C1917] shadow-xs' : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              Architecture Système
            </button>
          </div>
        </div>

        {/* Tab 1: 3-Column Case Study Flow matching Image 2 */}
        {activeTab === 'study' ? (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDY_DEM_DRIVER.steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-xl p-6 sm:p-7 border border-[#E7E5E4] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F26A1B] mb-4">
                    <span>{step.num}</span>
                    <span className="text-[#D6D3D1]">·</span>
                    <span className="uppercase tracking-wider">{step.tag}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1C1917] tracking-tight mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#57534E] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Stat Highlight Box at bottom */}
                <div className="mt-6 pt-5 border-t border-[#F4F2EC] bg-[#FAF9F5] -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 p-4 sm:p-5 rounded-b-xl">
                  <div className="text-[11px] font-medium text-[#78716C] uppercase tracking-wider">
                    {step.highlightKey}
                  </div>
                  <div className={`text-2xl font-extrabold font-mono mt-0.5 ${step.highlightColor}`}>
                    {step.highlightVal}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Tab 2: Architecture diagram */
          <div className="mt-12 bg-white rounded-xl p-6 sm:p-8 border border-[#E7E5E4] shadow-xs">
            <h3 className="text-xl font-bold text-[#1C1917] mb-2 flex items-center gap-2">
              <Server className="w-5 h-5 text-[#F26A1B]" />
              <span>Pipeline &amp; Architecture Hors Ligne de DEM Driver</span>
            </h3>
            <p className="text-sm text-[#57534E] mb-6">
              Conçu pour résister aux zones blanches entre Dakar, Thiès et Touba tout en garantissant l'intégrité des paiements Wave.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 rounded-lg bg-[#FAF9F5] border border-[#E7E5E4]">
                <div className="font-bold text-[#1C1917] mb-2 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#F26A1B]" />
                  <span>1. Client PWA (145 KB)</span>
                </div>
                <ul className="space-y-1.5 text-[#57534E]">
                  <li>• React SPA + IndexedDB local</li>
                  <li>• Cache Service Worker Stale-While-Revalidate</li>
                  <li>• QR Code généré offline</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-[#FAF9F5] border border-[#E7E5E4]">
                <div className="font-bold text-[#1C1917] mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#D97706]" />
                  <span>2. Passerelle Mobile Money</span>
                </div>
                <ul className="space-y-1.5 text-[#57534E]">
                  <li>• Wave & Orange Money Webhooks</li>
                  <li>• Traitement asynchrone des callbacks</li>
                  <li>• Retry idempotents en cas de coupure</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-[#FAF9F5] border border-[#E7E5E4]">
                <div className="font-bold text-[#1C1917] mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#16A34A]" />
                  <span>3. Backend Java Spring Boot</span>
                </div>
                <ul className="space-y-1.5 text-[#57534E]">
                  <li>• Base PostgreSQL avec index géospatiaux</li>
                  <li>• Verrous pessimistes pour réservation de sièges</li>
                  <li>• SMS OTP de secours via passerelle locale</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* CTA Launch DEM Driver */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onOpenDemDriver}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1C1917] text-white hover:bg-[#2E2A27] text-xs sm:text-sm font-semibold transition-colors"
          >
            <Smartphone className="w-4 h-4 text-[#F26A1B]" />
            <span>Tester l'interface en direct de DEM Driver</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
