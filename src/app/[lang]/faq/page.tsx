import type { Metadata } from "next";
import { CTASection, PageHero, SectionHeading } from "@/components/ui";
import FaqAccordion from "@/components/FaqAccordion";
import StructuredData from "@/components/StructuredData";
import { faqs, faqsAr } from "@/lib/site";
import { buildMetadata, resolveLocale, type Locale } from "@/lib/i18n";

const metaText: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about EIQAN's student transportation, corporate shuttle, fleet management, and bus rental services.",
  },
  ar: {
    title: "الأسئلة الشائعة",
    description:
      "إجابات عن الأسئلة الشائعة حول خدمات إيقان لنقل الطلاب ونقل الموظفين وإدارة الأسطول وتأجير الحافلات.",
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
    path: "/faq",
    title: metaText[lang].title,
    description: metaText[lang].description,
    image: "/images/slide-5.jpg",
  });
}

const text = {
  en: {
    heroEyebrow: "FAQ",
    heroTitle: "Frequently Asked Questions",
    heroDescription: "Everything you need to know about how EIQAN works, who we serve, and how to get started.",
    breadcrumb: "FAQ",
    commonQuestions: "Common Questions",
    ctaTitle: "Still Have Questions?",
    ctaDescription: "Reach out and our team will get back to you within 24 hours.",
  },
  ar: {
    heroEyebrow: "الأسئلة الشائعة",
    heroTitle: "الأسئلة الشائعة",
    heroDescription: "كل ما تحتاج معرفته عن آلية عمل إيقان، ومن نخدم، وكيفية البدء.",
    breadcrumb: "الأسئلة الشائعة",
    commonQuestions: "أسئلة شائعة",
    ctaTitle: "هل ما زالت لديك أسئلة؟",
    ctaDescription: "تواصل معنا وسيعاود فريقنا الرد عليك خلال 24 ساعة.",
  },
};

export default async function FaqPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = resolveLocale((await params).lang);
  const t = text[lang];
  const faqList = lang === "ar" ? faqsAr : faqs;

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqList.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />

      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        description={t.heroDescription}
        breadcrumbs={[{ label: t.breadcrumb, href: "/faq" }]}
        image="/images/slide-5.jpg"
        lang={lang}
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading title={t.commonQuestions} />
          <div className="mt-12">
            <FaqAccordion items={faqList} />
          </div>
        </div>
      </section>

      <CTASection title={t.ctaTitle} description={t.ctaDescription} lang={lang} />
    </>
  );
}
