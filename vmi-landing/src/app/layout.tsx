import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VMI Media | Visualize Media Innovation",
  description: "We Create Captivating Digital Experiences. AR, Music Marketing, Event Organizing, and Website Creation.",
  keywords: ["AR", "Augmented Reality", "Music Marketing", "Event Organizing", "Website Creation", "Digital Marketing", "VMI Media"],
  authors: [{ name: "VMI Media" }],
  openGraph: {
    title: "VMI Media | Visualize Media Innovation",
    description: "We Create Captivating Digital Experiences.",
    type: "website",
    locale: "th_TH",
  },
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
      </head>
      <body className="font-sans antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
