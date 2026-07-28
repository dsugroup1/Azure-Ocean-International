// ============================================================
// AZURE OCEAN INTERNATIONAL — Centralized Company Configuration
// ============================================================
// This is the single source of truth for all company information.
// When phone, email, WhatsApp, or social media details become
// available, add them here and they will propagate throughout
// the entire website automatically.
// ============================================================

import type { CompanyInfo } from '@/types';

export const company: CompanyInfo = {
  name: 'Azure Ocean International',
  shortName: 'Azure Ocean',
  legalName: 'Azure Ocean International',
  tagline: 'Logistics for a connected global market.',
  description:
    'Azure Ocean International is a New Delhi-based freight forwarding company specializing in cross-border logistics, ocean and air freight, and strong trade lane connectivity with China, Hong Kong, and Indonesia.',

  address: {
    line1: '117/8, Deep Shikha Building',
    line2: 'Link Road, Block No. 2',
    line3: 'Rajendra Place',
    city: 'Central Delhi',
    state: 'Delhi',
    pincode: '110008',
    country: 'India',
    full: '117/8, Deep Shikha Building, Link Road, Block No. 2, Rajendra Place, Central Delhi, Delhi – 110008, India',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=117%2F8+Deep+Shikha+Building+Link+Road+Rajendra+Place+Central+Delhi+Delhi+110008+India',
  },

  // ── Contact details ───────────────────────────────────────
  // Currently null — add values here when officially available.
  // The website will automatically display them wherever contact
  // information is referenced.
  phone: null,
  email: null,
  whatsapp: null,

  // ── Social media accounts ─────────────────────────────────
  // Add objects of shape { platform: 'LinkedIn', url: 'https://...' }
  // when official accounts are created.
  socials: [],
};
