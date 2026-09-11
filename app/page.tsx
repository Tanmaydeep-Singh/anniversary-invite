"use client";

import { useEffect, useRef } from "react";
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

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const main = useRef<HTMLElement>(null);

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

  useGSAP(
    () => {
      const sections =
        gsap.utils.toArray<HTMLElement>(".home-section");

      sections.forEach((section) => {
        const content =
          section.querySelector(".section-content");

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

  return (
    <main
      ref={main}
      className="
        relative
        overflow-hidden
        bg-[var(--color-obsidian)]
      "
    >
      {/* Global botanical layer */}
      <BotanicalBackground />

      {/* Page content */}
      <div className="relative z-30">
        <section className="home-section">
          <div className="section-content">
            <Hero />
          </div>
        </section>

        <section className="home-section">
          <div className="section-content">
            <SaveTheDate />
          </div>
        </section>

        <section className="home-section">
          <div className="section-content">
            <Details />
          </div>
        </section>

        <section className="home-section">
          <div className="section-content">
            <Memories />
          </div>
        </section>

        <section className="home-section">
          <div className="section-content">
            <Footer />
          </div>
        </section>
      </div>
    </main>
  );
}