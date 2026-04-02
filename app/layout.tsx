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
      className={`bg-gray-200 dark:bg-gray-950 text-black dark:text-white ${inter.className}`}
    >
      <head>
        <link rel="preconnect" href="https://pub-d7ec1a8fa14f4570abdeff8e1cb2012e.r2.dev" />
        <link rel="dns-prefetch" href="https://pub-d7ec1a8fa14f4570abdeff8e1cb2012e.r2.dev" />
      </head>
      <body className="min-h-[100dvh] bg-gray-200">
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
