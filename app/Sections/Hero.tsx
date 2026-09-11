"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Names
      tl.from(".hero-name", {
        y: 35,
        opacity: 0,
        filter: "blur(8px)",
        duration: 1.2,
        stagger: 0.12,
      })

        // Ampersand
        .from(
          ".hero-ampersand",
          {
            y: 15,
            opacity: 0,
            filter: "blur(5px)",
            duration: 0.8,
          },
          "-=0.75",
        )

        // Small breathing space
        .to({}, { duration: 0.35 })

        // "Celebrating"
        .from(".hero-celebrating", {
          y: 18,
          opacity: 0,
          filter: "blur(6px)",
          duration: 0.8,
        })

        // 25 — main visual moment
        .from(
          ".hero-number",
          {
            y: 25,
            opacity: 0,
            scale: 0.92,
            filter: "blur(10px)",
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.35",
        )

        // Years
        .from(
          ".hero-years",
          {
            y: 15,
            opacity: 0,
            filter: "blur(5px)",
            duration: 0.75,
          },
          "-=0.55",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-[100svh] overflow-hidden px-5 text-[var(--color-ivory)]"
    >
      <div className="mx-auto flex min-h-[100svh] w-full max-w-md items-center justify-center">
        <div className="flex w-full translate-y-[10vh] flex-col items-center text-center">

          {/* Names */}
          <div>
            <h1 className="hero-name font-sans text-[2.55rem] font-light uppercase leading-[0.95] tracking-[0.075em] sm:text-[3.1rem] sm:tracking-[0.1em]">
              Sukhwant Singh
            </h1>

            <div className="hero-ampersand my-2.5 font-sans text-[1.8rem] font-light leading-none sm:my-3 sm:text-[2.1rem]">
              &
            </div>

            <h1 className="hero-name font-sans text-[2.55rem] font-light uppercase leading-[0.95] tracking-[0.055em] sm:text-[3.1rem] sm:tracking-[0.085em]">
              Harjeet Kaur
            </h1>
          </div>

          {/* Anniversary */}
          <div className="mt-[6vh] font-sans">

            <span className="hero-celebrating block text-[0.6rem] font-normal uppercase tracking-[0.4em] sm:text-[0.7rem] sm:tracking-[0.42em]">
              Celebrating
            </span>

            <span className="hero-number mt-2 block text-[2.75rem] font-light leading-none tracking-[-0.035em] sm:mt-2.5 sm:text-[3.2rem]">
              25
            </span>

            <span className="hero-years mt-1.5 block text-[0.66rem] font-normal uppercase tracking-[0.4em] sm:mt-2 sm:text-[0.74rem] sm:tracking-[0.42em]">
              Years
            </span>

          </div>

        </div>
      </div>
    </section>
  );
}