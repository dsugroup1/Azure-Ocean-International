import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center bg-[#061826] text-center px-6 relative overflow-hidden" aria-label="Page not found">
      
      {/* Background route graphic */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 800 400" fill="none" className="w-full max-w-4xl">
          <path d="M0 200 L200 100 L400 300 L500 200 L800 250" stroke="#22D3EE" strokeWidth="2" strokeDasharray="10 10" />
          <circle cx="200" cy="100" r="4" fill="#22D3EE" />
          <circle cx="400" cy="300" r="4" fill="#22D3EE" />
          <circle cx="500" cy="200" r="4" fill="#22D3EE" />
          {/* Dead end indicator */}
          <line x1="790" y1="240" x2="810" y2="260" stroke="#EF4444" strokeWidth="4" />
          <line x1="810" y1="240" x2="790" y2="260" stroke="#EF4444" strokeWidth="4" />
        </svg>
      </div>

      <div className="relative z-10">
        <h1 
          className="text-[8rem] md:text-[12rem] font-display text-[#0A2438] leading-none mb-4 select-none drop-shadow-2xl"
          style={{ 
            fontFamily: 'var(--font-syne)',
            WebkitTextStroke: '2px rgba(34, 211, 238, 0.4)'
          }}
        >
          404
        </h1>
        
        <h2 
          className="text-3xl md:text-5xl font-display uppercase tracking-tight text-white mb-6"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          THIS ROUTE <br className="md:hidden" />DOESN&apos;T GO ANYWHERE.
        </h2>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-md mx-auto mb-10 leading-relaxed">
          The page you&apos;re looking for may have moved, been renamed, or no longer exists in our system.
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-[#22D3EE] hover:bg-[#67E8F9] text-[#061826] font-semibold px-8 py-4 rounded-sm transition-all duration-300 tracking-wide uppercase text-sm shadow-xl shadow-[#22D3EE]/20"
        >
          Return Home
          <ArrowRight size={18} />
        </Link>
      </div>

    </main>
  );
}
