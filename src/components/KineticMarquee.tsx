import React from 'react';
import { Sparkles, Gauge, ShieldCheck, Zap, Activity } from 'lucide-react';

export const KineticMarquee: React.FC = () => {
  const items = [
    { text: 'DALLAS EXOTIC SHOWROOM', icon: Gauge },
    { text: 'FERRARI • LAMBORGHINI • PORSCHE GT', icon: Sparkles },
    { text: '150-POINT MECHANICAL INSPECTION', icon: ShieldCheck },
    { text: '48-STATE ENCLOSED TRANSPORT', icon: Zap },
    { text: 'CLEAN CARFAX & PROVENANCE', icon: ShieldCheck },
    { text: 'SAME-DAY CASH BUYOUT & CONSIGNMENT', icon: Activity },
    { text: '10400 N CENTRAL EXPY • DALLAS, TX', icon: Gauge },
  ];

  return (
    <div className="relative py-8 bg-[#07080A] border-y border-[#00F0FF]/25 overflow-hidden">
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#07080A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#07080A] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {Array.from({ length: 4 }).map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-12 pr-12">
            {items.map((item, itemIdx) => {
              const Icon = item.icon;
              return (
                <div key={itemIdx} className="flex items-center gap-4 text-nowrap">
                  <Icon className="w-4 h-4 text-[#00F0FF]" />
                  <span className="font-['Syncopate',sans-serif] text-[18px] md:text-[22px] font-bold tracking-wider text-[#F2F5F8]">
                    {item.text}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]/50 mx-2" />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
