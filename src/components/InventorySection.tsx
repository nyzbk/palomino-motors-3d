import React, { useState } from 'react';
import { INVENTORY_DATA } from '../data/inventory';
import type { Vehicle } from '../data/inventory';
import { Gauge, Zap, ArrowRight } from 'lucide-react';

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
    <section id="showroom" className="relative py-28 bg-[#0a0d14] border-t border-[#1b2230]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-2">
              Dallas Showroom Collection
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#f2f4f8]">
              Current Exotic Inventory
            </h2>
            <p className="text-sm text-[#94a3b8] mt-2 max-w-xl">
              Each vehicle in our private vault is individually titled, physical on-site in Dallas, and backed by a comprehensive provenance report.
            </p>
          </div>

          {/* Brand Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {makes.map(make => (
              <button
                key={make}
                onClick={() => setSelectedMake(make)}
                className={`px-4 py-2 rounded-full text-xs tracking-wider transition-all ${
                  selectedMake === make
                    ? 'bg-[#d4af37] text-[#08090b] font-bold shadow-md'
                    : 'border border-[#222b3d] bg-[#121620] text-[#94a3b8] hover:border-[#d4af37]/40 hover:text-[#f2f4f8]'
                }`}
              >
                {make}
              </button>
            ))}
          </div>
        </div>

        {/* Inventory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group glass-panel rounded-2xl overflow-hidden border border-[#222b3d] hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#121620]">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#08090b]/80 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/30">
                    {vehicle.year} {vehicle.make}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                    {vehicle.status}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="text-2xl font-bold font-display text-[#f2f4f8]">
                    {vehicle.price}
                  </span>
                  <span className="text-xs text-[#a0aec0] font-mono">
                    {vehicle.mileage}
                  </span>
                </div>
              </div>

              {/* Vehicle Body Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#f2f4f8] group-hover:text-[#d4af37] transition-colors">
                    {vehicle.model}
                  </h3>
                  <p className="text-xs text-[#94a3b8] mt-2 line-clamp-2 leading-relaxed">
                    {vehicle.description}
                  </p>

                  {/* Mechanical Specs Badges */}
                  <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-[#1b2230]">
                    <div className="flex items-center gap-2 text-xs text-[#cbd5e1]">
                      <Zap className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{vehicle.horsepower}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#cbd5e1]">
                      <Gauge className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{vehicle.acceleration}</span>
                    </div>
                  </div>

                  {/* Highlights Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {vehicle.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded text-[10px] text-[#94a3b8] bg-[#121622] border border-[#232b3b]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="mt-6 pt-4 border-t border-[#1b2230] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#64748b]">
                    VIN: {vehicle.vin}
                  </span>
                  <button
                    onClick={() => onSelectVehicle(vehicle)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:text-[#f3cf7a] transition-colors"
                  >
                    <span>Inspect Vehicle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
