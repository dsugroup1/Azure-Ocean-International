// ============================================================
// AZURE OCEAN INTERNATIONAL — Utility Functions
// ============================================================

/**
 * Joins class names, filtering out falsy values.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format an address object into an array of display lines.
 */
export function formatAddressLines(address: {
  line1: string;
  line2: string;
  line3: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}): string[] {
  return [
    address.line1,
    address.line2,
    address.line3,
    `${address.city}, ${address.state} – ${address.pincode}`,
    address.country,
  ];
}

/**
 * Returns the current year as a string.
 */
export function currentYear(): number {
  return new Date().getFullYear();
}
