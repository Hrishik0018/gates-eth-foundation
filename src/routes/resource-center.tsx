import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { FileText, Download, BookOpen, Brain, Users, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/resource-center")({
  head: () => ({
    meta: [
      { title: "Resources — Gates ETH Foundation" },
      { name: "description", content: "Free guides on autism awareness, women empowerment, youth careers and mental wellness." },
      { property: "og:title", content: "Resource Center" },
      { property: "og:description", content: "Knowledge for change-makers." },
    ],
  }),
  component: Page,
});

const groups = [
  { icon: BookOpen, title: "Autism Awareness Resources", items: ["Understanding Autism — Parent Handbook", "Inclusion in Indian Schools", "UDID & Rights Quick Guide", "Early Signs Checklist"] },
  { icon: Users, title: "Women Empowerment Resources", items: ["Financial Literacy Workbook", "Starting Your Micro-Enterprise", "Self-Help Group Toolkit", "Legal Rights at Work"] },
  { icon: GraduationCap, title: "Youth Career Resources", items: ["Resume & Interview Kit", "Digital Skills Starter Pack", "Scholarship Directory 2026", "Mentor Matching Guide"] },
  { icon: Brain, title: "Mental Wellness Resources", items: ["Stress Management for Service Members", "Family Caregiver Handbook", "Sleep & Resilience Guide", "Helpline Directory"] },
];

function Page() {
  return (
    <SiteLayout>
      <section className="relative pt-36 pb-16 gradient-hero">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/90">Resource Center</div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-medium text-white leading-[1.02]">
              Knowledge for <span className="text-gradient-cool italic">change-makers.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">Free guides, handbooks and toolkits curated by our programs team and partner experts.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-6 md:grid-cols-2">
          {groups.map((g, i) => (
            <motion.div key={g.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="rounded-3xl bg-white border border-[var(--border)] p-7 shadow-elevated">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-[var(--teal-soft)]/40 text-[var(--teal)]"><g.icon className="h-5 w-5" /></div>
                <h3 className="font-display text-xl font-semibold text-[var(--navy-deep)]">{g.title}</h3>
              </div>
              <ul className="mt-5 divide-y divide-[var(--border)]">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3 text-sm text-[var(--navy-deep)]">
                      <FileText className="h-4 w-4 text-[var(--saffron)]" /> {item}
                    </div>
                    <button className="inline-flex items-center gap-1.5 rounded-full bg-[var(--secondary)] px-3 py-1.5 text-xs font-semibold text-[var(--navy-deep)] hover:bg-[var(--teal-soft)]/40">
                      <Download className="h-3.5 w-3.5" /> PDF
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
