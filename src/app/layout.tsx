import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IPO Listings in India | GMP, Company Details & Latest Updates",
  description:
    "Get the latest information on IPO listings in India, Grey Market Premium (GMP), company details, IPO dates, and expert analysis. Stay updated with upcoming IPOs, subscription status, and more.",
  keywords:
    "IPO listings India, IPO GMP, IPO details, upcoming IPOs, IPO news, IPO subscription status, IPO market updates, Grey Market Premium, company IPO information",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
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
        {children}
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
