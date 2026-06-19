import { motion } from "framer-motion";

const cards = [
  {
    title: "What is Autism?",
    content:
      "Autism Spectrum Disorder (ASD) is a developmental condition that affects communication, social interaction, behaviour and sensory processing. Every autistic child is unique and may experience strengths and challenges differently.",
  },
  {
    title: "Early Signs",
    content:
      "Limited eye contact, delayed speech, repetitive behaviours, sensory sensitivities, difficulties in social interaction and strong preference for routines may be early indicators.",
  },
  {
    title: "Myths vs Facts",
    content:
      "Myth: Autistic children cannot learn. Fact: With appropriate support and opportunities, autistic children can thrive, learn and achieve remarkable success.",
  },
  {
    title: "Strengths & Abilities",
    content:
      "Many autistic individuals demonstrate creativity, honesty, strong memory, deep focus, attention to detail and unique problem-solving abilities.",
  },
  {
    title: "Importance of Early Intervention",
    content:
      "Early support can significantly improve communication, social skills, learning outcomes and overall independence.",
  },
];

export default function AutismEducation() {
  return (
    <section className="py-24 bg-[var(--secondary)]/40">
      <div className="mx-auto max-w-7xl px-4">

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--saffron-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--saffron)]">
            Understanding Autism
          </div>

          <h2 className="mt-6 font-display text-4xl md:text-5xl text-[var(--navy-deep)]">
            Knowledge creates
            <span className="italic text-[var(--teal)]">
              {" "}understanding
            </span>
          </h2>

          <p className="mt-6 text-[var(--muted-foreground)]">
            Autism is not a limitation. It is a different way of experiencing
            and interacting with the world.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              className="rounded-3xl bg-white border border-[var(--border)] p-8 shadow-elevated"
            >
              <h3 className="font-display text-xl text-[var(--navy-deep)]">
                {card.title}
              </h3>

              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[var(--navy-deep)] p-8 md:p-12 text-center">
          <h3 className="font-display text-3xl text-white">
            Every Child Develops Differently
          </h3>

          <p className="mt-4 max-w-3xl mx-auto text-white/75">
            Autism is a spectrum. No two autistic children are exactly alike.
            Understanding and acceptance help children build confidence and
            reach their full potential.
          </p>
        </div>
      </div>
    </section>
  );
}