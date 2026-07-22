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

export const metadata: Metadata = {
  title: "Student Transportation Services",
  description:
    "Managed student transportation for schools and universities — live GPS tracking, AI safety monitoring, digital attendance, and real-time parent visibility.",
  alternates: { canonical: "/student-transportation" },
};

const features = [
  {
    icon: MapPin,
    title: "Live Bus Tracking",
    description:
      "Parents and school admins see every bus in real time, with accurate ETAs pushed the moment a route begins.",
  },
  {
    icon: ShieldCheck,
    title: "AI Onboard Safety Monitoring",
    description:
      "Onboard CCTV and audio are continuously analyzed to detect unsafe behavior and alert our operations team instantly.",
  },
  {
    icon: ScanLine,
    title: "Digital Check-In / Check-Out",
    description:
      "Every student's boarding and alighting is recorded via QR, NFC, or wristband — removing manual roll-call errors.",
  },
  {
    icon: BellRing,
    title: "Instant Guardian Alerts",
    description:
      "Automatic notifications for arrivals, boarding, absences, and any safety event, sent straight to parents' phones.",
  },
  {
    icon: Route,
    title: "Optimized Route Planning",
    description:
      "Routes are continuously optimized around traffic, absences, and school schedules to cut ride times and cost.",
  },
  {
    icon: Users,
    title: "Driver Vetting & Oversight",
    description:
      "Every driver is vetted, monitored, and held to a documented safety standard, with full audit trails for compliance.",
  },
];

const audiencePoints = [
  "K-12 schools managing daily pick-up and drop-off for hundreds of students",
  "Universities coordinating campus shuttle and residence transport",
  "School districts needing centralized fleet and compliance oversight",
  "Parents who want real-time visibility into their child's journey",
  "Transportation administrators replacing spreadsheets and WhatsApp groups",
  "Institutions required to meet child-safeguarding and duty-of-care standards",
];

export default function StudentTransportationPage() {
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
          description: metadata.description,
        }}
      />
      <ServicePageLayout
        eyebrow="Student Transportation"
        title="Safe, Tracked, Accountable School Transport"
        heroDescription="We manage student transportation end-to-end — safe pick-up and drop-off, real-time parent visibility, and automated attendance — so schools can focus on education while we handle the rest."
        heroImage="/images/serve-schools.jpg"
        introEyebrow="Why Schools Choose EIQAN"
        introTitle="Every Student Accounted For, Every Step of the Journey"
        introParagraphs={[
          "Student transportation carries a level of responsibility that generic fleet tools were never built for. EIQAN combines trained transport operators with purpose-built technology to give schools and universities a single, accountable service for every route.",
          "From the first pick-up to the final drop-off, our platform tracks the bus, verifies who boarded, monitors onboard behavior with AI, and keeps parents and administrators informed in real time — replacing the spreadsheets, phone calls, and guesswork that put student safety at risk.",
        ]}
        features={features}
        audienceTitle="Built for the People Who Rely on It"
        audiencePoints={audiencePoints}
        ctaTitle="Ready to Modernize Your School's Transportation?"
        ctaDescription="Tell us about your student population and routes — we'll get back to you within 24 hours with a tailored plan."
        breadcrumbs={[
          { label: "Student Transportation", href: "/student-transportation" },
        ]}
      />
    </>
  );
}
