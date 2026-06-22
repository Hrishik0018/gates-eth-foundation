import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Programs } from "@/components/sections/Programs";
import { Timeline } from "@/components/sections/Timeline";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { Podcast } from "@/components/sections/Podcast";
import { DonateCTA } from "@/components/sections/DonateCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gates ETH Foundation — Born in India. Serving With Purpose." },
      { name: "description", content: "Gates ETH Foundation empowers children with special needs, women, youth and armed forces through Project Jugnu, She Rises, The Next Chapeter  and Healing The Heroes." },
      { property: "og:title", content: "Gates ETH Foundation" },
      { property: "og:description", content: "Born in India. Serving communities with purpose." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <ImpactStats />
      <Programs />
      <Timeline />
      <SuccessStories />
      <Podcast />
      <DonateCTA />
    </SiteLayout>
  );
}
