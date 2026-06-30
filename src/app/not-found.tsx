import Link from "next/link";
import { PlaneTakeoff } from "lucide-react";
import Container from "@/components/ui/Container";
import WaButton from "@/components/ui/WaButton";
import { WA_MESSAGES, waLink } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-primary py-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <Container className="relative text-center">
        <PlaneTakeoff className="mx-auto h-12 w-12 text-accent-light" aria-hidden />
        <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">404</h1>
        <p className="mt-3 text-lg text-white/70">Aradığınız sayfa bulunamadı.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="cursor-pointer rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5"
          >
            Ana Sayfaya Dön
          </Link>
          <WaButton href={waLink(WA_MESSAGES.general)} variant="light">
            WhatsApp ile Talep Gönder
          </WaButton>
        </div>
      </Container>
    </section>
  );
}
