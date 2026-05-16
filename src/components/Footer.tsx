import Link from 'next/link';
import { Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Newsletter & Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-slate-100 pb-16 mb-16">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-[#56CCF2] to-[#2F80ED] rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <span className="text-[18px] font-extrabold text-[#1A202C] tracking-tight">TravelOS</span>
            </Link>
            <p className="text-[14px] text-[#4A5568] font-medium max-w-sm">
              The world's first AI-powered operating system for travel. Plan smarter, explore further.
            </p>
          </div>
          
          <div className="clay-card p-6 bg-[#F7FAFC]/50 flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full">
              <h4 className="text-[15px] font-bold text-[#1A202C] mb-1">Join the Newsletter</h4>
              <p className="text-[13px] text-[#4A5568]">Get exclusive travel tips and AI insights.</p>
            </div>
            <div className="flex items-center bg-white rounded-full p-1.5 shadow-sm w-full md:w-auto">
              <input type="email" placeholder="Email address" className="bg-transparent border-none outline-none px-4 text-[13px] w-full md:w-40" />
              <button className="w-9 h-9 clay-button rounded-full flex items-center justify-center">
                <Send className="w-4 h-4 ml-[-2px] text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="text-[14px] font-bold text-[#1A202C] mb-4">Product</h4>
            <ul className="space-y-3">
              {['Explore', 'AI Planner', 'Trips', 'Pricing'].map(l => <li key={l}><Link href="#" className="text-[13px] text-[#4A5568] hover:text-[#2F80ED] font-medium">{l}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-[#1A202C] mb-4">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Press'].map(l => <li key={l}><Link href="#" className="text-[13px] text-[#4A5568] hover:text-[#2F80ED] font-medium">{l}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-[#1A202C] mb-4">Resources</h4>
            <ul className="space-y-3">
              {['Help Center', 'Guides', 'Travel Safety', 'Partner API'].map(l => <li key={l}><Link href="#" className="text-[13px] text-[#4A5568] hover:text-[#2F80ED] font-medium">{l}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-[#1A202C] mb-4">Legal</h4>
            <ul className="space-y-3">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Security'].map(l => <li key={l}><Link href="#" className="text-[13px] text-[#4A5568] hover:text-[#2F80ED] font-medium">{l}</Link></li>)}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[13px] text-[#4A5568] font-medium">
          <p>© 2026 TravelOS. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {['Twitter', 'Instagram', 'LinkedIn'].map(s => (
              <a key={s} href="#" className="hover:text-[#2F80ED]">{s}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
