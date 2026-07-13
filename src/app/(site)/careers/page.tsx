import React from 'react';
import { getCollections } from '@/lib/db-server';
import { db } from '@/lib/db';
import DBHydrator from '@/components/DBHydrator';
import CareersPage from '@/components/CareersPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at Travinno - Join Our Team',
  description: 'Join the dynamic Travinno team. Apply for premium travel and operations positions around the globe.',
};

export default async function CareersPageRoute() {
  const collections = await getCollections();

  // Seed server-side cache
  Object.keys(collections).forEach((key) => {
    db.collections[key] = collections[key];
  });
  db.initialized = true;

  return (
    <>
      <DBHydrator data={collections} />
      <CareersPage />
    </>
  );
}
