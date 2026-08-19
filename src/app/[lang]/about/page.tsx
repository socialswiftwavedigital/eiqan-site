import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Cpu, Gauge, Eye } from "lucide-react";
import { CTASection, PageHero, SectionHeading, StatBlock } from "@/components/ui";
import { siteConfig, stats, statsAr, values, valuesAr } from "@/lib/site";
import { resolveLocale, type Locale } from "@/lib/i18n";

const metaText: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "About Us",
    description:
      "EIQAN was founded to solve one of the most overlooked challenges globally — the safety and reliability of daily student and employee transportation. Learn about our story and values.",
  },
  ar: {
    title: "من نحن",
    description:
      "تأسست إيقان لحل واحدة من أكثر التحديات إغفالاً عالمياً — سلامة وموثوقية النقل اليومي للطلاب والموظفين. تعرّف على قصتنا وقيمنا.",
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
    alternates: { canonical: "/about" },
  };
}

const valueIcons = [ShieldCheck, Gauge, Cpu, Eye];

const text = {
  en: {
    heroEyebrow: "About EIQAN",
    heroTitle: "We Built the Service We Wished Existed",
    heroDescription:
      "EIQAN was founded to solve one of the most critical yet overlooked challenges globally — the safety and reliability of daily student and employee transportation.",
    breadcrumb: "About",
    storyEyebrow: "Our Story",
    storyTitle: "Not a Software Company — a Transportation Service Partner",
    storyP1:
      "We built our own technology from the ground up to power a service that is transparent, safe, and operationally excellent. Every school, corporate campus, and bus operator we work with gets the same promise: complete visibility into every journey, from the first pick-up to the last drop-off.",
    storyP2:
      "We're not a software company — we are a transportation service partner, and our technology is what makes us different. Our team handles routing, compliance, driver oversight, and real-time monitoring, so the organizations we serve can focus on what they do best.",
    valuesEyebrow: "What Drives Us",
    valuesTitle: "Our Values",
    valuesDescription: "Four principles guide every route we plan and every line of code we ship.",
    trackEyebrow: "Our Track Record",
    trackTitle: "Our Service, by the Numbers",
    contactEyebrow: "Get in Touch",
    contactTitle: "Talk to Our Team",
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
  },
  ar: {
    heroEyebrow: "عن إيقان",
    heroTitle: "بنينا الخدمة التي تمنينا وجودها",
    heroDescription:
      "تأسست إيقان لحل واحد من أكثر التحديات أهمية وإغفالاً عالمياً — سلامة وموثوقية النقل اليومي للطلاب والموظفين.",
    breadcrumb: "من نحن",
    storyEyebrow: "قصتنا",
    storyTitle: "لسنا شركة برمجيات، بل شريك خدمة نقل",
    storyP1:
      "طوّرنا تقنيتنا الخاصة من الصفر لتشغيل خدمة شفافة وآمنة ومتميزة تشغيلياً. تحصل كل مدرسة ومقر شركة ومشغل حافلات نتعامل معه على نفس الوعد: رؤية كاملة لكل رحلة، من أول استقبال حتى آخر نزول.",
    storyP2:
      "نحن لسنا شركة برمجيات — بل شريك خدمة نقل، وتقنيتنا هي ما يميّزنا. يتولى فريقنا تخطيط المسارات والالتزام والإشراف على السائقين والمراقبة اللحظية، لتتفرغ المؤسسات التي نخدمها لما تجيده.",
    valuesEyebrow: "ما يحفزنا",
    valuesTitle: "قيمنا",
    valuesDescription: "أربعة مبادئ توجّه كل مسار نخطط له وكل سطر برمجي نُصدره.",
    trackEyebrow: "سجلّنا",
    trackTitle: "خدمتنا بالأرقام",
    contactEyebrow: "تواصل معنا",
    contactTitle: "تحدث إلى فريقنا",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    whatsapp: "واتساب",
  },
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = resolveLocale((await params).lang);
  const t = text[lang];
  const valueList = lang === "ar" ? valuesAr : values;
  const statList = lang === "ar" ? statsAr : stats;

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        description={t.heroDescription}
        breadcrumbs={[{ label: t.breadcrumb, href: "/about" }]}
        image="/images/slide-2.jpg"
        lang={lang}
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow={t.storyEyebrow}
              title={t.storyTitle}
            />
            <p className="mt-6 text-base leading-7 text-dark/70">{t.storyP1}</p>
            <p className="mt-4 text-base leading-7 text-dark/70">{t.storyP2}</p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl sm:h-96">
            <Image
              src="/images/slide-3.jpg"
              alt="EIQAN managed transportation fleet"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow={t.valuesEyebrow}
            title={t.valuesTitle}
            description={t.valuesDescription}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueList.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-black/8 bg-white p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-dark">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-dark/65">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-dark py-16">
        <div className="container-page">
          <SectionHeading light eyebrow={t.trackEyebrow} title={t.trackTitle} />
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {statList.map((stat) => (
              <StatBlock key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SectionHeading align="left" eyebrow={t.contactEyebrow} title={t.contactTitle} />
          </div>
          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-2">
            <div className="rounded-2xl border border-black/8 bg-offwhite p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-dark/50">
                {t.email}
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-base font-semibold text-teal"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="rounded-2xl border border-black/8 bg-offwhite p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-dark/50">
                {t.phone}
              </h3>
              <a
                href={siteConfig.phoneHref}
                className="mt-2 block text-base font-semibold text-teal"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div className="rounded-2xl border border-black/8 bg-offwhite p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-dark/50">
                {t.whatsapp}
              </h3>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-base font-semibold text-teal"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection lang={lang} />
    </>
  );
}
