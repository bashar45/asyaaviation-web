"use client";

import Link from "next/link";
import { LOCALE_PATH_MAP } from "@/lib/constants";

export default function LangSwitch({
  pathname,
  locale,
  className = "",
}: {
  pathname: string;
  locale: "tr" | "en";
  className?: string;
}) {
  const target = LOCALE_PATH_MAP[pathname] ?? (locale === "tr" ? "/en" : "/");

  return (
    <div className={`inline-flex items-center rounded-full border border-border bg-muted p-0.5 text-xs font-semibold ${className}`}>
      <Link
        href={locale === "tr" ? pathname : target}
        className={`rounded-full px-2.5 py-1 transition-colors duration-200 ${
          locale === "tr" ? "bg-primary text-white" : "text-muted-foreground hover:text-primary"
        }`}
      >
        TR
      </Link>
      <Link
        href={locale === "en" ? pathname : target}
        className={`rounded-full px-2.5 py-1 transition-colors duration-200 ${
          locale === "en" ? "bg-primary text-white" : "text-muted-foreground hover:text-primary"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
