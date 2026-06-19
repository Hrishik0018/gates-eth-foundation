import React, { useState } from 'react';
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/resources/parent-wellbeing")({
  component: ParentWellbeing,
});
// SEO Metadata for reference:
// Title: Parent Wellbeing & Caregiver Burnout in Autism | Project Jugnu
// Description: A compassionate psychological survival guide for Indian special needs parents. Learn to manage caregiver burnout, navigate family stigma, and practice realistic self-care.

interface WellBeingPillar {
  title: string;
  challenge: string;
  mindsetShift: string;
  actionSteps: string[];
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function ParentWellbeing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pillars: WellBeingPillar[] = [
    {
      title: "Deconstructing Caregiver Burnout",
      challenge: "Chronic exhaustion, hyper-vigilance, emotional numbness, and feeling constant guilt whenever you spend even ten minutes focusing on yourself.",
      mindsetShift: "Self-care is not an act of selfishness; it is a tactical prerequisite for caregiving. You cannot pour structural support from a completely empty cup.",
      actionSteps: [
        "Audit your daily schedule to identify 'micro-breaks'—even 10 continuous minutes of drinking tea alone or listening to music without active demands.",
        "Set firm internal boundaries around your sleep schedule; push back secondary household chores to protect baseline physical recovery.",
        "Learn to recognize your early somatic burnout markers, such as a tightening jaw, persistent headaches, or sudden irritability."
      ]
    },
    {
      title: "Navigating Societal & Family Stigma",
      challenge: "Dealing with unsolicited advice from extended relatives, intrusive questions from neighbors, or feeling judged during public meltdowns.",
      mindsetShift: "You are responsible for your child's safety and emotional growth, not for educating or comforting uncomfortable onlookers.",
      actionSteps: [
        "Draft a single, objective, repeatable sentence for relatives: 'Our child's brain processes environments differently, and we are working with specialists.' Then change the topic.",
        "Minimize time spent with individuals who consistently drain your emotional energy or express toxic blame regarding your parenting styles.",
        "When public meltdowns happen, look down at your child to co-regulate. Intentionally block out the gaze of surrounding onlookers."
      ]
    },
    {
      title: "Building Sustainable Peer Support Networks",
      challenge: "Feeling completely isolated because neurotypical parents in your local neighborhood cannot truly relate to your daily operational reality.",
      mindsetShift: "True community doesn't depend on proximity; it is built with people who share your journey and deeply understand your lived experiences.",
      actionSteps: [
        "Join trusted digital and physical parent advocacy support groups across India (such as Action for Autism or local state-level chapters).",
        "Engage in transparent sharing with other special needs parents—discussing everything from reliable doctors to emotional processing without filter.",
        "Form structured mutual support agreements with trusted parents to trade off brief caregiving windows for personal breaks."
      ]
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "How do I stop feeling constant anxiety and grief about my child's long-term future after I am gone?",
      answer: "This is a profound, valid concern felt by almost every special needs parent in India. The antidote to future-focused panic is present-focused structure. Channel that anxiety into setting up legal and financial protections early: look into creating a private family trust, naming explicit legal guardians, and registering with government long-term care frameworks like the National Trust's NIRAMAYA and GHARAUNDA schemes."
    },
    {
      question: "How do we protect our marriage and relationship under the intense weight of daily therapies?",
      answer: "Special needs caregiving can easily consume a relationship until you become institutional co-managers rather than partners. Dedicate a strict 'no-therapy talk' zone or window every week. Even 15 minutes at the end of the evening where discussions about clinics, milestones, and schools are forbidden helps protect your core connection."
    },
    {
      question: "I feel intense resentment toward parents of neurotypical children. Is something wrong with me?",
      answer: "Absolutely not. What you are feeling is a completely normal aspect of chronic grief and systemic exhaustion. It is entirely human to feel a pang of sadness or anger when you see other children easily reaching milestones that your child has to fight intensely for. Acknowledge the feeling without judgment, and remind yourself that their journey has no bearing on the profound value of your child's unique milestones."
    },
    {
      question: "When should I consider seeking professional therapy or psychiatric help for myself?",
      answer: "If you experience persistent feelings of hopelessness, changes in sleep or appetite that aren't tied to caregiving schedules, regular panic attacks, or find yourself crying frequently throughout the week, please connect with a trauma-informed clinical psychologist. Seeking mental health support is a sign of strength and a vital step in maintaining your well-being."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-rose-600 to-pink-700 text-white py-16 px-4 sm:px-6 lg:px-8 text-center shadow-md">
        <div className="max-w-4xl mx-auto">
          <span className="bg-rose-400 text-rose-950 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full">
            Project Jugnu • Resource Guide 7
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Sustaining the Caregiver: Prioritizing Your Own Well-Being
          </h1>
          <p className="text-lg md:text-xl text-rose-50 max-w-2xl mx-auto leading-relaxed">
            You cannot guide your child through the dark if your own lantern runs out of fuel. Explore practical strategies to handle burnout, set emotional boundaries, and honor your personal journey.
          </p>
        </div>
      </header>

      {/* Main Layout Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Core Content Element */}
        <article className="lg:col-span-2 space-y-12 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100">
          
          {/* Section 1: The Invisible Caregiver */}
          <section className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-rose-100 pb-2 mb-4">
              1. Honoring the Person Behind the Parent
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              In the cultural fabric of India, parenting is often equated with complete self-sacrifice. When a child receives a developmental diagnosis, the mother and father are frequently expected to erase their personal lives, careers, and emotional needs entirely to become full-time therapy administrators.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This path is fundamentally unsustainable and regularly leads to profound psychological burnout. Your child does not need a perfect, self-sacrificing martyr; they need a regulated, emotionally stable, and present parent. Prioritizing your mental health is not an afterthought—it is a core pillar of your child's developmental intervention plan.
            </p>
          </section>

          {/* Section 2: Wellbeing Pillars */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-rose-100 pb-2 mb-4">
              2. Structural Pillars of Caregiver Resilience
            </h2>

            <div className="space-y-6">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl p-6 bg-slate-50/50 hover:border-rose-300 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-2 leading-relaxed"><strong className="text-slate-800">The Everyday Reality:</strong> {pillar.challenge}</p>
                  <p className="text-slate-600 text-sm mb-4"><strong className="text-slate-800">The Mindset Shift:</strong> {pillar.mindsetShift}</p>

                  <div className="bg-white p-4 rounded-lg border border-slate-100">
                    <h4 className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-2">Sustainable Actions:</h4>
                    <ul className="space-y-1.5 text-xs text-slate-600 list-inside list-disc">
                      {pillar.actionSteps.map((step, sIdx) => (
                        <li key={sIdx} className="leading-relaxed">{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: The Radical Acceptance Paradigm */}
          <section className="bg-slate-900 text-slate-100 p-6 sm:p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-rose-400 mb-3">
              3. Processing the Grief Cycle in Neurodivergence
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Grief after a diagnosis isn't a single event that you simply get over; it is a cyclical process that can re-emerge during major lifecycle transitions (such as when your child reaches school age, puberty, or adulthood).
            </p>
            <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 text-xs space-y-2">
              <p className="text-slate-200"><strong className="text-white">Acknowledgment:</strong> Allow yourself to mourn the idealized milestones you envisioned (like typical sports, mainstream academic achievements, or conventional career steps).</p>
              <p className="text-slate-200"><strong className="text-white">Separation:</strong> Intentionally untangle your personal self-worth from the daily behavioral successes or challenges of your child.</p>
              <p className="text-slate-200"><strong className="text-white">Celebration:</strong> Shift your baseline perspective to view and celebrate progress against your child's own personal history, rather than comparing them to neurotypical societal timelines.</p>
            </div>
          </section>

          {/* Section 4: FAQs */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-rose-100 pb-2 mb-6">
              Caregiver Mental Health &amp; Balance FAQs
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left font-semibold text-slate-900 p-4 bg-slate-50 hover:bg-slate-100 flex justify-between items-center transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-rose-600 font-bold">{openFaq === index ? '−' : '+'}</span>
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
          
          {/* Quick Boundary Rules */}
          <div className="bg-rose-600 text-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold mb-2">The Guilt-Free Manifesto</h3>
            <p className="text-xs text-rose-100 leading-relaxed mb-3">
              Repeat these baseline internal truths whenever parental guilt begins to cloud your mental space:
            </p>
            <div className="space-y-2 text-xs bg-rose-700 p-3 rounded text-rose-50">
              <p>🌸 It is completely okay to feel deeply exhausted and wish things were easier.</p>
              <p>🌸 It is completely okay to say 'no' to family gatherings that overwhelm your child.</p>
              <p>🌸 It is completely okay to let your child have safe screen time if it allows you to rest and reset.</p>
            </div>
          </div>

          {/* Crisis Contact Helpline Box */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
            <h3 className="text-base font-bold text-slate-900">National Trust Institutional Safety Nets</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The Indian Government provides specific, long-term legal and care structures to support families through adulthood:
            </p>
            <div className="text-xs space-y-2 text-slate-700">
              <p className="p-2 bg-slate-50 rounded">🏛️ **Legal Guardianship Status:** Secure local district committee appointments for your child's protection once they cross 18 years of age under the National Trust Act.</p>
              <p className="p-2 bg-slate-50 rounded">🏡 **Gharaunda Scheme:** Group care facilities established for the sustainable adult residential living parameters of individuals with developmental profiles.</p>
            </div>
          </div>

          {/* Navigation Hub */}
          <nav className="space-y-2 text-sm">
  <span>1. After Diagnosis</span>
  ...
  <span className="block p-2 rounded bg-slate-800 text-rose-300 font-medium">
    7. Parent Wellbeing (Current)
    <Link
  to="/resources/government-schemes"
  className="block p-3 rounded-xl text-slate-300 hover:bg-slate-800 transition-colors"
>
  8. Government Schemes & Legal Rights
</Link>

<Link
  to="/resources/down-syndrome-guide"
  className="block p-3 rounded-xl text-slate-300 hover:bg-slate-800 transition-colors"
>
  9. Down Syndrome Guide
</Link>
  </span>
</nav>

        </aside>

      </main>

      {/* Footer Element */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 border-t border-slate-800 text-center text-xs mt-16">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="text-slate-300 font-medium text-sm">Project Jugnu — Lighting paths for unique minds.</p>
          <p>The mental wellness information outlined across this structural resource module serves educational and supportive baseline advocacy goals. It does not replace individualized psychological, clinical, or counseling interventions.</p>
          <p className="pt-4 text-slate-600">&copy; 2026 Project Jugnu Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}