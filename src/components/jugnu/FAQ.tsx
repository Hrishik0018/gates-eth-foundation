import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Autism?",
    a: "Autism Spectrum Disorder is a developmental condition affecting communication, behaviour and social interaction.",
  },
  {
    q: "What is a UDID Card?",
    a: "A Unique Disability ID card issued by the Government of India to access benefits and services.",
  },
  {
    q: "How can my child participate in Project Jugnu?",
    a: "Families can contact us directly to learn about upcoming activities, programs and events.",
  },
  {
    q: "Can I volunteer?",
    a: "Yes. Volunteers can contribute through events, awareness initiatives and support activities.",
  },
  {
    q: "Does Project Jugnu help with government schemes?",
    a: "Yes. We aim to provide information and guidance regarding available benefits and entitlements.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4">

        <div className="text-center">
          <h2 className="font-display text-4xl md:text-5xl text-[var(--navy-deep)]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-[var(--border)] bg-white overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-[var(--navy-deep)]">
                  {faq.q}
                </span>

                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-[var(--muted-foreground)]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}