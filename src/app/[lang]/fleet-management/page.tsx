import type { Metadata } from "next";
import {
  Gauge,
  ShieldCheck,
  Wrench,
  FileCheck,
  Users,
  BarChart3,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";
import { resolveLocale, type Locale } from "@/lib/i18n";

const metaText: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Fleet Management Solutions",
    description:
      "Full-visibility fleet management for bus operators — live tracking, driver compliance, maintenance oversight, and AI safety monitoring across your entire fleet.",
  },
  ar: {
    title: "حلول إدارة الأسطول",
    description:
      "إدارة أسطول بكامل الرؤية لمشغلي الحافلات — تتبع مباشر، والتزام السائقين، والإشراف على الصيانة، ومراقبة السلامة بالذكاء الاصطناعي عبر أسطولك بالكامل.",
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
    alternates: { canonical: "/fleet-management" },
  };
}

const featureIcons = [Gauge, ShieldCheck, Wrench, FileCheck, Users, BarChart3];

const featuresText = {
  en: [
    { title: "Real-Time Fleet Visibility", description: "Every vehicle in your fleet tracked live on a single dashboard, with route adherence and status at a glance." },
    { title: "AI Safety & Behavior Monitoring", description: "Onboard AI flags harsh braking, unsafe driving, and onboard incidents automatically, before they become liabilities." },
    { title: "Maintenance & Compliance Tracking", description: "Service schedules, inspections, and regulatory documentation tracked per vehicle, with automated renewal reminders." },
    { title: "Driver Compliance Oversight", description: "Licensing, training records, and performance history managed centrally, so every driver meets your standard." },
    { title: "Multi-Client Route Management", description: "Run school routes, corporate shuttles, and rental trips from the same operational layer, without losing visibility." },
    { title: "Operational Reporting", description: "Utilization, punctuality, incident, and cost reporting generated automatically across your entire fleet." },
  ],
  ar: [
    { title: "رؤية لحظية للأسطول", description: "تتبع مباشر لكل مركبة في أسطولك عبر لوحة تحكم واحدة، مع متابعة الالتزام بالمسار والحالة بنظرة واحدة." },
    { title: "مراقبة السلامة والسلوك بالذكاء الاصطناعي", description: "يرصد الذكاء الاصطناعي داخل المركبة الفرملة المفاجئة والقيادة غير الآمنة والحوادث تلقائياً، قبل أن تتحول إلى مخاطر." },
    { title: "تتبع الصيانة والالتزام", description: "تتبع جداول الصيانة والفحوصات والوثائق النظامية لكل مركبة، مع تذكيرات تلقائية للتجديد." },
    { title: "الإشراف على التزام السائقين", description: "إدارة مركزية للتراخيص وسجلات التدريب والأداء، لضمان استيفاء كل سائق لمعاييركم." },
    { title: "إدارة مسارات لعدة عملاء", description: "شغّل مسارات المدارس ونقل الموظفين ورحلات التأجير من طبقة تشغيلية واحدة، دون فقدان الرؤية." },
    { title: "تقارير تشغيلية", description: "تقارير آلية عن الاستخدام والالتزام بالمواعيد والحوادث والتكاليف عبر أسطولك بالكامل." },
  ],
};

const audiencePointsText = {
  en: [
    "Bus operators running school, corporate, or mixed-use fleets",
    "Fleet owners who need centralized compliance and maintenance tracking",
    "Operators expanding into new contracts and needing scalable oversight",
    "Transport companies replacing manual logs with a live operational dashboard",
    "Businesses required to demonstrate safety and compliance to clients or regulators",
    "Operations managers accountable for driver performance across many vehicles",
  ],
  ar: [
    "مشغلو الحافلات الذين يديرون أساطيل مدرسية أو مؤسسية أو مختلطة الاستخدام",
    "ملاك الأساطيل المحتاجون لتتبع مركزي للالتزام والصيانة",
    "المشغلون الذين يتوسعون بعقود جديدة ويحتاجون إشرافاً قابلاً للتوسع",
    "شركات النقل التي تستبدل السجلات اليدوية بلوحة تحكم تشغيلية مباشرة",
    "الشركات المطالبة بإثبات السلامة والالتزام للعملاء أو الجهات التنظيمية",
    "مدراء العمليات المسؤولون عن أداء السائقين عبر عدد كبير من المركبات",
  ],
};

const pageText = {
  en: {
    eyebrow: "Fleet Management",
    title: "Full Visibility and Control Over Every Vehicle",
    heroDescription:
      "We bring structure, compliance, and technology to your fleet operations — whether you run school buses, corporate shuttles, or rental buses — giving you full visibility and control.",
    introEyebrow: "Why Operators Choose EIQAN",
    introTitle: "Turn Fleet Operations Into a Competitive Advantage",
    introParagraphs: [
      "Running a bus fleet across multiple clients and contract types is a compliance and coordination challenge. EIQAN gives operators a single operational layer that covers live tracking, driver oversight, maintenance, and reporting — no matter what the vehicles are being used for.",
      "That means fewer compliance gaps, faster response to incidents, and reporting you can hand directly to schools, corporates, or regulators without extra work.",
    ],
    audienceTitle: "Built for Operators Who Manage the Fleet",
    ctaTitle: "Ready to Bring Structure to Your Fleet?",
    ctaDescription:
      "Tell us about your fleet size and contracts — we'll get back to you within 24 hours with a tailored plan.",
    breadcrumb: "Fleet Management",
  },
  ar: {
    eyebrow: "إدارة الأسطول",
    title: "رؤية وتحكم كاملان في كل مركبة",
    heroDescription:
      "نضفي التنظيم والالتزام والتقنية على عمليات أسطولك — سواء كنت تدير حافلات مدرسية أو نقل موظفين أو حافلات تأجير — لنمنحك رؤية وتحكماً كاملين.",
    introEyebrow: "لماذا يختار المشغلون إيقان",
    introTitle: "حوّل إدارة الأسطول إلى ميزة تنافسية",
    introParagraphs: [
      "إدارة أسطول حافلات عبر عملاء وأنواع عقود متعددة تمثل تحدياً في الالتزام والتنسيق. تمنح إيقان المشغلين طبقة تشغيلية واحدة تغطي التتبع المباشر والإشراف على السائقين والصيانة والتقارير — بغض النظر عن استخدام المركبات.",
      "ويعني ذلك ثغرات التزام أقل، واستجابة أسرع للحوادث، وتقارير يمكنكم تسليمها مباشرة للمدارس أو الشركات أو الجهات التنظيمية دون عناء إضافي.",
    ],
    audienceTitle: "مصمم لمشغلي الأساطيل",
    ctaTitle: "هل أنت مستعد لتنظيم أسطولك؟",
    ctaDescription:
      "أخبرنا عن حجم أسطولك وعقودك — وسنعاود التواصل معك خلال 24 ساعة بخطة مخصصة.",
    breadcrumb: "إدارة الأسطول",
  },
};

export default async function FleetManagementPage({
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
          serviceType: "Fleet Management Service",
          name: "EIQAN Fleet Management",
          provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
          areaServed: "Worldwide",
          description: metaText[lang].description,
        }}
      />
      <ServicePageLayout
        eyebrow={t.eyebrow}
        title={t.title}
        heroDescription={t.heroDescription}
        heroImage="/images/serve-fleet.jpg"
        introEyebrow={t.introEyebrow}
        introTitle={t.introTitle}
        introParagraphs={t.introParagraphs}
        features={features}
        audienceTitle={t.audienceTitle}
        audiencePoints={audiencePointsText[lang]}
        ctaTitle={t.ctaTitle}
        ctaDescription={t.ctaDescription}
        breadcrumbs={[{ label: t.breadcrumb, href: "/fleet-management" }]}
        lang={lang}
      />
    </>
  );
}
