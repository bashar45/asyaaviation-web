import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Globe2, Target, FileCheck2, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import WaButton from "@/components/ui/WaButton";
import { PHOTOS } from "@/lib/images";
import { WA_MESSAGES_EN, waLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Asian Havacılık is a reliable B2B sourcing partner for civil aviation companies, providing overseas spare parts and technical product supply.",
  alternates: { canonical: "/en/about" },
};

const VALUES = [
  { icon: ShieldCheck, label: "Reliable Sourcing" },
  { icon: Globe2, label: "Global Source Research" },
  { icon: Target, label: "Part Number Driven Process" },
  { icon: FileCheck2, label: "Document & Conformity Sensitivity" },
  { icon: Users, label: "B2B Aviation Experience" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A reliable sourcing partner for civil aviation"
        description="We provide solutions for sourcing overseas spare parts, consumables, maintenance equipment and technical products for civil aviation."
      />

      <section className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={PHOTOS.team}
                  alt="Maintenance team inspecting an aircraft in a hangar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-secondary">
                Asian Havacılık provides solutions to companies operating in the civil
                aviation sector for sourcing overseas spare parts, consumables, maintenance
                equipment and technical products.
              </p>
              <p className="mt-5 text-base leading-relaxed text-secondary">
                Through our work with manufacturers, distributors and suppliers in
                different countries, we provide sourcing support based on price, delivery
                time and document requirements for the products our customers need.
              </p>
              <p className="mt-5 text-base leading-relaxed text-secondary">
                Our goal is to provide fast and sustainable sourcing services to companies
                in line with the quality, traceability and trust principles required by the
                aviation industry.
              </p>
              <div className="mt-8">
                <WaButton href={waLink(WA_MESSAGES_EN.general)}>Get in Touch via WhatsApp</WaButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {VALUES.map((value) => (
                <div
                  key={value.label}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-muted px-4 py-7 text-center"
                >
                  <value.icon className="h-6 w-6 text-accent" aria-hidden />
                  <span className="text-sm font-medium text-primary">{value.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
