"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Details() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".details-label", {
        y: 20,
        opacity: 0,
        filter: "blur(6px)",
        duration: 0.8,
        ease: "power3.out",
      })

        .from(
          ".details-heading",
          {
            y: 30,
            opacity: 0,
            filter: "blur(8px)",
            duration: 1,
            ease: "power3.out",
          },
          "-=0.45",
        )

        .from(
          ".detail-item",
          {
            y: 35,
            opacity: 0,
            filter: "blur(7px)",
            duration: 0.9,
            stagger: 0.18,
            ease: "power3.out",
          },
          "-=0.35",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-[100svh] overflow-hidden px-6 py-24 text-[var(--color-ivory)]"
    >
      <div className="mx-auto flex min-h-[calc(100svh-12rem)] w-full max-w-md flex-col items-center text-center">

        {/* Section label */}
        <p className="details-label font-sans text-[0.7rem] font-normal uppercase tracking-[0.42em] text-[var(--color-champagne)]">
          The Celebration
        </p>

        {/* Heading */}
        <h2 className="details-heading mt-7 font-sans text-[3.4rem] font-light leading-none tracking-[-0.04em] sm:text-[4rem]">
          Details
        </h2>

        {/* Details */}
        <div className="mt-20 w-full">

          {/* Date */}
          <div className="detail-item border-t border-[var(--color-champagne)]/30 py-8">
            <p className="font-sans text-[0.68rem] uppercase tracking-[0.4em] text-[var(--color-champagne)]">
              Date
            </p>

            <p className="mt-4 font-sans text-[1.55rem] font-light tracking-[-0.02em]">
              Wednesday
            </p>

            <p className="mt-1 font-sans text-[1.55rem] font-light tracking-[-0.02em]">
              21 October 2026
            </p>
          </div>

          {/* Time */}
          <div className="detail-item border-t border-[var(--color-champagne)]/30 py-8">
            <p className="font-sans text-[0.68rem] uppercase tracking-[0.4em] text-[var(--color-champagne)]">
              Time
            </p>

            <p className="mt-4 font-sans text-[1.8rem] font-light tracking-[0.02em]">
              5:00 PM
            </p>
          </div>

          {/* Location */}
          <div className="detail-item border-y border-[var(--color-champagne)]/30 py-8">
            <p className="font-sans text-[0.68rem] uppercase tracking-[0.4em] text-[var(--color-champagne)]">
              Location
            </p>

            <p className="mt-4 font-sans text-[1.5rem] font-light tracking-[-0.02em]">
              Your Venue
            </p>

            <p className="mt-2 font-display text-[1.15rem] italic text-[var(--color-silver)]">
              Your City
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}