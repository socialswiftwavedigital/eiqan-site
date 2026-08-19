import type { Metadata } from "next";
import {
  Bus,
  MapPin,
  ShieldCheck,
  CalendarClock,
  Users,
  BadgeCheck,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";
import { galleryImages } from "@/lib/gallery";
import { resolveLocale, type Locale } from "@/lib/i18n";

const rentalGalleryImages = galleryImages.filter(
  (image) => image.category === "Bus Rental"
);

const metaText: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Bus Rental Services",
    description:
      "On-demand and contract bus rental with vetted drivers and safety-checked vehicles — for events, tours, staff trips, and short-term transport needs.",
  },
  ar: {
    title: "خدمات تأجير الحافلات",
    description:
      "تأجير حافلات فوري وبعقود، مع سائقين مؤهلين ومركبات مفحوصة للسلامة — للفعاليات والرحلات ونقل الموظفين والاحتياجات قصيرة المدى.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = resolveLocale((await params).lang);
  return {
    title: metaText[lang].title,
    description: metaText[lang].description,
    alternates: { canonical: "/bus-rental" },
  };
}

const featureIcons = [Bus, MapPin, ShieldCheck, CalendarClock, Users, BadgeCheck];

const featuresText = {
  en: [
    { title: "Flexible Fleet Options", description: "From mini buses to 71 seaters, rent the right vehicle for your long term and short term projects." },
    { title: "Dedicated Support", description: "A dedicated coordinator manages your trip from confirmation to drop-off, so organizers always have a direct point of contact." },
    { title: "Safety-Checked Vehicles", description: "Every rental vehicle goes through the same inspection and compliance checks as our managed fleet before it's assigned to your project." },
    { title: "Simple Rental", description: "Request a quote, confirm your route and timing, and we handle vehicle assignment, driver, and dispatch." },
    { title: "Vetted, Professional Drivers", description: "Every driver on a rental trip meets the same vetting and safety standard as our managed transportation contracts." },
    { title: "Compliance-Ready Documentation", description: "Insurance, licensing, and vehicle inspection records available on request for corporate and institutional rentals." },
  ],
  ar: [
    { title: "خيارات أسطول مرنة", description: "من الحافلات الصغيرة إلى حافلات الـ71 مقعداً، استأجر المركبة المناسبة لمشاريعك طويلة وقصيرة المدى." },
    { title: "دعم مخصص", description: "ينسّق مسؤول مخصص رحلتك من التأكيد وحتى الوصول، ليكون لدى المنظمين دائماً نقطة تواصل مباشرة." },
    { title: "مركبات مفحوصة للسلامة", description: "تخضع كل مركبة تأجير لنفس فحوصات السلامة والالتزام التي يخضع لها أسطولنا المُدار قبل تخصيصها لمشروعك." },
    { title: "تأجير بسيط", description: "اطلب عرض سعر، أكّد مسارك وتوقيتك، ونتولى نحن تخصيص المركبة والسائق والإرسال." },
    { title: "سائقون محترفون ومؤهلون", description: "يستوفي كل سائق في رحلات التأجير نفس معايير التأهيل والسلامة المعتمدة في عقود النقل المُدارة لدينا." },
    { title: "وثائق التزام جاهزة", description: "سجلات التأمين والترخيص وفحص المركبات متاحة عند الطلب لعمليات التأجير للشركات والمؤسسات." },
  ],
};

const fleetClassesText = {
  en: [
    { title: "Compact Class", seats: "Up to 19 seats", description: "Nimble vans and mini-buses for small groups, airport transfers, and point-to-point trips.", image: "/images/gallery/bus-rental-12.jpg" },
    { title: "Mid-Size", seats: "20-33 seats", description: "Our most requested class — staff shuttles, school trips, and corporate outings that need a balance of capacity and maneuverability.", image: "/images/gallery/bus-rental-07.jpg" },
    { title: "High Capacity", seats: "34-71 seats", description: "Full-size coaches built for large groups, long-distance charters, and major events where every seat counts.", image: "/images/gallery/bus-rental-04.jpg" },
  ],
  ar: [
    { title: "الفئة المدمجة", seats: "حتى 19 مقعداً", description: "حافلات صغيرة وفانات خفيفة الحركة للمجموعات الصغيرة، ونقل المطار، والرحلات المباشرة.", image: "/images/gallery/bus-rental-12.jpg" },
    { title: "الفئة المتوسطة", seats: "20-33 مقعداً", description: "الفئة الأكثر طلباً لدينا — لنقل الموظفين والرحلات المدرسية والفعاليات المؤسسية التي تحتاج توازناً بين السعة وسهولة الحركة.", image: "/images/gallery/bus-rental-07.jpg" },
    { title: "الفئة عالية السعة", seats: "34-71 مقعداً", description: "حافلات كاملة الحجم مصممة للمجموعات الكبيرة والرحلات الطويلة والفعاليات الكبرى حيث يُحتسب كل مقعد.", image: "/images/gallery/bus-rental-04.jpg" },
  ],
};

const audiencePointsText = {
  en: [
    "Organizations with long-term and short-term bus rental needs",
    "Schools and universities renting buses for field trips and events",
    "Companies renting buses for offsites, conferences, or staff outings",
    "Event organizers needing group transportation for attendees",
    "Travel and tour operators requiring reliable charter vehicles",
    "Anyone who wants rental transport with the same visibility as a managed fleet",
  ],
  ar: [
    "المؤسسات ذات احتياجات تأجير الحافلات طويلة وقصيرة المدى",
    "المدارس والجامعات التي تستأجر حافلات للرحلات والفعاليات",
    "الشركات التي تستأجر حافلات للفعاليات الخارجية والمؤتمرات ورحلات الموظفين",
    "منظمو الفعاليات المحتاجون لنقل جماعي للحضور",
    "شركات السياحة والسفر التي تحتاج مركبات تأجير موثوقة",
    "أي جهة ترغب في نقل تأجير بنفس مستوى الرؤية الذي يوفره الأسطول المُدار",
  ],
};

const pageText = {
  en: {
    eyebrow: "Bus Rental",
    title: "On-Demand Bus Rental",
    heroDescription:
      "Reliable long-term and flexible short-term bus rental solutions for staff transportation, corporate shuttles, and workforce mobility — all backed by EIQAN's uncompromising safety standards.",
    introEyebrow: "Why Rent From EIQAN",
    introTitle: "Reliable Bus Rental Backed by People You Can Trust",
    introParagraphs: [
      "Most bus rental companies simply provide a vehicle and a driver. EIQAN delivers dependable transportation backed by experienced teams, professional drivers, responsive operations, and dedicated trip coordination to ensure every journey runs smoothly.",
      "Whether it's a single trip or a long-term transportation contract, you receive a clear quotation, confirmed schedules, reliable service, and continuous operational support from departure to arrival.",
    ],
    audienceTitle: "Built for Every Kind of Trip",
    galleryTitle: "Our Fleet",
    ctaTitle: "Need a Bus for an Upcoming Project?",
    ctaDescription:
      "Tell us your dates, route, and group size — we'll get back to you within 24 hours with availability and pricing.",
    breadcrumb: "Bus Rental",
  },
  ar: {
    eyebrow: "تأجير الحافلات",
    title: "تأجير حافلات فوري",
    heroDescription:
      "حلول تأجير حافلات طويلة ومرنة قصيرة المدى لنقل الموظفين ونقل الشركات والتنقل الوظيفي — بدعم من معايير السلامة الصارمة لدى إيقان.",
    introEyebrow: "لماذا تستأجر من إيقان",
    introTitle: "تأجير حافلات موثوق يدعمه فريق تثق به",
    introParagraphs: [
      "تكتفي معظم شركات تأجير الحافلات بتوفير مركبة وسائق فقط. أما إيقان فتقدم نقلاً موثوقاً يدعمه فريق ذو خبرة، وسائقون محترفون، وعمليات سريعة الاستجابة، وتنسيق مخصص للرحلة لضمان سير كل رحلة بسلاسة.",
      "سواء كانت رحلة واحدة أو عقد نقل طويل الأمد، تحصل على عرض سعر واضح، وجداول مؤكدة، وخدمة موثوقة، ودعماً تشغيلياً مستمراً من الانطلاق حتى الوصول.",
    ],
    audienceTitle: "مصمم لكل نوع من الرحلات",
    galleryTitle: "أسطولنا",
    ctaTitle: "هل تحتاج حافلة لمشروع قادم؟",
    ctaDescription:
      "أخبرنا بالتواريخ والمسار وحجم المجموعة — وسنعاود التواصل معك خلال 24 ساعة بالتوفر والأسعار.",
    breadcrumb: "تأجير الحافلات",
  },
};

export default async function BusRentalPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = resolveLocale((await params).lang);
  const t = pageText[lang];
  const features = featuresText[lang].map((f, i) => ({ ...f, icon: featureIcons[i] }));

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Bus Rental Service",
          name: "EIQAN Bus Rental",
          provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
          areaServed: "Worldwide",
          description: metaText[lang].description,
        }}
      />
      <ServicePageLayout
        eyebrow={t.eyebrow}
        title={t.title}
        heroDescription={t.heroDescription}
        heroImage="/images/slide-4.jpg"
        introEyebrow={t.introEyebrow}
        introTitle={t.introTitle}
        introParagraphs={t.introParagraphs}
        features={features}
        audienceTitle={t.audienceTitle}
        audiencePoints={audiencePointsText[lang]}
        fleetClasses={fleetClassesText[lang]}
        gallery={rentalGalleryImages}
        galleryTitle={t.galleryTitle}
        ctaTitle={t.ctaTitle}
        ctaDescription={t.ctaDescription}
        breadcrumbs={[{ label: t.breadcrumb, href: "/bus-rental" }]}
        lang={lang}
      />
    </>
  );
}
