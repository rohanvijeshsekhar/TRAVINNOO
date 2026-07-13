import React from 'react';
import { getCollections } from '@/lib/db-server';
import { db } from '@/lib/db';
import DBHydrator from '@/components/DBHydrator';
import DestinationsPage from '@/components/DestinationsPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Destinations Showcase - Travinno',
  description: 'Discover futuristic cities, private deserts, and tropical archipelagos designed by Travinno specialists.',
};

export default async function DestinationsPageRoute() {
  const collections = await getCollections();

  // Seed server-side cache
  Object.keys(collections).forEach((key) => {
    db.collections[key] = collections[key];
  });
  db.initialized = true;

  return (
    <>
      <DBHydrator data={collections} />
      <DestinationsPage />
    </>
  );
}
