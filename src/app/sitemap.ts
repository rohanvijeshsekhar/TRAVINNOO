import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://travinno.com';
  const routes = ['', '/about', '/team', '/contact', '/careers', '/blog', '/destinations', '/privacy', '/terms'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/blog' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/destinations' || route === '/blog' ? 0.8 : 0.5,
  }));
}
