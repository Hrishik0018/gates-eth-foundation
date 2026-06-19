import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { Heart, Sparkles, Star, Users, GraduationCap, Brain, QrCode, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Gates ETH Foundation" },
      { name: "description", content: "Support inclusion, women, youth and armed-forces wellness. 100% tax exempt under 80G." },
      { property: "og:title", content: "Donate · Gates ETH Foundation" },
      { property: "og:description", content: "Every contribution lights a life." },
    ],
  }),
  component: Donate,
});

const causes = [
  { icon: Heart, title: "Donate Now", text: "Unrestricted giving — deploys where the need is greatest.", accent: "var(--saffron)" },
  { icon: Sparkles, title: "Sponsor a Child", text: "₹2,400 / month covers education, therapy and creative learning.", accent: "var(--teal)" },
  { icon: Star, title: "Support Project Jugnu", text: "Fund inclusion programs for children with autism and special needs.", accent: "var(--saffron)" },
  { icon: Users, title: "Support Women Empowerment", text: "Skill kits, micro-grants and SHG strengthening.", accent: "var(--navy)" },
  { icon: GraduationCap, title: "Support Youth Development", text: "Digital labs, mentorship and employability training.", accent: "var(--teal)" },
  { icon: Brain, title: "Support Mental Wellness", text: "Counselling, helpline and family programs for the forces.", accent: "var(--saffron)" },
];

const amounts = [500, 1500, 2400, 5000, 10000];

function Donate() {
  return (
    <SiteLayout>
      <section className="relative pt-36 pb-16 gradient-hero">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/90">
              <Heart className="h-3 w-3 text-[var(--saffron)]" /> Stand with us
            </div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-medium text-white leading-[1.02]">
              Every rupee writes <span className="text-gradient-warm italic">a new story.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">100% tax exempt under 80G. Quarterly transparency reports published for every donor.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {causes.map((c) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white border border-[var(--border)] p-6 shadow-elevated hover:scale-[1.02] transition-transform">
              <div className="grid place-items-center h-11 w-11 rounded-xl" style={{ background: `color-mix(in oklab, ${c.accent} 15%, transparent)`, color: c.accent }}>
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-[var(--navy-deep)]">{c.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{c.text}</p>
              <button className="mt-5 w-full rounded-full bg-[var(--saffron)] px-5 py-2.5 text-sm font-semibold text-[var(--navy-deep)] hover:scale-[1.02] transition-transform">
                Contribute
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[var(--secondary)]/40">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-8 shadow-elevated">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--teal)]">Quick UPI</div>
              <h2 className="mt-3 font-display text-3xl font-medium text-[var(--navy-deep)]">Donate in seconds.</h2>
              <p className="mt-3 text-[var(--muted-foreground)]">Scan the QR or use the UPI ID below from any UPI app.</p>
              <div className="mt-5 rounded-xl bg-[var(--secondary)] px-4 py-3 font-mono text-sm text-[var(--navy-deep)]">
                gatesethfoundation@upi
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {amounts.map((a) => (
                  <button key={a} className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--navy-deep)] hover:bg-[var(--teal-soft)]/30">
                    ₹{a.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                <ShieldCheck className="h-3.5 w-3.5 text-[var(--teal)]" /> Secure Payment Gateway Integration Coming Soon
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-56 h-56 rounded-2xl bg-[var(--navy-deep)] grid place-items-center text-white shadow-elevated">
                <QrCode className="h-32 w-32 text-[var(--saffron)]" />
                <div className="absolute bottom-3 text-[10px] uppercase tracking-widest text-white/70">Scan to donate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
