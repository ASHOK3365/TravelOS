'use client';

import { motion } from 'framer-motion';
import { Sparkles, Mic, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

const suggestions = [
  "Japan trip",
  "Beach vacation",
  "Luxury travel",
  "Adventure trek"
];

export default function Hero() {
  const [suggestionIdx, setSuggestionIdx] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setSuggestionIdx((p) => (p + 1) % suggestions.length);
    }, 3000);
    return () => clearInterval(int);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-24 flex items-center overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#6E5BFF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#42C2FF]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT CONTENT (55%) */}
          <div className="w-full lg:w-[55%] flex flex-col items-start gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#42C2FF]" />
              <span className="text-sm font-medium text-white/80">✦ AI Powered Travel Intelligence</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-bold tracking-tight text-white"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: '0.9' }}
            >
              Your Next Trip,<br />
              <span className="gradient-text">Designed by AI</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[rgba(255,255,255,0.7)] text-lg max-w-xl leading-relaxed"
            >
              Describe your dream destination and AI instantly generates personalized itineraries, optimized routes, weather intelligence and smart budgeting.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform">
                Start Planning
              </button>
              <button className="h-12 px-8 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:scale-105 transition-all">
                Explore Destinations
              </button>
            </motion.div>

            {/* AI Prompt Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full max-w-xl mt-4"
            >
              <div className="relative h-16 w-full rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl flex items-center pl-6 pr-2 shadow-2xl">
                <input 
                  type="text" 
                  placeholder="Adventure weekend in Ladakh with trekking routes..."
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/30 text-sm"
                />
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors">
                    <Mic className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-black hover:scale-105 transition-transform">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mt-4 text-xs font-medium">
                <span className="text-white/40">Try:</span>
                {suggestions.map((s, i) => (
                  <span 
                    key={s} 
                    className={`transition-colors duration-500 ${i === suggestionIdx ? 'text-[#42C2FF]' : 'text-white/40'}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT (45%) */}
          <div className="w-full lg:w-[45%] flex justify-center relative h-[500px] items-center perspective-[1000px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-[400px] h-[400px]"
            >
              {/* Globe Visual (CSS/HTML representation of a sleek 3D globe) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/20 backdrop-blur-sm shadow-[0_0_100px_rgba(66,194,255,0.15)] animate-[spin_40s_linear_infinite]">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]" />
              </div>

              {/* Orbit Lines */}
              <div className="absolute -inset-8 border border-white/5 rounded-full" />
              <div className="absolute -inset-16 border border-white/5 rounded-full" />

              {/* Floating Pills (Max 4) */}
              <div className="absolute top-[10%] left-0 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium animate-[float_5s_ease-in-out_infinite]">🏖 Beach</div>
              <div className="absolute top-[20%] right-[-10%] px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium animate-[float_6s_ease-in-out_infinite_0.5s]">🌆 Tokyo</div>
              <div className="absolute bottom-[20%] left-[-5%] px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium animate-[float_4s_ease-in-out_infinite_1s]">✨ Luxury</div>
              <div className="absolute bottom-[10%] right-[5%] px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium animate-[float_7s_ease-in-out_infinite_1.5s]">⛰ Mountains</div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
