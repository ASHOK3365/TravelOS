import Link from 'next/link';

const columns = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security'],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.04] mt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#42C2FF] to-[#6E5BFF] flex items-center justify-center">
                <span className="text-white font-bold text-xs">T</span>
              </div>
              <span className="text-[16px] font-semibold tracking-tight">
                Travel<span className="text-[#42C2FF]">OS</span>
              </span>
            </Link>
            <p className="text-white/30 text-[14px] leading-relaxed max-w-[280px]">
              The world&apos;s first AI-powered Travel Operating System. Plan smarter, travel better.
            </p>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-semibold text-white/60 mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[13px] text-white/30 hover:text-white/70 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/20">
            &copy; {new Date().getFullYear()} TravelOS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Twitter', 'GitHub', 'LinkedIn'].map((s) => (
              <Link key={s} href="#" className="text-[12px] text-white/20 hover:text-white/50 transition-colors">
                {s}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
