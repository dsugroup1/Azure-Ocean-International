import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SectionLabel from '@/components/shared/SectionLabel';
import QuoteCTA from '@/components/home/QuoteCTA';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Azure Ocean International, our logistics approach, mission, vision and core values.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={
          <>
            LOGISTICS WITH<br />A CLEARER DIRECTION.
          </>
        }
        subtitle="Azure Ocean International is a New Delhi-based freight forwarding business focused on supporting cross-border movement and global coordination requirements."
      />

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <SectionLabel variant="cyan" className="mb-6">WHO WE ARE</SectionLabel>
              <h2
                className="text-3xl md:text-4xl font-display uppercase tracking-tight text-[#0F172A] leading-tight mb-8"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                BUILT FOR BUSINESS IN MOTION.
              </h2>
              <div className="prose prose-slate lg:prose-lg text-slate-600">
                <p>
                  Azure Ocean International was established with a straightforward premise: international trade logistics should support business, not complicate it. Based in New Delhi, we provide structured global freight forwarding and cross-border coordination services designed around practical operational realities across the Asian market.
                </p>
                <p>
                  We understand that every movement has an origin, a destination, and a specific set of requirements connecting them. Our role is to provide the visibility, planning, and execution necessary to bridge that gap reliably.
                </p>
              </div>
            </div>

            <div>
              <SectionLabel variant="cyan" className="mb-6">OUR APPROACH</SectionLabel>
              <h2
                className="text-3xl md:text-4xl font-display uppercase tracking-tight text-[#0F172A] leading-tight mb-8"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                PRACTICAL, DEPENDABLE, COORDINATED.
              </h2>
              <div className="prose prose-slate lg:prose-lg text-slate-600">
                <p>
                  We do not believe in unnecessarily complex supply-chain terminology. We believe in clear communication and responsible execution.
                </p>
                <p>
                  Whether it is coordinating a single ocean freight shipment from China or structuring a multi-leg international distribution requirement to Indonesia, we approach every task with the same commitment to operational clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

            <div className="bg-white p-12 rounded-sm shadow-sm border border-slate-100 relative overflow-hidden">
              {/* Decorative graphic */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F0F9FF] rounded-bl-full opacity-50" aria-hidden="true" />
              <SectionLabel variant="cyan" className="mb-6">OUR MISSION</SectionLabel>
              <p className="text-2xl md:text-3xl text-[#0F172A] leading-relaxed font-medium relative z-10" style={{ fontFamily: 'var(--font-syne)' }}>
                &quot;To support businesses through practical, dependable and well-coordinated international freight forwarding solutions.&quot;
              </p>
            </div>

            <div className="bg-[#061826] p-12 rounded-sm shadow-xl relative overflow-hidden text-white">
              {/* Decorative graphic */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A2438] rounded-bl-full opacity-50" aria-hidden="true" />
              <SectionLabel variant="light" className="mb-6">OUR VISION</SectionLabel>
              <p className="text-2xl md:text-3xl text-white leading-relaxed font-medium relative z-10" style={{ fontFamily: 'var(--font-syne)' }}>
                &quot;To build an international logistics brand recognized for cross-border clarity, responsibility and dependable global business relationships.&quot;
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel variant="cyan" className="mb-6 justify-center">OUR VALUES</SectionLabel>
            <h2
              className="text-4xl md:text-5xl font-display uppercase tracking-tight text-[#0F172A] leading-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              WHAT GUIDES OUR WORK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'RELIABILITY', desc: 'Doing what we say we will do, when we say we will do it.' },
              { num: '02', title: 'CLARITY', desc: 'Communicating honestly and providing accurate information.' },
              { num: '03', title: 'RESPONSIBILITY', desc: 'Taking ownership of the logistics process from start to finish.' },
              { num: '04', title: 'COORDINATION', desc: 'Working systematically to connect every step of the movement.' },
              { num: '05', title: 'ADAPTABILITY', desc: 'Adjusting to operational realities and changing requirements.' },
              { num: '06', title: 'BUSINESS FOCUS', desc: 'Prioritizing solutions that support our clients\' commercial goals.' },
            ].map((value, i) => (
              <div key={i} className="group p-8 border border-slate-200 rounded-sm hover:border-[#0284C7] hover:shadow-lg transition-all duration-300">
                <span
                  className="block text-4xl text-[#E0F2FE] group-hover:text-[#22D3EE] font-bold mb-4 transition-colors"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {value.num}
                </span>
                <h3
                  className="text-xl font-display uppercase tracking-wide text-[#0F172A] mb-3"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
