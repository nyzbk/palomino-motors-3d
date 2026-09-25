import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InventorySection } from './components/InventorySection';
import { HeritageSection } from './components/HeritageSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConciergeModal } from './components/ConciergeModal';
import { Footer } from './components/Footer';
import type { Vehicle } from './data/inventory';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const handleOpenConcierge = () => {
    setSelectedVehicle(null);
    setIsModalOpen(true);
  };

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#08090b] text-[#f2f4f8] selection:bg-[#d4af37] selection:text-[#08090b] overflow-x-clip">
      <Navbar onOpenConcierge={handleOpenConcierge} />
      
      <main>
        {/* Section #1: 180-frame Cinematic Walkthrough */}
        <Hero onOpenConcierge={handleOpenConcierge} />

        {/* Section #2: Current Exotic Inventory Showroom */}
        <InventorySection onSelectVehicle={handleSelectVehicle} />

        {/* Section #3: The Palomino Standard & Provenance */}
        <HeritageSection />

        {/* Section #4: Collector & Buyer Endorsements */}
        <TestimonialsSection />
      </main>

      <Footer />

      {/* Interactive Acquisition Modal */}
      <ConciergeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedVehicle={selectedVehicle}
      />
    </div>
  );
};

export default App;
