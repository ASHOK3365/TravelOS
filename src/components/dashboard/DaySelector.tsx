'use client';

import { useTripStore } from '@/store/tripStore';
import { Calendar } from 'lucide-react';

export default function DaySelector() {
  const { activeTrip, activeDayIndex, setActiveDayIndex } = useTripStore();
  if (!activeTrip) return null;

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {activeTrip.days.map((day, i) => (
        <button
          key={day.day}
          onClick={() => setActiveDayIndex(i)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200"
          style={{
            background: i === activeDayIndex ? 'rgba(0, 229, 255, 0.1)' : 'var(--bg-glass)',
            border: i === activeDayIndex ? '1px solid rgba(0, 229, 255, 0.2)' : '1px solid var(--border-subtle)',
            color: i === activeDayIndex ? 'var(--accent-cyan)' : 'var(--text-secondary)',
          }}
        >
          <Calendar size={14} />
          Day {day.day}
          {day.date && (
            <span className="text-xs opacity-60 ml-1">
              {new Date(day.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
