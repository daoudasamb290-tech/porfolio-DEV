import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Users, 
  CreditCard, 
  QrCode, 
  CheckCircle2, 
  Clock, 
  Smartphone, 
  Share2, 
  Navigation,
  ShieldCheck,
  ExternalLink,
  Globe,
  RefreshCw
} from 'lucide-react';
import { ScreenView } from '../../types';

interface DemDriverScreenProps {
  onBack: () => void;
  onNavigateScreen: (screen: ScreenView) => void;
}

export const DemDriverScreen: React.FC<DemDriverScreenProps> = ({ onBack }) => {
  const LIVE_URL = 'https://dem-nioudem.vercel.app/';
  const [viewMode, setViewMode] = useState<'simulator' | 'embed'>('simulator');
  const [iframeKey, setIframeKey] = useState(0);
  const [origin, setOrigin] = useState('Dakar (Gare Beaux Maraîchers)');
  const [destination, setDestination] = useState('Touba (Grande Mosquée)');
  const [seats, setSeats] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<'wave' | 'orange'>('wave');
  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('DEM-7829-SN');

  const pricePerSeat = 4500;
  const totalPrice = pricePerSeat * seats;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingRef(`DEM-${Math.floor(1000 + Math.random() * 9000)}-SN`);
    setIsBooked(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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
              <span>dem-nioudem.vercel.app</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#78716C]">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span>DEM Driver • En Ligne</span>
            </div>
          </div>
        </div>

        {/* Header Title with Mode Switcher */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7E5E4] shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#F26A1B]/10 text-[#D8580E] mb-2">
                <span>Application En Ligne • dem-nioudem.vercel.app</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] tracking-tight">
                DEM Driver — Transport Interurbain
              </h1>
              <p className="mt-1 text-sm text-[#57534E]">
                Expérience de réservation mobile accessible en direct sur{' '}
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D8580E] hover:underline font-mono font-medium"
                >
                  {LIVE_URL}
                </a>
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
                Simulateur Mobile
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
                <span>Tester en Direct</span>
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
                title="Application DEM Driver"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
                allow="geolocation; payment"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              />
            </div>
          </div>
        )}

        {/* View Mode 2: Mobile Phone Frame Simulator */}
        {viewMode === 'simulator' && (
          <div className="space-y-6">
            {/* Banner Link to DEM Driver */}
            <div className="bg-gradient-to-r from-[#FFF7ED] to-white p-5 sm:p-6 rounded-2xl border border-[#FFEDD5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F26A1B]/15 border border-[#F26A1B]/30 flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-[#F26A1B]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1C1917]">
                    Application DEM Driver déployée sur Vercel
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

            {/* Main Interactive Screen Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Phone Frame Simulator */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-sm rounded-[36px] bg-[#1C1917] p-3 shadow-2xl border-4 border-[#2E2A27]">
              {/* Phone Speaker Notch */}
              <div className="relative mx-auto w-32 h-4 bg-[#2E2A27] rounded-b-xl flex items-center justify-center mb-2">
                <div className="w-12 h-1 bg-[#44403C] rounded-full" />
              </div>

              {/* Phone Inner Display */}
              <div className="bg-[#FAF9F5] rounded-[28px] overflow-hidden text-[#1C1917] flex flex-col min-h-[580px] border border-[#E7E5E4]">
                {/* Mobile Top App Bar */}
                <div className="bg-white px-4 py-3 border-b border-[#E7E5E4] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#F26A1B] flex items-center justify-center text-white font-bold text-xs">
                      D
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-none">DEM Driver</div>
                      <div className="text-[10px] text-[#78716C] leading-none mt-0.5">Dakar ➔ Régions</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-[#FAF9F5] text-[#16A34A] rounded-full border border-[#E7E5E4] font-medium">
                    En ligne
                  </span>
                </div>

                {!isBooked ? (
                  /* Booking Form View */
                  <form onSubmit={handleBooking} className="p-4 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      {/* Origin */}
                      <div>
                        <label className="block text-[11px] font-bold text-[#57534E] uppercase mb-1">
                          Point de départ
                        </label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 text-[#F26A1B] absolute left-3 top-2.5" />
                          <select
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 text-xs bg-white rounded-lg border border-[#E7E5E4] focus:outline-none focus:ring-1 focus:ring-[#F26A1B]"
                          >
                            <option value="Dakar (Gare Beaux Maraîchers)">Dakar (Gare Beaux Maraîchers)</option>
                            <option value="Dakar (Colobane)">Dakar (Colobane)</option>
                            <option value="Dakar (Pikine)">Dakar (Pikine Bountou)</option>
                            <option value="Rufisque">Rufisque (Gare TER)</option>
                          </select>
                        </div>
                      </div>

                      {/* Destination */}
                      <div>
                        <label className="block text-[11px] font-bold text-[#57534E] uppercase mb-1">
                          Destination
                        </label>
                        <div className="relative">
                          <Navigation className="w-4 h-4 text-[#16A34A] absolute left-3 top-2.5" />
                          <select
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 text-xs bg-white rounded-lg border border-[#E7E5E4] focus:outline-none focus:ring-1 focus:ring-[#F26A1B]"
                          >
                            <option value="Touba (Grande Mosquée)">Touba (Grande Mosquée)</option>
                            <option value="Thiès (Rond-point)">Thiès (Rond-point)</option>
                            <option value="Saint-Louis (Peytavin)">Saint-Louis (Peytavin)</option>
                            <option value="Mbour (Croisement Saly)">Mbour (Croisement Saly)</option>
                          </select>
                        </div>
                      </div>

                      {/* Depart details */}
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-bold text-[#57534E] uppercase mb-1">
                            Date &amp; Heure
                          </label>
                          <div className="flex items-center gap-1.5 px-2.5 py-2 bg-white rounded-lg border border-[#E7E5E4] text-xs">
                            <Calendar className="w-3.5 h-3.5 text-[#78716C]" />
                            <span>Aujourd'hui 14:30</span>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-[#57534E] uppercase mb-1">
                            Places ({seats})
                          </label>
                          <div className="flex items-center justify-between px-2.5 py-1.5 bg-white rounded-lg border border-[#E7E5E4] text-xs">
                            <button
                              type="button"
                              onClick={() => setSeats(Math.max(1, seats - 1))}
                              className="w-5 h-5 rounded bg-[#F4F2EC] flex items-center justify-center font-bold"
                            >
                              -
                            </button>
                            <span className="font-mono font-bold">{seats}</span>
                            <button
                              type="button"
                              onClick={() => setSeats(Math.min(4, seats + 1))}
                              className="w-5 h-5 rounded bg-[#F4F2EC] flex items-center justify-center font-bold"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Vehicle & Driver Card */}
                      <div className="p-2.5 rounded-lg bg-white border border-[#E7E5E4] text-xs">
                        <div className="flex items-center justify-between font-semibold text-[#1C1917]">
                          <span>Véhicule 7 Places Climatisé</span>
                          <span className="font-mono text-[#F26A1B]">{pricePerSeat.toLocaleString()} FCFA/pl</span>
                        </div>
                        <div className="text-[11px] text-[#78716C] mt-1 flex items-center gap-2">
                          <span>Chauffeur : Cheikh Ndiaye (★ 4.9)</span>
                          <span>·</span>
                          <span className="text-[#16A34A]">Garanti</span>
                        </div>
                      </div>

                      {/* Payment Method Selector */}
                      <div>
                        <label className="block text-[11px] font-bold text-[#57534E] uppercase mb-1.5">
                          Mode de paiement instantané
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setPaymentMethod('wave')}
                            className={`p-2 rounded-lg border text-left flex items-center gap-2 text-xs transition-colors ${
                              paymentMethod === 'wave'
                                ? 'border-[#1DA1F2] bg-[#F0F9FF] text-[#0369A1] font-bold'
                                : 'border-[#E7E5E4] bg-white text-[#57534E]'
                            }`}
                          >
                            <span className="w-2.5 h-2.5 rounded-full bg-[#1DA1F2]" />
                            <span>Wave Money</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setPaymentMethod('orange')}
                            className={`p-2 rounded-lg border text-left flex items-center gap-2 text-xs transition-colors ${
                              paymentMethod === 'orange'
                                ? 'border-[#EA580C] bg-[#FFF7ED] text-[#C2410C] font-bold'
                                : 'border-[#E7E5E4] bg-white text-[#57534E]'
                            }`}
                          >
                            <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]" />
                            <span>Orange Money</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Total & Submit Button */}
                    <div className="pt-2">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="text-[#78716C]">Total à payer :</span>
                        <span className="font-mono font-extrabold text-base text-[#1C1917]">
                          {totalPrice.toLocaleString()} FCFA
                        </span>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 bg-[#F26A1B] hover:bg-[#D8580E] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                      >
                        Payer avec {paymentMethod === 'wave' ? 'Wave' : 'Orange Money'} &amp; Réserver
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Confirmed Ticket with Offline QR */
                  <div className="p-4 space-y-4 flex-1 flex flex-col justify-between animate-in fade-in duration-200">
                    <div className="bg-white rounded-xl p-4 border border-[#E7E5E4] text-center">
                      <div className="w-10 h-10 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center mx-auto mb-2">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div className="text-xs font-bold text-[#1C1917]">
                        Billet Confirmé &amp; Payé
                      </div>
                      <div className="font-mono text-[11px] text-[#78716C] mt-0.5">
                        Réf : {bookingRef}
                      </div>

                      {/* Mock QR Code */}
                      <div className="mt-3 p-3 bg-[#FAF9F5] rounded-lg border border-dashed border-[#D6D3D1] inline-block">
                        <QrCode className="w-28 h-28 text-[#1C1917] mx-auto" />
                      </div>

                      <div className="mt-2 text-[10px] text-[#16A34A] font-semibold flex items-center justify-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Valide Hors Ligne (Scan sans Internet)</span>
                      </div>
                    </div>

                    {/* Journey Summary */}
                    <div className="bg-white p-3 rounded-xl border border-[#E7E5E4] text-xs space-y-1.5 font-mono">
                      <div className="flex justify-between">
                        <span className="text-[#78716C]">Trajet :</span>
                        <span className="text-[#1C1917] font-semibold text-right">Dakar ➔ Touba</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#78716C]">Places :</span>
                        <span className="text-[#1C1917] font-semibold">{seats} place(s)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#78716C]">Paiement :</span>
                        <span className="text-[#16A34A] font-semibold">{totalPrice.toLocaleString()} FCFA (Wave)</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsBooked(false)}
                      className="w-full py-2 bg-[#F4F2EC] hover:bg-[#EAE7DF] text-[#1C1917] text-xs font-semibold rounded-lg transition-colors"
                    >
                      Faire une autre simulation
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Highlights & Features */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-xl p-6 border border-[#E7E5E4]">
              <h3 className="text-base font-bold text-[#1C1917] mb-3 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#F26A1B]" />
                <span>Pourquoi cette interface fonctionne au Sénégal</span>
              </h3>
              <ul className="space-y-3 text-xs text-[#57534E] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F26A1B] mt-1.5 shrink-0" />
                  <span>
                    <strong>Paiement en un clic via Deep Link Wave :</strong> Redirige directement vers l'application Wave de l'usager sans nécessiter de carte bancaire Visa/Mastercard.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F26A1B] mt-1.5 shrink-0" />
                  <span>
                    <strong>Validation QR code déconnectée :</strong> Le chauffeur scanne le billet du voyageur même en pleine brousse sans couverture réseau 4G.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F26A1B] mt-1.5 shrink-0" />
                  <span>
                    <strong>Zéro jargon technique :</strong> Textes courts, tailles tactiles larges adaptées aux smartphones d'entrée de gamme (Tecno, Infinix).
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#E7E5E4]">
              <h3 className="text-xs font-bold text-[#78716C] uppercase tracking-wider mb-2">
                Métriques Clés de DEM Driver
              </h3>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E7E5E4]">
                  <div className="text-xl font-extrabold font-mono text-[#F26A1B]">120+</div>
                  <div className="text-[11px] text-[#78716C]">Réservations m-1</div>
                </div>
                <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E7E5E4]">
                  <div className="text-xl font-extrabold font-mono text-[#16A34A]">&lt; 30s</div>
                  <div className="text-[11px] text-[#78716C]">Temps de résa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  </div>
);
};
