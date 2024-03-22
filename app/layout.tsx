import './globals.css';
import type { Metadata } from 'next';
import { Inter, Source_Code_Pro } from 'next/font/google';

const fontSans = Inter({
  subsets: ['latin'],
  display: 'block',
  variable: '--font-sans',
});

const fontMono = Source_Code_Pro({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'block',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'My App',
  applicationName: 'My App',
  description: 'My App',
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={[fontSans, fontMono]
          .map((font) => font.variable)
          .join(' ')
          .concat(' ')
          .concat('bg-[#161616]')}
      >
        <div className="mx-auto overflow-x-clip font-sans">{children}</div>
      </body>
    </html>
  );
}
