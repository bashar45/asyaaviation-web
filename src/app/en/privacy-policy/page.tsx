import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Asian Havacılık privacy policy and data protection notice.",
  alternates: { canonical: "/en/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPageEn() {
  return (
    <section className="bg-white py-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-semibold text-primary">Privacy Policy</h1>
            <p className="mt-4 text-sm text-muted-foreground">
              This page is the data protection notice prepared in accordance with
              Turkey&apos;s Law on the Protection of Personal Data No. 6698 (KVKK).
            </p>

            <div className="mt-10 space-y-8 text-sm leading-relaxed text-secondary">
              <div>
                <h2 className="text-base font-semibold text-primary">1. Data Controller</h2>
                <p className="mt-2">The data controller of this website is {SITE.name}.</p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-primary">2. Data Collected</h2>
                <p className="mt-2">
                  No data is collected through a form or automatically on the site. If you
                  submit a sourcing request via WhatsApp, the name, phone number and request
                  content (product, part number, quantity, etc.) you share will be visible
                  to us.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-primary">3. Purpose of Processing</h2>
                <p className="mt-2">
                  The information shared is processed solely for the purpose of evaluating
                  your sourcing request and communicating with you.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-primary">
                  4. Retention Period and Sharing
                </h2>
                <p className="mt-2">
                  Your data is retained for as long as necessary to evaluate your request
                  and is not shared with third parties except where legally required.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-primary">5. Your Rights under KVKK</h2>
                <p className="mt-2">
                  Under Article 11 of KVKK, you have the right to learn whether your data is
                  processed, request information about it, learn the purpose of processing,
                  and request correction or deletion.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-primary">6. Contact</h2>
                <p className="mt-2">
                  For requests related to KVKK: {SITE.phoneDisplay}
                  {SITE.email ? ` or ${SITE.email}` : " (email will be added once finalized)"}.
                </p>
              </div>

              <p className="border-t border-border pt-6 text-xs text-muted-foreground">
                Note: If the site starts using cookies or analytics tools in the future, a
                separate &quot;Cookie Policy&quot; section will be added to this page.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
