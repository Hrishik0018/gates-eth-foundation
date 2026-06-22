import React, { useState } from 'react';
import { createFileRoute, Link } from "@tanstack/react-router";
import ResourceHubNavigation from "../../components/ResourceHubNavigation";
export const Route = createFileRoute("/resources/choosing-schools")({
  component: ChoosingSchools,
});
// SEO Metadata for reference:
// Title: Choosing the Right School for Autism in India | Project Jugnu
// Description: Navigating school options for special needs in India. Explore inclusive education under the RTE Act, shadow schooling, special schools, and NIOS guidelines.

interface SchoolTypeCardProps {
  title: string;
  badge: string;
  description: string;
  pros: string[];
  cons: string[];
  suitability: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function ChoosingSchools() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schoolTypes: SchoolTypeCardProps[] = [
    {
      title: "Mainstream / Inclusive Schools",
      badge: "CBSE / ICSE / State Boards",
      description: "Regular educational environments that integrate neurodivergent students alongside neurotypical peers, providing reasonable accommodations.",
      pros: [
        "High levels of social immersion and peer-to-peer modeling.",
        "Access to standard academic curricula and wide-scale certifications.",
        "Mandated by Indian law to prevent institutional discrimination."
      ],
      cons: [
        "Large classroom sizes (often 40+ students in India) causing sensory overload.",
        "General educators may lack specialized behavioral or neurodivergence training.",
        "High academic competitive pressure starting from Class 5."
      ],
      suitability: "Children with strong baseline functional communication, mild sensory profiles, or those who benefit heavily from peer observation."
    },
    {
      title: "Shadow Support Mainstreaming",
      badge: "Hybrid Model",
      description: "The child attends a mainstream school accompanied by a trained professional (Shadow Teacher) who aids in behavioral regulation, translation, and focus.",
      pros: [
        "Provides an immediate real-time safety net in overwhelming environments.",
        "Bridges the communication gap between the child and the principal educator.",
        "Allows individual modifications of the fast-paced general curriculum."
      ],
      cons: [
        "Highly expensive; the salary of the shadow teacher is completely funded by the parent.",
        "Can sometimes inadvertently create peer isolation if the shadow is overly hovering.",
        "Finding trained, empathetic shadow teachers in Tier-2/3 Indian cities is difficult."
      ],
      suitability: "Children transitioning from intensive 1-on-1 therapies into a group social structure who need support to stay regulated."
    },
    {
      title: "Special Education Schools",
      badge: "Dedicated Remedial Centers",
      description: "Exclusively designed facilities tailored for neurodivergent individuals, prioritizing life skills, functional literacy, and adaptive therapies.",
      pros: [
        "Extremely low student-to-teacher ratios (often 4:1 or 2:1).",
        "Sensory-friendly infrastructure (calm zones, soft lighting, structured layout).",
        "Therapies (OT, Speech) are often integrated into the actual school day."
      ],
      cons: [
        "Minimal interaction with neurotypical social models.",
        "The curriculum may not lead to conventional board certifications (Class 10/12).",
        "Fewer options available locally once the child reaches adulthood (post-18)."
      ],
      suitability: "Children with high-support needs, non-verbal profiles requiring robust alternative communication systems, or extreme sensory anxiety."
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "Can a private school legally refuse to admit my autistic child?",
      answer: "No. Under Section 3 of the Right to Education (RTE) Act, 2009, and the Rights of Persons with Disabilities (RPwD) Act, 2016, no recognized educational institution in India can deny admission based on a child's disability. Doing so constitutes discrimination. Private schools also have a obligation to accommodate special needs under the 25% economically weaker and disadvantaged groups quota if applicable."
    },
    {
      question: "What is NIOS, and how does it help neurodivergent children?",
      answer: "The National Institute of Open Schooling (NIOS) is an autonomous government board under the Ministry of Education. It offers an Open Basic Education (OBE) program split into Levels A, B, and C (equivalent to classes 3, 5, and 8) and secondary options. It allows students to study at their own pace, select highly flexible subject combinations (e.g., dropping complex mathematics for painting or data entry), and grants extended time and scribes during exams."
    },
    {
      question: "What specific accommodations can I request from a CBSE school board?",
      answer: "CBSE provides excellent, explicit concessions for children with benchmark disabilities. You can formally apply for: an adult prompter or student scribe from a lower class, 20 extra minutes per hour of examination time, exemption from the mandatory third language rule, and the choice of alternative practical-oriented subjects instead of heavy theoretical ones."
    },
    {
      question: "How do I evaluate if a school is genuinely inclusive or just saying so?",
      answer: "Don't just look at their brochures. Ask the management directly: How many special educators do you have on the direct payroll? Do you allow external shadow teachers? Where is your sensory calm-down room? Speak to other special-needs parents in that specific school to understand if the environment is genuinely supportive or merely compliant on paper."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4 sm:px-6 lg:px-8 text-center shadow-md">
        <div className="max-w-4xl mx-auto">
          <span className="bg-blue-400 text-blue-950 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full">
            Project Jugnu • Resource Guide 2
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Mapping the Classroom: Choosing the Right Educational Path
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed">
            Every child blooms in a different climate. Understand the landscape of Indian schools, your legal rights, and alternative open schooling options.
          </p>
        </div>
      </header>

      {/* Main Grid Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Core Narrative Content */}
        <article className="lg:col-span-2 space-y-12 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100">
          
          {/* Legal Framework Section */}
          <section className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-blue-100 pb-2 mb-4">
              1. The Legal Shield: Educational Rights in India
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              In India, education is not a favor granted by a school administration; it is a fundamental right guaranteed by the constitution. As a parent, knowing the law prevents school management from forcing your child out under the guise of &quot;not having resources.&quot;
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 bg-blue-50 border-t-4 border-blue-500 rounded-b-lg">
                <h4 className="font-bold text-blue-9ate-900 text-sm mb-1">RTE Act (2009) Amendment 2012</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Explicitly includes children with disabilities within the definition of the &quot;disadvantaged group&quot;. Mandates a strict **Zero-Rejection Policy** for admission in neighborhood schools.
                </p>
              </div>
              <div className="p-4 bg-indigo-50 border-t-4 border-indigo-500 rounded-b-lg">
                <h4 className="font-bold text-indigo-900 text-sm mb-1">RPwD Act (2016) Section 16</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Compels all government-funded and recognized educational institutions to provide **inclusive education**. This includes making the physical infrastructure accessible and offering personalized, reasonable modifications.
                </p>
              </div>
            </div>
          </section>

          {/* Schooling Options Framework */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-blue-100 pb-2 mb-2">
              2. Evaluating the Paradigms of Schooling
            </h2>
            <p className="text-slate-600 text-sm">
              There is no universal &quot;best school.&quot; The right environment depends on balancing your child&apos;s academic capability with their emotional and sensory resilience.
            </p>

            {schoolTypes.map((type, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-5 hover:border-blue-300 transition-colors bg-slate-50/50">
                <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                  <h3 className="text-lg font-bold text-slate-900">{type.title}</h3>
                  <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md">{type.badge}</span>
                </div>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{type.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
                  <div>
                    <h5 className="font-bold text-emerald-700 mb-1.5">✓ Strengths &amp; Benefits:</h5>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600">
                      {type.pros.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-rose-700 mb-1.5">✗ Core Challenges:</h5>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600">
                      {type.cons.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs">
                  <span className="font-bold text-slate-800">Ideal For: </span>
                  <span className="text-slate-600">{type.suitability}</span>
                </div>
              </div>
            ))}
          </section>

          {/* Alternative Pathway: NIOS */}
          <section className="bg-slate-900 text-slate-100 p-6 sm:p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-bold font-mono select-none">NIOS</div>
            <h2 className="text-xl font-bold text-amber-400 mb-3">
              3. The NIOS Pathway: Complete Curricular Flexibility
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              If traditional boards create severe emotional anxiety or become unmanageable due to rigid multi-language and abstract theory demands, the **National Institute of Open Schooling (NIOS)** offers an empowering, government-accredited escape route.
            </p>
            <div className="space-y-3 text-xs text-slate-300">
              <p><strong className="text-white">Open Basic Education (OBE):</strong> Designed for elementary levels, letting kids take assessments locally via registered NGOs or special schools acting as Accredited Institutions (AIs).</p>
              <p><strong className="text-white">Subject Customization:</strong> A student can choose only five subjects to clear Class 10. They can combine easy functional tracks like Data Entry Operations, Bakery &amp; Confectionery, Home Science, or Painting.</p>
              <p><strong className="text-white">Exam Accommodations:</strong> Includes 20 mins per hour extra time, permission for interactive computer screens, standalone quiet rooms, and highly relaxed evaluation parameters.</p>
            </div>
          </section>

          {/* FAQs Accordion */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-blue-100 pb-2 mb-6">
              Schooling &amp; Admission FAQs
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left font-semibold text-slate-900 p-4 bg-slate-50 hover:bg-slate-100 flex justify-between items-center transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-blue-600 font-bold">{openFaq === index ? '−' : '+'}</span>
                  </button>
                  {openFaq === index && (
                    <div className="p-4 text-slate-600 text-sm border-t border-slate-200 leading-relaxed bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </article>

        {/* Sidebar Panel */}
        <aside className="space-y-8">
          
          {/* Action Step Framework */}
          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold mb-3">The School Interview Portfolio</h3>
            <p className="text-xs text-blue-100 mb-4">
              When visiting schools, compile this standard portfolio to show structure and demand appropriate support:
            </p>
            <ul className="space-y-3 text-xs text-blue-50">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>**Official UDID Card** / Disability Certificate copy.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>**Latest Pediatrician Developmental Profile** outlining cognitive strengths.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>**Functional Communication Log** detailing how your child indicates needs (e.g., gestures, PECS, words).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>**Sensory Triggers Inventory** listing explicit items to avoid (e.g., loud electric bells, sudden flashing lights).</span>
              </li>
            </ul>
          </div>

          {/* Quick Assessment Framework */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
            <h3 className="text-base font-bold text-slate-900">Red Flags to Watch For</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Be cautious of schools that exhibit these behaviors during initial interactions:
            </p>
            <div className="text-xs space-y-2 text-slate-600">
              <p className="p-2 bg-rose-50 rounded text-rose-900">⚠️ Requesting you to drop your child back home before lunchtime permanently.</p>
              <p className="p-2 bg-rose-50 rounded text-rose-900">⚠️ Forcing you to clear exams without any documented extra time or scribe support.</p>
              <p className="p-2 bg-rose-50 rounded text-rose-900">⚠️ Charging arbitrary premium &quot;add-on developmental fees&quot; over regular tuition charts.</p>
            </div>
          </div>

          {/* Index Tracker */}
    

        </aside>

      </main>
      
              <ResourceHubNavigation currentPage="/resources/choosing-schools" />
      {/* Footer Branded Layout */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 border-t border-slate-800 text-center text-xs mt-16">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="text-slate-300 font-medium text-sm">Project Jugnu — Lighting paths for unique minds.</p>
          <p>Legal summaries provided here are for advocacy education. For statutory filing or legal representation against school discrimination, please contact state disability court commissioners or legal aid cells.</p>
          <p className="pt-4 text-slate-600">&copy; 2026 Project Jugnu Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}