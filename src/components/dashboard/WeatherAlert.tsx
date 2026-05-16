'use client';

import { useTripStore } from '@/store/tripStore';
import { CloudSun, Droplets, Sun, Cloud, CloudRain, CloudLightning, Snowflake, Wind } from 'lucide-react';

const conditionMeta: Record<string, { icon: React.ElementType; label: string; color: string; emoji: string }> = {
  sunny: { icon: Sun, label: 'Sunny', color: 'var(--accent-amber)', emoji: '☀️' },
  'partly-cloudy': { icon: CloudSun, label: 'Partly Cloudy', color: 'var(--accent-sky)', emoji: '⛅' },
  cloudy: { icon: Cloud, label: 'Cloudy', color: 'var(--text-muted)', emoji: '☁️' },
  rainy: { icon: CloudRain, label: 'Rainy', color: 'var(--accent-cyan)', emoji: '🌧️' },
  stormy: { icon: CloudLightning, label: 'Stormy', color: 'var(--accent-violet)', emoji: '⛈️' },
  snowy: { icon: Snowflake, label: 'Snowy', color: 'var(--accent-sky)', emoji: '❄️' },
};

export default function WeatherAlert() {
  const { activeTrip, activeDayIndex } = useTripStore();
  if (!activeTrip || !activeTrip.weather.length) return null;

  const todayWeather = activeTrip.weather[activeDayIndex] || activeTrip.weather[0];
  const meta = conditionMeta[todayWeather.condition] || conditionMeta.sunny;

  const isAlert = todayWeather.condition === 'rainy' || todayWeather.condition === 'stormy';

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
          Weather
        </h3>
        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
          Day {todayWeather.day}
        </span>
      </div>

      {/* Main Weather */}
      <div className="flex items-center gap-4 mb-5">
        <div className="text-5xl">{meta.emoji}</div>
        <div>
          <div className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {todayWeather.temp}°C
          </div>
          <div className="text-sm" style={{ color: meta.color }}>{meta.label}</div>
        </div>
      </div>

      {/* Details */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="text-center p-2.5 rounded-xl" style={{ background: 'var(--bg-glass)' }}>
          <Sun size={14} className="mx-auto mb-1" style={{ color: 'var(--accent-amber)' }} />
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>High</div>
          <div className="text-sm font-semibold">{todayWeather.high}°</div>
        </div>
        <div className="text-center p-2.5 rounded-xl" style={{ background: 'var(--bg-glass)' }}>
          <Wind size={14} className="mx-auto mb-1" style={{ color: 'var(--accent-sky)' }} />
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Low</div>
          <div className="text-sm font-semibold">{todayWeather.low}°</div>
        </div>
        <div className="text-center p-2.5 rounded-xl" style={{ background: 'var(--bg-glass)' }}>
          <Droplets size={14} className="mx-auto mb-1" style={{ color: 'var(--accent-cyan)' }} />
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Humidity</div>
          <div className="text-sm font-semibold">{todayWeather.humidity}%</div>
        </div>
      </div>

      {/* Alert Banner */}
      {isAlert && (
        <div className="flex items-center gap-2 p-3 rounded-xl"
          style={{
            background: todayWeather.condition === 'stormy' ? 'rgba(244, 63, 94, 0.1)' : 'rgba(0, 229, 255, 0.08)',
            border: `1px solid ${todayWeather.condition === 'stormy' ? 'rgba(244, 63, 94, 0.2)' : 'rgba(0, 229, 255, 0.15)'}`,
          }}>
          <span className="text-sm">⚠️</span>
          <span className="text-xs font-medium" style={{ color: todayWeather.condition === 'stormy' ? 'var(--accent-rose)' : 'var(--accent-cyan)' }}>
            {todayWeather.condition === 'stormy' ? 'Storm expected — consider indoor activities' : 'Rain likely — pack an umbrella'}
          </span>
        </div>
      )}

      {/* Forecast Row */}
      <div className="mt-4 pt-4 flex gap-2" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        {activeTrip.weather.map((w, i) => {
          const wMeta = conditionMeta[w.condition] || conditionMeta.sunny;
          return (
            <div
              key={w.day}
              className="flex-1 text-center p-2 rounded-lg cursor-pointer transition-all duration-200"
              style={{
                background: i === activeDayIndex ? 'var(--bg-glass-strong)' : 'transparent',
                border: i === activeDayIndex ? '1px solid var(--border-accent)' : '1px solid transparent',
              }}
            >
              <div className="text-[10px] mb-1" style={{ color: 'var(--text-muted)' }}>D{w.day}</div>
              <div className="text-lg mb-0.5">{wMeta.emoji}</div>
              <div className="text-xs font-semibold">{w.temp}°</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
