import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 text-center">

        <h2 className="font-display text-5xl text-[var(--navy-deep)]">
          Every Child Deserves
          <span className="italic text-[var(--teal)]">
            {" "}An Opportunity To Shine
          </span>
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-[var(--muted-foreground)]">
          Join Project Jugnu in building a future where differences are
          respected, abilities are celebrated and inclusion becomes a way of
          life.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            to="/volunteer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--saffron)] px-7 py-3.5 font-semibold text-[var(--navy-deep)]"
          >
            Volunteer
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            to="/donate"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--navy-deep)] px-7 py-3.5 text-white"
          >
            <Heart className="h-4 w-4 text-[var(--saffron)]" />
            Donate
          </Link>

        </div>
      </div>
    </section>
  );
}