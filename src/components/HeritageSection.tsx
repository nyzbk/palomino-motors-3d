import React from 'react';
import { ShieldCheck, Truck, KeyRound, MapPin, Clock } from 'lucide-react';

export const HeritageSection: React.FC = () => {
  return (
    <section id="provenance" className="py-28 bg-[#08090b] relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-2">
            The Palomino Motors Standard
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#f2f4f8]">
            Built on Provenance, Discretion & Integrity.
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] mt-4 leading-relaxed">
            Acquiring an exotic motorcar should be an exhilarating milestone, free from ambiguous histories or mass-market sales tactics. We operate as a private acquisition house.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-2xl border border-[#222a3a] relative group hover:border-[#d4af37]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#121622] border border-[#d4af37]/30 flex items-center justify-center mb-6 text-[#d4af37]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#f2f4f8] mb-3">
              150-Point Master Audit
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              Every exotic undergoes computer telemetry diagnostics, paint-depth gauge inspection across every panel, and comprehensive undercarriage evaluation before entering our showroom.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-[#222a3a] relative group hover:border-[#d4af37]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#121622] border border-[#d4af37]/30 flex items-center justify-center mb-6 text-[#d4af37]">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#f2f4f8] mb-3">
              Enclosed Nationwide Transit
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              We coordinate private, climate-controlled enclosed transporters. Your vehicle arrives completely protected from highway debris and weather, delivered directly to your garage.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-[#222a3a] relative group hover:border-[#d4af37]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#121622] border border-[#d4af37]/30 flex items-center justify-center mb-6 text-[#d4af37]">
              <KeyRound className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#f2f4f8] mb-3">
              Discreet Treaty & Trade-In
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              Whether liquidating a personal collection or trading up into a limited-series supercar, our team guarantees privacy, instantaneous fund settlements, and clean title processing.
            </p>
          </div>
        </div>

        {/* Location Banner */}
        <div className="mt-16 glass-panel-amber p-8 sm:p-12 rounded-3xl border border-[#d4af37]/30 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Visit The Dallas Pavilion
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f2f4f8]">
              Private In-Person Appointments
            </h3>
            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
              Experience the vehicles up close in our climate-controlled Dallas showroom. Our curators provide uninterrupted private viewings tailored to your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 text-xs text-[#a0aec0]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span>7021 John W. Carpenter Fwy, Dallas, TX 75247</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#d4af37]" />
                <span>Monday – Saturday: 9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+12148790111"
              className="px-8 py-3.5 rounded-full border border-[#d4af37] text-xs uppercase tracking-widest font-semibold text-[#f2f4f8] hover:bg-[#d4af37]/10 transition-colors text-center"
            >
              Call (214) 879-0111
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
