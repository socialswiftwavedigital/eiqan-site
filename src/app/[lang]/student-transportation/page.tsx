import type { Metadata } from "next";
import {
  MapPin,
  ShieldCheck,
  ScanLine,
  BellRing,
  Route,
  Users,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";
import { buildMetadata, resolveLocale, type Locale } from "@/lib/i18n";

const metaText: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Student Transportation Services",
    description:
      "Managed student transportation for schools and universities — live GPS tracking, AI safety monitoring, digital attendance, and real-time parent visibility.",
  },
  ar: {
    title: "خدمات نقل الطلاب",
    description:
      "نقل طلابي مُدار للمدارس والجامعات — تتبع مباشر عبر GPS، ومراقبة سلامة بالذكاء الاصطناعي، وحضور رقمي، ورؤية لحظية لأولياء الأمور.",
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
    path: "/student-transportation",
    title: metaText[lang].title,
    description: metaText[lang].description,
    image: "/images/serve-schools.jpg",
  });
}

const featureIcons = [MapPin, ShieldCheck, ScanLine, BellRing, Route, Users];

const featuresText = {
  en: [
    { title: "Live Bus Tracking", description: "Parents and school admins see every bus in real time, with accurate ETAs pushed the moment a route begins." },
    { title: "AI Onboard Safety Monitoring", description: "Onboard CCTV and audio are continuously analyzed to detect unsafe behavior and alert our operations team instantly." },
    { title: "Digital Check-In / Check-Out", description: "Every student's boarding and alighting is recorded via QR, NFC, or wristband — removing manual roll-call errors." },
    { title: "Instant Guardian Alerts", description: "Automatic notifications for arrivals, boarding, absences, and any safety event, sent straight to parents' phones." },
    { title: "Optimized Route Planning", description: "Routes are continuously optimized around traffic, absences, and school schedules to cut ride times and cost." },
    { title: "Driver Vetting & Oversight", description: "Every driver is vetted, monitored, and held to a documented safety standard, with full audit trails for compliance." },
  ],
  ar: [
    { title: "تتبع مباشر للحافلة", description: "يرى أولياء الأمور وإداريو المدرسة كل حافلة لحظياً، مع إرسال وقت وصول دقيق فور بدء المسار." },
    { title: "مراقبة سلامة داخلية بالذكاء الاصطناعي", description: "يُحلَّل بث الكاميرات والصوت داخل الحافلة باستمرار لرصد أي سلوك غير آمن وتنبيه فريق العمليات فوراً." },
    { title: "تسجيل حضور وانصراف رقمي", description: "يُسجَّل صعود ونزول كل طالب عبر رمز QR أو NFC أو سوار إلكتروني — دون أخطاء العد اليدوي." },
    { title: "تنبيهات فورية لأولياء الأمور", description: "إشعارات تلقائية للوصول والصعود والغياب وأي حدث سلامة، تُرسل مباشرة إلى هواتف أولياء الأمور." },
    { title: "تخطيط مسارات محسّن", description: "تُحسَّن المسارات باستمرار وفق الازدحام والغياب وجداول المدرسة لتقليل وقت الرحلة وتكلفتها." },
    { title: "تأهيل السائقين والإشراف عليهم", description: "يخضع كل سائق للتأهيل والمراقبة والالتزام بمعيار سلامة موثق، مع سجلات تدقيق كاملة للامتثال." },
  ],
};

const audiencePointsText = {
  en: [
    "K-12 schools managing daily pick-up and drop-off for hundreds of students",
    "Universities coordinating campus shuttle and residence transport",
    "School districts needing centralized fleet and compliance oversight",
    "Parents who want real-time visibility into their child's journey",
    "Transportation administrators replacing spreadsheets and WhatsApp groups",
    "Institutions required to meet child-safeguarding and duty-of-care standards",
  ],
  ar: [
    "المدارس التي تدير نقل مئات الطلاب يومياً ذهاباً وإياباً",
    "الجامعات التي تنسّق نقل الحرم الجامعي والسكن الطلابي",
    "الإدارات التعليمية المحتاجة إشرافاً مركزياً على الأسطول والالتزام",
    "أولياء الأمور الراغبون في رؤية لحظية لرحلة أبنائهم",
    "مسؤولو النقل الذين يستبدلون جداول البيانات ومجموعات واتساب",
    "المؤسسات الملزمة بمعايير حماية الطفل ورعايته",
  ],
};

const pageText = {
  en: {
    eyebrow: "Student Transportation",
    title: "Safe, Tracked, Accountable School Transport",
    heroDescription:
      "We manage student transportation end-to-end — safe pick-up and drop-off, real-time parent visibility, and automated attendance — so schools can focus on education while we handle the rest.",
    introEyebrow: "Why Schools Choose EIQAN",
    introTitle: "Every Student Accounted For, Every Step of the Journey",
    introParagraphs: [
      "Student transportation carries a level of responsibility that generic fleet tools were never built for. EIQAN combines trained transport operators with purpose-built technology to give schools and universities a single, accountable service for every route.",
      "From the first pick-up to the final drop-off, our platform tracks the bus, verifies who boarded, monitors onboard behavior with AI, and keeps parents and administrators informed in real time — replacing the spreadsheets, phone calls, and guesswork that put student safety at risk.",
    ],
    audienceTitle: "Built for the People Who Rely on It",
    ctaTitle: "Ready to Modernize Your School's Transportation?",
    ctaDescription:
      "Tell us about your student population and routes — we'll get back to you within 24 hours with a tailored plan.",
    breadcrumb: "Student Transportation",
  },
  ar: {
    eyebrow: "نقل الطلاب",
    title: "نقل مدرسي آمن وقابل للتتبع والمساءلة",
    heroDescription:
      "ندير نقل الطلاب من الألف إلى الياء — نقل آمن من وإلى المدرسة، ورؤية لحظية لأولياء الأمور، وتسجيل حضور آلي — لتتفرغ المدارس للتعليم بينما نتولى نحن الباقي.",
    introEyebrow: "لماذا تختار المدارس إيقان",
    introTitle: "كل طالب محسوب في كل خطوة من الرحلة",
    introParagraphs: [
      "يحمل نقل الطلاب مستوى من المسؤولية لم تُصمَّم من أجله أدوات إدارة الأساطيل العامة. تجمع إيقان بين مشغلي نقل مدربين وتقنية مصممة خصيصاً لتقديم خدمة واحدة قابلة للمساءلة لكل مسار، للمدارس والجامعات.",
      "من أول محطة استقبال حتى آخر نزول، تتتبع منصتنا الحافلة، وتتحقق ممن صعد إليها، وتراقب السلوك داخلها بالذكاء الاصطناعي، وتُبقي أولياء الأمور والإداريين على اطلاع لحظي — لتحل محل جداول البيانات والمكالمات والتخمين التي تعرّض سلامة الطلاب للخطر.",
    ],
    audienceTitle: "مصمم لمن يعتمدون عليه",
    ctaTitle: "هل أنت مستعد لتحديث نقل مدرستك؟",
    ctaDescription:
      "أخبرنا عن عدد طلابك ومساراتك — وسنعاود التواصل معك خلال 24 ساعة بخطة مخصصة.",
    breadcrumb: "نقل الطلاب",
  },
};

export default async function StudentTransportationPage({
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
          serviceType: "Student Transportation Service",
          name: "EIQAN Student Transportation",
          provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
          areaServed: "Worldwide",
          description: metaText[lang].description,
        }}
      />
      <ServicePageLayout
        eyebrow={t.eyebrow}
        title={t.title}
        heroDescription={t.heroDescription}
        heroImage="/images/serve-schools.jpg"
        introImage="/images/gallery/bus-rental-02.jpg"
        introEyebrow={t.introEyebrow}
        introTitle={t.introTitle}
        introParagraphs={t.introParagraphs}
        features={features}
        audienceTitle={t.audienceTitle}
        audiencePoints={audiencePointsText[lang]}
        ctaTitle={t.ctaTitle}
        ctaDescription={t.ctaDescription}
        breadcrumbs={[{ label: t.breadcrumb, href: "/student-transportation" }]}
        lang={lang}
      />
    </>
  );
}
