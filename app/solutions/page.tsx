import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionLabel from '@/components/shared/SectionLabel';
import QuoteCTA from '@/components/home/QuoteCTA';
import { services } from '@/data/services';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Logistics Solutions',
  description: 'Practical solutions for the movement and coordination of goods, including road freight, warehousing, and supply chain support.',
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero 
        title={
          <>
            SOLUTIONS FOR<br />BUSINESS IN MOTION.
          </>
        }
        subtitle="Every logistics requirement begins with a different origin, destination and operational need. We provide structured support across the key stages of goods movement."
      />

      <div className="bg-white">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <section 
              key={service.id} 
              id={service.id}
              className={cn(
                "py-24 md:py-32",
                !isEven && "bg-[#F8FAFC]"
              )}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                  
                  {/* Content */}
                  <div className={cn("order-2", isEven ? "lg:order-1" : "lg:order-2")}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl font-display text-[#E0F2FE] font-bold" style={{ fontFamily: 'var(--font-syne)' }}>
                        {service.number}
                      </span>
                      <SectionLabel variant="cyan">SERVICE</SectionLabel>
                    </div>
                    
                    <h2 
                      className="text-3xl md:text-4xl font-display uppercase tracking-tight text-[#0F172A] leading-tight mb-6"
                      style={{ fontFamily: 'var(--font-syne)' }}
                    >
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-slate-600 leading-relaxed mb-10">
                      {service.detail}
                    </p>

                    <div className="mb-10">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] mb-4">
                        Process & Approach
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                        {service.process.map((step, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2 flex-shrink-0" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      href="/request-quote"
                      className="inline-flex items-center gap-2 text-[#0284C7] hover:text-[#0369A1] font-semibold tracking-wide uppercase transition-colors group"
                    >
                      Discuss Your Requirement
                      <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Visual */}
                  <div className={cn("order-1 relative", isEven ? "lg:order-2" : "lg:order-1")}>
                     {/* Abstract visual representation based on service */}
                     <div className="aspect-[4/3] bg-[#061826] rounded-sm overflow-hidden relative shadow-xl border border-white/[0.05]">
                        <div 
                          className="absolute inset-0 opacity-[0.05]"
                          style={{
                            backgroundImage: `linear-gradient(#22D3EE 1px, transparent 1px), linear-gradient(90deg, #22D3EE 1px, transparent 1px)`,
                            backgroundSize: '20px 20px',
                          }}
                        />
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="text-[#22D3EE]/20 font-display text-[12rem] leading-none select-none" style={{ fontFamily: 'var(--font-syne)' }}>
                             {service.number}
                           </div>
                        </div>
                        
                        <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-sm">
                           <h4 className="text-white text-sm font-medium tracking-wide uppercase mb-2">Supported Requirements:</h4>
                           <ul className="flex flex-col gap-2">
                             {service.requirements.slice(0,2).map((req, i) => (
                               <li key={i} className="text-slate-300 text-xs flex items-center gap-2">
                                 <div className="w-1 h-1 bg-[#22D3EE] rounded-full" />
                                 {req}
                               </li>
                             ))}
                           </ul>
                        </div>
                     </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      <QuoteCTA />
    </>
  );
}
