import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles, Users, BookOpen } from "lucide-react";

import jugnuHeroDetail from "@/assets/2jugnu.jpg";
export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden gradient-hero">
      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[var(--saffron)]/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-[var(--teal)]/20 blur-3xl" />

      {/* Firefly Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-28 left-20 h-2 w-2 rounded-full bg-[var(--saffron)] animate-pulse" />
        <div className="absolute top-40 right-40 h-2 w-2 rounded-full bg-[var(--saffron)] animate-pulse" />
        <div className="absolute top-60 left-[40%] h-2 w-2 rounded-full bg-[var(--saffron)] animate-pulse" />
        <div className="absolute bottom-40 right-20 h-2 w-2 rounded-full bg-[var(--saffron)] animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--saffron)] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--navy-deep)]">
            <Sparkles className="h-3 w-3 fill-current" />
            Gates ETH Foundation's Flagship Inclusion Initiative
          </div>

          {/* Heading */}
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-medium text-white leading-[1.02]">
            Project Jugnu
            <span className="block mt-3 text-gradient-warm italic">
              Every Child Shines In Their Own Light
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg text-white/80 leading-relaxed">
            Project Jugnu is the flagship inclusion initiative of Gates
            Education Training & Healthcare Foundation dedicated to empowering
            children with autism and special needs through awareness,
            education, family support, resource accessibility, talent
            development and community inclusion.
          </p>

          <p className="mt-4 max-w-2xl text-white/70">
            Because every child deserves recognition, opportunity and a chance
            to shine.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--saffron)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] shadow-elevated hover:scale-[1.03] transition-transform"
            >
              Get Support
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#about-jugnu"
              className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3.5 text-sm font-medium text-white hover:bg-white/15"
            >
              <BookOpen className="h-4 w-4" />
              Learn More
            </a>

            <Link
              to="/volunteer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10"
            >
              <Users className="h-4 w-4" />
              Volunteer
            </Link>
          </div>

          {/* Impact Strip */}
          <div className="mt-12 flex flex-wrap gap-3">
            {[
              "Autism Awareness",
              "Parent Support",
              "Resource Accessibility",
              "Community Inclusion",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-3xl ring-glow">
            <img
              src={jugnuHeroDetail}
              alt="Project Jugnu"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating Cards */}

          <div className="absolute top-5 right-5 glass-dark rounded-2xl px-4 py-3">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Focus
            </p>
            <p className="font-semibold text-white">
              Inclusion First
            </p>
          </div>

          <div className="absolute bottom-8 left-[-20px] glass-dark rounded-2xl px-4 py-3">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Families
            </p>
            <p className="font-semibold text-white">
              Parent Support
            </p>
          </div>

          <div className="absolute bottom-16 right-4 glass-dark rounded-2xl px-4 py-3">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Belief
            </p>
            <p className="font-semibold text-white">
              Potential Beyond Labels
            </p>
          </div>
        </motion.div>
      </div>

      {/* Trust Cards */}

      <div className="relative mx-auto max-w-7xl px-4 mt-20">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/10">
            <Heart className="h-6 w-6 text-[var(--saffron)]" />
            <h3 className="mt-4 text-white font-semibold">
              For Families
            </h3>
            <p className="mt-2 text-white/70 text-sm">
              Resources, guidance and support for every step of the journey.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/10">
            <Sparkles className="h-6 w-6 text-[var(--saffron)]" />
            <h3 className="mt-4 text-white font-semibold">
              For Children
            </h3>
            <p className="mt-2 text-white/70 text-sm">
              Opportunities to learn, grow, create and confidently shine.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/10">
            <Users className="h-6 w-6 text-[var(--saffron)]" />
            <h3 className="mt-4 text-white font-semibold">
              For Communities
            </h3>
            <p className="mt-2 text-white/70 text-sm">
              Building awareness, acceptance and inclusion together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}