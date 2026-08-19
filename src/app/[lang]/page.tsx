import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ShieldCheck,
  Route,
  ScanLine,
  LayoutDashboard,
  BellRing,
  ArrowRight,
  GraduationCap,
  Building2,
  Bus,
} from "lucide-react";
import {
  CTASection,
  Eyebrow,
  FeatureCard,
  PrimaryButton,
  SecondaryButton,
  SectionHeading,
  StatBlock,
} from "@/components/ui";
import {
  coreFeatures,
  coreFeaturesAr,
  problems,
  problemsAr,
  siteConfig,
  stats,
  statsAr,
} from "@/lib/site";
import { buildMetadata, localeHref, locales, resolveLocale } from "@/lib/i18n";
import WelcomePopup from "@/components/WelcomePopup";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = resolveLocale((await params).lang);
  const title =
    lang === "ar"
      ? `${siteConfig.name} | نقل الطلاب والشركات وتأجير الحافلات`
      : `${siteConfig.name} | Managed Student, Corporate & Bus Rental Transportation`;
  const description =
    lang === "ar"
      ? "إيقان شركة نقل ذكية تقدم للمدارس والشركات ومشغلي الحافلات رؤية كاملة، ومراقبة سلامة مدعومة بالذكاء الاصطناعي، وتحكماً فورياً في كل رحلة — دون أي عبء تشغيلي."
      : siteConfig.description;

  return buildMetadata({
    lang,
    path: "/",
    title,
    description,
    image: "/images/slide-1.jpg",
  });
}

const featureIcons = [MapPin, ShieldCheck, Route, ScanLine, LayoutDashboard, BellRing];

const serveCards = [
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    titleAr: "المدارس والجامعات",
    description:
      "We manage student transportation end-to-end: safe pick-up and drop-off, real-time parent visibility, and automated attendance. You focus on education — we handle the rest.",
    descriptionAr:
      "ندير نقل الطلاب من الألف إلى الياء: نقل آمن من وإلى المدرسة، رؤية لحظية لأولياء الأمور، وتسجيل حضور آلي. تفرّغوا للتعليم ودعوا الباقي علينا.",
    href: "/student-transportation",
    image: "/images/serve-schools.jpg",
  },
  {
    icon: Building2,
    title: "Corporates & Organizations",
    titleAr: "الشركات والمؤسسات",
    description:
      "Reliable daily employee shuttle service with digital check-in, live tracking, and full operational reporting. No more coordination headaches.",
    descriptionAr:
      "خدمة نقل موظفين يومية موثوقة مع تسجيل دخول رقمي وتتبع مباشر وتقارير تشغيلية كاملة. وداعاً لمتاعب التنسيق.",
    href: "/corporate-shuttle",
    image: "/images/serve-corporate.jpg",
  },
  {
    icon: Bus,
    title: "Bus Operators & Rental Fleets",
    titleAr: "مشغلو الحافلات وأساطيل التأجير",
    description:
      "We bring structure, compliance, and technology to your fleet operations. Whether you run school buses, corporate shuttles, or rental buses — EIQAN gives you full visibility and control.",
    descriptionAr:
      "نضفي التنظيم والالتزام والتقنية على عمليات أسطولك. سواء كنت تدير حافلات مدرسية أو نقل موظفين أو حافلات تأجير — تمنحك إيقان رؤية كاملة وتحكماً تاماً.",
    href: "/fleet-management",
    image: "/images/serve-fleet.jpg",
  },
];

const text = {
  en: {
    eyebrow: "Tech-Enabled Transport Service",
    h1: "Certainty in Motion.",
    sub: "Safer, Smarter Transportation — Delivered.",
    getQuote: "Get a Quote",
    seeHow: "See How It Works",
    pillGps: "Live GPS Tracking",
    pillAi: "AI Safety Monitoring",
    pillFleet: "Bus Rental Fleet Management",
    problemEyebrow: "The Problem",
    problemTitle: "Student & Corporate Transport is Broken Worldwide",
    problemDesc:
      "The daily reality for schools, companies, and parents is frustrating — and dangerous.",
    solutionEyebrow: "The Solution",
    solutionTitle: "We Don't Just Move People. We Manage Every Detail.",
    solutionDesc:
      "EIQAN combines experienced transport operations with proprietary technology to deliver a fully managed, end-to-end transportation service. Our team handles the routing, compliance, driver oversight, and real-time monitoring — so you don't have to.",
    statsEyebrow: "By the Numbers",
    statsTitle: "Built on Technology. Delivered by People Who Care.",
    serveEyebrow: "Who We Serve",
    serveTitle: "Built for Organizations That Take Transport Seriously",
    serveDesc:
      "Whether you run a school, a corporation, or a fleet — EIQAN is designed around your operational reality.",
    talkToUs: "Talk to Us",
  },
  ar: {
    eyebrow: "خدمة نقل مدعومة بالتقنية",
    h1: "اليقين في التنقل.",
    sub: "نقل أكثر أماناً وذكاءً — نُنجزه لكم.",
    getQuote: "اطلب عرض سعر",
    seeHow: "شاهد كيف نعمل",
    pillGps: "تتبع مباشر عبر GPS",
    pillAi: "مراقبة سلامة بالذكاء الاصطناعي",
    pillFleet: "تأجير الحافلات وإدارة الأسطول",
    problemEyebrow: "المشكلة",
    problemTitle: "نقل الطلاب والشركات يعاني من خلل حول العالم",
    problemDesc:
      "الواقع اليومي للمدارس والشركات وأولياء الأمور محبط — وخطير أيضاً.",
    solutionEyebrow: "الحل",
    solutionTitle: "لا نكتفي بنقل الأشخاص، بل ندير كل التفاصيل.",
    solutionDesc:
      "تجمع إيقان بين خبرة تشغيل النقل والتقنية الخاصة لتقديم خدمة نقل متكاملة ومُدارة بالكامل. يتولى فريقنا تخطيط المسارات والالتزام والإشراف على السائقين والمراقبة اللحظية — لتتفرغوا لما هو أهم.",
    statsEyebrow: "بالأرقام",
    statsTitle: "مبنيّ على التقنية، ويُقدَّم بأيدي فريق يهتم فعلاً.",
    serveEyebrow: "من نخدم",
    serveTitle: "صُممت للمؤسسات التي تأخذ النقل على محمل الجد",
    serveDesc:
      "سواء كنت تدير مدرسة أو شركة أو أسطول حافلات — صُممت إيقان لتناسب واقعك التشغيلي.",
    talkToUs: "تواصل معنا",
  },
};

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = resolveLocale((await params).lang);
  const t = text[lang];
  const features = lang === "ar" ? coreFeaturesAr : coreFeatures;
  const problemList = lang === "ar" ? problemsAr : problems;
  const statList = lang === "ar" ? statsAr : stats;
  const description =
    lang === "ar"
      ? "إيقان شركة نقل ذكية تقدم للمدارس والشركات ومشغلي الحافلات رؤية كاملة، ومراقبة سلامة مدعومة بالذكاء الاصطناعي، وتحكماً فورياً في كل رحلة — دون أي عبء تشغيلي."
      : siteConfig.description;

  return (
    <>
      <WelcomePopup lang={lang} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-dark">
        <div className="absolute inset-0">
          <Image
            src="/images/slide-1.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(rgba(13,13,13,0.6) 0%, rgba(13,13,13,0.45) 50%, rgba(13,13,13,0.85) 100%)",
            }}
          />
        </div>

        <div className="container-page relative py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white text-balance sm:text-6xl">
              {t.h1}
            </h1>
            <p className="mt-4 text-xl font-semibold text-teal">{t.sub}</p>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-white/70">
              {description}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton href={localeHref(lang, "/contact")}>{t.getQuote}</PrimaryButton>
              <SecondaryButton href={localeHref(lang, "/about")}>{t.seeHow}</SecondaryButton>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-teal" /> {t.pillGps}
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-teal" /> {t.pillAi}
              </span>
              <span className="inline-flex items-center gap-2">
                <Bus className="h-4 w-4 text-teal" /> {t.pillFleet}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-offwhite py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow={t.problemEyebrow}
            title={t.problemTitle}
            description={t.problemDesc}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {problemList.map((problem) => (
              <div
                key={problem.number}
                className="rounded-2xl border border-black/8 bg-white p-8"
              >
                <span className="text-4xl font-extrabold text-teal/30">
                  {problem.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-dark">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-dark/65">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / Features */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow={t.solutionEyebrow}
            title={t.solutionTitle}
            description={t.solutionDesc}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <FeatureCard
                  key={feature.title}
                  icon={<Icon className="h-6 w-6" />}
                  title={feature.title}
                  description={feature.description}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dark py-16">
        <div className="container-page">
          <SectionHeading light eyebrow={t.statsEyebrow} title={t.statsTitle} />
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {statList.map((stat) => (
              <StatBlock key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-offwhite py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow={t.serveEyebrow}
            title={t.serveTitle}
            description={t.serveDesc}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {serveCards.map((card) => (
              <Link
                key={card.href}
                href={localeHref(lang, card.href)}
                className="group overflow-hidden rounded-2xl border border-black/8 bg-white transition-shadow hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={lang === "ar" ? card.titleAr : card.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-dark/30" />
                  <div className="absolute start-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-teal">
                    <card.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-dark">
                    {lang === "ar" ? card.titleAr : card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-dark/65">
                    {lang === "ar" ? card.descriptionAr : card.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
                    {t.talkToUs} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection lang={lang} />
    </>
  );
}
