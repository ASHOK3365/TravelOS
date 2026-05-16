'use client';

import { motion } from 'framer-motion';
import { Compass, MapPin, CloudSun, Wallet } from 'lucide-react';

const cards = [
  {
    icon: Compass,
    title: "AI Itinerary Engine",
    description: "Generates minute-by-minute plans perfectly tailored to your pacing and preferences."
  },
  {
    icon: MapPin,
    title: "Smart Routing",
    description: "Automatically optimizes daily travel paths to save you time and maximize experiences."
  },
  {
    icon: CloudSun,
    title: "Live Weather",
    description: "Preemptive alerts adapt your itinerary on the fly if conditions turn unfavorable."
  },
  {
    icon: Wallet,
    title: "Budget IQ",
    description: "Predictive expense tracking ensures you never overspend with smart AI forecasts."
  }
];

export default function Features() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight">Why TravelOS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="clay-card p-8 group relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#42C2FF]/0 to-[#A855F7]/0 group-hover:from-[#42C2FF]/10 group-hover:to-[#A855F7]/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <card.icon className="w-6 h-6 text-[#42C2FF]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
