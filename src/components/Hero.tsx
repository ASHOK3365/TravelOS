'use client';

import { motion } from 'framer-motion';
import { Sparkles, Mic, Navigation, MapPin } from 'lucide-react';

const searches = ['Bali', 'Japan', 'Switzerland', 'Iceland'];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-36 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b from-blue-50 via-blue-50/50 to-transparent -z-20" />
      
      {/* Landscape Background Image (Faded at bottom) */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[65vh] bg-cover bg-center bg-no-repeat -z-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1570077188670-e3a8d69ac542?q=80&w=2574&auto=format&fit=crop')",
          maskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent 100%)',
          opacity: 0.6
        }} 
      />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/50 shadow-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-[12px] font-semibold text-slate-700">AI-Powered Travel Intelligence</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(3rem,6vw,4.5rem)] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6"
          >
            Your Next Trip,<br />
            <span className="text-blue-500">Designed</span> by AI
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[16px] text-slate-600 leading-relaxed max-w-[480px] mb-10 font-medium"
          >
            Plan smarter, travel better. Get personalized itineraries, real-time insights, and seamless travel planning — all in one place.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-[500px]"
          >
            <div className="relative flex items-center bg-white rounded-full p-2 shadow-xl shadow-blue-900/5 border border-slate-100">
              <input 
                type="text" 
                placeholder="Where do you want to go?" 
                className="flex-1 bg-transparent border-none outline-none pl-6 text-slate-700 placeholder-slate-400 text-[15px]"
              />
              <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors">
                <Mic className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center ml-2 shadow-md shadow-blue-500/20 transition-transform active:scale-95">
                <Navigation className="w-5 h-5 fill-white rotate-45" />
              </button>
            </div>

            {/* Popular searches */}
            <div className="flex items-center gap-3 mt-6">
              <span className="text-[12px] font-semibold text-slate-500">Popular Searches:</span>
              <div className="flex gap-2">
                {searches.map(s => (
                  <button key={s} className="px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/50 text-[12px] font-medium text-slate-600 hover:bg-white transition-colors shadow-sm">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Content - Floating Cards */}
        <div className="w-full lg:w-[45%] h-[500px] relative hidden lg:block">
          {/* Dashed line connecting them */}
          <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 400 400">
            <path d="M 80 100 Q 200 50 300 150 T 200 300" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" />
          </svg>

          {/* Norway Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-[20px] left-[60px] animate-float bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white flex items-center gap-3 w-[200px]"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-200 overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1520769945061-0a448c463865?q=80&w=200&auto=format&fit=crop" alt="Norway" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-slate-900">Norway</h4>
              <p className="text-[10px] text-slate-500 font-medium">Aurora Season</p>
            </div>
            <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
              <MapPin className="w-4 h-4 text-blue-500 fill-blue-100" />
            </div>
          </motion.div>

          {/* Japan Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute top-[120px] right-[20px] animate-float [animation-delay:1s] bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white flex items-center gap-3 w-[200px]"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-200 overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=200&auto=format&fit=crop" alt="Japan" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-slate-900">Japan</h4>
              <p className="text-[10px] text-slate-500 font-medium">Cherry Blossom</p>
            </div>
            <div className="absolute -top-6 -left-6 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
              <MapPin className="w-4 h-4 text-blue-500 fill-blue-100" />
            </div>
          </motion.div>

          {/* Bali Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-[100px] left-[150px] animate-float [animation-delay:2s] bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white flex items-center gap-3 w-[200px]"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-200 overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=200&auto=format&fit=crop" alt="Bali" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-slate-900">Bali</h4>
              <p className="text-[10px] text-slate-500 font-medium">Tropical Paradise</p>
            </div>
            <div className="absolute -top-6 -right-6 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
              <MapPin className="w-4 h-4 text-blue-500 fill-blue-100" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
