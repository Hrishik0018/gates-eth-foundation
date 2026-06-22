import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Heart, CheckCircle2 } from "lucide-react";
import jugnuheroImg from "@/assets/jugnu.png";

const badges = [
  "Established 2011",
  "Community Driven",
  "Volunteer Powered",
  "Impact Focused",
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[var(--saffron)]/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full bg-[var(--teal)]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/90"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--saffron)] animate-pulse" />
              Empower · Transform · Heal
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.02] text-white"
            >
              Empowering Communities, Fostering Growth.{" "}
              <span className="text-gradient-warm italic">Strengthening</span>{" "}
              <span className="text-gradient-cool">India Since 2011.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 max-w-xl text-lg text-white/75 leading-relaxed"
            >
              Gates ETH Foundation is dedicated to empowering women, youth, children with special needs, and communities through education, skill development, inclusion, mental wellness, and social impact initiatives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/volunteer"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--saffron)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] shadow-elevated hover:scale-[1.03] transition-transform"
              >
                <Heart className="h-4 w-4" /> Become a Volunteer
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3.5 text-sm font-medium text-white hover:bg-white/15 transition-colors"
              >
                Explore Our Impact
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-10 flex flex-wrap gap-x-5 gap-y-2"
            >
              {badges.map((b) => (
                <div key={b} className="inline-flex items-center gap-1.5 text-xs font-medium text-white/80">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[var(--saffron)]" /> {b}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden ring-glow bg-white">
  <img
    src={jugnuheroImg}
    alt="Communities united in empowerment workshop"
    className="w-full h-auto object-contain"
  />
</div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 max-w-[240px] shadow-elevated"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[0,1,2].map((i) => (
                    <div key={i} className="h-7 w-7 rounded-full ring-2 ring-white bg-gradient-to-br from-[var(--teal)] to-[var(--saffron)]" />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-[var(--navy-deep)]">Volunteer powered</span>
              </div>
              <p className="mt-2 text-xs text-[var(--navy)]/80 leading-snug">"Every act of service writes a new story of hope."</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -top-4 -right-4 glass-dark rounded-2xl px-4 py-3 text-white shadow-elevated"
            >
              <div className="text-[10px] uppercase tracking-widest text-[var(--saffron)]">Flagship</div>
              <div className="text-xs font-semibold mt-0.5">Project Jugnu</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
