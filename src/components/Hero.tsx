'use client';

import { motion } from 'framer-motion';
import { Plane, Mic, Send, MapPin, Sparkles, Wallet } from 'lucide-react';

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
          
          {/* 3D Globe Image */}
          <div className="relative w-[110%] h-[110%] flex items-center justify-center -mr-10">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
              src="/clay-globe.png" 
              alt="3D Travel Globe" 
              className="w-[90%] h-auto object-contain animate-[float_6s_ease-in-out_infinite]"
            />
          </div>

          {/* Floating Cards */}
          
          {/* 1. Weather Card (Top Right) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
            className="absolute top-[10%] right-[0%] clay-card px-5 py-3 flex items-center gap-4 animate-[float_5s_ease-in-out_infinite_reverse]"
          >
            <div className="text-2xl drop-shadow-sm">⛅</div>
            <div>
              <p className="text-[16px] font-bold text-[#1A202C] leading-tight">24°C</p>
              <p className="text-[11px] text-[#4A5568] font-medium">Paris</p>
            </div>
          </motion.div>

          {/* 2. Explore Card (Left) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }}
            className="absolute top-[35%] left-[-10%] clay-card px-5 py-3 flex items-center gap-4 animate-[float_6s_ease-in-out_infinite_1s]"
          >
            <div className="w-10 h-10 rounded-full bg-[#EAF4FF] flex items-center justify-center shadow-sm">
              <MapPin className="w-5 h-5 text-[#8B5CF6] fill-[#8B5CF6]/20" />
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#1A202C] leading-tight">Explore</p>
              <p className="text-[11px] text-[#4A5568] font-medium">Top Destinations</p>
            </div>
          </motion.div>

          {/* 3. AI Itinerary Card (Right) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}
            className="absolute top-[55%] right-[-10%] clay-card px-5 py-3 flex items-center gap-4 animate-[float_5.5s_ease-in-out_infinite_2s]"
          >
            <div className="w-10 h-10 rounded-full bg-[#F3E8FF] flex items-center justify-center shadow-sm">
              <Sparkles className="w-5 h-5 text-[#A855F7] fill-[#A855F7]/20" />
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#1A202C] leading-tight">AI Itinerary</p>
              <p className="text-[11px] text-[#4A5568] font-medium">Personalized for you</p>
            </div>
          </motion.div>

          {/* 4. Budget IQ Card (Bottom) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1 }}
            className="absolute bottom-[10%] left-[20%] clay-card px-5 py-3 flex items-center gap-4 animate-[float_6.5s_ease-in-out_infinite_0.5s]"
          >
            <div className="w-10 h-10 rounded-full bg-[#DCFCE7] flex items-center justify-center shadow-sm">
              <Wallet className="w-5 h-5 text-[#22C55E] fill-[#22C55E]/20" />
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#1A202C] leading-tight">Budget IQ</p>
              <p className="text-[11px] text-[#4A5568] font-medium">Travel smartly</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
