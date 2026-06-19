import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
});

export function Newsletter() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      setError("Please enter a valid name and email.");
      return;
    }
    try {
      const list = JSON.parse(localStorage.getItem("geth_newsletter") || "[]");
      list.push({ ...r.data, at: new Date().toISOString() });
      localStorage.setItem("geth_newsletter", JSON.stringify(list));
    } catch {}
    setError(null);
    setSent(true);
  };

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
      <div className="text-sm font-semibold uppercase tracking-widest text-white/90">Newsletter</div>
      <p className="mt-2 text-xs text-white/60">Monthly impact stories from the field.</p>
      {sent ? (
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--saffron)]">
          <CheckCircle2 className="h-4 w-4" /> You're on the list. Thank you!
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-4 space-y-2" noValidate>
          <input name="name" placeholder="Your name" maxLength={80} className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--saffron)]/50" />
          <div className="flex gap-2">
            <input name="email" type="email" placeholder="Email address" maxLength={160} className="flex-1 rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--saffron)]/50" />
            <button type="submit" className="grid place-items-center h-10 w-10 rounded-lg bg-[var(--saffron)] text-[var(--navy-deep)] hover:scale-105 transition-transform" aria-label="Subscribe">
              <Mail className="h-4 w-4" />
            </button>
          </div>
          {error && <p className="text-xs text-[var(--saffron)]">{error}</p>}
        </form>
      )}
    </div>
  );
}
