import React, { useState } from 'react';
import { INVENTORY_DATA } from '../data/inventory';
import type { Vehicle } from '../data/inventory';
import { Gauge, Zap, ChevronRight, CheckCircle2 } from 'lucide-react';

interface InventorySectionProps {
  onSelectVehicle: (v: Vehicle) => void;
}

export const InventorySection: React.FC<InventorySectionProps> = ({ onSelectVehicle }) => {
  const [selectedMake, setSelectedMake] = useState<string>('All');

  const makes = ['All', 'Ferrari', 'Porsche', 'Rolls-Royce', 'Lamborghini', 'Mercedes-AMG', 'McLaren'];

  const filteredVehicles = selectedMake === 'All'
    ? INVENTORY_DATA
    : INVENTORY_DATA.filter(v => v.make === selectedMake);

  return (
    <section id="showroom" className="relative py-28 bg-[#050507] border-t border-neutral-800 carbon-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-rose-500 font-bold mb-2">
              <span className="w-2 h-2 bg-rose-500" />
              <span>Dallas Vault Showroom // Verified Units</span>
            </div>
            <h2 className="font-mono text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Current Supercar Inventory
            </h2>
            <p className="font-mono text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl leading-relaxed">
              Every chassis physically inspected on-site in Dallas, Texas. Clean titles, original paint meters verified, clean CARFAX.
            </p>
          </div>

          {/* Brand Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 font-mono">
            {makes.map(make => (
              <button
                key={make}
                onClick={() => setSelectedMake(make)}
                className={`px-3.5 py-1.5 text-xs uppercase font-bold tracking-wider transition-all skew-badge ${
                  selectedMake === make
                    ? 'bg-rose-600 text-white racing-red-glow'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                <span className="unskew">{make}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Inventory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle: Vehicle) => (
            <div
              key={vehicle.id}
              className="group bg-[#09090b] border border-neutral-800 hover:border-rose-500 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/30" />
                  <span className="absolute top-3 left-3 bg-neutral-950/90 border border-neutral-700 px-2.5 py-1 font-mono text-[10px] font-bold text-white uppercase tracking-wider">
                    {vehicle.year} {vehicle.make}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-rose-600 px-3 py-1 font-mono text-xs font-black text-white uppercase tracking-wider racing-red-glow">
                    {vehicle.price}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-mono text-lg font-black text-white group-hover:text-rose-400 transition-colors uppercase">
                    {vehicle.make} {vehicle.model}
                  </h3>

                  <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-neutral-800 font-mono text-center">
                    <div className="bg-neutral-950 p-2 border border-neutral-800/80">
                      <span className="block text-[9px] text-neutral-400 uppercase">Power</span>
                      <span className="text-xs font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                        <Zap className="w-3 h-3 text-rose-500" />
                        {vehicle.horsepower}
                      </span>
                    </div>
                    <div className="bg-neutral-950 p-2 border border-neutral-800/80">
                      <span className="block text-[9px] text-neutral-400 uppercase">0-60 MPH</span>
                      <span className="text-xs font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                        <Gauge className="w-3 h-3 text-rose-500" />
                        {vehicle.acceleration}
                      </span>
                    </div>
                    <div className="bg-neutral-950 p-2 border border-neutral-800/80">
                      <span className="block text-[9px] text-neutral-400 uppercase">Mileage</span>
                      <span className="text-xs font-bold text-rose-400 mt-0.5 block">
                        {vehicle.mileage}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-1.5 font-mono text-xs text-neutral-300">
                    {vehicle.tags.slice(0, 2).map((h: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-[11px]">
                        <CheckCircle2 className="w-3 h-3 text-rose-500 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectVehicle(vehicle)}
                  className="w-full py-3 bg-neutral-900 hover:bg-rose-600 text-neutral-300 hover:text-white font-mono text-xs font-bold uppercase tracking-wider border border-neutral-800 hover:border-rose-500 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Inspect Vehicle Telemetry</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
