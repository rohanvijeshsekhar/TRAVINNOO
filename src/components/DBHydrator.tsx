'use client';

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

  return null;
}
