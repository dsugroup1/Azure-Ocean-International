'use client';

// ============================================================
// RouteGraphic — Animated SVG route line decoration
// ============================================================

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface RouteGraphicProps {
  className?: string;
  variant?: 'horizontal' | 'diagonal' | 'curved';
  color?: string;
  opacity?: number;
  animated?: boolean;
}

export default function RouteGraphic({
  className,
  variant = 'horizontal',
  color = '#22D3EE',
  opacity = 0.3,
  animated = true,
}: RouteGraphicProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!animated || !pathRef.current) return;
    const path = pathRef.current;
    const length = path.getTotalLength();
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);
    path.style.transition = 'stroke-dashoffset 2.4s cubic-bezier(0.16, 1, 0.3, 1)';

    const timer = setTimeout(() => {
      path.style.strokeDashoffset = '0';
    }, 300);
    return () => clearTimeout(timer);
  }, [animated]);

  if (variant === 'horizontal') {
    return (
      <svg
        viewBox="0 0 800 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('w-full', className)}
        aria-hidden="true"
      >
        <path
          ref={pathRef}
          d="M0 30 H100 L120 10 H200 L220 50 H320 L340 30 H500 L520 15 H620 L640 45 H720 L740 30 H800"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={opacity}
        />
        {/* Waypoint dots */}
        <circle cx="120" cy="10" r="3" fill={color} opacity={opacity * 1.5} />
        <circle cx="220" cy="50" r="3" fill={color} opacity={opacity * 1.5} />
        <circle cx="520" cy="15" r="3" fill={color} opacity={opacity * 1.5} />
        <circle cx="640" cy="45" r="3" fill={color} opacity={opacity * 1.5} />
        {/* Destination */}
        <circle cx="800" cy="30" r="5" fill={color} opacity={opacity * 2} />
        <circle cx="800" cy="30" r="2.5" fill={color} />
      </svg>
    );
  }

  if (variant === 'diagonal') {
    return (
      <svg
        viewBox="0 0 600 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('w-full', className)}
        aria-hidden="true"
      >
        <path
          ref={pathRef}
          d="M0 180 L80 120 L160 150 L280 60 L380 90 L480 30 L600 50"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={opacity}
        />
        <circle cx="280" cy="60" r="3" fill={color} opacity={opacity * 1.5} />
        <circle cx="480" cy="30" r="4" fill={color} opacity={opacity * 2} />
      </svg>
    );
  }

  // Curved variant
  return (
    <svg
      viewBox="0 0 1000 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-full', className)}
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        d="M0 60 Q120 20 250 60 Q380 100 500 55 Q620 10 750 60 Q880 110 1000 60"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
      />
      <circle cx="250" cy="60" r="3" fill={color} opacity={opacity * 1.5} />
      <circle cx="500" cy="55" r="3" fill={color} opacity={opacity * 1.5} />
      <circle cx="750" cy="60" r="3" fill={color} opacity={opacity * 1.5} />
    </svg>
  );
}
