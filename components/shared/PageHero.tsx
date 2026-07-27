// ============================================================
// PageHero — Reusable inner-page hero section
// ============================================================

import SectionLabel from './SectionLabel';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  className?: string;
  dark?: boolean;
  centered?: boolean;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  className,
  dark = true,
  centered = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative pt-40 pb-20 overflow-hidden',
        dark ? 'bg-[#061826]' : 'bg-[#F0F9FF]',
        className,
      )}
      aria-label="Page hero"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#22D3EE 1px, transparent 1px),
            linear-gradient(90deg, #22D3EE 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />
      {/* Gradient fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: dark
            ? 'radial-gradient(ellipse at 30% 50%, rgba(2,132,199,0.15) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at 30% 50%, rgba(2,132,199,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div
        className={cn(
          'relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16',
          centered && 'text-center',
        )}
      >
        {eyebrow && (
          <SectionLabel
            variant={dark ? 'light' : 'dark'}
            className="mb-6"
          >
            {eyebrow}
          </SectionLabel>
        )}
        <h1
          className={cn(
            'font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight uppercase',
            dark ? 'text-white' : 'text-[#0F172A]',
          )}
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              'mt-8 text-lg md:text-xl max-w-2xl leading-relaxed',
              dark ? 'text-slate-300' : 'text-slate-600',
              centered && 'mx-auto',
            )}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom edge decoration */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #22D3EE40, transparent)',
        }}
        aria-hidden="true"
      />
    </section>
  );
}
