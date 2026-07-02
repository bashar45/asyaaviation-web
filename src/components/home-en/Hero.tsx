import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import WaButton from "@/components/ui/WaButton";
import HeroJetVisual from "@/components/home/HeroJetVisual";
import { PHOTOS } from "@/lib/images";
import { WA_MESSAGES_EN, waLink } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src={PHOTOS.hero}
          alt="Aircraft maintenance hangar"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary" />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />
        <div
          className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-accent/25 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-accent-light/10 blur-[100px]"
          aria-hidden
        />
      </div>

      <HeroJetVisual />

      <Container className="relative py-28 sm:py-36 lg:py-44">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-light backdrop-blur-sm">
            Global Aviation Supply Network
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Asian Havacılık
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-4 max-w-2xl text-xl font-medium text-accent-light sm:text-2xl">
            Reliable Material Supply for Civil Aviation
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            Through our overseas supplier network, we provide solutions for civil aviation
            companies in sourcing spare parts, consumables, technical equipment and
            maintenance products.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <WaButton href={waLink(WA_MESSAGES_EN.general)} variant="light">
              Send a Request via WhatsApp
            </WaButton>
            <a
              href="#product-groups"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5"
            >
              Explore Product Groups
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.34}>
          <dl className="mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/45">Product Groups</dt>
              <dd className="mt-1 text-2xl font-semibold text-white">9+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/45">Target Markets</dt>
              <dd className="mt-1 text-2xl font-semibold text-white">4 Regions</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/45">Contact</dt>
              <dd className="mt-1 text-2xl font-semibold text-white">WhatsApp</dd>
            </div>
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
