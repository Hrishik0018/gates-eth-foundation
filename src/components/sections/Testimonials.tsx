import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  { quote: "Gates ETH gave me a sewing machine, training and dignity. Today I employ 12 women from my village.", name: "Kavita Devi", role: "Entrepreneur · Bihar" },
  { quote: "After 18 years in service, the foundation's counsellors helped me find peace and purpose again.", name: "Capt. R. Menon (Retd.)", role: "Indian Army" },
  { quote: "The digital skill program landed me my first internship. Now I mentor others from my city.", name: "Aarav Singh", role: "Software Trainee · Jaipur" },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--teal-soft)]/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--teal)]">
            Voices of impact
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium text-[var(--navy-deep)] leading-tight">
            Stories that <span className="italic text-[var(--teal)]">move</span> us forward.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative rounded-3xl bg-gradient-to-br from-white to-[var(--secondary)]/50 p-7 shadow-elevated"
            >
              <Quote className="h-8 w-8 text-[var(--saffron)] opacity-80" />
              <blockquote className="mt-4 font-display text-lg leading-snug text-[var(--navy-deep)]">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--teal)] to-[var(--saffron)]" />
                <div>
                  <div className="text-sm font-semibold text-[var(--navy-deep)]">{t.name}</div>
                  <div className="text-xs text-[var(--muted-foreground)]">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}