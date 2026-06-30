import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import WaButton from "@/components/ui/WaButton";
import { BRAND_DISCLAIMER_EN, BRAND_SOURCES, WA_MESSAGES_EN, waLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Global Brand & Product Sources",
  description:
    "Part-number-based source research and sourcing support for product groups from Airbus, Boeing, Safran and other global aviation manufacturers.",
  alternates: { canonical: "/en/global-brand-sources" },
};

export default function BrandSourcesPageEn() {
  return (
    <>
      <PageHero
        eyebrow="Global Brand & Product Sources"
        title="Sourcing research from global manufacturer and distributor sources"
        description="Asian Havacılık provides request-based research and sourcing support for global brand product groups used in the aviation industry, through manufacturer, distributor and overseas supplier sources."
      />

      <section className="bg-background py-20">
        <Container>
          <Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {BRAND_SOURCES.map((brand) => (
                <div
                  key={brand.name}
                  className="group flex h-24 items-center justify-center rounded-xl border border-border bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={140}
                    height={40}
                    className="h-auto max-h-9 w-auto max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 max-w-2xl">
              <p className="text-base leading-relaxed text-secondary">
                Based on our customers&apos; product name, part number, brand, quantity,
                delivery expectation and document requirements, source research can be
                carried out for the relevant product groups.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-10 flex flex-col items-start gap-6 rounded-2xl border border-border bg-muted p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
                {BRAND_DISCLAIMER_EN}
              </p>
              <WaButton href={waLink(WA_MESSAGES_EN.brand)}>Send Brand / Part Number</WaButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
