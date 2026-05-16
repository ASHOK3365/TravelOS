'use client';

import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Sarah Jenkins',
    role: 'Digital Nomad',
    text: 'TravelOS planned my 2-week Europe trip in seconds. The weather routing saved us from a massive storm in Rome.',
    initials: 'SJ',
    gradient: 'from-[#42C2FF] to-[#6E5BFF]',
  },
  {
    name: 'David Chen',
    role: 'Photographer',
    text: 'The group planning feature is a gamechanger. No more arguing — we voted and AI built the perfect itinerary.',
    initials: 'DC',
    gradient: 'from-[#6E5BFF] to-[#A855F7]',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Adventure Traveler',
    text: 'Budget IQ kept my spending in check in Tokyo. I knew exactly how much I had left every single day.',
    initials: 'ER',
    gradient: 'from-[#A855F7] to-[#42C2FF]',
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-10 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight">
            Loved by <span className="gradient-text">Travelers</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg">Real stories from real adventurers.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="clay-card p-8 flex flex-col justify-between"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[#42C2FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/60 leading-relaxed text-[15px] flex-1">&ldquo;{r.text}&rdquo;</p>

              {/* Profile */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/[0.06]">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${r.gradient} flex items-center justify-center text-[13px] font-bold text-white shadow-lg`}>
                  {r.initials}
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold">{r.name}</h4>
                  <p className="text-[12px] text-white/35">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
