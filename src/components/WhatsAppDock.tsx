"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { WA_MESSAGES, WA_MESSAGES_EN, waLink } from "@/lib/constants";

export default function WhatsAppDock() {
  const pathname = usePathname();
  const locale: "tr" | "en" = pathname.startsWith("/en") ? "en" : "tr";
  const message = locale === "en" ? WA_MESSAGES_EN.general : WA_MESSAGES.general;
  const label = locale === "en" ? "Send a Request via WhatsApp" : "WhatsApp ile Talep Gönder";

  return (
    <>
      {/* Desktop: bottom-right floating button */}
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-40 hidden cursor-pointer items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 font-semibold text-white shadow-lg shadow-black/15 transition-all duration-200 hover:scale-105 hover:shadow-xl sm:flex"
        aria-label={label}
      >
        <MessageCircle className="h-5 w-5" aria-hidden />
        <span className="text-sm">{label}</span>
      </a>

      {/* Mobile: bottom fixed bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 p-3 backdrop-blur-md [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))] sm:hidden">
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-base font-semibold text-white shadow-md"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          {label}
        </a>
      </div>
      {/* Spacer so content isn't hidden behind mobile bar */}
      <div className="h-[68px] sm:hidden" aria-hidden />
    </>
  );
}
