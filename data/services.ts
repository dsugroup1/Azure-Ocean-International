// ============================================================
// AZURE OCEAN INTERNATIONAL — Services / Solutions Data
// ============================================================

import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'road-freight',
    number: '01',
    title: 'Road Freight',
    shortTitle: 'Road Freight',
    description:
      'Transportation-focused support for coordinating the movement of commercial goods between locations.',
    detail:
      'Road freight forms the backbone of domestic goods movement. We provide coordination support for businesses that need structured, point-to-point transportation of commercial goods across routes.',
    requirements: [
      'Domestic commercial cargo movement',
      'Business-to-business goods transport',
      'Bulk and consolidated freight requirements',
      'Time-sensitive road deliveries',
    ],
    process: [
      'Requirement assessment and route evaluation',
      'Load planning and vehicle coordination',
      'Movement monitoring and communication',
      'Delivery coordination and completion',
    ],
    icon: 'Truck',
  },
  {
    id: 'freight-coordination',
    number: '02',
    title: 'Freight Coordination',
    shortTitle: 'Freight Coordination',
    description:
      'Structured coordination designed to support smoother freight movement from requirement to destination.',
    detail:
      'Effective freight management depends on organised planning and clear communication. We offer coordination services that help businesses structure their freight requirements more efficiently.',
    requirements: [
      'Multi-leg freight coordination',
      'Commercial shipment planning',
      'Carrier and transport coordination',
      'Documentation and movement support',
    ],
    process: [
      'Freight requirement analysis',
      'Carrier identification and coordination',
      'Movement planning and scheduling',
      'Progress tracking and communication',
    ],
    icon: 'Package',
  },
  {
    id: 'warehousing-distribution',
    number: '03',
    title: 'Warehousing & Distribution Support',
    shortTitle: 'Warehousing & Distribution',
    description:
      'Logistics support for businesses managing storage, dispatch and distribution requirements.',
    detail:
      'Storage and distribution coordination plays a critical role in business supply chains. We provide support for businesses managing warehousing logistics, dispatch coordination and distribution planning.',
    requirements: [
      'Storage and inventory coordination support',
      'Dispatch and order fulfilment logistics',
      'Distribution planning and coordination',
      'Hub-and-spoke delivery support',
    ],
    process: [
      'Distribution requirement assessment',
      'Storage logistics coordination',
      'Dispatch scheduling and sequencing',
      'Delivery route coordination',
    ],
    icon: 'Warehouse',
  },
  {
    id: 'supply-chain-support',
    number: '04',
    title: 'Supply Chain Support',
    shortTitle: 'Supply Chain',
    description:
      'Practical coordination across different stages of goods movement to help businesses maintain efficient operations.',
    detail:
      'A well-coordinated supply chain enables businesses to operate more predictably. Our support covers the planning, movement and coordination stages of a supply chain to help reduce unnecessary complexity.',
    requirements: [
      'Multi-stage goods movement coordination',
      'Supplier-to-business freight coordination',
      'Production logistics support',
      'Business supply chain planning',
    ],
    process: [
      'Supply chain requirement mapping',
      'Stage-by-stage movement planning',
      'Coordination across transport modes',
      'Ongoing communication and visibility',
    ],
    icon: 'GitBranch',
  },
  {
    id: 'b2b-logistics',
    number: '05',
    title: 'B2B Logistics',
    shortTitle: 'B2B Logistics',
    description:
      'Transportation and logistics support structured around commercial and business requirements.',
    detail:
      'Business-to-business logistics demands a structured, professional approach. We support commercial enterprises with freight and transportation coordination tailored to their specific operational needs.',
    requirements: [
      'Commercial freight coordination',
      'Business distribution support',
      'Trade and commerce logistics',
      'Regular B2B delivery coordination',
    ],
    process: [
      'Commercial requirement review',
      'Customised logistics planning',
      'Scheduled movement coordination',
      'Service communication and reporting',
    ],
    icon: 'Building2',
  },
  {
    id: 'last-mile-coordination',
    number: '06',
    title: 'Last-Mile Coordination',
    shortTitle: 'Last-Mile',
    description:
      'Support for coordinating the final stage of goods movement toward its intended destination.',
    detail:
      'The final leg of any shipment requires precise coordination to ensure goods reach their destination efficiently. We provide last-mile logistics coordination support for businesses needing structured delivery management.',
    requirements: [
      'Final-stage delivery coordination',
      'Urban and semi-urban delivery support',
      'Time-bound last-mile movement',
      'Delivery confirmation coordination',
    ],
    process: [
      'Delivery requirement mapping',
      'Route and timing coordination',
      'Last-mile carrier engagement',
      'Delivery completion and confirmation',
    ],
    icon: 'MapPin',
  },
];
