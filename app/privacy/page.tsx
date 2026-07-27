import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import { company } from '@/data/company';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Azure Ocean International.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero 
        title="PRIVACY POLICY"
        subtitle="How we handle information provided through our website."
        centered={true}
      />

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-10 prose prose-slate md:prose-lg text-slate-600">
          
          <p>
            This Privacy Policy outlines how {company.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, and protects information submitted through our website.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you voluntarily provide to us when you fill out forms on our website, such as the Enquiry Form or Request a Quote form. This information may include:
          </p>
          <ul>
            <li>Full Name</li>
            <li>Company Name</li>
            <li>Phone Number</li>
            <li>Email Address</li>
            <li>Logistics requirement details (e.g., locations, goods type, dates)</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            The information collected is used solely for the purpose of:
          </p>
          <ul>
            <li>Understanding and responding to your logistics enquiries.</li>
            <li>Providing accurate quotes or operational assessments based on your requirements.</li>
            <li>Communicating with you regarding your service requests.</li>
          </ul>

          <h2>3. Data Protection</h2>
          <p>
            We implement appropriate professional measures to safeguard the information you provide against unauthorized access or disclosure. We do not sell, rent, or trade your contact information to third parties for marketing purposes.
          </p>

          <h2>4. Cookies and Analytics</h2>
          <p>
            Our website may use basic operational cookies to ensure the site functions correctly and to understand general visitor usage patterns. This helps us improve the user experience.
          </p>

          <h2>5. Contact Regarding Privacy</h2>
          <p>
            If you have questions regarding this policy or how your information is handled, please use our <a href="/contact">Contact Page</a> to submit an enquiry, and our team will direct your message appropriately.
          </p>

          <div className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
            <p>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

        </div>
      </section>
    </>
  );
}
