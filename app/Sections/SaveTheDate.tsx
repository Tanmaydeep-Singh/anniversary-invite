"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const TARGET_DATE = new Date("2026-10-21T00:00:00").getTime();

function getTimeLeft(): TimeLeft {
  const difference = Math.max(TARGET_DATE - Date.now(), 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function CountdownBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="countdown-box flex aspect-square w-[8.5rem] flex-col items-center justify-center rounded-[1.5rem] border border-[var(--color-champagne)]/35 sm:w-[9.5rem]">
      <span className="font-sans text-[2.5rem] font-light leading-none tracking-[-0.04em] text-[var(--color-ivory)] sm:text-[3rem]">
        {String(value).padStart(2, "0")}
      </span>

      <span className="mt-3 font-sans text-[0.6rem] font-normal uppercase tracking-[0.28em] text-[var(--color-champagne)] sm:text-[0.7rem]">
        {label}
      </span>
    </div>
  );
}

export default function SaveTheDate() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".save-label", {
        y: 20,
        opacity: 0,
        filter: "blur(6px)",
        duration: 0.8,
        ease: "power3.out",
      })

        .from(
          ".save-heading",
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
          ".countdown-box",
          {
            y: 35,
            opacity: 0,
            scale: 0.96,
            filter: "blur(8px)",
            duration: 0.5,
            stagger: 0.12,
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
      className="relative min-h-[100svh] overflow-hidden px-5 py-24 text-[var(--color-ivory)]"
    >
      <div className="mx-auto flex min-h-[calc(100svh-12rem)] w-full max-w-md flex-col items-center">

        {/* Section label */}
        <p className="save-label font-sans text-[0.68rem] font-normal uppercase tracking-[0.42em] text-[var(--color-champagne)]">
          Save the Date
        </p>

        {/* Heading */}
        <h2 className="save-heading mt-8 text-center font-sans text-[2.7rem] font-light leading-[1] tracking-[-0.035em] sm:text-[3.5rem]">
          Counting the Days
        </h2>

        {/* Countdown */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-5">
          <CountdownBox
            value={timeLeft.days}
            label="Days"
          />

          <CountdownBox
            value={timeLeft.hours}
            label="Hours"
          />

          <CountdownBox
            value={timeLeft.minutes}
            label="Minutes"
          />

          <CountdownBox
            value={timeLeft.seconds}
            label="Seconds"
          />
        </div>

      </div>
    </section>
  );
}