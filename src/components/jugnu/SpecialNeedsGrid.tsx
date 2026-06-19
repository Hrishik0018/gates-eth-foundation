import { motion } from "framer-motion";

const conditions = [
  {
    title: "Autism Spectrum Disorder",
    definition:
      "A developmental condition affecting communication, behaviour, sensory processing and social interaction.",
    characteristics:
      "Sensory sensitivities, communication differences, repetitive behaviours, strong interests.",
    support:
      "Speech therapy, occupational therapy, behavioural support, inclusive education.",
  },
  {
    title: "ADHD",
    definition:
      "A neurodevelopmental condition affecting attention, impulse control and activity levels.",
    characteristics:
      "Difficulty focusing, impulsivity, hyperactivity.",
    support:
      "Structured learning environments, behavioural support and skill-building strategies.",
  },
  {
    title: "Down Syndrome",
    definition:
      "A genetic condition caused by an extra chromosome 21.",
    characteristics:
      "Developmental delays, learning differences and unique physical characteristics.",
    support:
      "Early intervention, inclusive education and health support.",
  },
  {
    title: "Cerebral Palsy",
    definition:
      "A neurological condition affecting movement and muscle coordination.",
    characteristics:
      "Motor difficulties, posture challenges and mobility limitations.",
    support:
      "Physiotherapy, assistive devices and accessibility support.",
  },
  {
    title: "Intellectual Disabilities",
    definition:
      "Conditions affecting learning, reasoning and adaptive functioning.",
    characteristics:
      "Learning challenges, slower developmental pace.",
    support:
      "Individualized education and life skills training.",
  },
  {
    title: "Speech & Language Disorders",
    definition:
      "Conditions affecting communication and language development.",
    characteristics:
      "Speech delays, articulation difficulties and language challenges.",
    support:
      "Speech therapy and communication-focused interventions.",
  },
];

export default function SpecialNeedsGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">

        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex rounded-full bg-[var(--saffron-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--saffron)]">
            Special Needs Overview
          </div>

          <h2 className="mt-6 font-display text-4xl md:text-5xl text-[var(--navy-deep)]">
            Understanding Different
            <span className="italic text-[var(--teal)]">
              {" "}Support Needs
            </span>
          </h2>

          <p className="mt-6 text-[var(--muted-foreground)]">
            Every child is unique. Understanding different developmental,
            intellectual and physical conditions helps create inclusive
            opportunities and meaningful support.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {conditions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-elevated"
            >
              <h3 className="font-display text-2xl text-[var(--navy-deep)]">
                {item.title}
              </h3>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-[var(--navy-deep)]">
                    Definition
                  </h4>
                  <p className="mt-1 text-[var(--muted-foreground)]">
                    {item.definition}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--navy-deep)]">
                    Key Characteristics
                  </h4>
                  <p className="mt-1 text-[var(--muted-foreground)]">
                    {item.characteristics}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--navy-deep)]">
                    Support Requirements
                  </h4>
                  <p className="mt-1 text-[var(--muted-foreground)]">
                    {item.support}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}