import Link from 'next/link';
import { Globe, Users, Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-20 pb-10 mt-20 z-10 bg-black/50 backdrop-blur-3xl">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 no-underline group mb-4">
              <div className="relative w-8 h-8 rounded-xl flex items-center justify-center bg-white text-black transition-transform group-hover:rotate-[15deg]">
                <Globe size={16} />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                Travel<span className="text-cyan-400">OS</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm max-w-xs">
              The world's first AI-powered Travel Operating System. Design your next journey with intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">AI Itinerary</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Budget IQ</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Smart Routing</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Multiplayer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Privacy</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-white/40 text-sm">© TravelOS AI. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/40">
            <Link href="#" className="hover:text-white transition-colors"><Globe size={18} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Users size={18} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Compass size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
