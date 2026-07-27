// ============================================================
// WhyAzureOcean — Values-driven section
// ============================================================

import SectionLabel from '@/components/shared/SectionLabel';
import { MessageSquare, CalendarClock, BriefcaseBusiness, ShieldCheck, RefreshCcw } from 'lucide-react';

const values = [
  {
    title: 'CLEAR COMMUNICATION',
    desc: 'Good logistics starts with clear information and dependable communication.',
    icon: MessageSquare,
  },
  {
    title: 'PRACTICAL PLANNING',
    desc: 'Every logistics requirement is different. The approach should reflect the movement involved.',
    icon: CalendarClock,
  },
  {
    title: 'BUSINESS-FOCUSED',
    desc: 'Logistics decisions should support the operational needs of the business.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'RESPONSIBLE COORDINATION',
    desc: 'Careful coordination helps create a more structured movement process.',
    icon: ShieldCheck,
  },
  {
    title: 'FLEXIBLE APPROACH',
    desc: 'Different goods and destinations can require different logistics considerations.',
    icon: RefreshCcw,
  },
];

export default function WhyAzureOcean() {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC]" aria-label="Why Azure Ocean">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left: Heading & Intro */}
          <div className="lg:col-span-5 lg:pr-12 lg:sticky lg:top-32 lg:self-start">
            <SectionLabel variant="cyan" className="mb-6">
              WHY AZURE OCEAN
            </SectionLabel>
            <h2 
              className="text-4xl md:text-5xl font-display uppercase tracking-tight text-[#0F172A] leading-tight mb-8"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              BUILT AROUND BETTER COORDINATION.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              We focus on the practical fundamentals of movement—clear communication, careful planning, and responsible execution—to provide reliable logistics support for business.
            </p>
          </div>
          
          {/* Right: Values Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {values.map((value, i) => {
                const Icon = value.icon;
                // Make the last item span 2 columns on tablet/desktop if odd number
                const isLastOdd = values.length % 2 !== 0 && i === values.length - 1;
                
                return (
                  <div 
                    key={i} 
                    className={`bg-white p-8 md:p-10 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 ${isLastOdd ? 'md:col-span-2' : ''}`}
                  >
                    <div className="w-12 h-12 bg-[#F0F9FF] rounded flex items-center justify-center text-[#0284C7] mb-6">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 
                      className="text-xl font-display uppercase tracking-wide text-[#0F172A] mb-4"
                      style={{ fontFamily: 'var(--font-syne)' }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {value.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
