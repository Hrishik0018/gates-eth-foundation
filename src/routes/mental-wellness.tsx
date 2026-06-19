import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { Brain, Shield, Wind, Headphones, Users, MapPin, Building2, ArrowRight, Heart } from "lucide-react";
import forcesImg from "@/assets/healing-heroes.jpg";

export const Route = createFileRoute("/mental-wellness")({
  head: () => ({
    meta: [
      { title: "Healing The Heroes — Gates ETH Foundation" },
      { name: "description", content: "Healing The Heroes: counselling, resilience, family support and community outreach for India's armed forces, police, veterans and allied personnel." },
      { property: "og:title", content: "Healing The Heroes" },
      { property: "og:description", content: "For those who serve — and the families that stand with them." },
      { property: "og:image", content: forcesImg },
    ],
  }),
  component: Page,
});

const pillars = [
  { icon: Brain, title: "Mental Wellness Awareness", text: "Open conversations, posters, workshops — breaking stigma where uniforms once meant silence." },
  { icon: Shield, title: "Resilience Building", text: "Pre- and post-deployment readiness programs co-designed with psychologists and veterans." },
  { icon: Wind, title: "Stress Management", text: "Breathwork, sleep hygiene, peer protocols and tactical recovery practices for daily life." },
  { icon: Headphones, title: "Counselling Support", text: "Confidential one-on-one and group counselling, in-person and via tele-helpline (24×7)." },
  { icon: Users, title: "Family Support", text: "Spouse circles, caregiver coaching and child counselling — the family is the unit of healing." },
  { icon: MapPin, title: "Community Outreach", text: "Camps near cantonments, police lines and veteran colonies — meeting people where they are." },
  { icon: Building2, title: "Institutional Partnerships", text: "MoUs with regiments, police academies and ex-servicemen welfare bodies for systemic care." },
];

function Page() {
  return (
    <SiteLayout>
      <section className="relative pt-36 pb-16 gradient-hero">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/90">Healing The Heroes · Armed & Allied Forces</div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-medium text-white leading-[1.02]">
              Healing The <span className="text-gradient-warm italic">Heroes.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">A wellness ecosystem dedicated to the mental health of armed forces, police, veterans and allied personnel — and the families that stand with them.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-square rounded-3xl overflow-hidden ring-glow">
            <img src={forcesImg} alt="Counselling session with armed forces personnel" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-white border border-[var(--border)] p-6 shadow-elevated">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-[var(--teal-soft)]/40 text-[var(--teal)]"><p.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-xl font-semibold text-[var(--navy-deep)]">{p.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[var(--secondary)]/40">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--saffron-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--saffron)]">24×7 Helpline</div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-medium text-[var(--navy-deep)]">1800 200 3344</h2>
          <p className="mt-3 text-[var(--muted-foreground)]">Confidential. Free. Available in 8 Indian languages.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/volunteer" className="inline-flex items-center gap-2 rounded-full bg-[var(--saffron)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] shadow-elevated hover:scale-[1.03] transition-transform">Become a Volunteer <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-[var(--navy-deep)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[var(--navy)]"><Heart className="h-4 w-4 text-[var(--saffron)]" /> Support Programs</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
