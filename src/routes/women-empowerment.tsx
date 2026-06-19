import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { Wrench, Coins, Rocket, Crown, Briefcase, Quote, ArrowRight, Heart } from "lucide-react";
import womenImg from "@/assets/she-rises.jpg";

export const Route = createFileRoute("/women-empowerment")({
  head: () => ({
    meta: [
      { title: "She Rises — Gates ETH Foundation" },
      { name: "description", content: "She Rises: skill, livelihood, leadership and entrepreneurship programs empowering women across Uttar Pradesh and North India." },
      { property: "og:title", content: "She Rises — Women Empowerment" },
      { property: "og:description", content: "Dignity, skill and leadership for India's women." },
      { property: "og:image", content: womenImg },
    ],
  }),
  component: Page,
});

const pillars = [
  { icon: Wrench, title: "Skill Development", text: "Tailoring, beauty, food processing, computers and applied trades that turn ability into income." },
  { icon: Coins, title: "Financial Literacy", text: "Banking, savings, credit, insurance and digital payments — practical, in the local language." },
  { icon: Rocket, title: "Entrepreneurship", text: "Idea-to-enterprise mentorship, business basics, market linkages and small-grant pathways." },
  { icon: Crown, title: "Leadership Training", text: "Public speaking, governance, panchayat readiness and women-led collective building." },
  { icon: Briefcase, title: "Livelihood Support", text: "Equipment grants, workplace placement and self-help group strengthening for sustained earnings." },
];

const stories = [
  { name: "Kavita Devi", place: "Bihar", quote: "From a single sewing machine to a workshop employing 12 women — Gates ETH gave me skill and dignity." },
  { name: "Razia Begum", place: "Telangana", quote: "Financial literacy classes taught me to save, borrow safely and finally open my own bank account." },
  { name: "Sunita Pawar", place: "Maharashtra", quote: "I now lead my SHG of 18 women. We supply tiffins to three offices in our town." },
];

function Page() {
  return (
    <SiteLayout>
      <section className="relative pt-36 pb-16 gradient-hero">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/90">She Rises · Women Empowerment</div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-medium text-white leading-[1.02]">
              She <span className="text-gradient-warm italic">Rises.</span> A village rises with her.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">Born in India — skill, livelihood, leadership and financial agency, built with North Indian women, not for them.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-square rounded-3xl overflow-hidden ring-glow">
            <img src={womenImg} alt="North Indian women in a She Rises skill workshop" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-white border border-[var(--border)] p-6 shadow-elevated">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-[var(--saffron-soft)] text-[var(--saffron)]"><p.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-xl font-semibold text-[var(--navy-deep)]">{p.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[var(--secondary)]/40">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--navy-deep)]">Success Stories</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {stories.map((s) => (
              <figure key={s.name} className="rounded-3xl bg-white p-6 shadow-elevated">
                <Quote className="h-6 w-6 text-[var(--saffron)]" />
                <blockquote className="mt-3 font-display text-base text-[var(--navy-deep)]">"{s.quote}"</blockquote>
                <figcaption className="mt-4 border-t border-[var(--border)] pt-3 text-sm">
                  <div className="font-semibold text-[var(--navy-deep)]">{s.name}</div>
                  <div className="text-xs text-[var(--muted-foreground)]">{s.place}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--navy-deep)]">Stand with India's women.</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/volunteer" className="inline-flex items-center gap-2 rounded-full bg-[var(--saffron)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] shadow-elevated hover:scale-[1.03] transition-transform">Volunteer <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-[var(--navy-deep)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[var(--navy)]"><Heart className="h-4 w-4 text-[var(--saffron)]" /> Donate</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
