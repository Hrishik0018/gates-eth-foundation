
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

import {
  BookOpen,
  Building2,
  Laptop,
  Users,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

import libraryHero from "@/assets/library-revival.png";


export const Route = createFileRoute("/public-library-revival")({
  component: PublicLibraryRevival,
});

function PublicLibraryRevival() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
  <img
    src={libraryHero}
    alt="Public Library Revival Mission"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)]/95 via-[var(--navy)]/80 to-[var(--teal)]/70" />

  <div className="relative mx-auto max-w-7xl px-6 py-32">
    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
      Gates ETH Foundation Initiative
    </span>

    <h1 className="mt-8 max-w-5xl font-display text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-[0.95]">
      Public Library
      <br />
      Revival Mission
    </h1>

    <p className="mt-8 max-w-3xl text-xl text-white/80 leading-relaxed">
      Reviving Libraries. Rebuilding Communities. Empowering India.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">
      <Link
        to="/volunteer"
        className="rounded-full bg-[var(--saffron)] px-8 py-4 font-semibold text-[var(--navy-deep)] hover:scale-105 transition"
      >
        Become a Volunteer
      </Link>

      <Link
        to="/contact"
        className="rounded-full border border-white/20 bg-white/10 backdrop-blur px-8 py-4 font-semibold text-white"
      >
        Partner With Us
      </Link>
    </div>
  </div>

  {/* Floating Stats */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">
    <div className="grid md:grid-cols-3 gap-5">
      <div className="rounded-3xl bg-white p-8 shadow-elevated">
        <div className="text-4xl font-bold text-[var(--teal)]">1000+</div>
        <div className="mt-2 text-slate-600">
          Libraries Revived by 2035
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-elevated">
        <div className="text-4xl font-bold text-[var(--teal)]">
          Millions
        </div>
        <div className="mt-2 text-slate-600">
          Citizens Impacted
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-elevated">
        <div className="text-4xl font-bold text-[var(--teal)]">
          Digital
        </div>
        <div className="mt-2 text-slate-600">
          Learning Hubs Nationwide
        </div>
      </div>
    </div>
  </div>
</section>



      {/* INTRO */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl text-[var(--navy-deep)]">
                Why Public Libraries Matter
              </h2>

              <p className="mt-6 text-slate-600 leading-relaxed">
                Libraries are far more than buildings filled with books. They
                are gateways to knowledge, opportunity, culture, creativity,
                lifelong learning and community engagement.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Across India, thousands of public libraries struggle with poor
                infrastructure, outdated collections, limited digital
                resources, inadequate maintenance and declining public
                participation. Millions of citizens are being deprived of one
                of society's most valuable public assets.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-3xl bg-slate-50 p-6">
                <BookOpen className="h-8 w-8 text-[var(--teal)]" />
                <h3 className="mt-4 font-semibold">Literacy</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Building reading habits and educational access.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-6">
                <Laptop className="h-8 w-8 text-[var(--teal)]" />
                <h3 className="mt-4 font-semibold">Digital Access</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Technology-enabled learning opportunities.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-6">
                <Users className="h-8 w-8 text-[var(--teal)]" />
                <h3 className="mt-4 font-semibold">Community</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Safe spaces for engagement and collaboration.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-6">
                <GraduationCap className="h-8 w-8 text-[var(--teal)]" />
                <h3 className="mt-4 font-semibold">Lifelong Learning</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Learning opportunities for every generation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-4xl text-[var(--navy-deep)]">
            Our Vision
          </h2>

          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            To revive, modernize and sustain public libraries across India
            through collaborative partnerships with municipal corporations,
            government institutions, educational organizations, corporate
            partners, philanthropists and local communities.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-4xl text-[var(--navy-deep)]">
            Our Mission
          </h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Restore and renovate public libraries",
              "Create digital learning hubs",
              "Promote reading culture",
              "Support lifelong learning",
              "Increase accessibility",
              "Host educational programs",
              "Encourage volunteering",
              "Strengthen communities",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 p-6 bg-white"
              >
                <p className="font-medium text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIARIES */}
      <section className="bg-slate-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-4xl">
            Creating Impact Across Generations
          </h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-xl">Children</h3>
              <p className="mt-3 text-white/70">
                Literacy, imagination, storytelling and academic support.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">Youth</h3>
              <p className="mt-3 text-white/70">
                Skill development, exam preparation and innovation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">Adults</h3>
              <p className="mt-3 text-white/70">
                Professional growth and continuous learning.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">Senior Citizens</h3>
              <p className="mt-3 text-white/70">
                Intellectual engagement and social participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-4xl text-[var(--navy-deep)]">
            Partnership Opportunities
          </h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-slate-50 p-8">
              <Building2 className="h-8 w-8 text-[var(--teal)]" />
              <h3 className="mt-4 font-semibold">
                Government Bodies
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Infrastructure support and policy collaboration.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8">
              <Users className="h-8 w-8 text-[var(--teal)]" />
              <h3 className="mt-4 font-semibold">
                Corporate Partners
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                CSR investments and digital transformation.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8">
              <GraduationCap className="h-8 w-8 text-[var(--teal)]" />
              <h3 className="mt-4 font-semibold">
                Educational Institutions
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Volunteers, expertise and collaborative programs.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8">
              <HeartHandshake className="h-8 w-8 text-[var(--teal)]" />
              <h3 className="mt-4 font-semibold">
                Citizens & Volunteers
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Book donations, mentoring and literacy advocacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-[var(--teal-soft)] py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-display text-4xl text-[var(--navy-deep)]">
            Vision 2035
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold text-[var(--teal)]">
                1,000+
              </div>
              <p className="mt-3 text-slate-600">
                Libraries revived and modernized
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-[var(--teal)]">
                Millions
              </div>
              <p className="mt-3 text-slate-600">
                Citizens impacted through learning access
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-[var(--teal)]">
                Nationwide
              </div>
              <p className="mt-3 text-slate-600">
                Network of community knowledge hubs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      
<section className="relative overflow-hidden bg-[var(--navy-deep)] py-28">
  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,var(--teal),transparent_40%)]" />

  <div className="relative mx-auto max-w-5xl px-6 text-center">
    <h2 className="font-display text-5xl md:text-6xl text-white">
      Join The Movement
    </h2>

    <p className="mt-6 text-lg text-white/70 max-w-3xl mx-auto">
      Every library revived strengthens a community.
      Every partnership expands access to knowledge.
      Every volunteer helps shape a stronger India.
    </p>

    <div className="mt-12 flex justify-center">
  <Link
    to="/volunteer"
    className="inline-flex items-center gap-3 rounded-full bg-[var(--saffron)] px-8 py-4 text-lg font-semibold text-[var(--navy-deep)] shadow-elevated hover:scale-105 transition-all"
  >
    Become a Volunteer
    <ArrowRight className="h-5 w-5" />
  </Link>
</div>
  </div>
</section>


    </div>
  );
}

