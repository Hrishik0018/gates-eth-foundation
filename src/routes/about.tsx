import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Timeline } from "@/components/sections/Timeline";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { motion } from "framer-motion";
import { Eye, Target, Sparkles } from "lucide-react";
import community from "@/assets/community-image.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Gates ETH Foundation" },
      { name: "description", content: "Born in India. Serving communities with purpose. A grassroots NGO working on inclusion, women, youth and wellness since 2011." },
      { property: "og:title", content: "About Gates ETH Foundation" },
      { property: "og:description", content: "Born in India. Serving communities with purpose." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="relative pt-36 pb-16 gradient-hero">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/90">Our story</div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-medium text-white leading-[1.02]">
              Born in <span className="text-gradient-warm italic">Uttar Pradesh.</span> Serving communities with purpose.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              Gates ETH Foundation is a community-driven non-profit organization based in Noida, Uttar Pradesh, committed to empowering women, youth, children with special needs and communities through education, inclusion, mental wellness and sustainable development initiatives. Since 2011, the Foundation has worked to create meaningful opportunities that strengthen individuals and foster community growth.
            </p>
          </motion.div>
        </div>
      </section>

      <ImpactStats />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            src={community} alt="Community outreach" loading="lazy" className="rounded-3xl shadow-elevated aspect-[4/3] object-cover" />
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-[var(--navy-deep)]">A philosophy of <span className="italic text-[var(--teal)]">walking with</span>, not delivering to.</h2>
            <div className="mt-8 space-y-6">
              {[
                { icon: Eye, title: "Vision", text: "To build an inclusive and empowered society where every child, woman, youth and service professional has the opportunity to learn, grow, thrive and contribute with dignity." },
                { icon: Target, title: "Mission", text: "To create sustainable social impact through Project Jugnu, She Rises, The Next Step and Healing The Heroes by promoting inclusion, education, skill development, mental wellness and community empowerment." },
                { icon: Sparkles, title: "Values", text: "Compassion. Inclusion. Integrity. Community Leadership. Transparency. Sustainable Impact." },
              ].map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-[var(--teal-soft)]/40 text-[var(--teal)]">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-xl font-semibold text-[var(--navy-deep)]">{v.title}</div>
                    <p className="mt-1 text-sm text-[var(--muted-foreground)] leading-relaxed">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[var(--secondary)]/20">
  <div className="mx-auto max-w-7xl px-4">
    <div className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 rounded-full bg-[var(--teal-soft)]/30 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--teal)]">
        Our Pillars
      </div>

      <h2 className="mt-5 font-display text-4xl md:text-5xl font-medium text-[var(--navy-deep)]">
        Creating Impact Through
        <span className="italic text-[var(--teal)]"> Four Flagship Initiatives</span>
      </h2>

      <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
        Gates ETH Foundation works through four focused initiatives that
        promote inclusion, empowerment, education and well-being across
        communities.
      </p>
    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Project Jugnu */}
      <div className="rounded-3xl bg-white p-8 shadow-elevated border border-[var(--border)]">
        <div className="mb-4 text-3xl">✨</div>
        <h3 className="font-display text-2xl font-semibold text-[var(--navy-deep)]">
          Project Jugnu
        </h3>
        <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
          Supporting children with autism and special needs through
          inclusion, awareness, parent support, education and community
          engagement.
        </p>
      </div>

      {/* She Rises */}
      <div className="rounded-3xl bg-white p-8 shadow-elevated border border-[var(--border)]">
        <div className="mb-4 text-3xl">👩</div>
        <h3 className="font-display text-2xl font-semibold text-[var(--navy-deep)]">
          She Rises
        </h3>
        <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
          Empowering women through skill development, entrepreneurship,
          leadership opportunities and financial independence.
        </p>
      </div>

      {/* The Next Step */}
      <div className="rounded-3xl bg-white p-8 shadow-elevated border border-[var(--border)]">
        <div className="mb-4 text-3xl">🚀</div>
        <h3 className="font-display text-2xl font-semibold text-[var(--navy-deep)]">
          The Next Step
        </h3>
        <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
          Equipping youth with future-ready skills, career guidance,
          leadership development and employability support.
        </p>
      </div>

      {/* Healing The Heroes */}
      <div className="rounded-3xl bg-white p-8 shadow-elevated border border-[var(--border)]">
        <div className="mb-4 text-3xl">🛡️</div>
        <h3 className="font-display text-2xl font-semibold text-[var(--navy-deep)]">
          Healing The Heroes
        </h3>
        <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
          Promoting mental wellness, resilience and rehabilitation support
          for armed and allied forces personnel and their families.
        </p>
      </div>
    </div>
  </div>
</section>

      <Timeline />
    </SiteLayout>
  );
}