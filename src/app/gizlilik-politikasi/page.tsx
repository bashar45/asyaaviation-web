import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Asian Havacılık KVKK aydınlatma metni ve gizlilik politikası.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-semibold text-primary">Gizlilik Politikası</h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Bu sayfa, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında
              hazırlanmış aydınlatma metnidir.
            </p>

            <div className="mt-10 space-y-8 text-sm leading-relaxed text-secondary">
              <div>
                <h2 className="text-base font-semibold text-primary">1. Veri Sorumlusu</h2>
                <p className="mt-2">
                  Bu internet sitesinin veri sorumlusu {SITE.name}&apos;dır.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-primary">2. Toplanan Veri Türleri</h2>
                <p className="mt-2">
                  Site üzerinden form veya otomatik veri toplama yapılmamaktadır. WhatsApp
                  üzerinden tedarik talebi iletmeniz halinde paylaştığınız ad, telefon
                  numarası ve talep içeriği (ürün, part number, adet vb. bilgiler) tarafımızca
                  görüntülenir.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-primary">3. Verilerin İşlenme Amacı</h2>
                <p className="mt-2">
                  Paylaşılan bilgiler yalnızca tedarik talebinizin değerlendirilmesi ve sizinle
                  iletişim kurulması amacıyla işlenir.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-primary">
                  4. Saklama Süresi ve Paylaşım
                </h2>
                <p className="mt-2">
                  Verileriniz, talebinizin değerlendirilmesi için gerekli süre boyunca
                  saklanır ve yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-primary">5. KVKK Kapsamındaki Haklarınız</h2>
                <p className="mt-2">
                  KVKK madde 11 kapsamında; verilerinizin işlenip işlenmediğini öğrenme,
                  işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme,
                  düzeltilmesini veya silinmesini isteme haklarına sahipsiniz.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-primary">6. İletişim</h2>
                <p className="mt-2">
                  KVKK kapsamındaki başvurularınız için: {SITE.phoneDisplay}
                  {SITE.email ? ` veya ${SITE.email}` : " (e-posta bilgisi netleşince eklenecektir)"}.
                </p>
              </div>

              <p className="border-t border-border pt-6 text-xs text-muted-foreground">
                Not: Site ileride çerez (cookie) veya analitik araç kullanmaya başlarsa, bu
                sayfaya ayrı bir &quot;Çerez Politikası&quot; bölümü eklenecektir.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
