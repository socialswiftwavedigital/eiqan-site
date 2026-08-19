"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

const text = {
  en: {
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    organization: "Organization Name",
    organizationType: "Organization Type",
    orgOptions: ["School", "University", "Corporate", "Bus Operator", "Bus Rental Operator", "Other"],
    size: "Number of Buses / Employees (approx.)",
    message: "Message",
    submit: "Request a Quote",
    submitted:
      "Thanks — your email client should have opened with your request pre-filled. If it didn't, email us directly at",
    subject: "Request a Quote — EIQAN",
    fields: {
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      organization: "Organization Name",
      organizationType: "Organization Type",
      size: "Number of Buses / Employees",
    },
  },
  ar: {
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    organization: "اسم المؤسسة",
    organizationType: "نوع المؤسسة",
    orgOptions: ["مدرسة", "جامعة", "شركة", "مشغل حافلات", "مشغل تأجير حافلات", "أخرى"],
    size: "عدد الحافلات / الموظفين (تقريباً)",
    message: "رسالتك",
    submit: "اطلب عرض سعر",
    submitted:
      "شكراً لك — من المفترض أن يكون برنامج البريد لديك قد فتح برسالة معبأة بطلبك. إذا لم يحدث ذلك، راسلنا مباشرة على",
    subject: "طلب عرض سعر — إيقان",
    fields: {
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      organization: "اسم المؤسسة",
      organizationType: "نوع المؤسسة",
      size: "عدد الحافلات / الموظفين",
    },
  },
};

export default function ContactForm({ lang = "en" }: { lang?: Locale }) {
  const [submitted, setSubmitted] = useState(false);
  const t = text[lang];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const lines = [
      `${t.fields.name}: ${data.get("name")}`,
      `${t.fields.email}: ${data.get("email")}`,
      `${t.fields.phone}: ${data.get("phone")}`,
      `${t.fields.organization}: ${data.get("organization")}`,
      `${t.fields.organizationType}: ${data.get("organizationType")}`,
      `${t.fields.size}: ${data.get("size")}`,
      "",
      `${data.get("message")}`,
    ];

    const subject = encodeURIComponent(t.subject);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t.fullName} name="name" required />
        <Field label={t.email} name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t.phone} name="phone" type="tel" />
        <Field label={t.organization} name="organization" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="organizationType"
            className="mb-1.5 block text-sm font-medium text-dark"
          >
            {t.organizationType} *
          </label>
          <select
            id="organizationType"
            name="organizationType"
            required
            defaultValue=""
            className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-dark focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
          >
            <option value="" disabled>
              {t.organizationType}
            </option>
            {t.orgOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <Field label={t.size} name="size" type="number" />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-dark">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-dark focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-teal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark sm:w-auto"
      >
        {t.submit}
      </button>

      {submitted && (
        <p className="text-sm text-teal-dark">
          {t.submitted}{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-dark">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-dark focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
      />
    </div>
  );
}
