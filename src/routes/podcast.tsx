import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Podcast } from "@/components/sections/Podcast";

export const Route = createFileRoute("/podcast")({
  head: () => ({
    meta: [
      { title: "Voices of Change — Gates ETH Foundation Podcast" },
      { name: "description", content: "A podcast series featuring educators, mental health professionals, social workers, community leaders and changemakers." },
      { property: "og:title", content: "Voices of Change" },
      { property: "og:description", content: "Conversations that inspire impact." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <div className="pt-24">
        <Podcast />
      </div>
    </SiteLayout>
  ),
});
