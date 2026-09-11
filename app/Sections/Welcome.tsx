"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Welcome() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".welcome-line", {
        scaleX: 0,
        transformOrigin: "center",
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".welcome-statement",
          {
            y: 35,
            opacity: 0,
            filter: "blur(8px)",
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .from(
          ".welcome-copy",
          {
            y: 25,
            opacity: 0,
            filter: "blur(6px)",
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.45",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative flex min-h-[75svh] items-center overflow-hidden px-6 py-28 text-[var(--color-ivory)]"
    >
      <div className="mx-auto w-full max-w-md text-center">

        {/* Decorative line */}
        <div className="welcome-line mx-auto mb-12 h-px w-10 bg-[var(--color-champagne)]/45" />

        {/* Statement */}
        <div className="welcome-statement font-display text-[1.75rem] font-light italic leading-[1.35] tracking-[-0.015em] sm:text-[2rem]">
          <p>A quarter of a century.</p>

          <p className="mt-2">
            A thousand little moments.
          </p>

          <p className="mt-2">
            One beautiful journey.
          </p>
        </div>

        {/* Supporting message */}
        <p className="welcome-copy mx-auto mt-10 max-w-[20rem] font-sans text-[0.78rem] font-normal leading-[1.9] tracking-[0.02em] text-[var(--color-silver)] sm:text-[0.82rem]">
          Twenty-five years together is a milestone worth pausing for —
          and celebrating with the family and friends who have made the
          journey all the more special.
        </p>

      </div>
    </section>
  );
}