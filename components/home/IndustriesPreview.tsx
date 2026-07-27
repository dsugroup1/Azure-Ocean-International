// ============================================================
// IndustriesPreview — Horizontal scroll or editorial industries
// ============================================================

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '@/components/shared/SectionLabel';
import { industries } from '@/data/industries';

export default function IndustriesPreview() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden" aria-label="Industries We Support">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <SectionLabel variant="cyan" className="mb-6">
              INDUSTRIES
            </SectionLabel>
            <h2 
              className="text-4xl md:text-5xl font-display uppercase tracking-tight text-[#0F172A] leading-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              LOGISTICS ACROSS BUSINESS
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Transportation and distribution requirements vary across industries. Our logistics approach is designed around understanding those requirements. Logistics requirements may include sectors such as:
            </p>
          </div>
          <Link 
            href="/industries"
            className="inline-flex items-center gap-2 text-[#0284C7] hover:text-[#0369A1] font-semibold text-sm tracking-wide uppercase transition-colors flex-shrink-0"
          >
            Explore All Industries
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 snap-x snap-mandatory hide-scrollbar">
          {industries.slice(0, 3).map((industry) => (
            <div 
              key={industry.id}
              className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-start mr-6 md:mr-0 bg-[#F8FAFC] border border-slate-200 p-8 md:p-10 rounded-sm group hover:border-[#0284C7] hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-8">
                {/* Abstract geometric icon placeholder based on color theme */}
                <div className={`w-12 h-12 rounded-sm flex items-center justify-center
                  ${industry.color === 'cyan' ? 'bg-[#E0F2FE] text-[#0284C7]' : ''}
                  ${industry.color === 'azure' ? 'bg-[#F0F9FF] text-[#0EA5E9]' : ''}
                  ${industry.color === 'ocean' ? 'bg-[#F1F5F9] text-[#075985]' : ''}
                `}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                
                <ArrowRight size={20} className="text-slate-300 group-hover:text-[#0284C7] transform group-hover:translate-x-1 transition-all duration-300" />
              </div>
              
              <h3 
                className="text-2xl font-display uppercase tracking-wide text-[#0F172A] mb-4 flex-grow"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {industry.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-sm">
                {industry.description}
              </p>
              
              <Link href={`/industries#${industry.id}`} className="absolute inset-0 z-10">
                <span className="sr-only">Learn more about {industry.title} logistics</span>
              </Link>
            </div>
          ))}
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
      </div>
    </section>
  );
}
