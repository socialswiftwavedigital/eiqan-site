import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/ui";
import Gallery from "@/components/Gallery";
import { galleryImages } from "@/lib/gallery";
import { buildMetadata, resolveLocale, type Locale } from "@/lib/i18n";

const metaText: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Gallery",
    description:
      "A look at the EIQAN brand and fleet in action — student transportation, corporate shuttle, fleet management, and bus rental.",
  },
  ar: {
    title: "معرض الصور",
    description:
      "لمحة عن علامة إيقان وأسطولها أثناء العمل — نقل الطلاب، ونقل الموظفين، وإدارة الأسطول، وتأجير الحافلات.",
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
    path: "/gallery",
    title: metaText[lang].title,
    description: metaText[lang].description,
    image: "/images/slide-3.jpg",
  });
}

const text = {
  en: {
    heroEyebrow: "Gallery",
    heroTitle: "EIQAN in Motion",
    heroDescription: "A look at our fleet and our services — tap any image to view it larger.",
    breadcrumb: "Gallery",
    sectionEyebrow: "Our Fleet",
    sectionTitle: "Photos From the Road",
    sectionDescription: "A closer look at the vehicles and services behind every EIQAN-managed journey.",
  },
  ar: {
    heroEyebrow: "معرض الصور",
    heroTitle: "إيقان في الحركة",
    heroDescription: "لمحة عن أسطولنا وخدماتنا — اضغط على أي صورة لعرضها بحجم أكبر.",
    breadcrumb: "معرض الصور",
    sectionEyebrow: "أسطولنا",
    sectionTitle: "صور من الطريق",
    sectionDescription: "نظرة أقرب على المركبات والخدمات وراء كل رحلة تديرها إيقان.",
  },
};

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = resolveLocale((await params).lang);
  const t = text[lang];

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        description={t.heroDescription}
        breadcrumbs={[{ label: t.breadcrumb, href: "/gallery" }]}
        image="/images/slide-3.jpg"
        lang={lang}
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow={t.sectionEyebrow}
            title={t.sectionTitle}
            description={t.sectionDescription}
          />
          <div className="mt-12">
            <Gallery images={galleryImages} />
          </div>
        </div>
      </section>
    </>
  );
}
