"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui";

const STORAGE_KEY = "eiqan-welcome-seen";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

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
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative p-8 text-center">
          <span className="inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal">
            Welcome to EIQAN
          </span>
          <h2
            id="welcome-popup-title"
            className="mt-4 text-2xl font-bold text-white text-balance"
          >
            Safer, Smarter Transportation — Delivered.
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Live GPS tracking, AI safety monitoring, and fully managed
            student, corporate, and rental transport. Tell us what you need
            and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <PrimaryButton href="/contact" className="w-full sm:w-auto">
              Get a Quote
            </PrimaryButton>
            <SecondaryButton href="/about" className="w-full sm:w-auto">
              Explore EIQAN
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
