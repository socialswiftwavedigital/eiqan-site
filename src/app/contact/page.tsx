import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { PageHero } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a quote for student transportation, corporate shuttle, fleet management, or bus rental services. We respond within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact EIQAN",
          about: {
            "@type": "Organization",
            name: siteConfig.name,
            email: siteConfig.email,
            telephone: siteConfig.phone,
          },
        }}
      />

      <PageHero
        eyebrow="Contact"
        title="Ready to Upgrade Your Transport Operations?"
        description="Tell us about your needs and we'll get back to you within 24 hours."
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-dark">Get in Touch</h2>
            <div className="mt-6 space-y-5">
              <ContactInfoRow
                icon={Mail}
                label="Email"
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
              />
              <ContactInfoRow
                icon={Phone}
                label="Phone"
                value={siteConfig.phone}
                href={siteConfig.phoneHref}
              />
              <ContactInfoRow
                icon={MessageCircle}
                label="WhatsApp"
                value={siteConfig.phone}
                href={siteConfig.whatsapp}
                external
              />
              <ContactInfoRow
                icon={Clock}
                label="Response Time"
                value="Within 24 hours"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-black/8 bg-offwhite p-6 sm:p-8 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactInfoRow({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wide text-dark/50">
          {label}
        </div>
        <div className="mt-0.5 text-base font-medium text-dark">{value}</div>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block transition-opacity hover:opacity-80"
    >
      {content}
    </a>
  );
}
