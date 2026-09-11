export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden px-5 text-[var(--color-ivory)]">
      <div className="mx-auto flex min-h-[100svh] w-full max-w-md items-center justify-center">
        <div className="flex w-full translate-y-[10vh] flex-col items-center text-center">
          {/* Names */}
          <div>
            <h1 className="font-sans text-[2.55rem] font-light uppercase leading-[0.95] tracking-[0.075em] sm:text-[3.1rem] sm:tracking-[0.1em]">
              Sukhwant Singh
            </h1>

            <div className="my-2.5 font-sans text-[1.8rem] font-light leading-none sm:my-3 sm:text-[2.1rem]">
              &
            </div>

            <h1 className="font-sans text-[2.55rem] font-light uppercase leading-[0.95] tracking-[0.055em] sm:text-[3.1rem] sm:tracking-[0.085em]">
              Harjeet Kaur
            </h1>
          </div>

          {/* Anniversary */}
          <div className="mt-[6vh] font-sans">
            <span className="block text-[0.6rem] font-normal uppercase tracking-[0.4em] sm:text-[0.7rem] sm:tracking-[0.42em]">
              Celebrating
            </span>

            <span className="mt-2 block text-[2.75rem] font-light leading-none tracking-[-0.035em] sm:mt-2.5 sm:text-[3.2rem]">
              25
            </span>

            <span className="mt-1.5 block text-[0.66rem] font-normal uppercase tracking-[0.4em] sm:mt-2 sm:text-[0.74rem] sm:tracking-[0.42em]">
              Years
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}