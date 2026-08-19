import type { Metadata } from "next";
import {
  MapPin,
  ScanLine,
  LayoutDashboard,
  Route,
  BellRing,
  Clock,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";
import { buildMetadata, resolveLocale, type Locale } from "@/lib/i18n";

const metaText: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Corporate Shuttle Service",
    description:
      "Fully managed corporate employee shuttle service with live tracking, digital check-in, shift-based routing, and operational reporting for organizations of any size.",
  },
  ar: {
    title: "خدمة نقل الموظفين",
    description:
      "خدمة نقل موظفين مُدارة بالكامل مع تتبع مباشر وتسجيل دخول رقمي ومسارات حسب نظام الورديات وتقارير تشغيلية لمؤسسات من أي حجم.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = resolveLocale((await params).lang);
  return buildMetadata({
    lang,
    path: "/corporate-shuttle",
    title: metaText[lang].title,
    description: metaText[lang].description,
    image: "/images/serve-corporate.jpg",
  });
}

const featureIcons = [MapPin, ScanLine, Route, LayoutDashboard, BellRing, Clock];

const featuresText = {
  en: [
    { title: "Live Fleet Tracking", description: "HR and facilities teams see every shuttle in real time, with accurate arrival estimates for every pickup point." },
    { title: "Digital Employee Check-In", description: "Badge, QR, or NFC-based boarding confirms exactly who is on each shuttle — no manual headcounts required." },
    { title: "Shift-Based Route Design", description: "Routes are built around your shift patterns and campus locations, and re-optimized as headcount or timing changes." },
    { title: "Operational Dashboard", description: "A single dashboard for facilities and HR to monitor ridership, punctuality, and driver performance across the fleet." },
    { title: "Automated Reporting", description: "Daily and weekly reports on utilization, on-time performance, and incidents — generated automatically, no manual pulls." },
    { title: "On-Time Performance Guarantees", description: "Dedicated operations oversight keeps punctuality high, with proactive rerouting around traffic and disruptions." },
  ],
  ar: [
    { title: "تتبع مباشر للأسطول", description: "تطّلع فرق الموارد البشرية والمرافق على كل حافلة لحظياً، مع أوقات وصول دقيقة لكل نقطة انطلاق." },
    { title: "تسجيل دخول رقمي للموظفين", description: "يؤكد الصعود عبر البطاقة أو رمز QR أو NFC هوية كل راكب في كل حافلة — دون الحاجة لعدّ يدوي." },
    { title: "تصميم مسارات حسب الورديات", description: "تُبنى المسارات وفق أنماط ورديات موظفيكم ومواقع مقراتكم، وتُعاد جدولتها تلقائياً عند تغيّر العدد أو التوقيت." },
    { title: "لوحة تحكم تشغيلية", description: "لوحة واحدة لفرق المرافق والموارد البشرية لمتابعة الركاب والالتزام بالمواعيد وأداء السائقين عبر الأسطول." },
    { title: "تقارير آلية", description: "تقارير يومية وأسبوعية عن معدلات الاستخدام والالتزام بالمواعيد والحوادث — تُنشأ تلقائياً دون تدخل يدوي." },
    { title: "ضمانات الالتزام بالمواعيد", description: "إشراف تشغيلي مخصص يحافظ على الالتزام العالي بالمواعيد، مع إعادة توجيه استباقية لتفادي الازدحام والاضطرابات." },
  ],
};

const audiencePointsText = {
  en: [
    "Corporates running daily employee shuttle routes between residences and campuses",
    "Industrial and manufacturing sites coordinating shift-based workforce transport",
    "HR and facilities teams tired of coordinating transport over WhatsApp and spreadsheets",
    "Multi-site organizations needing consistent reporting across every location",
    "Companies with sustainability or duty-of-care commitments around commuting",
    "Employees who want reliable, trackable transportation to and from work",
  ],
  ar: [
    "الشركات التي تُشغّل مسارات نقل موظفين يومية بين السكن ومقرات العمل",
    "المواقع الصناعية والمصانع التي تنسّق نقل القوى العاملة حسب الورديات",
    "فرق الموارد البشرية والمرافق التي أنهكها تنسيق النقل عبر واتساب وجداول البيانات",
    "المؤسسات متعددة المواقع التي تحتاج تقارير موحدة عبر كل موقع",
    "الشركات ذات الالتزامات البيئية أو التزامات رعاية الموظفين المتعلقة بالتنقل",
    "الموظفون الراغبون في نقل موثوق وقابل للتتبع من وإلى العمل",
  ],
};

const pageText = {
  en: {
    eyebrow: "Corporate Shuttle",
    title: "Reliable Employee Transport, Fully Managed",
    heroDescription:
      "A fully managed, end-to-end employee shuttle service with digital check-in, live tracking, and full operational reporting — no more coordination headaches for your HR or facilities team.",
    introEyebrow: "Why Companies Choose EIQAN",
    introTitle: "Transport Your Workforce Without the Operational Burden",
    introParagraphs: [
      "Coordinating employee shuttles across shifts, sites, and changing headcounts is a full-time operational problem. EIQAN takes that burden off your team by managing routing, driver oversight, and reporting as a single service — not a piece of software you have to run yourself.",
      "Every ride is tracked from departure to arrival, every employee's boarding is logged digitally, and your team gets clear reporting on punctuality and utilization without having to chase drivers or reconcile spreadsheets.",
    ],
    audienceTitle: "Built for Every Team That Depends on the Commute",
    ctaTitle: "Ready to Simplify Your Employee Shuttle Program?",
    ctaDescription:
      "Tell us about your sites, shifts, and headcount — we'll get back to you within 24 hours with a tailored plan.",
    breadcrumb: "Corporate Shuttle",
  },
  ar: {
    eyebrow: "نقل الموظفين",
    title: "نقل موظفين موثوق، مُدار بالكامل",
    heroDescription:
      "خدمة نقل موظفين مُدارة بالكامل من الألف إلى الياء، مع تسجيل دخول رقمي وتتبع مباشر وتقارير تشغيلية كاملة — لتتخلص فرق الموارد البشرية والمرافق من متاعب التنسيق.",
    introEyebrow: "لماذا تختار الشركات إيقان",
    introTitle: "انقل موظفيك دون أي عبء تشغيلي",
    introParagraphs: [
      "تنسيق نقل الموظفين عبر الورديات والمواقع والأعداد المتغيرة يمثل عبئاً تشغيلياً دائماً. تتولى إيقان هذا العبء عن فريقك من خلال إدارة المسارات والإشراف على السائقين والتقارير كخدمة متكاملة — لا كبرنامج عليك تشغيله بنفسك.",
      "تُتبَّع كل رحلة من الانطلاق حتى الوصول، ويُسجَّل صعود كل موظف رقمياً، ويحصل فريقك على تقارير واضحة عن الالتزام بالمواعيد ومعدلات الاستخدام دون الحاجة لملاحقة السائقين أو مطابقة الجداول.",
    ],
    audienceTitle: "مصمم لكل فريق يعتمد على التنقل اليومي",
    ctaTitle: "هل أنت مستعد لتبسيط برنامج نقل موظفيك؟",
    ctaDescription:
      "أخبرنا عن مواقعك وورديات العمل وعدد الموظفين — وسنعاود التواصل معك خلال 24 ساعة بخطة مخصصة.",
    breadcrumb: "نقل الموظفين",
  },
};

export default async function CorporateShuttlePage({
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
          serviceType: "Corporate Shuttle Service",
          name: "EIQAN Corporate Shuttle",
          provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
          areaServed: "Worldwide",
          description: metaText[lang].description,
        }}
      />
      <ServicePageLayout
        eyebrow={t.eyebrow}
        title={t.title}
        heroDescription={t.heroDescription}
        heroImage="/images/serve-corporate.jpg"
        introImage="/images/gallery/bus-rental-06.jpg"
        introEyebrow={t.introEyebrow}
        introTitle={t.introTitle}
        introParagraphs={t.introParagraphs}
        features={features}
        audienceTitle={t.audienceTitle}
        audiencePoints={audiencePointsText[lang]}
        ctaTitle={t.ctaTitle}
        ctaDescription={t.ctaDescription}
        breadcrumbs={[{ label: t.breadcrumb, href: "/corporate-shuttle" }]}
        lang={lang}
      />
    </>
  );
}
