import type { Metadata } from 'next';
import React from 'react';
import { barlowCondensed, openSans, playfairDisplay } from '@/lib/fonts';
import 'swiper/css';
import 'swiper/css/navigation';
import './globals.css';
import RootLayoutClient from '@/app/RootLayoutClient';

export const metadata: Metadata = {
  title: 'Hoteler - Hotel Booking React Next JS Template',
  description: 'Hotel Booking React Next JS Template',
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${openSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style-dark.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}