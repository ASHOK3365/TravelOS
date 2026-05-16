'use client';

import { motion } from 'framer-motion';
import { Send, Bot } from 'lucide-react';

export default function AIDemo() {
  return (
    <section className="py-20 bg-[#EAF4FF]/50">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-extrabold text-[#1A202C]">AI Assistant Demo</h2>
        </div>

        <div className="clay-card p-6 md:p-10 flex flex-col gap-6">
          
          {/* User Message */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-end"
          >
            <div className="bg-[#2F80ED] text-white px-6 py-4 rounded-2xl rounded-tr-sm shadow-md max-w-[80%]">
              <p className="text-[15px] font-medium">Plan a 7-day Italy trip</p>
            </div>
          </motion.div>

          {/* AI Response */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-start gap-4 max-w-[90%]"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#56CCF2] to-[#2F80ED] flex items-center justify-center text-white shrink-0 shadow-md">
              <Bot className="w-5 h-5" />
            </div>
            <div className="bg-white/80 border border-white px-6 py-5 rounded-2xl rounded-tl-sm shadow-md flex-1">
              <p className="text-[14px] text-[#4A5568] mb-4 font-medium">Here is a curated 7-day itinerary for your Italy trip:</p>
              
              <div className="space-y-3">
                {[
                  { d: 'Day 1', t: 'Rome' },
                  { d: 'Day 2', t: 'Florence' },
                  { d: 'Day 3', t: 'Venice' },
                  { d: 'Day 4', t: 'Milan' },
                  { d: 'Day 5', t: 'Lake Como' },
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + (i * 0.2) }}
                    key={item.d} 
                    className="flex gap-4 items-center bg-white/50 p-2 rounded-lg"
                  >
                    <span className="text-[12px] font-bold text-[#2F80ED] bg-[#EAF4FF] px-2 py-1 rounded-md">{item.d}</span>
                    <span className="text-[14px] font-bold text-[#1A202C]">{item.t}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Input */}
          <div className="mt-4 relative flex items-center bg-white rounded-full p-2 border border-[#CBD5E1]/50 shadow-inner">
            <input 
              type="text" 
              placeholder="Ask for hotel recommendations..." 
              className="flex-1 bg-transparent border-none outline-none pl-4 text-[#1A202C] placeholder-[#4A5568]/50 text-[14px]"
              disabled
            />
            <button className="w-10 h-10 clay-button rounded-full flex items-center justify-center shrink-0" disabled>
              <Send className="w-4 h-4 text-white ml-[-2px]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
