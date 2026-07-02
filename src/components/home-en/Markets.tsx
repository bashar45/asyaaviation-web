import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import {
  MARKET_AIRLINES,
  MARKET_DISCLAIMER_EN,
  MARKET_REGIONS_EN,
  MARKET_SEGMENTS_EN,
} from "@/lib/constants";
import { PHOTOS } from "@/lib/images";

export default function Markets() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Markets We Serve</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Supply support across Turkey, Central Asia, Europe and the Middle East
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We provide aviation material sourcing solutions to airlines, MRO
              organizations, ground handling companies and technical procurement teams
              operating in these markets.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {MARKET_SEGMENTS_EN.map((segment) => (
                <div key={segment} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span className="text-sm text-secondary">{segment}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src={PHOTOS.wing}
                alt="Modern aircraft engine and wing detail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-x-4 gap-y-2 p-6">
                {MARKET_REGIONS_EN.map((region) => (
                  <p key={region.name} className="text-sm font-semibold text-white">
                    {region.name}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {MARKET_AIRLINES.map((airline) => (
              <div
                key={airline.name}
                className="group flex h-20 items-center justify-center rounded-xl border border-border bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg"
              >
                <Image
                  src={airline.logo}
                  alt={airline.name}
                  width={120}
                  height={36}
                  className="h-auto max-h-7 w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            {MARKET_DISCLAIMER_EN}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
