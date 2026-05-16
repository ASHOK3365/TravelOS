'use client';

import { useTripStore } from '@/store/tripStore';
import { MapPin, Clock, IndianRupee, Utensils, Camera, ShoppingBag, Car, Hotel, Waves } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  food: Utensils,
  sightseeing: Camera,
  shopping: ShoppingBag,
  transport: Car,
  accommodation: Hotel,
  activity: Waves,
};

const categoryColors: Record<string, string> = {
  food: 'var(--accent-amber)',
  sightseeing: 'var(--accent-violet)',
  shopping: 'var(--accent-rose)',
  transport: 'var(--accent-sky)',
  accommodation: 'var(--accent-emerald)',
  activity: 'var(--accent-cyan)',
};

export default function Timeline() {
  const { activeTrip, activeDayIndex } = useTripStore();
  if (!activeTrip) return null;

  const dayPlan = activeTrip.days[activeDayIndex];
  if (!dayPlan) return null;

  return (
    <div className="relative pl-10">
      {/* Vertical Line */}
      <div className="timeline-line" />

      <div className="space-y-6">
        {dayPlan.activities.map((activity, i) => {
          const Icon = categoryIcons[activity.category] || Camera;
          const color = categoryColors[activity.category] || 'var(--accent-cyan)';

          return (
            <div key={activity.id} className="relative" style={{ animationDelay: `${i * 80}ms` }}>
              {/* Timeline Dot */}
              <div className="timeline-dot" style={{ top: '20px' }} />

              {/* Card */}
              <div className="glass-card p-5 ml-2 group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Time */}
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={13} style={{ color: 'var(--text-muted)' }} />
                      <span className="text-xs font-mono font-medium" style={{ color: 'var(--text-muted)' }}>
                        {activity.time}
                      </span>
                      {activity.duration && (
                        <span className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: 'var(--bg-glass-strong)', color: 'var(--text-muted)' }}>
                          {activity.duration}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="text-base font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                      {activity.title}
                    </h4>

                    {/* Description */}
                    {activity.description && (
                      <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                        {activity.description}
                      </p>
                    )}

                    {/* Meta */}
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
                        <MapPin size={12} />
                        {activity.location}
                      </span>
                      {activity.cost > 0 && (
                        <span className="flex items-center gap-1 text-xs font-medium" style={{ color: 'var(--accent-emerald)' }}>
                          <IndianRupee size={12} />
                          {activity.cost.toLocaleString('en-IN')}
                        </span>
                      )}
                      {activity.cost === 0 && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                          Free
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Category Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
