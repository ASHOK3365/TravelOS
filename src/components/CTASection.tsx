'use client';

import { motion } from 'framer-motion';
import { Navigation } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-10 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full rounded-[32px] overflow-hidden relative flex flex-col md:flex-row items-center p-8 md:p-12 shadow-xl border border-blue-100"
          style={{ background: 'linear-gradient(135deg, #F0F7FF 0%, #E0F2FE 100%)' }}
        >
          {/* Plane image background */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-left-bottom opacity-80 mix-blend-multiply"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop')" }}
          />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#E0F2FE] to-transparent" />

          {/* Left Icon */}
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md mb-6 md:mb-0 md:mr-8 shrink-0 z-10 relative">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <Navigation className="w-5 h-5 fill-white rotate-45 ml-[-2px] mt-[2px]" />
            </div>
          </div>

          {/* Text & Input */}
          <div className="flex-1 z-10 relative max-w-lg text-center md:text-left">
            <h2 className="text-[24px] font-bold text-slate-900 tracking-tight mb-2">Let's make your dream trip a reality</h2>
            <p className="text-[14px] text-slate-600 mb-6 font-medium">
              Get travel tips, exclusive offers, and AI recommendations straight to your inbox.
            </p>

            <div className="flex items-center bg-white rounded-full p-1.5 shadow-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-transparent border-none outline-none px-4 text-[14px] text-slate-700 placeholder-slate-400"
              />
              <button className="h-10 px-6 rounded-full bg-blue-500 text-white text-[13px] font-bold hover:bg-blue-600 transition-colors shadow-sm active:scale-95">
                Subscribe
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
