import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import WaButton from "@/components/ui/WaButton";
import {
  MARKET_DISCLAIMER_EN,
  MARKET_REGIONS_EN,
  MARKET_SEGMENTS_EN,
  WA_MESSAGES_EN,
  waLink,
} from "@/lib/constants";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Markets We Serve",
  description:
    "Aviation material sourcing solutions for airlines, MRO and ground handling companies in Turkey, Central Asia, Europe and the Middle East.",
  alternates: { canonical: "/en/markets" },
};

export default function MarketsPageEn() {
  return (
    <>
      <PageHero
        eyebrow="Markets We Serve"
        title="Supply support across Turkey, Central Asia, Europe and the Middle East"
        description="Asian Havacılık provides sourcing solutions for airlines, MRO organizations, ground handling companies, private aviation companies and technical procurement teams operating mainly in Turkey, as well as in Central Asia, Europe and the Middle East."
      />

      <section className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-2xl font-semibold text-primary">Regions</h2>
              <div className="mt-6 space-y-4">
                {MARKET_REGIONS_EN.map((region) => (
                  <div key={region.name} className="rounded-2xl border border-border p-5">
                    <h3 className="text-base font-semibold text-primary">{region.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {region.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={PHOTOS.wing}
                  alt="Modern aircraft engine and wing detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <h2 className="mt-10 text-2xl font-semibold text-primary">Segments</h2>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {MARKET_SEGMENTS_EN.map((segment) => (
                  <div key={segment} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    <span className="text-sm text-secondary">{segment}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="mt-14 flex flex-col items-start gap-6 rounded-2xl border border-border bg-muted p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
                {MARKET_DISCLAIMER_EN}
              </p>
              <WaButton href={waLink(WA_MESSAGES_EN.general)}>Send a Request via WhatsApp</WaButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
