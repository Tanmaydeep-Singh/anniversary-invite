export default function Details() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--color-obsidian)] px-6 py-24 text-[var(--color-ivory)]">
      <div className="mx-auto flex min-h-[calc(100svh-12rem)] w-full max-w-md flex-col items-center text-center">

        {/* Section label */}
        <p className="font-sans text-[0.7rem] font-normal uppercase tracking-[0.42em] text-[var(--color-champagne)]">
          The Celebration
        </p>

        {/* Heading */}
        <h2 className="mt-7 font-sans text-[3.4rem] font-light leading-none tracking-[-0.04em] sm:text-[4rem]">
          Details
        </h2>

        {/* Details */}
        <div className="mt-20 w-full">

          {/* Date */}
          <div className="border-t border-[var(--color-champagne)]/30 py-8">
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
          <div className="border-t border-[var(--color-champagne)]/30 py-8">
            <p className="font-sans text-[0.68rem] uppercase tracking-[0.4em] text-[var(--color-champagne)]">
              Time
            </p>

            <p className="mt-4 font-sans text-[1.8rem] font-light tracking-[0.02em]">
              5:00 PM
            </p>
          </div>

          {/* Location */}
          <div className="border-y border-[var(--color-champagne)]/30 py-8">
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