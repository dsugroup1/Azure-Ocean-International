// ============================================================
// AZURE OCEAN INTERNATIONAL — Industries Data
// ============================================================

import type { Industry } from '@/types';

export const industries: Industry[] = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description:
      'Logistics requirements for manufacturers often include raw material inbound coordination and finished goods outbound distribution.',
    detail:
      'Manufacturing operations depend on a reliable flow of raw materials and components inbound, and timely dispatch of finished products to trade partners or end markets. Coordinated freight support can help manufacturers maintain operational continuity.',
    color: 'cyan',
  },
  {
    id: 'retail-ecommerce',
    title: 'Retail & E-Commerce',
    description:
      'Retail and e-commerce businesses typically require structured distribution and delivery coordination to serve customers and store networks.',
    detail:
      'The movement of goods from supplier to warehouse to end customer requires organised coordination across multiple legs. Retail and e-commerce businesses benefit from well-planned distribution and last-mile logistics support.',
    color: 'azure',
  },
  {
    id: 'fmcg',
    title: 'FMCG',
    description:
      'Fast-moving consumer goods require frequent, structured freight movement to support retailer and distributor replenishment.',
    detail:
      'FMCG logistics often involves high-frequency, volume-based movement of goods to maintain shelf availability across distribution networks. Coordinated freight support can help FMCG businesses manage these flows more systematically.',
    color: 'ocean',
  },
  {
    id: 'wholesale-distribution',
    title: 'Wholesale & Distribution',
    description:
      'Wholesale and distribution businesses depend on organised freight coordination to move stock through their supply networks.',
    detail:
      'Wholesale operations involve consistent movement of goods in commercial quantities between suppliers, warehouses and trade buyers. Structured logistics coordination supports reliable freight movement within these supply networks.',
    color: 'cyan',
  },
  {
    id: 'consumer-goods',
    title: 'Consumer Goods',
    description:
      'Consumer goods companies require flexible logistics coordination to support their varied product movement requirements.',
    detail:
      'Consumer goods manufacturers and distributors face diverse logistics requirements across product categories, pack sizes and destinations. Flexible freight coordination supports their movement needs across routes.',
    color: 'azure',
  },
  {
    id: 'general-commercial',
    title: 'General Commercial Cargo',
    description:
      'Commercial businesses with general cargo freight requirements can benefit from structured logistics and transportation coordination.',
    detail:
      'Not every business fits neatly into a single industry classification. Many commercial enterprises have general cargo movement requirements — point-to-point freight, consolidated shipments, or irregular dispatch needs — that benefit from professional logistics coordination.',
    color: 'ocean',
  },
];
