'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "Digital Nomad",
    text: "TravelOS completely planned my 2-week Europe trip in seconds. The weather routing saved us from a massive storm in Rome!",
    rating: 5,
    avatar: "S"
  },
  {
    name: "David Chen",
    role: "Photographer",
    text: "The multiplayer feature is a gamechanger. No more arguing in group chats; we just voted and the AI built the itinerary.",
    rating: 5,
    avatar: "D"
  },
  {
    name: "Elena Rodriguez",
    role: "Adventure Traveler",
    text: "Budget IQ kept my spending in check in Tokyo. I knew exactly how much I had left for shopping and dining every single day.",
    rating: 5,
    avatar: "E"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Loved by Travelers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="clay-card p-8 flex flex-col justify-between min-h-[250px]"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#42C2FF] text-[#42C2FF]" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed">"{review.text}"</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#42C2FF] to-[#6E5BFF] flex items-center justify-center font-bold text-white shadow-lg">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{review.name}</h4>
                  <p className="text-xs text-white/50">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
