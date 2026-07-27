// ============================================================
// QuoteCTA — Distinctive Request a Quote section
// ============================================================

import CTAButton from '@/components/shared/CTAButton';

export default function QuoteCTA() {
  return (
    <section className="py-24 bg-white" aria-label="Request a quote">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="bg-[#020D14] rounded-sm overflow-hidden relative shadow-2xl border border-slate-800">
          
          {/* Abstract background graphics */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M-100 400 L400 -100" stroke="#0284C7" strokeWidth="2" strokeDasharray="10 10" />
              <path d="M200 500 L700 0" stroke="#22D3EE" strokeWidth="1" />
              <circle cx="450" cy="150" r="4" fill="#22D3EE" />
              <circle cx="300" cy="300" r="3" fill="#0284C7" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 md:p-16 lg:p-24 items-center">
            
            {/* Left: Heading */}
            <div>
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white leading-tight"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                LET&apos;S MOVE<br />
                <span className="text-[#22D3EE]">THE CONVERSATION</span><br />
                FORWARD.
              </h2>
            </div>
            
            {/* Right: Copy & CTA */}
            <div className="lg:pl-12 lg:border-l border-white/[0.1]">
              <p className="text-lg text-slate-300 leading-relaxed mb-10">
                Share your logistics requirement and provide the details our team would need to understand the movement.
              </p>
              
              <CTAButton href="/request-quote" variant="primary" size="lg" showArrow>
                Request a Quote
              </CTAButton>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
