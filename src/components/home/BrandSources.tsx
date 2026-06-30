import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import WaButton from "@/components/ui/WaButton";
import { BRAND_DISCLAIMER, BRAND_SOURCES, WA_MESSAGES, waLink } from "@/lib/constants";

export default function BrandSources() {
  return (
    <section className="relative overflow-hidden bg-primary py-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />
      <Container className="relative">
        <Reveal>
          <Eyebrow>Global Marka ve Ürün Kaynakları</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
            Global havacılık üreticileri için kaynak araştırması
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
            Talep bazlı tedarik süreçlerinde, global havacılık üreticileri ve distribütörleri
            tarafından sağlanan ürün grupları için kaynak araştırması yapılmaktadır.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {BRAND_SOURCES.map((brand) => (
              <div
                key={brand.name}
                className="group flex h-24 items-center justify-center rounded-xl border border-white/10 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-light/40 hover:shadow-lg"
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

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-col items-start gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-xs leading-relaxed text-white/45">{BRAND_DISCLAIMER}</p>
            <WaButton href={waLink(WA_MESSAGES.brand)} variant="light">
              Marka / Part Number Gönder
            </WaButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
