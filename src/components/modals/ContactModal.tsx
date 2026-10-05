import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { DavinLogo } from '../DavinLogo';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [projectType, setProjectType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Envoi par email direct vers Devosamb@gmail.com
    const subject = encodeURIComponent(`[DEV'S Portfolio] Message de ${name || 'Nouveau contact'}${projectType ? ` - ${projectType}` : ''}`);
    const body = encodeURIComponent(
      `Bonjour Papa Daouda Samb,\n\nVous avez reçu un nouveau message depuis votre portfolio :\n\n- Expéditeur : ${name}\n- Email : ${email}${projectType ? `\n- Type de besoin : ${projectType}` : ''}\n\nMessage :\n${message}\n\n---\nEnvoyé depuis le portfolio DEV'S`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E7E5E4] overflow-hidden my-auto z-10">
        {/* Header */}
        <div className="bg-[#FAF9F5] px-6 py-4 border-b border-[#E7E5E4] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DavinLogo variant="compact" size="sm" />
            <span className="text-xs font-bold text-[#1C1917]">
              Démarrer une conversation
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#78716C] hover:text-[#1C1917] hover:bg-[#F4F2EC] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div>
              <div className="text-sm font-bold text-[#1C1917]">
                Parlons de votre projet ou collaboration
              </div>
              <p className="text-[#78716C] mt-1 leading-relaxed">
                Remplissez ce court formulaire ou écrivez directement à{' '}
                <strong className="text-[#1C1917]">{PERSONAL_INFO.email}</strong>. Réponse sous 24h.
              </p>
            </div>

            {/* Project Type */}
            <div>
              <label className="block font-bold text-[#1C1917] mb-1.5 uppercase tracking-wider text-[10px]">
                Type de besoin
              </label>
              <input
                type="text"
                maxLength={100}
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                placeholder="Ex : Application mobile, API backend, refonte, mission..."
                className="w-full px-3 py-2 text-xs bg-[#FAF9F5] rounded-lg border border-[#E7E5E4] focus:outline-none focus:ring-1 focus:ring-[#F26A1B]"
              />
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-[#1C1917] mb-1 uppercase tracking-wider text-[10px]">
                  Votre Nom / Entreprise *
                </label>
                <input
                  type="text"
                  required
                  maxLength={80}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Awa Diop"
                  className="w-full px-3 py-2 bg-[#FAF9F5] rounded-lg border border-[#E7E5E4] focus:outline-none focus:ring-1 focus:ring-[#F26A1B]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1C1917] mb-1 uppercase tracking-wider text-[10px]">
                  Email de contact *
                </label>
                <input
                  type="email"
                  required
                  maxLength={100}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="awa@entreprise.sn"
                  className="w-full px-3 py-2 bg-[#FAF9F5] rounded-lg border border-[#E7E5E4] focus:outline-none focus:ring-1 focus:ring-[#F26A1B]"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block font-bold text-[#1C1917] mb-1 uppercase tracking-wider text-[10px]">
                Description succincte de vos attentes
              </label>
              <textarea
                rows={3}
                maxLength={2500}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Parlez-moi de votre produit, des délais souhaités et de vos utilisateurs cibles..."
                className="w-full px-3 py-2 bg-[#FAF9F5] rounded-lg border border-[#E7E5E4] focus:outline-none focus:ring-1 focus:ring-[#F26A1B]"
              />
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#F26A1B] hover:bg-[#D8580E] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Envoyer le message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold text-[#1C1917]">
              Message transmis !
            </h3>

            <p className="text-xs text-[#57534E] leading-relaxed max-w-sm mx-auto">
              Votre message a été adressé à <strong>{PERSONAL_INFO.email}</strong>. Papa Daouda Samb prendra contact avec vous à l'adresse <strong>{email || 'indiquée'}</strong> sous 24h.
            </p>

            <div className="pt-2 flex justify-center">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 bg-[#1C1917] hover:bg-[#2E2A27] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
