// ============================================================
// IndiaConnectivity — Map visualization section
// ============================================================

import SectionLabel from '@/components/shared/SectionLabel';
import CTAButton from '@/components/shared/CTAButton';

export default function IndiaConnectivity() {
  return (
    <section className="py-24 md:py-32 bg-[#0A2438] relative overflow-hidden" aria-label="Connectivity">
      {/* Background abstract nodes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M100 500 L300 200 L600 300 L900 100" stroke="#22D3EE" strokeWidth="1" strokeDasharray="5 5" />
          <path d="M200 600 L400 400 L700 500 L1000 300" stroke="#0284C7" strokeWidth="1" />
          {/* Decorative nodes */}
          <circle cx="300" cy="200" r="3" fill="#22D3EE" />
          <circle cx="600" cy="300" r="4" fill="#0EA5E9" />
          <circle cx="900" cy="100" r="3" fill="#22D3EE" />
          <circle cx="400" cy="400" r="5" fill="#0EA5E9" />
          <circle cx="700" cy="500" r="3" fill="#0284C7" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Copy */}
          <div>
            <SectionLabel variant="light" className="mb-6">
              CONNECTIVITY
            </SectionLabel>
            <h2 
              className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white leading-tight mb-8"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              CONNECTING MOVEMENT.<br />
              SUPPORTING BUSINESS.
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-lg">
              From regional transportation requirements to broader supply-chain coordination, logistics plays a critical role in keeping businesses moving. We provide support designed around the operational realities of movement across India.
            </p>
            <CTAButton href="/contact" variant="primary" showArrow>
              Discuss Your Movement Needs
            </CTAButton>
          </div>

          {/* Right: Abstract Map Art */}
          <div className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden flex items-center justify-center bg-[#061826] border border-white/[0.05] p-8 shadow-2xl">
            {/* We use an abstract geometric representation of logistics connectivity instead of a literal map to avoid claiming fake branch locations. */}
            <svg 
              viewBox="0 0 400 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full max-w-[300px] opacity-80"
              aria-hidden="true"
            >
              {/* Abstract polygon representing a network */}
              <path 
                d="M200 40 L340 120 L300 280 L200 360 L100 280 L60 120 Z" 
                stroke="#0284C7" 
                strokeWidth="2"
                fill="rgba(2, 132, 199, 0.05)"
              />
              
              {/* Internal connecting lines */}
              <path d="M200 40 L200 360" stroke="#0284C7" strokeWidth="1" strokeDasharray="4 4"/>
              <path d="M60 120 L340 120" stroke="#0284C7" strokeWidth="1" strokeDasharray="4 4"/>
              <path d="M100 280 L300 280" stroke="#0284C7" strokeWidth="1" strokeDasharray="4 4"/>
              <path d="M60 120 L300 280" stroke="#22D3EE" strokeWidth="1.5" />
              <path d="M100 280 L340 120" stroke="#22D3EE" strokeWidth="1.5" />
              <path d="M200 40 L100 280" stroke="#0EA5E9" strokeWidth="1" />
              <path d="M200 40 L300 280" stroke="#0EA5E9" strokeWidth="1" />
              
              {/* Nodes - representing movement/connectivity points, not specific claimed offices */}
              <circle cx="200" cy="40" r="4" fill="#22D3EE" />
              <circle cx="340" cy="120" r="4" fill="#0EA5E9" />
              <circle cx="300" cy="280" r="5" fill="#22D3EE" />
              <circle cx="200" cy="360" r="4" fill="#0284C7" />
              <circle cx="100" cy="280" r="4" fill="#0EA5E9" />
              <circle cx="60" cy="120" r="4" fill="#22D3EE" />
              <circle cx="200" cy="200" r="6" fill="#22D3EE" />
              
              {/* Pulse rings */}
              <circle cx="200" cy="200" r="12" stroke="#22D3EE" strokeWidth="1" className="animate-ping" style={{ animationDuration: '3s' }} opacity="0.3" />
            </svg>
            
            <div className="absolute bottom-6 text-center w-full text-[#22D3EE]/50 text-xs tracking-[0.3em] uppercase">
              Connectivity Network
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
