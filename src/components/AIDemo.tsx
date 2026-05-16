'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const itinerary = [
  { day: 1, city: 'Tokyo',          detail: 'Shibuya Crossing, Meiji Shrine, Harajuku' },
  { day: 2, city: 'Mount Fuji',     detail: 'Sunrise hike, Hakone hot springs' },
  { day: 3, city: 'Kyoto',          detail: 'Fushimi Inari, Arashiyama bamboo grove' },
  { day: 4, city: 'Osaka',          detail: 'Dotonbori street food, Osaka Castle' },
  { day: 5, city: 'Nara',           detail: 'Todai-ji Temple, deer park' },
  { day: 6, city: 'Hiroshima',      detail: 'Peace Memorial, Miyajima Island' },
  { day: 7, city: 'Tokyo shopping', detail: 'Ginza, Akihabara, Tsukiji outer market' },
];

export default function AIDemo() {
  const [phase, setPhase] = useState<'idle' | 'user' | 'typing' | 'response'>('idle');
  const [visibleDays, setVisibleDays] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const seq = async () => {
      await wait(800);
      setPhase('user');
      await wait(1200);
      setPhase('typing');
      await wait(2000);
      setPhase('response');

      // Stagger day reveals
      for (let i = 1; i <= itinerary.length; i++) {
        await wait(300);
        setVisibleDays(i);
      }
    };
    seq();
  }, []);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
  }, [phase, visibleDays]);

  return (
    <section id="ai-demo" className="relative z-10 py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight">
            AI Travel <span className="gradient-text">Assistant</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg">Ask anything. Get a complete trip in seconds.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[32px] overflow-hidden"
        >
          {/* Header bar */}
          <div className="flex items-center gap-3 px-8 py-5 border-b border-white/[0.06]">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#42C2FF] to-[#6E5BFF] flex items-center justify-center shadow-md shadow-[#42C2FF]/20">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-[14px] font-semibold text-white/80">TravelOS Assistant</span>
            <span className="ml-auto flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Online
            </span>
          </div>

          {/* Chat area */}
          <div ref={chatRef} className="p-8 space-y-6 min-h-[420px] max-h-[520px] overflow-y-auto">
            <AnimatePresence>
              {/* User message */}
              {(phase === 'user' || phase === 'typing' || phase === 'response') && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end"
                >
                  <div className="max-w-[75%] px-6 py-4 rounded-3xl rounded-tr-lg bg-white/[0.08] border border-white/[0.1]">
                    <p className="text-[15px]">Plan a 7 day Japan trip</p>
                  </div>
                </motion.div>
              )}

              {/* Typing indicator */}
              {phase === 'typing' && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-[#42C2FF] to-[#6E5BFF] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="px-6 py-4 rounded-3xl rounded-tl-lg bg-[#42C2FF]/[0.06] border border-[#42C2FF]/[0.1]">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#42C2FF] animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-[#42C2FF] animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 rounded-full bg-[#42C2FF] animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* AI response */}
              {phase === 'response' && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-[#42C2FF] to-[#6E5BFF] flex items-center justify-center shadow-lg shadow-[#42C2FF]/20">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="max-w-[85%] px-6 py-5 rounded-3xl rounded-tl-lg bg-[#42C2FF]/[0.06] border border-[#42C2FF]/[0.1]">
                    <p className="text-[14px] font-semibold text-white mb-4">Here&apos;s your optimized 7-day itinerary:</p>
                    <div className="space-y-2.5">
                      {itinerary.slice(0, visibleDays).map((item) => (
                        <motion.div
                          key={item.day}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex gap-4 items-baseline"
                        >
                          <span className="text-[#42C2FF] font-bold text-[13px] w-14 shrink-0">Day {item.day}</span>
                          <div>
                            <span className="text-white font-medium text-[14px]">{item.city}</span>
                            <span className="text-white/35 text-[13px] ml-2">{item.detail}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
