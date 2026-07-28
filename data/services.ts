// ============================================================
// AZURE OCEAN INTERNATIONAL — Services / Solutions Data
// ============================================================

import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'ocean-air-freight',
    number: '01',
    title: 'Ocean & Air Freight',
    shortTitle: 'Ocean & Air Freight',
    description:
      'International freight forwarding solutions coordinating the movement of commercial goods across borders.',
    detail:
      'Ocean and air freight form the backbone of global trade. We provide comprehensive forwarding support for businesses managing imports and exports, with specialized expertise in the China, Hong Kong, and Indonesia trade lanes.',
    requirements: [
      'Full Container Load (FCL) & Less than Container Load (LCL)',
      'Time-sensitive air freight forwarding',
      'Consolidation services from major Asian ports',
      'Door-to-port and port-to-port coordination',
    ],
    process: [
      'Route evaluation and carrier selection',
      'Vessel and flight space booking',
      'Loading and transit monitoring',
      'Arrival coordination and handover',
    ],
    icon: 'Truck', // Will keep existing icons to avoid missing imports
  },
  {
    id: 'customs-clearance',
    number: '02',
    title: 'Global Customs Clearance',
    shortTitle: 'Customs Clearance',
    description:
      'Structured regulatory coordination designed to support smoother cross-border freight movement.',
    detail:
      'Effective international trade depends on organized customs planning and compliance. We offer clearance coordination services that help businesses navigate complex import and export regulations efficiently.',
    requirements: [
      'Import and export documentation',
      'Tariff classification and duty assessment',
      'Regulatory compliance consulting',
      'Port and border clearance support',
    ],
    process: [
      'Documentation review and preparation',
      'Customs declaration submission',
      'Duty and tax coordination',
      'Cargo release and dispatch',
    ],
    icon: 'Package',
  },
  {
    id: 'cross-border-warehousing',
    number: '03',
    title: 'Cross-Border Warehousing',
    shortTitle: 'Cross-Border Warehousing',
    description:
      'International logistics support for businesses managing consolidation, storage, and global distribution.',
    detail:
      'Strategic warehousing plays a critical role in international supply chains. We provide support for businesses managing cargo consolidation in key Asian hubs before onward global distribution.',
    requirements: [
      'Cargo consolidation in origin ports',
      'Bonded warehousing solutions',
      'De-consolidation at destination',
      'Inventory management and distribution',
    ],
    process: [
      'Supplier coordination and receipt',
      'Consolidation and container stuffing',
      'Storage and inventory tracking',
      'Dispatch and delivery scheduling',
    ],
    icon: 'Warehouse',
  },
  {
    id: 'global-supply-chain',
    number: '04',
    title: 'Global Supply Chain Management',
    shortTitle: 'Global Supply Chain',
    description:
      'Practical coordination across international stages of goods movement to help businesses maintain global operations.',
    detail:
      'A well-coordinated international supply chain enables businesses to operate more predictably across borders. Our support covers the sourcing, movement, and coordination stages from Asian manufacturing hubs to global markets.',
    requirements: [
      'Multi-country goods movement coordination',
      'Overseas supplier-to-business freight',
      'Cross-border production logistics',
      'International supply chain visibility',
    ],
    process: [
      'Global supply chain requirement mapping',
      'International multi-modal planning',
      'Coordination with overseas agents',
      'Ongoing tracking and milestone visibility',
    ],
    icon: 'GitBranch',
  },
  {
    id: 'international-trade',
    number: '05',
    title: 'International Trade Logistics',
    shortTitle: 'Trade Logistics',
    description:
      'Global transportation and forwarding support structured around international commercial requirements.',
    detail:
      'Global business-to-business logistics demands a structured, professional approach. We support international enterprises with forwarding and transport coordination tailored to complex cross-border trade.',
    requirements: [
      'Commercial import/export coordination',
      'Letters of credit & trade documentation',
      'Cross-trade shipment management',
      'International vendor coordination',
    ],
    process: [
      'International trade requirement review',
      'Customized cross-border planning',
      'Scheduled global movement coordination',
      'Proactive milestone reporting',
    ],
    icon: 'Building2',
  },
  {
    id: 'port-to-door',
    number: '06',
    title: 'Port-to-Door Delivery',
    shortTitle: 'Port-to-Door',
    description:
      'Support for coordinating the final domestic stage of imported goods movement toward their final destination.',
    detail:
      'The final leg of an international shipment requires precise coordination to ensure imported goods reach their inland destination efficiently. We provide seamless transition from port or airport to the final door.',
    requirements: [
      'Port and airport cargo retrieval',
      'Inland container haulage',
      'De-consolidation and local distribution',
      'Final-mile delivery confirmation',
    ],
    process: [
      'Arrival and clearance verification',
      'Inland transport route coordination',
      'Local carrier engagement',
      'Final delivery completion and POD',
    ],
    icon: 'MapPin',
  },
];
