'use client';

// ============================================================
// Navbar — Sticky, scroll-aware navigation
// ============================================================

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/brand/Logo';
import MobileMenu from '@/components/layout/MobileMenu';
import { navItems } from '@/data/navigation';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(() => handleScroll(), 0);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setTimeout(() => setMenuOpen(false), 0);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navbarBg = scrolled || !isHomePage
    ? 'bg-[#061826]/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/[0.06]'
    : 'bg-transparent';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          navbarBg,
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo variant="light" />

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-sm tracking-wide transition-colors duration-200 relative group',
                      isActive
                        ? 'text-[#22D3EE]'
                        : 'text-slate-300 hover:text-white',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {/* Underline hover effect */}
                    <span
                      className={cn(
                        'absolute -bottom-1 left-0 h-px bg-[#22D3EE] transition-all duration-300',
                        isActive ? 'w-full' : 'w-0 group-hover:w-full',
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link
                href="/request-quote"
                className="text-sm font-semibold tracking-wide bg-[#0284C7] hover:bg-[#0369A1] text-white px-6 py-3 rounded-sm transition-all duration-300 shadow-lg shadow-[#0284C7]/20 hover:shadow-[#0284C7]/30 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061826]"
              >
                Request a Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
