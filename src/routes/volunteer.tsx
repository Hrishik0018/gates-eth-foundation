import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Users, Sparkles, CheckCircle2, LayoutDashboard } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  city: z.string().trim().min(2, "Enter your city").max(80),
  profession: z.string().trim().max(120).optional().or(z.literal("")),
  skills: z.string().trim().max(200).optional().or(z.literal("")),
  interest: z.string().min(1, "Choose an area"),
  availability: z.string().min(1, "Choose availability"),
  message: z.string().trim().max(500).optional().or(z.literal("")),
});

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Gates ETH Foundation" },
      { name: "description", content: "Join 3,500+ volunteers powering inclusion, women, youth and wellness programs across India." },
      { property: "og:title", content: "Volunteer with Gates ETH" },
      { property: "og:description", content: "Become part of the movement." },
    ],
  }),
  component: Volunteer,
});

function Volunteer() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    try {
      const list = JSON.parse(localStorage.getItem("geth_volunteers") || "[]");
      list.push({ ...r.data, at: new Date().toISOString() });
      localStorage.setItem("geth_volunteers", JSON.stringify(list));
    } catch {}
    setErrors({});
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="relative pt-36 pb-16 gradient-hero">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/90">
              <Heart className="h-3 w-3 text-[var(--saffron)]" /> Get involved
            </div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-medium text-white leading-[1.02]">
              Lend an <span className="text-gradient-warm italic">hour</span>. <br className="hidden md:block" /> Change a <span className="text-gradient-cool">lifetime</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              Whether you have skills, time, or resources — there is a place for you in this movement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[1fr_1.1fr] gap-12">
          <div>
            <h2 className="font-display text-4xl font-medium text-[var(--navy-deep)]">Ways to contribute</h2>
            <div className="mt-8 space-y-4">
              {[
                { icon: Users, title: "Volunteer on the ground", text: "Join field drives, mentor youth, or assist counsellors. Minimum 4 hours / month." },
                { icon: Sparkles, title: "Lend your skills", text: "Design, tech, legal, finance — pro-bono expertise that multiplies our impact." },
                { icon: Heart, title: "Donate", text: "₹500 funds a child's monthly education. 100% tax-exempt under 80G." },
              ].map((c) => (
                <div key={c.title} className="glass rounded-2xl p-5 flex gap-4 shadow-elevated">
                  <div className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-[var(--teal-soft)]/40 text-[var(--teal)]">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold text-[var(--navy-deep)]">{c.title}</div>
                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/volunteer-dashboard" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--teal)] hover:gap-3 transition-all">
              <LayoutDashboard className="h-4 w-4" /> View submission dashboard
            </Link>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-8 shadow-elevated border border-[var(--border)]">
            {sent ? (
              <div className="py-16 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-[var(--teal)]" />
                <h3 className="mt-4 font-display text-2xl font-semibold text-[var(--navy-deep)]">Thank you!</h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">Our team will reach out within 48 hours.</p>
                <button onClick={() => setSent(false)} className="mt-5 text-sm font-semibold text-[var(--teal)] hover:underline">Submit another</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <h3 className="font-display text-2xl font-semibold text-[var(--navy-deep)]">Join the movement</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Field name="name" label="Full name" error={errors.name} />
                  <Field name="email" label="Email" type="email" error={errors.email} />
                  <Field name="phone" label="Phone" error={errors.phone} />
                  <Field name="city" label="City" error={errors.city} />
                  <Field name="profession" label="Profession" error={errors.profession} />
                  <Field name="skills" label="Skills" error={errors.skills} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">Area of interest</label>
                    <select name="interest" defaultValue="" className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)]">
                      <option value="" disabled>Select one</option>
                      <option>Project Jugnu — Inclusion</option>
                      <option>Women empowerment</option>
                      <option>Youth skill development</option>
                      <option>Armed forces wellness</option>
                      <option>Community outreach</option>
                    </select>
                    {errors.interest && <p className="mt-1 text-xs text-[var(--destructive)]">{errors.interest}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">Availability</label>
                    <select name="availability" defaultValue="" className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)]">
                      <option value="" disabled>Select one</option>
                      <option>Weekends only</option>
                      <option>Weekday evenings</option>
                      <option>Full-time</option>
                      <option>Remote / flexible</option>
                    </select>
                    {errors.availability && <p className="mt-1 text-xs text-[var(--destructive)]">{errors.availability}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">Message (optional)</label>
                  <textarea name="message" rows={3} maxLength={500} className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)]" />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--saffron)] px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] shadow-elevated hover:scale-[1.02] transition-transform">
                  Submit & start your journey
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div className="col-span-2 sm:col-span-1">
      <label className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">{label}</label>
      <input name={name} type={type} maxLength={160} className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)]" />
      {error && <p className="mt-1 text-xs text-[var(--destructive)]">{error}</p>}
    </div>
  );
}
