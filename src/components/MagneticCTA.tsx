import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Clock, Award, CheckCircle2 } from 'lucide-react';

interface MagneticCTAProps {
  onOpenConcierge: () => void;
}

export const MagneticCTA: React.FC<MagneticCTAProps> = ({ onOpenConcierge }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonInnerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    const inner = buttonInnerRef.current;
    if (!btn || !inner) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate3d(${dx * 0.32}px, ${dy * 0.45}px, 0)`;
      inner.style.transform = `translate3d(${dx * 0.15}px, ${dy * 0.20}px, 0)`;
    };

    const onMouseLeave = () => {
      btn.style.transform = 'translate3d(0px, 0px, 0px)';
      inner.style.transform = 'translate3d(0px, 0px, 0px)';
    };

    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section id="showroom-inquiry" className="relative py-28 md:py-40 bg-[#07080A] text-[#F2F5F8] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Massive Fluid Headline (Meta AI Standard) */}
        <div className="text-center mb-16">
          <div className="text-[12px] font-mono tracking-[0.3em] uppercase text-[#00F0FF] font-semibold mb-4">
            ACQUISITION & CONSIGNMENT / 05
          </div>
          <h2 className="font-['Syncopate',sans-serif] text-[11vw] md:text-[7.5vw] font-bold leading-[0.88] tracking-tight text-[#F2F5F8]">
            DRIVE YOUR AMBITION.
          </h2>
          <p className="mt-6 text-[16px] md:text-[20px] text-[#8A95A5] max-w-2xl mx-auto font-light leading-relaxed font-['Space_Grotesk',sans-serif]">
            Schedule an exclusive private viewing or speak with GM Moe Talebi and Sales Director Sam Moghadam regarding immediate cash acquisitions or trades.
          </p>

          {/* Dual-Layer Magnetic Button */}
          <div className="mt-12 flex justify-center">
            <button
              ref={buttonRef}
              onClick={onOpenConcierge}
              className="relative inline-flex items-center justify-center px-12 py-6 rounded-2xl bg-[#00F0FF] text-[#0A0B0E] text-[16px] md:text-[18px] font-bold tracking-wider uppercase shadow-2xl shadow-[#00F0FF]/25 transition-transform duration-100 ease-out cursor-pointer hover:bg-[#33f3ff]"
            >
              <span ref={buttonInnerRef} className="flex items-center gap-3 transition-transform duration-100 ease-out">
                <span>Request Private Viewing</span>
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>

        {/* Deep Contact Intelligence Grid */}
        <div className="mt-20 pt-12 border-t border-[#00F0FF]/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Executive & Leadership */}
          <div className="p-6 rounded-xl bg-[#0A0B0E] border border-[#00F0FF]/20">
            <div className="flex items-center gap-2 text-[#00F0FF] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Award className="w-4 h-4 text-[#00F0FF]" />
              EXECUTIVE LEADERSHIP
            </div>
            <div className="text-[16px] font-semibold text-[#F2F5F8]">Moe Talebi & Sam Moghadam</div>
            <div className="text-[12px] text-[#8A95A5] mb-3">General Manager & Sales Director</div>
            <div className="text-[11px] font-mono text-[#00F0FF]">Palomino Motors Dallas HQ</div>
          </div>

          {/* Phone Hotlines */}
          <div className="p-6 rounded-xl bg-[#0A0B0E] border border-[#00F0FF]/20">
            <div className="flex items-center gap-2 text-[#00F0FF] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Phone className="w-4 h-4 text-[#00F0FF]" />
              SHOWROOM DIRECT
            </div>
            <a href="tel:2148790111" className="block text-[16px] font-semibold text-[#F2F5F8] hover:text-[#00F0FF] transition-colors">
              (214) 879-0111
            </a>
            <div className="text-[12px] text-[#8A95A5] mt-1">Main Concierge & Sales Line</div>
            <div className="text-[11px] font-mono text-[#00F0FF] mt-2">Mon-Sat 9:00 AM - 7:00 PM</div>
          </div>

          {/* Electronic Mail */}
          <div className="p-6 rounded-xl bg-[#0A0B0E] border border-[#00F0FF]/20">
            <div className="flex items-center gap-2 text-[#00F0FF] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Mail className="w-4 h-4 text-[#00F0FF]" />
              DIRECT CHANNELS
            </div>
            <a href="mailto:sales@palominomotors.com" className="block text-[13px] font-mono text-[#F2F5F8] hover:text-[#00F0FF] transition-colors">
              sales@palominomotors.com
            </a>
            <a href="mailto:moe@palominomotors.com" className="block text-[13px] font-mono text-[#00F0FF] mt-1 hover:underline">
              moe@palominomotors.com
            </a>
            <a href="mailto:finance@palominomotors.com" className="block text-[13px] font-mono text-[#8A95A5] mt-1">
              finance@palominomotors.com
            </a>
          </div>

          {/* Physical Showroom */}
          <div className="p-6 rounded-xl bg-[#0A0B0E] border border-[#00F0FF]/20">
            <div className="flex items-center gap-2 text-[#00F0FF] text-[11px] font-mono tracking-widest uppercase mb-3">
              <MapPin className="w-4 h-4 text-[#00F0FF]" />
              DALLAS SHOWROOM
            </div>
            <div className="text-[14px] text-[#F2F5F8]">10400 N Central Expressway</div>
            <div className="text-[13px] text-[#8A95A5]">Dallas, TX 75231</div>
            <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-[#00F0FF]">
              <Clock className="w-3.5 h-3.5" />
              <span>Private VIP Showings by Appointment</span>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-[12px] font-mono text-[#8A95A5] border-t border-[#00F0FF]/10 pt-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              Licensed Texas Motor Vehicle Dealer
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              Bonded & Insured Nationwide Delivery
            </span>
          </div>
          <div>© {new Date().getFullYear()} Palomino Motors. All Rights Reserved.</div>
        </div>
      </div>
    </section>
  );
};
