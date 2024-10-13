import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ReactNode } from 'react';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Car Dealer App',
  description: 'Car dealer app test assignment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto flex min-h-screen max-w-[1280px] flex-col p-4 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
          <header className="bor mb-5 border-b-2 border-gray-500">
            <h1 className="w-full p-2 text-5xl font-bold uppercase">
              the Car Dealer App
            </h1>
          </header>

          <main className="flex flex-col items-center gap-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
