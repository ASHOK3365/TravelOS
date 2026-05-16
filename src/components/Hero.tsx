'use client';

import { motion } from 'framer-motion';
import { Plane, Mic, Send } from 'lucide-react';

const suggestions = ['Bali', 'Japan', 'Switzerland', 'Iceland'];
const orbitCards = ['Tokyo', 'Bali', 'Paris', 'Swiss Alps'];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center sky-bg">
      {/* Background Soft Clouds */}
      <div className="cloud w-[400px] h-[400px] top-[-100px] left-[-100px]" />
      <div className="cloud w-[500px] h-[500px] top-[20%] right-[-200px]" />
      <div className="cloud w-[300px] h-[300px] bottom-[-50px] left-[30%]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full clay-card self-start mb-6"
          >
            <Plane className="w-4 h-4 text-[#2F80ED]" />
            <span className="text-[13px] font-bold text-[#1A202C]">AI Powered Travel Intelligence</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(3rem,5vw,4.5rem)] font-extrabold text-[#1A202C] leading-[1.1] tracking-tight mb-6"
          >
            Your Next Trip,<br />
            <span className="text-gradient">Designed by AI</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[16px] text-[#4A5568] leading-relaxed max-w-[480px] mb-8 font-medium"
          >
            Plan smarter with AI-powered itineraries, weather insights, smart budgeting and personalized travel experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <button className="px-8 py-3.5 clay-button text-[15px] font-bold">
              Start Planning
            </button>
            <button className="px-8 py-3.5 rounded-full clay-card text-[15px] font-bold text-[#1A202C] hover:bg-white/90 transition-colors">
              Explore Destinations
            </button>
          </motion.div>

          {/* AI Prompt Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-[540px]"
          >
            <div className="relative flex items-center clay-card p-2 rounded-full mb-4">
              <input 
                type="text" 
                placeholder="Adventure weekend in Ladakh with trekking routes..." 
                className="flex-1 bg-transparent border-none outline-none pl-6 text-[#1A202C] placeholder-[#4A5568]/60 text-[15px] font-medium"
              />
              <button className="w-10 h-10 flex items-center justify-center text-[#4A5568] hover:text-[#2F80ED] transition-colors shrink-0">
                <Mic className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 clay-button rounded-full flex items-center justify-center shrink-0 ml-1">
                <Send className="w-5 h-5 text-white ml-[-2px]" />
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-[13px] font-semibold text-[#4A5568]">Suggestions:</span>
              <div className="flex flex-wrap gap-2">
                {suggestions.map(s => (
                  <button key={s} className="px-4 py-1.5 rounded-full bg-white/50 border border-white/60 text-[12px] font-bold text-[#1A202C] hover:bg-white transition-colors shadow-sm">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN - 3D GLOBE */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center">
          
          {/* Static SVG Globe */}
          <div className="absolute w-[400px] h-[400px] rounded-full shadow-[inset_-20px_-20px_60px_rgba(47,128,237,0.1),20px_20px_60px_rgba(47,128,237,0.15)] bg-gradient-to-br from-white to-[#EAF4FF] border border-white/60 flex items-center justify-center overflow-hidden">
            <svg className="w-full h-full opacity-30 text-[#2F80ED]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <ellipse cx="50" cy="50" rx="24" ry="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <ellipse cx="50" cy="50" rx="48" ry="24" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="2" x2="50" y2="98" stroke="currentColor" strokeWidth="0.5" />
              <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>

          {/* Animated Orbit Cards */}
          <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
            {orbitCards.map((card, i) => (
              <div 
                key={card}
                className="absolute top-1/2 left-1/2 w-full"
                style={{ 
                  transform: `translate(-50%, -50%) rotate(${i * 90}deg)`,
                }}
              >
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
                >
                  <div className="clay-card px-5 py-3 rounded-full font-bold text-[#1A202C] text-[14px] flex items-center gap-2 whitespace-nowrap animate-[spin_20s_linear_infinite_reverse]">
                    <div className="w-2 h-2 rounded-full bg-[#56CCF2]" />
                    {card}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
