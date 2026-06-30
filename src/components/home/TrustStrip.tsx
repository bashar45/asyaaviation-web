import { Globe2, Target, FileCheck2, MessageSquareText } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const CARDS = [
  {
    icon: Globe2,
    title: "Global Tedarik Ağı",
    description: "Yurtdışı üretici, distribütör ve tedarikçilerden kaynak araştırması",
  },
  {
    icon: Target,
    title: "Part Number Odaklı Süreç",
    description: "Ürün talepleri parça numarası ve teknik bilgiye göre değerlendirilir",
  },
  {
    icon: FileCheck2,
    title: "Belge Hassasiyeti",
    description: "Sertifika, menşe ve uygunluk gereksinimleri talebe göre incelenir",
  },
  {
    icon: MessageSquareText,
    title: "WhatsApp ile Hızlı İletişim",
    description: "Talepler doğrudan firma sahibine iletilir",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-border bg-white py-20">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
              Talep Bazlı Havacılık Tedarik Çözümleri
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Part number, ürün açıklaması, adet ve belge gereksinimlerinizi WhatsApp
              üzerinden paylaşın; tedarik durumu, teslim süresi ve fiyat çalışması için
              sizinle iletişime geçelim.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <card.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold text-primary">{card.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
