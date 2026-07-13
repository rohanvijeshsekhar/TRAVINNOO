'use client';

import { db } from '@/lib/db';

interface DBHydratorProps {
  data: Record<string, any>;
}

export default function DBHydrator({ data }: DBHydratorProps) {
  // Always hydrate during render to ensure each page route seeds client cache correctly.
  // This is safe because db.collections is just an in-memory object — overwriting is idempotent.
  if (data) {
    Object.keys(data).forEach((key) => {
      db.collections[key] = data[key];
    });
    db.initialized = true;
  }
  return null;
}
