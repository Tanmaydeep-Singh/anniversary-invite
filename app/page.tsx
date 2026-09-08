"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import Hero from "./Sections/Hero";
import Footer from "./Sections/Footer";
import SaveTheDate from "./Sections/SaveTheDate";
import Details from "./Sections/Details";
import Memories from "./Sections/Memories";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      lerp: 0.075,
      smoothWheel: true,
      wheelMultiplier: 0.7,
      touchMultiplier: 1,
      anchors: true,
    });

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="overflow-hidden bg-[var(--color-obsidian)]">
      <Hero />
      <SaveTheDate />
      <Details />
      <Memories />
      <Footer />
    </main>
  );
}