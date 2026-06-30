import type { Metadata } from "next";
import {
  Cog,
  Beaker,
  Wrench,
  Truck,
  Zap,
  Armchair,
  Bolt,
  Droplets,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import { PRODUCT_GROUPS, WA_MESSAGES, waLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ürün Grupları",
  description:
    "Aircraft spare parts, sarf malzeme, bakım ekipmanı ve teknik ürün gruplarında talep bazlı havacılık tedarik desteği.",
};

const ICONS = [Cog, Beaker, Wrench, Truck, Zap, Armchair, Bolt, Droplets, ShieldCheck];

export default function ProductGroupsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ürün Grupları"
        title="Talep bazlı tedarik desteği sunduğumuz ürün grupları"
        description="Asian Havacılık, sivil havacılık sektörünün ihtiyaç duyduğu yedek parça, sarf malzeme, bakım ekipmanı, teknik ürün ve destek ekipmanları için talep bazlı tedarik çözümleri sunar."
      />

      <section className="bg-background py-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_GROUPS.map((group, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <Reveal key={group.slug} delay={(i % 3) * 0.07}>
                  <a
                    href={waLink(WA_MESSAGES.productGroup(group.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full cursor-pointer flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-primary/5"
                  >
                    <div className="flex items-start justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white transition-colors duration-300 group-hover:bg-accent">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <ArrowUpRight
                        className="h-5 w-5 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        aria-hidden
                      />
                    </div>
                    <h2 className="mt-5 text-lg font-semibold text-primary">{group.name}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {group.description}
                    </p>
                    <span className="mt-5 text-sm font-semibold text-accent">
                      WhatsApp&apos;tan talep gönder →
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
