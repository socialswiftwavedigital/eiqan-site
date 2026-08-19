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
import { galleryImages } from "@/lib/gallery";

const rentalGalleryImages = galleryImages.filter(
  (image) => image.category === "Bus Rental"
);

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
      "From mini buses to 71 seaters, rent the right vehicle for your long term and short term projects.",
  },
  {
    icon: MapPin,
    title: "Dedicated Support",
    description:
      "A dedicated coordinator manages your trip from confirmation to drop-off, so organizers always have a direct point of contact.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-Checked Vehicles",
    description:
      "Every rental vehicle goes through the same inspection and compliance checks as our managed fleet before it's assigned to your project.",
  },
  {
    icon: CalendarClock,
    title: "Simple Rental",
    description:
      "Request a quote, confirm your route and timing, and we handle vehicle assignment, driver, and dispatch.",
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

const fleetClasses = [
  {
    title: "Compact Class",
    seats: "Up to 19 seats",
    description:
      "Nimble vans and mini-buses for small groups, airport transfers, and point-to-point trips.",
    image: "/images/gallery/bus-rental-12.jpg",
  },
  {
    title: "Mid-Size",
    seats: "20-33 seats",
    description:
      "Our most requested class — staff shuttles, school trips, and corporate outings that need a balance of capacity and maneuverability.",
    image: "/images/gallery/bus-rental-07.jpg",
  },
  {
    title: "High Capacity",
    seats: "34-71 seats",
    description:
      "Full-size coaches built for large groups, long-distance charters, and major events where every seat counts.",
    image: "/images/gallery/bus-rental-04.jpg",
  },
];

const audiencePoints = [
  "Organizations with long-term and short-term bus rental needs",
  "Schools and universities renting buses for field trips and events",
  "Companies renting buses for offsites, conferences, or staff outings",
  "Event organizers needing group transportation for attendees",
  "Travel and tour operators requiring reliable charter vehicles",
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
        heroDescription="Reliable long-term and flexible short-term bus rental solutions for staff transportation, corporate shuttles, and workforce mobility — all backed by EIQAN's uncompromising safety standards."
        heroImage="/images/slide-4.jpg"
        introEyebrow="Why Rent From EIQAN"
        introTitle="Reliable Bus Rental Backed by People You Can Trust"
        introParagraphs={[
          "Most bus rental companies simply provide a vehicle and a driver. EIQAN delivers dependable transportation backed by experienced teams, professional drivers, responsive operations, and dedicated trip coordination to ensure every journey runs smoothly.",
          "Whether it's a single trip or a long-term transportation contract, you receive a clear quotation, confirmed schedules, reliable service, and continuous operational support from departure to arrival.",
        ]}
        features={features}
        audienceTitle="Built for Every Kind of Trip"
        audiencePoints={audiencePoints}
        fleetClasses={fleetClasses}
        gallery={rentalGalleryImages}
        galleryTitle="Our Fleet"
        ctaTitle="Need a Bus for an Upcoming Project?"
        ctaDescription="Tell us your dates, route, and group size — we'll get back to you within 24 hours with availability and pricing."
        breadcrumbs={[{ label: "Bus Rental", href: "/bus-rental" }]}
      />
    </>
  );
}
