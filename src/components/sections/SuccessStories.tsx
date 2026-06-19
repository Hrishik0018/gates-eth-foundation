import { motion } from "framer-motion";
import { Quote, Sparkles, Heart, GraduationCap, Users } from "lucide-react";

const stories = [
  { icon: Sparkles, tag: "Project Jugnu", name: "Aarav, age 9", role: "Shining star", quote: "Aarav painted his first exhibited canvas this year. His parents say he now greets the world with confidence.", accent: "var(--saffron)" },
  { icon: Heart, tag: "Women Empowerment", name: "Kavita Devi", role: "Entrepreneur · Bihar", quote: "From a single sewing machine to a workshop employing 12 women — Gates ETH gave me skill and dignity.", accent: "var(--teal)" },
  { icon: GraduationCap, tag: "Youth Development", name: "Aarav Singh", role: "Software trainee · Jaipur", quote: "The digital skill program landed me my first internship. Now I mentor others from my city.", accent: "var(--navy)" },
  { icon: Users, tag: "Volunteer", name: "Meera Iyer", role: "Volunteer · 3 years", quote: "Volunteering with Jugnu taught me that inclusion is a daily practice — small, patient, transformative.", accent: "var(--saffron)" },
];

export function SuccessStories() {
  return (
    <section className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--saffron-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--saffron)]">
            Stories of Change
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium text-[var(--navy-deep)] leading-tight">
            Real lives. <span className="italic text-[var(--teal)]">Real change.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((s, i) => (
            <motion.figure
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="relative rounded-3xl bg-gradient-to-br from-white to-[var(--secondary)]/50 p-6 shadow-elevated flex flex-col"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest" style={{ background: `color-mix(in oklab, ${s.accent} 15%, transparent)`, color: s.accent }}>
                  <s.icon className="h-3 w-3" /> {s.tag}
                </div>
                <Quote className="h-6 w-6 text-[var(--saffron)] opacity-70" />
              </div>
              <blockquote className="mt-4 font-display text-base leading-snug text-[var(--navy-deep)] flex-1">"{s.quote}"</blockquote>
              <figcaption className="mt-5 border-t border-[var(--border)] pt-3">
                <div className="text-sm font-semibold text-[var(--navy-deep)]">{s.name}</div>
                <div className="text-xs text-[var(--muted-foreground)]">{s.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
