// ============================================================
// AZURE OCEAN INTERNATIONAL — TypeScript Types
// ============================================================

export interface Service {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  detail: string;
  requirements: string[];
  process: string[];
  icon: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  detail: string;
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  legalName: string;
  tagline: string;
  description: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
    googleMapsUrl: string;
  };
  phone: string | null;
  email: string | null;
  whatsapp: string | null;
  socials: { platform: string; url: string }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Value {
  number: string;
  title: string;
  description: string;
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
}
