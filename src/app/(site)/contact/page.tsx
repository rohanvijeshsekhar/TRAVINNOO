import React from 'react';
import { getCollections } from '@/lib/db-server';
import { db } from '@/lib/db';
import DBHydrator from '@/components/DBHydrator';
import ContactPage from '@/components/ContactPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Travinno Partner Onboarding',
  description: 'Reach out to establish a B2B partner contract or make custom travel inquiries with Travinno.',
};

export default async function ContactPageRoute() {
  const collections = await getCollections();

  // Seed server-side cache
  Object.keys(collections).forEach((key) => {
    db.collections[key] = collections[key];
  });
  db.initialized = true;

  return (
    <>
      <DBHydrator data={collections} />
      <ContactPage />
    </>
  );
}
