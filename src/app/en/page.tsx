import type { Metadata } from "next";
import Hero from "@/components/home-en/Hero";
import TrustStrip from "@/components/home-en/TrustStrip";
import ProductGroups from "@/components/home-en/ProductGroups";
import BrandSources from "@/components/home-en/BrandSources";
import Markets from "@/components/home-en/Markets";
import SupplyProcess from "@/components/home-en/SupplyProcess";
import Quality from "@/components/home-en/Quality";
import ClosingCta from "@/components/home-en/ClosingCta";

export const metadata: Metadata = {
  title: "Asian Havacılık | Aviation Parts & Supply Solutions",
  description:
    "Asian Havacılık provides sourcing solutions for civil aviation companies: spare parts, consumables, maintenance equipment and technical products from overseas sources.",
  alternates: { canonical: "/en" },
  openGraph: {
    title: "Asian Havacılık | Aviation Parts & Supply Solutions",
    description:
      "Sourcing solutions for spare parts and technical products for civil aviation companies through a global supply network.",
    locale: "en_US",
    type: "website",
  },
};

export default function EnHome() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProductGroups />
      <BrandSources />
      <Markets />
      <SupplyProcess />
      <Quality />
      <ClosingCta />
    </>
  );
}
