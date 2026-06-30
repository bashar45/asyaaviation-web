import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppDock from "@/components/WhatsAppDock";
import LocaleSync from "@/components/LocaleSync";
import { SITE } from "@/lib/constants";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Havacılık Malzemeleri ve Tedarik Çözümleri`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Asian Havacılık, sivil havacılık firmaları için yurtdışı kaynaklı yedek parça, sarf malzeme, bakım ekipmanı ve teknik ürün tedarik çözümleri sunar.",
  openGraph: {
    title: `${SITE.name} | Havacılık Malzemeleri ve Tedarik Çözümleri`,
    description:
      "Sivil havacılık firmaları için global tedarik ağı üzerinden yedek parça ve teknik ürün tedarik çözümleri.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "tr_TR",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${lexend.variable} ${sourceSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-background text-foreground">
        <LocaleSync />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppDock />
      </body>
    </html>
  );
}
