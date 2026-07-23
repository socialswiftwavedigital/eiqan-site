"use client";

import { useState } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

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
        aria-label="Change language"
        className="flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:border-teal hover:text-teal"
      >
        <Globe className="h-4 w-4" />
        EN
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full w-44 pt-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-dark-soft shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 text-sm font-medium text-teal">
              English
              <Check className="h-4 w-4" />
            </div>
            <div
              className="flex cursor-not-allowed items-center justify-between px-4 py-3 text-sm text-white/40"
              title="Arabic version coming soon"
            >
              العربية
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide">
                Soon
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
