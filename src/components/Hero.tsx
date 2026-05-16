'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mic, ArrowRight } from 'lucide-react';

const suggestions = ['Japan trip', 'Beach vacation', 'Luxury travel', 'Adventure trek'];

const pills = [
  { emoji: '🏖', label: 'Beach',     angle: 0 },
  { emoji: '🌆', label: 'Tokyo',     angle: 90 },
  { emoji: '✨', label: 'Luxury',    angle: 180 },
  { emoji: '⛰',  label: 'Mountains', angle: 270 },
];

function StarField() {
  const stars = useRef(
    Array.from({ length: 80 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 2,
    }))
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            opacity: 0.15,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);

  // Typewriter effect for suggestions
  useEffect(() => {
    const text = suggestions[activeIdx];
    let charIdx = 0;
    setDisplayText('');
    setTyping(true);

    const typeInterval = setInterval(() => {
      charIdx++;
      setDisplayText(text.slice(0, charIdx));
      if (charIdx >= text.length) {
        clearInterval(typeInterval);
        setTyping(false);
        setTimeout(() => {
          setActiveIdx((p) => (p + 1) % suggestions.length);
        }, 2200);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [activeIdx]);

  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      <StarField />

      {/* Ambient blobs */}
      <div className="absolute top-[20%] left-[15%] w-[600px] h-[600px] rounded-full bg-[#6E5BFF]/[0.07] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#42C2FF]/[0.06] blur-[130px] pointer-events-none" />
      <div className="absolute top-[60%] left-[50%] w-[300px] h-[300px] rounded-full bg-[#A855F7]/[0.05] blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* ─── LEFT (55%) ─── */}
          <div className="w-full lg:w-[55%] space-y-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl"
            >
              <Sparkles className="w-4 h-4 text-[#42C2FF]" />
              <span className="text-[13px] font-medium text-white/70">AI Powered Travel Intelligence</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-extrabold tracking-tight leading-[0.92]"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.2rem)' }}
            >
              Your Next Trip,
              <br />
              <span className="gradient-text">Designed by AI</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-white/55 leading-relaxed max-w-[520px]"
            >
              Describe your dream destination and AI instantly generates personalized itineraries, optimized routes, weather intelligence and smart budgeting.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button className="group h-[52px] px-8 rounded-full bg-white text-[#050816] text-[15px] font-semibold flex items-center gap-2 hover:scale-[1.04] active:scale-[0.97] transition-all shadow-xl shadow-white/10">
                Start Planning
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="h-[52px] px-8 rounded-full bg-white/[0.04] border border-white/[0.1] text-white text-[15px] font-medium hover:bg-white/[0.08] hover:scale-[1.03] active:scale-[0.97] transition-all">
                Explore Destinations
              </button>
            </motion.div>

            {/* AI Prompt Bar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="w-full max-w-[540px]"
            >
              <div className="relative h-[60px] rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-2xl flex items-center pl-6 pr-2 gap-3 shadow-2xl shadow-black/20">
                <div className="flex-1 overflow-hidden">
                  <span className="text-[14px] text-white/40">
                    {displayText}
                    {typing && <span className="inline-block w-[2px] h-[16px] bg-[#42C2FF] ml-0.5 animate-pulse align-middle" />}
                  </span>
                </div>
                <button className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-colors">
                  <Mic className="w-[18px] h-[18px]" />
                </button>
                <button className="shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-[#42C2FF] to-[#6E5BFF] flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-[#42C2FF]/25">
                  <ArrowRight className="w-[18px] h-[18px]" />
                </button>
              </div>
              <div className="flex items-center gap-3 mt-4 ml-2">
                <span className="text-[12px] text-white/25 font-medium">Try:</span>
                {suggestions.map((s, i) => (
                  <button
                    key={s}
                    onClick={() => setActiveIdx(i)}
                    className={`text-[12px] font-medium transition-colors ${
                      i === activeIdx ? 'text-[#42C2FF]' : 'text-white/25 hover:text-white/40'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ─── RIGHT (45%) — Globe ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[45%] flex items-center justify-center"
          >
            <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px]">
              {/* Orbit rings */}
              <div className="absolute inset-[-16px] border border-white/[0.04] rounded-full" />
              <div className="absolute inset-[-40px] border border-white/[0.03] rounded-full" />
              <div className="absolute inset-[-70px] border border-dashed border-white/[0.03] rounded-full" />

              {/* Globe body */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#42C2FF]/20 via-[#6E5BFF]/15 to-[#A855F7]/10 animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
                <div className="absolute inset-0 border border-white/[0.1] rounded-full" />
                {/* Grid lines */}
                <div className="absolute inset-[20%] border border-white/[0.04] rounded-full" />
                <div className="absolute inset-[40%] border border-white/[0.04] rounded-full" />
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.04]" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-white/[0.04]" />
              </div>

              {/* Glow */}
              <div className="absolute inset-[-20px] rounded-full bg-[#42C2FF]/[0.06] blur-[40px] animate-[glow-pulse_4s_ease-in-out_infinite]" />

              {/* Floating pills — exactly 4 */}
              {pills.map((pill, i) => {
                const rad = (pill.angle * Math.PI) / 180;
                const orbitR = 55; // % from center
                const cx = 50 + orbitR * Math.cos(rad);
                const cy = 50 + orbitR * Math.sin(rad);
                return (
                  <motion.div
                    key={pill.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.15 }}
                    className="absolute z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-xl text-[13px] font-medium whitespace-nowrap"
                    style={{
                      left: `${cx}%`,
                      top: `${cy}%`,
                      transform: 'translate(-50%, -50%)',
                      animation: `float ${4 + i}s ease-in-out ${i * 0.5}s infinite`,
                    }}
                  >
                    <span>{pill.emoji}</span>
                    <span className="text-white/80">{pill.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
