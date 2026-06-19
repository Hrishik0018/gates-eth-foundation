import { ArrowDown } from "lucide-react";

const steps = [
  "Awareness",
  "Identification",
  "Parent Support",
  "Resource Access",
  "Education",
  "Skill Development",
  "Community Inclusion",
  "Recognition",
];

export default function JugnuEcosystem() {
  return (
    <section className="py-24 bg-[var(--secondary)]/40">
      <div className="mx-auto max-w-7xl px-4">

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex rounded-full bg-[var(--saffron-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--saffron)]">
            The Jugnu Ecosystem
          </div>

          <h2 className="mt-6 font-display text-4xl md:text-5xl text-[var(--navy-deep)]">
            Supporting Every Step
            <span className="italic text-[var(--teal)]">
              {" "}Of The Journey
            </span>
          </h2>

          <p className="mt-6 text-[var(--muted-foreground)]">
            Project Jugnu is designed as a complete support ecosystem that
            connects awareness, resources, education, inclusion and
            recognition.
          </p>
        </div>

        <div className="mt-20 flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center">
              <div className="rounded-2xl bg-white border border-[var(--border)] shadow-elevated px-8 py-5 min-w-[260px] text-center">
                <h3 className="font-display text-xl text-[var(--navy-deep)]">
                  {step}
                </h3>
              </div>

              {index !== steps.length - 1 && (
                <ArrowDown className="my-4 text-[var(--teal)] h-6 w-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
