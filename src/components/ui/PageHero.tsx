import { ReactNode } from "react";
import Container from "./Container";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-primary py-20 sm:py-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-light">
            {eyebrow}
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
