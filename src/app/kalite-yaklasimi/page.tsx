import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import WaButton from "@/components/ui/WaButton";
import { WA_MESSAGES, waLink } from "@/lib/constants";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Kalite Yaklaşımı",
  description:
    "Havacılık tedarikinde part number doğrulama, belge ve izlenebilirlik hassasiyetiyle yürütülen kalite yaklaşımımız.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Kalite Yaklaşımı"
        title="Kalite ve belge yaklaşımı"
        description="Havacılık sektöründe tedarik süreçleri; ürün uygunluğu, izlenebilirlik, belge gereksinimleri ve teslimat hassasiyeti ile birlikte değerlendirilmelidir."
      />

      <section className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={PHOTOS.engine}
                  alt="Jet motoru bakım detayı"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-secondary">
                Asian Havacılık, müşteri taleplerinde ürün adı, part number, marka, adet ve
                sertifika gereksinimlerini dikkate alarak uygun tedarik kaynakları üzerinden
                çalışma yürütür.
              </p>
              <p className="mt-5 text-base leading-relaxed text-secondary">
                Talep edilen ürünlerde üretici sertifikası, uygunluk belgesi, menşe belgesi
                veya ilgili teknik dokümanlar tedarikçi kaynaklarına göre değerlendirilebilir.
              </p>
              <p className="mt-5 text-base leading-relaxed text-secondary">
                Tedarik sürecinin her aşamasında müşteriyle açık iletişim kurulur; ürün
                uygunluğu ve belge durumu netleşmeden sipariş süreci başlatılmaz.
              </p>

              <div className="mt-8">
                <WaButton href={waLink(WA_MESSAGES.quality)}>
                  WhatsApp ile Belge ve Kalite Sorusu Sor
                </WaButton>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
