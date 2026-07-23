import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";
import { navItems, services, siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-dark text-white/70">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/">
            <Logo />
          </Link>
          <p className="mt-4 text-sm leading-6">{siteConfig.tagline}</p>
          <p className="mt-2 text-sm leading-6">
            Safer, smarter transportation for schools, companies, and bus
            operators worldwide.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-teal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-teal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
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
              <MessageCircle className="h-4 w-4 shrink-0 text-teal" />
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>&copy; {year} EIQAN. All rights reserved.</p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
