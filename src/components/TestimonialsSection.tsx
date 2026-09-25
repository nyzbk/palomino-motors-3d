import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Igor K.',
      vehicle: 'Ferrari 488 Spider Carbon Corsa',
      location: 'Dallas, TX',
      quote:
        'I purchased my Ferrari 488 Spider through Palomino Motors and the entire acquisition was seamless. The car arrived in an enclosed transporter in flawless condition, with every factory document and key present.',
      rating: 5,
      date: 'Verified Buyer'
    },
    {
      name: 'David Camacho',
      vehicle: 'Porsche 911 GT3 RS',
      location: 'Fort Worth, TX',
      quote:
        'The team at Palomino Motors is in a league of their own. No generic dealership runaround. They walked me through the complete paint-meter readings and service records before I even visited the showroom.',
      rating: 5,
      date: 'Verified Collector'
    },
    {
      name: 'Damian Krukel',
      vehicle: 'Audi RS5 Sportback & Exotic Trade',
      location: 'Austin, TX',
      quote:
        'Traded in my prior vehicle and acquired an RS5. The financial transparency and speed of execution were second to none. If you want high-performance cars without games, Palomino is the place.',
      rating: 5,
      date: 'Verified Buyer'
    }
  ];

  return (
    <section id="clients" className="py-28 bg-[#0a0d14] border-t border-[#1b2230]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-2">
            Collector Endorsements
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#f2f4f8]">
            Trusted by Connoisseurs.
          </h2>
          <p className="text-sm text-[#94a3b8] mt-3">
            Read real experiences from drivers and collectors across North America who trust Palomino Motors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl border border-[#222b3b] flex flex-col justify-between hover:border-[#d4af37]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#d4af37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#3b475c]" />
                </div>
                <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1b2230] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#f2f4f8] flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                  </h4>
                  <span className="text-[11px] text-[#d4af37] block font-medium">
                    {rev.vehicle}
                  </span>
                  <span className="text-[10px] text-[#64748b] block font-mono">
                    {rev.location}
                  </span>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#121622] border border-[#232c3c] text-[#94a3b8] uppercase tracking-wider">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
