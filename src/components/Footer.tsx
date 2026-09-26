import React from 'react';
import { Phone, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#050608] border-t border-[#1b2230] pt-20 pb-12 text-[#94a3b8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#d4af37]/40 bg-[#12161f] flex items-center justify-center">
                <span className="text-[#d4af37] font-display font-bold text-base">P</span>
              </div>
              <span className="font-display font-bold tracking-widest text-xl text-[#f2f4f8]">
                PALOMINO MOTORS
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#8c9bb0] max-w-md leading-relaxed">
              Dallas premier independent luxury & exotic motorcar dealership. Certified sales, nationwide enclosed delivery, trade-in valuations, and bespoke acquisition consulting.
            </p>
            <div className="text-xs text-[#a0aec0] space-y-1 pt-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>7021 John W. Carpenter Fwy, Dallas, TX 75247</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <a href="tel:+12148790111" className="hover:text-[#d4af37] transition-colors">
                  (214) 879-0111
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#f2f4f8] mb-4">
              Exotic Showroom
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#showroom" className="hover:text-[#d4af37] transition-colors">Ferrari Inventory</a></li>
              <li><a href="#showroom" className="hover:text-[#d4af37] transition-colors">Porsche RS Series</a></li>
              <li><a href="#showroom" className="hover:text-[#d4af37] transition-colors">Rolls-Royce Saloons</a></li>
              <li><a href="#showroom" className="hover:text-[#d4af37] transition-colors">Lamborghini Supercars</a></li>
              <li><a href="#provenance" className="hover:text-[#d4af37] transition-colors">Trade-In & Treaty</a></li>
            </ul>
          </div>

          {/* Hours & Assurance */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#f2f4f8] mb-4">
              Private Hours
            </h4>
            <ul className="space-y-2 text-xs text-[#8c9bb0]">
              <li>Mon – Fri: 9:00 AM – 7:00 PM</li>
              <li>Saturday: 9:00 AM – 6:00 PM</li>
              <li>Sunday: By Private Appointment</li>
              <li className="pt-2 text-[#d4af37]">Licensed Texas Motor Vehicle Dealer</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#121620] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748b]">
          <p>© {new Date().getFullYear()} Palomino Motors. All Rights Reserved. Dallas, Texas.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#8c9bb0] hover:text-[#d4af37] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
