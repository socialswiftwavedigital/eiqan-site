"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui";
import { localeHref, type Locale } from "@/lib/i18n";

const STORAGE_KEY = "eiqan-welcome-seen";

const text = {
  en: {
    welcome: "Welcome to EIQAN",
    title: "Safer, Smarter Transportation — Delivered.",
    body: "Live GPS tracking, AI safety monitoring, and fully managed student, corporate, and rental transport. Tell us what you need and we'll get back to you within 24 hours.",
    getQuote: "Get a Quote",
    explore: "Explore EIQAN",
    close: "Close",
  },
  ar: {
    welcome: "مرحباً بكم في إيقان",
    title: "نقل أكثر أماناً وذكاءً — نُنجزه لكم.",
    body: "تتبع مباشر عبر GPS، ومراقبة سلامة بالذكاء الاصطناعي، ونقل مُدار بالكامل للطلاب والشركات والتأجير. أخبرنا باحتياجك وسنعاود التواصل معك خلال 24 ساعة.",
    getQuote: "اطلب عرض سعر",
    explore: "اكتشف إيقان",
    close: "إغلاق",
  },
};

export default function WelcomePopup({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  const t = text[lang];

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    setOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-popup-title"
      onClick={close}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-dark-soft ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 15% 10%, rgba(43,191,179,0.35) 0%, rgba(0,0,0,0) 55%)",
          }}
        />
        <button
          type="button"
          onClick={close}
          aria-label={t.close}
          className="absolute end-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative p-8 text-center">
          <span className="inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal">
            {t.welcome}
          </span>
          <h2
            id="welcome-popup-title"
            className="mt-4 text-2xl font-bold text-white text-balance"
          >
            {t.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/70">{t.body}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <PrimaryButton href={localeHref(lang, "/contact")} className="w-full sm:w-auto">
              {t.getQuote}
            </PrimaryButton>
            <SecondaryButton href={localeHref(lang, "/about")} className="w-full sm:w-auto">
              {t.explore}
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
