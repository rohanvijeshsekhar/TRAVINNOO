import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ success: true }, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
    }
  });
}
