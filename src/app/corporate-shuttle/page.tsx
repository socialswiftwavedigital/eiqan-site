import type { Metadata } from "next";
import {
  MapPin,
  ScanLine,
  LayoutDashboard,
  Route,
  BellRing,
  Clock,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corporate Shuttle Service",
  description:
    "Fully managed corporate employee shuttle service with live tracking, digital check-in, shift-based routing, and operational reporting for organizations of any size.",
  alternates: { canonical: "/corporate-shuttle" },
};

const features = [
  {
    icon: MapPin,
    title: "Live Fleet Tracking",
    description:
      "HR and facilities teams see every shuttle in real time, with accurate arrival estimates for every pickup point.",
  },
  {
    icon: ScanLine,
    title: "Digital Employee Check-In",
    description:
      "Badge, QR, or NFC-based boarding confirms exactly who is on each shuttle — no manual headcounts required.",
  },
  {
    icon: Route,
    title: "Shift-Based Route Design",
    description:
      "Routes are built around your shift patterns and campus locations, and re-optimized as headcount or timing changes.",
  },
  {
    icon: LayoutDashboard,
    title: "Operational Dashboard",
    description:
      "A single dashboard for facilities and HR to monitor ridership, punctuality, and driver performance across the fleet.",
  },
  {
    icon: BellRing,
    title: "Automated Reporting",
    description:
      "Daily and weekly reports on utilization, on-time performance, and incidents — generated automatically, no manual pulls.",
  },
  {
    icon: Clock,
    title: "On-Time Performance Guarantees",
    description:
      "Dedicated operations oversight keeps punctuality high, with proactive rerouting around traffic and disruptions.",
  },
];

const audiencePoints = [
  "Corporates running daily employee shuttle routes between residences and campuses",
  "Industrial and manufacturing sites coordinating shift-based workforce transport",
  "HR and facilities teams tired of coordinating transport over WhatsApp and spreadsheets",
  "Multi-site organizations needing consistent reporting across every location",
  "Companies with sustainability or duty-of-care commitments around commuting",
  "Employees who want reliable, trackable transportation to and from work",
];

export default function CorporateShuttlePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Corporate Shuttle Service",
          name: "EIQAN Corporate Shuttle",
          provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
          areaServed: "Worldwide",
          description: metadata.description,
        }}
      />
      <ServicePageLayout
        eyebrow="Corporate Shuttle"
        title="Reliable Employee Transport, Fully Managed"
        heroDescription="A fully managed, end-to-end employee shuttle service with digital check-in, live tracking, and full operational reporting — no more coordination headaches for your HR or facilities team."
        heroImage="/images/serve-corporate.jpg"
        introEyebrow="Why Companies Choose EIQAN"
        introTitle="Transport Your Workforce Without the Operational Burden"
        introParagraphs={[
          "Coordinating employee shuttles across shifts, sites, and changing headcounts is a full-time operational problem. EIQAN takes that burden off your team by managing routing, driver oversight, and reporting as a single service — not a piece of software you have to run yourself.",
          "Every ride is tracked from departure to arrival, every employee's boarding is logged digitally, and your team gets clear reporting on punctuality and utilization without having to chase drivers or reconcile spreadsheets.",
        ]}
        features={features}
        audienceTitle="Built for Every Team That Depends on the Commute"
        audiencePoints={audiencePoints}
        ctaTitle="Ready to Simplify Your Employee Shuttle Program?"
        ctaDescription="Tell us about your sites, shifts, and headcount — we'll get back to you within 24 hours with a tailored plan."
        breadcrumbs={[{ label: "Corporate Shuttle", href: "/corporate-shuttle" }]}
      />
    </>
  );
}
