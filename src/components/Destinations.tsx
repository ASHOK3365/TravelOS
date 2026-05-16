'use client';

import { Star } from 'lucide-react';

const destinations = [
  { name: 'Santorini', img: 'https://images.unsplash.com/photo-1613395877344-13d4a3215509?q=80&w=600&auto=format&fit=crop', rating: '4.8' },
  { name: 'Kyoto', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop', rating: '4.9' },
  { name: 'Swiss Alps', img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=600&auto=format&fit=crop', rating: '4.8' },
  { name: 'Bali', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop', rating: '4.7' },
  { name: 'Paris', img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=600&auto=format&fit=crop', rating: '4.8' },
];

export default function Destinations() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="text-[28px] font-extrabold text-[#1A202C]">Popular Destinations</h2>
      </div>

      <div className="flex gap-6 overflow-x-auto px-6 pb-12 scrollbar-hide snap-x">
        {destinations.map((d) => (
          <div key={d.name} className="w-[300px] h-[400px] shrink-0 rounded-[32px] overflow-hidden relative shadow-[8px_8px_24px_rgba(0,0,0,0.1)] snap-start group cursor-pointer border-4 border-white">
            <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <h3 className="text-white font-extrabold text-[22px] tracking-tight">{d.name}</h3>
              <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full flex items-center gap-1.5 border border-white/30">
                <Star className="w-3.5 h-3.5 text-[#F9A826] fill-[#F9A826]" />
                <span className="text-white text-[13px] font-bold">{d.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
