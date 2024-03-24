'use client';

import './globals.css';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={'My App'} />
        <title>{'My App'}</title>
        <meta name="apple-mobile-web-app-title" content="My App" />
        <meta name="application-name" content="My App" />
        <link rel="manifest" href="/manifest.webmanifest"></link>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={'bg-[#161616]'}>
        <div className="mx-auto overflow-x-clip font-sans">
          <SessionProvider>{children}</SessionProvider>
        </div>
      </body>
    </html>
  );
}
