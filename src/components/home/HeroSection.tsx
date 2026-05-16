'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Send, Sparkles, MapPin, Navigation, Compass, Star } from 'lucide-react';
import Link from 'next/link';

const suggestions = [
  "Japan trip",
  "Beach vacation",
  "Luxury travel",
  "Adventure trek",
  "Adventure weekend in Ladakh with trekking routes..."
];

const pills = [
  { icon: '🏖', label: 'Beach', position: { top: '10%', left: '10%' }, delay: 0 },
  { icon: '⛰', label: 'Mountains', position: { top: '20%', right: '5%' }, delay: 0.2 },
  { icon: '🏛', label: 'Cultural', position: { bottom: '25%', left: '0%' }, delay: 0.4 },
  { icon: '✨', label: 'Luxury', position: { bottom: '15%', right: '15%' }, delay: 0.6 },
  { icon: '🌆', label: 'Tokyo', position: { top: '40%', left: '-5%' }, delay: 0.8 },
  { icon: '🗼', label: 'Paris', position: { top: '50%', right: '-5%' }, delay: 1.0 },
  { icon: '🏙', label: 'NYC', position: { bottom: '5%', left: '30%' }, delay: 1.2 },
  { icon: '🌇', label: 'Dubai', position: { top: '5%', right: '35%' }, delay: 1.4 },
];

export default function HeroSection() {
  const [suggestionIndex, setSuggestionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSuggestionIndex((prev) => (prev + 1) % suggestions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Floating spatial background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        
        {/* Subtle starfield */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-white/80">✦ AI Powered Travel Intelligence</span>
            </div>

            <h1 className="hero-title font-bold tracking-tight">
              Your Next Trip,<br />
              <span className="gradient-text">Designed by AI</span>
            </h1>

            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              Describe your dream trip and AI creates personalized itineraries, smart budgeting, live weather insights and optimized routes instantly.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary hover:scale-105 transition-transform">
                Start Planning
              </button>
              <button className="btn-secondary hover:scale-105 transition-transform">
                Explore Destinations
              </button>
            </div>

            {/* AI Prompt Input */}
            <div className="mt-8 relative clay-card p-2 pr-4 flex items-center gap-3">
              <div className="flex gap-2">
                <button className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <Mic className="w-5 h-5 text-cyan-400" />
                </button>
              </div>
              
              <div className="flex-1 relative h-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={suggestionIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-white/50 text-sm absolute inset-0 flex items-center"
                  >
                    {suggestions[suggestionIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <button className="p-3 bg-gradient-accent rounded-full hover:scale-105 transition-transform shadow-lg">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center items-center lg:h-[600px]"
          >
            {/* 3D spatial globe */}
            <div className="globe-container">
              <div className="globe" />
              <div className="globe-ring" />
              <div className="globe-ring" />
              <div className="globe-ring" />
              
              {/* Floating destination pills */}
              {pills.map((pill, idx) => (
                <motion.div
                  key={idx}
                  className="absolute chip clay-card border-none bg-white/10"
                  style={pill.position as any}
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: pill.delay
                  }}
                >
                  <span className="text-lg">{pill.icon}</span>
                  <span className="text-sm font-medium">{pill.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
