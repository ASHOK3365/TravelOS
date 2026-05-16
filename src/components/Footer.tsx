import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <span className="text-[17px] font-bold text-slate-900 tracking-tight">TravelOS</span>
            </Link>
            <p className="text-[13px] text-slate-500 font-medium leading-relaxed max-w-[220px] mb-6">
              AI-powered travel intelligence for modern explorers.
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex items-center gap-4">
              {['Twitter', 'Instagram', 'YouTube', 'LinkedIn'].map((s) => (
                <div key={s} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors cursor-pointer text-[10px] font-bold">
                  {s[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[13px] font-bold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-3">
              {['Explore', 'AI Planner', 'Trips', 'Pricing'].map((l) => (
                <li key={l}><Link href="#" className="text-[13px] text-slate-500 hover:text-blue-600 font-medium">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Press'].map((l) => (
                <li key={l}><Link href="#" className="text-[13px] text-slate-500 hover:text-blue-600 font-medium">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-bold text-slate-900 mb-4">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((l) => (
                <li key={l}><Link href="#" className="text-[13px] text-slate-500 hover:text-blue-600 font-medium">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[13px] font-bold text-slate-900 mb-4">Download the App</h4>
            <p className="text-[12px] text-slate-500 font-medium mb-4">Available on iOS & Android</p>
            <div className="flex flex-col gap-3">
              <button className="h-10 px-4 bg-slate-900 text-white rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
                <span className="text-[10px]">Download on the</span>
                <span className="text-[13px] font-bold block">App Store</span>
              </button>
              <button className="h-10 px-4 bg-slate-900 text-white rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
                <span className="text-[10px]">GET IT ON</span>
                <span className="text-[13px] font-bold block">Google Play</span>
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-100 text-center">
          <p className="text-[12px] text-slate-400 font-medium">© 2025 TravelOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
