import React, { useState } from 'react';
import { createFileRoute, Link } from "@tanstack/react-router";
import ResourceHubNavigation from "../../components/ResourceHubNavigation";
export const Route = createFileRoute("/resources/therapy-guidance")({
  component: TherapyGuidance,
});
// SEO Metadata for reference:
// Title: Autism Therapy Guide for Indian Parents | Project Jugnu
// Description: Demystifying Occupational Therapy (OT), Speech Therapy, and ABA in India. Learn to set IEP goals, spot clinical red flags, and track real progress.

interface TherapyType {
  name: string;
  focus: string;
  frequency: string;
  homeStrategy: string;
  expectedOutcomes: string[];
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function TherapyGuidance() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const therapies: TherapyType[] = [
    {
      name: "Occupational Therapy (OT) & Sensory Integration",
      focus: "Regulating the sensory processing system (vestibular, proprioceptive, tactile) and improving fine/gross motor coordination.",
      frequency: "2 to 3 sessions per week (45 mins each)",
      homeStrategy: "Create a 'sensory diet'—structured movement breaks like jumping on a mini-trampoline, squeezing stress balls, or carrying weighted backpacks before study time.",
      expectedOutcomes: [
        "Reduced sensory meltdowns caused by loud noises or crowded environments.",
        "Improved sitting tolerance and focus at a table.",
        "Better grip for buttoning shirts, holding spoons, and using pencils."
      ]
    },
    {
      name: "Speech-Language Pathology (SLP)",
      focus: "Building functional communication. This includes spoken words, gestures, sign language, or Alternative and Augmentative Communication (AAC) apps.",
      frequency: "2 to 3 sessions per week",
      homeStrategy: "Stop anticipating every need instantly. Create communicative temptations—place a favorite toy in a visible but clear plastic container so they must initiate interaction to request it.",
      expectedOutcomes: [
        "Ability to express basic biological needs (hunger, toilet, pain) clearly.",
        "Improved receptive language (understanding and executing multi-step instructions).",
        "Better conversational turn-taking and eye-direction alignment."
      ]
    },
    {
      name: "Behavioral & Developmental Frameworks (ABA / RDI / Social Communication)",
      focus: "Reinforcing adaptive behaviors, teaching social mechanics, and eliminating self-injurious or dangerous patterns.",
      frequency: "Variable (Highly individualized, 5 to 15 hours/week)",
      homeStrategy: "Catch them being good. Instantly reward positive behaviors with a highly preferred item or enthusiastic, specific praise ('Great job putting your shoes away!').",
      expectedOutcomes: [
        "Significant reduction in aggressive behaviors or intense self-harm.",
        "Increased flexibility when transitioning between different tasks.",
        "Basic play skills and parallel interaction capabilities with peers."
      ]
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "My child is non-verbal. Will introducing an AAC app or picture board stop them from speaking?",
      answer: "This is the single most common myth in Indian clinics. Clinical research shows exactly the opposite: Augmentative and Alternative Communication (AAC) tools actually speed up speech development. AAC reduces a child's frustration by giving them an immediate voice, which lowers anxiety and clears cognitive space for spoken language."
    },
    {
      question: "How long will it take before we see visible progress?",
      answer: "Neurological rewiring takes time. While minor improvements in regulatory stability or eye contact can emerge in 6 to 8 weeks, significant functional shifts (like conversational speech or independent self-care) usually require 6 to 12 months of consistent clinical and home intervention."
    },
    {
      question: "What is an IEP, and why should I demand one from my therapist?",
      answer: "An Individualized Education Plan (IEP) or Individualized Therapy Plan is a formal document that maps out your child's current baseline, targeted milestones for the next 3 months, and the exact methods to achieve them. If a therapy center does not provide a written, measurable goal sheet, they are running unstructured sessions."
    },
    {
      question: "Private therapy centers are very expensive. Are there government alternatives?",
      answer: "Yes. Major government teaching hospitals (like AIIMS, NIMHANS, or PGI) have highly subsidized pediatric rehabilitation departments. Additionally, state-run District Early Intervention Centres (DEICs) provide free occupational and speech sessions for children up to 6 years old."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-teal-600 to-emerald-700 text-white py-16 px-4 sm:px-6 lg:px-8 text-center shadow-md">
        <div className="max-w-4xl mx-auto">
          <span className="bg-teal-400 text-teal-950 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full">
            Project Jugnu • Resource Guide 3
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Demystifying Therapy: Creating a Purposeful Clinical Roadmap
          </h1>
          <p className="text-lg md:text-xl text-teal-50 max-w-2xl mx-auto leading-relaxed">
            Therapy is not about changing who your child is—it is about providing the tools to help them communicate, regulate, and thrive independently.
          </p>
        </div>
      </header>

      {/* Main Grid Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Core Article Area */}
        <article className="lg:col-span-2 space-y-12 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100">
          
          {/* Section 1: The Core Disciplines */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-teal-100 pb-2 mb-4">
              1. The Three Essential Pillars of Intervention
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Navigating the world of special needs therapies can feel like learning a completely new language. In India, parents are often pulled in multiple directions by different clinics. Focus your primary energy and resources on these three gold-standard, evidence-based paths:
            </p>

            <div className="space-y-6 mt-6">
              {therapies.map((t, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl p-6 bg-slate-50/50 hover:border-teal-300 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                    {t.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed"><strong className="text-slate-800">Clinical Focus:</strong> {t.focus}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-white p-4 rounded-lg border border-slate-100 mb-4">
                    <div>
                      <span className="font-bold text-teal-800 uppercase tracking-wider block mb-1">Recommended Pace</span>
                      <p className="text-slate-600">{t.frequency}</p>
                    </div>
                    <div>
                      <span className="font-bold text-teal-800 uppercase tracking-wider block mb-1">Everyday Home Extension</span>
                      <p className="text-slate-600">{t.homeStrategy}</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Targeted Breakthroughs:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                      {t.expectedOutcomes.map((out, oIdx) => <li key={oIdx}>{out}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Spotting Clinical Red Flags */}
          <section className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-teal-100 pb-2 mb-4">
              2. Clinical Accountability: Spotting Therapy Red Flags
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Not all therapy centers practice with the same standard of ethics or quality. Because high-demand clinics in cities like Mumbai, Delhi, and Bangalore can charge steep hourly rates, parents must act as vigilant supervisors.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Be prepared to question or re-evaluate your center if you observe any of the following systemic issues:
            </p>
            <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg my-6 space-y-2">
              <p className="text-xs text-rose-950 font-medium">❌ **The Black Box Setup:** The center refuses to let you watch sessions through a viewing glass, a CCTV feed, or by sitting quietly in the corner of the room.</p>
              <p className="text-xs text-rose-950 font-medium">❌ **The Crying Protocol:** The therapist tells you, &quot;It&apos;s normal for your child to scream and cry out of terror for the entire 45 minutes; they will eventually get used to it.&quot; (Distress prevents learning).</p>
              <p className="text-xs text-rose-950 font-medium">❌ **Zero Home Guidance:** The session finishes, the door opens, and you are handed your child with nothing more than a brief phrase like, &quot;He did fine today.&quot; No concrete home homework or strategies are shared.</p>
            </div>
          </section>

          {/* Section 3: Writing an Effective Goal Sheet */}
          <section className="bg-slate-900 text-slate-100 p-6 sm:p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-teal-400 mb-3">
              3. The Power of SMART Goals in Early Intervention
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Vague goals yield vague results. If a therapist writes down a milestone like *&quot;Will improve speech&quot;* or *&quot;Will behave better,&quot;* ask them to re-write it using the SMART objective framework.
            </p>
            
            <div className="space-y-3 border-t border-slate-800 pt-4 text-xs">
              <div className="grid grid-cols-3 gap-2">
                <span className="font-bold text-white">Vague / Ineffective Goal:</span>
                <span className="col-span-2 text-slate-400">&quot;The child will learn to match shapes and focus more.&quot;</span>
              </div>
              <div className="grid grid-cols-3 gap-2 border-t border-slate-800 pt-2">
                <span className="font-bold text-teal-400">SMART / Accountable Goal:</span>
                <span className="col-span-2 text-slate-200 font-medium">&quot;When presented with three distinct geometric plastic blocks (circle, square, triangle), the child will independently match them to their corresponding slots within 60 seconds, with no physical prompts, in 4 out of 5 consecutive attempts by October 30th.&quot;</span>
              </div>
            </div>
          </section>

          {/* Section 4: FAQs */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-teal-100 pb-2 mb-6">
              Therapy Selection &amp; Strategy FAQs
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left font-semibold text-slate-900 p-4 bg-slate-50 hover:bg-slate-100 flex justify-between items-center transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-teal-600 font-bold">{openFaq === index ? '−' : '+'}</span>
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
          
          {/* Action Framework Card */}
          <div className="bg-teal-600 text-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold mb-3">Vetting a Therapist: 3 Interview Questions</h3>
            <p className="text-xs text-teal-100 mb-4">
              Ask these specific questions to evaluate any new specialist before committing to a long-term billing plan:
            </p>
            <div className="space-y-3 text-xs text-teal-50">
              <p><strong>1. &quot;What registry or body are you licensed under?&quot;</strong> (Look for Rehabilitation Council of India - RCI registration for psychologists/special educators, or AIOTA certification for OTs).</p>
              <p><strong>2. &quot;How do you handle transition anxiety when a child refuses to enter the room?&quot;</strong> (Avoid practitioners who use threats, physical containment, or food deprivation as behavioral levers).</p>
              <p><strong>3. &quot;How frequently will we sit down together to officially review and update the IEP goals?&quot;</strong> (A professional team should insist on a review every 90 days).</p>
            </div>
          </div>

          {/* Parent Homework Box */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
            <h3 className="text-base font-bold text-slate-900">The 80/20 Rule of Therapy</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your child spends roughly 2 to 3 hours a week inside a clinic, but over **100 waking hours** at home with family. 
            </p>
            <blockquote className="border-l-4 border-amber-400 pl-3 text-xs italic text-slate-600 bg-amber-50/50 p-2 rounded-r">
              &quot;Clinic hours introduce new skills, but home hours are where those skills actually turn into permanent habits.&quot;
            </blockquote>
          </div>

          {/* Hub Navigation Tracker */}
         <ResourceHubNavigation currentPage="/resources/therapy-guidance" />

        </aside>

      </main>

      {/* Footer Branded Layout */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 border-t border-slate-800 text-center text-xs mt-16">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="text-slate-300 font-medium text-sm">Project Jugnu — Lighting paths for unique minds.</p>
          <p>The clinical insights shared here represent global evidence-based standards. Project Jugnu is an independent educational platform and does not receive financial kickbacks from any listed medical practitioners or clinical institutions.</p>
          <p className="pt-4 text-slate-600">&copy; 2026 Project Jugnu Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}