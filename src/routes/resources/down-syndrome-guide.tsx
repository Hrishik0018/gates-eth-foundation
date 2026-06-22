import React, { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import ResourceHubNavigation from "../../components/ResourceHubNavigation";
import { 
  FileText, 
  CreditCard, 
  HeartHandshake, 
  Award, 
  Briefcase, 
  Building2, 
  ShieldAlert, 
  Scale, 
  Users, 
  CheckSquare, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  ExternalLink, 
  Phone, 
  Mail, 
  MapPin, 
  Layers, 
  Heart, 
  Info, 
  BookOpen, 
  Compass, 
  Activity, 
  CheckCircle, 
  AlertTriangle,
  Lightbulb,
  Stethoscope,
  GraduationCap
} from "lucide-react";

export const Route = createFileRoute("/resources/down-syndrome-guide")({
  component: DownSyndromeGuide,
});

export default function DownSyndromeGuide() {
  // Accordion state management for FAQ section
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Interactive Checklist State Management
  const [checklist, setChecklist] = useState({
    medicalAssessment: false,
    therapyPlan: false,
    schoolPlacement: false,
    governmentDocs: false,
    financialTrust: false,
    adultTransition: false,
  });

  const toggleChecklist = (key: keyof typeof checklist) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* Top Advisory Banner */}
      <div className="bg-gradient-to-r from-purple-800 via-indigo-900 to-indigo-950 px-4 py-2 text-center text-xs font-semibold tracking-wide text-white md:text-sm">
        💡 Certified Developmental Resource updated as per latest Indian Academy of Pediatrics (IAP) clinical guidelines.
      </div>

      {/* Hero Header Section */}
      <header className="relative border-b-4 border-amber-500 bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 py-16 text-white md:py-24">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-300 border border-purple-500/30">
              <Award className="h-3.5 w-3.5 text-purple-400" /> Project Jugnu • Resource Guide 9
            </span>
            <h1 className="max-w-4xl font-serif text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-slate-100">
              Understanding Down Syndrome: <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-amber-300">
                A Complete Parent & Caregiver Guide
              </span>
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
              Empowering Indian families with a deep, compassionate, and clinically grounded roadmap covering genetic variations, developmental milestones, therapy protocols, educational integration, and legal rights.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#action-checklist" className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-purple-500 hover:shadow-purple-900/20 active:scale-98">
                <CheckSquare className="h-4 w-4" /> Action Checklist
              </a>
              <a href="#research-horizon" className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-5 py-3 text-sm font-bold text-slate-200 border border-slate-700 transition-all hover:bg-slate-700">
                <Activity className="h-4 w-4 text-purple-400" /> CRISPR Research Update
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Structural Layout */}
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Main Content Area */}
          <main className="space-y-16 lg:col-span-8">
            
            {/* Section 1: What is Down Syndrome? */}
            <section id="basics" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-purple-600 p-2.5 text-white shadow-md shadow-purple-600/10">
                  <Info className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-purple-600">Module 01</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">What is Down Syndrome?</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  Down Syndrome is a naturally occurring genetic chromosomal variation that has been part of the human condition for millennia. It is characterized by the presence of an extra copy of <strong>Chromosome 21</strong>, which alters the course of typical physical and cognitive development. It is crucial to understand that Down Syndrome is not an illness, a disease, or a dynamic that requires a "cure" to restore humanity—it is a genetic state that shapes how an individual experiences, learns from, and interacts with the world.
                </p>

                {/* Destigmatizing Visual-Style Cards */}
                <div className="grid gap-4 sm:grid-cols-3 mt-6">
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-content-center rounded-lg bg-rose-50 text-rose-600 mb-3">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Not Caused by Parenting</h4>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      Down Syndrome is determined at conception. It is entirely unrelated to parental actions, lifestyle choices, dietary habits, or maternal emotional states during pregnancy.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-content-center rounded-lg bg-teal-50 text-teal-600 mb-3">
                      <ShieldAlert className="h-5 w-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Not Contagious</h4>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      As a non-communicable chromosomal variation present in the child's cellular DNA from inception, Down Syndrome cannot be caught, passed on, or spread.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-content-center rounded-lg bg-blue-50 text-blue-600 mb-3">
                      <Heart className="h-5 w-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">A Human Variation</h4>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      While it introduces specific physical characteristics and cognitive learning structures, individuals with Down Syndrome are unique people with diverse personalities, talents, and capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Why Does Down Syndrome Happen? */}
            <section id="genetics" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-indigo-600 p-2.5 text-white shadow-md shadow-indigo-600/10">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Module 02</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">The Genetics of Chromosome 21</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  To understand the biology of Down Syndrome, we must look at cellular division. Typically, a human cell contains 23 pairs of chromosomes, totaling 46. One-half of each pair is inherited from the mother, and the other half from the father. 
                </p>
                <p>
                  In Down Syndrome, an error in early cell division results in the cell developing <strong>three copies of Chromosome 21</strong> instead of the standard two. This extra genetic material is present in some or all of the individual's cells. 
                </p>

                <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-5">
                  <h4 className="font-serif text-lg font-bold text-indigo-950 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-indigo-600" /> Defining the Extra Genetic Material
                  </h4>
                  <p className="mt-2 text-sm text-indigo-900/90 leading-relaxed">
                    Think of chromosomes as instruction manuals for cell development. Having an extra copy of Chromosome 21 is like having an extra set of instructions. This duplicates certain proteins and genetic messages, which changes how typical physical traits, neurological pathways, and physiological networks are built.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Types of Down Syndrome */}
            <section id="types" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-purple-700 p-2.5 text-white shadow-md shadow-purple-700/10">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-purple-700">Module 03</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Types of Down Syndrome</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  Down Syndrome manifest in three distinct chromosomal forms, each arising from a different pattern of genetic replication in early development:
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                  {/* Trisomy 21 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-2 py-0.5 rounded">95% of Cases</span>
                    <h4 className="mt-3 font-bold text-slate-900">Standard Trisomy 21</h4>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      Caused by non-disjunction, where a pair of Chromosome 21 fails to separate properly during egg or sperm cell division. Every cell in the body contains an extra 21st chromosome.
                    </p>
                  </div>

                  {/* Mosaic Down Syndrome */}
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-0.5 rounded">1-2% of Cases</span>
                    <h4 className="mt-3 font-bold text-slate-900">Mosaic Down Syndrome</h4>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      Occurs when the error in cell division happens *after* fertilization. This results in a mix of cells—some have the typical 46 chromosomes, while others have 47. Individuals with mosaicism may show fewer physical and cognitive traits of the condition.
                    </p>
                  </div>

                  {/* Translocation Down Syndrome */}
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-2 py-0.5 rounded">3-4% of Cases</span>
                    <h4 className="mt-3 font-bold text-slate-900">Translocation Down Syndrome</h4>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      Occurs when part of Chromosome 21 breaks off during cell division and attaches (translocates) to another chromosome (typically Chromosome 14). This is the only form of Down Syndrome that can be hereditary.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Early Signs and Diagnosis */}
            <section id="diagnosis" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-blue-600 p-2.5 text-white shadow-md shadow-blue-600/10">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Module 04</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Early Signs and Diagnostics</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  The diagnosis of Down Syndrome can occur either during pregnancy through screening and diagnostic testing, or shortly after birth through physical evaluation and genetic verification.
                </p>

                <h3 className="text-xl font-bold text-slate-900">Recognizing Physical Characteristics & Early Signs</h3>
                <p>
                  At birth, infants with Down Syndrome often present with specific physical traits, including a slightly flattened facial profile, an upward slant to the eyes (epicanthal folds), a single deep crease across the palm (palmar crease), a slightly enlarged tongue, and decreased muscle tone (<strong>hypotonia</strong>).
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h5 className="font-bold text-slate-900 text-sm">1. Prenatal Screening</h5>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      Non-invasive screening options include maternal serum tests (Double or Quadruple Marker) and ultrasound scans (measuring Nuchal Translucency, or NT). More advanced screenings include Non-Invasive Prenatal Testing (NIPT), which analyzes cell-free fetal DNA in the mother's blood.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h5 className="font-bold text-slate-900 text-sm">2. Diagnostic Testing</h5>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      To confirm a positive screening result, diagnostic tests such as Chorionic Villus Sampling (CVS, performed at 10-13 weeks) or Amniocentesis (performed at 15-20 weeks) are recommended to analyze the fetal karyotype directly.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h5 className="font-bold text-slate-900 text-sm">3. Postnatal Verification</h5>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      If Down Syndrome is suspected at birth, a neonatologist or pediatrician will order a blood test called a <strong>karyotype analysis</strong>. This test maps the infant's chromosomes to confirm the diagnosis and identify the specific genetic type.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Common Medical Conditions */}
            <section id="medical" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-amber-600 p-2.5 text-white shadow-md shadow-amber-600/10">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Module 05</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Medical Profile & Healthcare Surveillance</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  While every individual with Down Syndrome is unique, the presence of an extra copy of Chromosome 21 increases the likelihood of certain medical conditions. Regular preventative healthcare, structured medical monitoring, and early screening are key to maintaining overall health.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h4 className="font-bold text-slate-900 text-sm">Congenital Heart Defects (CHD)</h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      Approximately 50% of children born with Down Syndrome have a congenital heart defect, such as an Atrioventricular Septal Defect (AVSD) or Ventricular Septal Defect (VSD). A pediatric echocardiogram (ECG/Echo) is highly recommended within the first month of life to check for and monitor these conditions.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h4 className="font-bold text-slate-900 text-sm">Vision & Hearing Concerns</h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      Up to 75% of individuals experience vision issues, including refractive errors, strabismus, or early-onset cataracts. Similarly, hearing concerns (such as conductive hearing loss caused by fluid buildup in the narrow Eustachian tubes) are common and can impact speech development.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h4 className="font-bold text-slate-900 text-sm">Thyroid Dysfunction</h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      There is an increased risk for thyroid disorders, particularly congenital or acquired <strong>Hypothyroidism</strong>. Regular blood tests to measure Thyroid Stimulating Hormone (TSH) are recommended annually to ensure timely treatment.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h4 className="font-bold text-slate-900 text-sm">Sleep Apnea (OSA)</h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      Due to physical traits like a smaller upper airway, low muscle tone, and a relatively larger tongue, many individuals experience Obstructive Sleep Apnea (OSA). A sleep study (polysomnography) is recommended by age 4 to check for sleep disruptions.
                    </p>
                  </div>
                </div>

                {/* Health Monitoring Calendar */}
                <h4 className="font-serif text-lg font-bold text-slate-900 mt-6">Recommended Healthcare Surveillance Calendar</h4>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-100 text-xs font-bold uppercase text-slate-700 border-b border-slate-200">
                      <tr>
                        <th className="px-4 py-3">Age Period</th>
                        <th className="px-4 py-3">Critical Screening Protocols</th>
                        <th className="px-4 py-3">Frequency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-xs">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-900">Infancy (0 - 12 Months)</td>
                        <td className="px-4 py-3">Pediatric Echocardiogram, Brainstem Auditory Evoked Response (BAER) hearing test, Newborn eye checkup, and Thyroid screening (TSH/T4).</td>
                        <td className="px-4 py-3">At birth & 6 months</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-900">Early Childhood (1 - 5 Years)</td>
                        <td className="px-4 py-3">Annual audiometry, pediatric eye exams, celiac disease screenings, TSH screening, and cervical spine X-rays to check for atlantoaxial instability.</td>
                        <td className="px-4 py-3">Every 12 months</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-900">Adolescence (12 - 18 Years)</td>
                        <td className="px-4 py-3">Annual skin exams, continuous thyroid and hearing checks, ophthalmology follow-ups, and screenings for obstructive sleep apnea.</td>
                        <td className="px-4 py-3">Annually</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 6: Therapies and Early Intervention */}
            <section id="therapies" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-purple-600 p-2.5 text-white shadow-md shadow-purple-600/10">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-purple-600">Module 06</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Early Intervention & Therapy Protocols</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  Early intervention programs, starting as early as the first few weeks of life, are essential for supporting physical, cognitive, and sensory development. These programs help children build functional skills and achieve greater independence.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border-l-4 border-purple-500 bg-slate-50 p-5">
                    <h4 className="font-bold text-slate-900">Physiotherapy (PT)</h4>
                    <p className="mt-1 text-sm text-slate-700">
                      Focuses on addressing decreased muscle tone (hypotonia) and joint flexibility (hypermobility). Physiotherapists guide infants through motor milestones like rolling, sitting, crawling, and eventually walking, helping them build core strength and stability.
                    </p>
                  </div>

                  <div className="rounded-xl border-l-4 border-purple-500 bg-slate-50 p-5">
                    <h4 className="font-bold text-slate-900">Occupational Therapy (OT)</h4>
                    <p className="mt-1 text-sm text-slate-700">
                      Helps children develop fine motor control, hand-eye coordination, and sensory processing skills. Occupational therapists work on foundational daily activities such as feeding, grasping toys, dressing, and self-care routines.
                    </p>
                  </div>

                  <div className="rounded-xl border-l-4 border-purple-500 bg-slate-50 p-5">
                    <h4 className="font-bold text-slate-900">Speech-Language Therapy (SLT)</h4>
                    <p className="mt-1 text-sm text-slate-700">
                      Addresses challenges related to late-developing expressive language skills and potential anatomical differences like a high palate or low jaw muscle tone. Speech-language therapists use visual schedules, sign language, and alternative communication tools to support language development.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Communication and Language Development */}
            <section id="communication" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-indigo-600 p-2.5 text-white shadow-md shadow-indigo-600/10">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Module 07</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Communication & Language Development</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  Children with Down Syndrome often understand language (receptive language) much better than they can express themselves (expressive language). This difference can sometimes lead to frustration, which is why introducing visual and multi-sensory communication tools early on is so helpful.
                </p>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h4 className="font-bold text-slate-900">Practical Communication Strategies for Parents</h4>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">👉</span>
                      <span><strong>Introduce Augmentative Communication:</strong> Using simple signs (like Indian Sign Language or baby sign language) alongside spoken words helps bridge the gap before speech develops.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">👉</span>
                      <span><strong>Utilize Visual Schedules:</strong> Visual aids, flashcards, and picture schedules help clarify routines and support language understanding.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">👉</span>
                      <span><strong>Encourage Imitation:</strong> Engage in turn-taking vocal play, nursery rhymes, and mimicry games to encourage speech imitation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">👉</span>
                      <span><strong>Reduce Speech Speed:</strong> Speaking clearly, using shorter sentences, and allowing extra time for your child to process and respond helps build communication confidence.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Education and Schooling */}
            <section id="education" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-purple-700 p-2.5 text-white shadow-md shadow-purple-700/10">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-purple-700">Module 08</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Education & Academic Integration</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  Education plays a key role in supporting development and social inclusion. Parents in India have several pathways to consider when choosing the right school setting for their child.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h4 className="font-bold text-slate-900">Inclusive Mainstream Settings</h4>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      Under the <strong>RPWD Act 2016</strong>, mainstream schools are encouraged to provide inclusive classrooms. This path allows children with Down Syndrome to learn alongside neurotypical peers, supported by specialized accommodations, adjusted curricula, or a shadow teacher.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h4 className="font-bold text-slate-900">National Institute of Open Schooling (NIOS)</h4>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      The NIOS offers a highly flexible academic curriculum with customizable subject selections and extended timelines. This makes it an excellent option for parents looking to tailor their child's education to their unique learning pace.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50/30 p-5 mt-6">
                  <h4 className="font-serif text-base font-bold text-amber-950">School Selection Decision Guide</h4>
                  <p className="mt-1 text-xs text-amber-900 leading-relaxed">
                    When choosing a school, consider visiting potential locations to check for an inclusive school environment, ask about their experience with Individualized Education Plans (IEPs), assess the staff-to-student ratio, and meet with their special educators or speech therapists to ensure a supportive environment is in place.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Government Benefits Available */}
            <section id="benefits" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-indigo-600 p-2.5 text-white shadow-md shadow-indigo-600/10">
                  <Scale className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Module 09</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Welfare Benefits & Legal Frameworks</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  The Government of India provides structured welfare programs and legal protections designed to support individuals with Down Syndrome and their families.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-sm">Disability Certificate & UDID</h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      Securing a formal disability certificate with a benchmark rating (minimum 40%) is the first step to accessing state support. This certificate can be digitized into a national <strong>Unique Disability ID (UDID)</strong> card.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-sm">Niramaya Insurance Scheme</h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      The National Trust's <strong>Niramaya Health Insurance Scheme</strong> provides up to ₹1,00,000 in annual coverage. It helps families cover the costs of therapies, medical checkups, and outpatient services.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 mt-4">
                  <p className="text-xs text-slate-600">
                    💡 <strong>Resource Link:</strong> To learn more about application steps, tax deductions (Section 80DD), travel discounts, and guardianship processes, please visit our detailed <Link to="/resources/government-schemes" className="text-purple-600 font-bold underline hover:text-purple-700">Indian Government Schemes Guide</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Adulthood, Employment & Independence */}
            <section id="adulthood" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-purple-700 p-2.5 text-white shadow-md shadow-purple-700/10">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-purple-700">Module 10</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Adulthood, Employment & Transition</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  Transitioning to adulthood is a milestone that benefits from early planning. With supportive environments and focused training, many adults with Down Syndrome lead fulfilling lives, find meaningful work, and actively participate in their communities.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border-l-4 border-amber-500 bg-slate-50 p-5">
                    <h4 className="font-bold text-slate-900">Supported Vocational Training</h4>
                    <p className="mt-1 text-sm text-slate-700">
                      Vocational programs help individuals build practical, hands-on skills in areas like data management, hospitality, culinary arts, retail support, and administrative assistance.
                    </p>
                  </div>

                  <div className="rounded-xl border-l-4 border-amber-500 bg-slate-50 p-5">
                    <h4 className="font-bold text-slate-900">Transition & Legal Guardianship Planning</h4>
                    <p className="mt-1 text-sm text-slate-700">
                      When an individual reaches 18, securing a legal guardianship order under the National Trust Act is an important step. This helps parents continue to support their adult child with major financial, healthcare, and property decisions while encouraging self-advocacy.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 11: Scientific Horizon: CRISPR-Cas9 Research Update */}
            <section id="research-horizon" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-rose-700 p-2.5 text-white shadow-md shadow-rose-700/10">
                  <Activity className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-rose-700">Module 11</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Scientific Horizon: CRISPR Research Update</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <div className="bg-gradient-to-br from-indigo-950 to-slate-900 p-6 rounded-2xl text-white shadow-xl">
                  <span className="bg-purple-500/20 text-purple-300 font-bold text-xs uppercase px-2.5 py-1 rounded-md tracking-wider border border-purple-500/30">Science Update • PNAS Nexus Study</span>
                  <h3 className="font-serif text-xl font-bold mt-2 text-slate-100">Experimental Chromosome Removal via CRISPR-Cas9</h3>
                  <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                    A breakthrough study from <strong>Mie University, Japan</strong> (led by Dr. Ryotaro Hashizume and published in the peer-reviewed journal <em>PNAS Nexus</em>) demonstrated that researchers could successfully identify and remove the extra copy of Chromosome 21 in laboratory-grown human cell lines (induced pluripotent stem cells and skin fibroblasts).
                  </p>
                  
                  <div className="mt-4 border-t border-indigo-500/45 pt-4 text-xs text-indigo-200">
                    <strong>Research Findings:</strong> Removing the extra chromosome helped restore typical gene expression patterns, improve cell survival rates, and normalize mitochondrial function in the laboratory-grown cells.
                  </div>
                </div>

                <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-6">
                  <h4 className="font-serif text-base font-bold text-rose-950 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-rose-600" /> Crucial Information for Families
                  </h4>
                  <ul className="mt-3 space-y-3 text-xs text-rose-900 leading-relaxed">
                    <li>
                      ⚠️ <strong>This is laboratory-level research:</strong> The study was conducted entirely in controlled cell cultures. No animal model testing or human clinical trials have begun.
                    </li>
                    <li>
                      ⚠️ <strong>No clinical treatment exists today:</strong> This technology is not yet ready for use in living organisms. There are currently no gene-editing treatments available to change chromosomes in children or adults.
                    </li>
                    <li>
                      ⚠️ <strong>Protect against false claims:</strong> Please be cautious of any centers or practitioners claiming to offer treatments or therapies that can "cure" or "reverse" Down Syndrome. These claims are not backed by scientific evidence.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 12: Myths vs Facts */}
            <section id="myths-facts" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-indigo-700 p-2.5 text-white shadow-md shadow-indigo-700/10">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-700">Module 12</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Myths vs. Facts</h2>
                </div>
              </div>

              <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-sm text-slate-600">
                  <thead className="bg-slate-100 text-xs font-bold uppercase text-slate-700 border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3 w-1/2">Common Myth</th>
                      <th className="px-4 py-3 w-1/2">The Scientific Fact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-xs">
                    {[
                      { m: "Down Syndrome is a rare genetic disease.", f: "It is a relatively common genetic chromosomal variation, occurring in about 1 in 700 to 1,000 live births globally. It is not an illness or disease." },
                      { m: "Children with Down Syndrome cannot learn or go to mainstream schools.", f: "Most children can attend mainstream schools with correct educational accommodations, visual aids, and special education support." },
                      { m: "Down Syndrome is always inherited from parents.", f: "Only Translocation Down Syndrome (about 3-4% of cases) has a hereditary component. Trisomy 21 and Mosaicism are caused by random cell division events." },
                      { m: "People with Down Syndrome are always happy, affectionate, and docile.", f: "Individuals with Down Syndrome experience the same full range of human emotions—including sadness, anger, and frustration—as anyone else." },
                      { m: "Adults with Down Syndrome cannot work or live independently.", f: "With targeted vocational training and supported living systems, many adults find meaningful work and achieve a high degree of independence." },
                      { m: "Severe cognitive delay is identical in everyone diagnosed.", f: "Cognitive development varies widely. Early intervention and developmental support make a significant difference in functional outcomes." },
                      { m: "Down Syndrome only occurs in pregnancies of older mothers.", f: "While the probability increases with maternal age, the majority of babies with Down Syndrome are born to mothers under 35 because birth rates are higher in this group." },
                      { m: "Special diets or supplements can cure Down Syndrome.", f: "There are no diets, supplements, or medical therapies that can remove the extra chromosome. Care focuses on supportive therapies and preventative health." },
                      { m: "All individuals with Down Syndrome look identical.", f: "While they share some physical characteristics, individuals resemble their biological family members far more than they do each other." },
                      { m: "Adults with Down Syndrome have a short life expectancy.", f: "Thanks to advances in modern medicine, particularly in treating congenital heart defects, the average life expectancy is now 60+ years." }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-semibold text-rose-700">❌ {row.m}</td>
                        <td className="px-4 py-3 text-slate-700">✅ {row.f}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 13: Parent Action Checklist */}
            <section id="action-checklist" className="scroll-mt-12 bg-white rounded-2xl border-2 border-purple-500/30 p-6 md:p-8 shadow-md">
              <div className="flex items-center gap-2">
                <CheckSquare className="h-6 w-6 text-purple-600" />
                <h3 className="font-serif text-xl font-bold text-slate-950 md:text-2xl">Interactive Action Checklist</h3>
              </div>
              <p className="mt-1 text-sm text-slate-600">
                A step-by-step roadmap to help guide your family's planning. Your progress is saved locally.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { key: "medicalAssessment", label: "Schedule recommended medical screenings (Echocardiogram, hearing, vision)" },
                  { key: "therapyPlan", label: "Consult with speech, occupational, and physical therapists for an intervention plan" },
                  { key: "schoolPlacement", label: "Explore local inclusive schools and research NIOS curriculum options" },
                  { key: "governmentDocs", label: "Apply for your child's physical Disability Certificate and digital UDID Card" },
                  { key: "financialTrust", label: "Set up financial protections and look into the Niramaya insurance scheme" },
                  { key: "adultTransition", label: "Connect with support groups to learn about transition-to-adulthood planning" }
                ].map((item) => (
                  <label key={item.key} className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-all ${checklist[item.key as keyof typeof checklist] ? "border-purple-500 bg-purple-50/40" : "border-slate-200 bg-slate-50 hover:bg-slate-100/70"}`}>
                    <input 
                      type="checkbox" 
                      checked={checklist[item.key as keyof typeof checklist]} 
                      onChange={() => toggleChecklist(item.key as keyof typeof checklist)}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500" 
                    />
                    <span className={`text-xs font-semibold ${checklist[item.key as keyof typeof checklist] ? "text-purple-950" : "text-slate-700"}`}>
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </section>

            {/* Section 14: Comprehensive FAQ Accordion */}
            <section id="faq" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-amber-600 p-2.5 text-white shadow-md shadow-amber-600/10">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Module 14</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Frequently Asked Questions</h2>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { q: "Can Down Syndrome be cured?", a: "No. There is no cure for Down Syndrome, as it is a fundamental chromosomal variation present in the cell's genetic code. Modern support focuses on early therapies, education, preventative healthcare, and supporting independence." },
                  { q: "Can children with Down Syndrome attend mainstream schools?", a: "Yes. Mainstream inclusive schools can be an excellent option. Under the RPWD Act 2016, children have a right to reasonable accommodations, learning supports, and specialized educators in inclusive settings." },
                  { q: "What vocational and employment opportunities exist for adults?", a: "With supportive vocational training, many adults work in areas such as hospitality, retail, data management, and the arts, bringing valuable skills to their workplaces." },
                  { q: "Which therapies are most helpful for development?", a: "A comprehensive therapy plan typically includes physiotherapy (to support gross motor skills), occupational therapy (to support fine motor and self-care skills), and speech therapy (to support language and communication development)." },
                  { q: "Is Down Syndrome hereditary?", a: "Standard Trisomy 21 (95% of cases) and Mosaic Down Syndrome (1-2% of cases) are caused by random cell division errors and are not inherited. Only Translocation Down Syndrome (3-4% of cases) can have a hereditary component." },
                  { q: "What government support programs exist in India?", a: "Key resources include the disability certificate, digital UDID card, travel discounts, tax deductions under Section 80DD, and health insurance through the Niramaya scheme." },
                  { q: "How can parents support communication at home?", a: "Introducing simple signs early on, using visual aids, reading together, speaking clearly, and allowing your child extra time to process information are all great ways to support language development." },
                  { q: "Why is muscle tone (hypotonia) important to address?", a: "Hypotonia is decreased muscle tone, which is common in infants with Down Syndrome. Starting physiotherapy early helps build the strength needed for milestones like sitting, crawling, and walking." },
                  { q: "What should parents look for in a healthcare plan?", a: "A supportive healthcare plan focuses on regular checkups, including thyroid screening, hearing and vision tests, sleep studies to check for apnea, and routine pediatric care." },
                  { q: "How does the Niramaya insurance scheme help?", a: "The Niramaya scheme, backed by the National Trust, provides up to ₹1,00,000 in annual coverage to help families cover the costs of therapies, medical tests, and outpatient services." },
                  { q: "What is legal guardianship and when should parents consider it?", a: "When an individual reaches 18, they are legally recognized as an adult. Legal guardianship, applied for through the National Trust, helps parents continue to support their adult child with major healthcare and financial decisions." },
                  { q: "What is Mosaic Down Syndrome?", a: "Mosaic Down Syndrome is a less common form where only a percentage of the cells have an extra Chromosome 21, while others have typical chromosomes. Traits of the condition can vary based on this cellular mix." }
                ].map((item, idx) => (
                  <div key={idx} className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-all">
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="flex w-full items-center justify-between p-5 text-left font-semibold text-slate-950 hover:bg-slate-50"
                    >
                      <span>{item.q}</span>
                      {openFaq === idx ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
                    </button>
                    {openFaq === idx && (
                      <div className="bg-slate-50/80 px-5 pb-5 pt-1 text-sm text-slate-600 border-t border-slate-100">
                        <p className="whitespace-pre-line leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar Layout */}
          <aside className="space-y-8 lg:col-span-4">
            
            {/* Quick Facts Card */}
            <div className="rounded-2xl border border-purple-100 bg-gradient-to-b from-purple-50 to-white p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-purple-950 flex items-center gap-2">
                <Compass className="h-5 w-5 text-purple-600" /> Quick Facts
              </h3>
              <p className="mt-1 text-xs text-slate-500">Key genetic and medical statistics to keep in mind.</p>
              
              <div className="mt-4 space-y-3 text-xs text-slate-700">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Chromosome:</span>
                  <span className="font-bold">Extra Copy of 21</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Prevalence:</span>
                  <span className="font-bold">~1 in 700 Births</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Form Types:</span>
                  <span className="font-bold">Trisomy 21, Mosaic, Translocation</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span>Avg. Life Expectancy:</span>
                  <span className="font-bold">60+ Years</span>
                </div>
              </div>
            </div>

            {/* Milestones Support Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-serif text-base font-bold text-slate-950 flex items-center gap-2">
                <Activity className="h-5 w-5 text-indigo-500" /> Developmental Focus Areas
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Key milestones to support during early development.</p>
              
              <ul className="mt-4 space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✔</span>
                  <span><strong>Gross Motor:</strong> Strengthening core muscles to support sitting and walking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✔</span>
                  <span><strong>Fine Motor:</strong> Supporting manual dexterity, grasping, and self-feeding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✔</span>
                  <span><strong>Speech:</strong> Encouraging early vocalizations and receptive language skills.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✔</span>
                  <span><strong>Social Play:</strong> Encouraging peer interaction and play-based learning.</span>
                </li>
              </ul>
            </div>

            {/* Caregiver Tips Panel */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 p-6 text-white shadow-xl border-t-4 border-amber-500">
              <h4 className="font-serif text-base font-bold text-amber-400 flex items-center gap-2">
                <Lightbulb className="h-4 w-4" /> Supporting Your Child at Home
              </h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Incorporating supportive strategies into daily routines can make a wonderful difference in your child's learning journey:
              </p>
              
              <ul className="mt-4 space-y-2 text-xs text-slate-400">
                <li>• Use clear, simple language to support understanding</li>
                <li>• Break down daily tasks into small, manageable steps</li>
                <li>• Build learning games into your play routines</li>
                <li>• Offer positive reinforcement and celebrate every achievement</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Resource Hub Navigation Footer */}
      <nav className="border-t border-slate-200 bg-slate-100/80 py-12">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-slate-500 text-center mb-6">Explore the Project Jugnu Resource Hub</h4>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 text-center">
            <Link to="/resources/after-diagnosis" className="rounded-xl bg-white p-3 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm">After Diagnosis</Link>
            <Link to="/resources/choosing-schools" className="rounded-xl bg-white p-3 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm">Choosing Schools</Link>
            <Link to="/resources/therapy-guidance" className="rounded-xl bg-white p-3 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm">Therapy Guidance</Link>
            <Link to="/resources/daily-living" className="rounded-xl bg-white p-3 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm">Daily Living Support</Link>
            <Link to="/resources/communication-tips" className="rounded-xl bg-white p-3 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm">Communication Tips</Link>
            <Link to="/resources/behaviour-support" className="rounded-xl bg-white p-3 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm">Behaviour Support</Link>
            <Link to="/resources/parent-wellbeing" className="rounded-xl bg-white p-3 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm">Parent Wellbeing</Link>
            <Link to="/resources/government-schemes" className="rounded-xl bg-white p-3 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm">Government Schemes & Legal Rights</Link>
            <Link to="/resources/down-syndrome-guide" className="rounded-xl bg-purple-700 p-3 text-xs font-bold text-white border border-purple-700 shadow-sm col-span-2 sm:col-span-1">Down Syndrome Guide (Current)</Link>
          </div>
        </div>
      </nav>
                
      {/* Corporate Professional NGO Footer */}
      <footer className="bg-slate-950 py-12 text-xs text-slate-500 border-t border-slate-900">
        <div className="container mx-auto max-w-7xl px-4 text-center md:px-6 md:text-left">
          <div className="flex flex-col items-center justify-between gap-6 border-b border-slate-900 pb-8 md:flex-row">
            <div className="text-center md:text-left">
              <span className="font-serif text-lg font-bold tracking-tight text-slate-200 block">Project Jugnu</span>
              <p className="mt-1 max-w-md text-slate-400">An open-access pediatric disability resource hub designed to support neurodivergent individuals and families across India with high-quality information.</p>
            </div>
            <div className="flex gap-4 text-slate-400 font-medium">
              <a href="#" className="hover:text-amber-400">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400">Terms of Use</a>
              <a href="#" className="hover:text-amber-400">Accessibility Standards</a>
            </div>
          </div>
          <p className="mt-8 text-center text-slate-600 leading-relaxed">
            Disclaimer: The operational, genetic, clinical, and medical content presented in this guide is designed for educational and informational purposes only. It is not intended to replace professional pediatric consultations, diagnostic testing, clinical evaluations, or therapeutic recommendations. Please consult with a qualified specialist regarding your child's unique health and development.
          </p>
        </div>
      </footer>
    </div>
  );
}