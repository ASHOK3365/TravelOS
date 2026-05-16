'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6">
      {/* Background */}
      <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] rounded-full bg-[#6E5BFF]/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] rounded-full bg-[#42C2FF]/[0.05] blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[420px] relative z-10"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 mb-10">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#42C2FF] to-[#6E5BFF] flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="text-[17px] font-semibold tracking-tight">Travel<span className="text-[#42C2FF]">OS</span></span>
        </Link>

        <h1 className="text-3xl font-bold tracking-tight mb-2">
          {mode === 'login' ? 'Welcome back' : 'Create account'}
        </h1>
        <p className="text-white/40 text-[15px] mb-10">
          {mode === 'login' ? 'Log in to access your trips and AI assistant.' : 'Start planning your next adventure with AI.'}
        </p>

        <div className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-[12px] font-medium text-white/40 mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full h-13 bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 text-[15px] text-white placeholder-white/20 outline-none focus:border-[#42C2FF]/30 transition-colors"
              />
            </div>
          )}

          <div>
            <label className="block text-[12px] font-medium text-white/40 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full h-13 bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 text-[15px] text-white placeholder-white/20 outline-none focus:border-[#42C2FF]/30 transition-colors"
            />
          </div>

          <div>
            <label className="block text-[12px] font-medium text-white/40 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full h-13 bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 text-[15px] text-white placeholder-white/20 outline-none focus:border-[#42C2FF]/30 transition-colors"
            />
          </div>

          <button className="w-full h-13 rounded-2xl bg-white text-[#050816] text-[15px] font-semibold flex items-center justify-center gap-2 hover:bg-white/90 hover:scale-[1.01] active:scale-[0.99] transition-all mt-6">
            {mode === 'login' ? 'Log in' : 'Create account'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
            className="text-[13px] text-white/40 hover:text-white/70 transition-colors"
          >
            {mode === 'login' ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
          </button>
        </div>
      </motion.div>
    </main>
  );
}
