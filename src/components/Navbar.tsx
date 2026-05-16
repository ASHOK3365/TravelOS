'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = ['Explore', 'Trips', 'AI Planner', 'Pricing'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 inset-x-0 z-50 px-4 md:px-8 flex justify-center">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-6xl glass-nav rounded-full px-6 py-3 flex items-center justify-between"
      >
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-[#56CCF2] to-[#2F80ED] rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-[#2F80ED]/30">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <span className="text-[18px] font-extrabold text-[#1A202C] tracking-tight">TravelOS</span>
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[14px] font-bold text-[#2F80ED] relative">
            Home
            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#2F80ED] rounded-full" />
          </Link>
          {navLinks.map(link => (
            <Link key={link} href="#" className="text-[14px] font-semibold text-[#4A5568] hover:text-[#1A202C] transition-colors relative group">
              {link}
              <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#2F80ED] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-5">
          <Link href="/login" className="text-[14px] font-semibold text-[#4A5568] hover:text-[#1A202C] transition-colors">
            Login
          </Link>
          <button className="px-6 py-2.5 clay-button text-[14px] font-bold">
            Get Started
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-[#1A202C]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[76px] inset-x-4 clay-card p-4 flex flex-col gap-2 md:hidden z-40">
          <Link href="/" className="p-3 bg-[#EAF4FF] text-[#2F80ED] rounded-xl text-[14px] font-bold">Home</Link>
          {navLinks.map(link => (
            <Link key={link} href="#" className="p-3 text-[14px] font-semibold text-[#4A5568] hover:bg-black/5 rounded-xl transition-colors">{link}</Link>
          ))}
          <div className="h-px bg-black/5 my-2" />
          <Link href="/login" className="p-3 text-[14px] font-semibold text-[#4A5568]">Login</Link>
          <button className="p-3 clay-button text-[14px] font-bold text-center mt-2">Get Started</button>
        </div>
      )}
    </div>
  );
}
