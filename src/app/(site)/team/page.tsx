import React from 'react';
import { getCollections } from '@/lib/db-server';
import { db } from '@/lib/db';
import DBHydrator from '@/components/DBHydrator';
import TeamPage from '@/components/TeamPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Executive Leadership & Travel Specialists - Travinno',
  description: 'Meet the passionate professionals and travel specialists behind Travinno.',
};

export default async function TeamPageRoute() {
  const collections = await getCollections();

  // Seed server-side cache
  Object.keys(collections).forEach((key) => {
    db.collections[key] = collections[key];
  });
  db.initialized = true;

  return (
    <>
      <DBHydrator data={collections} />
      <TeamPage />
    </>
  );
}
