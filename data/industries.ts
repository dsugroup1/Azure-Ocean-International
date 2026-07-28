// ============================================================
// AZURE OCEAN INTERNATIONAL — Industries Data
// ============================================================

import type { Industry } from '@/types';

export const industries: Industry[] = [
  {
    id: 'global-manufacturing',
    title: 'Global Manufacturing',
    description:
      'International logistics requirements for manufacturers often include overseas raw material inbound coordination and global outbound distribution.',
    detail:
      'Manufacturing operations depend on a reliable flow of raw materials and components from international suppliers, particularly across Asia. Coordinated freight forwarding helps manufacturers maintain operational continuity across borders.',
    color: 'cyan',
  },
  {
    id: 'cross-border-ecommerce',
    title: 'Cross-Border E-Commerce',
    description:
      'International retail and e-commerce businesses require structured forwarding and global distribution coordination.',
    detail:
      'The movement of goods from overseas suppliers to domestic fulfillment centers requires organized coordination across multiple international legs. E-commerce businesses benefit from our strong connectivity with Asian manufacturing hubs.',
    color: 'azure',
  },
  {
    id: 'international-fmcg',
    title: 'International FMCG',
    description:
      'Fast-moving consumer goods require frequent, structured international freight movement to support global supply chains.',
    detail:
      'FMCG logistics often involves high-frequency, volume-based ocean and air freight to maintain market availability. Coordinated forwarding support can help FMCG businesses manage these international flows more systematically.',
    color: 'ocean',
  },
  {
    id: 'global-sourcing',
    title: 'Global Sourcing & Distribution',
    description:
      'Wholesale and distribution businesses depend on organized international freight forwarding to move imported stock.',
    detail:
      'Wholesale operations involve consistent movement of goods in commercial quantities between overseas suppliers and domestic warehouses. Structured logistics coordination supports reliable freight movement from China, Hong Kong, and Indonesia.',
    color: 'cyan',
  },
  {
    id: 'technology-electronics',
    title: 'Technology & Electronics',
    description:
      'Technology companies require highly secure and time-sensitive international forwarding for high-value components.',
    detail:
      'Electronics manufacturers and distributors source heavily from the Asia-Pacific region. Our specialized air and ocean freight coordination supports their complex, time-critical movement needs across global routes.',
    color: 'azure',
  },
  {
    id: 'international-project-cargo',
    title: 'International Project Cargo',
    description:
      'Businesses with oversized, heavy, or complex international freight requirements benefit from specialized forwarding coordination.',
    detail:
      'Not every business fits neatly into standard container shipping. Many commercial enterprises have project cargo movement requirements — out-of-gauge equipment or complex industrial machinery — that demand professional international logistics coordination.',
    color: 'ocean',
  },
];
