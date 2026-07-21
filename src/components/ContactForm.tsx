"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const lines = [
      `Full Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Organization Name: ${data.get("organization")}`,
      `Organization Type: ${data.get("organizationType")}`,
      `Number of Buses / Employees: ${data.get("size")}`,
      "",
      `${data.get("message")}`,
    ];

    const subject = encodeURIComponent("Request a Quote — EIQAN");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Email Address" name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone Number" name="phone" type="tel" />
        <Field label="Organization Name" name="organization" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="organizationType"
            className="mb-1.5 block text-sm font-medium text-dark"
          >
            Organization Type *
          </label>
          <select
            id="organizationType"
            name="organizationType"
            required
            defaultValue=""
            className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-dark focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
          >
            <option value="" disabled>
              Organization Type
            </option>
            <option>School</option>
            <option>University</option>
            <option>Corporate</option>
            <option>Bus Operator</option>
            <option>Bus Rental Operator</option>
            <option>Other</option>
          </select>
        </div>
        <Field
          label="Number of Buses / Employees (approx.)"
          name="size"
          type="number"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-dark">
          Message
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
        Request a Quote
      </button>

      {submitted && (
        <p className="text-sm text-teal-dark">
          Thanks — your email client should have opened with your request
          pre-filled. If it didn&apos;t, email us directly at{" "}
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
