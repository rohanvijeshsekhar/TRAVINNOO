import React from 'react';
import { getCollections } from '@/lib/db-server';
import { db } from '@/lib/db';
import DBHydrator from '@/components/DBHydrator';
import BlogPage from '@/components/BlogPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Journal & Insights - Travinno',
  description: 'Read the latest travel tips, destinations guides, and B2B hospitality insights by Travinno editors.',
};

export default async function BlogPageRoute() {
  const collections = await getCollections();

  // Seed server-side cache
  Object.keys(collections).forEach((key) => {
    db.collections[key] = collections[key];
  });
  db.initialized = true;

  return (
    <>
      <DBHydrator data={collections} />
      <BlogPage />
    </>
  );
}
