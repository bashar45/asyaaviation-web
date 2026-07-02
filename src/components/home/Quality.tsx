import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { PHOTOS } from "@/lib/images";

export default function Quality() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:order-2">
              <Image
                src={PHOTOS.engine}
                alt="Jet motoru bakım detayı"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-xl bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4 text-accent" aria-hidden />
                <span className="text-sm font-semibold text-primary">İzlenebilirlik Odaklı Süreç</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:order-1">
            <Eyebrow>Kalite Yaklaşımı</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Kalite ve belge yaklaşımı
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Havacılık sektöründe tedarik süreçleri; ürün uygunluğu, izlenebilirlik, belge
              gereksinimleri ve teslimat hassasiyeti ile birlikte değerlendirilmelidir. Müşteri
              taleplerinde ürün adı, part number, marka, adet ve sertifika gereksinimlerini
              dikkate alarak uygun tedarik kaynakları üzerinden çalışma yürütülür.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
