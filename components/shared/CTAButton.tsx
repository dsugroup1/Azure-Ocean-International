// ============================================================
// CTAButton — Primary and secondary call-to-action button
// ============================================================

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
  external?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className,
  external = false,
}: CTAButtonProps) {
  const baseClasses =
    'inline-flex items-center gap-2 font-semibold tracking-wide transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2';

  const sizeClasses = {
    sm: 'text-sm px-5 py-2.5 rounded-sm',
    md: 'text-sm px-7 py-3.5 rounded-sm',
    lg: 'text-base px-9 py-4.5 rounded-sm',
  };

  const variantClasses = {
    primary:
      'bg-[#0284C7] text-white hover:bg-[#0369A1] shadow-lg shadow-[#0284C7]/20 hover:shadow-[#0284C7]/30 hover:shadow-xl',
    secondary:
      'bg-[#022D46] text-[#22D3EE] border border-[#22D3EE]/30 hover:bg-[#0A2438] hover:border-[#22D3EE]/60',
    outline:
      'bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/60',
    ghost:
      'bg-transparent text-[#0284C7] hover:text-[#0369A1] p-0 hover:gap-3',
  };

  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Link
      href={href}
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      {...externalProps}
    >
      {children}
      {showArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
