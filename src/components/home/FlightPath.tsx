"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FlightPath() {
  return (
    <div
      className="pointer-events-none absolute right-[4%] top-0 hidden h-full w-[34%] lg:block"
      aria-hidden
    >
      <svg
        viewBox="0 0 420 720"
        fill="none"
        className="h-full w-full overflow-visible"
        preserveAspectRatio="xMaxYMid meet"
      >
        <defs>
          <linearGradient id="flight-line" x1="40" y1="620" x2="340" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#7dd3fc" stopOpacity="1" />
          </linearGradient>
          <filter id="flight-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Faint static guide line */}
        <path
          d="M 30 650 C 90 560, 140 480, 190 420 C 250 350, 290 260, 330 120"
          stroke="white"
          strokeOpacity="0.06"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Animated drawn flight path */}
        <motion.path
          d="M 30 650 C 90 560, 140 480, 190 420 C 250 350, 290 260, 330 120"
          stroke="url(#flight-line)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 10"
          filter="url(#flight-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.6, ease: EASE }}
        />

        {/* Airplane glyph riding the path tip */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5, x: -10, y: 10 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 2.3, ease: EASE }}
          style={{ transformOrigin: "330px 120px" }}
        >
          <g transform="translate(330 120) rotate(-12) scale(1.7) translate(-12 -12)">
            <path
              d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8l-8.2-1.8c-.5-.1-1 .1-1.3.5l-.5.6c-.6.6-.5 1.6.2 2l4.9 2.8L4 16l-2.5-.5c-.3-.1-.6 0-.8.3l-.3.4c-.4.4-.4.8.2 1.2l3.4 2.8 2.8 3.4c.4.6.8.6 1.2.2l.4-.3c.3-.2.4-.5.3-.8L8 21l3.6-4.5 2.8 4.9c.4.7 1.4.8 2 .2l.6-.5c.4-.3.6-.8.5-1.3z"
              fill="#eaf7ff"
              stroke="#38bdf8"
              strokeWidth="0.6"
              strokeLinejoin="round"
              filter="url(#flight-glow)"
            />
          </g>
        </motion.g>
      </svg>
    </div>
  );
}
