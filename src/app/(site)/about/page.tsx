import React from 'react';
import { getCollections } from '@/lib/db-server';
import { db } from '@/lib/db';
import DBHydrator from '@/components/DBHydrator';
import { ParallaxComponent } from '@/components/ui/parallax-scrolling';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Our Journey - Travinno',
  description: 'Explore the legacy, core purpose, and chronological journey of Travinno.',
};

export default async function AboutPage() {
  const collections = await getCollections();

  // Seed server-side cache
  Object.keys(collections).forEach((key) => {
    db.collections[key] = collections[key];
  });
  db.initialized = true;

  return (
    <>
      <DBHydrator data={collections} />
      <ParallaxComponent />
    </>
  );
}
