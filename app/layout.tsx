import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Syne } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { company } from '@/data/company';

// ── Typography ──────────────────────────────────────────────
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['700', '800'],
});

// ── Root Metadata ───────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://azureoceanitnl.com'),
  title: {
    default: 'Azure Ocean International | Logistics & Freight Solutions',
    template: '%s | Azure Ocean International',
  },
  description:
    'Azure Ocean International is a New Delhi-based logistics company focused on transportation, freight coordination and supply-chain support for business requirements.',
  keywords: [
    'logistics company Delhi',
    'freight coordination India',
    'road freight Delhi',
    'supply chain support',
    'B2B logistics India',
    'warehousing distribution Delhi',
    'last mile logistics',
    'Azure Ocean International',
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: company.name,
    title: 'Azure Ocean International | Logistics & Freight Solutions',
    description:
      'Azure Ocean International — Logistics, freight coordination and supply-chain support for businesses. Based in New Delhi, India.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azure Ocean International | Logistics & Freight Solutions',
    description:
      'Logistics, freight coordination and supply-chain support for businesses. Based in New Delhi, India.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
