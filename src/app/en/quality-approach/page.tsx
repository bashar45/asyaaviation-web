import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import WaButton from "@/components/ui/WaButton";
import { WA_MESSAGES_EN, waLink } from "@/lib/constants";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Quality Approach",
  description:
    "Our quality approach for aviation sourcing: part number verification, documentation and traceability sensitivity.",
  alternates: { canonical: "/en/quality-approach" },
};

export default function QualityPageEn() {
  return (
    <>
      <PageHero
        eyebrow="Quality Approach"
        title="Quality and documentation approach"
        description="Sourcing processes in the aviation industry must be evaluated together with product conformity, traceability, document requirements and delivery sensitivity."
      />

      <section className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={PHOTOS.engine}
                  alt="Jet engine maintenance detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-secondary">
                Asian Havacılık evaluates customer requests through suitable sourcing
                channels, taking into account product name, part number, brand, quantity
                and certificate requirements.
              </p>
              <p className="mt-5 text-base leading-relaxed text-secondary">
                Manufacturer certificates, conformity certificates, certificates of origin
                or related technical documents may be evaluated according to supplier
                sources for the requested products.
              </p>
              <p className="mt-5 text-base leading-relaxed text-secondary">
                Open communication is maintained with the customer at every stage of the
                sourcing process; the order process is not initiated until product
                conformity and document status are confirmed.
              </p>

              <div className="mt-8">
                <WaButton href={waLink(WA_MESSAGES_EN.quality)}>
                  Ask a Documentation / Quality Question
                </WaButton>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
