"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./Sections/Hero";
import Footer from "./Sections/Footer";
import SaveTheDate from "./Sections/SaveTheDate";
import Details from "./Sections/Details";
import Memories from "./Sections/Memories";
import BotanicalBackground from "./Sections/BotanicalBackground";
import Welcome from "./Sections/Welcome";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const main = useRef<HTMLElement>(null);
  const audio = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  /* =========================================================
     LENIS
  ========================================================= */

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      lerp: 0.075,
      smoothWheel: true,
      wheelMultiplier: 0.7,
      touchMultiplier: 1,
      anchors: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  /* =========================================================
     SECTION REVEALS
  ========================================================= */

  useGSAP(
    () => {
      const sections =
        gsap.utils.toArray<HTMLElement>(".home-section:not(:first-child)");

      sections.forEach((section) => {
        const content = section.querySelector(".section-content");

        if (!content) return;

        gsap.fromTo(
          content,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",

            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              once: true,
            },
          }
        );
      });
    },
    {
      scope: main,
    }
  );

  /* =========================================================
     MUSIC
  ========================================================= */

  const toggleMusic = () => {
    if (!audio.current) return;

    if (audio.current.paused) {
      audio.current.volume = 0;

      audio.current
        .play()
        .then(() => {
          setIsPlaying(true);

          gsap.to(audio.current, {
            volume: 0.18,
            duration: 1.8,
            ease: "power2.out",
          });
        })
        .catch(() => {});
    } else {
      gsap.to(audio.current, {
        volume: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          audio.current?.pause();
          setIsPlaying(false);
        },
      });
    }
  };

  return (
    <main
      ref={main}
      className="
        relative
        overflow-hidden
        bg-[var(--color-obsidian)]
      "
    >
      {/* =====================================================
          MUSIC
      ====================================================== */}

      <audio
        ref={audio}
        src="/music/cold-mess-instrumental.mp3"
        loop
        preload="auto"
      />

      {/* Music control */}
      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="
          fixed
          bottom-6
          left-6
          z-[100]
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          border
          border-[var(--color-champagne)]/30
          bg-[var(--color-obsidian)]/30
          text-[var(--color-champagne)]
          backdrop-blur-md
          transition-all
          duration-500
          hover:border-[var(--color-champagne)]/60
          hover:bg-[var(--color-obsidian)]/50
        "
      >
        {isPlaying ? (
          /* Sound on */
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="h-[15px] w-[15px]"
          >
            <path
              d="M11 5L6 9H3v6h3l5 4V5z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M15.5 8.5c1.8 1.8 1.8 5.2 0 7"
              strokeLinecap="round"
            />

            <path
              d="M18.5 6c3.2 3.2 3.2 8.8 0 12"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          /* Sound off */
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="h-[15px] w-[15px]"
          >
            <path
              d="M11 5L6 9H3v6h3l5 4V5z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M18 9l-5 6"
              strokeLinecap="round"
            />

            <path
              d="M13 9l5 6"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {/* =====================================================
          GLOBAL BOTANICAL BACKGROUND
      ====================================================== */}

      <BotanicalBackground />

      {/* =====================================================
          PAGE CONTENT
      ====================================================== */}

      <div className="relative z-30">

        {/* Hero */}
        <section className="home-section">
          <div className="section-content">
            <Hero />
          </div>
        </section>

        {/* Welcome */}
        <section className="home-section">
          <div className="section-content">
            <Welcome />
          </div>
        </section>

        {/* Save The Date */}
        <section className="home-section">
          <div className="section-content">
            <SaveTheDate />
          </div>
        </section>

        {/* Details */}
        <section className="home-section">
          <div className="section-content">
            <Details />
          </div>
        </section>

        {/* Memories */}
        <section className="home-section">
          <div className="section-content">
            <Memories />
          </div>
        </section>

        {/* Footer */}
        <section className="home-section">
          <div className="section-content">
            <Footer />
          </div>
        </section>

      </div>
    </main>
  );
}