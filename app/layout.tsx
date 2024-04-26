import './globals.css';
import type { Metadata } from 'next';
import DataContext from '@/app/_providers/DataContext';

export const metadata: Metadata = {
  title: 'MyNotebook',
  description: 'Designed for efficient note-taking and task management.',
  //applicationName: 'My App',
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="hidden" lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <meta property="og:image" content="/MyNotebook.png" />
      </head>
      <body className={'bg-[#f7f7f7] dark:bg-[#1C1C1C]'}>
        <DataContext>{children}</DataContext>
      </body>
    </html>
  );
}
