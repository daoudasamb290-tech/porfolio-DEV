import React, { useState } from 'react';
import { Check, Copy, Play, Terminal } from 'lucide-react';

export const TerminalCode: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'developer' | 'offline' | 'wave'>('developer');
  const [executed, setExecuted] = useState(false);

  const snippets = {
    developer: `const developer = {
  name: 'Deve Dakar',
  location: 'Dakar, SN 🇸🇳',
  focus: ['Mobile Web', 'Fintech'],
  stack: { ui: 'React', api: 'Java Spring Boot' },
  wavePayReady: true,
};
> developer.deployImpactfulSolutions();
>> Ready to scale real products.`,
    offline: `// Optimisation réseau 3G/4G Sénégal
export const offlineSyncConfig = {
  cacheStrategy: 'stale-while-revalidate',
  maxOfflineStoreHours: 72,
  pwaBundleLimitKb: 145,
  autoResumeOnReconnect: true,
  smsFallbackAlerts: true
};
> ServiceWorker.ready.then(sync);`,
    wave: `// Intégration Wave Mobile Money API
const waveCheckout = await wave.sessions.create({
  amount: 4500, // FCFA
  currency: 'XOF',
  instantCallback: true,
  clientRef: 'PASSAGER-TOUBA-048'
});
> WaveSession.verifyInstantReceipt();`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setExecuted(true);
    setTimeout(() => setExecuted(false), 3000);
  };

  return (
    <div className="rounded-xl overflow-hidden bg-[#1E1E1E] text-[#E4E4E7] shadow-xl border border-[#333333]">
      {/* Terminal Title Bar */}
      <div className="bg-[#2D2D2D] px-3.5 py-2.5 flex items-center justify-between border-b border-[#3D3D3D]">
        <div className="flex items-center gap-2">
          {/* Window control dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
          </div>
          <span className="text-[11px] font-mono text-[#A1A1AA] ml-1.5">
            deve@dakar: ~/stack/dev-driver
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1 text-[11px] font-mono text-[#10B981]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>active</span>
          </div>

          <button
            onClick={handleCopy}
            className="p-1 hover:bg-[#3D3D3D] rounded text-[#A1A1AA] hover:text-white transition-colors"
            title="Copier le code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Quick snippet tabs */}
      <div className="bg-[#252526] px-3 py-1 flex items-center gap-1 border-b border-[#333333] text-[11px] font-mono">
        <button
          onClick={() => setActiveTab('developer')}
          className={`px-2 py-0.5 rounded transition-colors ${
            activeTab === 'developer'
              ? 'bg-[#1E1E1E] text-[#F26A1B] font-semibold'
              : 'text-[#858585] hover:text-[#CCCCCC]'
          }`}
        >
          developer.ts
        </button>
        <button
          onClick={() => setActiveTab('offline')}
          className={`px-2 py-0.5 rounded transition-colors ${
            activeTab === 'offline'
              ? 'bg-[#1E1E1E] text-[#F26A1B] font-semibold'
              : 'text-[#858585] hover:text-[#CCCCCC]'
          }`}
        >
          offlineSync.ts
        </button>
        <button
          onClick={() => setActiveTab('wave')}
          className={`px-2 py-0.5 rounded transition-colors ${
            activeTab === 'wave'
              ? 'bg-[#1E1E1E] text-[#F26A1B] font-semibold'
              : 'text-[#858585] hover:text-[#CCCCCC]'
          }`}
        >
          wavePay.ts
        </button>

        <div className="ml-auto">
          <button
            onClick={handleRun}
            className="inline-flex items-center gap-1 text-[10px] text-[#A1A1AA] hover:text-[#F26A1B] transition-colors"
          >
            <Play className="w-2.5 h-2.5" />
            <span>Exécuter</span>
          </button>
        </div>
      </div>

      {/* Code body matching Image 2 */}
      <div className="p-4 font-mono text-[13px] leading-relaxed selection:bg-[#F26A1B]/30">
        {activeTab === 'developer' && (
          <>
            <div>
              <span className="text-[#C586C0]">const</span>{' '}
              <span className="text-[#4EC9B0]">developer</span> = {'{'}
            </div>
            <div className="pl-4">
              <span className="text-[#9CDCFE]">name</span>:{' '}
              <span className="text-[#CE9178]">'Deve Dakar'</span>,
            </div>
            <div className="pl-4">
              <span className="text-[#9CDCFE]">location</span>:{' '}
              <span className="text-[#CE9178]">'Dakar, SN 🇸🇳'</span>,
            </div>
            <div className="pl-4">
              <span className="text-[#9CDCFE]">focus</span>: [
              <span className="text-[#CE9178]">'Mobile Web'</span>,{' '}
              <span className="text-[#CE9178]">'Fintech'</span>],
            </div>
            <div className="pl-4">
              <span className="text-[#9CDCFE]">stack</span>: {'{ '}{' '}
              <span className="text-[#9CDCFE]">ui</span>:{' '}
              <span className="text-[#CE9178]">'React'</span>,{' '}
              <span className="text-[#9CDCFE]">api</span>:{' '}
              <span className="text-[#CE9178]">'Java Spring Boot'</span> {'}'},
            </div>
            <div className="pl-4">
              <span className="text-[#9CDCFE]">wavePayReady</span>:{' '}
              <span className="text-[#569CD6]">true</span>,
            </div>
            <div>{'};'}</div>
            <div className="mt-2 text-[#6A9955]">
              &gt; developer.deployImpactfulSolutions();
            </div>
            <div className="text-[#F26A1B]">
              &gt;&gt; Ready to scale real products.
            </div>
          </>
        )}

        {activeTab === 'offline' && (
          <pre className="text-xs text-[#9CDCFE] overflow-x-auto whitespace-pre">
            {snippets.offline}
          </pre>
        )}

        {activeTab === 'wave' && (
          <pre className="text-xs text-[#9CDCFE] overflow-x-auto whitespace-pre">
            {snippets.wave}
          </pre>
        )}

        {executed && (
          <div className="mt-3 p-2 bg-[#2D3748] border-l-2 border-[#10B981] text-[11px] text-[#A7F3D0] animate-in fade-in duration-200">
            ✓ Architecture initialisée avec succès : Déploiement actif sur Dakar CDN.
          </div>
        )}
      </div>
    </div>
  );
};
