"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const PETALS = [
  "petal-01.png",
  "petal-02.png",
  "petal-03.png",
  "petal-04.png",
  "petal-05.png",
  "petal-06.png",
  "petal-07.png",
  "petal-08.png",
  "petal-09.png",
  "petal-10.png",
  "petal-11.png",
  "petal-12.png",
];

const random = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export default function BotanicalBackground() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const petals =
        gsap.utils.toArray<HTMLImageElement>(".falling-petal");

      petals.forEach((petal) => {
        const fall = (initial = false) => {
          const width = window.innerWidth;
          const height = window.innerHeight;

          /*
           * Horizontal starting position
           */
          const startX = random(-5, 100);

          /*
           * On first load distribute petals
           * throughout the viewport.
           *
           * After that, start above the viewport.
           */
          const startY = initial
            ? random(-10, 100)
            : -15;

          /*
           * Horizontal movement while falling
           */
          const drift = random(-120, 120);

          /*
           * Rotation
           */
          const startRotation = random(-180, 180);
          const rotationAmount = random(120, 420);

          /*
           * Size
           */
          const scale = random(0.45, 1);

          /*
           * Transparency
           */
          const opacity = random(0.45, 0.8);

          /*
           * Falling speed
           */
          const duration = random(16, 28);

          gsap.set(petal, {
            left: `${startX}%`,
            x: 0,
            y: initial
              ? (startY / 100) * height
              : -150,
            rotation: startRotation,
            scale,
            opacity,
          });

          gsap.to(petal, {
            x: drift,
            y: height + 150,
            rotation: startRotation + rotationAmount,

            duration: initial
              ? random(10, 22)
              : duration,

            ease: "none",

            onComplete: () => {
              fall(false);
            },
          });
        };

        /*
         * Every petal begins at a different
         * location on first render.
         */
        fall(true);
      });
    },
    {
      scope: container,
    }
  );

  return (
    <div
      ref={container}
      className="
        pointer-events-none
        fixed
        inset-0
        z-20
        overflow-hidden
      "
      aria-hidden="true"
    >
      {/* Lotus */}
<img
  src="/images/lotus/lotus.png"
  alt=""
  className="
    absolute
    right-[1rem]
    top-[7vh]
    w-[12rem]
    opacity-90
    sm:right-[2rem]
    sm:top-[8vh]
    sm:w-[15rem]
    rotate-30
  "
/>

      {/* Petals */}
      {PETALS.map((petal) => (
        <img
          key={petal}
          src={`/images/lotus/${petal}`}
          alt=""
          className="
            falling-petal
            absolute
            left-0
            top-0
            w-[3.5rem]
            max-w-none
            will-change-transform
          "
        />
      ))}
    </div>
  );
}