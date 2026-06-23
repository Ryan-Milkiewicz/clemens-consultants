import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Clemens Consultants - Expert Accounting & Financial Services",
  description:
    "Clemens Consultants provides expert accounting and financial services for businesses in the Capital District",
  keywords: [
    "audit",
    "tax",
    "advisory",
    "assurance",
    "accounting",
    "financial services",
    "Capital District",
    "Clemens Consultants",
  ],
  openGraph: {
    title: "Clemens Consultants - Expert Accounting & Financial Services",
    description:
      "Clemens Consultants provides expert accounting and financial services for businesses in the Capital District",
    url: "https://clemensconsultants.com",
    siteName: "Clemens Consultants",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://www.schema.org",
    "@type": ["AccountingService", "ProfessionalService"],
    name: "Clemens Consultants",
    url: "https://www.clemensconsultants.com/",
    description:
      "Clemens Consultants provides expert accounting and financial services for businesses in the Capital District",
    address: {
      "@type": "PostalAddress",
      streetAddress: "122 1st Dyke Rd",
      addressLocality: "Averill Park",
      addressRegion: "NY",
      postalCode: "12018",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-518-960-9227",
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: "English",
    },
  };
  return (
    <html lang="en">
      <head>
        <title>
          Clemens Consultants - Expert Accounting & Financial Services
        </title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
