import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteData } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL(siteData.url),
  title: "Certificate Maker Online - Create & Send Digital Certificates",
  description:
    "Certifier is a digital credentials infrastructure. Easily make, share and verify digital certificates on autopilot. All-in-one platform for generation certificates and mass sending emails to recipients. Certificate maker with user friendly interface, ready-made templates, and delivery emails.",
  applicationName: siteData.name,
  themeColor: "#ffffff",
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
    apple: { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
    shortcut: "/favicon/favicon.ico",
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
