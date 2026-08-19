import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";
import StructuredData from "@/components/StructuredData";
import { isProdDeployment, siteConfig } from "@/lib/site";
import { locales, resolveLocale, type Locale } from "@/lib/i18n";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const titles: Record<Locale, string> = {
  en: `${siteConfig.name} | Managed Student, Corporate & Bus Rental Transportation Service`,
  ar: `${siteConfig.name} | خدمة نقل الطلاب والشركات وتأجير الحافلات`,
};

const descriptions: Record<Locale, string> = {
  en: siteConfig.description,
  ar: "إيقان شركة نقل ذكية تقدم للمدارس والشركات ومشغلي الحافلات رؤية كاملة، ومراقبة سلامة مدعومة بالذكاء الاصطناعي، وتحكماً فورياً في كل رحلة — دون أي عبء تشغيلي.",
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = resolveLocale((await params).lang);
  const canonical = lang === "en" ? "/" : `/${lang}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: titles[lang],
      template: `%s | ${siteConfig.name}`,
    },
    description: descriptions[lang],
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
      url: `${siteConfig.url}${canonical}`,
      siteName: siteConfig.name,
      title: titles[lang],
      description: descriptions[lang],
      images: ["/images/slide-1.jpg"],
      locale: lang === "ar" ? "ar_SA" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[lang],
      description: descriptions[lang],
      images: ["/images/slide-1.jpg"],
    },
    alternates: {
      canonical,
      languages: {
        en: "/",
        ar: "/ar",
      },
    },
    robots: isProdDeployment
      ? { index: true, follow: true }
      : {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const lang = resolveLocale((await params).lang);
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={lang}
      dir={dir}
      className={`${jakarta.variable} h-full antialiased`}
    >
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
        <Header lang={lang} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
        <WhatsAppButton />
        <ScrollToTop />
        <CustomCursor />
      </body>
    </html>
  );
}
