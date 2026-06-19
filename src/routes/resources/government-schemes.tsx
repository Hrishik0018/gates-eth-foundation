import React, { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { 
  FileText, 
  CreditCard, 
  IndianRupee, 
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
  BookOpen, 
  Layers, 
  Heart, 
  Smile, 
  Compass, 
  MessageSquare, 
  Info 
} from "lucide-react";

export const Route = createFileRoute("/resources/government-schemes")({
  component: GovernmentSchemes,
});

export default function GovernmentSchemes() {
  // FAQ State Management
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Interactive Checklist State Management
  const [checklist, setChecklist] = useState({
    cert: false,
    udid: false,
    niramaya: false,
    pension: false,
    scholarship: false,
    rpwd: false,
    skills: false,
    guardianship: false,
  });

  const toggleChecklist = (key: keyof typeof checklist) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* Top Notification / Banner */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 px-4 py-2 text-center text-xs font-semibold tracking-wide text-white md:text-sm">
        🇮🇳 Comprehensive Rights & Welfare Guide updated as per latest DEPwD directives under the RPWD Act 2016.
      </div>

      {/* Hero Section */}
      <header className="relative border-b-4 border-amber-500 bg-gradient-to-b from-blue-900 via-slate-950 to-slate-900 py-16 text-white md:py-24">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-400 border border-amber-500/30">
              <Award className="h-3.5 w-3.5" /> Project Jugnu • Resource Guide 8
            </span>
            <h1 className="max-w-4xl font-serif text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-slate-100">
              Government Schemes, Rights & Support Systems
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-xl">
              A practical roadmap to disability certificates, pensions, health insurance, legal rights, skill development opportunities, and long-term support systems available for neurodivergent and disabled individuals across India.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#checklist" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-teal-500 hover:shadow-teal-900/20 active:scale-98">
                <CheckSquare className="h-4 w-4" /> Interactive Benefits Checklist
              </a>
              <a href="#udid-guide" className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-5 py-3 text-sm font-bold text-slate-200 border border-slate-700 transition-all hover:bg-slate-700">
                <CreditCard className="h-4 w-4" /> UDID Application Process
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container Layout */}
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Main Informational Content Area */}
          <main className="space-y-16 lg:col-span-8">
            
            {/* Section 1: Understanding Disability Documentation */}
            <section id="documentation" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-blue-600 p-2.5 text-white shadow-md shadow-blue-600/10">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Module 01</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Understanding Disability Documentation</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  Navigating the landscape of structural support in India requires robust documentation. Under the <strong>Rights of Persons with Disabilities (RPWD) Act, 2016</strong>, the legal definition of disability expanded significantly from 7 to 21 conditions, bringing neurodevelopmental conditions like <strong>Autism Spectrum Disorder (ASD)</strong>, Intellectual Disabilities, Specific Learning Disabilities, and chronic neurological conditions into clear developmental and legal focus.
                </p>

                <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5 shadow-sm">
                  <h3 className="font-serif text-lg font-bold text-blue-900 flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-600" /> What is a "Benchmark Disability"?
                  </h3>
                  <p className="mt-2 text-sm text-blue-950/80">
                    As per Section 2(r) of the RPWD Act 2016, a person with a <strong>"Benchmark Disability"</strong> is an individual certified to have <strong>not less than 40%</strong> of a specified disability. Securing a validated assessment that meets or exceeds this 40% criterion is the absolute baseline requirement to access statutory government provisions, educational reservations, and financial support frameworks across India.
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-bold text-slate-900">Why Strategic Documentation Matters</h3>
                <p>
                  For a parent of an autistic child or an individual with Down syndrome or Cerebral Palsy, holding an official medical board evaluation is not merely bureaucratic red tape; it is the ultimate legal shield and key to state support. It validates your child's operational needs in mainstream settings, guarantees access to mandatory academic accommodations, safeguards them against systemic discrimination, and protects their legal standing into adulthood.
                </p>

                {/* Flow Process: Step-by-Step Certificate Application */}
                <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-slate-500">Step-by-Step Disability Certification Process</h4>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
                    <span className="inline-flex h-8 w-8 items-center justify-content-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">1</span>
                    <h5 className="mt-3 font-bold text-slate-900">Clinical Evaluation</h5>
                    <p className="mt-1 text-xs text-slate-500">
                      Obtain an assessment profile (such as CARS/ISAA scores for Autism or Binet/MISIC for Intellectual Disabilities) from a certified government clinical psychologist/psychiatrist at an empanelled government medical hospital.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
                    <span className="inline-flex h-8 w-8 items-center justify-content-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">2</span>
                    <h5 className="mt-3 font-bold text-slate-900">Medical Board Meet</h5>
                    <p className="mt-1 text-xs text-slate-500">
                      Present the child before the designated district medical board. The board typically features a multi-disciplinary panel comprising a psychiatrist, pediatrician, and neurologist to verify diagnostic criteria.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
                    <span className="inline-flex h-8 w-8 items-center justify-content-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">3</span>
                    <h5 className="mt-3 font-bold text-slate-900">Certificate Issuance</h5>
                    <p className="mt-1 text-xs text-slate-500">
                      Upon validation, the medical superintendent issues the institutional Disability Certificate confirming the percentage and nature of impairment (Permanent or Progressive/Reviewable).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: UDID Card Complete Guide */}
            <section id="udid-guide" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-amber-600 p-2.5 text-white shadow-md shadow-amber-600/10">
                  <CreditCard className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Module 02</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">UDID Card Complete Guide</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  The <strong>Unique Disability ID (UDID)</strong> project, implemented by the Department of Empowerment of Persons with Disabilities (DEPwD), centralizes and digitizes disability tracking across India. It eliminates the need for families to carry multiple physical documents, serving as a unified national identity standard.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h4 className="font-bold text-slate-900">Key Benefits of UDID</h4>
                    <ul className="mt-3 space-y-2.5 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-600 font-bold">✓</span>
                        <span><strong>Universal Validity:</strong> Valid across all Indian States and Union Territories, regardless of the issuing location.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-600 font-bold">✓</span>
                        <span><strong>Streamlined Access:</strong> Single document point for financial concessions, railway concessions, tracking schemes, and school entries.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-600 font-bold">✓</span>
                        <span><strong>Fraud Prevention:</strong> End-to-end cloud-verified digital record eliminates verification delays.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h4 className="font-bold text-slate-900">Required Documents for Upload</h4>
                    <ul className="mt-3 space-y-2.5 text-sm text-slate-600">
                      <li className="flex items-center gap-2">📁 Recent passport-sized color photograph (White Background)</li>
                      <li className="flex items-center gap-2">📁 Copy of Aadhaar Card or alternative residential address proof</li>
                      <li className="flex items-center gap-2">📁 Existing physical Disability Certificate (if applicable)</li>
                      <li className="flex items-center gap-2">📁 Signature scan or thumb impression specimen of the ward/guardian</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-6">
                  <h4 className="font-serif text-lg font-bold text-amber-900">Online Application Process Breakdown</h4>
                  <ol className="mt-4 space-y-3 text-sm text-amber-950">
                    <li><strong>1. Portal Registration:</strong> Log onto the official Swavlamban Card portal (<a href="https://www.swavlambancard.gov.in" target="_blank" rel="noreferrer" className="underline font-semibold hover:text-amber-700">swavlambancard.gov.in</a>) and initiate the application framework.</li>
                    <li><strong>2. Profile Fill:</strong> Complete the 4-part application: Personal Details, Address details, Disability Details, and Employment Details.</li>
                    <li><strong>3. Medical Verification Assignment:</strong> Select the local government hospital for medical verification. If a certificate is already held, upload details for verification.</li>
                    <li><strong>4. Physical Board Assessment:</strong> Attend the scheduled medical verification date at the district hospital with all original printouts and documentation.</li>
                    <li><strong>5. Digital Delivery:</strong> Track application status using the generated Enrolment Number. Once approved, download your e-UDID card immediately while the physical high-security card is dispatched via speed post.</li>
                  </ol>
                </div>

                <blockquote className="border-l-4 border-rose-500 bg-rose-50 p-4 text-sm text-rose-950">
                  <strong className="text-rose-800 uppercase tracking-wider block font-bold mb-1">⚠️ Common Mistakes Parents Make:</strong>
                  * <strong>Applying for a Temporary Card:</strong> For neurodevelopmental variations like Autism, boards occasionally issue temporary certificates requiring renewal every 3-5 years. Ensure your case file is thoroughly documented before age 18 to seek permanent classification if functional metrics remain significant. <br className="mb-2" />
                  * <strong>Mismatched Aadhaar Data:</strong> Spelling discrepancies or birth-year variations between Aadhaar documentation and clinical medical files trigger immediate portal rejection. Rectify minor typos prior to initiating the UDID submission process.
                </blockquote>
              </div>
            </section>

            {/* Section 3: Financial Benefits & Pension Support */}
            <section id="financial-benefits" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-emerald-600 p-2.5 text-white shadow-md shadow-emerald-600/10">
                  <IndianRupee className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Module 03</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Financial Benefits & Pension Support</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  Raising a child with complex developmental needs involves significant recurring financial commitments, from intensive long-term speech and occupational therapies to adaptive aids. The government offers structured frameworks to help ease this economic pressure.
                </p>

                <h3 className="text-xl font-bold text-slate-900">State Disability Pension Infrastructure</h3>
                <p>
                  While the central government seeds the Indira Gandhi National Disability Pension Scheme (IGNDPS), individual state social welfare departments manage and disburse variable monthly pensions for individuals with benchmark disabilities. 
                </p>
                <p className="text-sm bg-slate-100 p-4 rounded-lg border border-slate-200">
                  <strong>Standard Rules:</strong> Typically requires an individual to be over 18 years old, possess a validated 40% to 80%+ disability classification, and meet specific family income ceilings (ranges vary by state, such as below ₹1.5 - 3 Lakhs per annum). Applications are processed through local District Social Welfare Offices or e-governance kiosks (like MeeSeva, E-Mitra, or MahaOnline).
                </p>

                <h3 className="text-xl font-bold text-slate-900">Income Tax Benefits: Sections 80DD and 80U</h3>
                <p>
                  The Income Tax Act, 1961 offers direct tax deductions for families supporting individuals with disabilities:
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h4 className="font-bold text-teal-900 flex items-center gap-1.5"><Scale className="h-4 w-4 text-teal-600" /> Section 80DD (For Parents/Guardians)</h4>
                    <p className="mt-2 text-sm text-slate-600">
                      Allows a flat deduction from taxable gross income for expenses incurred on medical treatment, nursing, training, and rehabilitation of a dependent relative with a disability.
                    </p>
                    <ul className="mt-3 space-y-1 text-xs text-slate-500">
                      <li>• Benchmark Disability (40%+): Flat deduction of <strong>₹75,000</strong></li>
                      <li>• Severe Disability (80%+): Flat deduction of <strong>₹1,25,000</strong></li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h4 className="font-bold text-teal-900 flex items-center gap-1.5"><Scale className="h-4 w-4 text-teal-600" /> Section 80U (For Individuals)</h4>
                    <p className="mt-2 text-sm text-slate-600">
                      Applicable when the individual with a disability earns an independent income. The individual can claim this direct deduction in their own tax returns.
                    </p>
                    <ul className="mt-3 space-y-1 text-xs text-slate-500">
                      <li>• Benchmark Disability (40%+): Flat deduction of <strong>₹75,000</strong></li>
                      <li>• Severe Disability (80%+): Flat deduction of <strong>₹1,25,000</strong></li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900">National Scholarship Frameworks</h3>
                <p>
                  The Department of Empowerment of Persons with Disabilities administers three major scholarship variants directly via the National Scholarship Portal (NSP):
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                  <li><strong>Pre-Matric Scholarship:</strong> Covers students from Class 9 to Class 10 to support retention and reduce dropout rates.</li>
                  <li><strong>Post-Matric Scholarship:</strong> Covers students from Class 11 up to Post-Graduation degrees or recognized technical diplomas.</li>
                  <li><strong>Scholarship for Top Class Education:</strong> Provides full tuition fee reimbursement and maintenance allowances for students who secure admissions into premier institutions like IITs, IIMs, NITs, and central universities.</li>
                </ul>

                {/* Comparison Table */}
                <h4 className="mt-6 font-serif text-lg font-bold text-slate-900">Financial & Travel Benefit Frameworks Matrix</h4>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">
                      <tr>
                        <th className="px-4 py-3">Benefit Type</th>
                        <th className="px-4 py-3">Operational Coverage</th>
                        <th className="px-4 py-3">Key Eligibility Criteria</th>
                        <th className="px-4 py-3">Action Channel</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-900">Railway Concessions</td>
                        <td className="px-4 py-3">Up to 75% price reduction in AC 3-Tier, Sleeper, and Second Class fares. Also applies to one accompanying caregiver.</td>
                        <td className="px-4 py-3">Valid UDID or specialized Indian Railways Concession Form signed by designated hospital superintendent.</td>
                        <td className="px-4 py-3 text-xs">IRCTC e-ticketing portal / Divisional Railway Manager office.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-900">State Roadways Concession</td>
                        <td className="px-4 py-3">Free or heavily subsidized local and state-wide bus travel within the resident state.</td>
                        <td className="px-4 py-3">Varies by state. Requires a valid local disability certificate or specific state-issued transport pass.</td>
                        <td className="px-4 py-3 text-xs">Local State Transport Corporation depot office.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-900">Aviation Concessions</td>
                        <td className="px-4 py-3">Up to 50% discount on standard basic fare for domestic travel (primarily via Air India).</td>
                        <td className="px-4 py-3">Locomotor disability of 80% or greater, or severe developmental conditions requiring support.</td>
                        <td className="px-4 py-3 text-xs">Airline booking portal with verified concession code.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 4: Niramaya Health Insurance */}
            <section id="niramaya" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-teal-600 p-2.5 text-white shadow-md shadow-teal-600/10">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-600">Module 04</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Niramaya Health Insurance</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <div className="bg-gradient-to-br from-teal-950 to-slate-900 p-6 rounded-2xl text-white shadow-xl">
                  <span className="bg-teal-500/20 text-teal-300 font-bold text-xs uppercase px-2.5 py-1 rounded-md tracking-wider border border-teal-500/30">Flagship National Trust Scheme</span>
                  <h3 className="font-serif text-2xl font-bold mt-2 text-slate-100">Niramaya Health Insurance Scheme</h3>
                  <p className="mt-2 text-slate-300 text-sm">
                    Most standard commercial health insurance policies in India exclude developmental variations like Autism and Intellectual Disabilities, or class them as pre-existing conditions with prohibitive premiums. The <strong>Niramaya Health Insurance Scheme</strong>, backed by the National Trust, provides dedicated coverage tailored for these groups.
                  </p>
                  
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 text-slate-800">
                    <div className="bg-white/95 p-4 rounded-xl shadow-sm">
                      <span className="font-bold text-teal-900 block text-sm">Comprehensive Coverage</span>
                      <p className="text-xs mt-1 text-slate-600">Provides a flat health insurance shield of <strong>₹1,00,000 (1 Lakh)</strong> across therapeutic and medical interventions. It does not require pre-insurance medical checkups.</p>
                    </div>
                    <div className="bg-white/95 p-4 rounded-xl shadow-sm">
                      <span className="font-bold text-teal-900 block text-sm">Defined Target Groups</span>
                      <p className="text-xs mt-1 text-slate-600">Specifically designed for individuals diagnosed with at least one of the four National Trust focus conditions: <strong>Autism, Intellectual Disability, Cerebral Palsy, and Multiple Disabilities</strong>.</p>
                    </div>
                  </div>
                </div>

                <h4 className="font-bold text-slate-900 mt-4">Niramaya Financial Benefit Allocation Structure</h4>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="border border-slate-200 bg-white p-4 rounded-xl text-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Therapy & OPD</span>
                    <span className="text-xl font-extrabold text-teal-600 block my-1">₹40,000</span>
                    <p className="text-xs text-slate-500">Allocated for recurring speech therapy, occupational therapy, behavioral modification support, and general OPD consultations.</p>
                  </div>
                  <div className="border border-slate-200 bg-white p-4 rounded-xl text-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Hospitalization</span>
                    <span className="text-xl font-extrabold text-teal-600 block my-1">₹55,000</span>
                    <p className="text-xs text-slate-500">Covers inpatient medical emergencies, specialized surgical procedures, and corrective interventions under anesthesia.</p>
                  </div>
                  <div className="border border-slate-200 bg-white p-4 rounded-xl text-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Alternative / Dental</span>
                    <span className="text-xl font-extrabold text-teal-600 block my-1">₹5,000</span>
                    <p className="text-xs text-slate-500">Covers essential dental treatments under specialized sedation or routine diagnostic updates.</p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h4 className="font-bold text-slate-900">How Parents Can Enroll for Niramaya</h4>
                  <p className="text-sm mt-1">
                    Enrollment cannot be done individually through standard commercial providers; it must be routed via a National Trust registered <strong>Registered Organization (RO)</strong> or designated Local Level Committee (LLC) framework.
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-slate-600">
                    <li>🎯 <strong>Step 1:</strong> Locate the nearest active Registered NGO / Center via the National Trust online mapping tool.</li>
                    <li>🎯 <strong>Step 2:</strong> Submit the child's valid Disability Certificate/UDID card, Aadhaar profile, Guardian identity cards, and a Bank Passbook copy (for direct benefit reimbursement).</li>
                    <li>🎯 <strong>Step 3:</strong> Pay the subsidized annual premium: <strong>Free</strong> for families Below Poverty Line (BPL); <strong>₹250</strong> per annum for families with non-BPL income profiles; and <strong>₹500</strong> for non-BPL families where the legal guardian is not a parent.</li>
                    <li>🎯 <strong>Step 4:</strong> Collect the system-generated Niramaya E-Card featuring your unique beneficiary policy registration number to file ongoing reimbursement claims.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5: National Trust Schemes */}
            <section id="national-trust" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-indigo-600 p-2.5 text-white shadow-md shadow-indigo-600/10">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Module 05</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">The National Trust Schemes Portfolio</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  The National Trust is a statutory body under the Ministry of Social Justice and Empowerment, setup by an Act of Parliament in 1999. It designs focused welfare programs targeting specific milestones across a beneficiary's lifespan.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* DISHA Card */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <span className="bg-indigo-100 text-indigo-800 font-bold text-xs uppercase px-2.5 py-0.5 rounded">DISHA</span>
                    <h4 className="mt-2 text-lg font-bold text-slate-900">Early Intervention Program</h4>
                    <p className="mt-2 text-xs text-slate-600">
                      <strong>Objective:</strong> Provides early intervention setups, clinical screening, parent counseling, and foundational therapy coordination for children aged 0-10 years.
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      <strong>Ideal For:</strong> Toddlers showing early signs of speech delays, motor difficulties, or social milestones challenges associated with Autism or Cerebral Palsy.
                    </p>
                  </div>

                  {/* VIKAAS Card */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <span className="bg-indigo-100 text-indigo-800 font-bold text-xs uppercase px-2.5 py-0.5 rounded">VIKAAS</span>
                    <h4 className="mt-2 text-lg font-bold text-slate-900">Day Care Scheme</h4>
                    <p className="mt-2 text-xs text-slate-600">
                      <strong>Objective:</strong> An interactive daycare center model for individuals aged 10+ years to build interpersonal skills, basic communication, and independent daily living capabilities.
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      <strong>Ideal For:</strong> School-age children or young adults needing structured routine training and peer interaction while giving primary caregivers a sustainable break.
                    </p>
                  </div>

                  {/* SAMARTH Card */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <span className="bg-indigo-100 text-indigo-800 font-bold text-xs uppercase px-2.5 py-0.5 rounded">SAMARTH</span>
                    <h4 className="mt-2 text-lg font-bold text-slate-900">Respite Care Scheme</h4>
                    <p className="mt-2 text-xs text-slate-600">
                      <strong>Objective:</strong> Provides temporary, short-term residential relief or group home accommodation options for families facing medical emergencies or high-stress crises.
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      <strong>Ideal For:</strong> Aging parents or single caregivers who require immediate, reliable transitional housing support for their dependent ward.
                    </p>
                  </div>

                  {/* GHARAUNDA Card */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <span className="bg-indigo-100 text-indigo-800 font-bold text-xs uppercase px-2.5 py-0.5 rounded">GHARAUNDA</span>
                    <h4 className="mt-2 text-lg font-bold text-slate-900">Adult Group Home Care</h4>
                    <p className="mt-2 text-xs text-slate-600">
                      <strong>Objective:</strong> Provides a permanent, lifelong residential infrastructure setup with medical support for adult beneficiaries with disabilities.
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      <strong>Ideal For:</strong> Adults with high support needs whose parents are looking for safe, permanent, community-based group living arrangements.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Skill Development & Employment Programs */}
            <section id="employment" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-cyan-600 p-2.5 text-white shadow-md shadow-cyan-600/10">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">Module 06</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Skill Development & Vocational Channels</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  True inclusion goes beyond therapeutic support to foster financial independence and self-worth. The government sponsors vocational pathways under the <strong>National Action Plan (NAP) for Skill Training of Persons with Disabilities</strong>.
                </p>

                <h3 className="text-xl font-bold text-slate-900">Diverse Training Pathways</h3>
                <p>
                  Empanelled government entities, NGOs, and skill councils organize free vocational training adapted to varying neurodevelopmental and cognitive profiles:
                </p>
                <div className="grid gap-4 sm:grid-cols-2 text-sm">
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                    <strong className="text-slate-900 block font-bold">Tech & Digital Skills</strong>
                    Tailored for individuals with strong visual processing patterns, focusing on data entry, medical transcription basics, high-precision software testing, and digital archiving.
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                    <strong className="text-slate-900 block font-bold">Hospitality & Retail</strong>
                    Focuses on structured environment skills such as inventory control, billing assistant work, baking/culinary assembly, and catalog management.
                  </div>
                </div>

                {/* NHFDC Section */}
                <div className="mt-8 border-l-4 border-amber-500 bg-gradient-to-r from-amber-50/60 to-transparent p-6">
                  <h3 className="font-serif text-xl font-bold text-amber-950">National Handicapped Finance and Development Corporation (NHFDC)</h3>
                  <p className="mt-2 text-sm text-amber-900/90">
                    The NHFDC serves as the apex financial platform providing highly concessionary institutional credit to individuals with disabilities to launch micro-enterprises and self-employment ventures.
                  </p>
                  
                  <div className="mt-4 grid gap-4 text-xs sm:grid-cols-3">
                    <div className="bg-white p-4 rounded-xl border border-amber-200/60 shadow-sm">
                      <span className="font-bold text-amber-950 block">Concessionary Interest Rates</span>
                      <p className="mt-1 text-slate-600">Provides business setup loans starting at nominal interest rates of <strong>4% to 8% per annum</strong>, with additional special interest rebates for women entrepreneurs with disabilities.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-amber-200/60 shadow-sm">
                      <span className="font-bold text-amber-950 block">Micro-Enterprise Funding</span>
                      <p className="mt-1 text-slate-600">Provides up to <strong>₹25 Lakhs</strong> for direct manufacturing, retail outlets, service centers, or agricultural processing setups.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-amber-200/60 shadow-sm">
                      <span className="font-bold text-amber-950 block">Higher Education Loans</span>
                      <p className="mt-1 text-slate-600">Extends low-cost academic loans for professional or technical courses in India or abroad, with flexible repayment structures post-graduation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Government Institutions Every Parent Should Know */}
            <section id="institutions" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-slate-800 p-2.5 text-white shadow-md shadow-slate-800/10">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Module 07</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Apex Government Institutions</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  India has established several specialized apex national institutes focused on disability research, human resource capacity building, and direct clinical service delivery. Families can reach out to these centers for verified diagnostic support, therapeutic guidance, and aids.
                </p>

                <div className="space-y-4">
                  {/* NIEPID */}
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">NIEPID (Secunderabad, Telangana)</span>
                    <h4 className="text-lg font-bold text-slate-900">National Institute for Empowerment of Persons with Intellectual Disabilities</h4>
                    <p className="mt-1.5 text-sm text-slate-600">
                      The premier national authority for cognitive and developmental conditions. NIEPID runs specialized therapeutic outpatient setups, develops specialized curricula, distributes free learning kits, and operates model special schools across India.
                    </p>
                  </div>

                  {/* NIEPMD */}
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">NIEPMD (Chennai, Tamil Nadu)</span>
                    <h4 className="text-lg font-bold text-slate-900">National Institute for Empowerment of Persons with Multiple Disabilities</h4>
                    <p className="mt-1.5 text-sm text-slate-600">
                      Focuses on complex diagnostic scenarios where an individual faces overlapping challenges, such as combined vision-hearing challenges or Cerebral Palsy paired with developmental intellectual differences.
                    </p>
                  </div>

                  {/* DEIC & CRC */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">DEIC Framework</span>
                      <h5 className="font-bold text-slate-900">District Early Intervention Centres</h5>
                      <p className="mt-1 text-xs text-slate-600">
                        Operational hubs located within major district hospitals under the Rashtriya Bal Swasthya Karyakram (RBSK). They offer centralized, free early intervention, pediatric assessments, and basic speech/physiotherapy services for children up to 6 years old.
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">CRC Outposts</span>
                      <h5 className="font-bold text-slate-900">Composite Regional Centres</h5>
                      <p className="mt-1 text-xs text-slate-600">
                        Extended operational wings of the apex National Institutes set up across Tier-2 and Tier-3 cities to provide localized therapy options, aid distribution, and direct UDID evaluation support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Rights Under RPWD Act 2016 */}
            <section id="rpwd-rights" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-orange-600 p-2.5 text-white shadow-md shadow-orange-600/10">
                  <Scale className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Module 08</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Statutory Rights Under the RPWD Act 2016</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  The RPWD Act 2016 shifted the approach to disability from a charity-based model to a <strong>rights-based framework</strong>. Knowing your statutory protections empowers you to advocate effectively for your child in educational and social environments.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border-l-4 border-orange-500 bg-slate-50 p-5">
                    <h4 className="font-bold text-slate-900">1. Mandated Inclusive Education Rights (Section 16)</h4>
                    <p className="mt-1 text-sm text-slate-700">
                      All government-funded and government-aided educational institutions are required by law to provide inclusive admission options to children with benchmark disabilities. <strong>A mainstream private school cannot refuse admission based on a child's disability diagnosis.</strong>
                    </p>
                  </div>

                  <div className="rounded-xl border-l-4 border-orange-500 bg-slate-50 p-5">
                    <h4 className="font-bold text-slate-900">2. Reasonable Accommodations Framework</h4>
                    <p className="mt-1 text-sm text-slate-700">
                      Schools must adapt their learning environments to support diverse needs. This includes providing structured exam accommodations (such as an extra 20 minutes per hour, permission to use a scribe, adapted grading systems, or alternative quiet rooms) for board examinations like CBSE or ICSE.
                    </p>
                  </div>

                  <div className="rounded-xl border-l-4 border-orange-500 bg-slate-50 p-5">
                    <h4 className="font-bold text-slate-900">3. Public Employment Safeguards (Section 34)</h4>
                    <p className="mt-1 text-sm text-slate-700">
                      The Act reserves <strong>not less than 4%</strong> of open positions in government establishments for individuals with benchmark disabilities, with specific allocations reserved for autism, intellectual disabilities, and multiple impairments.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Legal Guardianship After Age 18 */}
            <section id="guardianship" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-purple-600 p-2.5 text-white shadow-md shadow-purple-600/10">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-purple-600">Module 09</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Legal Guardianship After Age 18</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  In Indian law, once an individual reaches <strong>18 years of age</strong>, they are legally recognized as an independent adult. This presumption applies regardless of cognitive or neurodevelopmental profile. Natural parental status no longer automatically grants the right to sign financial documents, make medical decisions, or manage property for an adult child with significant cognitive or intellectual variations.
                </p>

                <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-5">
                  <h3 className="font-serif text-lg font-bold text-purple-900">The National Trust Act Local Level Committee Process</h3>
                  <p className="mt-1 text-sm text-purple-950/90">
                    To bridge this gap, the <strong>National Trust Act, 1999</strong> provides a structured mechanism to grant legal guardianship for individuals with Autism, Intellectual Disabilities, Cerebral Palsy, and Multiple Disabilities. This process is managed by a statutory <strong>Local Level Committee (LLC)</strong> active in each district, chaired directly by the District Magistrate/Collector.
                  </p>
                </div>

                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">Step-by-Step Guardianship Application Timeline</h4>
                <div className="relative border-l-2 border-purple-300 pl-6 space-y-6 ml-2">
                  <div className="relative">
                    <span className="absolute -left-[31px] top-0.5 flex h-4 w-4 items-center justify-content-center rounded-full bg-purple-600 ring-4 ring-white"></span>
                    <strong className="text-slate-900 block font-bold text-sm">Step 1: Digital Application Initiation</strong>
                    <p className="text-xs text-slate-500 mt-0.5">Submit Form A via the official National Trust portal, uploading the applicant's UDID card, two separate premium local citizen character references, and verified asset schedules.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-0.5 flex h-4 w-4 items-center justify-content-center rounded-full bg-purple-600 ring-4 ring-white"></span>
                    <strong className="text-slate-900 block font-bold text-sm">Step 2: Institutional Citation & Verification</strong>
                    <p className="text-xs text-slate-500 mt-0.5">The local child protection unit or designated social worker conducts an in-person home visit to evaluate the family dynamic and ensure the home environment is supportive.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-0.5 flex h-4 w-4 items-center justify-content-center rounded-full bg-purple-600 ring-4 ring-white"></span>
                    <strong className="text-slate-900 block font-bold text-sm">Step 3: LLC Hearing and Order Issuance</strong>
                    <p className="text-xs text-slate-500 mt-0.5">The parent or designated advocate appears before the District Magistrate-led LLC panel. Upon validation, the panel issues an official statutory certificate confirming Legal Guardianship status.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Long Term Adult Planning */}
            <section id="adult-planning" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-rose-600 p-2.5 text-white shadow-md shadow-rose-600/10">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Module 10</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Long Term Adult Planning</h2>
                </div>
              </div>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  One of the most frequent questions parents ask is: <em>"What happens after our time?"</em> Addressing this requires building a sustainable ecosystem combining financial planning, legal structures, and community support frameworks.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 text-sm">
                  <div className="border border-slate-200 bg-white p-5 rounded-xl">
                    <h4 className="font-bold text-slate-900">Private Irrevocable Trusts</h4>
                    <p className="mt-1 text-slate-600 text-xs">
                      Setting up a Private Irrevocable Trust allows parents to earmark funds, properties, and regular investments specifically for their child's future care. Managed by a designated trustee or professional trust organization, it ensures funds are used strictly for the child's wellbeing, avoiding direct asset transfers to individuals who may not have the child's best interests at heart.
                    </p>
                  </div>

                  <div className="border border-slate-200 bg-white p-5 rounded-xl">
                    <h4 className="font-bold text-slate-900">Supported Living Frameworks</h4>
                    <p className="mt-1 text-slate-600 text-xs">
                      Programs like the National Trust's <strong>Gharaunda</strong> scheme offer long-term residential options focused on community inclusion, dignity, and specialized care for adults with neurodevelopmental differences.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 11: Government Benefits Checklist */}
            <section id="checklist" className="scroll-mt-12 bg-white rounded-2xl border-2 border-teal-500/30 p-6 md:p-8 shadow-md">
              <div className="flex items-center gap-2">
                <CheckSquare className="h-6 w-6 text-teal-600" />
                <h3 className="font-serif text-xl font-bold text-slate-950 md:text-2xl">Interactive Government Benefits Checklist</h3>
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Use this practical tracker to plan your documentation journey. Data is stored locally to help monitor your progress.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {Object.entries(checklist).map(([key, value]) => {
                  const labelMap: Record<string, string> = {
                    cert: "Valid Physical Disability Certificate Issued",
                    udid: "Digital UDID Card Application Approved",
                    niramaya: "Active Niramaya Health Insurance Policy Card",
                    pension: "State Monthly Disability Pension Configured",
                    scholarship: "NSP Educational Scholarship Set Up",
                    rpwd: "Mandated School Accommodations Applied",
                    skills: "Vocational Skill Training/NHFDC Enrolled",
                    guardianship: "Legal Guardianship Document Prepared (18+)",
                  };
                  return (
                    <label key={key} className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-all ${value ? "border-teal-500 bg-teal-50/40" : "border-slate-200 bg-slate-50 hover:bg-slate-100/70"}`}>
                      <input 
                        type="checkbox" 
                        checked={value} 
                        onChange={() => toggleChecklist(key as keyof typeof checklist)}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500" 
                      />
                      <span className={`text-xs font-semibold ${value ? "text-teal-950" : "text-slate-700"}`}>
                        {labelMap[key]}
                      </span>
                    </label>
                  );
                })}
              </div>
            </section>

            {/* Section 12: Comprehensive Accordion FAQ */}
            <section id="faq" className="scroll-mt-12">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="rounded-xl bg-amber-600 p-2.5 text-white shadow-md shadow-amber-600/10">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Module 12</span>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Frequently Asked Questions</h2>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  {
                    q: "How do I secure an official Disability Certificate in India?",
                    a: "You can apply through the central Swavlamban Card online system or visit the Superintendent's office at your designated district government hospital. Assessments are completed by a multi-disciplinary medical board using recognized diagnostic tools (such as ISAA/CARS profiles for autism)."
                  },
                  {
                    q: "What is the step-by-step online application route for the UDID Card?",
                    a: "Go to swavlambancard.gov.in, fill out the application form with your personal details and disability specifications, upload the required files (Aadhaar, photo, medical certificate), select your local district verification hospital, and attend the medical board date if scheduled."
                  },
                  {
                    q: "Is Autism officially recognized for benefits under the RPWD Act 2016?",
                    a: "Yes. Autism Spectrum Disorder (ASD) is explicitly recognized as a distinct developmental category under the RPWD Act 2016, moving away from older frameworks where it was often generalized under other categories."
                  },
                  {
                    q: "What exactly constitutes a 'Benchmark Disability' criteria?",
                    a: "A benchmark disability is defined as any condition specified under the RPWD Act 2016 that is officially certified to be at a level of 40% or greater by an authorized medical board."
                  },
                  {
                    q: "Can a private mainstream school legally refuse admission to an autistic child?",
                    a: "No. Section 16 of the RPWD Act 2016 mandates that all educational institutions must provide inclusive admission opportunities to children with disabilities. Refusing admission based solely on a disability diagnosis is a violation of statutory rights."
                  },
                  {
                    q: "What is the Niramaya Insurance Scheme, and what does it cover?",
                    a: "Niramaya is a health insurance program backed by the National Trust that offers a flat annual coverage of ₹1,00,000 for individuals with Autism, Intellectual Disabilities, Cerebral Palsy, and Multiple Disabilities. It helps cover costs for OPD checkups, ongoing therapies, and hospitalization without requiring pre-insurance medical exams."
                  },
                  {
                    q: "What monthly pension benefits can parents apply for?",
                    a: "State Social Welfare Departments run monthly disability pensions for individuals with benchmark disabilities. Amount criteria and income limits vary by state, and applications can be submitted through local e-governance portals or district offices."
                  },
                  {
                    q: "How can students apply for central scholarships?",
                    a: "Applications can be submitted through the centralized National Scholarship Portal (scholarships.gov.in) under the DEPwD section. The system offers Pre-Matric, Post-Matric, and Top Class Education scholarship options based on academic progression."
                  },
                  {
                    q: "What legal status changes occur when a child with a cognitive disability turns 18?",
                    a: "At age 18, the individual is legally recognized as an adult under Indian law. Natural parental status no longer automatically covers signing financial documents or making major healthcare choices, meaning parents need to secure an official Legal Guardianship order."
                  },
                  {
                    q: "How can parents apply for Legal Guardianship under the National Trust framework?",
                    a: "Applications are submitted through the National Trust portal or local district offices. The case file is evaluated by a Local Level Committee (LLC) led by the District Magistrate, which grants the guardianship certificate after review."
                  },
                  {
                    q: "What vocational training programs are available through the government?",
                    a: "The National Action Plan (NAP) for Skill Training supports free vocational classes in digital tools, hospitality, data management, and crafts, tailored to the individual's functional strengths."
                  },
                  {
                    q: "Which major national institutions can parents contact for guidance?",
                    a: "Key national resources include NIEPID in Secunderabad (for Intellectual Disabilities), NIEPMD in Chennai (for Multiple Disabilities), and your local District Early Intervention Centre (DEIC) or Composite Regional Centre (CRC)."
                  }
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

          {/* Sidebar Section Layout */}
          <aside className="space-y-8 lg:col-span-4">
            
            {/* Quick Actions Card */}
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-blue-950 flex items-center gap-2">
                <Compass className="h-5 w-5 text-blue-600" /> Quick Support Actions
              </h3>
              <p className="mt-1 text-xs text-slate-500">Access direct resources and helpline contacts for assistance.</p>
              
              <div className="mt-4 space-y-3">
                <a href="https://www.swavlambancard.gov.in" target="_blank" rel="noreferrer" className="flex w-full items-center justify-between rounded-xl bg-white p-3 text-xs font-bold text-slate-700 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 transition-all">
                  <span className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-blue-600" /> Apply for UDID Card</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </a>
                <a href="https://thenationaltrust.gov.in" target="_blank" rel="noreferrer" className="flex w-full items-center justify-between rounded-xl bg-white p-3 text-xs font-bold text-slate-700 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/20 transition-all">
                  <span className="flex items-center gap-2"><HeartHandshake className="h-4 w-4 text-teal-600" /> Niramaya Portal</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </a>
                <button onClick={() => window.print()} className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 p-3 text-xs font-bold text-white shadow-md hover:bg-blue-500 transition-all">
                  <Download className="h-4 w-4" /> Download Complete PDF Guide
                </button>
              </div>
            </div>

            {/* Critical Document Checklist Panel */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-serif text-base font-bold text-slate-950 flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-500" /> Document Checklist
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Keep these verified documents organized for verification processes.</p>
              
              <ul className="mt-4 space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">⬜ 4 Passport-sized color photos of your child</li>
                <li className="flex items-center gap-2">⬜ Up-to-date Aadhaar card (Name matches medical record)</li>
                <li className="flex items-center gap-2">⬜ Certified clinical diagnostic reports (IQ, CARS scores)</li>
                <li className="flex items-center gap-2">⬜ Address verification documents (Voter ID, Utility Bills)</li>
                <li className="flex items-center gap-2">⬜ Active bank passbook linked to your child's Aadhaar</li>
              </ul>
            </div>

            {/* Emergency / Helpdesk Information Box */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-white shadow-xl border-t-4 border-amber-500">
              <h4 className="font-serif text-base font-bold text-amber-400 flex items-center gap-2">
                <Phone className="h-4 w-4" /> National Helpline Desk
              </h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                For direct guidance regarding processing delays or discrimination concerns under the RPWD framework, reach out to the relevant department:
              </p>
              
              <div className="mt-4 space-y-3 border-t border-slate-800 pt-4 text-xs text-slate-400">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                  <span><strong>DEPwD Office:</strong> Fifth Floor, Pt. Deendayal Antyodaya Bhawan, CGO Complex, Lodhi Road, New Delhi - 110003</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-slate-500 shrink-0" />
                  <span>ccpd-depwd@nic.in</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Resource Hub Navigation Footer */}
      <nav className="border-t border-slate-200 bg-slate-100/80 py-12">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-slate-500 text-center mb-6">Explore the Project Jugnu Resource Hub Guides</h4>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 text-center">
            <Link to="/resources/after-diagnosis" className="rounded-xl bg-white p-3 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm">After Diagnosis</Link>
            <Link to="/resources/choosing-schools" className="rounded-xl bg-white p-3 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm">Choosing Schools</Link>
            <Link to="/resources/therapy-guidance" className="rounded-xl bg-white p-3 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm">Therapy Guidance</Link>
            <Link to="/resources/daily-living-support" className="rounded-xl bg-white p-3 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm">Daily Living Support</Link>
            <Link to="/resources/communication-tips" className="rounded-xl bg-white p-3 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm">Communication Tips</Link>
            <Link to="/resources/behaviour-support" className="rounded-xl bg-white p-3 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm">Behaviour Support</Link>
            <Link to="/resources/parent-wellbeing" className="rounded-xl bg-white p-3 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm">Parent Wellbeing</Link>
            <Link to="/resources/government-schemes" className="rounded-xl bg-amber-500 p-3 text-xs font-bold text-white border border-amber-500 shadow-sm">Schemes & Rights (Current)</Link>
          </div>
        </div>
      </nav>

      {/* Corporate Professional NGO Footer */}
      <footer className="bg-slate-950 py-12 text-xs text-slate-500 border-t border-slate-900">
        <div className="container mx-auto max-w-7xl px-4 text-center md:px-6 md:text-left">
          <div className="flex flex-col items-center justify-between gap-6 border-b border-slate-900 pb-8 md:flex-row">
            <div className="text-center md:text-left">
              <span className="font-serif text-lg font-bold tracking-tight text-slate-200 block">Project Jugnu</span>
              <p className="mt-1 max-w-md text-slate-400">An open-access disability rights awareness and parenting support initiative built to empower neurodivergent individuals and families across India.</p>
            </div>
            <div className="flex gap-4 text-slate-400 font-medium">
              <a href="#" className="hover:text-amber-400">Privacy Framework</a>
              <a href="#" className="hover:text-amber-400">Terms of Service</a>
              <a href="#" className="hover:text-amber-400">Accessibility Statement</a>
            </div>
          </div>
          <p className="mt-8 text-center text-slate-600 leading-relaxed">
            Disclaimer: The operational data, links, frameworks, and criteria presented across this guide are compiled from official releases of the Ministry of Social Justice and Empowerment, Government of India. This guide serves an informational purpose and should not replace structured legal counsel or specific departmental verifications.
          </p>
        </div>
      </footer>
    </div>
  );
}