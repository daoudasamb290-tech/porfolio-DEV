import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Copy, 
  User, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  ShieldCheck, 
  Globe2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { DavinLogo } from '../DavinLogo';
import { PERSONAL_INFO } from '../../data/portfolioData';
import papaDaoudaImg from '../../assets/images/Papa daouda.jpg';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    const originalTitle = document.title;
    document.title = `CV - ${PERSONAL_INFO.name.toUpperCase()}`;
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  const handleCopyMarkdown = () => {
    const cvText = `# SAMB PAPA DAOUDA
## DÉVELOPPEUR

### CONTACT
- Téléphone : ${PERSONAL_INFO.phone}
- Email : ${PERSONAL_INFO.email}
- Localisation : ${PERSONAL_INFO.location}

### PROFILE
${PERSONAL_INFO.bio}

### COMPÉTENCES
- Langages/Frameworks : React, JavaScript/TypeScript, React
- Backend & Bases de données : Supabase (PostgreSQL), Edge Functions, Prisma, SQLite
- Sécurité : RLS (Row Level Security), authentification serveur (bcrypt), architecture Edge Functions
- Outils & Déploiement : Vercel, Cloudflare, Git, claude code, vs code
- Intégrations : Wave Business Checkout, Supabase Realtime, systèmes de paiement mobile money

### EXPÉRIENCE PROFESSIONNELLE
- DEM Driver — Plateforme de transport intercité (Dakar–Thiès–Touba–AIBD)
  * Conception d'une marketplace bi-face (passagers/chauffeurs) avec réservation en temps réel
  * Architecture sécurisée : migration vers Edge Functions, correction des politiques RLS, gestion des paiements (commission digitale + règlement chauffeur en pair-à-pair)
  * Modèle économique adapté au contexte local (zones de surcharge, points de ramassage groupés)
- Barber_Pro — Application de gestion de file d'attente pour salons de coiffure
  * PWA avec suivi en temps réel des files d'attente ; pour faciliter la gestion des clients
- Applications de gestion — Tableau de bord restaurant & gestion de flotte de livraison
  * Développement de deux applications (tableau de bord et app flotte) React déployées (Cloudflare + Supabase)
  * Recommandations stratégiques générées par IA pour aide à la décision
- 2024-2025 / Contrôleur de bureau aux élections présidentielles
  * Chargé de la gestion des votants, le suivi des électeurs sur le respect des procédures du vote, le comptage et assurer la sécurité du procès-verbal du vote jusqu'au CENA

### FORMATION
- 2026 : developpement frontend - FORCE N
- 2025 : Séminaire GRC Business Communication Center (BCC)
- 2025 : Traitement des données - FORCE-N
- 2022 : Baccalauréat - Groupe scolaire Al Amine

### EXPERTISES
- Détection et résolution de failles de sécurité (RLS, authentification)
- Diagnostic de problèmes de performance
- Conception de solutions digitales adaptées au terrain
- Architecture backend (Supabase, Edge Functions, Prisma)
- Développement web & mobile (React, Java)
- Intégration de paiements locaux (Wave, mobile money)
- Gestion de projet de bout en bout (analyse → déploiement)

### CENTRES D'INTÉRÊT
- Football
- Création graphique
- Veille technologique

### LANGUAGES
- Français (courant)
- Anglais (intermédiaire)
- Wolof (courant)
`;
    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#E7E5E4] overflow-hidden my-auto z-10 flex flex-col max-h-[92vh]">
        {/* Modal Top Actions Bar (Hidden in print) */}
        <div className="bg-[#FAF9F5] px-6 py-3.5 border-b border-[#E7E5E4] flex items-center justify-between shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <DavinLogo variant="compact" size="sm" />
            <span className="text-xs font-semibold text-[#78716C] hidden sm:inline">
              Curriculum Vitae — Samb Papa Daouda
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="px-3 py-1.5 text-xs font-medium text-[#1C1917] bg-white border border-[#E7E5E4] hover:bg-[#F4F2EC] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copier le CV au format texte / markdown"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#16A34A]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copié !' : 'Copier texte'}</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0A2540] hover:bg-[#1E293B] active:scale-[0.98] rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Télécharger le CV au format PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Télécharger le PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#78716C] hover:text-[#1C1917] hover:bg-[#F4F2EC] rounded-lg transition-colors ml-1 cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content Body */}
        <div className="p-6 sm:p-10 md:p-12 overflow-y-auto print:p-0 print:overflow-visible text-[#1C1917] bg-white">
          {/* Header Title Section */}
          <div className="border-b-2 border-[#0A2540] pb-6 mb-8 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A2540] uppercase">
                SAMB PAPA DAOUDA
              </h1>
              <div className="text-base sm:text-lg font-bold text-[#0284C7] uppercase tracking-wider mt-1">
                DÉVELOPPEUR
              </div>
            </div>

            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-[#0A2540]/20 shrink-0 bg-[#0A2540] shadow-sm">
              <img
                src={papaDaoudaImg}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-[center_15%]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* 2-Column CV Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            {/* Left Column (~35% width: Contact, Centres d'intérêt, Languages, Expertises) */}
            <div className="md:col-span-4 space-y-7 md:border-r md:border-[#E2E8F0] md:pr-6">
              {/* CONTACT */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0A2540] border-b border-[#CBD5E1] pb-1.5 mb-3">
                  CONTACT
                </h3>
                <div className="space-y-2 text-xs text-[#334155]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-[#0284C7] font-medium font-mono">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#0284C7] font-medium break-all">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* CENTRES D'INTÉRÊT */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0A2540] border-b border-[#CBD5E1] pb-1.5 mb-3">
                  CENTRES D'INTÉRÊT
                </h3>
                <ul className="space-y-1.5 text-xs text-[#334155] list-disc list-inside">
                  <li>Football</li>
                  <li>Création graphique</li>
                  <li>Veille technologique</li>
                </ul>
              </div>

              {/* LANGUAGES */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0A2540] border-b border-[#CBD5E1] pb-1.5 mb-3">
                  LANGUAGES
                </h3>
                <ul className="space-y-1.5 text-xs text-[#334155] list-disc list-inside">
                  <li>Français (courant)</li>
                  <li>Anglais (intermédiaire)</li>
                  <li>Wolof (courant)</li>
                </ul>
              </div>

              {/* EXPERTISES */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0A2540] border-b border-[#CBD5E1] pb-1.5 mb-3">
                  EXPERTISES
                </h3>
                <ul className="space-y-2 text-xs text-[#334155] list-disc list-inside leading-snug">
                  <li>Détection et résolution de failles de sécurité (RLS, authentification)</li>
                  <li>Diagnostic de problèmes de performance</li>
                  <li>Conception de solutions digitales adaptées au terrain</li>
                  <li>Architecture backend (Supabase, Edge Functions, Prisma)</li>
                  <li>Développement web &amp; mobile (React, Java)</li>
                  <li>Intégration de paiements locaux (Wave, mobile money)</li>
                  <li>Gestion de projet de bout en bout (analyse → déploiement)</li>
                </ul>
              </div>
            </div>

            {/* Right Column (~65% width: Profile, Compétences, Expérience Pro, Formation) */}
            <div className="md:col-span-8 space-y-7">
              {/* PROFILE */}
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0A2540] border-b border-[#CBD5E1] pb-1.5 mb-3">
                  <div className="w-4 h-4 rounded-full bg-[#0A2540] text-white flex items-center justify-center shrink-0">
                    <User className="w-2.5 h-2.5" />
                  </div>
                  <span>PROFILE</span>
                </div>
                <p className="text-xs text-[#334155] leading-relaxed text-justify">
                  Développeur full-stack autodidacte, je conçois des solutions digitales pour
                  des problèmes concrets du marché sénégalais : transport, restauration,
                  logistique, gestion de files d'attente. J'aime prendre un projet de A à Z,
                  comprendre le besoin, faire les bons choix techniques, sécuriser les
                  données, et livrer une solution qui fonctionne vraiment sur le terrain.
                  Autonome et débrouillard, je préfère apprendre en construisant plutôt
                  qu'en théorie.
                </p>
              </div>

              {/* COMPÉTENCES */}
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0A2540] border-b border-[#CBD5E1] pb-1.5 mb-3">
                  <div className="w-4 h-4 rounded-full bg-[#0A2540] text-white flex items-center justify-center shrink-0">
                    <Cpu className="w-2.5 h-2.5" />
                  </div>
                  <span>COMPÉTENCES</span>
                </div>
                <ul className="space-y-2 text-xs text-[#334155] leading-relaxed">
                  <li>
                    <strong className="text-[#0A2540]">Langages/Frameworks :</strong> React, JavaScript/TypeScript, React
                  </li>
                  <li>
                    <strong className="text-[#0A2540]">Backend &amp; Bases de données :</strong> Supabase (PostgreSQL), Edge Functions, Prisma, SQLite
                  </li>
                  <li>
                    <strong className="text-[#0A2540]">Sécurité :</strong> RLS (Row Level Security), authentification serveur (bcrypt), architecture Edge Functions
                  </li>
                  <li>
                    <strong className="text-[#0A2540]">Outils &amp; Déploiement :</strong> Vercel, Cloudflare, Git, claude code, vs code
                  </li>
                  <li>
                    <strong className="text-[#0A2540]">Intégrations :</strong> Wave Business Checkout, Supabase Realtime, systèmes de paiement mobile money
                  </li>
                </ul>
              </div>

              {/* EXPÉRIENCE PROFESSIONNELLE */}
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0A2540] border-b border-[#CBD5E1] pb-1.5 mb-4">
                  <div className="w-4 h-4 rounded-full bg-[#0A2540] text-white flex items-center justify-center shrink-0">
                    <Briefcase className="w-2.5 h-2.5" />
                  </div>
                  <span>EXPÉRIENCE PROFESSIONNELLE</span>
                </div>

                <div className="space-y-5 text-xs text-[#334155]">
                  {/* Experience 1: DEM Driver */}
                  <div className="relative pl-4 border-l-2 border-[#CBD5E1] space-y-1">
                    <div className="absolute -left-[5px] top-0.5 w-2 h-2 rounded-full bg-[#0284C7]" />
                    <div className="font-bold text-[#0A2540] text-xs sm:text-sm">
                      DEM Driver — Plateforme de transport intercité (Dakar–Thiès–Touba–AIBD)
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-[#475569] leading-snug">
                      <li>Conception d'une marketplace bi-face (passagers/chauffeurs) avec réservation en temps réel</li>
                      <li>Architecture sécurisée : migration vers Edge Functions, correction des politiques RLS, gestion des paiements (commission digitale + règlement chauffeur en pair-à-pair)</li>
                      <li>Modèle économique adapté au contexte local (zones de surcharge, points de ramassage groupés)</li>
                    </ul>
                  </div>

                  {/* Experience 2: Barber_Pro */}
                  <div className="relative pl-4 border-l-2 border-[#CBD5E1] space-y-1">
                    <div className="absolute -left-[5px] top-0.5 w-2 h-2 rounded-full bg-[#0284C7]" />
                    <div className="font-bold text-[#0A2540] text-xs sm:text-sm">
                      Barber_Pro — Application de gestion de file d'attente pour salons de coiffure
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-[#475569] leading-snug">
                      <li>PWA avec suivi en temps réel des files d'attente ; pour faciliter la gestion des clients</li>
                    </ul>
                  </div>

                  {/* Experience 3: Applications de gestion */}
                  <div className="relative pl-4 border-l-2 border-[#CBD5E1] space-y-1">
                    <div className="absolute -left-[5px] top-0.5 w-2 h-2 rounded-full bg-[#0284C7]" />
                    <div className="font-bold text-[#0A2540] text-xs sm:text-sm">
                      Applications de gestion — Tableau de bord restaurant &amp; gestion de flotte de livraison
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-[#475569] leading-snug">
                      <li>Développement de deux applications (tableau de bord et app flotte) React déployées (Cloudflare + Supabase)</li>
                      <li>Recommandations stratégiques générées par IA pour aide à la décision</li>
                    </ul>
                  </div>

                  {/* Experience 4: Contrôleur de bureau */}
                  <div className="relative pl-4 border-l-2 border-[#CBD5E1] space-y-1">
                    <div className="absolute -left-[5px] top-0.5 w-2 h-2 rounded-full bg-[#0284C7]" />
                    <div className="font-bold text-[#0A2540] text-xs sm:text-sm">
                      2024-2025 / Contrôleur de bureau aux élections présidentielles
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-[#475569] leading-snug">
                      <li>Chargé de la gestion des votants, le suivi des électeurs sur le respect des procédures du vote, le comptage et assurer la sécurité du procès-verbal du vote jusqu’au CENA</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FORMATION */}
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0A2540] border-b border-[#CBD5E1] pb-1.5 mb-3">
                  <div className="w-4 h-4 rounded-full bg-[#0A2540] text-white flex items-center justify-center shrink-0">
                    <GraduationCap className="w-2.5 h-2.5" />
                  </div>
                  <span>FORMATION</span>
                </div>
                <div className="space-y-2 text-xs text-[#334155]">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-[#0A2540] shrink-0 font-mono">2026 :</span>
                    <span>developpement frontend - <strong className="text-[#0A2540]">FORCE N</strong></span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-[#0A2540] shrink-0 font-mono">2025 :</span>
                    <span>Séminaire GRC <strong className="text-[#0A2540]">Business Communication Center (BCC)</strong></span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-[#0A2540] shrink-0 font-mono">2025 :</span>
                    <span>Traitement des données - <strong className="text-[#0A2540]">FORCE-N</strong></span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-[#0A2540] shrink-0 font-mono">2022 :</span>
                    <span>Baccalauréat - <strong className="text-[#0A2540]">Groupe scolaire Al Amine</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
