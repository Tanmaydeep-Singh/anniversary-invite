export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--color-obsidian)] px-5 text-[var(--color-ivory)]">
      <div className="mx-auto flex min-h-[100svh] w-full max-w-md flex-col items-center text-center">

        {/* Names */}
        <div className="pt-[12svh] sm:pt-[15vh]">
          <h1 className="font-sans text-[3.15rem] font-light uppercase leading-[0.9] tracking-[0.13em] sm:text-[3.8rem] sm:tracking-[0.16em]">
            Sukhwant
          </h1>

          <div className="my-2.5 font-sans text-[2.5rem] font-light leading-none sm:my-3 sm:text-[3rem]">
            &
          </div>

          <h1 className="font-sans text-[3.15rem] font-light uppercase leading-[0.9] tracking-[0.08em] sm:text-[3.8rem] sm:tracking-[0.12em]">
            Harjeet
          </h1>
        </div>

        {/* Anniversary */}
        <div className="mt-11 font-sans sm:mt-14">
          <span className="block text-[0.7rem] font-normal uppercase tracking-[0.35em] sm:text-[0.85rem] sm:tracking-[0.4em]">
            Celebrating
          </span>

          <span className="mt-2 block text-[3rem] font-light leading-none tracking-[0.06em] sm:mt-3 sm:text-[3.5rem]">
            25
          </span>

          <span className="mt-1.5 block text-[0.75rem] font-normal uppercase tracking-[0.35em] sm:text-[0.9rem] sm:tracking-[0.4em]">
            Years
          </span>
        </div>

        {/* Invitation */}
        <p className="mt-11 max-w-[20rem] px-2 font-display text-[1.3rem] font-medium italic leading-[1.28] sm:mt-14 sm:max-w-[23rem] sm:text-[1.55rem]">
          Request the honour of your presence as we celebrate twenty-five years
          of love, memories, and togetherness.
        </p>

        {/* Date */}
        <div className="mt-12 flex flex-col items-center font-sans sm:mt-16">

          <span className="text-[0.72rem] font-normal uppercase tracking-[0.3em] sm:text-[0.9rem] sm:tracking-[0.35em]">
            Wednesday
          </span>

          <span className="mt-5 text-[1.55rem] font-normal tracking-[-0.02em] sm:mt-7 sm:text-[1.9rem]">
            21 October 2026
          </span>

        </div>

      </div>
    </section>
  );
}