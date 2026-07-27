'use client';

// ============================================================
// SolutionsShowcase — Interactive numbered services
// ============================================================

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '@/components/shared/SectionLabel';
import { services } from '@/data/services';
import { cn } from '@/lib/utils';

export default function SolutionsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-[#061826]" aria-label="Logistics Solutions">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <SectionLabel variant="light" className="mb-6">
            LOGISTICS SOLUTIONS
          </SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 
              className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white leading-tight max-w-2xl"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Practical solutions for the movement and coordination of goods.
            </h2>
            <Link 
              href="/solutions"
              className="inline-flex items-center gap-2 text-[#22D3EE] hover:text-white font-medium text-sm tracking-wide uppercase transition-colors"
            >
              View All Solutions
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Desktop Interactive Layout (hidden on mobile) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 min-h-[600px]">
          
          {/* Left: Interactive List */}
          <div className="col-span-5 flex flex-col justify-center">
            <div className="flex flex-col relative">
              {/* Active indicator line */}
              <div 
                className="absolute left-0 w-[2px] bg-[#22D3EE] transition-all duration-500 ease-out z-10"
                style={{ 
                  top: `${(activeIndex * 100) / services.length}%`,
                  height: `${100 / services.length}%` 
                }}
                aria-hidden="true"
              />
              {/* Background line */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/[0.08]" aria-hidden="true" />
              
              {services.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={service.id}
                    className="group text-left py-6 pl-8 relative focus-visible:outline-none"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    aria-expanded={isActive}
                    aria-controls={`panel-${service.id}`}
                  >
                    <div className="flex items-center gap-6 transition-transform duration-300 group-hover:translate-x-2">
                      <span 
                        className={cn(
                          "font-display text-sm tracking-[0.2em] transition-colors duration-300",
                          isActive ? "text-[#22D3EE]" : "text-slate-500 group-hover:text-slate-400"
                        )}
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {service.number}
                      </span>
                      <span 
                        className={cn(
                          "text-2xl font-display uppercase tracking-wide transition-colors duration-300",
                          isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                        )}
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {service.shortTitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Changing Content Panel */}
          <div className="col-span-7 relative bg-[#0A2438] rounded-sm overflow-hidden flex flex-col justify-end p-12 border border-white/[0.05]">
            {/* Background patterns */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(#22D3EE 1px, transparent 1px),
                  linear-gradient(90deg, #22D3EE 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
              }}
              aria-hidden="true"
            />
            
            {/* Large background number */}
            <div className="absolute top-8 right-8 number-outline text-8xl" aria-hidden="true">
              {services[activeIndex].number}
            </div>

            {/* Content area */}
            <div className="relative z-10 max-w-lg mt-32">
              <h3 
                className="text-3xl font-display uppercase tracking-wide text-white mb-6"
                style={{ fontFamily: 'var(--font-syne)' }}
                id={`panel-${services[activeIndex].id}`}
              >
                {services[activeIndex].title}
              </h3>
              <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                {services[activeIndex].description}
              </p>
              
              <ul className="flex flex-col gap-3 mb-10">
                {services[activeIndex].process.slice(0,3).map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2 flex-shrink-0" />
                    {step}
                  </li>
                ))}
              </ul>

              <Link 
                href={`/solutions#${services[activeIndex].id}`}
                className="inline-flex items-center gap-2 text-white font-semibold text-sm tracking-wide group"
              >
                Learn More
                <span className="w-8 h-[1px] bg-[#22D3EE] transition-all duration-300 group-hover:w-12 group-hover:bg-[#67E8F9]" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden flex flex-col gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-[#0A2438] p-8 rounded-sm border border-white/[0.05] relative overflow-hidden"
            >
               <div className="absolute top-4 right-4 number-outline text-6xl opacity-50" aria-hidden="true">
                {service.number}
              </div>
              <h3 
                className="text-2xl font-display uppercase tracking-wide text-white mb-4 pr-16"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {service.title}
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                {service.description}
              </p>
              <Link 
                href={`/solutions#${service.id}`}
                className="inline-flex items-center gap-2 text-[#22D3EE] font-semibold text-sm tracking-wide"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
