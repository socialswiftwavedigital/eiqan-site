import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import Gallery from "@/components/Gallery";
import { galleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at the EIQAN brand and fleet in action — student transportation, corporate shuttle, fleet management, and bus rental.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="EIQAN in Motion"
        description="A look at our fleet and our services — tap any image to view it larger."
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
        image="/images/slide-3.jpg"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page">
          <Gallery images={galleryImages} />
        </div>
      </section>
    </>
  );
}
