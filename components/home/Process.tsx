// ============================================================
// Process — How We Think About Logistics timeline
// ============================================================

import SectionLabel from '@/components/shared/SectionLabel';

const steps = [
  {
    number: '01',
    title: 'Understand',
    desc: 'Every movement begins with understanding the requirement.',
  },
  {
    number: '02',
    title: 'Plan',
    desc: 'Route, timing and logistics requirements are reviewed.',
  },
  {
    number: '03',
    title: 'Coordinate',
    desc: 'The movement is coordinated through the required logistics process.',
  },
  {
    number: '04',
    title: 'Complete',
    desc: 'The shipment progresses toward its intended destination.',
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-white" aria-label="Our Process">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <SectionLabel variant="cyan" className="mb-6 justify-center">
            HOW WE THINK ABOUT LOGISTICS
          </SectionLabel>
          <h2 
            className="text-4xl md:text-5xl font-display uppercase tracking-tight text-[#0F172A] leading-tight"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            A STRUCTURED APPROACH TO EVERY MOVEMENT.
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-slate-100" aria-hidden="true">
            {/* Animated progress overlay */}
            <div 
              className="absolute top-0 left-0 h-full bg-[#0284C7]" 
              style={{
                width: '100%',
                transformOrigin: 'left',
                animation: 'scale-x 3s ease-in-out infinite alternate'
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-row md:flex-col items-start gap-6 md:gap-8 group">
                
                {/* Mobile connecting line (vertical) */}
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute top-12 bottom-[-3rem] left-[1.35rem] w-[2px] bg-slate-100" aria-hidden="true" />
                )}

                {/* Node icon */}
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-slate-200 group-hover:border-[#0284C7] transition-colors duration-300 flex-shrink-0 z-10">
                  <span 
                    className="font-display font-bold text-sm text-slate-400 group-hover:text-[#0284C7] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {step.number}
                  </span>
                  {/* Outer pulse ring on hover */}
                  <div className="absolute inset-[-6px] rounded-full border border-[#0284C7] opacity-0 group-hover:opacity-30 group-hover:animate-ping" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="pt-2 md:pt-0">
                  <h3 
                    className="text-2xl font-display uppercase tracking-wide text-[#0F172A] mb-3"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
                
              </div>
            ))}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scale-x {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}} />
    </section>
  );
}
