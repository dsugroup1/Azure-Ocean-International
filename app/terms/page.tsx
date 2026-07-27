import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import { company } from '@/data/company';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Azure Ocean International website usage.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero 
        title="TERMS & CONDITIONS"
        subtitle="Guidelines for using our website and informational content."
        centered={true}
      />

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-10 prose prose-slate md:prose-lg text-slate-600">
          
          <p>
            Welcome to the {company.name} website. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions of use.
          </p>

          <h2>1. Website Usage</h2>
          <p>
            The content of the pages of this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
          </p>

          <h2>2. Informational Content</h2>
          <p>
            While we strive to ensure that the information on this website is correct, we do not warrant its completeness or accuracy. The descriptions of services, industries, and logistics processes are provided as general overviews and do not constitute binding operational guarantees or legal contracts.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, graphics, and text. Reproduction is prohibited other than in accordance with standard copyright notice, which forms part of these terms and conditions.
          </p>

          <h2>4. Business Requirements and Quotes</h2>
          <p>
            Information submitted through our Enquiry or Quote forms does not constitute a binding agreement for logistics services. Any operational commitments, freight contracts, or service agreements will be negotiated separately and formalized in writing outside of this website.
          </p>

          <h2>5. External Links</h2>
          <p>
            From time to time, this website may also include links to other websites (such as Google Maps for directions). These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any services or information available through this website meet your specific business requirements.
          </p>

          <h2>7. Updates to Terms</h2>
          <p>
            We reserve the right to modify these terms and conditions at any time. Any changes will be updated on this page.
          </p>

          <div className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
            <p>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

        </div>
      </section>
    </>
  );
}
