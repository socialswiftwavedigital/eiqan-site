import type { Metadata } from "next";
import {
  Gauge,
  ShieldCheck,
  Wrench,
  FileCheck,
  Users,
  BarChart3,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fleet Management Solutions",
  description:
    "Full-visibility fleet management for bus operators — live tracking, driver compliance, maintenance oversight, and AI safety monitoring across your entire fleet.",
  alternates: { canonical: "/fleet-management" },
};

const features = [
  {
    icon: Gauge,
    title: "Real-Time Fleet Visibility",
    description:
      "Every vehicle in your fleet tracked live on a single dashboard, with route adherence and status at a glance.",
  },
  {
    icon: ShieldCheck,
    title: "AI Safety & Behavior Monitoring",
    description:
      "Onboard AI flags harsh braking, unsafe driving, and onboard incidents automatically, before they become liabilities.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Compliance Tracking",
    description:
      "Service schedules, inspections, and regulatory documentation tracked per vehicle, with automated renewal reminders.",
  },
  {
    icon: FileCheck,
    title: "Driver Compliance Oversight",
    description:
      "Licensing, training records, and performance history managed centrally, so every driver meets your standard.",
  },
  {
    icon: Users,
    title: "Multi-Client Route Management",
    description:
      "Run school routes, corporate shuttles, and rental trips from the same operational layer, without losing visibility.",
  },
  {
    icon: BarChart3,
    title: "Operational Reporting",
    description:
      "Utilization, punctuality, incident, and cost reporting generated automatically across your entire fleet.",
  },
];

const audiencePoints = [
  "Bus operators running school, corporate, or mixed-use fleets",
  "Fleet owners who need centralized compliance and maintenance tracking",
  "Operators expanding into new contracts and needing scalable oversight",
  "Transport companies replacing manual logs with a live operational dashboard",
  "Businesses required to demonstrate safety and compliance to clients or regulators",
  "Operations managers accountable for driver performance across many vehicles",
];

export default function FleetManagementPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Fleet Management Service",
          name: "EIQAN Fleet Management",
          provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
          areaServed: "Worldwide",
          description: metadata.description,
        }}
      />
      <ServicePageLayout
        eyebrow="Fleet Management"
        title="Full Visibility and Control Over Every Vehicle"
        heroDescription="We bring structure, compliance, and technology to your fleet operations — whether you run school buses, corporate shuttles, or rental buses — giving you full visibility and control."
        heroImage="/images/serve-fleet.jpg"
        introEyebrow="Why Operators Choose EIQAN"
        introTitle="Turn Fleet Operations Into a Competitive Advantage"
        introParagraphs={[
          "Running a bus fleet across multiple clients and contract types is a compliance and coordination challenge. EIQAN gives operators a single operational layer that covers live tracking, driver oversight, maintenance, and reporting — no matter what the vehicles are being used for.",
          "That means fewer compliance gaps, faster response to incidents, and reporting you can hand directly to schools, corporates, or regulators without extra work.",
        ]}
        features={features}
        audienceTitle="Built for Operators Who Manage the Fleet"
        audiencePoints={audiencePoints}
        ctaTitle="Ready to Bring Structure to Your Fleet?"
        ctaDescription="Tell us about your fleet size and contracts — we'll get back to you within 24 hours with a tailored plan."
      />
    </>
  );
}
