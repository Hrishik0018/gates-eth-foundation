import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Programs } from "@/components/sections/Programs";
import { DonateCTA } from "@/components/sections/DonateCTA";
import { motion } from "framer-motion";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Gates ETH Foundation" },
      { name: "description", content: "Four flagship programs: women empowerment, youth skilling, armed forces wellness and community outreach across India." },
      { property: "og:title", content: "Our Programs" },
      { property: "og:description", content: "Flagship initiatives transforming lives across 14 Indian states." },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <SiteLayout>
      <section className="relative pt-36 pb-16 gradient-hero">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/90">What we do</div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-medium text-white leading-[1.02]">
              Programs with <span className="text-gradient-cool italic">depth</span>, not breadth.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              We have intentionally stayed focused: Five Pillars, each backed by 10+ years of grassroots learning, local partnerships and measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>
      <Programs />
      <DonateCTA />
    </SiteLayout>
  );
}