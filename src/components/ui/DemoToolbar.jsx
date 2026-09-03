import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Palette, X, Sparkles, Dumbbell, Scissors, GraduationCap, Briefcase, Utensils, Building2 } from 'lucide-react';

export const DemoToolbar = () => {
  const { activeKey, setPreset, businessConfig } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const presets = [
    { id: 'dental-clinic', name: 'Dental Clinic', icon: Sparkles, color: 'bg-teal-600', badge: 'Healthcare' },
    { id: 'salon', name: 'Premium Salon', icon: Scissors, color: 'bg-pink-600', badge: 'Beauty Sanctuary' },
    { id: 'gym', name: 'Modern Gym', icon: Dumbbell, color: 'bg-orange-600', badge: 'Athletic Club' },
    { id: 'coaching', name: 'Coaching Institute', icon: GraduationCap, color: 'bg-blue-600', badge: 'Academy' },
    { id: 'consulting', name: 'Executive Advisory', icon: Briefcase, color: 'bg-indigo-600', badge: 'Corporate' },
    { id: 'restaurant', name: 'Restaurant Bistro', icon: Utensils, color: 'bg-red-700', badge: 'Fine Dining' },
    { id: 'realEstate', name: 'Real Estate Agency', icon: Building2, color: 'bg-emerald-600', badge: 'Luxury Estates' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-slate-950/95 backdrop-blur-xl text-white p-5 rounded-2xl shadow-2xl border border-slate-800 w-80 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-amber-400" />
              <h4 className="font-bold text-sm font-heading">Switch Business Category</h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-400 mb-3">
            Click any business category to trigger instant full-page transformation (copy, images, background, colors & sections):
          </p>

          <div className="space-y-1.5 max-h-[340px] overflow-y-auto pr-1">
            {presets.map((preset) => {
              const IconComp = preset.icon;
              const isActive = activeKey === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => setPreset(preset.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-slate-800 text-white border border-amber-400/40 ring-1 ring-amber-400/40 shadow-lg'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${preset.color}`} />
                    <IconComp className="w-4 h-4 text-slate-300" />
                    <span>{preset.name}</span>
                  </div>
                  {isActive ? (
                    <span className="text-[10px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full font-mono">ACTIVE</span>
                  ) : (
                    <span className="text-[10px] text-slate-500">{preset.badge}</span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Mode: <strong className="text-white">{businessConfig.name}</strong></span>
            <span className="text-amber-400 font-mono">Phase 1 Complete</span>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 bg-slate-950/90 hover:bg-slate-900 text-white px-4 py-3 rounded-full shadow-2xl border border-slate-800 backdrop-blur-md text-xs font-semibold hover:scale-105 transition-all duration-300 group"
        >
          <Palette className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
          <span>Switch Business Category</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </button>
      )}
    </div>
  );
};

export default DemoToolbar;
