import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import WaButton from "@/components/ui/WaButton";
import { SITE, WA_MESSAGES_EN, waLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send your aviation material and spare parts requests directly to Asian Havacılık via WhatsApp.",
  alternates: { canonical: "/en/contact" },
};

const REQUEST_FIELDS = [
  "Product name",
  "Part number",
  "Brand / manufacturer information",
  "Quantity",
  "Delivery expectation",
  "Certificate / document requirement",
  "Technical document or image, if any",
];

export default function ContactPageEn() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch directly via WhatsApp"
        description="For your aviation material, spare parts, consumables or technical equipment requests, you can contact Asian Havacılık directly via WhatsApp."
      />

      <section className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-2xl font-semibold text-primary">Contact Information</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-primary">WhatsApp / Phone</p>
                    <p className="text-sm text-muted-foreground">{SITE.phoneDisplay}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-primary">Email</p>
                    <p className="text-sm text-muted-foreground">
                      {SITE.email ?? "To be added"}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-primary">Address</p>
                    <p className="text-sm text-muted-foreground">
                      {SITE.address ?? "To be added"}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-primary">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Monday – Friday / 09:00 – 18:00</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <WaButton href={waLink(WA_MESSAGES_EN.general)}>Send a Request via WhatsApp</WaButton>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-muted p-7">
                <h2 className="text-lg font-semibold text-primary">
                  Sharing the following speeds up the process
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
