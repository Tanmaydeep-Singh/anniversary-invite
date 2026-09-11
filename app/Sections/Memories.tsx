"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Memories() {
  const container = useRef<HTMLElement>(null);

  const memories = [
    {
      src: "/images/memory-1.jpg",
      alt: "A cherished memory",
      className: "col-span-2 aspect-[16/10]",
    },
    {
      src: "/images/memory-2.jpg",
      alt: "A cherished memory",
      className: "col-span-1 aspect-[4/5]",
    },
    {
      src: "/images/memory-3.jpg",
      alt: "A cherished memory",
      className: "col-span-1 mt-10 aspect-[4/5]",
    },
    {
      src: "/images/memory-4.jpg",
      alt: "A cherished memory",
      className: "col-span-2 aspect-[16/11]",
    },
    {
      src: "/images/memory-5.jpg",
      alt: "A cherished memory",
      className: "col-span-1 aspect-[3/4]",
    },
    {
      src: "/images/memory-6.jpg",
      alt: "A cherished memory",
      className: "col-span-1 mt-12 aspect-[3/4]",
    },
    {
      src: "/images/memory-7.jpg",
      alt: "A cherished memory",
      className: "col-span-2 aspect-[16/9]",
    },
  ];

  useGSAP(
    () => {
      // Header
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".memories-header",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      headerTl
        .from(".memories-label", {
          y: 20,
          opacity: 0,
          filter: "blur(6px)",
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".memories-heading",
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
          ".memories-intro",
          {
            y: 20,
            opacity: 0,
            filter: "blur(6px)",
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.5",
        );

      // Gallery
      gsap.from(".memory-item", {
        scrollTrigger: {
          trigger: ".memory-gallery",
          start: "top 78%",
          toggleActions: "play none none none",
        },
        y: 55,
        opacity: 0,
        scale: 0.97,
        filter: "blur(8px)",
        duration: 1.1,
        stagger: {
          each: 0.16,
          from: "start",
        },
        ease: "power3.out",
      });

      // Closing line
      const closingTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".memories-closing",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      closingTl
        .from(".memories-line", {
          scaleX: 0,
          transformOrigin: "center",
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".memories-closing-text",
          {
            y: 25,
            opacity: 0,
            filter: "blur(7px)",
            duration: 1,
            ease: "power3.out",
          },
          "-=0.3",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative overflow-hidden px-5 py-28 text-[var(--color-ivory)]"
    >
      <div className="mx-auto w-full max-w-md">

        {/* Header */}
        <header className="memories-header mb-16 text-center">
          <p className="memories-label font-sans text-[0.68rem] font-normal uppercase tracking-[0.45em] text-[var(--color-champagne)]">
            Our Journey
          </p>

          <h2 className="memories-heading mt-6 font-sans text-[3.25rem] font-light leading-none tracking-[-0.045em]">
            Memories
          </h2>

          <p className="memories-intro mx-auto mt-6 max-w-[19rem] font-display text-[1.25rem] italic leading-[1.35] text-[var(--color-silver)]">
            Twenty-five years of moments worth remembering.
          </p>
        </header>

        {/* Editorial Gallery */}
        <div className="memory-gallery grid grid-cols-2 gap-x-4 gap-y-5">
          {memories.map((memory, index) => (
            <figure
              key={memory.src}
              className={`memory-item group relative overflow-hidden rounded-[1.25rem] ${memory.className}`}
            >
              <img
                src={memory.src}
                alt={memory.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover:scale-[1.04]
                "
              />

              {/* Soft cinematic overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/[0.03]" />
            </figure>
          ))}
        </div>

        {/* Closing line */}
        <div className="memories-closing mt-20 text-center">
          <div className="memories-line mx-auto mb-8 h-px w-12 bg-[var(--color-champagne)]/40" />

          <p className="memories-closing-text font-display text-[1.35rem] italic leading-[1.35] text-[var(--color-ivory)]">
            And the best moments are still ahead.
          </p>
        </div>

      </div>
    </section>
  );
}