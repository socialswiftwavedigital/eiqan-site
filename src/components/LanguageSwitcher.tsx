"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Check, ChevronDown } from "lucide-react";
import { localeHref, stripLocale, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const canonicalPath = stripLocale(pathname);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={lang === "ar" ? "تغيير اللغة" : "Change language"}
        className="flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:border-teal hover:text-teal"
      >
        <Globe className="h-4 w-4" />
        {lang === "ar" ? "عربي" : "EN"}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute end-0 top-full w-44 pt-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-dark-soft shadow-xl">
            <Link
              href={localeHref("en", canonicalPath)}
              className={`flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5 ${
                lang === "en" ? "text-teal" : "text-white/70"
              }`}
            >
              English
              {lang === "en" && <Check className="h-4 w-4" />}
            </Link>
            <Link
              href={localeHref("ar", canonicalPath)}
              className={`flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5 ${
                lang === "ar" ? "text-teal" : "text-white/70"
              }`}
            >
              العربية
              {lang === "ar" && <Check className="h-4 w-4" />}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
