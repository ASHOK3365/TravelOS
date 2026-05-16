'use client';

import { motion } from 'framer-motion';
import { CloudSun, MapPin, Wallet, Route, Plane, Sparkles, ArrowRight, Users, Compass } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="py-24 relative z-10 w-full overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Mission <span className="gradient-text">Control</span>
          </motion.h2>
          <p className="text-white/70 text-lg">Your entire travel universe, simplified.</p>
        </div>

        {/* Dashboard Frame matching reference image aesthetic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#1C1C1F]/80 backdrop-blur-3xl rounded-[32px] border border-white/5 shadow-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 relative overflow-hidden"
        >
          {/* Subtle top glare */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Top Header */}
          <div className="col-span-1 lg:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
            <div>
              <h3 className="text-2xl font-serif italic text-white flex items-center gap-2">
                👋 Hey, Good Evening
              </h3>
              <p className="text-white/50 text-sm mt-1">Let's make our travel plan awesome</p>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-medium cursor-pointer hover:bg-white/20 transition-colors">All</span>
              <span className="px-4 py-2 rounded-full bg-white/5 text-white/70 text-xs font-medium cursor-pointer hover:bg-white/10 transition-colors">Adventure Trails</span>
              <span className="px-4 py-2 rounded-full bg-white/5 text-white/70 text-xs font-medium cursor-pointer hover:bg-white/10 transition-colors hidden sm:block">Scenic Views</span>
            </div>
          </div>

          {/* Left Column (Charts & Map) */}
          <div className="col-span-1 lg:col-span-8 flex flex-col gap-6">
            
            {/* Charts Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Expense Chart (Line Chart) */}
              <div className="bg-[#26262A]/50 rounded-3xl p-5 border border-white/5 relative overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-white/90 text-sm font-medium">Expense <span className="italic opacity-60">Overview</span></span>
                  <Wallet className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <span className="text-3xl font-light tracking-tight text-white">$3,450</span>
                    <span className="text-[10px] text-white/40 block mt-1">Total Spent</span>
                  </div>
                  <div>
                    <span className="text-lg font-light text-white/80">91.2<span className="text-xs">%</span></span>
                    <span className="text-[10px] text-emerald-400 block mt-1">On Track</span>
                  </div>
                </div>
                {/* Fake Line Chart */}
                <div className="h-16 flex items-end gap-1 opacity-60">
                  {[40, 20, 50, 30, 60, 45, 70, 55, 80, 40, 60, 90, 75, 100, 60, 40, 50, 20].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500/50 to-transparent rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>

              {/* Budget Meter (Gauge/Doughnut) */}
              <div className="bg-[#26262A]/50 rounded-3xl p-5 border border-white/5 relative overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-white/90 text-sm font-medium">Budget <span className="italic opacity-60">Overview</span></span>
                  <Compass className="w-4 h-4 text-violet-400" />
                </div>
                <div className="relative flex justify-center items-center mt-2">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-white/10 stroke-current"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-violet-400 stroke-current"
                      strokeWidth="3"
                      strokeDasharray="76.4, 100"
                      fill="none"
                      strokeLinecap="round"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-3xl font-light text-white">76.4<span className="text-lg text-white/50">%</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Widget */}
            <div className="bg-[#26262A]/50 rounded-3xl overflow-hidden border border-white/5 h-64 relative">
              {/* Fake Map Background using css pattern */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 100%, 30px 30px, 30px 30px', backgroundColor: '#1A1A1D' }}></div>
              
              <div className="absolute top-4 left-4">
                <span className="text-white/90 text-sm font-medium">Explore Nearby</span>
              </div>

              {/* Fake Map Pins */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 animate-bounce">
                <MapPin className="w-8 h-8 drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
              </div>
              <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-violet-400 rounded-full border-2 border-white shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white shadow-[0_0_10px_rgba(16,185,129,0.8)]" />

              {/* Map Floating Cards Carousel (Bottom) */}
              <div className="absolute bottom-4 inset-x-0 flex justify-center gap-3 px-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`h-16 w-12 rounded-xl border border-white/20 overflow-hidden ${i === 3 ? 'scale-125 z-10 shadow-[0_0_20px_rgba(0,229,255,0.3)]' : 'opacity-60'}`} style={{ background: `linear-gradient(to bottom, rgba(66, 194, 255, ${0.1 * i}), rgba(168, 85, 247, ${0.1 * i}))` }}>
                    <div className="w-full h-full bg-white/5 backdrop-blur-sm" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Cards) */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
            
            {/* Destination Score / Highlight Card */}
            <div className="bg-gradient-to-br from-[#E28052] to-[#8C4A2D] rounded-3xl p-5 border border-white/10 flex-1 flex flex-col justify-end relative overflow-hidden group cursor-pointer shadow-xl">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="relative z-10">
                <h4 className="text-white text-lg font-medium tracking-tight">Tourists Admiring</h4>
                <p className="text-white/80 font-serif italic text-sm">Ancient Ruins</p>
              </div>
            </div>

            {/* Weather & Flight tracking row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#26262A]/50 rounded-2xl p-4 border border-white/5 flex flex-col justify-between">
                <CloudSun className="w-6 h-6 text-amber-400 mb-2" />
                <div>
                  <h5 className="text-white text-sm font-medium">Clear Sky</h5>
                  <p className="text-white/50 text-xs font-serif italic">Perfect Weather</p>
                </div>
              </div>
              <div className="bg-[#26262A]/50 rounded-2xl p-4 border border-white/5 flex flex-col justify-between">
                <Plane className="w-6 h-6 text-cyan-400 mb-2" />
                <div>
                  <h5 className="text-white text-sm font-medium">JL007</h5>
                  <p className="text-white/50 text-xs font-serif italic">On Time</p>
                </div>
              </div>
            </div>

            {/* Destination Card (Pyramids of Giza) */}
            <div className="bg-[#26262A]/80 rounded-3xl p-5 border border-white/5 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center z-10">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-400 shrink-0 shadow-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white text-base font-medium">Pyramids of <span className="font-serif italic">Giza</span></h4>
                  <p className="text-white/50 text-[10px] flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" /> Giza, Egypt
                  </p>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-white text-xs font-medium flex items-center gap-1">4.9 <Sparkles className="w-3 h-3 text-amber-400" /></span>
                  <span className="text-white/40 text-[10px]">Very Good</span>
                </div>
                <div className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span className="text-amber-500 text-[10px] font-medium">Guest Favorite</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-white text-xs font-medium">125</span>
                  <span className="text-white/40 text-[10px] font-serif italic">Reviews</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
