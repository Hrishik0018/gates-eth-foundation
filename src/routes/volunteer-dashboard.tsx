import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Inbox, Trash2, Mail } from "lucide-react";

export const Route = createFileRoute("/volunteer-dashboard")({
  head: () => ({
    meta: [
      { title: "Volunteer Dashboard — Gates ETH Foundation" },
      { name: "description", content: "Internal dashboard listing recent volunteer signups and contact form submissions." },
    ],
  }),
  component: Dashboard,
});

type Volunteer = { name: string; email: string; phone: string; city: string; profession?: string; skills?: string; interest: string; availability?: string; message?: string; at: string };
type Contact = { name: string; email: string; subject: string; message: string; at: string };
type News = { name: string; email: string; at: string };

function Dashboard() {
  const [vols, setVols] = useState<Volunteer[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    try {
      setVols(JSON.parse(localStorage.getItem("geth_volunteers") || "[]"));
      setContacts(JSON.parse(localStorage.getItem("geth_contacts") || "[]"));
      setNews(JSON.parse(localStorage.getItem("geth_newsletter") || "[]"));
    } catch {}
  }, []);

  const clear = (key: string, setter: (v: any) => void) => {
    if (!confirm("Clear all entries in this category?")) return;
    localStorage.removeItem(key);
    setter([]);
  };

  return (
    <SiteLayout>
      <section className="relative pt-36 pb-12 gradient-hero">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/90">
              <Inbox className="h-3 w-3 text-[var(--saffron)]" /> Internal Dashboard
            </div>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-medium text-white leading-[1.02]">
              Volunteer & Contact Submissions
            </h1>
            <p className="mt-4 text-white/70">Entries stored locally in the browser. Sync with backend coming soon.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 space-y-10">
          <Card title={`Volunteer Signups (${vols.length})`} onClear={() => clear("geth_volunteers", setVols)}>
            {vols.length === 0 ? <Empty label="No volunteer submissions yet." /> : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="text-left text-xs uppercase tracking-widest text-[var(--muted-foreground)] border-b border-[var(--border)]">
                    <th className="py-3 pr-4">Name</th><th className="py-3 pr-4">Email</th><th className="py-3 pr-4">Phone</th><th className="py-3 pr-4">City</th><th className="py-3 pr-4">Interest</th><th className="py-3 pr-4">Date</th>
                  </tr></thead>
                  <tbody>
                    {vols.slice().reverse().map((v, i) => (
                      <tr key={i} className="border-b border-[var(--border)]/60">
                        <td className="py-3 pr-4 font-semibold text-[var(--navy-deep)]">{v.name}</td>
                        <td className="py-3 pr-4 text-[var(--navy-deep)]">{v.email}</td>
                        <td className="py-3 pr-4 text-[var(--muted-foreground)]">{v.phone}</td>
                        <td className="py-3 pr-4 text-[var(--muted-foreground)]">{v.city}</td>
                        <td className="py-3 pr-4 text-[var(--muted-foreground)]">{v.interest}</td>
                        <td className="py-3 pr-4 text-xs text-[var(--muted-foreground)]">{new Date(v.at).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>

          <Card title={`Contact Messages (${contacts.length})`} onClear={() => clear("geth_contacts", setContacts)}>
            {contacts.length === 0 ? <Empty label="No contact messages yet." /> : (
              <div className="space-y-4">
                {contacts.slice().reverse().map((c, i) => (
                  <div key={i} className="rounded-2xl border border-[var(--border)] p-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="font-semibold text-[var(--navy-deep)]">{c.name} <span className="text-[var(--muted-foreground)] font-normal">· {c.email}</span></div>
                      <div className="text-xs text-[var(--muted-foreground)]">{new Date(c.at).toLocaleString()}</div>
                    </div>
                    <div className="mt-2 text-sm font-semibold text-[var(--teal)]">{c.subject}</div>
                    <p className="mt-1 text-sm text-[var(--muted-foreground)] whitespace-pre-wrap">{c.message}</p>
                  </div>
                ))}
              </div>
            )}
          </Card>

          <Card title={`Newsletter Subscribers (${news.length})`} onClear={() => clear("geth_newsletter", setNews)}>
            {news.length === 0 ? <Empty label="No newsletter signups yet." /> : (
              <ul className="divide-y divide-[var(--border)]">
                {news.slice().reverse().map((n, i) => (
                  <li key={i} className="py-3 flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-[var(--saffron)]" />
                    <span className="font-semibold text-[var(--navy-deep)]">{n.name}</span>
                    <span className="text-[var(--muted-foreground)]">{n.email}</span>
                    <span className="ml-auto text-xs text-[var(--muted-foreground)]">{new Date(n.at).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </div>
      </section>
    </SiteLayout>
  );
}

function Card({ title, children, onClear }: { title: string; children: React.ReactNode; onClear: () => void }) {
  return (
    <div className="rounded-3xl bg-white border border-[var(--border)] p-7 shadow-elevated">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-semibold text-[var(--navy-deep)]">{title}</h2>
        <button onClick={onClear} className="inline-flex items-center gap-1.5 rounded-full bg-[var(--secondary)] px-3 py-1.5 text-xs font-semibold text-[var(--navy-deep)] hover:bg-[var(--destructive)]/10 hover:text-[var(--destructive)]">
          <Trash2 className="h-3.5 w-3.5" /> Clear
        </button>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Empty({ label }: { label: string }) {
  return <div className="text-center py-10 text-sm text-[var(--muted-foreground)]">{label}</div>;
}
