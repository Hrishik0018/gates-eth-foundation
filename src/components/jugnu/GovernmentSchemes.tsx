const schemes = [
  {
    title: "Disability Certificate",
    description:
      "An official disability certificate issued by authorized medical authorities. It enables access to reservations, concessions, financial assistance, scholarships and various government welfare programs.",
  },
  {
    title: "UDID Card",
    description:
      "The Unique Disability ID (UDID) Card provides a single national identity for persons with disabilities and simplifies access to benefits, services and schemes across India.",
  },
  {
    title: "RPWD Act 2016",
    description:
      "The Rights of Persons with Disabilities Act, 2016 protects the legal rights of persons with disabilities and promotes equal opportunities in education, employment and community participation.",
  },
  {
    title: "Niramaya Health Insurance",
    description:
      "A health insurance scheme that supports individuals with autism, cerebral palsy, intellectual disabilities and multiple disabilities by covering medical and therapeutic expenses.",
  },
  {
    title: "Scholarships",
    description:
      "Various central and state government scholarships are available to support the education of children and young adults with disabilities from school through higher education.",
  },
  {
    title: "Disability Pension",
    description:
      "Eligible persons with disabilities may receive monthly financial assistance through state disability pension schemes to support independent and dignified living.",
  },
  {
    title: "Legal Guardianship Support",
    description:
      "Under provisions of the National Trust Act, families can access legal guardianship support for individuals with autism and developmental disabilities when required.",
  },
  {
    title: "Skill Development Programs",
    description:
      "Government-supported vocational training and skill development initiatives help individuals with disabilities build employment skills, independence and livelihood opportunities.",
  },
];

export default function GovernmentSchemes() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">

        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex rounded-full bg-[var(--saffron-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--saffron)]">
            Government Schemes & Benefits
          </div>

          <h2 className="mt-6 font-display text-4xl md:text-5xl text-[var(--navy-deep)]">
            Access Rights,
            <span className="italic text-[var(--teal)]">
              {" "}Benefits & Support
            </span>
          </h2>

          <p className="mt-6 text-[var(--muted-foreground)]">
            Helping families understand and access government schemes,
            legal protections, healthcare support and financial assistance
            available for children and individuals with disabilities.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {schemes.map((scheme) => (
            <div
              key={scheme.title}
              className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-display text-lg text-[var(--navy-deep)]">
                {scheme.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                {scheme.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}