'use client';

import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

const dests = [
  { name: 'Santorini, Greece', rating: '4.8', img: 'https://images.unsplash.com/photo-1613395877344-13d4a3215509?q=80&w=400&auto=format&fit=crop' },
  { name: 'Kyoto, Japan', rating: '4.9', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=400&auto=format&fit=crop' },
  { name: 'Swiss Alps', rating: '4.8', img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=400&auto=format&fit=crop' },
  { name: 'Bali, Indonesia', rating: '4.7', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=400&auto=format&fit=crop' },
  { name: 'Paris, France', rating: '4.8', img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=400&auto=format&fit=crop' },
];

export default function Destinations() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[22px] font-bold text-slate-900 tracking-tight">Popular Destinations</h2>
          <button className="flex items-center gap-1.5 text-[13px] font-semibold text-blue-600 hover:text-blue-700 transition-colors">
            View all <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x">
            {dests.map((d, i) => (
              <motion.div 
                key={d.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-[280px] h-[200px] shrink-0 rounded-[24px] overflow-hidden relative shadow-lg snap-start group"
              >
                <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between">
                  <h3 className="text-white font-bold text-[15px]">{d.name}</h3>
                  <div className="px-2 py-1 bg-white/20 backdrop-blur-md rounded-md flex items-center gap-1 border border-white/20">
                    <Star className="w-3 h-3 text-white fill-white" />
                    <span className="text-white text-[11px] font-bold">{d.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right fade & arrow */}
          <div className="absolute right-0 top-0 bottom-6 w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent pointer-events-none flex items-center justify-end pr-2">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100 pointer-events-auto hover:scale-105 transition-transform text-slate-400 hover:text-blue-500">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
