'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Route, CloudSun, Wallet } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI Trip Planner',
    desc: 'Get personalized itineraries crafted by AI based on your preferences and budget.',
    color: 'blue',
    bg: 'bg-blue-50',
    text: 'text-blue-500',
    btn: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    icon: Route,
    title: 'Smart Routing',
    desc: 'Optimize your routes with real-time data for a smoother and faster travel experience.',
    color: 'emerald',
    bg: 'bg-emerald-50',
    text: 'text-emerald-500',
    btn: 'bg-emerald-400 hover:bg-emerald-500',
  },
  {
    icon: CloudSun,
    title: 'Live Updates',
    desc: 'Real-time weather, flight, and travel updates to keep your plans on track.',
    color: 'amber',
    bg: 'bg-amber-50',
    text: 'text-amber-500',
    btn: 'bg-amber-400 hover:bg-amber-500',
  },
  {
    icon: Wallet,
    title: 'Budget IQ',
    desc: 'Track expenses, set budgets, and get smart suggestions to travel more, spend less.',
    color: 'purple',
    bg: 'bg-purple-50',
    text: 'text-purple-500',
    btn: 'bg-purple-500 hover:bg-purple-600',
  },
];

export default function Features() {
  return (
    <section className="relative z-20 py-10 -mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="feature-card p-6 flex flex-col items-start h-[260px]"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${f.bg}`}>
                  <Icon className={`w-6 h-6 ${f.text}`} />
                </div>
                
                <h3 className="text-[18px] font-bold text-slate-900 tracking-tight mb-3">
                  {f.title}
                </h3>
                
                <p className="text-[13px] text-slate-500 font-medium leading-relaxed mb-auto">
                  {f.desc}
                </p>

                <button className={`w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors mt-6 ${f.btn}`}>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
