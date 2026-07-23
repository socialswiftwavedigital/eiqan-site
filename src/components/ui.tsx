import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left mx-0"
      }`}
    >
      {eyebrow && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl ${
          light ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-7 ${
            light ? "text-white/70" : "text-dark/65"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-teal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
}) {
  const variantClasses =
    variant === "dark"
      ? "border-white/25 bg-white/5 text-white hover:bg-white/10"
      : "border-black/15 bg-transparent text-dark hover:bg-black/5";
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3.5 text-sm font-semibold transition-colors ${variantClasses} ${className}`}
    >
      {children}
    </Link>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-black/8 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-dark">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-dark/65">{description}</p>
    </div>
  );
}

export function StatBlock({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="text-4xl font-extrabold text-teal sm:text-5xl">
        {value}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-white/70">{label}</div>
    </div>
  );
}

export function CTASection({
  title = "Ready to Upgrade Your Transport Operations?",
  description = "Tell us about your needs and we'll get back to you within 24 hours.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-dark py-16">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-dark to-dark-soft px-6 py-14 text-center sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(circle at 20% 30%, rgba(43,191,179,0.35) 0%, rgba(0,0,0,0) 55%)",
            }}
          />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/75">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton href="/contact">Request a Quote</PrimaryButton>
              <SecondaryButton href="/faq">Read FAQs</SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: Crumb[];
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-dark py-16 sm:py-24">
      {image && (
        <div className="absolute inset-0">
          <Image src={image} alt="" fill className="object-cover opacity-45" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(rgba(13,13,13,0.65) 0%, rgba(13,13,13,0.5) 50%, rgba(13,13,13,0.85) 100%)",
            }}
          />
        </div>
      )}
      <div className="container-page relative text-center">
        {breadcrumbs && (
          <div className="mb-6 flex justify-center">
            <Breadcrumbs items={breadcrumbs} light />
          </div>
        )}
        <div className="flex justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-white text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-white/70">
          {description}
        </p>
      </div>
    </section>
  );
}
