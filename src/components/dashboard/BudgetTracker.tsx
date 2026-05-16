'use client';

import { useTripStore } from '@/store/tripStore';
import { IndianRupee, TrendingUp, Utensils, Car, Waves, Hotel, ShoppingBag } from 'lucide-react';

const catMeta: Record<string, { icon: React.ElementType; label: string; color: string }> = {
  food: { icon: Utensils, label: 'Food & Dining', color: 'var(--accent-amber)' },
  transport: { icon: Car, label: 'Transport', color: 'var(--accent-sky)' },
  activities: { icon: Waves, label: 'Activities', color: 'var(--accent-cyan)' },
  accommodation: { icon: Hotel, label: 'Accommodation', color: 'var(--accent-violet)' },
  shopping: { icon: ShoppingBag, label: 'Shopping', color: 'var(--accent-rose)' },
};

export default function BudgetTracker() {
  const { activeTrip } = useTripStore();
  if (!activeTrip) return null;

  const { budget } = activeTrip;
  const pct = Math.min((budget.spent / budget.total) * 100, 100);
  const remaining = budget.total - budget.spent;
  const isOver = remaining < 0;

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
          Budget Tracker
        </h3>
        <div className="flex items-center gap-1.5 text-xs font-medium"
          style={{ color: isOver ? 'var(--accent-rose)' : 'var(--accent-emerald)' }}>
          <TrendingUp size={14} />
          {isOver ? 'Over budget' : 'On track'}
        </div>
      </div>

      {/* Total Overview */}
      <div className="flex items-end justify-between mb-3">
        <div>
          <div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>Spent</div>
          <div className="flex items-center gap-1 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            <IndianRupee size={20} />
            {budget.spent.toLocaleString('en-IN')}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>Total Budget</div>
          <div className="flex items-center gap-1 text-lg font-semibold" style={{ color: 'var(--text-secondary)' }}>
            <IndianRupee size={16} />
            {budget.total.toLocaleString('en-IN')}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="budget-bar mb-6">
        <div className="budget-bar-fill" style={{ width: `${pct}%` }} />
      </div>

      {/* Category Breakdown */}
      <div className="space-y-3">
        {Object.entries(budget.categories).map(([key, amount]) => {
          const meta = catMeta[key];
          if (!meta) return null;
          const Icon = meta.icon;
          const catPct = budget.total > 0 ? (amount / budget.total) * 100 : 0;

          return (
            <div key={key} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${meta.color}15` }}>
                <Icon size={14} style={{ color: meta.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{meta.label}</span>
                  <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    ₹{amount.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-glass-strong)' }}>
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${catPct}%`, background: meta.color }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Remaining */}
      <div className="mt-5 pt-4 flex items-center justify-between"
        style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Remaining</span>
        <span className="text-base font-bold" style={{ color: isOver ? 'var(--accent-rose)' : 'var(--accent-emerald)' }}>
          ₹{Math.abs(remaining).toLocaleString('en-IN')}
        </span>
      </div>
    </div>
  );
}
