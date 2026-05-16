'use client';

import { motion } from 'framer-motion';
import { Compass, Users, MapPin, CloudSun, Wallet, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: 'AI Itinerary Engine',
    description: 'AI constructs minute-by-minute plans perfectly tailored to your pacing and preferences.'
  },
  {
    icon: MapPin,
    title: 'Smart Routing',
    description: 'Dynamic mapping automatically optimizes your daily travel paths to save time and energy.'
  },
  {
    icon: Wallet,
    title: 'Budget IQ',
    description: 'Predictive expense tracking ensures your group never overspends, with smart AI alerts.'
  },
  {
    icon: CloudSun,
    title: 'Weather Intelligence',
    description: 'Preemptive weather alerts adapt your itinerary on the fly if conditions turn unfavorable.'
  },
  {
    icon: Users,
    title: 'Group Planning',
    description: 'Collaborate with your group in real-time. Vote, split expenses, and synchronize instantly.'
  },
  {
    icon: Sparkles,
    title: 'AI Recommendations',
    description: 'Discover hidden gems, exclusive restaurants, and secret spots only locals know about.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function FeaturesSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="container">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Intelligence <span className="gradient-text">Beyond Limits</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70"
          >
            An ecosystem of AI travel tools designed for smarter journeys.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="feature-grid"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="clay-card p-8 group cursor-pointer relative overflow-hidden animate-float"
              style={{ borderRadius: '32px' }}
            >
              {/* Glow background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-violet-500/0 group-hover:from-cyan-500/10 group-hover:to-violet-500/10 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col items-start gap-4">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-[0_0_15px_rgba(0,229,255,0.2)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]">
                  <feature.icon className="w-6 h-6 text-cyan-400 group-hover:text-violet-400 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-100 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
