'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="cta-section" className="relative overflow-hidden bg-[#06070d] flex items-center justify-center min-h-[90vh]">
      
      {/* ── The Cinematic Core ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] bg-gradient-to-tr from-cyan-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-white/5 rounded-full blur-[80px] mix-blend-plus-lighter" />
        
        {/* Holographic Orbit Rings */}
        <div className="absolute w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full border border-cyan-500/10 animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full border border-purple-500/10 animate-[spin_40s_linear_infinite_reverse] border-dashed" />
      </div>

      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 text-center">
        
        {/* Floating Orb Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,229,255,0.2)] mb-12 animate-float">
          <Sparkles className="w-10 h-10 text-cyan-400" />
        </div>

        {/* Massive Typography */}
        <h2 className="text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] font-black leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-8">
          Step Into The <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_40px_rgba(0,229,255,0.4)]">
            Future of Travel
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed mb-16">
          Join thousands of travelers experiencing the ultimate AI-native journey planner. No grid, no limits.
        </p>

        {/* Cinematic Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/dashboard" className="group relative px-10 py-5 bg-white rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(0,229,255,0.4)] transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-3 text-lg md:text-xl font-bold text-black group-hover:text-white transition-colors duration-500 tracking-wide">
              Launch AI TravelOS <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
