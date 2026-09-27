import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface SupercarItem {
  id: string;
  category: string;
  title: string;
  badge: string;
  description: string;
  specs: string;
  equipment: string[];
}

const SUPERCAR_COLLECTIONS: SupercarItem[] = [
  {
    id: 'ferrari-vault',
    category: 'MARANELLO V12 & HYBRID',
    title: 'The Ferrari Performance Vault',
    badge: '812 SUPERFAST & SF90',
    description: 'Featuring naturally aspirated 6.5L V12 screaming to 8,900 RPM alongside 1,000 HP twin-turbo hybrid hypercars equipped with Assetto Fiorano lightweight track packages.',
    specs: '0-60 IN 2.0S • 211 MPH',
    equipment: ['Carbon Ceramic Rotors', 'Passenger Display Matrix', 'Scuderia Carbon Shields'],
  },
  {
    id: 'lamborghini-bay',
    category: 'SANT’AGATA AERODYNAMICS',
    title: 'The Lamborghini V10 & V12 Bay',
    badge: 'AVENTADOR SVJ & STO',
    description: 'Extreme aerodynamic track specials featuring active Aerodinamica Lamborghini Attiva (ALA 2.0), carbon fiber monocoques, and unrestricted titanium exhaust roars.',
    specs: '770 HP • ALA 2.0 AERO',
    equipment: ['Titanium Roll Cage', 'Forged Carbon Trim', 'Telemetry Video Cameras'],
  },
  {
    id: 'porsche-gt',
    category: 'WEISSACH MOTORSPORT',
    title: 'The Stuttgart GT Studio',
    badge: '992 GT3 RS & GT2 RS',
    description: 'Pure motorsport engineering featuring top-mount swan-neck wings, DRS active drag reduction, magnesium lightweight center-lock wheels, and bespoke paint-to-sample finishes.',
    specs: '9,000 RPM FLAT-6 • DRS',
    equipment: ['Magnesium Centerlock Wheels', 'PCCB Ceramic Brakes', 'Clubsport Carbon Buckets'],
  },
  {
    id: 'rolls-royce',
    category: 'ULTRA-LUXURY BESPOKE',
    title: 'The Goodwood Luxury Saloon',
    badge: 'CULLINAN & GHOST BLACK BADGE',
    description: 'The pinnacle of bespoke automotive luxury. Hand-crafted starlight fiber optic headliners, lambswool floor mats, motorized whisper-close coach doors, and twin-turbo V12 power.',
    specs: 'TWIN-TURBO V12 • AIR RIDE',
    equipment: ['Shooting Star Headliner', 'Champagne Cooler Vault', 'Bespoke Audio Acoustic Cabin'],
  },
  {
    id: 'logistics-fleet',
    category: 'WHITE-GLOVE LOGISTICS',
    title: 'Nationwide Enclosed Transport',
    badge: 'AIR-RIDE ENCLOSED FLEET',
    description: 'Delivered directly to your estate or hangar anywhere across North America. Fully enclosed, climate-controlled, air-ride trailers with hydraulic lift-gates for zero scrape clearance.',
    specs: '48-STATE CONCIERGE',
    equipment: ['Hydraulic Zero-Degree Ramps', 'Full GPS Fleet Tracking', '$5M Transit Insurance'],
  },
];

interface HorizontalWorksProps {
  onOpenConcierge: () => void;
}

export const HorizontalWorks: React.FC<HorizontalWorksProps> = ({ onOpenConcierge }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-78%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#07080A] text-[#F2F5F8]">
      {/* Sticky Window */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-[1600px] mx-auto w-full mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#00F0FF] uppercase mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
              THE PALOMINO VAULT / 02
            </div>
            <h2 className="font-['Syncopate',sans-serif] text-[32px] md:text-[50px] font-bold leading-[0.95] text-[#F2F5F8]">
              EXOTIC & HYPERCAR COLLECTION.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#8A95A5] max-w-md font-['Space_Grotesk',sans-serif] leading-relaxed">
            Pan across our showroom bays, from limited-production Ferrari V12s and track-focused Porsche GT3 RS models to Black Badge Rolls-Royce grand tourers.
          </p>
        </div>

        {/* Horizontal Sliding Track */}
        <div className="relative w-full overflow-visible">
          <motion.div style={{ x }} className="flex gap-8 items-stretch will-change-transform">
            {SUPERCAR_COLLECTIONS.map((car, index) => (
              <div
                key={car.id}
                className="group relative w-[85vw] sm:w-[540px] md:w-[620px] flex-shrink-0 rounded-2xl bg-gradient-to-br from-[#12151D] to-[#0A0C10] border border-[#00F0FF]/25 p-8 md:p-10 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#00F0FF]/60 hover:shadow-[#00F0FF]/10"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#00F0FF]/15 pb-4 mb-6">
                    <span className="text-[11px] font-mono tracking-widest text-[#00F0FF] uppercase">
                      [{String(index + 1).padStart(2, '0')}] // {car.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#00F0FF]/15 text-[#00F0FF] text-[11px] font-mono font-medium">
                      {car.specs}
                    </span>
                  </div>

                  <h3 className="font-['Syncopate',sans-serif] text-[24px] md:text-[30px] font-bold leading-tight text-[#F2F5F8] mb-2">
                    {car.title}
                  </h3>

                  <p className="text-[13px] font-mono text-[#00F0FF] mb-4">
                    {car.badge}
                  </p>

                  <p className="text-[14px] md:text-[15px] text-[#8A95A5] leading-relaxed mb-6 font-['Space_Grotesk',sans-serif]">
                    {car.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {car.equipment.map((eq, eIdx) => (
                      <span
                        key={eIdx}
                        className="px-2.5 py-1 rounded-md bg-[#0A0B0E] border border-[#00F0FF]/20 text-[11px] font-mono text-[#F2F5F8]/80"
                      >
                        ✓ {eq}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenConcierge}
                    className="w-full py-3.5 rounded-xl bg-[#00F0FF]/15 border border-[#00F0FF]/40 text-[#00F0FF] hover:bg-[#00F0FF] hover:text-[#0A0B0E] text-[13px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:border-[#00F0FF]"
                  >
                    <span>Inquire Regarding Vehicle</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Bar at Bottom of Sticky Frame */}
        <div className="max-w-[1600px] mx-auto w-full mt-8">
          <div className="w-full h-1 bg-[#12151D] rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
              className="h-full bg-[#00F0FF]"
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-[#6B7280] mt-2">
            <span>BAY 01: FERRARI V12 VAULT</span>
            <span>BAY 05: ENCLOSED TRANSPORT FLEET</span>
          </div>
        </div>
      </div>
    </section>
  );
};
