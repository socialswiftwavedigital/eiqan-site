import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Cpu, Gauge, Eye } from "lucide-react";
import { CTASection, PageHero, SectionHeading, StatBlock } from "@/components/ui";
import { siteConfig, stats, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "EIQAN was founded to solve one of the most overlooked challenges globally — the safety and reliability of daily student and employee transportation. Learn about our story and values.",
  alternates: { canonical: "/about" },
};

const valueIcons = [ShieldCheck, Gauge, Cpu, Eye];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About EIQAN"
        title="We Built the Service We Wished Existed"
        description="EIQAN was founded to solve one of the most critical yet overlooked challenges globally — the safety and reliability of daily student and employee transportation."
        breadcrumbs={[{ label: "About", href: "/about" }]}
        image="/images/slide-2.jpg"
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Not a Software Company — a Transportation Service Partner"
            />
            <p className="mt-6 text-base leading-7 text-dark/70">
              We built our own technology from the ground up to power a
              service that is transparent, safe, and operationally
              excellent. Every school, corporate campus, and bus operator we
              work with gets the same promise: complete visibility into
              every journey, from the first pick-up to the last drop-off.
            </p>
            <p className="mt-4 text-base leading-7 text-dark/70">
              We&apos;re not a software company — we are a transportation
              service partner, and our technology is what makes us
              different. Our team handles routing, compliance, driver
              oversight, and real-time monitoring, so the organizations we
              serve can focus on what they do best.
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl sm:h-96">
            <Image
              src="/images/slide-3.jpg"
              alt="EIQAN managed transportation fleet"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-12 sm:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Values"
            description="Four principles guide every route we plan and every line of code we ship."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
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

      <section className="bg-dark py-14">
        <div className="container-page">
          <SectionHeading
            light
            eyebrow="Our Track Record"
            title="Our Service, by the Numbers"
          />
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <StatBlock key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SectionHeading align="left" eyebrow="Get in Touch" title="Talk to Our Team" />
          </div>
          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-2">
            <div className="rounded-2xl border border-black/8 bg-offwhite p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-dark/50">
                Email
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
                Phone
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
                WhatsApp
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

      <CTASection />
    </>
  );
}
