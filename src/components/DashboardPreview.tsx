'use client';

import { motion } from 'framer-motion';
import { Wallet, CloudSun, MapPin, TrendingUp } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Powerful Dashboard</h2>
          <p className="text-white/70 mt-4 max-w-xl mx-auto">Compact, intelligent widgets keeping you in control.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Budget Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-8 clay-card p-6 flex flex-col justify-between"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <span className="text-white/60 text-sm font-medium flex items-center gap-2 mb-2"><Wallet className="w-4 h-4" /> Trip Budget</span>
                <span className="text-4xl font-light">$2,840 <span className="text-lg text-white/40">/ $4,000</span></span>
              </div>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-full">On Track</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[71%] bg-gradient-to-r from-[#42C2FF] to-[#6E5BFF] rounded-full" />
            </div>
          </motion.div>

          {/* Weather Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-4 clay-card p-6 flex flex-col items-center justify-center text-center"
          >
            <CloudSun className="w-12 h-12 text-[#42C2FF] mb-4" />
            <span className="text-3xl font-light">22°C</span>
            <span className="text-sm text-white/60 mt-1">Kyoto · Perfect Conditions</span>
          </motion.div>

          {/* Map Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-7 clay-card h-48 relative overflow-hidden p-0"
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A855F7]" />
                <span className="text-sm font-medium">Live Route Preview</span>
              </div>
            </div>
          </motion.div>

          {/* Expense Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-5 clay-card p-6 flex flex-col"
          >
            <span className="text-white/60 text-sm font-medium flex items-center gap-2 mb-6"><TrendingUp className="w-4 h-4" /> Expenses</span>
            <div className="flex-1 flex items-end gap-2">
              {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                <div key={i} className="flex-1 bg-white/10 rounded-t-sm" style={{ height: `${h}%` }}>
                  <div className="w-full h-full bg-gradient-to-t from-[#6E5BFF]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
