import { Globe2, Target, FileCheck2, MessageSquareText } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const CARDS = [
  {
    icon: Globe2,
    title: "Global Supply Network",
    description: "Source research from overseas manufacturers, distributors and suppliers",
  },
  {
    icon: Target,
    title: "Part Number Driven Process",
    description: "Requests are evaluated based on part number and technical information",
  },
  {
    icon: FileCheck2,
    title: "Document Sensitivity",
    description: "Certificate, origin and conformity requirements are reviewed per request",
  },
  {
    icon: MessageSquareText,
    title: "Fast Communication via WhatsApp",
    description: "Requests are forwarded directly to the company owner",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-border bg-white py-20">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
              Request-Based Aviation Supply Solutions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Share your part number, product description, quantity and document
              requirements via WhatsApp; we&apos;ll get back to you with sourcing status,
              delivery time and pricing.
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
