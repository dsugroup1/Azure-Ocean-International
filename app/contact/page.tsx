import { Metadata } from 'next';
import { MapPin } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionLabel from '@/components/shared/SectionLabel';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { company } from '@/data/company';
import { formatAddressLines } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Have a transportation, freight or logistics requirement? Share the details through our enquiry form.',
};

export default function ContactPage() {
  const addressLines = formatAddressLines(company.address);

  return (
    <>
      <PageHero 
        title={
          <>
            START A<br />CONVERSATION.
          </>
        }
        subtitle="Have a transportation, freight or logistics requirement? Share the details through the enquiry form below."
      />

      <section className="py-24 md:py-32 bg-white relative">
        {/* Background decorative route line */}
        <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden pointer-events-none opacity-20" aria-hidden="true">
           <svg viewBox="0 0 400 1000" fill="none" preserveAspectRatio="none" className="w-full h-full">
             <path d="M400 0 L200 200 L300 500 L100 800 L300 1000" stroke="#0284C7" strokeWidth="2" strokeDasharray="10 10" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
            
            {/* Left: Office Information */}
            <div className="lg:col-span-5 lg:pr-12">
              <SectionLabel variant="cyan" className="mb-6">OFFICE</SectionLabel>
              <h2 
                className="text-3xl font-display uppercase tracking-wide text-[#0F172A] mb-8"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {company.name}
              </h2>

              <div className="bg-[#F8FAFC] border border-slate-200 p-8 rounded-sm mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#E0F2FE] rounded flex items-center justify-center text-[#0284C7] flex-shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] mb-3 text-lg">Physical Address</h3>
                    <address className="not-italic text-slate-600 leading-relaxed text-sm">
                      {addressLines.map((line, i) => (
                        <span key={i} className="block">{line}</span>
                      ))}
                    </address>
                  </div>
                </div>
              </div>

              <a 
                href={company.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#061826] hover:bg-[#0A2438] text-white font-semibold py-4 rounded-sm transition-colors duration-300 tracking-wide text-sm"
              >
                GET DIRECTIONS
              </a>

              <p className="mt-8 text-sm text-slate-500 leading-relaxed border-l-2 border-[#22D3EE] pl-4">
                Please note: All initial enquiries are handled through the contact form to ensure details are properly logged and routed to the appropriate coordination team.
              </p>
            </div>

            {/* Right: Enquiry Form */}
            <div className="lg:col-span-7">
               <EnquiryForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
