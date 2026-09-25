import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight, Menu, X } from 'lucide-react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#08090b]/90 backdrop-blur-md py-4 border-b border-[#d4af37]/20 shadow-2xl'
          : 'bg-gradient-to-b from-[#08090b]/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-[#d4af37]/40 bg-[#12161f] flex items-center justify-center group-hover:border-[#d4af37] transition-all">
            <span className="text-[#d4af37] font-display font-bold text-lg">P</span>
          </div>
          <div>
            <span className="font-display font-bold tracking-widest text-lg md:text-xl text-[#f2f4f8] block group-hover:text-[#d4af37] transition-colors">
              PALOMINO MOTORS
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#a0aec0] uppercase block">
              Dallas Exotic Vault
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#showroom"
            className="text-xs tracking-[0.2em] uppercase text-[#cfd7e6] hover:text-[#d4af37] transition-colors"
          >
            Showroom
          </a>
          <a
            href="#provenance"
            className="text-xs tracking-[0.2em] uppercase text-[#cfd7e6] hover:text-[#d4af37] transition-colors"
          >
            Provenance
          </a>
          <a
            href="#clients"
            className="text-xs tracking-[0.2em] uppercase text-[#cfd7e6] hover:text-[#d4af37] transition-colors"
          >
            Client Stories
          </a>
          <a
            href="#contact"
            className="text-xs tracking-[0.2em] uppercase text-[#cfd7e6] hover:text-[#d4af37] transition-colors"
          >
            Pavilion
          </a>
        </div>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+12148790111"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2a3242] bg-[#10141d]/70 text-[#e2e8f0] hover:border-[#d4af37]/50 text-xs tracking-wider transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>(214) 879-0111</span>
          </a>
          <button
            onClick={onOpenConcierge}
            className="glass-button px-6 py-2.5 rounded-full text-xs tracking-[0.18em] uppercase font-semibold text-[#f2f4f8] flex items-center gap-2 shadow-lg"
          >
            <span>Private Viewing</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37]" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#d4af37] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d13] border-b border-[#d4af37]/30 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top">
          <a
            href="#showroom"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm tracking-wider uppercase text-[#f2f4f8] py-2 border-b border-[#1b2230]"
          >
            Showroom Inventory
          </a>
          <a
            href="#provenance"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm tracking-wider uppercase text-[#f2f4f8] py-2 border-b border-[#1b2230]"
          >
            Provenance & Standards
          </a>
          <a
            href="#clients"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm tracking-wider uppercase text-[#f2f4f8] py-2 border-b border-[#1b2230]"
          >
            Client Testimonials
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm tracking-wider uppercase text-[#f2f4f8] py-2 border-b border-[#1b2230]"
          >
            Dallas Location
          </a>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:+12148790111"
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#d4af37]/30 bg-[#121722] text-[#f2f4f8] text-sm"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>(214) 879-0111</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConcierge();
              }}
              className="glass-button py-3 rounded-xl text-center text-xs tracking-widest uppercase font-semibold text-[#f2f4f8]"
            >
              Schedule Private Viewing
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
