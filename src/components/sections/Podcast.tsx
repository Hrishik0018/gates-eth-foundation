import { motion } from "framer-motion";
import { Play, Headphones, Mic, ArrowUpRight, Clock } from "lucide-react";

const episodes = [
  {
    ep: "01",
    title: "The Vision Behind Gates ETH Foundation",
    guest: "Anshum Anand",
    role: "Founder, Gates ETH Foundation",
    duration: "38 min",
    tag: "Featured",
  },
  {
    ep: "02",
    title: "Project Jugnu: Every Child Shines In Their Own Light",
    guest: "Anshum Anand",
    role: "Founder, Gates ETH Foundation",
    duration: "34 min",
  },
  {
    ep: "03",
    title: "Building Stronger Communities Through Inclusion",
    guest: "Anshum Anand",
    role: "Founder, Gates ETH Foundation",
    duration: "41 min",
  },
  {
    ep: "04",
    title: "Women, Youth & Community Transformation",
    guest: "Anshum Anand",
    role: "Founder, Gates ETH Foundation",
    duration: "32 min",
  },
];
export function Podcast() {
  const featured = episodes[0];
  return (
    <section id="podcast" className="relative py-24 lg:py-32 bg-[var(--navy-deep)] text-white overflow-hidden">
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[var(--teal)]/25 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-[var(--saffron)]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90">
              <Mic className="h-3 w-3 text-[var(--saffron)]" /> Voices of Change
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05]">
              Conversations that <span className="italic text-gradient-warm">inspire impact.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-white/70 leading-relaxed">
              A podcast series featuring educators, mental health professionals, social workers, community leaders, volunteers and inspiring changemakers.
            </p>
          </div>
          <div className="flex gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-[var(--saffron)] px-5 py-3 text-sm font-semibold text-[var(--navy-deep)] shadow-elevated hover:scale-[1.03] transition-transform">
              <Headphones className="h-4 w-4" /> Listen Now
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full glass-dark px-5 py-3 text-sm font-medium text-white hover:bg-white/15">
              <Play className="h-4 w-4 text-[var(--saffron)]" /> Watch Episode
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--teal)]/30 to-[var(--saffron)]/20 p-8 md:p-10 border border-white/10"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--saffron)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--navy-deep)]">
              <Mic className="h-3 w-3" /> Featured Guest · Episode {featured.ep}
            </div>
            <h3 className="mt-5 font-display text-3xl md:text-4xl font-medium leading-tight">{featured.title}</h3>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[var(--teal)] to-[var(--saffron)] grid place-items-center font-display text-xl font-bold">
                {featured.guest.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <div>
                <div className="font-display text-lg font-semibold">{featured.guest}</div>
                <div className="text-xs text-white/70">{featured.role}</div>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-white text-[var(--navy-deep)] px-5 py-3 text-sm font-semibold hover:scale-[1.03] transition-transform">
                <Play className="h-4 w-4 fill-current" /> Watch Episode
              </button>
              <button className="inline-flex items-center gap-2 rounded-full glass-dark px-5 py-3 text-sm font-medium text-white hover:bg-white/15">
                <Headphones className="h-4 w-4 text-[var(--saffron)]" /> Listen Now
              </button>
              <span className="inline-flex items-center gap-1.5 text-xs text-white/60"><Clock className="h-3.5 w-3.5" /> {featured.duration}</span>
            </div>
          </motion.div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">Latest Episodes</div>
            <div className="space-y-3">
              {episodes.slice(1).map((e, i) => (
                <motion.a
                  key={e.ep}
                  href="#"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group flex items-center gap-4 rounded-2xl glass-dark p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-[var(--saffron)]/20 text-[var(--saffron)] group-hover:bg-[var(--saffron)] group-hover:text-[var(--navy-deep)] transition-colors">
                    <Play className="h-4 w-4 fill-current" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50">
                      Ep {e.ep} · <Clock className="h-3 w-3" /> {e.duration}
                    </div>
                    <div className="mt-0.5 font-display text-base font-semibold truncate">{e.title}</div>
                    <div className="text-xs text-white/60 truncate">{e.guest} — {e.role}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
