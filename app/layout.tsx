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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" />
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