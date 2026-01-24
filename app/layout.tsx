import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { SWRConfig } from 'swr';

const { getUser, getTeamForUser } = process.env.POSTGRES_URL
  ? await import('@/lib/db/queries')
  : { getUser: null, getTeamForUser: null };

export const metadata: Metadata = {
  title: 'Next.js SaaS Starter',
  description: 'Get started quickly with Next.js, Postgres, and Stripe.'
};

export const viewport: Viewport = {
  maximumScale: 1
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${inter.className}`}
    >
      <body className="min-h-[100dvh] bg-gray-50">
        <SWRConfig
          value={{
            fallback: process.env.POSTGRES_URL
              ? {
                  '/api/user': getUser?.(),
                  '/api/team': getTeamForUser?.(),
                }
              : {},
          }}
        >
          {children}
        </SWRConfig>
      </body>
    </html>
  );
}
