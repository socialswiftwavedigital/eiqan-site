"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { services, siteConfig } from "@/lib/site";
import { localeHref, stripLocale, type Locale } from "@/lib/i18n";

const primaryLinks = [
  { label: "Home", labelAr: "الرئيسية", href: "/" },
  { label: "About", labelAr: "من نحن", href: "/about" },
];

const secondaryLinks = [
  { label: "Blog", labelAr: "المدونة", href: "/blog" },
  { label: "Gallery", labelAr: "معرض الصور", href: "/gallery" },
  { label: "FAQ", labelAr: "الأسئلة الشائعة", href: "/faq" },
  { label: "Contact", labelAr: "تواصل معنا", href: "/contact" },
];

const text = {
  en: { services: "Services", getQuote: "Get a Quote", openMenu: "Open menu", closeMenu: "Close menu" },
  ar: { services: "خدماتنا", getQuote: "اطلب عرض سعر", openMenu: "فتح القائمة", closeMenu: "إغلاق القائمة" },
};

export default function Header({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const canonicalPath = stripLocale(pathname);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const t = text[lang];

  const isActive = (href: string) =>
    href === "/" ? canonicalPath === "/" : canonicalPath.startsWith(href);
  const isServiceActive = services.some((s) => isActive(s.href));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dark/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href={localeHref(lang, "/")} aria-label={`${siteConfig.name} home`}>
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary"
        >
          {primaryLinks.map((item) => (
            <Link
              key={item.href}
              href={localeHref(lang, item.href)}
              className={`text-sm font-medium transition-colors hover:text-teal ${
                isActive(item.href) ? "text-teal" : "text-white/80"
              }`}
            >
              {lang === "ar" ? item.labelAr : item.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-teal ${
                isServiceActive ? "text-teal" : "text-white/80"
              }`}
            >
              {t.services}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-dark-soft shadow-xl">
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      href={localeHref(lang, item.href)}
                      onClick={() => setServicesOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5 hover:text-teal ${
                        isActive(item.href) ? "text-teal" : "text-white/80"
                      }`}
                    >
                      {lang === "ar" ? item.labelAr : item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {secondaryLinks.map((item) => (
            <Link
              key={item.href}
              href={localeHref(lang, item.href)}
              className={`text-sm font-medium transition-colors hover:text-teal ${
                isActive(item.href) ? "text-teal" : "text-white/80"
              }`}
            >
              {lang === "ar" ? item.labelAr : item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher lang={lang} />
          <Link
            href={localeHref(lang, "/contact")}
            className="rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            {t.getQuote}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-white lg:hidden"
          aria-label={open ? t.closeMenu : t.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-dark px-6 pb-6 pt-2 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {primaryLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={localeHref(lang, item.href)}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-3 text-base font-medium ${
                    isActive(item.href) ? "text-teal" : "text-white/85"
                  }`}
                >
                  {lang === "ar" ? item.labelAr : item.label}
                </Link>
              </li>
            ))}

            <li>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                aria-expanded={mobileServicesOpen}
                className={`flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium ${
                  isServiceActive ? "text-teal" : "text-white/85"
                }`}
              >
                {t.services}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileServicesOpen && (
                <ul className="ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
                  {services.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={localeHref(lang, item.href)}
                        onClick={() => setOpen(false)}
                        className={`block rounded-md px-3 py-2.5 text-sm font-medium ${
                          isActive(item.href) ? "text-teal" : "text-white/70"
                        }`}
                      >
                        {lang === "ar" ? item.labelAr : item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {secondaryLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={localeHref(lang, item.href)}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-3 text-base font-medium ${
                    isActive(item.href) ? "text-teal" : "text-white/85"
                  }`}
                >
                  {lang === "ar" ? item.labelAr : item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={localeHref(lang, "/contact")}
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-lg bg-teal px-5 py-3 text-center text-sm font-semibold text-white"
          >
            {t.getQuote}
          </Link>
          <div className="mt-4 flex justify-center">
            <LanguageSwitcher lang={lang} />
          </div>
        </nav>
      )}
    </header>
  );
}
