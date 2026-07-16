'use client';

import React, { useEffect } from 'react';
import { db } from '@/lib/db';

interface DBHydratorProps {
  data: Record<string, any>;
}

export default function DBHydrator({ data }: DBHydratorProps) {
  // Load all SSR collections into the client-side db cache first
  if (data) {
    Object.keys(data).forEach((key) => {
      if (data[key] !== undefined && data[key] !== null) {
        db.collections[key] = data[key];
      }
    });
  }

  // Signal db.init() that SSR already provided the latest server data.
  // This prevents the redundant client-side /api/ping + /api/collections fetch
  // that was causing the 8–10 second image load delay after admin updates.
  db.ssrHydrated = Object.keys(data || {}).length > 0;

  // Initialize the db — will now take the SSR fast path and skip network fetches
  db.init();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Preserve default index page SEO as initial fallback
    const defaultTitle = document.title;
    const defaultDescEl = document.querySelector('meta[name="description"]');
    const defaultDesc = defaultDescEl ? defaultDescEl.getAttribute('content') : '';

    const handleHashTitle = () => {
      const hash = window.location.hash;
      let pageKey = '';
      if (hash === '#services') pageKey = 'services';
      else if (hash === '#testimonials') pageKey = 'testimonials';

      const seoList = db.collections['travinno_seo'] || [];

      if (pageKey) {
        const entry = seoList.find((item: any) => item.page === pageKey);
        if (entry) {
          if (entry.title) document.title = entry.title;
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc && entry.description) {
            metaDesc.setAttribute('content', entry.description);
          }
        }
      } else {
        // Determine the current route page key to resolve standard page title
        const path = window.location.pathname;
        let routeKey = 'home';
        if (path.includes('/about')) routeKey = 'about';
        else if (path.includes('/blog')) routeKey = 'blog';
        else if (path.includes('/careers')) routeKey = 'careers';
        else if (path.includes('/contact')) routeKey = 'contact';
        else if (path.includes('/destinations')) routeKey = 'destinations';
        else if (path.includes('/team')) routeKey = 'team';

        const entry = seoList.find((item: any) => item.page === routeKey);
        if (entry) {
          if (entry.title) document.title = entry.title;
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc && entry.description) {
            metaDesc.setAttribute('content', entry.description);
          }
        } else {
          document.title = defaultTitle;
          if (defaultDescEl && defaultDesc) {
            defaultDescEl.setAttribute('content', defaultDesc);
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashTitle);
    window.addEventListener('travinno-db-update', handleHashTitle);
    
    // Run initially on mount
    handleHashTitle();

    return () => {
      window.removeEventListener('hashchange', handleHashTitle);
      window.removeEventListener('travinno-db-update', handleHashTitle);
    };
  }, []);

  return null;
}
