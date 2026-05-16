'use client';

import { motion } from 'framer-motion';
import { Wallet, CloudSun, MapPin, TrendingUp } from 'lucide-react';

const expenses = [
  { label: 'Mon', pct: 35 },
  { label: 'Tue', pct: 62 },
  { label: 'Wed', pct: 48 },
  { label: 'Thu', pct: 85 },
  { label: 'Fri', pct: 55 },
  { label: 'Sat', pct: 72 },
  { label: 'Sun', pct: 40 },
];

export default function DashboardPreview() {
  return (
    <section className="relative z-10 py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight">
            Powerful <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-lg mx-auto">Compact, intelligent widgets keeping you in control.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* Budget Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 clay-card p-8"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 text-white/40 text-[13px] font-medium mb-3">
                  <Wallet className="w-4 h-4" />
                  Trip Budget
                </div>
                <div className="text-[42px] font-light tracking-tight leading-none">
                  $2,840
                  <span className="text-[18px] text-white/25 ml-1">/ $4,000</span>
                </div>
              </div>
              <span className="px-3.5 py-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-400/[0.08] border border-emerald-400/[0.12] rounded-full">
                On Track
              </span>
            </div>
            <div className="h-2 w-full bg-white/[0.04] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '71%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-gradient-to-r from-[#42C2FF] to-[#6E5BFF] rounded-full"
              />
            </div>
            <div className="flex justify-between mt-3 text-[11px] text-white/25">
              <span>$0</span>
              <span>$4,000</span>
            </div>
          </motion.div>

          {/* Weather Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 clay-card p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#42C2FF]/[0.08] border border-[#42C2FF]/[0.1] flex items-center justify-center mb-5">
              <CloudSun className="w-8 h-8 text-[#42C2FF]" />
            </div>
            <span className="text-[46px] font-extralight tracking-tight leading-none">22°</span>
            <span className="text-[13px] text-white/40 mt-2 font-medium">Kyoto · Clear Sky</span>
            <div className="flex gap-4 mt-5 text-[11px] text-white/30">
              <span>Humidity 45%</span>
              <span>Wind 8km/h</span>
            </div>
          </motion.div>

          {/* Map Preview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-5 clay-card h-[200px] relative overflow-hidden"
          >
            {/* Dot grid simulating map */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-[0.15]" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }} />
            </div>
            {/* Route line */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
              <path d="M 60 140 Q 120 60 200 100 T 340 70" stroke="url(#routeGrad)" strokeWidth="2" fill="none" strokeDasharray="6 4" opacity="0.5" />
              <defs>
                <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#42C2FF" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
              </defs>
              <circle cx="60" cy="140" r="4" fill="#42C2FF" />
              <circle cx="200" cy="100" r="4" fill="#6E5BFF" />
              <circle cx="340" cy="70" r="4" fill="#A855F7" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A855F7]" />
                <span className="text-[13px] font-medium">Live Route</span>
              </div>
            </div>
          </motion.div>

          {/* Expense Chart */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-7 clay-card p-8"
          >
            <div className="flex items-center gap-2 text-white/40 text-[13px] font-medium mb-8">
              <TrendingUp className="w-4 h-4" />
              Weekly Expenses
            </div>
            <div className="flex items-end gap-3 h-[100px]">
              {expenses.map((e, i) => (
                <div key={e.label} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${e.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full rounded-lg bg-gradient-to-t from-[#6E5BFF]/60 to-[#42C2FF]/30 hover:from-[#6E5BFF] hover:to-[#42C2FF]/60 transition-colors cursor-pointer"
                  />
                  <span className="text-[10px] text-white/25 font-medium">{e.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
