import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  subject: z.string().trim().min(2, "Add a subject").max(140),
  message: z.string().trim().min(5, "Add a message").max(1000),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gates ETH Foundation" },
      { name: "description", content: "Get in touch with Gates ETH Foundation for volunteering, partnerships, Project Jugnu support, community initiatives and general inquiries." },
      { property: "og:title", content: "Contact Gates ETH" },
      { property: "og:description", content: "We would love to hear from you." },
    ],
  }),
  component: Contact,
});

function Contact() {
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
      const list = JSON.parse(localStorage.getItem("geth_contacts") || "[]");
      list.push({ ...r.data, at: new Date().toISOString() });
      localStorage.setItem("geth_contacts", JSON.stringify(list));
    } catch {}
    setErrors({});
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="relative pt-36 pb-16 gradient-hero">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/90">Contact</div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-medium text-white leading-[1.02]">
              Let's <span className="text-gradient-warm italic">build</span> together.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">Connect with Gates ETH Foundation for volunteering opportunities, Project Jugnu support, collaborations, community initiatives and general inquiries.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-6">
          {[
            { icon: MapPin, title: "Visit", lines: ["Gates ETH Foundation", "Sector 78", "Noida, Uttar Pradesh, India"] },
            { icon: Mail, title: "Email", lines: ["hello@gatesethfoundation.org", "Volunteer & Community Support", "Project Jugnu Assistance"] },
            { icon: Phone, title: "Call", lines: ["+91 99102 72853", "Monday – Saturday", "Community Support & Inquiries"] },
          ].map((c) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-7 shadow-elevated">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">

  <div className="rounded-2xl border border-[var(--border)] p-4 bg-[var(--teal-soft)]/20">
    <h4 className="font-semibold text-[var(--navy-deep)]">
      Volunteer
    </h4>
    <p className="mt-1 text-xs text-[var(--muted-foreground)]">
      Join our volunteer network and support community initiatives.
    </p>
  </div>

  <div className="rounded-2xl border border-[var(--border)] p-4 bg-[var(--saffron-soft)]/20">
    <h4 className="font-semibold text-[var(--navy-deep)]">
      Project Jugnu
    </h4>
    <p className="mt-1 text-xs text-[var(--muted-foreground)]">
      Support autism awareness, inclusion and special needs initiatives.
    </p>
  </div>

  <div className="rounded-2xl border border-[var(--border)] p-4 bg-[var(--teal-soft)]/20">
    <h4 className="font-semibold text-[var(--navy-deep)]">
      Partnerships
    </h4>
    <p className="mt-1 text-xs text-[var(--muted-foreground)]">
      Collaborate with us to create meaningful community impact.
    </p>
  </div>

</div>
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-[var(--teal-soft)]/40 text-[var(--teal)]">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-2xl font-semibold text-[var(--navy-deep)]">{c.title}</div>
              <div className="mt-2 space-y-1 text-sm text-[var(--muted-foreground)]">
                {c.lines.map((l) => <div key={l}>{l}</div>)}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-4 mt-10 grid lg:grid-cols-2 gap-8">
          <div className="glass rounded-3xl p-7 flex items-start gap-4">
            <Clock className="h-5 w-5 text-[var(--saffron)] mt-1" />
            <div>
              <p className="text-sm text-[var(--navy-deep)] font-semibold">Project Jugnu Support</p>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">For urgent armed-forces wellness support, call <span className="font-semibold text-[var(--navy-deep)]">1800 200 3344</span>.Families, educators, volunteers and community members can connect with us for information, support, participation opportunities and awareness initiatives related to autism and special needs inclusion.</p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-elevated border border-[var(--border)]">
            {sent ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-[var(--teal)]" />
                <h3 className="mt-3 font-display text-xl font-semibold text-[var(--navy-deep)]">Message sent</h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">We'll reply within 48 hours.</p>
                <button onClick={() => setSent(false)} className="mt-4 text-sm font-semibold text-[var(--teal)] hover:underline">Send another</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-3" noValidate>
                <h3 className="font-display text-xl font-semibold text-[var(--navy-deep)]">Send us a message</h3>
                <div className="grid grid-cols-2 gap-3">
                  <CField name="name" label="Name" error={errors.name} />
                  <CField name="email" label="Email" type="email" error={errors.email} />
                </div>
                <CField name="subject" label="Subject" wide error={errors.subject} />
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">Message</label>
                  <textarea name="message" rows={4} maxLength={1000} className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)]" />
                  {errors.message && <p className="mt-1 text-xs text-[var(--destructive)]">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full rounded-full bg-[var(--saffron)] px-6 py-3 text-sm font-semibold text-[var(--navy-deep)] hover:scale-[1.02] transition-transform">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function CField({ name, label, type = "text", wide, error }: { name: string; label: string; type?: string; wide?: boolean; error?: string }) {
  return (
    <div className={wide ? "col-span-2" : ""}>
      <label className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">{label}</label>
      <input name={name} type={type} maxLength={160} className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)]" />
      {error && <p className="mt-1 text-xs text-[var(--destructive)]">{error}</p>}
    </div>
  );
}
