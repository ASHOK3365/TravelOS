'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const testimonials = [
  { name: "Sarah J.", location: "NYC", rating: 5, text: "TravelOS completely planned my 2-week Europe trip in seconds. The weather routing saved us from a massive storm in Rome!" },
  { name: "David M.", location: "London", rating: 5, text: "The multiplayer feature is a gamechanger. No more arguing in group chats; we just voted and the AI built the itinerary." },
  { name: "Elena R.", location: "Madrid", rating: 5, text: "Budget IQ kept my spending in check in Tokyo. I knew exactly how much I had left for shopping." },
  { name: "Chris P.", location: "Sydney", rating: 5, text: "I found hidden cafes in Paris I never would have known about without the AI recommendations." },
  { name: "Aisha T.", location: "Dubai", rating: 5, text: "The spatial UI feels like I'm using software from the future. Flawless experience." },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Loved by <span className="gradient-text">Travelers</span>
        </motion.h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex space-x-6 animate-marquee whitespace-nowrap pb-10">
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div 
              key={idx} 
              className="clay-card p-8 w-[400px] shrink-0 inline-flex flex-col gap-4 whitespace-normal"
            >
              <div className="flex gap-1 text-cyan-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Sparkles key={i} className="w-4 h-4" />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center font-bold text-white shadow-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-white/50">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add marquee keyframes to global CSS or inline style */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 2 - 12px)); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
