import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";
import StructuredData from "@/components/StructuredData";
import { isProdDeployment, siteConfig } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Managed Student, Corporate & Bus Rental Transportation Service`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "student transportation",
    "corporate shuttle service",
    "bus fleet management",
    "bus rental",
    "school bus tracking",
    "AI safety monitoring transportation",
  ],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Managed Student, Corporate & Bus Rental Transportation Service`,
    description: siteConfig.description,
    images: ["/images/slide-1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Certainty in Motion`,
    description: siteConfig.description,
    images: ["/images/slide-1.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: isProdDeployment
    ? { index: true, follow: true }
    : {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-dark">
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}/images/logo-mark.png`,
            description: siteConfig.description,
            email: siteConfig.email,
            telephone: siteConfig.phone,
            sameAs: [
              siteConfig.whatsapp,
              siteConfig.social.linkedin,
              siteConfig.social.x,
              siteConfig.social.instagram,
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: siteConfig.phone,
                email: siteConfig.email,
                contactType: "customer service",
              },
            ],
          }}
        />
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteConfig.name,
            url: siteConfig.url,
            description: siteConfig.description,
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <CustomCursor />
      </body>
    </html>
  );
}
