'use client';

import { motion } from 'framer-motion';
import { Users, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LiveDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1000); // Show User msg
    const timer2 = setTimeout(() => setStep(2), 2500); // Show AI thinking
    const timer3 = setTimeout(() => setStep(3), 4500); // Show AI response
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Real-Time <span className="gradient-text">AI Planning</span>
          </motion.h2>
        </div>

        <div className="clay-card p-6 md:p-10 relative">
          <div className="flex flex-col gap-6">
            {/* User Message */}
            <AnimatePresenceWrapper>
              {step >= 1 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  className="flex gap-4 self-end flex-row-reverse max-w-[80%]"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-white/70" />
                  </div>
                  <div className="chat-bubble-user p-4 text-sm md:text-base">
                    I want a 5 day Japan trip focusing on culture and nature.
                  </div>
                </motion.div>
              )}
            </AnimatePresenceWrapper>

            {/* AI Thinking */}
            <AnimatePresenceWrapper>
              {step === 2 && (
                <motion.div 
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex gap-4 max-w-[80%]"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="chat-bubble-ai p-4 flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresenceWrapper>

            {/* AI Response */}
            <AnimatePresenceWrapper>
              {step >= 3 && (
                <motion.div 
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  className="flex gap-4 max-w-[85%]"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="chat-bubble-ai p-5 text-sm md:text-base flex flex-col gap-3">
                    <p className="font-semibold text-cyan-100">Here is your curated Japan itinerary:</p>
                    <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                      <span className="text-cyan-400 font-bold block mb-1">Day 1: Tokyo</span>
                      <p className="text-white/70 text-sm">Arrival, Shinjuku exploration, and dinner at an Izakaya.</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                      <span className="text-cyan-400 font-bold block mb-1">Day 2: Mount Fuji</span>
                      <p className="text-white/70 text-sm">Day trip to Hakone, ropeway views, and hot springs.</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                      <span className="text-cyan-400 font-bold block mb-1">Day 3: Kyoto</span>
                      <p className="text-white/70 text-sm">Shinkansen ride, Kinkaku-ji (Golden Pavilion), and Gion district.</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                      <span className="text-cyan-400 font-bold block mb-1">Day 4: Osaka</span>
                      <p className="text-white/70 text-sm">Street food tour in Dotonbori and Osaka Castle.</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                      <span className="text-cyan-400 font-bold block mb-1">Day 5: Nara</span>
                      <p className="text-white/70 text-sm">Nara Park deer feeding and Todai-ji Temple.</p>
                    </div>
                    <button className="btn-primary mt-2 text-sm py-2 w-full justify-center">View Full Itinerary</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresenceWrapper>

          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatePresenceWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
