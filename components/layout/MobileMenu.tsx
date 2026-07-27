'use client';

// ============================================================
// MobileMenu — Full-screen mobile navigation panel
// ============================================================

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className={cn(
        'fixed inset-0 z-40 transition-all duration-500 ease-in-out md:hidden',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#020D14]/95 backdrop-blur-xl"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={cn(
          'relative h-full flex flex-col px-8 pt-24 pb-12 transition-transform duration-500',
          isOpen ? 'translate-x-0' : '-translate-x-8',
        )}
      >
        {/* Route line decoration */}
        <div
          className="absolute top-0 right-0 w-px h-full opacity-20"
          style={{
            background: 'linear-gradient(to bottom, transparent, #22D3EE, transparent)',
          }}
          aria-hidden="true"
        />

        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(#22D3EE 1px, transparent 1px),
              linear-gradient(90deg, #22D3EE 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
          aria-hidden="true"
        />

        {/* Nav items */}
        <nav className="flex flex-col gap-2 flex-1" aria-label="Mobile navigation links">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  'group flex items-center justify-between py-5 border-b border-white/[0.08] transition-all duration-300',
                  isActive ? 'text-[#22D3EE]' : 'text-slate-200 hover:text-white',
                )}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  transitionDelay: isOpen ? `${i * 60}ms` : '0ms',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-16px)',
                  transition: 'opacity 0.4s ease, transform 0.4s ease, color 0.2s ease',
                }}
              >
                <span
                  className="text-3xl font-display uppercase tracking-wide"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {item.label}
                </span>
                <ArrowRight
                  size={20}
                  className={cn(
                    'transition-all duration-300',
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60',
                  )}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div
          className="mt-8"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.4s ease 0.35s, transform 0.4s ease 0.35s',
          }}
        >
          <Link
            href="/request-quote"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-base py-4 rounded-sm transition-colors duration-300 tracking-wide"
          >
            Request a Quote
            <ArrowRight size={18} aria-hidden="true" />
          </Link>

          {/* Address brief */}
          <p className="mt-6 text-slate-500 text-sm leading-relaxed text-center">
            Azure Ocean International
            <br />
            Rajendra Place, Central Delhi – 110008
          </p>
        </div>
      </div>
    </div>
  );
}
