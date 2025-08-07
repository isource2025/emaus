import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Emaús - Comunidad Religiosa',
  description: 'Un camino de fe, comunidad y renovación. Sumate a Emaús y descubrí una experiencia espiritual transformadora.',
  keywords: 'comunidad religiosa, fe, espiritualidad, retiro, Emaús',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#8B4513" />
      </head>
      <body>{children}</body>
    </html>
  );
}
