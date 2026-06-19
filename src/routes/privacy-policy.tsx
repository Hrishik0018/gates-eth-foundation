import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Gates ETH Foundation" },
      { name: "description", content: "Privacy policy for Gates ETH Foundation website visitors and supporters." }
    ]
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-to-b from-[var(--navy-deep)] to-[var(--navy)] px-4 pt-32 pb-20 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.25em] text-white/70">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Privacy Policy</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg">Gates ETH Foundation respects your privacy. This website may collect contact details that you voluntarily submit through forms, newsletter signups, volunteer applications, or donation-related enquiries.</p>
        </div>
      </section>
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-white p-8 shadow-sm md:p-10">
          <div className="space-y-8 text-sm leading-7 text-muted-foreground md:text-base">
            <div><h2 className="text-2xl font-semibold text-foreground">Information we collect</h2><p className="mt-3">We may collect your name, email address, phone number, city, and any information you choose to share when contacting us, subscribing, volunteering, or donating.</p></div>
            <div><h2 className="text-2xl font-semibold text-foreground">How we use information</h2><p className="mt-3">Information is used to respond to enquiries, coordinate programs, manage volunteer interest, improve communication, and share relevant updates about our initiatives.</p></div>
            <div><h2 className="text-2xl font-semibold text-foreground">Data sharing</h2><p className="mt-3">We do not sell personal information. Data may only be shared with trusted service providers or partners when necessary to operate the website or support legitimate foundation activities.</p></div>
            <div><h2 className="text-2xl font-semibold text-foreground">Contact</h2><p className="mt-3">For privacy-related requests, please contact Gates ETH Foundation through the contact details published on the website.</p></div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
