// ============================================================
// VisualBreak — Full width high impact visual section
// ============================================================

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function VisualBreak() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden" aria-label="Visual break">
      
      {/* Background Image Placeholder 
          In a real project, this would use next/image with a real container yard photo.
          Since we don't have one, we use a CSS composition that suggests a container yard/freight terminal.
      */}
      <div className="absolute inset-0 bg-[#0A2438]">
        {/* Abstract container yard pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #0284C7 2px, transparent 2px),
              linear-gradient(90deg, #22D3EE 2px, transparent 2px),
              linear-gradient(#061826 4px, transparent 4px)
            `,
            backgroundSize: '40px 100%, 80px 100%, 100% 20px',
            backgroundPosition: '0 0, 20px 0, 0 0'
          }}
          aria-hidden="true"
        />
        
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020D14]/90 via-[#020D14]/40 to-[#020D14]/80" aria-hidden="true" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 
          className="text-5xl md:text-6xl lg:text-7xl font-display uppercase tracking-tight text-white leading-tight drop-shadow-2xl mb-10"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          EVERY ROUTE <br className="hidden md:block" />
          STARTS WITH A <span className="text-[#22D3EE]">REQUIREMENT.</span>
        </h2>
        
        <Link 
          href="/contact"
          className="inline-flex items-center gap-3 bg-white text-[#0F172A] hover:bg-[#22D3EE] hover:text-[#061826] font-bold px-8 py-4 rounded-sm transition-all duration-300 tracking-wide shadow-2xl group text-sm uppercase"
        >
          Tell Us Yours
          <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </section>
  );
}
