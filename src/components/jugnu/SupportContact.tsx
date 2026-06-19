import { Mail, Phone } from "lucide-react";

export default function SupportContact() {
  return (
    <section className="py-24 bg-[var(--secondary)]/40">
      <div className="mx-auto max-w-5xl px-4">

        <div className="rounded-3xl bg-white border border-[var(--border)] p-10 shadow-elevated text-center">

          <h2 className="font-display text-4xl text-[var(--navy-deep)]">
            Need Guidance Or Support?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-[var(--muted-foreground)]">
            Whether you're seeking information, resources, support or simply
            someone to guide you, we're here to help.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl bg-[var(--secondary)] p-6">
              <Mail className="mx-auto h-6 w-6 text-[var(--saffron)]" />
              <h3 className="mt-3 font-semibold">Email</h3>
              <p className="mt-2">hello@gatesethfoundation.org</p>
            </div>

            <div className="rounded-2xl bg-[var(--secondary)] p-6">
              <Phone className="mx-auto h-6 w-6 text-[var(--saffron)]" />
              <h3 className="mt-3 font-semibold">Phone</h3>
              <p className="mt-2">+91 99102 72853</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}