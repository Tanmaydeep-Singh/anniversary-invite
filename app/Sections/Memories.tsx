export default function Memories() {
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

  return (
    <section className="relative overflow-hidden bg-[var(--color-obsidian)] px-5 py-28 text-[var(--color-ivory)]">
      <div className="mx-auto w-full max-w-md">

        {/* Header */}
        <header className="mb-16 text-center">
          <p className="font-sans text-[0.68rem] font-normal uppercase tracking-[0.45em] text-[var(--color-champagne)]">
            Our Journey
          </p>

          <h2 className="mt-6 font-sans text-[3.25rem] font-light leading-none tracking-[-0.045em]">
            Memories
          </h2>

          <p className="mx-auto mt-6 max-w-[19rem] font-display text-[1.25rem] italic leading-[1.35] text-[var(--color-silver)]">
            Twenty-five years of moments worth remembering.
          </p>
        </header>

        {/* Editorial Gallery */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-5">

          {memories.map((memory, index) => (
            <figure
              key={memory.src}
              className={`group relative overflow-hidden rounded-[1.25rem] ${memory.className}`}
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
        <div className="mt-20 text-center">
          <div className="mx-auto mb-8 h-px w-12 bg-[var(--color-champagne)]/40" />

          <p className="font-display text-[1.35rem] italic leading-[1.35] text-[var(--color-ivory)]">
            And the best moments are still ahead.
          </p>
        </div>

      </div>
    </section>
  );
}