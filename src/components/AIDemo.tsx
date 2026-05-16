'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, User } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AIDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      await new Promise(r => setTimeout(r, 1000));
      setStep(1); // user message
      await new Promise(r => setTimeout(r, 1000));
      setStep(2); // ai typing
      await new Promise(r => setTimeout(r, 2000));
      setStep(3); // ai response
    };
    sequence();
  }, []);

  return (
    <section className="py-32 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Real-Time Assistant</h2>
        </div>

        <div className="glass-panel rounded-[32px] p-6 md:p-10 relative overflow-hidden">
          <div className="flex flex-col gap-6 min-h-[400px]">
            
            <AnimatePresence>
              {step >= 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="flex gap-4 self-end max-w-[80%] flex-row-reverse"
                >
                  <div className="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-white/70" />
                  </div>
                  <div className="bg-white/10 border border-white/20 rounded-2xl rounded-tr-sm p-4">
                    <p className="text-sm md:text-base">Plan a 7 day Japan trip</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {step === 2 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex gap-4 max-w-[80%]"
                >
                  <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-[#42C2FF] to-[#6E5BFF] flex items-center justify-center shadow-lg shadow-[#42C2FF]/20">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-gradient-to-br from-[#42C2FF]/10 to-[#6E5BFF]/10 border border-[#42C2FF]/20 rounded-2xl rounded-tl-sm p-5 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#42C2FF] animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-[#42C2FF] animate-bounce [animation-delay:0.2s]" />
                      <span className="w-2 h-2 rounded-full bg-[#42C2FF] animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {step === 3 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="flex gap-4 max-w-[85%]"
                >
                  <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-[#42C2FF] to-[#6E5BFF] flex items-center justify-center shadow-lg shadow-[#42C2FF]/20">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-gradient-to-br from-[#42C2FF]/10 to-[#6E5BFF]/10 border border-[#42C2FF]/20 rounded-2xl rounded-tl-sm p-6 text-sm md:text-base flex flex-col gap-3">
                    <p className="font-semibold text-white">Here is your optimized itinerary:</p>
                    <div className="space-y-2 mt-2">
                      <div className="flex gap-3 items-center"><span className="text-[#42C2FF] font-medium w-16">Day 1</span> Tokyo</div>
                      <div className="flex gap-3 items-center"><span className="text-[#42C2FF] font-medium w-16">Day 2</span> Mount Fuji</div>
                      <div className="flex gap-3 items-center"><span className="text-[#42C2FF] font-medium w-16">Day 3</span> Kyoto</div>
                      <div className="flex gap-3 items-center"><span className="text-[#42C2FF] font-medium w-16">Day 4</span> Osaka</div>
                      <div className="flex gap-3 items-center"><span className="text-[#42C2FF] font-medium w-16">Day 5</span> Nara</div>
                      <div className="flex gap-3 items-center"><span className="text-[#42C2FF] font-medium w-16">Day 6</span> Hiroshima</div>
                      <div className="flex gap-3 items-center"><span className="text-[#42C2FF] font-medium w-16">Day 7</span> Tokyo shopping</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
