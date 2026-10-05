import React, { useState } from 'react';
import { 
  ArrowLeft, 
  FileText, 
  CheckCircle2, 
  Send, 
  Download, 
  Share2, 
  Smartphone, 
  WifiOff, 
  Wrench, 
  Zap, 
  Building, 
  RefreshCw, 
  ExternalLink, 
  Globe, 
  ArrowRight,
  Receipt,
  Printer
} from 'lucide-react';
import { ScreenView } from '../../types';

interface ArtisanProScreenProps {
  onBack: () => void;
  onNavigateScreen: (screen: ScreenView) => void;
}

interface InvoiceItem {
  id: string;
  description: string;
  qty: number;
  unitPrice: number;
}

export const ArtisanProScreen: React.FC<ArtisanProScreenProps> = ({ onBack }) => {
  const LIVE_URL = 'https://artisanprosn.vercel.app/';
  const [viewMode, setViewMode] = useState<'simulator' | 'embed'>('simulator');
  const [iframeKey, setIframeKey] = useState(0);

  // Simulator State
  const [docType, setDocType] = useState<'devis' | 'facture'>('devis');
  const [regime, setRegime] = useState<'informel' | 'formel'>('informel');
  const [trade, setTrade] = useState<'plombier' | 'electricien' | 'macon'>('plombier');
  const [clientName, setClientName] = useState('Mme Fatou Ndiaye');
  const [clientPhone, setClientPhone] = useState('+221 77 450 22 10');
  const [clientAddress, setClientAddress] = useState('Sacré-Cœur 3, Dakar');
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', description: 'Remplacement tuyauterie PVC & raccordements', qty: 1, unitPrice: 25000 },
    { id: '2', description: 'Robinetterie mitigeur chromée garantie', qty: 2, unitPrice: 15000 },
    { id: '3', description: 'Main d\'œuvre & test étanchéité', qty: 1, unitPrice: 18000 },
  ]);
  const [isConverted, setIsConverted] = useState(false);
  const [whatsappSent, setWhatsappSent] = useState(false);

  // Calculations
  const totalHT = items.reduce((sum, item) => sum + item.qty * item.unitPrice, 0);
  const tvaRate = regime === 'formel' ? 0.18 : 0;
  const tvaAmount = Math.round(totalHT * tvaRate);
  const totalTTC = totalHT + tvaAmount;

  const handleConvertToFacture = () => {
    setDocType('facture');
    setIsConverted(true);
  };

  const handleShareWhatsApp = () => {
    setWhatsappSent(true);
    setTimeout(() => setWhatsappSent(false), 4000);
  };

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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#F26A1B]/10 text-[#D8580E] border border-[#F26A1B]/30 hover:bg-[#F26A1B]/20 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>artisanprosn.vercel.app</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#78716C]">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span>PWA Hors-ligne • Sénégal</span>
            </div>
          </div>
        </div>

        {/* Header Title with Mode Switcher */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7E5E4] shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#F26A1B]/10 text-[#D8580E] mb-2">
                <span>Application En Ligne • artisanprosn.vercel.app</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] tracking-tight">
                ArtisanPro Sénégal — Devis &amp; Factures
              </h1>
              <p className="mt-1 text-sm text-[#57534E] max-w-2xl">
                Outil taillé sur-mesure pour les plombiers, électriciens et maçons : mode informel (reçu) ou formel (TVA 18 % et NINEA), 100% hors-ligne, calculs automatiques en FCFA et envoi WhatsApp.
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-[#F4F2EC] p-1.5 rounded-xl border border-[#E7E5E4] shrink-0 self-start sm:self-auto">
              <button
                onClick={() => setViewMode('simulator')}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'simulator'
                    ? 'bg-white text-[#1C1917] shadow-xs'
                    : 'text-[#78716C] hover:text-[#1C1917]'
                }`}
              >
                Simulateur Interactif
              </button>

              <button
                onClick={() => setViewMode('embed')}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'embed'
                    ? 'bg-[#F26A1B] text-white shadow-xs'
                    : 'text-[#78716C] hover:text-[#1C1917]'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Tester ArtisanPro en Direct</span>
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
                <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
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
                  className="px-3 py-1 bg-[#F26A1B] hover:bg-[#D8580E] text-white font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
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
                title="Application ArtisanPro Sénégal"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
                allow="geolocation; payment"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              />
            </div>
          </div>
        )}

        {/* View Mode 2: Interactive Simulator */}
        {viewMode === 'simulator' && (
          <div className="space-y-6">
            {/* Direct Vercel Banner */}
            <div className="bg-gradient-to-r from-[#FFF7ED] to-white p-5 sm:p-6 rounded-2xl border border-[#FFEDD5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F26A1B]/15 border border-[#F26A1B]/30 flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-[#F26A1B]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1C1917]">
                    Application ArtisanPro déployée sur Vercel
                  </h3>
                  <p className="text-xs text-[#57534E] mt-0.5 font-mono">
                    {LIVE_URL}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setViewMode('embed')}
                  className="px-4 py-2 bg-white hover:bg-[#FAF9F5] text-[#1C1917] text-xs font-semibold rounded-xl border border-[#E7E5E4] transition-colors cursor-pointer"
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

            {/* Interactive Document Builder & Live Preview Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Config Panel */}
              <div className="lg:col-span-5 space-y-5">
                {/* Configuration Card */}
                <div className="bg-white rounded-2xl p-6 border border-[#E7E5E4] shadow-xs space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F4F2EC]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
                      Configuration du Chantier
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded-full font-semibold">
                      <WifiOff className="w-3 h-3" />
                      <span>Hors-ligne actif</span>
                    </span>
                  </div>

                  {/* Metier Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                      Métier de l'artisan
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'plombier', label: 'Plomberie', icon: Wrench },
                        { id: 'electricien', label: 'Électricité', icon: Zap },
                        { id: 'macon', label: 'Maçonnerie', icon: Building },
                      ].map((t) => {
                        const Icon = t.icon;
                        const isSelected = trade === t.id;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => setTrade(t.id as any)}
                            className={`p-2.5 rounded-xl border text-xs font-medium flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#F26A1B]/10 border-[#F26A1B] text-[#D8580E] font-bold'
                                : 'bg-[#FAF9F5] border-[#E7E5E4] text-[#57534E] hover:border-[#D6D3D1]'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span>{t.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Regime Toggle: Informel vs Formel */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                      Régime de facturation
                    </label>
                    <div className="grid grid-cols-2 gap-2 p-1 bg-[#FAF9F5] rounded-xl border border-[#E7E5E4]">
                      <button
                        type="button"
                        onClick={() => setRegime('informel')}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          regime === 'informel'
                            ? 'bg-white shadow-xs text-[#1C1917] border border-[#E7E5E4]'
                            : 'text-[#78716C] hover:text-[#1C1917]'
                        }`}
                      >
                        Mode Informel (Reçu)
                      </button>
                      <button
                        type="button"
                        onClick={() => setRegime('formel')}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          regime === 'formel'
                            ? 'bg-white shadow-xs text-[#F26A1B] border border-[#F26A1B]/30'
                            : 'text-[#78716C] hover:text-[#1C1917]'
                        }`}
                      >
                        Mode Formel (TVA 18% &amp; NINEA)
                      </button>
                    </div>
                    <p className="mt-1.5 text-[11px] text-[#78716C]">
                      {regime === 'informel'
                        ? 'Pour particuliers : reçu clair en FCFA, pas de taxe ajoutée.'
                        : 'Pour entreprises & administrations : mention NINEA, COFI et TVA 18% automatique.'}
                    </p>
                  </div>

                  {/* Client Details */}
                  <div className="space-y-3 pt-3 border-t border-[#F4F2EC]">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                        Nom du client
                      </label>
                      <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E7E5E4] rounded-lg text-xs text-[#1C1917] focus:outline-hidden focus:border-[#F26A1B]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                          Téléphone WhatsApp
                        </label>
                        <input
                          type="text"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E7E5E4] rounded-lg text-xs font-mono text-[#1C1917] focus:outline-hidden focus:border-[#F26A1B]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                          Lieu chantier
                        </label>
                        <input
                          type="text"
                          value={clientAddress}
                          onChange={(e) => setClientAddress(e.target.value)}
                          className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E7E5E4] rounded-lg text-xs text-[#1C1917] focus:outline-hidden focus:border-[#F26A1B]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Key Feature Button: Devis accepté -> Facture en 1 clic */}
                  <div className="pt-3 border-t border-[#F4F2EC]">
                    {docType === 'devis' ? (
                      <button
                        type="button"
                        onClick={handleConvertToFacture}
                        className="w-full py-3 px-4 bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Devis accepté → Générer facture en 1 clic</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setDocType('devis')}
                        className="w-full py-2.5 px-4 bg-[#F4F2EC] hover:bg-[#E7E5E4] text-[#57534E] text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Revenir au mode Devis</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Local Feature Callout */}
                <div className="p-4 bg-white rounded-xl border border-[#E7E5E4] shadow-2xs space-y-2">
                  <div className="text-xs font-bold text-[#1C1917] flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-[#F26A1B]" />
                    <span>Conçu pour le terrain au Sénégal</span>
                  </div>
                  <ul className="text-xs text-[#57534E] space-y-1.5 leading-relaxed">
                    <li>• Fonctionne sans connexion Internet sur le chantier.</li>
                    <li>• Devis transformable en facture d'une simple tape.</li>
                    <li>• Paiement Wave Money scannable directement sur le reçu.</li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Live Document Preview */}
              <div className="lg:col-span-7 space-y-4">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7E5E4] shadow-md relative">
                  {/* Watermark / Badge */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#E7E5E4]">
                    <div>
                      <div className="text-xs font-mono font-bold text-[#F26A1B]">
                        ARTISANPRO SÉNÉGAL
                      </div>
                      <h2 className="text-xl font-black text-[#1C1917] tracking-tight mt-0.5">
                        {trade === 'plombier' && 'Entreprise Plomberie Express'}
                        {trade === 'electricien' && 'Gaye Électricité Générale'}
                        {trade === 'macon' && 'BTP Maçonnerie Moderne'}
                      </h2>
                      <div className="text-xs text-[#78716C] mt-0.5">
                        Dakar, Sénégal • Wave Pro : +221 77 123 45 67
                      </div>
                      {regime === 'formel' && (
                        <div className="text-[11px] font-mono text-[#0F766E] mt-1 bg-[#F0FDFA] inline-block px-2 py-0.5 rounded border border-[#CCFBF1]">
                          NINEA : 008923412 2V2 • RCCM Dakar 2024
                        </div>
                      )}
                    </div>

                    <div className="text-right">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                        docType === 'facture'
                          ? 'bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0]'
                          : 'bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]'
                      }`}>
                        {docType === 'facture' ? 'Facture Définitive' : 'Devis Estimatif'}
                      </span>
                      <div className="text-xs font-mono text-[#78716C] mt-1.5">
                        Réf : {docType.toUpperCase()}-2024-089
                      </div>
                      <div className="text-xs text-[#78716C]">
                        Date : 01 Oct 2026
                      </div>
                    </div>
                  </div>

                  {/* Client Info Bar */}
                  <div className="my-6 p-4 rounded-xl bg-[#FAF9F5] border border-[#E7E5E4] flex flex-col sm:flex-row justify-between text-xs gap-2">
                    <div>
                      <span className="text-[#78716C] block">Client :</span>
                      <strong className="text-[#1C1917] text-sm">{clientName}</strong>
                    </div>
                    <div>
                      <span className="text-[#78716C] block">Téléphone :</span>
                      <span className="font-mono text-[#1C1917]">{clientPhone}</span>
                    </div>
                    <div>
                      <span className="text-[#78716C] block">Chantier :</span>
                      <span className="text-[#1C1917]">{clientAddress}</span>
                    </div>
                  </div>

                  {/* Line Items Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-[#E7E5E4] text-[#78716C]">
                          <th className="text-left py-2 font-semibold">Désignation des travaux</th>
                          <th className="text-center py-2 font-semibold w-16">Qté</th>
                          <th className="text-right py-2 font-semibold w-24">Prix unit.</th>
                          <th className="text-right py-2 font-semibold w-28">Total FCFA</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#F4F2EC]">
                        {items.map((it) => (
                          <tr key={it.id}>
                            <td className="py-2.5 font-medium text-[#1C1917]">{it.description}</td>
                            <td className="py-2.5 text-center font-mono text-[#57534E]">{it.qty}</td>
                            <td className="py-2.5 text-right font-mono text-[#57534E]">
                              {it.unitPrice.toLocaleString('fr-FR')} F
                            </td>
                            <td className="py-2.5 text-right font-mono font-bold text-[#1C1917]">
                              {(it.qty * it.unitPrice).toLocaleString('fr-FR')} F
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Totals Section */}
                  <div className="mt-6 pt-4 border-t border-[#E7E5E4] flex justify-end">
                    <div className="w-64 space-y-2 text-xs">
                      <div className="flex justify-between text-[#57534E]">
                        <span>Total Hors Taxes :</span>
                        <span className="font-mono font-semibold">{totalHT.toLocaleString('fr-FR')} FCFA</span>
                      </div>

                      {regime === 'formel' ? (
                        <div className="flex justify-between text-[#0F766E]">
                          <span>TVA 18% (Sénégal) :</span>
                          <span className="font-mono font-semibold">+{tvaAmount.toLocaleString('fr-FR')} FCFA</span>
                        </div>
                      ) : (
                        <div className="flex justify-between text-[#78716C] italic text-[11px]">
                          <span>Régime informel :</span>
                          <span>TVA non applicable</span>
                        </div>
                      )}

                      <div className="pt-2 border-t border-[#E7E5E4] flex justify-between text-base font-extrabold text-[#1C1917]">
                        <span>Net à Payer :</span>
                        <span className="font-mono text-[#F26A1B]">{totalTTC.toLocaleString('fr-FR')} FCFA</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-8 pt-6 border-t border-[#E7E5E4] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleShareWhatsApp}
                        className="py-2.5 px-4 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Partager via WhatsApp</span>
                      </button>

                      <a
                        href={LIVE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3.5 bg-[#FAF9F5] hover:bg-[#F4F2EC] text-[#1C1917] text-xs font-semibold rounded-xl border border-[#E7E5E4] flex items-center gap-1.5 transition-colors"
                      >
                        <span>Ouvrir sur le site</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#F26A1B]" />
                      </a>
                    </div>

                    <div className="text-xs text-[#78716C] font-mono flex items-center gap-1">
                      <span>Règlement : Wave ou Espèces</span>
                    </div>
                  </div>

                  {whatsappSent && (
                    <div className="mt-4 p-3 bg-[#DCFCE7] border border-[#BBF7D0] rounded-xl text-xs text-[#15803D] flex items-center gap-2 animate-in fade-in duration-200">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>
                        Document formaté pour WhatsApp envoyé avec succès au {clientPhone} !
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
