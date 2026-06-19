import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { Compass, Laptop, Briefcase, Crown, Rocket, Users, ArrowRight, Heart } from "lucide-react";
import youthImg from "@/assets/next-step.jpg";

export const Route = createFileRoute("/youth-development")({
  head: () => ({
    meta: [
      { title: "The Next Step — Gates ETH Foundation" },
      { name: "description", content: "The Next Step: career guidance, digital skills, innovation labs, mentorship and entrepreneurship exposure for India's teenage students." },
      { property: "og:title", content: "The Next Step — Youth Development" },
      { property: "og:description", content: "Future-ready skills for the next generation." },
      { property: "og:image", content: youthImg },
    ],
  }),
  component: Page,
});

const pillars = [
  { icon: Compass, title: "Career Guidance", text: "Aptitude mapping, stream selection and one-on-one counselling for school and college students." },
  { icon: Laptop, title: "Digital Skills", text: "Coding fundamentals, data literacy, design tools and AI awareness — practical and project-led." },
  { icon: Briefcase, title: "Employability Training", text: "Communication, CV, interview practice and workplace etiquette to land that first role." },
  { icon: Crown, title: "Leadership Development", text: "Public speaking, project leadership and ethical decision-making for emerging leaders." },
  { icon: Rocket, title: "Entrepreneurship", text: "Lean canvas, customer discovery, prototyping and pitch coaching for student founders." },
  { icon: Users, title: "Mentorship Programs", text: "Long-term pairings with industry mentors across tech, finance, social and creative fields." },
];

function Page() {
  return (
    <SiteLayout>
      <section className="relative pt-36 pb-16 gradient-hero">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/90">The Next Step · Youth Development</div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-medium text-white leading-[1.02]">
              The <span className="text-gradient-cool italic">Next Step</span> for young India.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">From the first interview to the first venture — innovation labs, digital skills and mentorship that walk teenage students into tomorrow.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-square rounded-3xl overflow-hidden ring-glow">
            <img src={youthImg} alt="Indian teenagers in The Next Step innovation lab" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-white border border-[var(--border)] p-6 shadow-elevated">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-[var(--teal-soft)]/40 text-[var(--teal)]"><p.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-xl font-semibold text-[var(--navy-deep)]">{p.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[var(--secondary)]/40">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--navy-deep)]">Mentor a young Indian.</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/volunteer" className="inline-flex items-center gap-2 rounded-full bg-[var(--saffron)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] shadow-elevated hover:scale-[1.03] transition-transform">Volunteer <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-[var(--navy-deep)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[var(--navy)]"><Heart className="h-4 w-4 text-[var(--saffron)]" /> Donate</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
