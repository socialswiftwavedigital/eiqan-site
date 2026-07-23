export const siteConfig = {
  name: "EIQAN",
  tagline: "Certainty in Motion.",
  description:
    "EIQAN is a tech-enabled transportation service that gives schools, companies, and bus operators complete visibility, AI-powered safety monitoring, and real-time control over every journey — without the operational burden.",
  url: "https://www.eiqan.com",
  email: "contact@eiqan.com",
  phone: "+966 53 874 2193",
  phoneHref: "tel:+966538742193",
  whatsapp: "https://wa.me/966538742193",
  social: {
    linkedin: "https://www.linkedin.com/company/eiqan",
    x: "https://x.com/eiqan511184",
    instagram: "https://www.instagram.com/eiqan2026",
  },
};

// Vercel sets VERCEL_ENV to "production" | "preview" | "development" automatically.
// On preview/dev deployments (e.g. *.vercel.app) we must not let search engines index
// the site, since it's a duplicate of eiqan.com and would compete with it for ranking.
export const isProdDeployment = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : true;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Student Transportation", href: "/student-transportation" },
  { label: "Corporate Shuttle", href: "/corporate-shuttle" },
  { label: "Fleet Management", href: "/fleet-management" },
  { label: "Bus Rental", href: "/bus-rental" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const services: NavItem[] = [
  { label: "Student Transportation", href: "/student-transportation" },
  { label: "Corporate Shuttle", href: "/corporate-shuttle" },
  { label: "Fleet Management", href: "/fleet-management" },
  { label: "Bus Rental", href: "/bus-rental" },
];

export const quickLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 98, suffix: "%", label: "On-Time Trip Performance" },
  { value: 3, suffix: " Min", label: "Incident Response Time" },
  { value: 76, suffix: "%", label: "Reduction in Safety Violations" },
  { value: 99, suffix: "%", label: "Check-In & Check-Out Accuracy" },
];

export const coreFeatures = [
  {
    title: "Live GPS Tracking",
    description:
      "Every bus tracked in real time, with live ETAs pushed to parents and admins the moment the journey begins.",
  },
  {
    title: "AI Safety Monitoring",
    description:
      "Onboard CCTV and audio continuously analyzed by AI to detect and alert on unsafe events before they escalate.",
  },
  {
    title: "Smart Route Management",
    description:
      "Our system auto-optimizes routes based on traffic, absences, and real-time conditions — reducing time and cost.",
  },
  {
    title: "Digital Check-In/Out",
    description:
      "Every student and employee boarding and alighting is recorded via QR, NFC, or wristband — zero margin for error.",
  },
  {
    title: "Full Operational Oversight",
    description:
      "Dedicated dashboards for schools, corporates, and bus operators to monitor their entire service at a glance.",
  },
  {
    title: "Automated Reporting & Alerts",
    description:
      "Instant notifications for ETAs, safety violations, absences, and auto-generated daily reports — delivered automatically.",
  },
];

export const problems = [
  {
    number: "01",
    title: "No Real-Time Visibility",
    description:
      "Parents and admins have no live tracking of buses in operation. Where is the bus? Is the child on board? Nobody knows.",
  },
  {
    number: "02",
    title: "Zero Safety Monitoring",
    description:
      "No way to detect or respond to unsafe behavior onboard. Incidents go unreported, unreviewed, and unresolved.",
  },
  {
    number: "03",
    title: "Manual & Chaotic Operations",
    description:
      "Routes, attendance, and compliance still managed via WhatsApp and spreadsheets. One mistake creates cascading failures.",
  },
];

export const values = [
  {
    title: "Safety First",
    description:
      "Every decision we make — from route design to onboard monitoring — starts with the safety of the people we transport.",
  },
  {
    title: "Operationally Excellent",
    description:
      "We combine experienced transport operators with disciplined processes so every journey runs on time, every time.",
  },
  {
    title: "AI-Driven",
    description:
      "Our technology is built in-house to detect risk, optimize routes, and automate reporting before problems escalate.",
  },
  {
    title: "Radically Transparent",
    description:
      "Parents, admins, and fleet owners always know where their people are and how the service is performing.",
  },
];

export const faqs = [
  {
    question: "What is EIQAN?",
    answer:
      "EIQAN is a tech-enabled transportation service provider that delivers safe, transparent, and AI-monitored transport for schools, corporates, and bus operators worldwide.",
  },
  {
    question: "How does EIQAN's AI safety monitoring work?",
    answer:
      "Our onboard CCTV and audio systems are continuously analyzed by AI to detect unsafe events and behaviors in real time, instantly alerting our operations team so they can respond quickly when issues arise.",
  },
  {
    question: "Do you serve bus rental and fleet operators?",
    answer:
      "Yes. EIQAN works with bus rental operators and fleet owners to bring compliance, real-time tracking, driver management, and operational reporting to their fleets — whether for school routes, corporate shuttles, or rental trips.",
  },
  {
    question: "Which countries does EIQAN operate in?",
    answer:
      "EIQAN is built for global operations and is actively expanding across multiple markets. Contact us to discuss availability in your region.",
  },
  {
    question: "How do parents track their child's bus?",
    answer:
      "Parents receive real-time GPS updates, ETA alerts, and boarding/alighting notifications through our parent app. They can also access live onboard CCTV while their child is on the bus.",
  },
  {
    question: "How is student transportation different from corporate shuttle service?",
    answer:
      "Student transportation is built around guardian visibility, digital attendance, and strict safeguarding controls, while corporate shuttle service focuses on employee check-in, shift-based routing, and workplace reporting. Both run on the same EIQAN platform, configured for each use case.",
  },
  {
    question: "Can I request a custom quote for my organization?",
    answer:
      "Yes. Every deployment is scoped to your fleet size, routes, and requirements. Fill out the contact form or WhatsApp us and we'll respond within 24 hours with a tailored quote.",
  },
];
