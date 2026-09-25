import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, ChevronRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  totalFrames?: number;
  onOpenConcierge: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  totalFrames = 180,
  onOpenConcierge
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);

  const [, setCurrentFrame] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeChapter, setActiveChapter] = useState<string>('Arrival at the Private Dallas Pavilion');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    let loaded = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameStr = String(i).padStart(4, '0');
      img.src = `/frames/frame_${frameStr}.jpg?v=palomino-motion-v1`;
      img.onload = () => {
        loaded++;
        if (loaded >= Math.min(25, totalFrames)) {
          setIsLoaded(true);
        }
        if (i === 1) {
          renderFrame(1);
        }
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, [totalFrames]);

  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIndex - 1];
    if (img && img.complete) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      const naturalW = img.naturalWidth || 1920;
      const naturalH = img.naturalHeight || 1080;
      const imgRatio = naturalW / naturalH;
      const canvasRatio = w / h;

      let drawW: number;
      let drawH: number;
      let drawX: number;
      let drawY: number;

      if (canvasRatio > imgRatio) {
        drawW = w;
        drawH = w / imgRatio;
        drawX = 0;
        drawY = (h - drawH) / 2;
      } else {
        drawH = h;
        drawW = h * imgRatio;
        drawX = (w - drawW) / 2;
        drawY = 0;
      }

      ctx.clearRect(0, 0, w, h);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
      ctx.restore();
    }

    if (frameIndex <= 60) {
      setActiveChapter('Arrival at the Private Dallas Pavilion');
    } else if (frameIndex <= 120) {
      setActiveChapter('The Exotic Supercar Vault & Carbon Aero');
    } else {
      setActiveChapter('Runway Delivery & White-Glove Handover');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));
      setScrollProgress(progress);

      const targetFrame = Math.min(
        totalFrames,
        Math.max(1, Math.floor(progress * (totalFrames - 1)) + 1)
      );

      if (targetFrame !== currentFrameRef.current) {
        currentFrameRef.current = targetFrame;
        setCurrentFrame(targetFrame);
        renderFrame(targetFrame);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => renderFrame(currentFrameRef.current), { passive: true });
    renderFrame(1);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [totalFrames]);

  return (
    <section ref={containerRef} className="relative h-[450vh] w-full bg-[#08090b] overflow-x-clip">
      {/* Sticky Fullscreen Canvas Screen */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Cinematic Backdrop Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: isLoaded ? 1 : 0.4 }}
        />

        {/* Ambient Darkened Gradient Masks for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-[#08090b]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-40" />

        {/* Dynamic Walkthrough Overlays based on Scroll Progress */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-between py-24 md:py-28 pointer-events-none">
          {/* Top Status & Chapter Badge */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pointer-events-auto">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#0d1017]/80 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#e2e8f0] font-medium">
                {activeChapter}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-6 text-xs tracking-wider text-[#a0aec0]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span>150-Point Exotic Inspection</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#3d495c]" />
              <span>Enclosed Transport</span>
            </div>
          </div>

          {/* Central Hero Narrative Layers */}
          <div className="my-auto max-w-3xl">
            {scrollProgress < 0.35 && (
              <div className="space-y-6 animate-in fade-in duration-700 pointer-events-auto">
                <div className="inline-block">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold border-b border-[#d4af37]/40 pb-1">
                    Dallas Exotic Motorcar Vault
                  </span>
                </div>
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f2f4f8] leading-[1.08]">
                  Curated Exotics. <br />
                  <span className="gold-gradient-text">Uncompromising</span> Provenance.
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#cbd5e1] font-light max-w-2xl leading-relaxed">
                  Enter an exclusive showcase of Ferrari, Lamborghini, Rolls-Royce, and Porsche. Hand-selected for collectors who value verified history and effortless acquisition.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={onOpenConcierge}
                    className="glass-button px-8 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold text-[#08090b] bg-[#d4af37] hover:bg-[#f3cf7a] transition-all flex items-center gap-2 shadow-xl"
                  >
                    <span>Request Private Viewing</span>
                    <ChevronRight className="w-4 h-4 text-[#08090b]" />
                  </button>
                  <a
                    href="#showroom"
                    className="px-6 py-3.5 rounded-full border border-[#333d4e] bg-[#10141e]/60 backdrop-blur-md text-xs tracking-[0.18em] uppercase text-[#e2e8f0] hover:border-[#d4af37]/60 transition-all"
                  >
                    Explore Current Vault
                  </a>
                </div>
              </div>
            )}

            {scrollProgress >= 0.35 && scrollProgress < 0.70 && (
              <div className="space-y-6 animate-in fade-in duration-700 pointer-events-auto">
                <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold border-b border-[#d4af37]/40 pb-1">
                  Aerodynamics & Cockpit Craft
                </span>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f2f4f8] leading-tight">
                  Hand-Stitched Leather. <br />
                  <span className="gold-gradient-text">Naturally Aspirated</span> Power.
                </h2>
                <p className="text-sm sm:text-base text-[#cbd5e1] max-w-xl leading-relaxed">
                  Every curve, carbon splitter, and titanium component is inspected by master technicians. No factory shortcuts, zero undisclosed track wear.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-2 max-w-md">
                  <div className="border border-[#222a38] bg-[#0c1017]/80 p-3 rounded-xl backdrop-blur-md">
                    <span className="block text-[10px] uppercase tracking-widest text-[#8b9bb4]">Vetted Mileage</span>
                    <span className="text-lg font-bold text-[#f2f4f8]">Verified</span>
                  </div>
                  <div className="border border-[#222a38] bg-[#0c1017]/80 p-3 rounded-xl backdrop-blur-md">
                    <span className="block text-[10px] uppercase tracking-widest text-[#8b9bb4]">Paint Meters</span>
                    <span className="text-lg font-bold text-[#f2f4f8]">100% Factory</span>
                  </div>
                  <div className="border border-[#222a38] bg-[#0c1017]/80 p-3 rounded-xl backdrop-blur-md">
                    <span className="block text-[10px] uppercase tracking-widest text-[#8b9bb4]">Carfax Tier</span>
                    <span className="text-lg font-bold text-[#d4af37]">Clean Title</span>
                  </div>
                </div>
              </div>
            )}

            {scrollProgress >= 0.70 && (
              <div className="space-y-6 animate-in fade-in duration-700 pointer-events-auto">
                <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold border-b border-[#d4af37]/40 pb-1">
                  White-Glove Nationwide Handover
                </span>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f2f4f8] leading-tight">
                  From Our Dallas Vault <br />
                  <span className="gold-gradient-text">To Your Private Residence.</span>
                </h2>
                <p className="text-sm sm:text-base text-[#cbd5e1] max-w-xl leading-relaxed">
                  Climate-controlled enclosed transport straight to your driveway, anywhere in North America. Transparent paperwork and immediate acquisition terms.
                </p>
                <div className="pt-2">
                  <button
                    onClick={onOpenConcierge}
                    className="glass-button px-8 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold text-[#f2f4f8] border border-[#d4af37] flex items-center gap-2"
                  >
                    <span>Reserve Your Vehicle</span>
                    <ChevronRight className="w-4 h-4 text-[#d4af37]" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Interactive Progress Bar & Scroll Cue */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-auto border-t border-[#1b2230] pt-4">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-[#8c9bb0]">Cinematic Tour</span>
              <div className="w-32 sm:w-48 h-1.5 rounded-full bg-[#1b2230] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#d4af37] to-[#f3cf7a] transition-all duration-150"
                  style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                />
              </div>
              <span className="text-xs font-mono text-[#d4af37]">
                {Math.round(scrollProgress * 100)}%
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#8c9bb0] animate-bounce">
              <span>Scroll to navigate tour</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#d4af37]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
