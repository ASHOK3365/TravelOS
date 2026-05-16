'use client';

import TripHeader from '@/components/dashboard/TripHeader';
import DaySelector from '@/components/dashboard/DaySelector';
import Timeline from '@/components/dashboard/Timeline';
import BudgetTracker from '@/components/dashboard/BudgetTracker';
import WeatherAlert from '@/components/dashboard/WeatherAlert';
import RouteMap from '@/components/dashboard/RouteMap';
import { useTripStore } from '@/store/tripStore';
import {
  IndianRupee, MapPin, Clock, TrendingUp, Calendar,
  LayoutDashboard, Map as MapIcon, Users, Settings, LogOut,
  Bell, Search, Menu, Plane
} from 'lucide-react';

export default function DashboardPage() {
  const { activeTrip, activeDayIndex } = useTripStore();

  if (!activeTrip) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#06070d]">
        <div className="animate-pulse text-[var(--text-muted)]">Initializing AI TravelOS...</div>
      </div>
    );
  }

  const sidebarLinks = [
    { icon: LayoutDashboard, label: 'Overview', active: true },
    { icon: MapIcon, label: 'Itinerary', active: false },
    { icon: Users, label: 'Collab', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  const dayPlan = activeTrip.days[activeDayIndex];
  const daySpend = dayPlan?.activities.reduce((s, a) => s + a.cost, 0) || 0;
  const dayActivities = dayPlan?.activities.length || 0;
  const uniqueLocations = [...new Set(dayPlan?.activities.map((a) => a.location) || [])];

  const stats = [
    { label: 'Day Spend', value: `₹${daySpend.toLocaleString('en-IN')}`, icon: IndianRupee, color: 'var(--accent-emerald)' },
    { label: 'Activities', value: dayActivities.toString(), icon: Clock, color: 'var(--accent-cyan)' },
    { label: 'Locations', value: uniqueLocations.length.toString(), icon: MapPin, color: 'var(--accent-rose)' },
    { label: 'Budget Used', value: `${Math.round((activeTrip.budget.spent / activeTrip.budget.total) * 100)}%`, icon: TrendingUp, color: 'var(--accent-violet)' },
  ];

  return (
    <div className="flex min-h-screen bg-[#06070d]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--border-subtle)] hidden lg:flex flex-col pt-6">
        <div className="px-6 mb-8 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--gradient-accent)] flex items-center justify-center">
            <Plane className="text-[var(--bg-primary)]" size={18} />
          </div>
          <span className="font-bold text-lg tracking-tight">AI Travel<span className="text-[var(--accent-cyan)]">OS</span></span>
        </div>

        <div className="px-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={14} />
            <input
              type="text"
              placeholder="Search plans..."
              className="w-full bg-[var(--bg-glass)] border border-[var(--border-subtle)] rounded-xl py-2 pl-9 pr-4 text-xs outline-none focus:border-[var(--accent-cyan)] transition-colors"
            />
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-3">
          {sidebarLinks.map((link) => (
            <button
              key={link.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                link.active
                  ? 'bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/20'
                  : 'text-[var(--text-secondary)] hover:bg-white/5 hover:text-white'
              }`}
            >
              <link.icon size={18} />
              {link.label}
            </button>
          ))}
          <a
            href="/"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[var(--text-secondary)] hover:bg-white/5 hover:text-white transition-all"
          >
            <Calendar size={18} />
            Back to Home
          </a>
        </nav>

        <div className="p-4 border-t border-[var(--border-subtle)]">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[var(--accent-rose)] hover:bg-[var(--accent-rose)]/5 transition-all">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-0 overflow-y-auto pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-2">
            <div className="lg:hidden">
              <button className="p-2 rounded-lg bg-[var(--bg-glass)] border border-[var(--border-subtle)]">
                <Menu size={20} />
              </button>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <button className="p-2 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-subtle)] relative">
                <Bell size={18} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[var(--accent-rose)] rounded-full border border-[var(--bg-primary)]" />
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-[var(--border-subtle)]">
                <div className="text-right hidden sm:block">
                  <div className="text-xs font-bold">Alex Rivera</div>
                  <div className="text-[10px] text-[var(--text-muted)]">Pro Plan</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[var(--gradient-accent)] flex items-center justify-center font-bold text-[var(--bg-primary)]">
                  AR
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up">
            <TripHeader />
          </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up delay-100">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="stat-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${s.color}15` }}>
                    <Icon size={18} style={{ color: s.color }} />
                  </div>
                  <div>
                    <div className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{s.value}</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Day Selector */}
        <div className="animate-fade-in-up delay-200">
          <DaySelector />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column — Timeline */}
          <div className="lg:col-span-2 space-y-6">
            <div className="animate-fade-in-up delay-300">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 rounded-full" style={{ background: 'var(--gradient-accent)' }} />
                Day {(dayPlan?.day) || activeDayIndex + 1} Itinerary
              </h2>
              <Timeline />
            </div>

            {/* Route Map */}
            <div className="animate-fade-in-up delay-400">
              <RouteMap />
            </div>
          </div>

          {/* Right Column — Sidebar */}
          <div className="space-y-6">
            <div className="animate-fade-in-up delay-300">
              <WeatherAlert />
            </div>
            <div className="animate-fade-in-up delay-400">
              <BudgetTracker />
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}
