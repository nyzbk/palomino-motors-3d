import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HorizontalWorks } from './components/HorizontalWorks';
import { InteractiveBento } from './components/InteractiveBento';
import { KineticMarquee } from './components/KineticMarquee';
import { SignatureWidget } from './components/SignatureWidget';
import { MagneticCTA } from './components/MagneticCTA';
import { ConciergeModal } from './components/ConciergeModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenConcierge = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0A0B0E] text-[#F2F5F8] font-['Space_Grotesk',sans-serif] selection:bg-[#00F0FF] selection:text-[#0A0B0E] overflow-x-clip">
      <Navbar onOpenConcierge={handleOpenConcierge} />
      
      <main>
        {/* Section 1: Jack Roberts SOTA 240-Frame Canvas Hero */}
        <Hero onOpenConcierge={handleOpenConcierge} />

        {/* Section 2: Meta AI Pinned Horizontal Scroll Gallery (300vh) */}
        <HorizontalWorks onOpenConcierge={handleOpenConcierge} />

        {/* Section 3: Interactive Bento Grid with Live Telemetry */}
        <InteractiveBento onOpenConcierge={handleOpenConcierge} />

        {/* Section 4: Kinetic Marquee Ribbon */}
        <KineticMarquee />

        {/* Bespoke Dyno Telemetry & Acquisition Engine Widget */}
        <SignatureWidget onOpenConsultation={handleOpenConcierge} />

        {/* Section 5: Premium Magnetic CTA with Multi-Contact Intelligence */}
        <MagneticCTA onOpenConcierge={handleOpenConcierge} />
      </main>

      <Footer />

      <ConciergeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default App;
