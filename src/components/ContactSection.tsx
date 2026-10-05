import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Clock, 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Twitter, 
  Check, 
  Copy,
  MessageCircle 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenContactModal: () => void;
  onOpenCvModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenContactModal,
  onOpenCvModal,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF9F5]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E7E5E4] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Column: Direct contact pitch */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#F26A1B] mb-2">
                  DISPONIBILITÉ IMMÉDIATE
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
                  Construisons quelque chose ensemble.
                </h2>

                <p className="mt-4 text-base text-[#57534E] leading-relaxed">
                  Vous avez un produit à lancer au Sénégal, une plateforme existante à optimiser ou besoin d'un
                  développeur full-stack réactif et autonome ? Discutons-en dès aujourd'hui.
                </p>

                {/* Direct info icons */}
                <div className="mt-8 space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-3 text-[#1C1917]">
                    <Mail className="w-4 h-4 text-[#F26A1B] shrink-0" />
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-semibold hover:text-[#F26A1B] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 hover:bg-[#F4F2EC] rounded text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
                      title="Copier l'adresse email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#16A34A]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <div className="flex items-center gap-3 text-[#57534E]">
                    <Phone className="w-4 h-4 text-[#F26A1B] shrink-0" />
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="hover:text-[#F26A1B] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                    <span>· Dakar, Sénégal</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#78716C]">
                    <Clock className="w-4 h-4 text-[#F26A1B] shrink-0" />
                    <span>{PERSONAL_INFO.responseTime}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#F4F2EC] flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenContactModal}
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-[#F26A1B] hover:bg-[#D8580E] active:scale-[0.98] rounded-lg shadow-xs transition-all duration-150 cursor-pointer"
                >
                  <span>Démarrer une conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/221772783150?text=Bonjour%20Papa%20Daouda,%20je%20vous%20contacte%20depuis%20votre%20portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#15803D] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 active:scale-[0.98] rounded-lg transition-all duration-150 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#16A34A]" />
                  <span>WhatsApp</span>
                </a>

                <button
                  onClick={onOpenCvModal}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#1C1917] bg-[#F4F2EC] hover:bg-[#EAE7DF] active:scale-[0.98] rounded-lg transition-all duration-150 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger mon CV (PDF)</span>
                </button>
              </div>
            </div>

            {/* Right Column: Socials & Open Source */}
            <div className="lg:col-span-5 bg-[#FAF9F5] rounded-xl p-6 sm:p-7 border border-[#E7E5E4] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#1C1917] tracking-tight">
                  Réseaux &amp; Code
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#78716C] leading-relaxed">
                  Retrouvez mes dépôts open source, contributions et réflexions techniques sur le web moderne :
                </p>

                <div className="mt-6 space-y-2.5">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-white border border-[#E7E5E4] hover:border-[#D6D3D1] hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-4 h-4 text-[#1C1917]" />
                      <span className="text-xs font-semibold text-[#1C1917]">GitHub</span>
                      <span className="font-mono text-xs text-[#78716C]">@devedakar</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A8A29E] group-hover:text-[#F26A1B] group-hover:translate-x-0.5 transition-all" />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-white border border-[#E7E5E4] hover:border-[#D6D3D1] hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-[#0077B5]" />
                      <span className="text-xs font-semibold text-[#1C1917]">LinkedIn</span>
                      <span className="font-mono text-xs text-[#78716C]">Deve Dakar</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A8A29E] group-hover:text-[#F26A1B] group-hover:translate-x-0.5 transition-all" />
                  </a>

                  <a
                    href="https://x.com/DEV_S29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-white border border-[#E7E5E4] hover:border-[#D6D3D1] hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Twitter className="w-4 h-4 text-[#1DA1F2]" />
                      <span className="text-xs font-semibold text-[#1C1917]">X / Twitter</span>
                      <span className="font-mono text-xs text-[#78716C]">@DEV_S29</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A8A29E] group-hover:text-[#F26A1B] group-hover:translate-x-0.5 transition-all" />
                  </a>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="mt-6 pt-4 border-t border-[#E7E5E4] flex items-center gap-2 text-xs font-semibold text-[#16A34A]">
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                <span>Disponible pour de nouveaux projets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
