import { motion } from "framer-motion";
import { Counter } from "../Counter";
import { Users, GraduationCap, Heart, Shield, Sparkles, Calendar, Sprout, Award } from "lucide-react";

const stats = [
  { icon: Heart, value: 150000, suffix: "+", label: "Lives impacted", tint: "var(--saffron)" },
  { icon: Users, value: 25000, suffix: "+", label: "Women empowered", tint: "var(--teal)" },
  { icon: GraduationCap, value: 18000, suffix: "+", label: "Youth trained", tint: "var(--navy)" },
  { icon: Sparkles, value: 1200, suffix: "+", label: "Special children supported", tint: "var(--saffron)" },
  { icon: Shield, value: 3500, suffix: "+", label: "Volunteers engaged", tint: "var(--teal)" },
  { icon: Calendar, value: 480, suffix: "+", label: "Events conducted", tint: "var(--navy)" },
  { icon: Sprout, value: 75, suffix: "+", label: "Community initiatives", tint: "var(--saffron)" },
  { icon: Award, value: 14, suffix: "", label: "Years of service", tint: "var(--teal)" },
];

export function ImpactStats() {
  return (
    <section className="relative -mt-16 z-10 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="glass rounded-3xl p-8 md:p-10 shadow-elevated">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="text-center md:text-left"
              >
                <div className="inline-grid place-items-center h-12 w-12 rounded-xl mb-3" style={{ background: `color-mix(in oklab, ${s.tint} 15%, transparent)`, color: s.tint }}>
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-semibold text-[var(--navy-deep)]">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm text-[var(--muted-foreground)]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
