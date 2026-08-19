import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { PageHero } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";
import { resolveLocale, type Locale } from "@/lib/i18n";

const metaText: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Contact Us",
    description:
      "Get a quote for student transportation, corporate shuttle, fleet management, or bus rental services. We respond within 24 hours.",
  },
  ar: {
    title: "تواصل معنا",
    description:
      "احصل على عرض سعر لخدمات نقل الطلاب أو نقل الموظفين أو إدارة الأسطول أو تأجير الحافلات. نرد خلال 24 ساعة.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = resolveLocale((await params).lang);
  return {
    title: metaText[lang].title,
    description: metaText[lang].description,
    alternates: { canonical: "/contact" },
  };
}

const text = {
  en: {
    heroEyebrow: "Contact",
    heroTitle: "Ready to Upgrade Your Transport Operations?",
    heroDescription: "Tell us about your needs and we'll get back to you within 24 hours.",
    breadcrumb: "Contact",
    getInTouch: "Get in Touch",
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
    responseTime: "Response Time",
    within24: "Within 24 hours",
    sendMessage: "Send Us a Message",
  },
  ar: {
    heroEyebrow: "تواصل معنا",
    heroTitle: "هل أنت مستعد لتطوير عمليات النقل لديك؟",
    heroDescription: "أخبرنا باحتياجاتك وسنعاود التواصل معك خلال 24 ساعة.",
    breadcrumb: "تواصل معنا",
    getInTouch: "تواصل معنا",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    whatsapp: "واتساب",
    responseTime: "زمن الاستجابة",
    within24: "خلال 24 ساعة",
    sendMessage: "أرسل لنا رسالة",
  },
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = resolveLocale((await params).lang);
  const t = text[lang];

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
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        description={t.heroDescription}
        breadcrumbs={[{ label: t.breadcrumb, href: "/contact" }]}
        image="/images/serve-corporate.jpg"
        lang={lang}
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-dark">{t.getInTouch}</h2>
            <div className="mt-6 space-y-5">
              <ContactInfoRow
                icon={Mail}
                label={t.email}
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
              />
              <ContactInfoRow
                icon={Phone}
                label={t.phone}
                value={siteConfig.phone}
                href={siteConfig.phoneHref}
              />
              <ContactInfoRow
                icon={MessageCircle}
                label={t.whatsapp}
                value={siteConfig.phone}
                href={siteConfig.whatsapp}
                external
              />
              <ContactInfoRow
                icon={Clock}
                label={t.responseTime}
                value={t.within24}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-black/8 bg-offwhite p-6 sm:p-8 lg:col-span-3">
            <h2 className="text-xl font-bold text-dark">{t.sendMessage}</h2>
            <div className="mt-6">
              <ContactForm lang={lang} />
            </div>
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
