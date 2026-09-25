import React, { useEffect, useRef, useState } from 'react';
import { Gauge, ChevronRight, Activity, Zap, ShieldCheck } from 'lucide-react';

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
  const [activeChapter, setActiveChapter] = useState<string>('Aerodynamic Profile & Front Splitter');
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

      const imgAspect = 16 / 9;
      const screenAspect = w / h;

      let drawW = w;
      let drawH = h;
      let offsetX = 0;
      let offsetY = 0;

      if (screenAspect > imgAspect) {
        drawW = w;
        drawH = w / imgAspect;
        offsetY = (h - drawH) / 2;
      } else {
        drawH = h;
        drawW = h * imgAspect;
        offsetX = (w - drawW) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);

      // Dark carbon vignette overlay
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, 'rgba(5, 5, 7, 0.65)');
      grad.addColorStop(0.4, 'rgba(5, 5, 7, 0.15)');
      grad.addColorStop(1, 'rgba(5, 5, 7, 0.90)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      ctx.restore();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      const currentScroll = -rect.top;

      let progress = currentScroll / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);

      const frameNumber = Math.max(1, Math.min(totalFrames, Math.floor(progress * (totalFrames - 1)) + 1));
      currentFrameRef.current = frameNumber;
      setCurrentFrame(frameNumber);
      renderFrame(frameNumber);

      if (progress < 0.33) {
        setActiveChapter('Aerodynamic Profile & Carbon Splitter');
      } else if (progress < 0.66) {
        setActiveChapter('Cockpit Ergonomics & Steering Telemetry');
      } else if (progress < 0.88) {
        setActiveChapter('V8/V12 Powertrain & Active Aero');
      } else {
        setActiveChapter('Rear Diffuser & Titanium Exhaust');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalFrames]);

  const rpmValue = Math.round(1500 + scrollProgress * 7000);
  const speedMph = Math.round(scrollProgress * 205);

  return (
    <section id="telemetry-tour" ref={containerRef} className="relative h-[450vh] bg-[#050507]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-4 sm:p-8">
        {/* Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* HUD Top Corner Brackets */}
        <div className="relative z-10 w-full flex items-center justify-between pt-16 sm:pt-20 font-mono text-[10px] text-neutral-400">
          <div className="flex items-center gap-2 bg-[#09090b]/80 border border-neutral-800 px-3 py-1.5 backdrop-blur-md">
            <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
            <span className="text-white font-bold">CHASSIS 360° TELEMETRY // DALLAS SHOWROOM</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 bg-[#09090b]/80 border border-neutral-800 px-3 py-1.5 backdrop-blur-md">
            <span>RPM: <strong className="text-rose-500">{rpmValue}</strong></span>
            <span>SPEED: <strong className="text-white">{speedMph} MPH</strong></span>
            <span>SYSTEM: {isLoaded ? <strong className="text-emerald-400">TELEMETRY READY</strong> : <strong className="text-amber-400">INITIALIZING...</strong>}</span>
          </div>
        </div>

        {/* Main Hero Overlay (Sharp Automotive Layout) */}
        <div className="relative z-10 my-auto max-w-4xl space-y-6 pointer-events-none">
          <div className="space-y-4 pointer-events-auto">
            <div className="inline-flex items-center gap-2 bg-rose-950/70 border border-rose-600/50 px-3 py-1 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider skew-badge">
              <Zap className="w-3.5 h-3.5 unskew" />
              <span className="unskew">Verified Exotic Supercars · Dallas, TX</span>
            </div>

            <h1 className="font-mono text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[0.95]">
              Uncompromising <br />
              <span className="text-rose-500 underline decoration-rose-500/40">Exotic Provenance</span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 max-w-xl font-light leading-relaxed">
              Ferrari, Lamborghini, McLaren, and Porsche. Hand-selected for collectors who demand verified mileage, zero undisclosed track wear, and seamless nationwide acquisition.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenConcierge}
                className="skew-badge px-8 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-bold uppercase tracking-widest transition-all shadow-xl racing-red-glow flex items-center gap-2"
              >
                <span className="unskew flex items-center gap-2">
                  <span>Schedule Private Inspection</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </button>

              <a
                href="#showroom"
                className="px-6 py-3.5 border border-neutral-700 bg-neutral-900/80 backdrop-blur-md text-white font-mono text-xs uppercase tracking-wider hover:border-rose-500 transition-colors"
              >
                Inspect Vault Inventory
              </a>
            </div>
          </div>
        </div>

        {/* Telemetry Gauge HUD Bar (Bottom) */}
        <div className="relative z-10 w-full pointer-events-auto">
          <div className="bg-[#09090b]/90 border border-neutral-800 p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-md">
            {/* Left Chapter Monitor */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="w-8 h-8 bg-rose-600/20 border border-rose-500/30 flex items-center justify-center text-rose-500 shrink-0">
                <Gauge className="w-4 h-4" />
              </div>
              <div className="font-mono">
                <div className="text-[10px] text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Activity className="w-3 h-3 text-rose-500" />
                  <span>360° Walkaround Orbit</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white uppercase mt-0.5">
                  {activeChapter}
                </div>
              </div>
            </div>

            {/* Center Rev Progress Bar */}
            <div className="w-full md:w-72 space-y-1">
              <div className="flex justify-between font-mono text-[10px] text-neutral-400 uppercase">
                <span>Walkaround Progress</span>
                <span className="text-rose-500 font-bold">{Math.round(scrollProgress * 100)}%</span>
              </div>
              <div className="h-2 bg-neutral-800 overflow-hidden flex gap-0.5">
                {[...Array(20)].map((_, i) => {
                  const active = i / 20 <= scrollProgress;
                  return (
                    <div
                      key={i}
                      className={`flex-1 transition-colors ${
                        active
                          ? i > 15 ? 'bg-rose-500' : 'bg-rose-600'
                          : 'bg-neutral-800'
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Right Badge */}
            <div className="flex items-center gap-4 font-mono text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 text-white">
                <ShieldCheck className="w-4 h-4 text-rose-500" />
                <span>30-Yr Dallas Reputation</span>
              </span>
              <span className="text-neutral-500">|</span>
              <span className="text-[11px] text-rose-400">Scroll to rotate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
