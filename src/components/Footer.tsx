import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import {
  LinkedInIcon,
  InstagramIcon,
  XIcon,
  WhatsAppIcon,
} from "@/components/SocialIcons";
import { quickLinks, services, siteConfig } from "@/lib/site";
import { localeHref, type Locale } from "@/lib/i18n";

const text = {
  en: {
    tagline2:
      "Safer, smarter transportation for schools, companies, and bus operators worldwide.",
    quickLinks: "Quick Links",
    services: "Services",
    contact: "Contact",
    whatsappUs: "WhatsApp Us",
    rights: (year: number) => `© ${year} EIQAN. All rights reserved.`,
  },
  ar: {
    tagline2:
      "نقل أكثر أماناً وذكاءً للمدارس والشركات ومشغلي الحافلات حول العالم.",
    quickLinks: "روابط سريعة",
    services: "خدماتنا",
    contact: "تواصل معنا",
    whatsappUs: "راسلنا عبر واتساب",
    rights: (year: number) => `© ${year} إيقان. جميع الحقوق محفوظة.`,
  },
};

export default function Footer({ lang }: { lang: Locale }) {
  const year = new Date().getFullYear();
  const t = text[lang];
  const tagline = lang === "ar" ? siteConfig.taglineAr : siteConfig.tagline;

  return (
    <footer className="border-t border-white/10 bg-dark text-white/70">
      <div className="container-page grid grid-cols-1 gap-x-8 gap-y-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href={localeHref(lang, "/")}>
            <Logo />
          </Link>
          <p className="mt-5 text-sm leading-6">{tagline}</p>
          <p className="mt-2 text-sm leading-6">{t.tagline2}</p>
          <div className="mt-6 flex items-center gap-3">
            <SocialIcon href={siteConfig.social.linkedin} label="LinkedIn">
              <LinkedInIcon className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={siteConfig.social.x} label="X (Twitter)">
              <XIcon className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={siteConfig.social.instagram} label="Instagram">
              <InstagramIcon className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={siteConfig.whatsapp} label="WhatsApp">
              <WhatsAppIcon className="h-4 w-4" />
            </SocialIcon>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            {t.quickLinks}
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={localeHref(lang, item.href)} className="hover:text-teal">
                  {lang === "ar" ? item.labelAr : item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            {t.services}
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((item) => (
              <li key={item.href}>
                <Link href={localeHref(lang, item.href)} className="hover:text-teal">
                  {lang === "ar" ? item.labelAr : item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            {t.contact}
          </h3>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-teal" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-teal">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-teal" />
              <a href={siteConfig.phoneHref} className="hover:text-teal">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-teal" />
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal"
              >
                {t.whatsappUs}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>{t.rights(year)}</p>
          <p>{tagline}</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-teal hover:text-teal"
    >
      {children}
    </a>
  );
}
