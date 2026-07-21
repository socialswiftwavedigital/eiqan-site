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
import FaqAccordion from "@/components/FaqAccordion";
import { coreFeatures, faqs, problems, siteConfig, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Managed Student, Corporate & Bus Rental Transportation`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const featureIcons = [MapPin, ShieldCheck, Route, ScanLine, LayoutDashboard, BellRing];

const serveCards = [
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    description:
      "We manage student transportation end-to-end: safe pick-up and drop-off, real-time parent visibility, and automated attendance. You focus on education — we handle the rest.",
    href: "/student-transportation",
    image: "/images/serve-schools.jpg",
  },
  {
    icon: Building2,
    title: "Corporates & Organizations",
    description:
      "Reliable daily employee shuttle service with digital check-in, live tracking, and full operational reporting. No more coordination headaches.",
    href: "/corporate-shuttle",
    image: "/images/serve-corporate.jpg",
  },
  {
    icon: Bus,
    title: "Bus Operators & Rental Fleets",
    description:
      "We bring structure, compliance, and technology to your fleet operations. Whether you run school buses, corporate shuttles, or rental buses — EIQAN gives you full visibility and control.",
    href: "/fleet-management",
    image: "/images/serve-fleet.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark">
        <div className="absolute inset-0">
          <Image
            src="/images/slide-1.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-40"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(rgba(13,13,13,0.75) 0%, rgba(13,13,13,0.55) 50%, rgba(13,13,13,0.9) 100%)",
            }}
          />
        </div>

        <div className="container-page relative py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Tech-Enabled Transport Service</Eyebrow>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white text-balance sm:text-6xl">
              Certainty in Motion.
            </h1>
            <p className="mt-4 text-xl font-semibold text-teal">
              Safer, Smarter Transportation — Delivered.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-white/70">
              {siteConfig.description}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton href="/contact">Get a Quote</PrimaryButton>
              <SecondaryButton href="/about">See How It Works</SecondaryButton>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-teal" /> Live GPS Tracking
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-teal" /> AI Safety
                Monitoring
              </span>
              <span className="inline-flex items-center gap-2">
                <Bus className="h-4 w-4 text-teal" /> Bus Rental Fleet
                Management
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-offwhite py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="The Problem"
            title="Student & Corporate Transport is Broken Worldwide"
            description="The daily reality for schools, companies, and parents is frustrating — and dangerous."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {problems.map((problem) => (
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
      <section className="bg-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="The Solution"
            title="We Don't Just Move People. We Manage Every Detail."
            description="EIQAN combines experienced transport operations with proprietary technology to deliver a fully managed, end-to-end transportation service. Our team handles the routing, compliance, driver oversight, and real-time monitoring — so you don't have to."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature, i) => {
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
      <section className="bg-dark py-20">
        <div className="container-page">
          <SectionHeading
            light
            eyebrow="By the Numbers"
            title="Built on Technology. Delivered by People Who Care."
          />
          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <StatBlock key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-offwhite py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for Organizations That Take Transport Seriously"
            description="Whether you run a school, a corporation, or a fleet — EIQAN is designed around your operational reality."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {serveCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group overflow-hidden rounded-2xl border border-black/8 bg-white transition-shadow hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-dark/30" />
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-teal">
                    <card.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-dark">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-dark/65">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
                    Talk to Us <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
          />
          <div className="mt-14">
            <FaqAccordion items={faqs.slice(0, 5)} />
          </div>
          <div className="mt-8 text-center">
            <SecondaryButton href="/faq" variant="light">
              View All FAQs
            </SecondaryButton>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
