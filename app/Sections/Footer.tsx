export default function Footer() {
  return (
    <footer className="bg-[var(--color-obsidian)] px-6 pb-12 pt-20 text-[var(--color-ivory)]">
      <div className="mx-auto flex w-full max-w-md flex-col items-center text-center">

        {/* Names */}
        <p className="font-sans text-[0.8rem] font-light uppercase tracking-[0.3em]">
          Sukhwant & Harjeet
        </p>

        {/* Divider */}
        <div className="my-7 h-px w-10 bg-[var(--color-champagne)]/40" />

        {/* Anniversary */}
        <p className="font-sans text-[0.65rem] uppercase tracking-[0.4em] text-[var(--color-champagne)]">
          25 Years
        </p>

        {/* Date */}
        <p className="mt-4 font-display text-[1.15rem] italic text-[var(--color-silver)]">
          21 October 2026
        </p>

        {/* Copyright / closing */}
        <p className="mt-14 font-sans text-[0.55rem] uppercase tracking-[0.3em] text-[var(--color-stone)]">
          With love
        </p>

      </div>
    </footer>
  );
}