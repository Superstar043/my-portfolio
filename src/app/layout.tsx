import type { Metadata } from 'next';
import '../style/globals.css';

import { Oxanium } from 'next/font/google';

const mainFont = Oxanium({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Christian Calderon',
  description: 'A passionate Full Stack Developer'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
