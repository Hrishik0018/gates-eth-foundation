const testimonials = [
  {
    type: "Parent",
    quote:
      "Project Jugnu helped us feel understood, supported and connected to a community that truly cares.",
  },
  {
    type: "Educator",
    quote:
      "An inspiring initiative that promotes dignity, opportunity and meaningful inclusion.",
  },
  {
    type: "Volunteer",
    quote:
      "One of the most rewarding experiences. Every interaction reminds us that inclusion matters.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[var(--secondary)]/40">
      <div className="mx-auto max-w-7xl px-4">

        <div className="text-center">
          <h2 className="font-display text-4xl md:text-5xl text-[var(--navy-deep)]">
            Stories Of Hope &
            <span className="italic text-[var(--teal)]">
              {" "}Inclusion
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.type}
              className="rounded-3xl bg-white border border-[var(--border)] p-8 shadow-elevated"
            >
              <span className="text-sm font-semibold text-[var(--saffron)]">
                {item.type}
              </span>

              <p className="mt-4 italic text-[var(--muted-foreground)] leading-relaxed">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}