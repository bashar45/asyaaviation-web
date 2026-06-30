import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import WaButton from "@/components/ui/WaButton";
import { SUPPLY_STEPS, WA_MESSAGES, waLink } from "@/lib/constants";

export default function SupplyProcess() {
  return (
    <section className="bg-muted py-24">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Tedarik Süreci</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Tedarik süreci nasıl ilerler?
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div
            className="absolute left-6 top-2 h-[calc(100%-1rem)] w-px bg-border"
            aria-hidden
          />
          <ol className="space-y-8">
            {SUPPLY_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <li className="relative flex gap-5">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-base font-semibold text-white shadow-md">
                    {i + 1}
                  </span>
                  <div className="flex-1 rounded-2xl border border-border bg-white p-5 shadow-sm">
                    <h3 className="text-base font-semibold text-primary">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex justify-center">
            <WaButton href={waLink(WA_MESSAGES.general)}>Part Number ile Talep Gönder</WaButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
