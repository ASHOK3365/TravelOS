'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, LayoutDashboard, Globe, Users, CreditCard, Info, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home', icon: Sparkles },
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/explore', label: 'Explore', icon: Globe },
  { href: '#trips', label: 'Trips', icon: Globe },
  { href: '/group', label: 'Group Travel', icon: Users },
  { href: '#pricing', label: 'Pricing', icon: CreditCard },
];

export default function Navbar() {
  const pathname = usePathname();
  const isInternal = pathname?.startsWith('/dashboard') || pathname?.startsWith('/group');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isInternal) return null;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 ${
        scrolled ? 'pt-4' : 'pt-8'
      }`}
    >
      <div 
        className={`relative max-w-[1200px] mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
          scrolled 
            ? 'bg-[#06070d]/70 backdrop-blur-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6),0_0_1px_1px_rgba(255,255,255,0.05)]' 
            : 'bg-white/[0.01] backdrop-blur-sm border border-white/5'
        }`}
      >
        {/* Subtle glowing border on scroll */}
        {scrolled && (
          <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none opacity-50" />
        )}
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline group relative z-10">
          <div className="relative w-9 h-9 rounded-xl flex items-center justify-center bg-white text-black transition-transform duration-500 group-hover:rotate-[15deg]">
            <Globe size={18} />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            Travel<span className="text-cyan-400">OS</span>
          </span>
        </Link>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 rounded-xl text-[13px] font-medium tracking-wide no-underline transition-all duration-300 group"
              >
                <span className={`relative z-10 flex items-center gap-2 ${isActive ? 'text-white' : 'text-white/50 group-hover:text-white'}`}>
                  {link.label}
                </span>
                {isActive && (
                  <div className="absolute inset-0 bg-white/5 rounded-xl border border-white/10" />
                )}
                {!isActive && (
                  <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 relative z-10">
          <Link href="/login" className="hidden sm:flex items-center text-[13px] font-bold text-white/70 hover:text-white transition-colors">
            Login
          </Link>
          <button className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-xl bg-white text-black text-[13px] font-bold transition-all hover:bg-cyan-400 hover:scale-[1.02] active:scale-[0.98]">
            Get Started
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`absolute top-full left-0 right-0 mt-4 md:hidden transition-all duration-500 origin-top ${
            mobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="bg-[#06070d]/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-white/70 hover:text-white"
              >
                <link.icon size={18} />
                <span className="text-sm font-medium">{link.label}</span>
              </Link>
            ))}
            <hr className="border-white/5 my-2" />
            <button className="w-full py-3 rounded-xl bg-white text-black text-sm font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
