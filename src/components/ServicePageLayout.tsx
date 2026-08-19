import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import { CTASection, PageHero, SectionHeading } from "@/components/ui";
import type { Crumb } from "@/components/Breadcrumbs";
import Gallery from "@/components/Gallery";
import type { GalleryImage } from "@/lib/gallery";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type FleetClass = {
  title: string;
  seats: string;
  description: string;
  image: string;
};

export default function ServicePageLayout({
  eyebrow,
  title,
  heroDescription,
  heroImage,
  introEyebrow,
  introTitle,
  introParagraphs,
  features,
  audienceTitle,
  audiencePoints,
  fleetClasses,
  gallery,
  galleryTitle,
  ctaTitle,
  ctaDescription,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  heroDescription: string;
  heroImage: string;
  introEyebrow: string;
  introTitle: string;
  introParagraphs: string[];
  features: Feature[];
  audienceTitle: string;
  audiencePoints: string[];
  fleetClasses?: FleetClass[];
  gallery?: GalleryImage[];
  galleryTitle?: string;
  ctaTitle: string;
  ctaDescription: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={heroDescription}
        breadcrumbs={breadcrumbs}
        image={heroImage}
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 h-80 overflow-hidden rounded-2xl sm:h-96 lg:order-1">
            <Image
              src={heroImage}
              alt={title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading align="left" eyebrow={introEyebrow} title={introTitle} />
            <div className="mt-6 space-y-4">
              {introParagraphs.map((p) => (
                <p key={p} className="text-base leading-7 text-dark/70">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What's Included"
            title="Everything Your Operation Needs, in One Service"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-black/8 bg-white p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-dark">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-dark/65">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading light title={audienceTitle} />
          <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {audiencePoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-6 text-white/80">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {gallery && gallery.length > 0 && (
        <section className="bg-white py-16 sm:py-24">
          <div className="container-page">
            <SectionHeading
              eyebrow="Gallery"
              title={galleryTitle ?? "See the Fleet"}
            />

            {fleetClasses && fleetClasses.length > 0 && (
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {fleetClasses.map((fleetClass) => (
                  <div
                    key={fleetClass.title}
                    className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm"
                  >
                    <div className="relative h-52 w-full">
                      <Image
                        src={fleetClass.image}
                        alt={fleetClass.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg font-semibold text-dark">
                          {fleetClass.title}
                        </h3>
                        <span className="shrink-0 rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
                          {fleetClass.seats}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-dark/65">
                        {fleetClass.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-12">
              <Gallery images={gallery} />
            </div>
          </div>
        </section>
      )}

      <CTASection title={ctaTitle} description={ctaDescription} />
    </>
  );
}
