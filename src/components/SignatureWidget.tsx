import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const SignatureWidget: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [hpRange, setHpRange] = useState<number>(720);
  const [powertrain, setPowertrain] = useState<'v12' | 'v8-turbo' | 'hybrid'>('v8-turbo');

  const matches = {
    'v12': { car: 'Ferrari 812 Superfast / Lamborghini Aventador SVJ', specs: 'Naturally Aspirated · 789 HP · 2.8s 0-60' },
    'v8-turbo': { car: 'McLaren 720S Spider / Ferrari F8 Tributo', specs: 'Twin-Turbocharged · 710 HP · 2.7s 0-60' },
    'hybrid': { car: 'Ferrari SF90 Stradale / McLaren Artura', specs: 'PHEV AWD · 986 HP · 2.1s 0-60' }
  };

  return (
    <section id="dyno-telemetry" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0A0B0E] text-[#F2F5F8] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#00F0FF] block mb-3 font-semibold">
            Dallas Exotic & Hypercar Telemetry
          </span>
          <h2 className="text-3xl sm:text-5xl font-['Syncopate'] font-bold text-white tracking-tight">
            Dyno Telemetry & Acquisition Engine
          </h2>
          <p className="mt-4 text-[#6B7280] text-sm sm:text-base max-w-2xl mx-auto font-['Space_Grotesk'] font-light">
            Match your performance profile against our verified Dallas collector inventory. Zero accident history, fully documented pedigree.
          </p>
        </div>

        <div className="bg-[#15171E] rounded-2xl p-6 sm:p-12 border border-[#00F0FF]/25 shadow-2xl">
          <div className="space-y-8">
            {/* Powertrain */}
            <div>
              <label className="block text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-[#00F0FF] mb-3">
                1. Powertrain Architecture
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'v12', name: 'Naturally Aspirated V12' },
                  { id: 'v8-turbo', name: 'Twin-Turbo V8 Platform' },
                  { id: 'hybrid', name: 'Hypercar Hybrid E-AWD' }
                ].map(p => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPowertrain(p.id as any)}
                    className={`p-4 rounded-xl text-xs font-['Space_Grotesk'] font-bold transition-all text-left ${
                      powertrain === p.id
                        ? 'bg-[#00F0FF] text-[#0A0B0E] shadow-lg shadow-cyan-500/20'
                        : 'bg-[#0A0B0E] text-[#6B7280] border border-white/5 hover:border-[#00F0FF]/30'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Target HP Slider */}
            <div>
              <div className="flex justify-between items-center mb-2 font-['JetBrains_Mono']">
                <label className="text-xs uppercase tracking-wider text-[#00F0FF]">
                  2. Minimum Output Threshold
                </label>
                <span className="text-sm text-[#FF3319] font-bold">
                  {hpRange} BRAKE HORSEPOWER
                </span>
              </div>
              <input
                type="range"
                min="600"
                max="1000"
                step="25"
                value={hpRange}
                onChange={(e) => setHpRange(parseInt(e.target.value))}
                className="w-full h-2 bg-[#0A0B0E] rounded-lg appearance-none cursor-pointer accent-[#00F0FF]"
              />
            </div>

            {/* Active Telemetry Matching Card */}
            <div className="bg-[#0A0B0E] p-6 rounded-xl border border-[#00F0FF]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest text-[#00F0FF] block mb-1">
                  Dallas Showroom Active Match
                </span>
                <h4 className="text-lg font-['Space_Grotesk'] font-bold text-white">{matches[powertrain].car}</h4>
                <p className="text-xs text-[#6B7280] font-mono mt-1">{matches[powertrain].specs}</p>
              </div>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#FF3319] text-white font-['Space_Grotesk'] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-red-600 transition-all btn-spring text-center flex items-center justify-center gap-2"
              >
                <span>Reserve Track Test</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
