import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionLabel from '@/components/shared/SectionLabel';
import QuoteForm from '@/components/forms/QuoteForm';

export const metadata: Metadata = {
  title: 'Request a Quote',
  description: 'Provide details about your logistics or freight requirement for Azure Ocean International to review.',
};

export default function RequestQuotePage() {
  return (
    <>
      <PageHero 
        title={
          <>
            TELL US<br />WHAT NEEDS TO MOVE.
          </>
        }
        subtitle="Share your logistics requirement details below. The more information you can provide, the better our team can understand the scope of the movement."
        centered={true}
      />

      <section className="py-24 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          
          <div className="text-center mb-12">
            <SectionLabel variant="cyan" className="mb-4 justify-center">REQUIREMENT DETAILS</SectionLabel>
            <p className="text-slate-600 leading-relaxed">
              Please complete the form with as much detail as possible regarding origins, destinations, and the nature of the goods. 
            </p>
          </div>

          <QuoteForm />
          
        </div>
      </section>
    </>
  );
}
