import { motion } from "framer-motion";

const events = [
  { year: "2011", title: "Foundation Established", desc: "Gates ETH Foundation Born in India with a vision to empower communities across India." },
  { year: "2011", title: "Project Bhaavini", desc: "Our first dedicated women's empowerment initiative — vocational, leadership and dignity programs at the grassroots." },
  { year: "2015", title: "Women Empowerment Expansion", desc: "Scaled livelihood, financial literacy and entrepreneurship programs across multiple states." },
  { year: "2017", title: "Police & Wellness Programs", desc: "Launched mental wellness and resilience programs for police personnel and allied forces." },
  { year: "2019", title: "Community Development", desc: "Deepened grassroots presence with nutrition, hygiene and education drives across rural India." },
  { year: "2021", title: "Awards & Recognition", desc: "Honoured by national and state bodies for transformative impact in inclusion and wellness." },
  { year: "2024", title: "Foundation Revival & Expansion", desc: "Renewed leadership, expanded volunteer base and the launch of Project Jugnu — our flagship inclusion initiative." },
];

export function Timeline() {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--secondary)]/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--saffron-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--saffron)]">
            Our Legacy
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium text-[var(--navy-deep)] leading-tight">
            Legacy of <span className="italic text-[var(--saffron)]">Service</span> Since 2011.
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)]">A journey carved by conviction, compassion and community.</p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--teal)]/40 to-transparent md:-translate-x-1/2" />
          <div className="space-y-12">
            {events.map((e, i) => (
              <motion.div
                key={e.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="inline-flex items-center gap-2 font-display text-3xl md:text-4xl font-semibold text-[var(--teal)]">
                    {e.year}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-semibold text-[var(--navy-deep)]">{e.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed max-w-md md:inline-block">{e.desc}</p>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-4 md:left-1/2 top-2 md:-translate-x-1/2 h-4 w-4 rounded-full bg-[var(--saffron)] ring-4 ring-[var(--secondary)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
