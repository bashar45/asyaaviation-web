"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_ITEMS, NAV_ITEMS_EN, WA_MESSAGES, WA_MESSAGES_EN, waLink } from "@/lib/constants";
import LangSwitch from "@/components/LangSwitch";

export default function Header() {
  const pathname = usePathname();
  const locale: "tr" | "en" = pathname.startsWith("/en") ? "en" : "tr";
  const navItems = locale === "en" ? NAV_ITEMS_EN : NAV_ITEMS;
  const waMessage = locale === "en" ? WA_MESSAGES_EN.general : WA_MESSAGES.general;
  const ctaLabel = locale === "en" ? "Send a Request via WhatsApp" : "WhatsApp ile Talep Gönder";
  const homeHref = locale === "en" ? "/en" : "/";

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href={homeHref} className="flex items-center gap-2 shrink-0" aria-label="Asian Havacılık">
          <Image
            src="/logo.png"
            alt="Asian Havacılık"
            width={170}
            height={48}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main menu">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "text-primary"
                    : "text-secondary hover:text-primary hover:bg-muted"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangSwitch pathname={pathname} locale={locale} />
          <a
            href={waLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-accent hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" aria-hidden />
            {ctaLabel}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangSwitch pathname={pathname} locale={locale} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-primary"
            aria-label={open ? (locale === "en" ? "Close menu" : "Menüyü kapat") : locale === "en" ? "Open menu" : "Menüyü aç"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-white px-4 pb-4 pt-2 lg:hidden"
          aria-label="Mobile menu"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-md px-3 py-2.5 text-base font-medium ${
                    pathname === item.href
                      ? "bg-muted text-primary"
                      : "text-secondary hover:bg-muted hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={waLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            {ctaLabel}
          </a>
        </nav>
      )}
    </header>
  );
}
