import { MetadataRoute } from 'next';
import { navItems } from '@/data/navigation';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://azureoceanitnl.com'; // Replace with actual domain when deployed

  // Generate sitemap entries for main navigation pages
  const routes = navItems.map((item) => ({
    url: `${baseUrl}${item.href === '/' ? '' : item.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: item.href === '/' ? 1.0 : 0.8,
  }));

  // Add utility pages
  const utilityRoutes = [
    {
      url: `${baseUrl}/request-quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  return [...routes, ...utilityRoutes];
}
