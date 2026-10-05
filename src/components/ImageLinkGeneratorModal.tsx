import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, Image as ImageIcon, Sparkles, Code } from 'lucide-react';
import { DavinLogo } from './DavinLogo';

interface ImageLinkGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ImageLinkGeneratorModal: React.FC<ImageLinkGeneratorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeAsset, setActiveAsset] = useState<string>('workspace');
  const [customUrl, setCustomUrl] = useState('');
  const [altText, setAltText] = useState('Aperçu dynamique');
  const [tagFormat, setTagFormat] = useState<'standard' | 'responsive' | 'css'>('standard');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const appAssets = [
    {
      id: 'papa-daouda',
      title: 'Papa Daouda Samb (Costume & Cravate Orange)',
      path: '/src/assets/images/Papa daouda.jpg',
      aspect: 'Portrait',
    },
    {
      id: 'workspace',
      title: 'Espace de travail Almadies',
      path: '/src/assets/images/workspace_dakar_almadies_1790778812773.jpg',
      aspect: '16:9',
    },
    {
      id: 'dem-driver',
      title: 'Maquette DEM Driver PWA',
      path: '/src/assets/images/dem_driver_mockup_1790778824488.jpg',
      aspect: '16:9',
    },
    {
      id: 'sante-meds',
      title: 'Maquette Santé & Médicaments',
      path: '/src/assets/images/sante_meds_mockup_1790778836060.jpg',
      aspect: '16:9',
    },
    {
      id: 'telemetry',
      title: 'Dashboard Analyseur d’Annulations',
      path: '/src/assets/images/telemetry_analytics_mockup_1790778847338.jpg',
      aspect: '16:9',
    },
  ];

  const currentPath = customUrl || (appAssets.find((a) => a.id === activeAsset)?.path ?? '');

  const generateSnippet = () => {
    if (tagFormat === 'standard') {
      return `<img \n  src="${currentPath}" \n  alt="${altText}" \n  loading="lazy" \n  referrerpolicy="no-referrer" \n  class="w-full h-auto rounded-xl object-cover" \n/>`;
    }
    if (tagFormat === 'responsive') {
      return `<picture>\n  <source media="(min-width: 1024px)" srcset="${currentPath}">\n  <img src="${currentPath}" alt="${altText}" loading="lazy" class="w-full rounded-xl">\n</picture>`;
    }
    return `/* Lien dynamique en arrière-plan CSS */\n.hero-card {\n  background-image: url('${currentPath}');\n  background-size: cover;\n  background-position: center;\n}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateSnippet());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E7E5E4] overflow-hidden my-auto z-10 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#FAF9F5] px-6 py-4 border-b border-[#E7E5E4] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#F26A1B]" />
            <span className="text-xs font-bold text-[#1C1917]">
              Générateur de Liens Dynamiques d'Images HTML
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#78716C] hover:text-[#1C1917] hover:bg-[#F4F2EC] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-[#1C1917]">
          <div>
            <div className="text-sm font-bold text-[#1C1917] mb-1">
              Liens dynamiques vers les visuels de l'application
            </div>
            <p className="text-[#78716C] leading-relaxed">
              Sélectionnez un visuel généré pour l'application ou insérez une URL personnalisée pour obtenir immédiatement le balisage HTML / CSS optimisé avec gestion de cache et accessibilité.
            </p>
          </div>

          {/* Quick Assets Picker */}
          <div>
            <label className="block font-bold text-[#1C1917] mb-2 uppercase tracking-wider text-[10px]">
              Visuels de l'application disponibles
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {appAssets.map((asset) => (
                <button
                  key={asset.id}
                  onClick={() => {
                    setActiveAsset(asset.id);
                    setCustomUrl('');
                    setAltText(asset.title);
                  }}
                  className={`p-2.5 rounded-xl border text-left flex items-start gap-2.5 transition-all ${
                    activeAsset === asset.id && !customUrl
                      ? 'border-[#F26A1B] bg-[#FFFDFB] shadow-xs'
                      : 'border-[#E7E5E4] bg-[#FAF9F5] hover:bg-[#F4F2EC]'
                  }`}
                >
                  <ImageIcon className="w-4 h-4 text-[#F26A1B] shrink-0 mt-0.5" />
                  <div className="truncate">
                    <div className="font-semibold truncate text-[11px]">{asset.title}</div>
                    <div className="text-[10px] font-mono text-[#78716C]">{asset.aspect}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Custom URL Option */}
          <div>
            <label className="block font-bold text-[#1C1917] mb-1 uppercase tracking-wider text-[10px]">
              Ou entrez un lien d'image dynamique personnalisé
            </label>
            <input
              type="text"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              placeholder="https://... ou /src/assets/..."
              className="w-full px-3 py-2 bg-[#FAF9F5] rounded-lg border border-[#E7E5E4] font-mono text-xs focus:outline-none focus:ring-1 focus:ring-[#F26A1B]"
            />
          </div>

          {/* Format selection */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-[#78716C] uppercase">Format HTML :</span>
            <div className="flex items-center gap-1 p-1 bg-[#F4F2EC] rounded-lg">
              <button
                onClick={() => setTagFormat('standard')}
                className={`px-2.5 py-1 rounded text-xs font-semibold ${
                  tagFormat === 'standard' ? 'bg-white shadow-xs text-[#1C1917]' : 'text-[#78716C]'
                }`}
              >
                &lt;img&gt; Standard
              </button>
              <button
                onClick={() => setTagFormat('responsive')}
                className={`px-2.5 py-1 rounded text-xs font-semibold ${
                  tagFormat === 'responsive' ? 'bg-white shadow-xs text-[#1C1917]' : 'text-[#78716C]'
                }`}
              >
                &lt;picture&gt; Responsive
              </button>
              <button
                onClick={() => setTagFormat('css')}
                className={`px-2.5 py-1 rounded text-xs font-semibold ${
                  tagFormat === 'css' ? 'bg-white shadow-xs text-[#1C1917]' : 'text-[#78716C]'
                }`}
              >
                CSS background-image
              </button>
            </div>
          </div>

          {/* Generated Code Area */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-[#1C1917] uppercase tracking-wider text-[10px]">
                Code généré prêt à copier
              </span>
              <button
                onClick={handleCopy}
                className="px-2.5 py-1 text-xs font-semibold text-[#F26A1B] hover:bg-[#F26A1B]/10 rounded-md transition-colors flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copié dans le presse-papier !' : 'Copier le code'}</span>
              </button>
            </div>

            <pre className="p-3.5 rounded-xl bg-[#1C1917] text-[#9CDCFE] font-mono text-xs overflow-x-auto border border-[#333333] whitespace-pre">
              {generateSnippet()}
            </pre>
          </div>

          {/* Live Preview Box */}
          <div>
            <span className="font-bold text-[#1C1917] uppercase tracking-wider text-[10px] block mb-2">
              Aperçu en direct de l'image
            </span>
            <div className="relative rounded-xl overflow-hidden border border-[#E7E5E4] bg-[#FAF9F5] aspect-[16/9] max-h-48 flex items-center justify-center">
              <img
                src={currentPath}
                alt={altText}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
