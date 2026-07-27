// ============================================================
// Logo — Azure Ocean International brand mark
// Replace with official SVG logo by swapping the inner content.
// The outer wrapper and link stay the same.
// ============================================================

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  compact?: boolean;
}

export default function Logo({
  variant = 'dark',
  className,
  compact = false,
}: LogoProps) {
  const isLight = variant === 'light';

  return (
    <Link
      href="/"
      className={cn('flex items-center gap-3 group focus-visible:outline-none', className)}
      aria-label="Azure Ocean International — Home"
    >
      {/* ── AO Monogram / Brand Icon ── */}
      <div
        className={cn(
          'relative flex items-center justify-center rounded-sm overflow-hidden flex-shrink-0',
          compact ? 'w-8 h-8' : 'w-10 h-10',
          isLight
            ? 'bg-transparent border border-cyan-400/30'
            : 'bg-[#061826] border border-[#22D3EE]/30',
        )}
        aria-hidden="true"
      >
        {/* Geometric wave / route icon */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={compact ? 'w-6 h-6' : 'w-7 h-7'}
        >
          {/* Ocean wave route lines */}
          <path
            d="M4 28 Q10 20 16 24 Q22 28 28 20 Q34 12 36 16"
            stroke="#22D3EE"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M4 20 Q10 14 16 17 Q22 20 28 13 Q34 6 36 9"
            stroke="#0284C7"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
          {/* Destination dot */}
          <circle cx="36" cy="16" r="2" fill="#22D3EE" />
        </svg>
      </div>

      {/* ── Wordmark ── */}
      {!compact && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              'font-display tracking-widest text-xs uppercase font-bold',
              isLight ? 'text-white' : 'text-[#061826]',
            )}
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            AZURE OCEAN
          </span>
          <span
            className={cn(
              'tracking-[0.3em] text-[0.6rem] uppercase',
              isLight ? 'text-[#22D3EE]/80' : 'text-[#0284C7]/80',
            )}
          >
            INTERNATIONAL
          </span>
        </div>
      )}
    </Link>
  );
}
