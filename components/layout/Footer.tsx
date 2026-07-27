// ============================================================
// Footer — Large dark premium footer
// ============================================================

import Link from 'next/link';
import Logo from '@/components/brand/Logo';
import { company } from '@/data/company';
import { footerNavExplore, footerNavCompany } from '@/data/navigation';
import { formatAddressLines, currentYear } from '@/lib/utils';
import { MapPin } from 'lucide-react';

export default function Footer() {
  const addressLines = formatAddressLines(company.address);
  const year = currentYear();

  return (
    <footer className="bg-[#061826] text-slate-300" role="contentinfo">
      {/* Top route line */}
      <div
        className="h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #22D3EE40, transparent)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Main footer content */}
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-6 text-slate-400 text-sm leading-relaxed max-w-xs">
              {company.tagline}
            </p>
            <p className="mt-4 text-slate-500 text-xs leading-relaxed max-w-xs">
              Logistics and freight coordination solutions for businesses. Based in New Delhi, India.
            </p>
          </div>

          {/* Explore column */}
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase font-semibold text-white mb-5">
              Explore
            </h2>
            <ul className="flex flex-col gap-3" role="list">
              {footerNavExplore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 group inline-flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#22D3EE] transition-all duration-300 opacity-0 group-hover:opacity-100" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase font-semibold text-white mb-5">
              Company
            </h2>
            <ul className="flex flex-col gap-3" role="list">
              {footerNavCompany.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 group inline-flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#22D3EE] transition-all duration-300 opacity-0 group-hover:opacity-100" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office column */}
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase font-semibold text-white mb-5">
              Office
            </h2>
            <address className="not-italic" aria-label="Company office address">
              <p className="text-sm font-medium text-white mb-2">{company.name}</p>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#22D3EE] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="text-sm text-slate-400 leading-relaxed">
                  {addressLines.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < addressLines.length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={company.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#22D3EE]/70 hover:text-[#22D3EE] transition-colors duration-200 tracking-wide uppercase"
                aria-label="Get directions to Azure Ocean International office on Google Maps (opens in new tab)"
              >
                Get Directions →
              </a>
            </address>

            {/* Contact info — only shown if available */}
            {company.phone && (
              <p className="mt-4 text-sm text-slate-400">
                <a href={`tel:${company.phone}`} className="hover:text-white transition-colors">
                  {company.phone}
                </a>
              </p>
            )}
            {company.email && (
              <p className="mt-2 text-sm text-slate-400">
                <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                  {company.email}
                </a>
              </p>
            )}
            {/* Social links — only shown if available */}
            {company.socials.length > 0 && (
              <div className="mt-4 flex gap-3">
                {company.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-white transition-colors tracking-wide uppercase"
                    aria-label={`${company.name} on ${social.platform} (opens in new tab)`}
                  >
                    {social.platform}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.08]"
        >
          <p className="text-xs text-slate-500">
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
