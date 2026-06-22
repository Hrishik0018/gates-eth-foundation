import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { X } from "lucide-react";
import women from "@/assets/hero-women.png";
import youth from "@/assets/youth.jpg";
import forces from "@/assets/forces.jpg";
import community from "@/assets/community-image.png";
import volunteers from "@/assets/volunteers.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Gates ETH Foundation" },
      { name: "description", content: "Stories, events, initiatives and community impact from Gates ETH Foundation and its flagship programs." },
      { property: "og:title", content: "Gallery — Gates ETH" },
      { property: "og:description", content: "Stories of Impact.Moments of Change. Explore moments from Project Jugnu, She Rises, The Next Chapter , Healing The Heroes and community initiatives that continue to create meaningful impact." },
      { property: "og:image", content: women },
    ],
  }),
  component: Gallery,
});

const CATEGORIES = [
  "All",
  "Project Jugnu",
  "She Rises",
  "The Next Chapter ",
  "Healing The Heroes",
  "Awards & Recognition",
  "Community Events",
] as const;

const tiles = [
  {
    src: "/gallery/1.jpg",
    alt: "Women Leadership Workshop",
    cat: "She Rises",
  },

  {
    src: "/gallery/2.jpg",
    alt: "Inclusive Learning Session",
    cat: "The Next Chapter ",
  },

  {
    src: "/gallery/3.jpg",
    alt: "Person of the Year",
    cat: "Awards & Recognition",
  },

  {
    src: "/gallery/4.jpg",
    alt: "Women Leadership Workshop",
    cat: "She Rises",
  },

  {
    src: "/gallery/5.jpg",
    alt: "Mental Wellness Awareness Session",
    cat: "Community Events",
  },

  {
    src: "/gallery/6.jpg",
    alt: "Women Leadership Workshop",
    cat: "She Rises",
  },
  {
    src: "/gallery/7.jpg",
    alt: "Mental Wellness Awareness Session",
    cat: "Healing The Heroes",
  },
  {
    src: "/gallery/8.jpg",
    alt: "Mental Wellness Awareness Session",
    cat: "Community Events",
  },
  {
    src: "/gallery/9.jpg",
    alt: "Mental Wellness Awareness Session",
    cat: "Community Events",
  },
  {
    src: "/gallery/10.jpg",
    alt: "Mental Wellness Awareness Session",
    cat: "Healing The Heroes",
  },
  {
    src: "/gallery/11.jpg",
    alt: "Person of the Year",
    cat: "Awards & Recognition",
  },

  {
    src: "/gallery/12.jpg",
   alt: "Women Leadership Workshop",
    cat: "She Rises",
  },

  {
    src: "/gallery/13.jpg",
    alt: "Awards ",
    cat: "Person of the Year",
  },

  {
    src: "/gallery/14.jpg",
   alt: "Person of the Year",
    cat: "Awards & Recognition",
  },

  {
    src: "/gallery/15.jpg",
   alt: "Women Leadership Workshop",
    cat: "She Rises",
  },

  {
    src: "/gallery/16.jpg",
    alt: "Mental Wellness Awareness Session",
    cat: "Healing The Heroes",
  },
  {
    src: "/gallery/17.jpg",
    alt: "Jugnu Utsav Art Exhibition",
    cat: "Project Jugnu",
  },
  {
    src: "/gallery/18.jpg",
    alt: "Awards ",
    cat: "Person of the Year",
  },
  {
    src: "/gallery/19.jpg",
    alt: "Mental Wellness Awareness Session",
   cat: "Community Events",
  },
  {
    src: "/gallery/20.jpg",
    alt: "Women Leadership Workshop",
    cat: "She Rises",
  },
  {
    src: "/gallery/21.jpg",
   alt: "Mental Wellness Awareness Session",
    cat: "Community Events",
  },

  {
    src: "/gallery/22.jpg",
    alt: "Mental Wellness Awareness Session",
    cat: "Healing The Heroes",
  },

  {
    src: "/gallery/23.jpg",
    alt: "Women Leadership Workshop",
    cat: "She Rises",
  },

  {
    src: "/gallery/24.jpg",
    alt: "Mental Wellness Awareness Session",
    cat: "Healing The Heroes",
  },

  {
    src: "/gallery/25.jpg",
    alt: "Person of the Year",
    cat: "Awards & Recognition",
  },

  {
    src: "/gallery/26.jpg",
    alt: "Mental Wellness Awareness Session",
    cat: "Community Events",
  },
  {
    src: "/gallery/27.jpg",
    alt: "Person of the Year",
    cat: "Awards & Recognition",
  },
  {
    src: "/gallery/28.jpg",
    alt: "Person of the Year",
    cat: "Awards & Recognition",
  },
  {
    src: "/gallery/29.jpg",
    alt: "Mental Wellness Awareness Session",
    cat: "Healing The Heroes",
  },
  {
    src: "/gallery/30.jpg",
    alt: "Awards ",
    cat: "Person of the Year",
  },
];
<section className="py-10">
  <div className="mx-auto max-w-7xl px-4">
    <div className="rounded-3xl bg-[var(--navy-deep)] text-white p-8 text-center">
      <h2 className="font-display text-3xl">
        Every Picture Tells A Story
      </h2>

      <p className="mt-3 text-white/70 max-w-2xl mx-auto">
        Behind every image is a child discovering confidence,
        a woman gaining independence, a young person learning
        new skills or a community coming together to create change.
      </p>
    </div>
  </div>
</section>

function Gallery() {
  const [active, setActive] = useState<typeof CATEGORIES[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(() => (active === "All" ? tiles : tiles.filter((t) => t.cat === active)), [active]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? null : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, filtered.length]);

  return (
    <SiteLayout>
      <section className="relative pt-36 pb-12 gradient-hero">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/90">Media & Gallery</div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-medium text-white leading-[1.02]">
              Moments from <span className="text-gradient-warm italic">the field</span>.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === c ? "bg-[var(--navy-deep)] text-white" : "bg-[var(--secondary)] text-[var(--navy-deep)] hover:bg-[var(--teal-soft)]/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((t, i) => (
              <motion.button
                key={`${t.alt}-${i}`}
                onClick={() => setLightbox(i)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                className="relative overflow-hidden rounded-2xl shadow-elevated group aspect-[4/3]"
              >
                <img src={t.src} alt={t.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[var(--navy-deep)]/90 to-transparent text-left">
                  <div className="text-[10px] uppercase tracking-widest text-[var(--saffron)]">{t.cat}</div>
                  <div className="text-xs font-semibold text-white">{t.alt}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/85 grid place-items-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button onClick={(e) => { e.stopPropagation(); setLightbox(null); }} className="absolute top-5 right-5 grid place-items-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}
              src={filtered[lightbox].src} alt={filtered[lightbox].alt}
              className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 inset-x-0 text-center text-white/80 text-sm">
              <span className="text-[var(--saffron)] uppercase tracking-widest text-[10px]">{filtered[lightbox].cat}</span>
              <div className="font-semibold">{filtered[lightbox].alt}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}
