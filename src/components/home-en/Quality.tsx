import Image from "next/image";
import { ShieldCheck, XCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { QUALITY_AVOID_EN } from "@/lib/constants";
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
                alt="Jet engine maintenance detail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-xl bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4 text-accent" aria-hidden />
                <span className="text-sm font-semibold text-primary">Traceability-Focused Process</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:order-1">
            <Eyebrow>Quality Approach</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Quality and documentation approach
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Sourcing processes in the aviation industry must be evaluated together with
              product conformity, traceability, document requirements and delivery
              sensitivity. Customer requests are evaluated with product name, part number,
              brand, quantity and certificate requirements through suitable sourcing
              channels.
            </p>

            <div className="mt-7 rounded-2xl border border-border bg-muted p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Phrases we avoid
              </p>
              <ul className="mt-3 space-y-2">
                {QUALITY_AVOID_EN.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-secondary">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                These statements are only used when genuinely backed by documentation and
                legal grounds.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
