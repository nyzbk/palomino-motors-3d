import React, { useState } from 'react';
import { X, Check, Shield, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Vehicle } from '../data/inventory';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedVehicle?: Vehicle | null;
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({
  isOpen,
  onClose,
  selectedVehicle
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    timeframe: 'Immediate Acquisition (7-14 Days)',
    transportPreference: 'Enclosed Nationwide Transporter',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#f3cf7a', '#ffffff']
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg glass-panel-amber rounded-3xl p-6 sm:p-8 border border-[#d4af37]/40 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#121622] text-[#94a3b8] hover:text-[#f2f4f8] hover:bg-[#1b2230] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#f2f4f8]">
              Acquisition Request Received
            </h3>
            <p className="text-sm text-[#cbd5e1] max-w-sm mx-auto leading-relaxed">
              Our Senior Client Director will contact you within 2 business hours with the full digital dossier, paint meter logs, and title provenance for{' '}
              <strong className="text-[#d4af37]">
                {selectedVehicle ? `${selectedVehicle.year} ${selectedVehicle.make} ${selectedVehicle.model}` : 'your requested vehicle'}
              </strong>.
            </p>
            <div className="p-4 rounded-xl bg-[#0c1017] border border-[#222a38] text-xs text-[#a0aec0]">
              <span>Direct Concierge Line: </span>
              <a href="tel:+12148790111" className="text-[#d4af37] font-bold underline">
                (214) 879-0111
              </a>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-8 py-3 rounded-full bg-[#d4af37] text-[#08090b] font-bold text-xs uppercase tracking-widest hover:bg-[#f3cf7a] transition-all"
            >
              Return to Vault
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-1">
                Private Client Concierge
              </span>
              <h3 className="font-display text-2xl font-bold text-[#f2f4f8]">
                {selectedVehicle ? `Inquire: ${selectedVehicle.year} ${selectedVehicle.make}` : 'Schedule Private Viewing'}
              </h3>
              <p className="text-xs text-[#94a3b8] mt-1">
                {selectedVehicle
                  ? `${selectedVehicle.model} · ${selectedVehicle.price} · VIN: ${selectedVehicle.vin}`
                  : 'Experience our Dallas exotic vault in a private setting.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#94a3b8] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Richard Vance"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0a0d14] border border-[#232c3d] text-sm text-[#f2f4f8] placeholder-[#505d74] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#94a3b8] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(214) 555-0199"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0a0d14] border border-[#232c3d] text-sm text-[#f2f4f8] placeholder-[#505d74] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#94a3b8] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="richard@vancecapital.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0a0d14] border border-[#232c3d] text-sm text-[#f2f4f8] placeholder-[#505d74] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#94a3b8] mb-1">
                  Delivery & Logistics Preference
                </label>
                <select
                  value={formData.transportPreference}
                  onChange={e => setFormData({ ...formData, transportPreference: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0a0d14] border border-[#232c3d] text-sm text-[#f2f4f8] focus:outline-none focus:border-[#d4af37]"
                >
                  <option value="Enclosed Nationwide Transporter">Enclosed Nationwide Transporter (Direct to Home)</option>
                  <option value="In-Person Dallas Showroom Handover">In-Person Dallas Showroom Handover</option>
                  <option value="Private Airport Tarmac Delivery (Dallas Love Field / DFW)">Private Airport Tarmac Delivery (Love Field / DFW)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#94a3b8] mb-1">
                  Specific Requests or Trade-In Details
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention if you have an exotic trade-in, or require specialized financing."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-[#0a0d14] border border-[#232c3d] text-sm text-[#f2f4f8] placeholder-[#505d74] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] text-[#8091a7]">
                  <Shield className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Strict Discretion Guaranteed</span>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#d4af37] text-[#08090b] font-bold text-xs uppercase tracking-widest hover:bg-[#f3cf7a] transition-all shadow-lg flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
