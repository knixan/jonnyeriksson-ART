import "./globals.css";
import { ReactNode } from "react";
import { Metadata, Viewport } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";
import { Playfair_Display, Space_Grotesk } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400","500","600","700","800","900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: {
    default: "Jonny Eriksson Konst - Svensk Konstnär & Akrylkonst",
    template: "%s | Jonny Eriksson Konst"
  },
  description: "Upptäck Jonny Erikssons unika akrylkonst och oljemålningar. Moderna konstverk från Stockholm, nordiska miljöer och varmare breddgrader. Köp originalkonst direkt från konstnären.",
  keywords: [
    "Jonny Eriksson",
    "konstnär",
    "akrylkonst",
    "oljemålningar",
    "svensk konst",
    "Stockholm konst",
    "modern konst",
    "konstverk",
    "konst till salu",
    "originalkonst",
    "konstgalleri",
    "svensk konstnär"
  ],
  authors: [{ name: "Jonny Eriksson" }],
  creator: "Jonny Eriksson",
  publisher: "Jonny Eriksson Konst",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jonnyeriksson-konst.se'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://jonnyeriksson-konst.se',
    title: 'Jonny Eriksson Konst - Svensk Konstnär & Akrylkonst',
    description: 'Upptäck Jonny Erikssons unika akrylkonst och oljemålningar. Moderna konstverk från Stockholm, nordiska miljöer och varmare breddgrader.',
    siteName: 'Jonny Eriksson Konst',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jonny Eriksson Konst - Akrylkonst och oljemålningar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jonny Eriksson Konst - Svensk Konstnär & Akrylkonst',
    description: 'Upptäck Jonny Erikssons unika akrylkonst och oljemålningar. Moderna konstverk från Stockholm, nordiska miljöer och varmare breddgrader.',
    images: ['/og-image.jpg'],
    creator: '@jonnyeriksson',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv" className={`${spaceGrotesk.className} ${playfair.className}`}>
      <head>
        <StructuredData />
      </head>
      <body className="bg-white text-black">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
