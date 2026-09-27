import React, { useState, useEffect } from 'react';
import { Phone, Gauge, ChevronRight, Menu, X, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  onOpenConcierge: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConcierge }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050507]/95 backdrop-blur-md py-3 border-b border-neutral-800/80 shadow-2xl'
          : 'bg-gradient-to-b from-[#050507]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-rose-950/40 border border-rose-600/40 flex items-center justify-center text-rose-500 skew-badge group-hover:border-rose-500 transition-colors">
              <Gauge className="w-5 h-5 unskew" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xl tracking-[0.15em] uppercase font-black text-white group-hover:text-rose-400 transition-colors">
                PALOMINO
              </span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-rose-500 uppercase -mt-1 font-bold">
                MOTORS // DALLAS EXOTICS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-neutral-300 font-semibold">
            <a href="#inventory-tour" className="hover:text-rose-400 transition-colors flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-ping" />
              <span>360° Showroom</span>
            </a>
            <a href="#showroom" className="hover:text-rose-400 transition-colors">
              Current Inventory
            </a>
            <a href="#performance" className="hover:text-rose-400 transition-colors">
              Chassis Vetting
            </a>
            <a href="#provenance" className="hover:text-rose-400 transition-colors">
              Provenance
            </a>
          </div>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:2148790111"
              className="flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rose-500" />
              <span>214-879-0111</span>
            </a>

            <button
              onClick={onOpenConcierge}
              className="skew-badge px-6 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg racing-red-glow flex items-center gap-1.5"
            >
              <span className="unskew flex items-center gap-1">
                <span>Acquire Vehicle</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenConcierge}
              className="sm:hidden px-3 py-1.5 bg-rose-600 text-white font-mono font-bold text-[10px] tracking-wider uppercase"
            >
              Acquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090b]/98 border-b border-neutral-800 px-6 py-6 space-y-4 font-mono">
          <div className="flex flex-col space-y-3 text-xs uppercase tracking-wider text-neutral-300 font-semibold">
            <a
              href="#inventory-tour"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rose-400 transition-colors flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-rose-500 rounded-full" />
              <span>360° Showroom Tour</span>
            </a>
            <a
              href="#showroom"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rose-400 transition-colors"
            >
              Current Inventory Vault
            </a>
            <a
              href="#performance"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rose-400 transition-colors"
            >
              Chassis Inspection Protocols
            </a>
            <a
              href="#provenance"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rose-400 transition-colors"
            >
              30-Year Provenance
            </a>
          </div>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <ShieldAlert className="w-4 h-4 text-rose-500" />
              <span>Dallas Showroom: 214-879-0111</span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConcierge();
              }}
              className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold text-xs tracking-widest uppercase shadow-lg racing-red-glow"
            >
              Request Private Showing
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
