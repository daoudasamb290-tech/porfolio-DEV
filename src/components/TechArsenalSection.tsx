import React, { useState } from 'react';
import { 
  Atom, 
  FileCode2, 
  Database, 
  Cpu, 
  Smartphone, 
  ShieldCheck, 
  GitBranch, 
  Wifi, 
  WifiOff, 
  Gauge, 
  Layers,
  MapPin
} from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';

export const TechArsenalSection: React.FC = () => {
  const [offlineSimulated, setOfflineSimulated] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const getStackIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="w-6 h-6 text-[#0284C7]" />;
      case 'FileCode2':
        return <FileCode2 className="w-6 h-6 text-[#3178C6]" />;
      case 'Database':
        return <Database className="w-6 h-6 text-[#3ECF8E]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#EA4335]" />;
      case 'WifiOff':
        return <WifiOff className="w-6 h-6 text-[#F26A1B]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#4F46E5]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#EA580C]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#16A34A]" />;
      case 'GitBranch':
        return <GitBranch className="w-6 h-6 text-[#DC2626]" />;
      default:
        return <Layers className="w-6 h-6 text-[#F26A1B]" />;
    }
  };

  return (
    <section id="competences" className="py-20 bg-[#FAF9F5] border-b border-[#E7E5E4]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Superposed: title above description) */}
        <div className="max-w-3xl flex flex-col gap-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#78716C] mb-2">
              ARSENAL TECHNIQUE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
              Technologies maîtrisées en production
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-2xl">
            Pas de listes interminables d'outils survolés : voici la pile robuste que j'utilise quotidiennement
            pour concevoir, tester et déployer des applications viables.
          </p>
        </div>

        {/* Tech Stack Cards Row / Grid (2 rows of 5 on desktop) */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {TECH_STACK.map((item) => {
            const isSelected = selectedTech === item.name;

            return (
              <div
                key={item.name}
                onClick={() => setSelectedTech(isSelected ? null : item.name)}
                className={`bg-white rounded-xl p-5 border text-center flex flex-col items-center justify-center transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-[#F26A1B] shadow-sm ring-2 ring-[#F26A1B]/20 bg-[#FFFDFB]'
                    : 'border-[#E7E5E4] hover:border-[#D6D3D1] hover:shadow-xs hover:translate-y-[-2px]'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF9F5] border border-[#E7E5E4] flex items-center justify-center mb-3">
                  {getStackIcon(item.iconName)}
                </div>

                <div className="text-base font-bold text-[#1C1917]">
                  {item.name}
                </div>

                <div className="text-xs text-[#78716C] font-medium mt-1">
                  {item.role}
                </div>

                {item.badge && (
                  <span className="mt-2 text-[10px] font-mono text-[#D97706] font-semibold">
                    {item.badge}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Banner: Architecture optimisée pour le contexte ouest-africain */}
        <div className="mt-8 bg-white rounded-xl p-6 sm:p-8 border border-[#E7E5E4] shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="w-12 h-12 rounded-xl bg-[#F26A1B]/10 border border-[#F26A1B]/20 flex items-center justify-center shrink-0 mt-0.5">
              <Gauge className="w-6 h-6 text-[#F26A1B]" />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1C1917]">
                Architecture optimisée pour le contexte ouest-africain
              </h3>
              <p className="mt-1.5 text-sm text-[#57534E] leading-relaxed">
                Mise en cache offline-first, réduction drastique de la taille des bundles JS et gestion des
                interruptions de connexion mobile.
              </p>

              {/* Offline simulator interactive button */}
              <div className="mt-3 flex items-center gap-3">
                <button
                  onClick={() => setOfflineSimulated(!offlineSimulated)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                    offlineSimulated
                      ? 'bg-[#FEF2F2] text-[#DC2626] border border-[#FCA5A5]'
                      : 'bg-[#F4F2EC] text-[#57534E] hover:bg-[#EAE7DF]'
                  }`}
                >
                  {offlineSimulated ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5" />}
                  <span>{offlineSimulated ? 'Mode Hors Ligne Activé (IndexedDB actif)' : 'Tester résilience offline'}</span>
                </button>

                {offlineSimulated && (
                  <span className="text-[11px] font-mono text-[#16A34A] font-semibold">
                    ✓ Données synchronisées localement
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Metric Box */}
          <div className="lg:border-l lg:border-[#E7E5E4] lg:pl-8 shrink-0 w-full lg:w-auto">
            <div className="text-xs uppercase font-semibold text-[#78716C] tracking-wider">
              Temps moyen First Contentful Paint
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] font-mono mt-1">
              &lt; 1.2s
            </div>
            <div className="text-[11px] text-[#16A34A] font-medium mt-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              <span>Sur réseau 3G Orange / Free SN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
