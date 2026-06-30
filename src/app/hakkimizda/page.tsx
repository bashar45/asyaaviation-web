import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Globe2, Target, FileCheck2, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import WaButton from "@/components/ui/WaButton";
import { PHOTOS } from "@/lib/images";
import { WA_MESSAGES, waLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Asian Havacılık, sivil havacılık firmalarına yurtdışı kaynaklı yedek parça ve teknik ürün tedarikinde güvenilir B2B çözüm ortağıdır.",
};

const VALUES = [
  { icon: ShieldCheck, label: "Güvenilir Tedarik" },
  { icon: Globe2, label: "Global Kaynak Araştırması" },
  { icon: Target, label: "Part Number Odaklı Süreç" },
  { icon: FileCheck2, label: "Belge ve Uygunluk Hassasiyeti" },
  { icon: Users, label: "B2B Havacılık Deneyimi" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Sivil havacılık için güvenilir tedarik ortağı"
        description="Yurtdışı kaynaklı havacılık yedek parça, sarf malzeme, bakım ekipmanı ve teknik ürünlerin temini konusunda çözüm sunuyoruz."
      />

      <section className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={PHOTOS.team}
                  alt="Bakım ekibi hangar içinde uçak inceliyor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-secondary">
                Asian Havacılık, sivil havacılık sektöründe faaliyet gösteren firmalara
                yurtdışı kaynaklı havacılık yedek parça, sarf malzeme, bakım ekipmanı ve
                teknik ürünlerin temini konusunda çözüm sunar.
              </p>
              <p className="mt-5 text-base leading-relaxed text-secondary">
                Farklı ülkelerdeki üretici, distribütör ve tedarikçilerle yürütülen
                çalışmalar sayesinde müşterilerin ihtiyaç duyduğu ürünler için fiyat,
                teslim süresi ve belge gereksinimleri doğrultusunda tedarik desteği
                sağlanır.
              </p>
              <p className="mt-5 text-base leading-relaxed text-secondary">
                Amacımız; havacılık sektörünün gerektirdiği kalite, izlenebilirlik ve
                güven prensiplerine uygun şekilde firmalara hızlı ve sürdürülebilir
                tedarik hizmeti sunmaktır.
              </p>
              <div className="mt-8">
                <WaButton href={waLink(WA_MESSAGES.general)}>WhatsApp ile İletişime Geç</WaButton>
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
