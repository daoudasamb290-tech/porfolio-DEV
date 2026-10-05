import { ProjectItem, PhilosophyCard, TechStackItem, ExperienceItem, TestimonialItem } from '../types';
import demDriverMockup from '../assets/images/dem_driver_mockup_1790778824488.jpg';
import santeMedsMockup from '../assets/images/sante_meds_mockup_1790778836060.jpg';
import telemetryMockup from '../assets/images/telemetry_analytics_mockup_1790778847338.jpg';
import artisanProMockup from '../assets/images/artisan_pro_mockup_1790861217657.jpg';

export const PERSONAL_INFO = {
  name: 'Samb Papa Daouda',
  brandName: "DEV'S",
  subBrand: 'DESIGNER / DEVELOPER',
  shortName: 'Deve D.',
  title: 'Développeur Full-Stack',
  tagline: 'Salut, je suis',
  bio: "Développeur full-stack autodidacte, je conçois des solutions digitales pour des problèmes concrets du marché sénégalais : transport, restauration, logistique, gestion de files d'attente. J'aime prendre un projet de A à Z, comprendre le besoin, faire les bons choix techniques, sécuriser les données, et livrer une solution qui fonctionne vraiment sur le terrain. Autonome et débrouillard, je préfère apprendre en construisant plutôt qu'en théorie.",
  location: 'Zone de captage, Dakar',
  email: 'Devosamb@gmail.com',
  phone: '77-278-31-50',
  city: 'Dakar, Sénégal',
  responseTime: 'Réponse sous 24 heures garantie',
  metrics: [
    { value: '100%', label: 'Autonome & Pragmatique' },
    { value: '4+', label: 'Projets Concrets' },
    { value: 'Dakar', label: 'Sénégal & Remote' },
  ],
  socials: [
    { name: 'GitHub', handle: '@devosamb', url: 'https://github.com' },
    { name: 'LinkedIn', handle: 'Papa Daouda Samb', url: 'https://linkedin.com' },
    { name: 'X / Twitter', handle: '@DEV_S29', url: 'https://x.com/DEV_S29' },
  ],
  interests: ['Football', 'Création graphique', 'Veille technologique'],
  languages: ['Français (courant)', 'Anglais (intermédiaire)', 'Wolof (courant)'],
  expertises: [
    'Détection et résolution de failles de sécurité (RLS, authentification)',
    'Diagnostic de problèmes de performance',
    'Conception de solutions digitales adaptées au terrain',
    'Architecture backend (Supabase, Edge Functions, Prisma)',
    'Développement web & mobile (React, Java)',
    'Intégration de paiements locaux (Wave, mobile money)',
    'Gestion de projet de bout en bout (analyse → déploiement)',
  ],
};

export const PHILOSOPHY_CARDS: PhilosophyCard[] = [
  {
    id: 'detail',
    title: 'Sens du détail',
    description: "Chaque milliseconde d'affichage, chaque transition de formulaire et chaque micro-interaction sont pensées pour fluidifier l'usage quotidien.",
    icon: 'eye',
    category: 'Qualité',
  },
  {
    id: 'clean-code',
    title: 'Code propre',
    description: 'Code modulaire, typé, auto-documenté. Facile à relire, facile à maintenir et conçu pour évoluer sans dette technique cachée.',
    icon: 'code',
    category: 'Architecture',
  },
  {
    id: 'problem-solving',
    title: 'Résolveur de problèmes',
    description: "La technologie n'est qu'un vecteur. Je me concentre avant tout sur la friction métier : baisser les annulations de courses ou accélérer l'approvisionnement.",
    icon: 'target',
    category: 'Impact',
  },
  {
    id: 'continuous-learning',
    title: 'Toujours en apprentissage',
    description: "Veille constante sur l'écosystème React 19, Spring Boot 3, les architectures serverless et les standards de paiements mobiles en Afrique.",
    icon: 'book',
    category: 'Veille',
  },
  {
    id: 'team-spirit',
    title: "Esprit d'équipe",
    description: 'Communication claire avec les parties prenantes, écoute active des chauffeurs ou pharmaciens et collaboration fluide avec les designers.',
    icon: 'users',
    category: 'Humain',
  },
  {
    id: 'curious-adaptable',
    title: 'Curieux & Adaptable',
    description: "Je n'hésite pas à explorer de nouveaux outils pour répondre à un besoin spécifique, qu'il s'agisse de webhooks bancaires ou d'optimisations SQL poussées.",
    icon: 'sparkles',
    category: 'Agilité',
  },
];

export const TECH_STACK: TechStackItem[] = [
  {
    name: 'React',
    role: 'Frontend Moderne',
    iconName: 'Atom',
    color: '#0284C7',
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    role: 'Typage Strict & Robuste',
    badge: 'TS 5+',
    iconName: 'FileCode2',
    color: '#3178C6',
    category: 'frontend',
  },
  {
    name: 'PWA Hors-ligne',
    role: 'Cache & Mode Offline',
    badge: 'Service Worker',
    iconName: 'WifiOff',
    color: '#F26A1B',
    category: 'mobile',
  },
  {
    name: 'Google Maps API',
    role: 'Géoloc. & Itinéraires',
    badge: 'Maps & Routes',
    iconName: 'MapPin',
    color: '#EA4335',
    category: 'api',
  },
  {
    name: 'Supabase / PostgreSQL',
    role: 'DB Relationnelle & Auth',
    badge: 'PostgreSQL / BaaS',
    iconName: 'Database',
    color: '#3ECF8E',
    category: 'database',
  },
  {
    name: 'Mobile Pay',
    role: 'Wave & Orange Money',
    badge: 'Wave / OM',
    iconName: 'Smartphone',
    color: '#EA580C',
    category: 'payment',
  },
  {
    name: 'API REST',
    role: 'Architecture & Swagger',
    iconName: 'Cpu',
    color: '#4F46E5',
    category: 'backend',
  },
  {
    name: 'JavaScript',
    role: 'ES6+ / Next.js',
    iconName: 'FileCode2',
    color: '#CA8A04',
    category: 'frontend',
  },
  {
    name: 'Sécurité & Auth',
    role: 'JWT & RLS Rôles',
    iconName: 'ShieldCheck',
    color: '#16A34A',
    category: 'backend',
  },
  {
    name: 'Git / CI-CD',
    role: 'GitHub Actions',
    iconName: 'GitBranch',
    color: '#DC2626',
    category: 'devops',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'dem-driver',
    title: 'DEM Driver',
    category: 'Transport',
    description: 'Marketplace de transport interurbain au Sénégal. Mise en relation directe entre chauffeurs et passagers avec validation de tickets instantanée.',
    tags: ['React', 'Java', 'Wave Pay'],
    metrics: '120+ réservations le 1er mois',
    image: demDriverMockup,
    screenId: 'dem-driver',
    caseStudyAvailable: true,
    liveUrl: 'https://dem-nioudem.vercel.app/',
  },
  {
    id: 'sante-meds',
    title: 'Pharma-Tiv (Santé & Médicaments)',
    category: 'Santé & E-Santé',
    description: "Application informant sur les pharmacies de garde en temps réel et assurant la livraison à domicile des médicaments achetés par les clients.",
    tags: ['React', 'Pharmacie de garde', 'Livraison express'],
    metrics: 'Garde 24/7 & Livraison rapide',
    image: santeMedsMockup,
    screenId: 'sante-meds',
    caseStudyAvailable: false,
    liveUrl: 'https://pharma-tiv.ai.studio/',
  },
  {
    id: 'analyseur-annulations',
    title: "Analyseur d'Annulations",
    category: 'Data & Ops',
    description: "Dashboard & back-office décisionnel pour flottes de transport. Diagnostic en temps réel des motifs d'abandons et alertes prédictives.",
    tags: ['SQL', 'Java', 'Tableaux de bord'],
    metrics: "-28% d'annulations en 60 jours",
    image: telemetryMockup,
    screenId: 'analytics',
    caseStudyAvailable: false,
    liveUrl: 'https://dashbord-gold-chi.vercel.app/',
  },
  {
    id: 'artisan-pro',
    title: 'ArtisanPro Sénégal',
    category: 'Artisans & BTP',
    description: 'Devis et factures pour plombiers, électriciens et maçons : mode informel (reçu) ou formel (TVA 18 % et NINEA) en 1 clic, hors-ligne, partage par WhatsApp, calculs en FCFA.',
    tags: ['React', 'TypeScript', 'Hors-ligne', 'Wave'],
    metrics: 'Devis accepté → Facture en 1 geste',
    image: artisanProMockup,
    screenId: 'artisan-pro',
    caseStudyAvailable: false,
    liveUrl: 'https://artisanprosn.vercel.app/',
  },
];

export const CASE_STUDY_DEM_DRIVER = {
  badge: 'ÉTUDE DE CAS COMPLÈTE',
  title: 'Dans les coulisses de DEM Driver',
  subtitle: "Comment structurer un service d'intermédiation de transport robuste dans un contexte où la majorité des utilisateurs naviguent sur mobile prépayé.",
  steps: [
    {
      num: '01',
      tag: 'LE PROBLÈME',
      title: 'Incertitude & attente dans les gares routières',
      description: "Pour se déplacer de Dakar vers Thiès ou Touba, les passagers devaient attendre plusieurs heures que les véhicules se remplissent sans visibilité sur l'horaire ni garantie de place. Les réservations manuelles par téléphone provoquaient des surréservations chroniques.",
      highlightKey: "Taux d'abandon initial",
      highlightVal: '> 45%',
      highlightColor: 'text-[#DC2626]',
    },
    {
      num: '02',
      tag: 'LA SOLUTION',
      title: 'Application légère & paiement Mobile Money',
      description: "Création d'une application web progressive (PWA) de moins de 150KB. Intégration de l'API Wave pour payer et réserver en 2 clics avec validation par SMS/QR code hors ligne pour le chauffeur, dispensé de connexion permanente.",
      highlightKey: 'Validation réservation',
      highlightVal: '< 30 secondes',
      highlightColor: 'text-[#F26A1B]',
    },
    {
      num: '03',
      tag: 'LES RÉSULTATS',
      title: 'Adoption massive et zéro litige monétaire',
      description: "Dès le premier mois d'exploitation pilote, 120 réservations concrétisées avec un taux de satisfaction de 98% auprès des chauffeurs partenaires. Le modèle est désormais prêt pour une extension interrégionale.",
      highlightKey: 'Satisfaction globale',
      highlightVal: '4.9 / 5',
      highlightColor: 'text-[#16A34A]',
    },
  ],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'En cours',
    role: 'DEM Driver — Plateforme de transport intercité',
    client: 'Dakar — Thiès — Touba — AIBD',
    description: "Conception d'une marketplace bi-face (passagers/chauffeurs) avec réservation en temps réel. Architecture sécurisée : migration vers Edge Functions, correction des politiques RLS, gestion des paiements (commission digitale + règlement chauffeur en pair-à-pair). Modèle économique adapté au contexte local.",
    tags: ['React', 'Supabase', 'Edge Functions', 'RLS', 'Wave Business', 'Realtime'],
    achievements: [
      "Conception d'une marketplace bi-face (passagers/chauffeurs) avec réservation en temps réel",
      'Architecture sécurisée : migration vers Edge Functions, correction des politiques RLS',
      'Gestion des paiements : commission digitale + règlement chauffeur en pair-à-pair',
      'Modèle économique adapté au contexte local (zones de surcharge, points de ramassage groupés)',
    ],
  },
  {
    period: 'Projet Actif',
    role: "Barber_Pro — Gestion de file d'attente pour salons",
    client: 'Salons de coiffure & Services',
    description: "PWA avec suivi en temps réel des files d'attente ; pour faciliter la gestion des clients et optimiser les passages en salon.",
    tags: ['PWA', 'Supabase Realtime', 'TypeScript', 'Offline-First'],
    achievements: [
      "PWA avec suivi en temps réel des files d'attente",
      'Fluidification complète de la prise en charge des clients',
    ],
  },
  {
    period: 'Déployé',
    role: 'Applications de gestion — Restaurant & Flotte',
    client: 'Gestion Commerciale & Logistique',
    description: 'Développement de deux applications (tableau de bord et app flotte) React déployées sur Cloudflare et Supabase. Recommandations stratégiques générées par IA pour aide à la décision.',
    tags: ['React', 'Cloudflare', 'Supabase', 'IA Décisionnelle'],
    achievements: [
      'Développement de 2 applications (tableau de bord & app flotte) React',
      'Déploiement haute performance (Cloudflare + Supabase)',
      'Recommandations stratégiques générées par IA pour aide à la décision',
    ],
  },
  {
    period: '2024 — 2025',
    role: 'Contrôleur de bureau aux élections présidentielles',
    client: 'CENA · Sénégal',
    description: "Chargé de la gestion des votants, le suivi des électeurs sur le respect des procédures du vote, le comptage et assurer la sécurité du procès-verbal du vote jusqu'au CENA.",
    tags: ['Supervision', 'Procédures', 'Sécurité des PV', 'CENA'],
    achievements: [
      'Gestion rigoureuse des votants et respect strict des procédures électorales',
      'Contrôle impartial du comptage et sécurisation du procès-verbal officiel',
      'Acheminement sécurisé du PV jusqu’au CENA',
    ],
  },
];

export interface EducationItem {
  id: string;
  year: string;
  title: string;
  category: 'Diplôme' | 'Certification' | 'Séminaire';
  issuer: string;
  description: string;
  skills: string[];
  icon: 'bac' | 'data' | 'frontend' | 'communication';
}

export const DIPLOMAS_CERTIFICATIONS: EducationItem[] = [
  {
    id: 'frontend-force-n',
    year: '2026',
    title: 'Développement Frontend',
    category: 'Certification',
    issuer: 'FORCE N',
    description: "Programme d'excellence en développement frontend moderne : architecture composants React, TypeScript, intégration web réactive, performance et standards actuels.",
    skills: ['React', 'TypeScript', 'JavaScript ES6+', 'CSS / Responsive', 'Clean Code'],
    icon: 'frontend',
  },
  {
    id: 'seminaire-bcc',
    year: '2025',
    title: 'Séminaire GRC',
    category: 'Séminaire',
    issuer: 'Business Communication Center (BCC)',
    description: 'Gestion de la Relation Client (GRC), communication professionnelle d’entreprise, écoute active, gestion de projet et posture collaborative.',
    skills: ['Communication Pro', 'GRC', 'Posture Projet', 'Écoute Client'],
    icon: 'communication',
  },
  {
    id: 'traitement-donnees-force-n',
    year: '2025',
    title: 'Traitement des Données',
    category: 'Certification',
    issuer: 'FORCE-N',
    description: 'Analyse exploratoire et traitement des données, requêtage SQL, nettoyage de jeux de données, structuration d’indicateurs et tableaux de bord.',
    skills: ['Traitement de données', 'SQL', 'Nettoyage de données', 'KPIs'],
    icon: 'data',
  },
  {
    id: 'bac-alamine',
    year: '2022',
    title: 'Baccalauréat',
    category: 'Diplôme',
    issuer: 'Groupe scolaire Al Amine',
    description: "Diplôme national d'études secondaires. Socle de rigueur académique, culture générale, raisonnement logique et méthodologie de travail.",
    skills: ['Raisonnement logique', 'Méthodologie', 'Capacité de travail'],
    icon: 'bac',
  },
];

export const METHOD_STEPS = [
  {
    num: '01',
    title: 'Comprendre',
    desc: 'Immersion dans le quotidien des usagers finaux, définition des cas limites et priorisation stricte du MVP.',
    detail: "Échanges terrain avec chauffeurs, pharmaciens ou commerçants avant d'écrire la moindre ligne de code.",
  },
  {
    num: '02',
    title: 'Concevoir',
    desc: 'Architecture des données SQL, modélisation des endpoints REST et prototypage d’écrans épurés.',
    detail: 'Maquettes haute fidélité sans fioritures et schémas relationnels optimisés pour la montée en charge.',
  },
  {
    num: '03',
    title: 'Développer',
    desc: 'Implémentation React réactive, services Java fiables, intégration API sécurisée et tests unitaires critiques.',
    detail: 'Typage strict TypeScript, découplage des couches de logique et protection des flux financiers.',
  },
  {
    num: '04',
    title: 'Lancer',
    desc: 'Déploiement progressif, monitoring en temps réel des erreurs et accompagnement des premiers usagers.',
    detail: 'Surveillance des métriques d’abandon réseau et ajustements en production sans interruption de service.',
  },
  {
    num: '05',
    title: 'Améliorer',
    desc: 'Analyse des métriques d’utilisation, correction rapide des points de friction et ajustements de scalabilité.',
    detail: 'Boucle d’itération rapide basée sur les retours réels des utilisateurs sur le terrain.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "« Deve a su transformer notre idée de plateforme de covoiturage en une application simple et redoutablement efficace. Ses choix techniques ont permis de supporter l'afflux de réservations sans aucun bug de paiement. »",
    author: 'Mamadou S.',
    role: 'Responsable Opérations Mobilité • Dakar',
    initials: 'MS',
    rating: 5,
  },
  {
    quote: "« Rarement vu un profil aussi rigoureux sur les contraintes locales. Sa capacité à concevoir une application de santé qui fonctionne même avec une connexion instable a été déterminante pour nos pharmacies partenaires. »",
    author: 'Aminata D.',
    role: 'Consultante Santé & Systèmes Digitaux',
    initials: 'AD',
    rating: 5,
  },
];
