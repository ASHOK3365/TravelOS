'use client';

import Link from 'next/link';
import { Moon, ChevronDown, Menu } from 'lucide-react';
import { useState } from 'react';

const navItems = ['Explore', 'Trips', 'AI Planner', 'Pricing'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center">
      <nav className="w-full max-w-5xl glass-nav rounded-full px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <span className="text-[17px] font-bold text-slate-900 tracking-tight">TravelOS</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[13px] font-semibold">
            Home
          </Link>
          {navItems.map(item => (
            <Link key={item} href="#" className="text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors">
              {item}
            </Link>
          ))}
          <button className="flex items-center gap-1 text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Resources <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors">
            <Moon className="w-4 h-4" />
          </button>
          <button className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-[13px] font-semibold shadow-md shadow-blue-500/20 transition-all active:scale-95">
            Get Started
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" />
        </button>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[70px] inset-x-4 bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-3 md:hidden">
          <Link href="/" className="p-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold">Home</Link>
          {navItems.map(item => (
            <Link key={item} href="#" className="p-2 text-sm font-medium text-slate-600">{item}</Link>
          ))}
        </div>
      )}
    </div>
  );
}
