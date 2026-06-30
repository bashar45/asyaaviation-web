import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import WaButton from "@/components/ui/WaButton";
import { BRAND_DISCLAIMER, BRAND_SOURCES, WA_MESSAGES, waLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Global Marka ve Ürün Kaynakları",
  description:
    "Airbus, Boeing, Safran ve global havacılık üreticilerine ait ürün grupları için part number bazlı kaynak araştırması ve tedarik desteği.",
};

export default function BrandSourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Marka ve Ürün Kaynakları"
        title="Global üretici ve distribütör kaynaklarından tedarik araştırması"
        description="Asian Havacılık, havacılık sektöründe kullanılan global marka ürün grupları için üretici, distribütör ve yurtdışı tedarikçi kaynakları üzerinden talep bazlı araştırma ve tedarik desteği sağlar."
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
                Müşterilerimizin ürün adı, part number, marka, adet, teslimat beklentisi ve
                belge gereksinimlerine göre ilgili ürün grupları için kaynak araştırması
                yapılabilir.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-10 flex flex-col items-start gap-6 rounded-2xl border border-border bg-muted p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
                {BRAND_DISCLAIMER}
              </p>
              <WaButton href={waLink(WA_MESSAGES.brand)}>Marka / Part Number Gönder</WaButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
