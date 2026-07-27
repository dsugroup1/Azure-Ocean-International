// ============================================================
// MovementStatement — Full width dark brand statement
// ============================================================

import RouteGraphic from '@/components/brand/RouteGraphic';

export default function MovementStatement() {
  return (
    <section 
      className="relative py-32 bg-[#020D14] overflow-hidden text-center"
      aria-label="Brand statement"
    >
      {/* Background route graphics */}
      <div className="absolute inset-0 pointer-events-none opacity-40 flex items-center justify-center">
        <RouteGraphic variant="curved" color="#0284C7" className="w-[120%] opacity-20" />
      </div>
      
      <div className="absolute top-1/4 left-0 w-full opacity-10" aria-hidden="true">
         <RouteGraphic variant="horizontal" color="#22D3EE" opacity={0.2} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <h2 
          className="text-4xl md:text-6xl lg:text-7xl font-display uppercase tracking-tight text-white leading-tight mb-8"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          <span className="block text-[#22D3EE]">FROM ORIGIN.</span>
          <span className="block">TO DESTINATION.</span>
          <span className="block text-slate-400 text-3xl md:text-5xl mt-2">AND EVERY STEP BETWEEN.</span>
        </h2>
        
        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">
          Effective logistics depends on visibility, planning and coordinated execution. 
          Our approach is centered around helping businesses manage movement with greater clarity.
        </p>
      </div>
      
      {/* Top/bottom fade gradients */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#061826] to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#061826] to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}
