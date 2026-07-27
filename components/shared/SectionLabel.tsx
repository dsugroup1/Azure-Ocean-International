// ============================================================
// SectionLabel — Small eyebrow label above headings
// ============================================================

import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'cyan';
}

export default function SectionLabel({
  children,
  className,
  variant = 'dark',
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-semibold',
        variant === 'dark' && 'text-[#0284C7]',
        variant === 'light' && 'text-[#22D3EE]',
        variant === 'cyan' && 'text-[#06B6D4]',
        className,
      )}
    >
      <span className="w-6 h-[1px] bg-current opacity-70" aria-hidden="true" />
      {children}
    </div>
  );
}
