import { Download } from "lucide-react";
import { Link } from "@tanstack/react-router";
const resources = [
  {
    title: "After Diagnosis",
    link: "/resources/after-diagnosis",
    description:
      "Guidance for families after receiving a diagnosis, including emotional support, next steps and available resources.",
  },
  {
    title: "Choosing Schools",
    link: "/resources/choosing-schools",
    description:
      "Understanding inclusive education, school options and admission support for children with disabilities.",
  },
  {
    title: "Therapy Guidance",
    link: "/resources/therapy-guidance",
    description:
      "Learn about speech therapy, occupational therapy, behavioural support and early intervention services.",
  },
  {
    title: "Daily Living Support",
    link: "/resources/daily-living-support",
    description:
      "Practical strategies for routines, communication, independence and everyday family life.",
  },
  {
    title: "Communication Tips",
    link: "/resources/communication-tips",
    description:
      "Tools and techniques to improve communication and social interaction skills.",
  },
  {
    title: "Behaviour Support",
    link: "/resources/behaviour-support",
    description:
      "Understanding behaviours, managing challenges and creating supportive environments.",
  },
  {
    title: "Parent Wellbeing",
    link: "/resources/parent-wellbeing",
    description:
      "Supporting caregiver mental health, resilience and family wellbeing.",
  },
 {
  title: "Government Schemes",
  link: "/resources/government-schemes",
  description:
    "Government benefits, pensions, UDID, Niramaya, legal guardianship and skill development schemes.",
},
{
  title: "Down Syndrome Guide",
  link: "/resources/down-syndrome-guide",
  description:
    "Understanding Down syndrome, therapies, schooling, government benefits and latest research.",
}
];

export default function ResourceCenter() {
  return (
    <section className="py-24 bg-[var(--secondary)]/40">
      <div className="mx-auto max-w-7xl px-4">

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex rounded-full bg-[var(--saffron-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--saffron)]">
            Parent Resource Centre
          </div>

          <h2 className="mt-6 font-display text-4xl md:text-5xl text-[var(--navy-deep)]">
            Resources For Families &
            <span className="italic text-[var(--teal)]">
              {" "}Caregivers
            </span>
          </h2>

          <p className="mt-6 text-[var(--muted-foreground)]">
            Practical guides, support materials and trusted information to help
            families navigate every stage of the journey.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="rounded-3xl bg-white border border-[var(--border)] p-8 shadow-elevated"
            >
              <h3 className="font-display text-xl text-[var(--navy-deep)]">
                {resource.title}
              </h3>

              <p className="mt-4 text-[var(--muted-foreground)]">
                {resource.description}
              </p>

              <Link
  to={resource.link}
  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--saffron)] px-5 py-2 text-sm font-semibold text-[var(--navy-deep)] hover:scale-105 transition-transform"
>
  <Download className="h-4 w-4" />
  Read Guide
</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}