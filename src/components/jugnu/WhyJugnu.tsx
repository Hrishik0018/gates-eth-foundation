import { motion } from "framer-motion";
import { Heart, Users, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Recognition",
    description:
      "Every child deserves to be seen for their abilities, talents and potential rather than being defined by limitations.",
  },
  {
    icon: Users,
    title: "Inclusion",
    description:
      "Children with autism and special needs deserve equal opportunities to participate, learn, grow and belong.",
  },
  {
    icon: Heart,
    title: "Empowerment",
    description:
      "Families need support, guidance, resources and hope to confidently navigate their journey.",
  },
];

export default function WhyJugnu() {
  return (
    <section
      id="about-jugnu"
      className="py-24 bg-[var(--background)]"
    >
      <div className="mx-auto max-w-7xl px-4">

        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--saffron-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--saffron)]">
            Why Project Jugnu Exists
          </div>

          <h2 className="mt-6 font-display text-4xl md:text-5xl font-medium text-[var(--navy-deep)]">
            Creating a world where every child
            <span className="italic text-[var(--teal)]">
              {" "}
              is valued and included
            </span>
          </h2>

          <p className="mt-6 text-lg text-[var(--muted-foreground)]">
            Project Jugnu was created to shift the narrative from disability to
            ability, from barriers to opportunities, and from exclusion to
            inclusion.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-3xl bg-white border border-[var(--border)] p-8 shadow-elevated hover:-translate-y-1 transition-all"
            >
              <div className="grid place-items-center h-14 w-14 rounded-2xl bg-[var(--saffron-soft)] text-[var(--saffron)]">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-6 font-display text-2xl text-[var(--navy-deep)]">
                {item.title}
              </h3>

              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}