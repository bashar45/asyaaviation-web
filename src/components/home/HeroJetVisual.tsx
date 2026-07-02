"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PHOTOS } from "@/lib/images";

export default function HeroJetVisual() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 32%, black 78%, transparent 100%), linear-gradient(to bottom, black 55%, transparent 96%)",
        WebkitMaskComposite: "source-in",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 32%, black 78%, transparent 100%), linear-gradient(to bottom, black 55%, transparent 96%)",
        maskComposite: "intersect",
      }}
      aria-hidden
    >
      <Image
        src={PHOTOS.heroJet}
        alt=""
        fill
        priority
        className="object-cover object-[70%_35%]"
        sizes="(max-width: 1024px) 0px, 58vw"
      />
      <div className="absolute inset-0 bg-primary/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-primary/10" />
    </motion.div>
  );
}
