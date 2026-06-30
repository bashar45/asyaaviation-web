import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import WaButton from "@/components/ui/WaButton";
import { PHOTOS } from "@/lib/images";
import { WA_MESSAGES_EN, waLink } from "@/lib/constants";

export default function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-primary py-24">
      <div className="absolute inset-0">
        <Image
          src={PHOTOS.runway}
          alt="Aircraft on the runway"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Have an Aviation Material Request?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            Share the product or part information you need, along with the part number and
            quantity, via WhatsApp. Our team will get back to you with sourcing status,
            delivery time and document requirements.
          </p>
          <div className="mt-8 flex justify-center">
            <WaButton href={waLink(WA_MESSAGES_EN.general)} variant="light">
              Send a Request via WhatsApp
            </WaButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
