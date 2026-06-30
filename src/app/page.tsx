import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import ProductGroups from "@/components/home/ProductGroups";
import BrandSources from "@/components/home/BrandSources";
import Markets from "@/components/home/Markets";
import SupplyProcess from "@/components/home/SupplyProcess";
import Quality from "@/components/home/Quality";
import ClosingCta from "@/components/home/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProductGroups />
      <BrandSources />
      <Markets />
      <SupplyProcess />
      <Quality />
      <ClosingCta />
    </>
  );
}
