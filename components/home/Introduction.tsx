// ============================================================
// Introduction — Editorial section after hero
// ============================================================

import SectionLabel from '@/components/shared/SectionLabel';
import CTAButton from '@/components/shared/CTAButton';

export default function Introduction() {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC]" aria-label="Introduction">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Copy */}
          <div className="max-w-xl">
            <SectionLabel variant="cyan" className="mb-6">
              WHO WE ARE
            </SectionLabel>
            
            <h2 
              className="text-4xl md:text-5xl font-display uppercase tracking-tight text-[#0F172A] leading-[1.1] mb-8"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Logistics is about more than movement. It&apos;s about keeping business connected.
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Based in New Delhi, Azure Ocean International approaches logistics with a focus on coordination, communication and practical transportation solutions for business requirements.
            </p>
            
            <CTAButton href="/about" variant="primary" showArrow>
              Discover Azure Ocean
            </CTAButton>
          </div>
          
          {/* Right: Visual panel */}
          <div className="relative">
            {/* Background offset block */}
            <div 
              className="absolute -inset-4 md:-inset-8 bg-[#E0F2FE] rounded-lg -z-10 translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8"
              aria-hidden="true"
            />
            
            {/* Main visual frame */}
            <div className="aspect-[4/5] md:aspect-square bg-[#061826] relative overflow-hidden rounded-sm shadow-2xl">
              {/* Subtle grid on dark bg */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(#22D3EE 1px, transparent 1px),
                    linear-gradient(90deg, #22D3EE 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
                aria-hidden="true"
              />
              
              {/* Diagonal routes */}
              <svg 
                className="absolute inset-0 w-full h-full opacity-30" 
                viewBox="0 0 400 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
              >
                <path d="M0 400 L400 0" stroke="#22D3EE" strokeWidth="1" strokeDasharray="4 4"/>
                <path d="M-100 400 L300 -100" stroke="#0284C7" strokeWidth="1"/>
                <path d="M100 500 L500 100" stroke="#0284C7" strokeWidth="1"/>
                {/* Connecting nodes */}
                <circle cx="200" cy="200" r="4" fill="#22D3EE" />
                <circle cx="100" cy="300" r="3" fill="#0EA5E9" />
                <circle cx="300" cy="100" r="3" fill="#0EA5E9" />
              </svg>
              
              {/* Overlay text / badge */}
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-sm border-l-2 border-l-[#22D3EE]">
                <p className="text-white text-sm font-medium tracking-wide uppercase">
                  Coordinated Freight Movement
                </p>
                <p className="text-slate-400 text-xs mt-2">
                  Structured transportation logistics from requirement to destination.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
