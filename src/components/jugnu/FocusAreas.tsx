import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  GraduationCap,
  Users,
  Landmark,
  HandHeart,
} from "lucide-react";

const areas = [
  {
    icon: Brain,
    title: "Autism Awareness",
    description:
      "Promoting understanding, acceptance and awareness about Autism Spectrum Disorder through community engagement and education.",
  },
  {
    icon: Heart,
    title: "Parent Support",
    description:
      "Guidance, resources, counselling support and peer networks for parents and caregivers.",
  },
  {
    icon: GraduationCap,
    title: "Education & Skill Development",
    description:
      "Supporting learning, confidence building, communication skills and future independence.",
  },
  {
    icon: Landmark,
    title: "Government Scheme Awareness",
    description:
      "Helping families access benefits, entitlements and support systems available to them.",
  },
  {
    icon: Users,
    title: "Community Inclusion",
    description:
      "Creating opportunities for participation, acceptance and belonging in society.",
  },
  {
    icon: HandHeart,
    title: "Volunteer Engagement",
    description:
      "Mobilizing volunteers to create meaningful impact and inclusive experiences.",
  },
];

export default function FocusAreas() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--saffron-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--saffron)]">
            Focus Areas
          </div>

          <h2 className="mt-6 font-display text-4xl md:text-5xl text-[var(--navy-deep)]">
            Building an ecosystem of
            <span className="italic text-[var(--teal)]">
              {" "}support and inclusion
            </span>
          </h2>

          <p className="mt-6 text-[var(--muted-foreground)]">
            Project Jugnu works across awareness, education, family support,
            inclusion and resource accessibility to empower children with autism
            and special needs.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-elevated hover:border-[var(--saffron)]/30 transition-all"
            >
              <div className="grid place-items-center h-14 w-14 rounded-2xl bg-[var(--saffron-soft)] text-[var(--saffron)]">
                <area.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-6 font-display text-xl text-[var(--navy-deep)]">
                {area.title}
              </h3>

              <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}