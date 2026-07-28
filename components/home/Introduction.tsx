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
              Logistics is about more than movement. It&apos;s about keeping global business connected.
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Based in New Delhi with strong connectivity across China, Hong Kong, and Indonesia, Azure Ocean International approaches global logistics with a focus on reliable forwarding, cross-border coordination, and practical international transportation solutions.
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
              
              {/* Glowing Globe Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-screen"
                style={{ backgroundImage: `url('/images/intro-globe.png')` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061826] via-transparent to-transparent opacity-90" aria-hidden="true" />
              
              {/* Overlay text / badge */}
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-sm border-l-2 border-l-[#22D3EE]">
                <p className="text-white text-sm font-medium tracking-wide uppercase">
                  Global Freight Forwarding
                </p>
                <p className="text-slate-400 text-xs mt-2">
                  Structured cross-border logistics from origin to destination.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
