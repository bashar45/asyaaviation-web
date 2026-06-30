"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Clock } from "lucide-react";
import { NAV_ITEMS, NAV_ITEMS_EN, SITE } from "@/lib/constants";

const COPY = {
  tr: {
    desc: "Sivil havacılık sektörüne yönelik global tedarik kaynakları üzerinden yedek parça, sarf malzeme, teknik ekipman ve bakım ürünleri tedarik çözümleri.",
    site: "Site",
    contact: "İletişim",
    privacy: "Gizlilik Politikası",
    privacyHref: "/gizlilik-politikasi",
    rights: "Tüm hakları saklıdır.",
    founder: "Kurucu",
  },
  en: {
    desc: "Sourcing solutions for spare parts, consumables, technical equipment and maintenance products for the civil aviation sector through a global supply network.",
    site: "Site",
    contact: "Contact",
    privacy: "Privacy Policy",
    privacyHref: "/en/privacy-policy",
    rights: "All rights reserved.",
    founder: "Founder",
  },
};

export default function Footer() {
  const pathname = usePathname();
  const locale: "tr" | "en" = pathname.startsWith("/en") ? "en" : "tr";
  const navItems = locale === "en" ? NAV_ITEMS_EN : NAV_ITEMS;
  const t = COPY[locale];

  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <div className="bg-noise pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="inline-block rounded-lg bg-white p-2">
              <Image src="/logo.png" alt="Asian Havacılık" width={150} height={42} className="h-9 w-auto" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">{t.desc}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">{t.site}</h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">{t.contact}</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" aria-hidden />
                <span>{SITE.phoneDisplay}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" aria-hidden />
                <span>{SITE.hours}</span>
              </li>
            </ul>
            <Link
              href={t.privacyHref}
              className="mt-5 inline-block text-xs text-white/50 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {t.privacy}
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. {t.rights}</p>
          <p>{t.founder}: {SITE.founder}</p>
        </div>
      </div>
    </footer>
  );
}
