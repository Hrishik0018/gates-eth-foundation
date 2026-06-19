import { motion } from "framer-motion";

const highlights = [
  {
    title: "Talent Showcase",
    description:
      "Dance, music, storytelling, theatre, poetry, yoga and martial arts performances.",
  },
  {
    title: "Art & Creativity Exhibition",
    description:
      "Paintings, sketches, handicrafts, photography, pottery and digital artwork.",
  },
  {
    title: "Shining Stars of Jugnu",
    description:
      "Celebrating inspiring journeys in education, sports, arts and independent living.",
  },
  {
    title: "Inclusive Sports",
    description:
      "Adapted games, sensory activities, fun races and team participation events.",
  },
  {
    title: "Parent Empowerment Forum",
    description:
      "Interactive sessions with educators, psychologists, therapists and experts.",
  },
  {
    title: "Government Resource Desk",
    description:
      "Guidance on UDID cards, disability certificates, scholarships and schemes.",
  },
  {
    title: "Jugnu Excellence Awards",
    description:
      "Recognizing children, parents, educators and inclusion champions.",
  },
];

export default function JugnuUtsav() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex rounded-full bg-[var(--saffron-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--saffron)]">
            Annual Celebration
          </div>

          <h2 className="mt-6 font-display text-5xl text-[var(--navy-deep)]">
            Jugnu Utsav
          </h2>

          <p className="mt-3 text-xl italic text-[var(--teal)]">
            Celebrating Abilities, Inspiring Inclusion
          </p>

          <p className="mt-6 text-[var(--muted-foreground)]">
            Jugnu Utsav is the annual flagship celebration of Project Jugnu,
            showcasing the talents, achievements, creativity and inspiring
            journeys of children with autism and special needs.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl bg-white border border-[var(--border)] p-8 shadow-elevated"
            >
              <h3 className="font-display text-xl text-[var(--navy-deep)]">
                {item.title}
              </h3>

              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-[var(--navy-deep)] p-10 text-center">
          <h3 className="font-display text-3xl text-white">
            Every Child Has A Light. Let It Shine.
          </h3>

          <p className="mt-4 text-white/70 max-w-3xl mx-auto">
            More than a festival, Jugnu Utsav is a movement celebrating
            courage, determination, creativity and hope.
          </p>
        </div>
      </div>
    </section>
  );
}