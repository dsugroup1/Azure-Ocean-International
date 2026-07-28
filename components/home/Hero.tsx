'use client';

// ============================================================
// Hero — Homepage cinematic logistics hero
// ============================================================

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {

  // Animated route line drawing effect
  useEffect(() => {
    const path = document.querySelector('#hero-route-path') as SVGPathElement;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);
    setTimeout(() => {
      path.style.transition = 'stroke-dashoffset 3s cubic-bezier(0.16, 1, 0.3, 1)';
      path.style.strokeDashoffset = '0';
    }, 600);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Homepage hero"
    >
      {/* ── Background ── */}
      {/* ── Background ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-bg.png')`,
        }}
        aria-hidden="true"
      />
      {/* Gradient overlays to maintain text legibility */}
      <div className="absolute inset-0 bg-[#020D14]/70 mix-blend-multiply" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020D14] via-[#020D14]/50 to-transparent" aria-hidden="true" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(#22D3EE 1px, transparent 1px),
            linear-gradient(90deg, #22D3EE 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Container geometry decorations */}
      <div className="absolute top-24 right-0 w-[40vw] h-[40vw] max-w-xl max-h-xl opacity-[0.06] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="20" y="20" width="360" height="100" rx="4" stroke="#22D3EE" strokeWidth="1" />
          <rect x="20" y="140" width="360" height="100" rx="4" stroke="#22D3EE" strokeWidth="1" />
          <rect x="20" y="260" width="360" height="100" rx="4" stroke="#22D3EE" strokeWidth="1" />
          <line x1="100" y1="20" x2="100" y2="360" stroke="#22D3EE" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="200" y1="20" x2="200" y2="360" stroke="#22D3EE" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="300" y1="20" x2="300" y2="360" stroke="#22D3EE" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Animated route line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute bottom-0 left-0 w-full opacity-25"
          viewBox="0 0 1440 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            id="hero-route-path"
            d="M0 250 L120 200 L240 230 L400 150 L560 180 L720 100 L900 130 L1080 70 L1260 95 L1440 50"
            stroke="#22D3EE"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Waypoints */}
          <circle cx="400" cy="150" r="4" fill="#22D3EE" opacity="0.6" />
          <circle cx="720" cy="100" r="4" fill="#22D3EE" opacity="0.6" />
          <circle cx="1080" cy="70" r="4" fill="#22D3EE" opacity="0.6" />
          <circle cx="1440" cy="50" r="6" fill="#22D3EE" opacity="0.9" />
          <circle cx="1440" cy="50" r="3" fill="#22D3EE" />
        </svg>
      </div>

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 60%, rgba(2,132,199,0.2) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#22D3EE]" aria-hidden="true" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#22D3EE]/80 font-medium">
              GLOBAL FREIGHT • CROSS-BORDER • LOGISTICS
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-display uppercase leading-[0.92] tracking-tight text-white"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            MOVING
            <br />
            <span className="text-transparent" style={{
              WebkitTextStroke: '1px rgba(34,211,238,0.6)',
            }}>
              BUSINESS
            </span>
            <br />
            BEYOND
            <br />
            BOUNDARIES.
          </h1>

          {/* Supporting copy */}
          <p className="mt-10 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
            Azure Ocean International provides international freight forwarding solutions designed around the
            global movement, cross-border coordination, and complex transportation needs of modern businesses.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold px-8 py-4 rounded-sm transition-all duration-300 shadow-xl shadow-[#0284C7]/25 hover:shadow-[#0284C7]/40 text-sm tracking-wide"
            >
              Explore Our Solutions
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 text-white border border-white/25 hover:border-white/50 hover:bg-white/10 font-semibold px-8 py-4 rounded-sm transition-all duration-300 text-sm tracking-wide"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Floating category labels */}
        <div className="hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 flex-col gap-4" aria-hidden="true">
          {['Freight', 'Transport', 'Distribution', 'Supply Chain'].map((label, i) => (
            <div
              key={label}
              className="glass px-4 py-2 text-xs tracking-[0.2em] uppercase text-[#22D3EE]/70 rounded-sm"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Ticker ── */}
      <div
        className="relative z-10 border-t border-white/[0.08] py-4 overflow-hidden"
        aria-hidden="true"
      >
        <div className="ticker-wrapper">
          <div className="ticker-track">
            {[
              'OCEAN & AIR FREIGHT',
              'CUSTOMS CLEARANCE',
              'CROSS-BORDER WAREHOUSING',
              'GLOBAL SUPPLY CHAIN',
              'TRADE LOGISTICS',
              'PORT-TO-DOOR',
              'INTERNATIONAL FREIGHT',
              'CROSS-BORDER',
              'OCEAN & AIR FREIGHT',
              'CUSTOMS CLEARANCE',
              'CROSS-BORDER WAREHOUSING',
              'GLOBAL SUPPLY CHAIN',
              'TRADE LOGISTICS',
              'PORT-TO-DOOR',
              'INTERNATIONAL FREIGHT',
              'CROSS-BORDER',
            ].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-6 px-6 text-xs tracking-[0.25em] text-slate-500 whitespace-nowrap"
              >
                {item}
                <span className="w-1 h-1 rounded-full bg-[#22D3EE]/30 flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
