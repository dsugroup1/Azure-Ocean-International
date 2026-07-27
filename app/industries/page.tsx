import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import { industries } from '@/data/industries';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Industries We Support',
  description: 'Logistics requirements change depending on products, destinations, and timelines. We support manufacturing, retail, FMCG, and general commercial cargo.',
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero 
        title={
          <>
            DIFFERENT INDUSTRIES.<br />DIFFERENT MOVEMENTS.
          </>
        }
        subtitle="Logistics requirements change depending on products, destinations, timelines and business operations. Our approach is designed around understanding those specific requirements."
      />

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            
            {industries.map((industry) => (
              <div 
                key={industry.id} 
                id={industry.id}
                className="group flex flex-col h-full rounded-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:border-[#0284C7] transition-all duration-300"
              >
                {/* Abstract Header Image */}
                <div className="h-48 relative overflow-hidden bg-[#061826]">
                  <div 
                    className="absolute inset-0 opacity-[0.1]"
                    style={{
                      backgroundImage: `linear-gradient(#22D3EE 1px, transparent 1px), linear-gradient(90deg, #22D3EE 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className={cn(
                    "absolute -bottom-12 -right-12 w-48 h-48 rounded-full opacity-20 blur-2xl transition-transform duration-500 group-hover:scale-150",
                    industry.color === 'cyan' ? 'bg-[#22D3EE]' : industry.color === 'azure' ? 'bg-[#0EA5E9]' : 'bg-[#0284C7]'
                  )} />
                  <div className="absolute bottom-4 left-6">
                    <span className="text-white/30 font-display text-4xl font-bold" style={{ fontFamily: 'var(--font-syne)' }}>
                      0{industries.indexOf(industry) + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col flex-grow bg-white">
                  <h2 
                    className="text-2xl font-display uppercase tracking-wide text-[#0F172A] mb-4"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {industry.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-grow">
                    {industry.detail}
                  </p>
                  
                  <Link 
                    href="/request-quote"
                    className="inline-flex items-center gap-2 text-[#0284C7] hover:text-[#0369A1] font-semibold text-sm tracking-wide transition-colors mt-auto"
                  >
                    Discuss Requirements <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
            
          </div>

          {/* Bottom Callout */}
          <div className="mt-24 bg-[#F8FAFC] border border-slate-200 p-12 text-center rounded-sm max-w-4xl mx-auto">
            <h3 
              className="text-2xl font-display uppercase tracking-wide text-[#0F172A] mb-4"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Have a different logistics requirement?
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Not every business fits neatly into a standard category. If your operations require specialized coordination, we are ready to listen.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#061826] text-white hover:bg-[#0A2438] font-semibold px-8 py-4 rounded-sm transition-all duration-300 tracking-wide text-sm"
            >
              Share Your Requirement
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
