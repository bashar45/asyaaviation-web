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
import { PRODUCT_GROUPS_EN, WA_MESSAGES_EN, waLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Product Groups",
  description:
    "Request-based aviation sourcing support across aircraft spare parts, consumables, maintenance equipment and technical product groups.",
  alternates: { canonical: "/en/product-groups" },
};

const ICONS = [Cog, Beaker, Wrench, Truck, Zap, Armchair, Bolt, Droplets, ShieldCheck];

export default function ProductGroupsPageEn() {
  return (
    <>
      <PageHero
        eyebrow="Product Groups"
        title="Product groups we provide request-based sourcing support for"
        description="Asian Havacılık offers request-based sourcing solutions for the spare parts, consumables, maintenance equipment, technical products and support equipment that the civil aviation industry needs."
      />

      <section className="bg-background py-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_GROUPS_EN.map((group, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <Reveal key={group.slug} delay={(i % 3) * 0.07}>
                  <a
                    href={waLink(WA_MESSAGES_EN.productGroup(group.name))}
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
                      Send a request via WhatsApp →
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
