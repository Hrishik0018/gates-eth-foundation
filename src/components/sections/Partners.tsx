import { motion } from "framer-motion";

const categories = [
  { title: "CSR Partners", logos: ["TATA", "INFOSYS", "WIPRO", "RELIANCE"] },
  { title: "Educational Institutions", logos: ["IIT Delhi", "DU", "JNU", "AIIMS"] },
  { title: "NGO Network", logos: ["GIVE India", "CRY", "Smile", "Goonj"] },
  { title: "Healthcare", logos: ["Apollo", "Fortis", "Max", "Medanta"] },
  { title: "Government Bodies", logos: ["NITI Aayog", "MoSJE", "MoD", "CSR Hub"] },
];

export function Partners() {
  return (
    <section className="py-20 border-y border-[var(--border)] bg-[var(--secondary)]/30">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--teal)]">Trusted partnerships</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium text-[var(--navy-deep)]">Powered by India's leading institutions.</h2>
        </div>

        <div className="mt-12 space-y-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.05 }}
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-4">{cat.title}</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {cat.logos.map((p) => (
                  <div key={p} className="rounded-2xl bg-white border border-[var(--border)] py-5 px-4 text-center font-display text-base font-semibold text-[var(--navy)]/60 hover:text-[var(--navy-deep)] hover:border-[var(--teal)]/40 transition-colors">
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
