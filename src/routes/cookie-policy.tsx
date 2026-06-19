import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Gates ETH Foundation" },
      { name: "description", content: "Cookie policy for the Gates ETH Foundation website." }
    ]
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <SiteLayout>
      <section className="bg-[var(--secondary)] px-4 pt-32 pb-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--teal)]">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">Cookie Policy</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">This website may use essential cookies or similar browser storage mechanisms to improve performance, maintain site functionality, and better understand how visitors interact with content.</p>
        </div>
      </section>
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-white p-8 shadow-sm md:p-10">
          <div className="space-y-8 text-sm leading-7 text-muted-foreground md:text-base">
            <div><h2 className="text-2xl font-semibold text-foreground">What cookies do</h2><p className="mt-3">Cookies help remember basic browser preferences and support reliable website delivery. Some analytics or embedded content providers may also store limited technical identifiers.</p></div>
            <div><h2 className="text-2xl font-semibold text-foreground">Managing cookies</h2><p className="mt-3">You can manage or delete cookies through your browser settings. Disabling certain cookies may affect how parts of the website behave.</p></div>
            <div><h2 className="text-2xl font-semibold text-foreground">Policy updates</h2><p className="mt-3">We may update this policy when the website or related services change. The latest version published on this page should be treated as the current policy.</p></div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
