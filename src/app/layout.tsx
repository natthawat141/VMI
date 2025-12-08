import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://vmimedia.co"; // Update with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VMI Media | Visualize Media Innovation",
    template: "%s | VMI Media",
  },
  description:
    "บริษัท Visualize Media Innovation จำกัด - สร้างสรรค์ประสบการณ์ดิจิทัลที่น่าหลงใหล ผ่าน AR, Music Marketing, Event Organizing และ Website Creation",
  keywords: [
    "AR",
    "Augmented Reality",
    "Music Marketing",
    "Event Organizing",
    "Website Creation",
    "Digital Marketing",
    "VMI Media",
    "เอเจนซี่ดิจิทัล",
    "การตลาดเพลง",
    "จัดงานอีเวนต์",
    "ทำเว็บไซต์",
    "ประเทศไทย",
  ],
  authors: [{ name: "VMI Media", url: siteUrl }],
  creator: "VMI Media",
  publisher: "Visualize Media Innovation Co., Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "VMI Media",
    title: "VMI Media | Visualize Media Innovation",
    description:
      "สร้างสรรค์ประสบการณ์ดิจิทัลที่น่าหลงใหล ผ่าน AR, Music Marketing, Event Organizing และ Website Creation",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "VMI Media - Visualize Media Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VMI Media | Visualize Media Innovation",
    description:
      "สร้างสรรค์ประสบการณ์ดิจิทัลที่น่าหลงใหล ผ่าน AR, Music Marketing และอื่นๆ",
    images: ["/images/logo.png"],
    creator: "@vmimedia", // Update with your Twitter handle
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
  verification: {
    // google: "your-google-verification-code", // Add when available
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "th-TH": siteUrl,
      "en-US": `${siteUrl}/en`,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#121212" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VMI Media",
              alternateName: "Visualize Media Innovation Co., Ltd.",
              url: siteUrl,
              logo: `${siteUrl}/images/logo.png`,
              description:
                "Creative digital agency specializing in AR, Music Marketing, Event Organizing, and Website Creation.",
              sameAs: [
                "https://www.facebook.com/vmimedia", // Update with actual links
                "https://www.instagram.com/vmimedia",
                "https://line.me/vmimedia",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "TH",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "contact@vmimedia.com",
              },
            }),
          }}
        />
        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "VMI Media",
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
