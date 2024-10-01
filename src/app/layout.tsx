import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Upcoming IPOs & IPO Listings in India 2024 | GMP, Analysis, Dates",
  description:
    "Discover the latest upcoming IPOs in India for 2024. Get real-time updates on IPO listings, Grey Market Premium (GMP), company details, IPO dates, subscription status, and expert analysis.",
  keywords:
    "upcoming IPOs India 2024, IPO list 2024, IPO listings, IPO GMP, latest IPOs, IPO subscription status, Grey Market Premium, IPO analysis, new IPOs, IPO dates",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.theipolist.in",
  }, // Ensure proper canonical URL
  openGraph: {
    title: "Upcoming IPOs & IPO Listings in India 2024 | GMP, Analysis, Dates",
    description:
      "Stay ahead with real-time updates on IPO listings, Grey Market Premium, and upcoming IPOs in India for 2024.",
    url: "https://theipolist.in",
    type: "website",
    images: [
      {
        url: "https://theipolist.in/images/ipo-listing-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Upcoming IPOs in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // site: "@YourTwitterHandle",
    title: "Upcoming IPOs & IPO Listings in India 2024 | GMP, Analysis, Dates",
    description:
      "Find the most accurate and updated information on upcoming IPOs in India. Detailed IPO listings, company analysis, and market insights.",
    images: [
      {
        url: "https://theipolist.in/images/ipo-listing-thumbnail.png",
        alt: "Upcoming IPOs & IPO Listings in India 2024 | GMP, Analysis, Dates",
      },
    ],
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <Suspense>{children}</Suspense>
        <Footer />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
