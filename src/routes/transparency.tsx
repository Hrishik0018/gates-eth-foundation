import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Award, Users, Building, Download } from "lucide-react";

export const Route = createFileRoute("/transparency")({
  head: () => ({
    meta: [
      { title: "Transparency & Governance — Gates ETH Foundation" },
      { name: "description", content: "Registration, certifications, annual reports, audit reports and governance policies." },
      { property: "og:title", content: "Transparency & Governance" },
      { property: "og:description", content: "Open books. Open hearts." },
    ],
  }),
  component: Page,
});

const registrations = [
  { label: "Registration Number", value: "S/12345/2011 (Delhi)" },
  { label: "PAN", value: "AABCG0000X" },
  { label: "12A Certification", value: "URN: AAATG0000X12A · Valid" },
  { label: "80G Certification", value: "URN: AAATG0000X80G · Valid" },
  { label: "CSR-1 Registration", value: "CSR00012345" },
  { label: "Darpan ID", value: "DL/2011/0012345" },
];

const reports = [
  { year: "FY 2024–25", type: "Annual Report" },
  { year: "FY 2024–25", type: "Audited Financials" },
  { year: "FY 2023–24", type: "Annual Report" },
  { year: "FY 2023–24", type: "Audited Financials" },
  { year: "FY 2022–23", type: "Annual Report" },
];

const policies = [
  "Child Protection Policy",
  "POSH (Prevention of Sexual Harassment) Policy",
  "Whistleblower Policy",
  "Conflict of Interest Policy",
  "Financial Procurement Policy",
  "Data Privacy & Beneficiary Consent Policy",
];

function Page() {
  return (
    <SiteLayout>
      <section className="relative pt-36 pb-16 gradient-hero">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/90">
              <ShieldCheck className="h-3 w-3 text-[var(--saffron)]" /> Transparency & Governance
            </div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-medium text-white leading-[1.02]">
              Open books. <span className="text-gradient-warm italic">Open hearts.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">Trust is the bedrock of every program. Below is everything you need to verify, evaluate and partner with us.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-8 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl bg-white border border-[var(--border)] p-7 shadow-elevated">
            <Building className="h-6 w-6 text-[var(--teal)]" />
            <h3 className="mt-3 font-display text-xl font-semibold text-[var(--navy-deep)]">About Governance</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">Governed by a 7-member Board including independent trustees, sector experts and a community representative. Board meets quarterly. Independent audit annually.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="rounded-3xl bg-white border border-[var(--border)] p-7 shadow-elevated">
            <Users className="h-6 w-6 text-[var(--teal)]" />
            <h3 className="mt-3 font-display text-xl font-semibold text-[var(--navy-deep)]">Leadership</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">Founder, Executive Director and Program Heads — full bios available in the Annual Report. Conflict-of-interest declarations published yearly.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="rounded-3xl bg-white border border-[var(--border)] p-7 shadow-elevated">
            <Award className="h-6 w-6 text-[var(--teal)]" />
            <h3 className="mt-3 font-display text-xl font-semibold text-[var(--navy-deep)]">Compliance</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">FCRA, Income Tax, GST, NGO Darpan and CSR-1 — all filings current. Compliance dashboard reviewed monthly.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[var(--secondary)]/40">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-white p-7 shadow-elevated">
            <h3 className="font-display text-2xl font-semibold text-[var(--navy-deep)]">Registration Details</h3>
            <ul className="mt-5 divide-y divide-[var(--border)]">
              {registrations.map((r) => (
                <li key={r.label} className="flex items-center justify-between py-3 text-sm">
                  <span className="text-[var(--muted-foreground)]">{r.label}</span>
                  <span className="font-mono font-semibold text-[var(--navy-deep)]">{r.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-elevated">
            <h3 className="font-display text-2xl font-semibold text-[var(--navy-deep)]">Annual & Audit Reports</h3>
            <ul className="mt-5 divide-y divide-[var(--border)]">
              {reports.map((r, i) => (
                <li key={i} className="flex items-center justify-between py-3 text-sm">
                  <div className="flex items-center gap-3 text-[var(--navy-deep)]">
                    <FileText className="h-4 w-4 text-[var(--saffron)]" />
                    <div>
                      <div className="font-semibold">{r.type}</div>
                      <div className="text-xs text-[var(--muted-foreground)]">{r.year}</div>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-[var(--secondary)] px-3 py-1.5 text-xs font-semibold text-[var(--navy-deep)] hover:bg-[var(--teal-soft)]/40">
                    <Download className="h-3.5 w-3.5" /> Download
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h3 className="font-display text-2xl font-semibold text-[var(--navy-deep)]">Policies</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {policies.map((p) => (
              <div key={p} className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--navy-deep)]">
                <span>{p}</span>
                <Download className="h-4 w-4 text-[var(--saffron)]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
