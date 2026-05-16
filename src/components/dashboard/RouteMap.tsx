'use client';

import { useTripStore } from '@/store/tripStore';
import { MapPin, Navigation } from 'lucide-react';

export default function RouteMap() {
  const { activeTrip, activeDayIndex } = useTripStore();
  if (!activeTrip) return null;

  const dayPlan = activeTrip.days[activeDayIndex];
  const locations = dayPlan?.activities.map((a) => a.location) || [];
  const uniqueLocations = [...new Set(locations)];

  return (
    <div className="glass-card overflow-hidden">
      <div className="flex items-center justify-between p-4 pb-0">
        <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
          Route Map
        </h3>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent-cyan)' }}>
          <Navigation size={12} />
          {uniqueLocations.length} stops
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="relative m-4 rounded-xl overflow-hidden" style={{ height: '280px', background: 'var(--bg-tertiary)' }}>
        {/* Simulated map grid */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }} />

        {/* Simulated route line */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" fill="none">
          <path
            d="M 60 200 Q 120 160 160 120 T 240 80 Q 280 60 320 100 T 360 140"
            stroke="url(#routeGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="8 4"
            fill="none"
          >
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
          </path>
          <defs>
            <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent-cyan)" />
              <stop offset="100%" stopColor="var(--accent-violet)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Location markers */}
        {uniqueLocations.map((loc, i) => {
          const x = 15 + (i / Math.max(uniqueLocations.length - 1, 1)) * 70;
          const y = 30 + Math.sin(i * 1.5) * 20 + Math.cos(i * 0.8) * 15;

          return (
            <div
              key={loc}
              className="absolute flex flex-col items-center"
              style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
            >
              <div className="relative">
                <div className="w-5 h-5 rounded-full flex items-center justify-center pulse-glow"
                  style={{ background: i === 0 ? 'var(--accent-emerald)' : i === uniqueLocations.length - 1 ? 'var(--accent-rose)' : 'var(--accent-cyan)' }}>
                  <MapPin size={11} style={{ color: 'var(--bg-primary)' }} />
                </div>
                <span className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(0,0,0,0.7)', color: 'var(--text-primary)', border: '1px solid var(--border-subtle)' }}>
                  {loc}
                </span>
              </div>
            </div>
          );
        })}

        {/* Legend */}
        <div className="absolute bottom-3 right-3 flex items-center gap-3 px-3 py-1.5 rounded-lg"
          style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid var(--border-subtle)' }}>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-emerald)' }} />
            <span className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>Start</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-rose)' }} />
            <span className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>End</span>
          </div>
        </div>

        {/* Google Maps badge */}
        <div className="absolute top-3 left-3 px-2 py-1 rounded-md text-[10px] font-medium"
          style={{ background: 'rgba(0,0,0,0.6)', color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' }}>
          🗺️ Connect Google Maps API for live map
        </div>
      </div>
    </div>
  );
}
