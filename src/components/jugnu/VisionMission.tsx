import { motion } from "framer-motion";
import { Eye, Target, Star } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "To create an inclusive society where every child, regardless of physical, intellectual or developmental challenges, has the opportunity to learn, grow, express themselves and achieve their fullest potential.",
  },
  {
    icon: Target,
    title: "Mission",
    description:
      "To empower children with autism and special needs through awareness initiatives, education, family support systems, talent development opportunities and community participation.",
  },
  {
    icon: Star,
    title: "Core Objectives",
    description:
      "Awareness • Inclusion • Education • Parent Support • Recognition • Community Engagement • Resource Accessibility",
  },
];

export default function VisionMission() {
  return (
    <section className="py-24 bg-[var(--secondary)]/40">
      <div className="mx-auto max-w-7xl px-4">

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--saffron-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--saffron)]">
            Our Foundation
          </div>

          <h2 className="mt-6 font-display text-4xl md:text-5xl text-[var(--navy-deep)]">
            Guided by purpose,
            <span className="italic text-[var(--teal)]">
              {" "}
              driven by inclusion
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-3xl bg-white border border-[var(--border)] p-8 shadow-elevated"
            >
              <div className="grid place-items-center h-14 w-14 rounded-2xl bg-[var(--saffron-soft)] text-[var(--saffron)]">
                <card.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-6 font-display text-2xl text-[var(--navy-deep)]">
                {card.title}
              </h3>

              <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}