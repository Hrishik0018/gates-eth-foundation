import React, { useState } from 'react';
import { createFileRoute, Link } from "@tanstack/react-router";
import ResourceHubNavigation from "../../components/ResourceHubNavigation";
export const Route = createFileRoute("/resources/after-diagnosis")({
  component: AfterDiagnosis,
});

// SEO Metadata for reference:
// Title: Navigating Autism After Diagnosis in India | Project Jugnu
// Description: A comprehensive, compassionate guide for Indian parents navigating an autism or special needs diagnosis. Learn your next steps, therapies, and rights.

interface FAQItem {
  question: string;
  answer: string;
}

export default function AfterDiagnosis() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Is autism curable, and did I cause this?",
      answer: "First, take a deep breath: You did not cause this. Autism is a lifelong neurodevelopmental condition, not a disease, so the word 'cure' does not apply. With early, consistent, and loving intervention, your child can learn to communicate, gain independence, and live a beautiful, fulfilling life."
    },
    {
      question: "How do I get an official UDID card for government benefits?",
      answer: "You need an official diagnostic certificate from a government hospital board (containing a psychiatrist, pediatrician, and clinical psychologist). Once issued, apply online via the Swavlamban Card portal with your Aadhaar card, address proof, and medical reports."
    },
    {
      question: "How many hours of therapy does my child need weekly?",
      answer: "For toddlers and young children, global guidelines recommend 15 to 25 hours per week of structured engagement. This doesn't mean sitting in a clinic all day; it includes home-based play, speech exercises, and routine activities integrated into their daily life."
    },
    {
      question: "Should we tell our extended family and neighbors right away?",
      answer: "There is no right or wrong answer. In India, societal stigma can feel heavy. Share it first with those who offer emotional or practical support. When you do share, frame it constructively: 'Our child processes the world differently and is learning to communicate, just like any other child builds skills.'"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-16 px-4 sm:px-6 lg:px-8 text-center shadow-md">
        <div className="max-w-4xl mx-auto">
          <span className="bg-amber-400 text-amber-950 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full">
            Project Jugnu • Resource Guide 1
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Holding the Lantern: Your Compass After an Autism Diagnosis
          </h1>
          <p className="text-lg md:text-xl text-amber-50 max-w-2xl mx-auto leading-relaxed">
            Receiving a diagnosis can feel overwhelming, but you are not alone. This guide helps Indian families take their first steady steps toward clarity, action, and hope.
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Core Article Content */}
        <article className="lg:col-span-2 space-y-12 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100">
          
          {/* Section 1: Processing the Diagnosis */}
          <section className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-amber-100 pb-2 mb-4">
              1. Processing the News: Your Emotions are Valid
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              When a developmental pediatrician, psychiatrist, or clinical psychologist first speaks the words *Autism Spectrum Disorder (ASD)*, the world can feel like it is spinning out of control. Many Indian parents describe experiencing a profound sense of shock, followed by grief, denial, and deep anxiety about the future. 
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              In our society, cultural conditioning often places unfair blame on mothers or attributes developmental delays to "too much screen time" or "late talking in the family." Let us be completely clear: **Autism is a biological, neurodevelopmental condition. You did not cause this, and your child is not broken.**
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
              <h4 className="font-semibold text-amber-900 mb-1">A Note on the 'Jugnu' (Firefly) Perspective</h4>
              <p className="text-amber-800 text-sm">
                A firefly glows beautifully by its own internal light, not by copying others. Your child has a unique rhythm, exceptional strengths, and a distinct way of processing the world. The goal is not to fix them, but to clear a path so they can shine safely.
              </p>
            </div>
          </section>

          {/* Section 2: Immediate Action Plan */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-amber-100 pb-2 mb-6">
              2. The First 30 Days: Immediate Action Roadmap
            </h2>
            <p className="text-slate-600 mb-6">
              Instead of spending endless hours scrolling through conflicting internet forums, channel your energy into these four foundational pillars:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Secure the Documentation</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    Keep five physical copies of your child&apos;s multi-disciplinary diagnostic report safely stored in a dedicated file. Ensure it specifies the diagnostic tool used (such as INCLEN, CARS-2, or ISAA) as these are legally recognized by Indian medical boards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Book Developmental Assessments</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    An autism diagnosis tells you the &apos;what,&apos; but an assessment tells you the &apos;how.&apos; Secure separate evaluations from an Occupational Therapist (OT) for sensory/motor issues and a Speech-Language Pathologist (SLP) for functional communication.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Build a Simplified Home Routine</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    Children on the spectrum thrive on predictability. Create a simple, visual schedule using pictures or basic drawings for everyday sequences like morning brushing, breakfast, playtime, and sleep. This immediately reduces baseline anxiety.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Indian Government Schemes */}
          <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h2 className="text-xl font-bold text-slate-950 mb-4 flex items-center gap-2">
              <span>🇮🇳</span> Understanding Your Legal Rights &amp; Government Benefits
            </h2>
            <p className="text-slate-600 text-sm mb-6">
              The Government of India recognizes Autism Spectrum Disorder under the Rights of Persons with Disabilities (RPwD) Act, 2016. Activating these benefits early provides crucial financial relief.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-300 text-slate-700 font-semibold">
                    <th className="py-2 pr-4">Scheme / Document</th>
                    <th className="py-2 px-4">What It Offers</th>
                    <th className="py-2 pl-4">How to Apply</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-900">UDID Card</td>
                    <td className="py-3 px-4">Universal ID for Persons with Disabilities; grants access to pan-India concessions, train fare deductions, and state stipends.</td>
                    <td className="py-3 pl-4 text-xs">Apply online via the Swavlamban Card portal with a government medical board certificate.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-900">Niramaya Health Insurance</td>
                    <td className="py-3 px-4">An affordable insurance policy via the National Trust offering Rs. 1 Lakh cover for therapies, medical tests, and corrective surgeries.</td>
                    <td className="py-3 pl-4 text-xs">Register via an authorized local NGO or through the National Trust official website.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-900">Section 80DD (Income Tax)</td>
                    <td className="py-3 px-4">Tax deductions up to Rs. 75,000 (or Rs. 1,25,000 for severe conditions) on income tax for expenses incurred on a dependent with a disability.</td>
                    <td className="py-3 pl-4 text-xs">Claim during regular IT filing using Form 10-IA signed by a registered government doctor.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Spotting Pseudo-science */}
          <section className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-amber-100 pb-2 mb-4">
              3. Guarding Against Exploitation: Avoiding Miracle Cures
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Because autism therapy requires time and patience, many vulnerable families fall prey to commercial operations promising instantaneous results. Across India, you will encounter centers offering unproven, highly expensive, and sometimes dangerous treatments.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Be highly skeptical of practitioners who guarantee an absolute reversal of autism using **heavy metal detoxifications, hyperbaric oxygen therapy (HBOT), unverified stem cell therapies, or secretive herbal mixtures**. Always cross-verify treatments against global medical consensus bodies like the World Health Organization (WHO) or the Indian Academy of Pediatrics (IAP). If a clinical protocol sounds too good to be true, it likely is.
            </p>
          </section>

          {/* Section 5: FAQs */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-amber-100 pb-2 mb-6">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left font-semibold text-slate-900 p-4 bg-slate-50 hover:bg-slate-100 flex justify-between items-center transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-amber-600 font-bold">{openFaq === index ? '−' : '+'}</span>
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

        {/* Sidebar Panel: Support Resources & Next Guides */}
        <aside className="space-y-8">
          
          {/* Quick Action Checklist Card */}
          <div className="bg-amber-600 text-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold mb-4">Immediate Checklist</h3>
            <ul className="space-y-3 text-sm text-amber-50">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-amber-500 rounded" />
                <span>Collate 5 copies of diagnostic reports</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-amber-500 rounded" />
                <span>Locate a local OT and Speech center</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-amber-500 rounded" />
                <span>Apply for your child&apos;s Aadhaar card</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-amber-500 rounded" />
                <span>Download a visual routine chart template</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-amber-500 rounded" />
                <span>Join a local parent support group</span>
              </li>
            </ul>
          </div>

          {/* Project Jugnu Local Help Network */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Verified Direct Resources</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Connect with reliable national institutions and networks for diagnosis confirmation and therapeutic frameworks:
            </p>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="font-semibold text-slate-800">The National Trust Portal</p>
                <p className="text-slate-500 text-xs">Govt. of India welfare site for autism.</p>
                <a href="https://thenationaltrust.gov.in" target="_blank" rel="noreferrer" className="text-amber-600 text-xs inline-block mt-1 font-medium hover:underline">Visit Website →</a>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="font-semibold text-slate-800">Swavlamban Card Portal</p>
                <p className="text-slate-500 text-xs">Official gateway to issue your digital UDID profile.</p>
                <a href="https://www.swavlambancard.gov.in" target="_blank" rel="noreferrer" className="text-amber-600 text-xs inline-block mt-1 font-medium hover:underline">Apply Now →</a>
              </div>
            </div>
          </div>

          {/* Series Navigation Links */}
         
        </aside>

      </main>
              <ResourceHubNavigation currentPage="/resources/after-diagnosis" />
      {/* Footer Branding */}
    </div>
  );
}