'use client';

import { motion } from 'framer-motion';
import { Sparkles, Route, CloudLightning, Wallet } from 'lucide-react';

const features = [
  { title: 'AI Itinerary Engine', icon: Sparkles, color: 'text-[#2F80ED]', bg: 'bg-[#EAF4FF]' },
  { title: 'Smart Routing', icon: Route, color: 'text-[#6FCF97]', bg: 'bg-[#6FCF97]/10' },
  { title: 'Live Updates', icon: CloudLightning, color: 'text-[#F9A826]', bg: 'bg-[#F9A826]/10' },
  { title: 'Budget IQ', icon: Wallet, color: 'text-[#56CCF2]', bg: 'bg-[#56CCF2]/10' },
];

export default function Features() {
  return (
    <section className="py-24 relative bg-[#F7FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1A202C] tracking-tight">
            Why <span className="text-[#2F80ED]">TravelOS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="clay-card p-8 flex flex-col items-start group cursor-pointer h-[200px]"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-3 ${f.bg}`}>
                  <Icon className={`w-7 h-7 ${f.color}`} />
                </div>
                <h3 className="text-[20px] font-bold text-[#1A202C] tracking-tight">
                  {f.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
