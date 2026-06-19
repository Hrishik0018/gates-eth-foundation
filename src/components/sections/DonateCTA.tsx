import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import volunteersImg from "@/assets/volunteers.jpg";

export function DonateCTA() {
  return (
    <section className="relative py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] gradient-hero p-10 md:p-16 lg:p-20 shadow-elevated">
          <div className="absolute inset-0 opacity-30">
            <img src={volunteersImg} alt="" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 gradient-hero opacity-90" />
          </div>
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--saffron)]/30 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90">
              <Heart className="h-3 w-3 text-[var(--saffron)]" /> Stand with us
            </div>
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-medium text-white leading-[1.05]">
              ₹500 funds one month of <span className="text-gradient-warm italic">a child's education</span>.
            </h2>
            <p className="mt-5 max-w-xl text-white/75 text-lg">
              Your contribution is 100% tax exempt under 80G and goes directly to programs on the ground. Transparency reports published every quarter.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/donate" className="group inline-flex items-center gap-2 rounded-full bg-[var(--saffron)] px-7 py-4 text-sm font-semibold text-[var(--navy-deep)] shadow-elevated hover:scale-[1.03] transition-transform">
                Donate now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/volunteer" className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-4 text-sm font-medium text-white hover:bg-white/15">
                Become a volunteer
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}