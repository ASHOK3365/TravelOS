'use client';

import { motion } from 'framer-motion';
import { Compass, MapPin, CloudSun, Wallet } from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: 'AI Itinerary Engine',
    desc: 'Generates minute-by-minute travel plans tailored to your pace, preferences, and travel style.',
    color: '#42C2FF',
  },
  {
    icon: MapPin,
    title: 'Smart Routing',
    desc: 'Optimizes daily routes in real-time so you spend less time commuting and more time experiencing.',
    color: '#6E5BFF',
  },
  {
    icon: CloudSun,
    title: 'Live Weather',
    desc: 'Preemptive weather intelligence adapts your itinerary before bad conditions ever reach you.',
    color: '#A855F7',
  },
  {
    icon: Wallet,
    title: 'Budget IQ',
    desc: 'Predictive expense tracking with smart forecasts to keep every trip within budget.',
    color: '#42C2FF',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight">
            Why Travel<span className="text-[#42C2FF]">OS</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-lg">Intelligence that transforms how you explore the world.</p>
        </motion.div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="clay-card p-8 md:p-10 group relative overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: f.color }}
                />

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/[0.06] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                    style={{ background: `${f.color}10` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: f.color }} />
                  </div>

                  <h3 className="text-xl font-bold mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-white/50 leading-relaxed text-[15px]">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
