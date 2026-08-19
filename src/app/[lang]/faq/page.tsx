import type { Metadata } from "next";
import { CTASection, PageHero, SectionHeading } from "@/components/ui";
import FaqAccordion from "@/components/FaqAccordion";
import StructuredData from "@/components/StructuredData";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about EIQAN's student transportation, corporate shuttle, fleet management, and bus rental services.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
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
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about how EIQAN works, who we serve, and how to get started."
        breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
        image="/images/slide-5.jpg"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading title="Common Questions" />
          <div className="mt-12">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        description="Reach out and our team will get back to you within 24 hours."
      />
    </>
  );
}
