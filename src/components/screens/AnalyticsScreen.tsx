import React, { useState } from 'react';
import { 
  ArrowLeft, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  BarChart3, 
  RefreshCw, 
  Filter, 
  Clock,
  ExternalLink,
  Globe,
  Maximize2
} from 'lucide-react';
import { ScreenView } from '../../types';

interface AnalyticsScreenProps {
  onBack: () => void;
  onNavigateScreen: (screen: ScreenView) => void;
}

export const AnalyticsScreen: React.FC<AnalyticsScreenProps> = ({ onBack }) => {
  const LIVE_URL = 'https://dashbord-gold-chi.vercel.app/';
  const [viewMode, setViewMode] = useState<'stats' | 'embed'>('stats');
  const [selectedRoute, setSelectedRoute] = useState<'all' | 'dakar-touba' | 'dakar-thies'>('all');
  const [iframeKey, setIframeKey] = useState(0);
  const [alerts, setAlerts] = useState([
    { id: '1', route: 'Dakar ➔ Touba', reason: 'Embouteillage péage Rufisque (+35 min)', severity: 'high', resolved: false },
    { id: '2', route: 'Dakar ➔ Thiès', reason: 'Retard passager répété Colobane', severity: 'medium', resolved: false },
    { id: '3', route: 'Thiès ➔ Dakar', reason: 'Pic de demande non pourvu', severity: 'low', resolved: true },
  ]);

  const toggleAlert = (id: string) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, resolved: !a.resolved } : a));
  };

  return (
    <div className="min-h-screen bg-[#141517] text-[#E4E4E7] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2D3139]">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#A1A1AA] hover:text-white transition-colors p-2 rounded-lg hover:bg-[#1F2228] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/30 hover:bg-[#10B981]/25 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>dashbord-gold-chi.vercel.app</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#10B981]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Production Live</span>
            </div>
          </div>
        </div>

        {/* Dashboard Title Header with Mode Switcher */}
        <div className="bg-[#1C1F26] rounded-2xl p-6 sm:p-8 border border-[#2D3139] mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#3B82F6]/20 text-[#60A5FA] mb-2">
                <span>Logiciel Déployé • Vercel Live</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Analyseur d'Annulations — Logiciel &amp; Dashboard
              </h1>
              <p className="mt-1 text-sm text-[#94A3B8]">
                Plateforme d'analyse décisionnelle accessible en direct sur{' '}
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#60A5FA] hover:underline font-mono"
                >
                  {LIVE_URL}
                </a>
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-[#141517] p-1.5 rounded-xl border border-[#2D3139] shrink-0 self-start sm:self-auto">
              <button
                onClick={() => setViewMode('stats')}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'stats'
                    ? 'bg-[#262B36] text-white shadow-xs'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Vue Analyse &amp; Télémétrie
              </button>

              <button
                onClick={() => setViewMode('embed')}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'embed'
                    ? 'bg-[#10B981] text-white shadow-xs'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Tester le Logiciel en Direct</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Live Interactive Iframe Embed of the Vercel app */}
        {viewMode === 'embed' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {/* Control Bar for the iframe */}
            <div className="bg-[#1C1F26] p-3 rounded-xl border border-[#2D3139] flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 font-mono text-[#94A3B8] truncate">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="truncate">{LIVE_URL}</span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIframeKey(k => k + 1)}
                  className="px-2.5 py-1 bg-[#262B36] hover:bg-[#323947] text-white rounded-lg border border-[#384152] flex items-center gap-1 transition-colors cursor-pointer"
                  title="Recharger l'application"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Recharger</span>
                </button>

                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-[#F26A1B] hover:bg-[#D8580E] text-white font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <span>Plein écran (Nouvel onglet)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Live Web App */}
            <div className="w-full h-[680px] rounded-2xl overflow-hidden border border-[#2D3139] bg-[#0E1015] shadow-2xl relative">
              <iframe
                key={iframeKey}
                src={LIVE_URL}
                title="Logiciel Dashboard Vercel"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
                allow="geolocation"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              />
            </div>
          </div>
        )}

        {/* View Mode 2: Stats & Telemetry Breakdown */}
        {viewMode === 'stats' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Banner Link to Vercel */}
            <div className="bg-gradient-to-r from-[#1E293B] to-[#1C1F26] p-5 sm:p-6 rounded-2xl border border-[#334155] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#10B981]/20 border border-[#10B981]/30 flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-[#10B981]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Application en ligne déployée sur Vercel
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-0.5 font-mono">
                    {LIVE_URL}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setViewMode('embed')}
                  className="px-4 py-2 bg-[#262B36] hover:bg-[#323947] text-white text-xs font-semibold rounded-xl border border-[#384152] transition-colors cursor-pointer"
                >
                  Tester dans l'écran
                </button>

                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#F26A1B] hover:bg-[#D8580E] text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>Ouvrir sur Vercel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Top 4 KPI Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#1C1F26] p-5 rounded-xl border border-[#2D3139]">
                <div className="text-xs text-[#94A3B8] font-medium">Baisse d'Annulations</div>
                <div className="mt-2 text-2xl sm:text-3xl font-mono font-extrabold text-[#10B981] flex items-center gap-1">
                  <TrendingDown className="w-6 h-6" />
                  <span>-28%</span>
                </div>
                <div className="text-[11px] text-[#94A3B8] mt-1 font-mono">En 60 jours de prod</div>
              </div>

              <div className="bg-[#1C1F26] p-5 rounded-xl border border-[#2D3139]">
                <div className="text-xs text-[#94A3B8] font-medium">Trajets Monitorés</div>
                <div className="mt-2 text-2xl sm:text-3xl font-mono font-extrabold text-white">
                  12 480
                </div>
                <div className="text-[11px] text-[#10B981] mt-1 font-mono">98.4% complétés</div>
              </div>

              <div className="bg-[#1C1F26] p-5 rounded-xl border border-[#2D3139]">
                <div className="text-xs text-[#94A3B8] font-medium">Temps Réponse Chauffeur</div>
                <div className="mt-2 text-2xl sm:text-3xl font-mono font-extrabold text-[#F59E0B]">
                  1m 12s
                </div>
                <div className="text-[11px] text-[#94A3B8] mt-1 font-mono">-45s vs ancienne méthode</div>
              </div>

              <div className="bg-[#1C1F26] p-5 rounded-xl border border-[#2D3139]">
                <div className="text-xs text-[#94A3B8] font-medium">Litiges Monétaires</div>
                <div className="mt-2 text-2xl sm:text-3xl font-mono font-extrabold text-[#60A5FA]">
                  0.02%
                </div>
                <div className="text-[11px] text-[#94A3B8] mt-1 font-mono">Webhook Wave certifié</div>
              </div>
            </div>

            {/* Charts & Incident Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Main Visual Breakdown */}
              <div className="lg:col-span-7 bg-[#1C1F26] rounded-2xl p-6 border border-[#2D3139] space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-bold text-white flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-[#F26A1B]" />
                    <span>Motifs d'abandon identifiés &amp; résolus</span>
                  </h2>
                  <span className="text-xs text-[#94A3B8] font-mono">Échantillon 1 200 courses</span>
                </div>

                {/* Visual Bars Breakdown */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Embouteillages axes Dakar (VDN / Rufisque)</span>
                      <span className="font-mono text-[#F59E0B]">38% (Déviations auto)</span>
                    </div>
                    <div className="w-full bg-[#262B36] h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#F59E0B] h-full rounded-full" style={{ width: '38%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Attente passager dépassée (&gt; 15 min)</span>
                      <span className="font-mono text-[#EF4444]">26% (Alertes SMS)</span>
                    </div>
                    <div className="w-full bg-[#262B36] h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#EF4444] h-full rounded-full" style={{ width: '26%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Changement d'avis dernière minute</span>
                      <span className="font-mono text-[#3B82F6]">18% (Acompte Wave)</span>
                    </div>
                    <div className="w-full bg-[#262B36] h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#3B82F6] h-full rounded-full" style={{ width: '18%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Panne réseau / perte signal GPS</span>
                      <span className="font-mono text-[#10B981]">12% (Cache Offline)</span>
                    </div>
                    <div className="w-full bg-[#262B36] h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#10B981] h-full rounded-full" style={{ width: '12%' }} />
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#262B36] border border-[#384152] text-xs text-[#CBD5E1] flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>
                    <strong>Mesure corrective appliquée :</strong> L'instauration d'un acompte automatique de 1 000 FCFA via Wave a fait chuter les désistements passagers de 74% en deux semaines.
                  </span>
                </div>
              </div>

              {/* Right Column: Live Dispatch Alerts */}
              <div className="lg:col-span-5 bg-[#1C1F26] rounded-2xl p-6 border border-[#2D3139] space-y-4">
                <h2 className="text-base font-bold text-white flex items-center justify-between">
                  <span>Alertes Dispatch en direct</span>
                  <span className="text-xs font-mono text-[#F59E0B]">Temps réel</span>
                </h2>

                <div className="space-y-3">
                  {alerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-3.5 rounded-xl border transition-all ${
                        alert.resolved
                          ? 'bg-[#181B20] border-[#262B36] opacity-60'
                          : 'bg-[#262B36] border-[#384152]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${
                            alert.severity === 'high' ? 'bg-[#EF4444]' : alert.severity === 'medium' ? 'bg-[#F59E0B]' : 'bg-[#3B82F6]'
                          }`} />
                          <span className="font-bold text-xs text-white">{alert.route}</span>
                        </div>

                        <button
                          onClick={() => toggleAlert(alert.id)}
                          className={`text-[11px] px-2 py-0.5 rounded transition-colors font-medium cursor-pointer ${
                            alert.resolved
                              ? 'bg-[#10B981]/20 text-[#10B981]'
                              : 'bg-[#FAF9F5]/10 text-white hover:bg-[#FAF9F5]/20'
                          }`}
                        >
                          {alert.resolved ? 'Résolu ✓' : 'Traiter'}
                        </button>
                      </div>

                      <p className="mt-1.5 text-xs text-[#94A3B8]">
                        {alert.reason}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] text-[#64748B] text-center font-mono">
                  Serveur Java Spring Boot connecté à PostgreSQL • Dakar Almadies
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
