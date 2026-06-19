const board = [
  "Healthcare Experts",
  "Autism Specialists",
  "Special Educators",
  "Therapists",
  "Government Advisors",
  "Parent Advisory Council",
  "Youth Inclusion Council",
  "CSR & Corporate Leaders",
];

export default function AdvisoryBoard() {
  return (
    <section className="py-24 bg-[var(--secondary)]/40">
      <div className="mx-auto max-w-7xl px-4">

        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex rounded-full bg-[var(--saffron-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--saffron)]">
            Advisory Board
          </div>

          <h2 className="mt-6 font-display text-4xl md:text-5xl text-[var(--navy-deep)]">
            Guided By Experts,
            <span className="italic text-[var(--teal)]">
              {" "}Driven By Impact
            </span>
          </h2>

          <p className="mt-6 text-[var(--muted-foreground)]">
            Project Jugnu is building a multidisciplinary advisory board that
            will provide strategic direction, professional expertise and
            long-term guidance.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {board.map((item) => (
            <div
              key={item}
              className="rounded-3xl bg-white border border-[var(--border)] p-8 shadow-elevated text-center"
            >
              <h3 className="font-display text-lg text-[var(--navy-deep)]">
                {item}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[var(--muted-foreground)] italic">
            Board positions are currently being constituted.
          </p>
        </div>
      </div>
    </section>
  );
}