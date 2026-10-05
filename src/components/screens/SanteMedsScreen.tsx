import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Share2, 
  Building2,
  ExternalLink,
  Globe,
  RefreshCw
} from 'lucide-react';
import { ScreenView } from '../../types';

interface SanteMedsScreenProps {
  onBack: () => void;
  onNavigateScreen: (screen: ScreenView) => void;
}

interface Pharmacy {
  id: string;
  name: string;
  quarter: string;
  distance: string;
  isOpen24: boolean;
  phone: string;
  stockCount: number;
  stockStatus: 'available' | 'low' | 'out';
  price: string;
}

export const SanteMedsScreen: React.FC<SanteMedsScreenProps> = ({ onBack }) => {
  const LIVE_URL = 'https://pharma-tiv.ai.studio/';
  const [viewMode, setViewMode] = useState<'stats' | 'embed'>('stats');
  const [iframeKey, setIframeKey] = useState(0);
  const [searchTerm, setSearchTerm] = useState('Paracétamol 1g');
  const [selectedQuarter, setSelectedQuarter] = useState<string>('all');
  const [reservedPharmacy, setReservedPharmacy] = useState<string | null>(null);

  const pharmacies: Pharmacy[] = [
    {
      id: 'p1',
      name: 'Grande Pharmacie des Almadies',
      quarter: 'Almadies',
      distance: '0.8 km',
      isOpen24: true,
      phone: '+221 33 820 00 11',
      stockCount: 24,
      stockStatus: 'available',
      price: '1 250 FCFA',
    },
    {
      id: 'p2',
      name: 'Pharmacie Guigon Plateau',
      quarter: 'Plateau',
      distance: '3.4 km',
      isOpen24: true,
      phone: '+221 33 821 45 88',
      stockCount: 18,
      stockStatus: 'available',
      price: '1 200 FCFA',
    },
    {
      id: 'p3',
      name: 'Pharmacie Mermoz Pyrotechnie',
      quarter: 'Mermoz',
      distance: '1.9 km',
      isOpen24: false,
      phone: '+221 33 860 30 20',
      stockCount: 3,
      stockStatus: 'low',
      price: '1 250 FCFA',
    },
    {
      id: 'p4',
      name: 'Pharmacie de Ouakam Village',
      quarter: 'Ouakam',
      distance: '2.1 km',
      isOpen24: false,
      phone: '+221 33 824 12 00',
      stockCount: 0,
      stockStatus: 'out',
      price: 'Non disponible',
    },
  ];

  const filtered = pharmacies.filter((p) => {
    if (selectedQuarter !== 'all' && p.quarter !== selectedQuarter) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F5] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E7E5E4]">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1C1917] hover:text-[#F26A1B] transition-colors p-2 rounded-lg hover:bg-white border border-transparent hover:border-[#E7E5E4] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#0D9488]/10 text-[#0F766E] border border-[#0D9488]/30 hover:bg-[#0D9488]/20 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>pharma-tiv.ai.studio</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#78716C]">
              <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
              <span>Pharma-Tiv • En Ligne</span>
            </div>
          </div>
        </div>

        {/* Header Title with View Mode Toggle */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7E5E4] shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#0D9488]/10 text-[#0F766E] mb-2">
                <span>Application En Ligne • pharma-tiv.ai.studio</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] tracking-tight">
                Pharma-Tiv — Santé &amp; Médicaments
              </h1>
              <p className="mt-1 text-sm text-[#57534E]">
                Pharmacies de garde en temps réel et service de livraison à domicile des médicaments achetés, accessible sur{' '}
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0D9488] hover:underline font-mono font-medium"
                >
                  {LIVE_URL}
                </a>
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-[#F4F2EC] p-1.5 rounded-xl border border-[#E7E5E4] shrink-0 self-start sm:self-auto">
              <button
                onClick={() => setViewMode('stats')}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'stats'
                    ? 'bg-white text-[#1C1917] shadow-xs'
                    : 'text-[#78716C] hover:text-[#1C1917]'
                }`}
              >
                Simulateur Pharmacie
              </button>

              <button
                onClick={() => setViewMode('embed')}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'embed'
                    ? 'bg-[#0D9488] text-white shadow-xs'
                    : 'text-[#78716C] hover:text-[#1C1917]'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Tester le Site en Direct</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Live Interactive Iframe Embed */}
        {viewMode === 'embed' && (
          <div className="space-y-4 mb-8 animate-in fade-in duration-200">
            {/* Control Bar for the iframe */}
            <div className="bg-white p-3 rounded-xl border border-[#E7E5E4] flex items-center justify-between gap-3 text-xs shadow-xs">
              <div className="flex items-center gap-2 font-mono text-[#57534E] truncate">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0D9488]" />
                <span className="truncate">{LIVE_URL}</span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIframeKey(k => k + 1)}
                  className="px-2.5 py-1 bg-[#F4F2EC] hover:bg-[#E7E5E4] text-[#1C1917] rounded-lg border border-[#D6D3D1] flex items-center gap-1 transition-colors cursor-pointer"
                  title="Recharger l'application"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Recharger</span>
                </button>

                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <span>Plein écran (Nouvel onglet)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Live Web App */}
            <div className="w-full h-[680px] rounded-2xl overflow-hidden border border-[#E7E5E4] bg-white shadow-2xl relative">
              <iframe
                key={iframeKey}
                src={LIVE_URL}
                title="Application Pharma-Tiv"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
                allow="geolocation; payment"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              />
            </div>
          </div>
        )}

        {/* View Mode 2: Interactive Pharmacie Search Simulator */}
        {viewMode === 'stats' && (
          <div className="space-y-6">
            {/* Banner Link to Pharma-Tiv */}
            <div className="bg-gradient-to-r from-[#F0FDFA] to-white p-5 sm:p-6 rounded-2xl border border-[#CCFBF1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0D9488]/15 border border-[#0D9488]/30 flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-[#0D9488]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1C1917]">
                    Site Pharma-Tiv déployé et accessible en direct
                  </h3>
                  <p className="text-xs text-[#57534E] mt-0.5 font-mono">
                    {LIVE_URL}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setViewMode('embed')}
                  className="px-4 py-2 bg-white hover:bg-[#F4F2EC] text-[#1C1917] text-xs font-semibold rounded-xl border border-[#E7E5E4] transition-colors cursor-pointer"
                >
                  Tester dans l'écran
                </button>

                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>Ouvrir pharma-tiv.ai.studio</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Pharmacy Search View */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-[#E7E5E4] shadow-xs space-y-6">
            {/* Search Input Bar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#78716C] absolute left-3 top-3" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Rechercher un médicament (ex: Amoxicilline, Insuline...)"
                  className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-[#FAF9F5] rounded-xl border border-[#E7E5E4] focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
                />
              </div>

              {/* Neighborhood select */}
              <select
                value={selectedQuarter}
                onChange={(e) => setSelectedQuarter(e.target.value)}
                className="px-3 py-2.5 text-xs bg-[#FAF9F5] rounded-xl border border-[#E7E5E4] focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
              >
                <option value="all">Tous les quartiers (Dakar)</option>
                <option value="Almadies">Almadies</option>
                <option value="Plateau">Plateau</option>
                <option value="Mermoz">Mermoz</option>
                <option value="Ouakam">Ouakam</option>
              </select>
            </div>

            {/* Pharmacies List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-[#78716C] pb-2 border-b border-[#F4F2EC]">
                <span>Pharmacies à proximité vérifiées en direct</span>
                <span>{filtered.length} résultats</span>
              </div>

              {filtered.map((pharma) => (
                <div
                  key={pharma.id}
                  className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E7E5E4] hover:border-[#CBD5E1] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#0D9488]" />
                      <h3 className="text-sm font-bold text-[#1C1917]">{pharma.name}</h3>
                      {pharma.isOpen24 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#DCFCE7] text-[#15803D]">
                          24h / 24
                        </span>
                      )}
                    </div>

                    <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-[#78716C]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#F26A1B]" />
                        {pharma.quarter} ({pharma.distance})
                      </span>
                      <span>·</span>
                      <span className="font-mono text-[#1C1917] font-semibold">{pharma.price}</span>
                    </div>
                  </div>

                  {/* Stock tag and action */}
                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    {pharma.stockStatus === 'available' && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#16A34A]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>En stock ({pharma.stockCount})</span>
                      </span>
                    )}
                    {pharma.stockStatus === 'low' && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#D97706]">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Stock faible ({pharma.stockCount})</span>
                      </span>
                    )}
                    {pharma.stockStatus === 'out' && (
                      <span className="text-xs font-semibold text-[#DC2626]">
                        Rupture
                      </span>
                    )}

                    {pharma.stockStatus !== 'out' && (
                      <button
                        onClick={() => setReservedPharmacy(pharma.name)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                          reservedPharmacy === pharma.name
                            ? 'bg-[#0D9488] text-white'
                            : 'bg-white hover:bg-[#EAE7DF] text-[#1C1917] border border-[#E7E5E4]'
                        }`}
                      >
                        {reservedPharmacy === pharma.name ? 'Réservé ✓' : 'Réserver (1h)'}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {reservedPharmacy && (
              <div className="p-3 bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl text-xs text-[#065F46] flex items-center justify-between animate-in fade-in duration-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>
                    Médicament mis de côté à la <strong>{reservedPharmacy}</strong>. SMS de confirmation envoyé.
                  </span>
                </div>
                <button
                  onClick={() => setReservedPharmacy(null)}
                  className="text-xs font-semibold text-[#047857] underline ml-2"
                >
                  Annuler
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Prescription upload & Impact */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-xl p-6 border border-[#E7E5E4]">
              <h3 className="text-base font-bold text-[#1C1917] mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#0D9488]" />
                <span>Ordonnance Numérisée</span>
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed mb-4">
                Permet aux patients de photographier leur prescription médicale pour vérification instantanée par le pharmacien avant déplacement.
              </p>
              <div className="p-4 border-2 border-dashed border-[#D6D3D1] rounded-xl text-center bg-[#FAF9F5]">
                <FileText className="w-8 h-8 text-[#A8A29E] mx-auto mb-2" />
                <div className="text-xs font-semibold text-[#1C1917]">
                  Déposez votre ordonnance
                </div>
                <div className="text-[11px] text-[#78716C] mt-0.5">
                  Format JPG, PNG ou PDF (max 5 MB)
                </div>
                <button
                  type="button"
                  className="mt-3 px-3 py-1.5 bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Scanner l'ordonnance
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#E7E5E4]">
              <h3 className="text-xs font-bold text-[#78716C] uppercase tracking-wider mb-2">
                Impact Local
              </h3>
              <ul className="space-y-2 text-xs text-[#57534E]">
                <li>• Élimination des trajets inutiles entre pharmacies la nuit.</li>
                <li>• Alertes de réapprovisionnement pour les médicaments sous tension.</li>
                <li>• Base de données synchronisée même en cas de réseau instable.</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  </div>
);
};
