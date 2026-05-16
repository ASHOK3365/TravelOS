'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#' },
  { label: 'Explore', href: '#explore' },
  { label: 'Trips', href: '#trips' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 inset-x-0 z-50 h-[72px] transition-all duration-300 ${scrolled ? 'bg-[#050816]/70 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center transition-transform group-hover:rotate-12">
            <Globe size={18} />
          </div>
          <span className="font-bold text-lg tracking-tight">Travel<span className="text-[#42C2FF]">OS</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-2 bg-white/5 rounded-full px-2 py-1 border border-white/5">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => setActive(link.label)}
              className="relative px-4 py-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {active === link.label && (
                <motion.div 
                  layoutId="activeNav" 
                  className="absolute inset-0 bg-white/10 rounded-full" 
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="#login" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Login
          </Link>
          <button className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 hover:scale-105 transition-all">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </motion.nav>
  );
}
