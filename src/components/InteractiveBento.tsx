import React, { useState } from 'react';
import { ShieldCheck, Activity, Gauge, Sparkles, Sliders, CheckCircle2, Zap } from 'lucide-react';

interface InteractiveBentoProps {
  onOpenConcierge: () => void;
}

export const InteractiveBento: React.FC<InteractiveBentoProps> = ({ onOpenConcierge }) => {
  const [engine, setEngine] = useState<'v12' | 'hybrid' | 'flat6'>('v12');
  const [aero, setAero] = useState<'track' | 'road' | 'drag'>('track');
  const [exhaust, setExhaust] = useState<'inconel' | 'titanium' | 'sport'>('inconel');

  return (
    <section id="telemetry-capabilities" className="relative py-28 md:py-36 bg-[#0A0B0E] text-[#F2F5F8] overflow-hidden border-t border-[#00F0FF]/15">
      {/* Ambient Radial Glow (Meta AI Standard) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#00F0FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#FF3319]/25 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#00F0FF] uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
              DYNO TELEMETRY & SPECIFICATIONS / 03
            </div>
            <h2 className="font-['Syncopate',sans-serif] text-[36px] md:text-[52px] font-bold leading-[0.95] text-[#F2F5F8]">
              POWERTRAIN BENCHMARKS.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#8A95A5] max-w-md font-['Space_Grotesk',sans-serif] leading-relaxed">
            Every exotic in our inventory is benchmarked on diagnostic dynos to verify factory horsepower, torque delivery, and acoustic resonance.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Interactive Dyno & Telemetry Simulator (Col Span 2) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl bg-[#12151D]/80 border border-[#00F0FF]/30 p-8 flex flex-col justify-between backdrop-blur-md relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-[#00F0FF]/20 pb-4 mb-6">
                <span className="text-[11px] font-mono text-[#00F0FF] tracking-widest uppercase flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#00F0FF]" />
                  INTERACTIVE DYNO SIMULATOR
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#00F0FF]/20 text-[#00F0FF] text-[10px] font-mono font-bold animate-pulse">
                  TELEMETRY ONLINE
                </span>
              </div>

              <h3 className="font-['Syncopate',sans-serif] text-[20px] md:text-[24px] font-bold text-[#F2F5F8] mb-2">
                SIMULATE EXOTIC POWERTRAIN.
              </h3>
              <p className="text-[13px] text-[#8A95A5] mb-6">
                Test engine acoustic profiles, aero configurations, and acceleration curves.
              </p>

              {/* Powertrain Selection */}
              <div className="mb-4">
                <span className="text-[11px] font-mono text-[#8A95A5] block mb-2 uppercase">1. Powertrain Architecture:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['v12', 'hybrid', 'flat6'] as const).map((eng) => (
                    <button
                      key={eng}
                      onClick={() => setEngine(eng)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        engine === eng
                          ? 'bg-[#00F0FF] text-[#0A0B0E] font-bold shadow-md shadow-[#00F0FF]/20'
                          : 'bg-[#0A0B0E]/80 text-[#F2F5F8] border border-[#00F0FF]/20 hover:border-[#00F0FF]/50'
                      }`}
                    >
                      {eng === 'v12' ? '6.5L V12 N/A' : eng === 'hybrid' ? 'Twin-Turbo V8 Hybrid' : '4.0L GT Flat-6'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Aero Selection */}
              <div className="mb-4">
                <span className="text-[11px] font-mono text-[#8A95A5] block mb-2 uppercase">2. Aerodynamic Package:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['track', 'road', 'drag'] as const).map((a) => (
                    <button
                      key={a}
                      onClick={() => setAero(a)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        aero === a
                          ? 'bg-[#00F0FF] text-[#0A0B0E] font-bold shadow-md shadow-[#00F0FF]/20'
                          : 'bg-[#0A0B0E]/80 text-[#F2F5F8] border border-[#00F0FF]/20 hover:border-[#00F0FF]/50'
                      }`}
                    >
                      {a === 'track' ? 'Weissach High Downforce' : a === 'road' ? 'Active Touring Aero' : 'Low-Drag Velocity'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Exhaust Selection */}
              <div>
                <span className="text-[11px] font-mono text-[#8A95A5] block mb-2 uppercase">3. Exhaust System:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['inconel', 'titanium', 'sport'] as const).map((ex) => (
                    <button
                      key={ex}
                      onClick={() => setExhaust(ex)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        exhaust === ex
                          ? 'bg-[#00F0FF] text-[#0A0B0E] font-bold shadow-md shadow-[#00F0FF]/20'
                          : 'bg-[#0A0B0E]/80 text-[#F2F5F8] border border-[#00F0FF]/20 hover:border-[#00F0FF]/50'
                      }`}
                    >
                      {ex === 'inconel' ? 'F1 Inconel Pipes' : ex === 'titanium' ? 'Titanium Unrestricted' : 'Factory Valved'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#00F0FF]/20 flex items-center justify-between">
              <div className="text-[11px] font-mono text-[#00F0FF]">
                TELEMETRY: {engine === 'v12' ? '789 HP • 8,900 RPM' : engine === 'hybrid' ? '986 HP • 2.0S 0-60' : '518 HP • 9,000 RPM'}
              </div>
              <button
                onClick={onOpenConcierge}
                className="px-4 py-2 rounded-lg bg-[#00F0FF] text-[#0A0B0E] font-mono text-[11px] font-bold uppercase hover:bg-[#33f3ff] transition-colors"
              >
                Inquire For Match
              </button>
            </div>
          </div>

          {/* Card 2: 150-Point Audit */}
          <div className="rounded-2xl bg-[#12151D]/80 border border-[#00F0FF]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#00F0FF] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Gauge className="w-4 h-4 text-[#00F0FF]" />
                MECHANICAL AUDIT
              </div>
              <div className="font-['Syncopate',sans-serif] text-[48px] font-bold text-[#F2F5F8] leading-none mb-2">
                150
              </div>
              <div className="text-[13px] text-[#00F0FF] font-medium mb-3">
                Point Certified Mechanical Inspection
              </div>
              <p className="text-[13px] text-[#8A95A5] font-['Space_Grotesk',sans-serif] leading-relaxed">
                Full scanner diagnostics, carbon-ceramic rotor depth analysis, suspension bushing checks, and compression test logs.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#00F0FF]/15 flex items-center gap-2 text-[11px] font-mono text-[#8A95A5]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Clean Carfax Guaranteed
            </div>
          </div>

          {/* Card 3: $40M+ Vault Inventory */}
          <div className="rounded-2xl bg-[#12151D]/80 border border-[#00F0FF]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#00F0FF] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Zap className="w-4 h-4 text-[#00F0FF]" />
                SHOWROOM VALUATION
              </div>
              <div className="font-['Syncopate',sans-serif] text-[48px] font-bold text-[#F2F5F8] leading-none mb-2">
                $40M+
              </div>
              <div className="text-[13px] text-[#00F0FF] font-medium mb-3">
                Exotic & Hypercar Vault Inventory
              </div>
              <p className="text-[13px] text-[#8A95A5] font-['Space_Grotesk',sans-serif] leading-relaxed">
                Featuring the rarest specifications of Ferrari 812, SF90, Lamborghini Aventador SVJ, and bespoke Rolls-Royce models.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#00F0FF]/15 flex items-center gap-2 text-[11px] font-mono text-[#8A95A5]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Clear Titles in Hand
            </div>
          </div>

          {/* Card 4: 250+ Exotic Supercars Delivered */}
          <div className="md:col-span-2 rounded-2xl bg-[#12151D]/80 border border-[#00F0FF]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#00F0FF] text-[11px] font-mono tracking-widest uppercase mb-4">
                <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
                PROVEN COLLECTOR REPUTATION
              </div>
              <div className="font-['Syncopate',sans-serif] text-[32px] md:text-[38px] font-bold text-[#F2F5F8] leading-tight mb-2">
                250+ Vehicles Delivered Nationwide.
              </div>
              <p className="text-[14px] text-[#8A95A5] font-['Space_Grotesk',sans-serif] leading-relaxed mb-6">
                From Dallas collectors to high-profile clients in Miami, Beverly Hills, and Manhattan. We handle end-to-end title transfers, leasing financing, and enclosed vehicle delivery.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#00F0FF]/15">
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F2F5F8]">48 States</div>
                <div className="text-[11px] font-mono text-[#8A95A5]">Enclosed Logistics</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F2F5F8]">100%</div>
                <div className="text-[11px] font-mono text-[#8A95A5]">Inspected Before Ship</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F2F5F8]">Same-Day</div>
                <div className="text-[11px] font-mono text-[#8A95A5]">Consignment Wire</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F2F5F8]">VIP</div>
                <div className="text-[11px] font-mono text-[#8A95A5]">Airport Chauffeuring</div>
              </div>
            </div>
          </div>

          {/* Card 5: Direct Executive Leadership */}
          <div className="md:col-span-2 rounded-2xl bg-[#12151D]/80 border border-[#00F0FF]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#00F0FF] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Activity className="w-4 h-4 text-[#00F0FF]" />
                EXECUTIVE ACQUISITIONS CONCIERGE
              </div>
              <div className="font-['Syncopate',sans-serif] text-[32px] md:text-[38px] font-bold text-[#F2F5F8] leading-tight mb-2">
                Deal Directly with Moe & Sam.
              </div>
              <p className="text-[14px] text-[#8A95A5] font-['Space_Grotesk',sans-serif] leading-relaxed mb-4">
                General Manager Moe Talebi and Sales Director Sam Moghadam personally structure every transaction, cash acquisition, and trade-in valuation.
              </p>
            </div>
            <div className="pt-4 border-t border-[#00F0FF]/15 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#00F0FF]">moe@palominomotors.com</span>
              <span className="text-[11px] font-mono text-[#8A95A5]">Direct Executive Line</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
