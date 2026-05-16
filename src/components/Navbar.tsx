'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#' },
  { label: 'Explore', href: '#features' },
  { label: 'Trips', href: '#ai-demo' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-500 ${
          scrolled
            ? 'bg-[#050816]/80 backdrop-blur-2xl border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#42C2FF] to-[#6E5BFF] flex items-center justify-center shadow-lg shadow-[#42C2FF]/20 group-hover:shadow-[#42C2FF]/40 transition-shadow">
              <span className="text-white font-bold text-sm">T</span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-[17px] font-semibold tracking-tight">
              Travel<span className="text-[#42C2FF]">OS</span>
            </span>
          </Link>

          {/* Center Nav Pills */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/[0.06] rounded-full px-1.5 py-1">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setActive(link.label);
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative px-5 py-2 text-[13px] font-medium transition-colors"
              >
                {active === link.label && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/[0.08] rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span className={`relative z-10 ${active === link.label ? 'text-white' : 'text-white/50 hover:text-white/80'}`}>
                  {link.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-5 py-2 text-[13px] font-medium text-white/60 hover:text-white transition-colors">
              Log in
            </button>
            <button className="px-6 py-2.5 text-[13px] font-semibold text-[#050816] bg-white rounded-full hover:bg-white/90 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-lg shadow-white/10">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-white/70" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-[#090B1A]/95 backdrop-blur-2xl border-b border-white/[0.06] p-6 flex flex-col gap-2 md:hidden"
          >
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => { setActive(link.label); setOpen(false); }}
                className="py-3 px-4 text-left text-[15px] font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-2xl transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-col gap-3">
              <button className="py-3 text-[15px] font-medium text-white/60">Log in</button>
              <button className="py-3 text-[15px] font-semibold bg-white text-black rounded-full">Get Started</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
