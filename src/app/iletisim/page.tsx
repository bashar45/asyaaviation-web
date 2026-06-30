import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import WaButton from "@/components/ui/WaButton";
import { SITE, WA_MESSAGES, waLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Havacılık malzemesi ve yedek parça taleplerinizi WhatsApp üzerinden doğrudan Asian Havacılık'a iletin.",
};

const REQUEST_FIELDS = [
  "Ürün adı",
  "Part number",
  "Marka / üretici bilgisi",
  "Adet",
  "Teslimat beklentisi",
  "Sertifika / belge ihtiyacı",
  "Varsa teknik doküman veya görsel",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="WhatsApp üzerinden doğrudan iletişime geçin"
        description="Havacılık malzemesi, yedek parça, sarf malzeme veya teknik ekipman talepleriniz için Asian Havacılık ile WhatsApp üzerinden doğrudan iletişime geçebilirsiniz."
      />

      <section className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-2xl font-semibold text-primary">İletişim Bilgileri</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-primary">WhatsApp / Telefon</p>
                    <p className="text-sm text-muted-foreground">{SITE.phoneDisplay}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-primary">E-posta</p>
                    <p className="text-sm text-muted-foreground">
                      {SITE.email ?? "Netleşince eklenecek"}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-primary">Adres</p>
                    <p className="text-sm text-muted-foreground">
                      {SITE.address ?? "Netleşince eklenecek"}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-primary">Çalışma Saatleri</p>
                    <p className="text-sm text-muted-foreground">{SITE.hours}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <WaButton href={waLink(WA_MESSAGES.general)}>WhatsApp ile Talep Gönder</WaButton>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-muted p-7">
                <h2 className="text-lg font-semibold text-primary">
                  Talep gönderirken paylaşmanız süreci hızlandırır
                </h2>
                <ul className="mt-5 space-y-2.5">
                  {REQUEST_FIELDS.map((field) => (
                    <li key={field} className="flex items-start gap-2.5 text-sm text-secondary">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {field}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
