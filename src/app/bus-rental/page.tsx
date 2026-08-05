import type { Metadata } from "next";
import {
  Bus,
  MapPin,
  ShieldCheck,
  CalendarClock,
  Users,
  BadgeCheck,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bus Rental Services",
  description:
    "On-demand and contract bus rental with vetted drivers and safety-checked vehicles — for events, tours, staff trips, and short-term transport needs.",
  alternates: { canonical: "/bus-rental" },
};

const features = [
  {
    icon: Bus,
    title: "Flexible Fleet Options",
    description:
      "From mini-buses to full-size coaches, rent the right vehicle for one-off trips, seasonal contracts, or recurring events.",
  },
  {
    icon: MapPin,
    title: "Dedicated Trip Support",
    description:
      "A dedicated coordinator manages your trip from confirmation to drop-off, so organizers always have a direct point of contact.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-Checked Vehicles",
    description:
      "Every rental vehicle goes through the same inspection and compliance checks as our managed fleet before it's assigned to your trip.",
  },
  {
    icon: CalendarClock,
    title: "Simple Rental & Scheduling",
    description:
      "Request a quote, confirm your route and timing, and we handle vehicle assignment, driver scheduling, and dispatch.",
  },
  {
    icon: Users,
    title: "Vetted, Professional Drivers",
    description:
      "Every driver on a rental trip meets the same vetting and safety standard as our managed transportation contracts.",
  },
  {
    icon: BadgeCheck,
    title: "Compliance-Ready Documentation",
    description:
      "Insurance, licensing, and vehicle inspection records available on request for corporate and institutional rentals.",
  },
];

const audiencePoints = [
  "Schools and universities renting buses for field trips and events",
  "Companies renting buses for offsites, conferences, or staff outings",
  "Event organizers needing group transportation for attendees",
  "Travel and tour operators requiring reliable charter vehicles",
  "Organizations with short-term or seasonal transport needs",
  "Anyone who wants rental transport with the same visibility as a managed fleet",
];

export default function BusRentalPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Bus Rental Service",
          name: "EIQAN Bus Rental",
          provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
          areaServed: "Worldwide",
          description: metadata.description,
        }}
      />
      <ServicePageLayout
        eyebrow="Bus Rental"
        title="On-Demand Bus Rental"
        heroDescription="Rent buses for events, tours, staff trips, and short-term transport needs — with vetted drivers and the same safety standards behind every EIQAN-managed fleet."
        heroImage="/images/slide-4.jpg"
        introEyebrow="Why Rent From EIQAN"
        introTitle="Rental Transport That Doesn't Compromise on Safety"
        introParagraphs={[
          "Most bus rental companies hand you a vehicle and a driver with no visibility once the trip starts. EIQAN applies the same operational standard we use for schools and corporates to every rental — vetted drivers, safety-checked vehicles, and dedicated trip support.",
          "Whether it's a single field trip or a recurring seasonal contract, you get a straightforward quote, a confirmed schedule, and full visibility into the trip from departure to return.",
        ]}
        features={features}
        audienceTitle="Built for Every Kind of Trip"
        audiencePoints={audiencePoints}
        ctaTitle="Need a Bus for an Upcoming Project?"
        ctaDescription="Tell us your dates, route, and group size — we'll get back to you within 24 hours with availability and pricing."
        breadcrumbs={[{ label: "Bus Rental", href: "/bus-rental" }]}
      />
    </>
  );
}
