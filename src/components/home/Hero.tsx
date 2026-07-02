import Image from "next/image";
import { ArrowRight, Layers, Globe2, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import WaButton from "@/components/ui/WaButton";
import HeroJetVisual from "@/components/home/HeroJetVisual";
import { PHOTOS } from "@/lib/images";
import { WA_MESSAGES, waLink } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src={PHOTOS.hero}
          alt="Uçak bakım hangarı"
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
            Global Havacılık Tedarik Ağı
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Asian Havacılık
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-4 max-w-2xl text-xl font-medium text-accent-light sm:text-2xl">
            Sivil Havacılık İçin Güvenilir Malzeme Tedariki
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            Yurtdışı tedarikçi ağımız üzerinden havacılık yedek parça, sarf malzeme, teknik
            ekipman ve bakım ürünlerinin temini konusunda sivil havacılık firmalarına çözüm
            sunuyoruz.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <WaButton href={waLink(WA_MESSAGES.general)} variant="light">
              WhatsApp ile Talep Gönder
            </WaButton>
            <a
              href="#urun-gruplari"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5"
            >
              Ürün Gruplarını İncele
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.34}>
          <dl className="mt-16 flex flex-wrap gap-3">
            {[
              { icon: Layers, value: "9+", label: "Ürün Grubu" },
              { icon: Globe2, value: "4 Bölge", label: "Hedef Pazar" },
              { icon: MessageCircle, value: "WhatsApp", label: "İletişim" },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 backdrop-blur-sm"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-light">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <dd className="text-base font-semibold text-white">{value}</dd>
                  <dt className="text-xs text-white/45">{label}</dt>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
