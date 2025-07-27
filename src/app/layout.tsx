import type { Metadata } from "next";
import "./globals.css";
import { siteData } from "@/lib/data";
import localFont from 'next/font/local'
import { cn } from "@/lib/utils";
 

const ttFirsNeue = localFont({
  src: [
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-DemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-DemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue/TTFirsNeue-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-tt-firs-neue',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.url),
  title: "Certificate Maker Online - Create & Send Digital Certificates",
  description:
    "Certifier is a digital credentials infrastructure. Easily make, share and verify digital certificates on autopilot. All-in-one platform for generation certificates and mass sending emails to recipients. Certificate maker with user friendly interface, ready-made templates, and delivery emails.",
  applicationName: siteData.name,
  openGraph: {
    title: "Certificate Maker Online - Create & Send Digital Certificates",
    description:
      "Certifier is a digital credentials infrastructure. Easily make, share and verify digital certificates on autopilot...",
    url: siteData.url,
    siteName: siteData.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/certifier/image/upload/v1745403347/Certifier_-_Create_distribute_and_manage_digital_credentials_OpenGraph_dvkn5i.jpg",
        width: 1200,
        height: 630,
        alt: "Certifier - Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificate Maker Online - Create & Send Digital Certificates",
    description:
      "Certifier is a digital credentials infrastructure. Easily make, share and verify digital certificates on autopilot...",
    images: [
      "https://res.cloudinary.com/certifier/image/upload/v1745403347/Certifier_-_Create_distribute_and_manage_digital_credentials_OpenGraph_dvkn5i.jpg",
    ],
  },
  icons: {
    icon: [ 
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
  },
  alternates: {
    canonical: siteData.url,
    languages: {
      en: "https://certifier.io/",
      pl: "https://certifier.io/pl",
      es: "https://certifier.io/es",
      de: "https://certifier.io/de",
      fr: "https://certifier.io/fr",
      "x-default": "https://certifier.io/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "p:domain_verify": "16ae4eac3ef1c7417798249ecfd07ee7",
    "msapplication-TileColor": "#ffc40d",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("font-sans antialiased", ttFirsNeue.variable)}
      >
        {children}
      </body>
    </html>
  );
}
