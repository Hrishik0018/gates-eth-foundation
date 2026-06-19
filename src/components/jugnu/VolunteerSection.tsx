import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const opportunities = [
  {
    title: "Event Support",
    description:
      "Help organize and manage Jugnu Utsav and community inclusion events.",
  },
  {
    title: "Child Support",
    description:
      "Assist children during activities, workshops and engagement programs.",
  },
  {
    title: "Resource Assistance",
    description:
      "Support families in accessing information and guidance resources.",
  },
  {
    title: "Photography & Media",
    description:
      "Capture stories, moments and achievements that inspire inclusion.",
  },
  {
    title: "Awareness Campaigns",
    description:
      "Promote awareness and acceptance within communities and institutions.",
  },
  {
    title: "Accessibility Support",
    description:
      "Help create welcoming and inclusive environments for all participants.",
  },
];

export default function VolunteerSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex rounded-full bg-[var(--saffron-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--saffron)]">
            Volunteer Opportunities
          </div>

          <h2 className="mt-6 font-display text-4xl md:text-5xl text-[var(--navy-deep)]">
            Become Part Of The
            <span className="italic text-[var(--teal)]">
              {" "}Jugnu Movement
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-elevated"
            >
              <h3 className="font-display text-xl text-[var(--navy-deep)]">
                {item.title}
              </h3>

              <p className="mt-4 text-[var(--muted-foreground)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/volunteer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--saffron)] px-7 py-3.5 font-semibold text-[var(--navy-deep)]"
          >
            Become A Volunteer
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}