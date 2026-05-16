'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    text: 'TravelOS completely transformed our family trip to Japan. The AI itinerary was flawless and saved us weeks of planning.',
    rating: 5
  },
  {
    name: 'Marcus Chen',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    text: 'The budget IQ widget is incredible. It kept us on track throughout our European tour without feeling restricted.',
    rating: 5
  },
  {
    name: 'Elena Rodriguez',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    text: 'Smart routing saved us hours of commuting in Paris. We managed to see so much more because of the live updates.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#EAF4FF]/30">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1A202C] tracking-tight">
            Loved by Travelers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="clay-card p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <h4 className="text-[15px] font-bold text-[#1A202C]">{t.name}</h4>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#F9A826] fill-[#F9A826]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[14px] text-[#4A5568] leading-relaxed font-medium">"{t.text}"</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
