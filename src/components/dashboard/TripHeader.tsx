'use client';

import { useTripStore } from '@/store/tripStore';
import { MapPin, Users, CalendarDays, Sparkles } from 'lucide-react';

export default function TripHeader() {
  const { activeTrip } = useTripStore();
  if (!activeTrip) return null;

  const startDate = new Date(activeTrip.startDate);
  const endDate = new Date(activeTrip.endDate);
  const totalDays = activeTrip.days.length;

  const dateRange = `${startDate.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })} – ${endDate.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}`;

  return (
    <div className="glass-card p-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(0, 229, 255, 0.08) 50%, transparent 100%)',
        }} />

      <div className="relative z-10">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                style={{
                  background: activeTrip.status === 'planning' ? 'rgba(139, 92, 246, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                  color: activeTrip.status === 'planning' ? 'var(--accent-violet)' : 'var(--accent-emerald)',
                  border: `1px solid ${activeTrip.status === 'planning' ? 'rgba(139, 92, 246, 0.25)' : 'rgba(16, 185, 129, 0.25)'}`,
                }}>
                {activeTrip.status}
              </span>
              <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--accent-cyan)' }}>
                <Sparkles size={12} /> AI Generated
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{activeTrip.tripName}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} style={{ color: 'var(--accent-rose)' }} />
                {activeTrip.destination}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays size={14} />
                {dateRange} · {totalDays} days
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={14} />
                {activeTrip.travelers} travelers
              </span>
            </div>
          </div>

          <button className="btn-primary text-sm py-2.5 px-5">
            <Sparkles size={15} />
            Optimize Trip
          </button>
        </div>
      </div>
    </div>
  );
}
