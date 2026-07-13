'use client';

import { db } from '@/lib/db';

interface DBHydratorProps {
  data: Record<string, any>;
}

export default function DBHydrator({ data }: DBHydratorProps) {
  // Initialize client-side database cache with sessionStorage and fallbacks first
  db.init();

  if (data) {
    Object.keys(data).forEach((key) => {
      if (data[key] !== undefined && data[key] !== null) {
        db.collections[key] = data[key];
      }
    });
  }
  return null;
}
