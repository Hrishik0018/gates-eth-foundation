import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, GraduationCap, Shield, HeartHandshake,Library, Star } from "lucide-react";
import jugnuImg from "@/assets/2jugnu.jpg";
import sheRisesImg from "@/assets/she-rises.png";
import nextStepImg from "@/assets/next-step.png";
import healingImg from "@/assets/healing-heroes.jpg";
import libraryImg from "@/assets/library-revival.png";
const programs = [
  { icon: Star, title: "Project Jugnu", desc: "Our flagship inclusion initiative empowering children with autism and special needs through recognition, creativity, family support and community.", img: jugnuImg, accent: "var(--saffron)", tag: "Flagship Initiative", to: "/jugnu", featured: true },
  { icon: HeartHandshake, title: "She Rises", desc: "Skill, livelihood, leadership and financial literacy for women across Uttar Pradesh and North India.", img: sheRisesImg, accent: "var(--saffron)", tag: "Women Empowerment", to: "/women-empowerment" },
  { icon: GraduationCap, title: "The Next Chapter ", desc: "Career guidance, digital skills, innovation labs and mentorship for India's youth.", img: nextStepImg, accent: "var(--teal)", tag: "Youth Development", to: "/youth-development" },
  { icon: Shield, title: "Healing The Heroes", desc: "Counselling, resilience and family support for armed forces, police, veterans and allied personnel.", img: healingImg, accent: "var(--navy)", tag: "Mental Wellness", to: "/mental-wellness" },
  {
  icon: Library,
  title: "Public Library Revival Mission",
  desc: "Reviving public libraries across India through modernization, digital learning spaces, literacy initiatives and community engagement.",
  img: libraryImg,
  accent: "var(--teal)",
  tag: "Literacy & Learning",
  to: "/public-library-revival",
},
];

export function Programs() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--teal-soft)]/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--teal)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--teal)]" /> Our Programs
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--navy-deep)] leading-[1.05]">
              Five Pillars, one <span className="italic text-[var(--teal)]">unwavering</span> promise.
            </h2>
          </div>
          <p className="max-w-md text-base text-[var(--muted-foreground)] leading-relaxed">
            Every program is built on dignity, measured in outcomes, and run with people — not just for them.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-elevated ${p.featured ? "ring-2 ring-[var(--saffron)]/60" : ""}`}
            >
              {p.featured && (
                <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-[var(--saffron)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[var(--navy-deep)] shadow-elevated">
                  <Star className="h-3 w-3 fill-current" /> Flagship Initiative
                </div>
              )}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/80 via-[var(--navy-deep)]/10 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-widest text-white">
                  <span className="h-1 w-1 rounded-full" style={{ background: p.accent }} /> {p.tag}
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid place-items-center h-11 w-11 rounded-xl" style={{ background: `color-mix(in oklab, ${p.accent} 15%, transparent)`, color: p.accent }}>
                      <p.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-[var(--navy-deep)] leading-tight">{p.title}</h3>
                  </div>
                  <Link to={p.to} aria-label={`Learn about ${p.title}`}>
                    <ArrowUpRight className="h-5 w-5 text-[var(--muted-foreground)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--teal)]" />
                  </Link>
                </div>
                <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">{p.desc}</p>
                <Link to={p.to} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--teal)] hover:gap-2.5 transition-all">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
