import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Travinno - Crafting Journeys, Creating Memories',
  description: 'Premium B2B travel partner contract for luxury custom packages, destination management, and leisure travel.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#050505',
          color: '#F5F2EC',
          minHeight: '100vh',
        }}
      >
        {children}
      </body>
    </html>
  );
}
