import React, { useState } from 'react';
import { createFileRoute, Link } from "@tanstack/react-router";
import ResourceHubNavigation from "../../components/ResourceHubNavigation";
export const Route = createFileRoute("/resources/daily-living-support")({
  component: DailyLivingSupport,
});
// SEO Metadata for reference:
// Title: Autism Daily Living Skills & Independent Support | Project Jugnu
// Description: Practical strategies for autism toilet training, sensory food aversion, sleep routines, and grooming inside an Indian household setup.

interface RoutineStep {
  area: string;
  challenge: string;
  strategy: string;
  actionSteps: string[];
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function DailyLivingSupport() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const lifeSkills: RoutineStep[] = [
    {
      area: "Sensory-Friendly Toilet Training",
      challenge: "Fear of the loud flushing sound, aversion to the cold toilet seat, or difficulty sensing internal biological urges (poor interoception).",
      strategy: "Transform the bathroom from an unpredictable, scary space into a highly structured, inviting environment.",
      actionSteps: [
        "Use a sturdy footstool (like a small plastic bathroom stool/patla) so the child's feet are firmly planted, providing physical security.",
        "Introduce a visual breakdown of the steps using laminated cards hung directly on the bathroom door (Drop pants → Sit → Wipe → Flush → Wash hands).",
        "Flush the toilet only *after* your child has completely exited the bathroom if the acoustic echo triggers intense panic."
      ]
    },
    {
      area: "Managing Extreme Food Selectivity",
      challenge: "Refusing cooked food based entirely on texture, color, or temperature; restricting diet to only white rice, specific dry snacks, or soft purees.",
      strategy: "Implement systematic desensitization without forcing or creating power struggles at the dining table.",
      actionSteps: [
        "Place a tiny crumb of the new food item on a separate 'exploration plate' next to their meal, without requiring them to eat it initially.",
        "Encourage sensory exploration in a non-threatening way: ask them to just touch it with their finger, then smell it, then lick it.",
        "Gradually blend preferred textures with new ones (e.g., if they love crispy textures, lightly pan-fry finely grated vegetables into a crisp paratha)."
      ]
    },
    {
      area: "Establishing Consistent Sleep Hygiene",
      challenge: "Difficulty settling down at night, frequent night-waking, or requiring hours of rocking or parental presence to fall asleep.",
      strategy: "Signal the brain for sleep through a strict, repetitive sensory wind-down sequence.",
      actionSteps: [
        "Eliminate all screens (smartphones, TVs, tablets) at least 90 minutes before bedtime, as blue light disrupts melatonin production.",
        "Incorporate deep-pressure input: try a firm massage with coconut oil, or use a snugly tucked-in heavy blanket across their lap/legs.",
        "Keep the bedroom ambient environment consistent: utilize continuous white noise or a low-speed ceiling fan to mask abrupt outdoor sounds."
      ]
    },
    {
      area: "Haircuts & Dental Grooming",
      challenge: "Intense aversion to the vibrating buzz of trimmers, the cold touch of metal scissors, or the intense taste and foaming texture of commercial toothpaste.",
      strategy: "Desensitize the tools over weeks before attempting the actual grooming process.",
      actionSteps: [
        "For haircuts, use a manual pair of scissors instead of a noisy electric trimmer; cut hair at home in a familiar room while they watch a favorite video.",
        "Switch to unflavored, non-foaming training toothpaste, or start by using a soft silicone finger brush without any paste at all.",
        "Play a game where you take turns brushing a favorite plastic doll's teeth or clipping a family member's hair to model safety."
      ]
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "My child is 7 years old and still relies on diapers. Is it too late to start toilet training?",
      answer: "It is never too late. Many neurodivergent children achieve bladder and bowel control much later than their neurotypical peers due to unique sensory processing variations or delayed interoceptive awareness. Focus entirely on readiness signs—like staying dry for two hours or pulling at a wet diaper—rather than chronological age milestones."
    },
    {
      question: "How do I handle public restrooms in Indian malls or railway stations?",
      answer: "Public restrooms can be highly distressing due to bright fluorescent lights, echoes, and automated, loud hand dryers. Always carry a sensory emergency kit in your bag containing noise-canceling headphones, a pocket pack of wet wipes, and a small familiar toy to anchor their attention."
    },
    {
      question: "Should I hide healthy vegetables by blending them into purees for their meals?",
      answer: "While pureeing is an acceptable temporary bridge to ensure vital nutrition, it doesn't teach the child to accept the actual vegetable. Over time, try to transition from completely smooth purees to slightly textured mashes, gradually building tolerance for diverse food consistencies."
    },
    {
      question: "Why does my child resist wearing certain clothes, like festive traditional wear?",
      answer: "Indian festive wear often contains embroidery, stiff zari borders, tags, or synthetic fabrics that can feel like sandpaper to a child with tactile hypersensitivity. Prioritize comfort by choosing soft, tagless cotton clothes, or wash new garments multiple times to soften the texture before expecting them to wear it."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-violet-600 to-purple-700 text-white py-16 px-4 sm:px-6 lg:px-8 text-center shadow-md">
        <div className="max-w-4xl mx-auto">
          <span className="bg-purple-400 text-purple-950 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full">
            Project Jugnu • Resource Guide 4
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Nurturing Independence: Mastering Daily Living Routines
          </h1>
          <p className="text-lg md:text-xl text-purple-50 max-w-2xl mx-auto leading-relaxed">
            Building self-reliance in fundamental tasks creates long-term dignity. Discover practical, low-cost modifications for your household routines.
          </p>
        </div>
      </header>

      {/* Main Grid Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Core Article Content */}
        <article className="lg:col-span-2 space-y-12 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100">
          
          {/* Section 1: Introduction to ADLs */}
          <section className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-purple-100 pb-2 mb-4">
              1. Redefining Daily Routines through a Sensory Lens
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Activities of Daily Living (ADLs)—such as eating, sleeping, grooming, and using the washroom—appear automatic to most. However, for a neurodivergent child, each of these tasks requires the brain to coordinate, sequence, and process an immense volume of sensory inputs simultaneously.
            </p>
            <p className="text-slate-600 leading-relaxed">
              When a child resists brushing their teeth or throws a tantrum at the dinner table, it is rarely willful defiance. More often, it is an involuntary stress response to sensory overload. By systematically breaking down tasks and modifying the physical environment, we can help our children build independence and reduce daily stress.
            </p>
          </section>

          {/* Section 2: Core Life Skills Breakdown */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-purple-100 pb-2 mb-4">
              2. Practical Home Strategies for Core Life Skills
            </h2>

            <div className="space-y-6">
              {lifeSkills.map((skill, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl p-6 bg-slate-50/50 hover:border-purple-300 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    {skill.area}
                  </h3>
                  <div className="space-y-2 text-sm text-slate-600 mb-4">
                    <p><strong className="text-slate-800">The Challenge:</strong> {skill.challenge}</p>
                    <p><strong className="text-slate-800">The Framework Strategy:</strong> {skill.strategy}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-slate-100">
                    <h4 className="text-xs font-bold text-purple-800 uppercase tracking-wider mb-2">Step-by-Step Action Plan:</h4>
                    <ul className="space-y-2 text-xs text-slate-600 list-none pl-0">
                      {skill.actionSteps.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="text-purple-600 font-bold">👉</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Task Analysis Visual Explanation */}
          <section className="bg-slate-900 text-slate-100 p-6 sm:p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-purple-400 mb-3">
              3. The Technique of Task Analysis
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              To a neurodivergent mind, an instruction like *&quot;Go take a bath&quot;* can feel overwhelmingly large and ambiguous. **Task Analysis** is the process of breaking an everyday skill down into its smallest, micro-executable steps.
            </p>
            <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 space-y-2 text-xs">
              <p className="text-slate-400 font-semibold mb-1">Example: Micro-steps for Handwashing</p>
              <p className="text-slate-300"><span className="text-purple-400 font-bold">Step 1:</span> Turn on the water tap gently.</p>
              <p className="text-slate-300"><span className="text-purple-400 font-bold">Step 2:</span> Put both hands under the running water to get them wet.</p>
              <p className="text-slate-300"><span className="text-purple-400 font-bold">Step 3:</span> Press the liquid soap dispenser pump exactly one time.</p>
              <p className="text-slate-300"><span className="text-purple-400 font-bold">Step 4:</span> Rub your palms together to make soap bubbles while counting to 10.</p>
              <p className="text-slate-300"><span className="text-purple-400 font-bold">Step 5:</span> Rinse all the soap bubbles off completely under the tap water.</p>
              <p className="text-slate-300"><span className="text-purple-400 font-bold">Step 6:</span> Turn off the water tap completely.</p>
              <p className="text-slate-300"><span className="text-purple-400 font-bold">Step 7:</span> Dry your hands using the clean, soft hanging towel.</p>
            </div>
          </section>

          {/* Section 4: FAQs */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-purple-100 pb-2 mb-6">
              Daily Living &amp; Home Management FAQs
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left font-semibold text-slate-900 p-4 bg-slate-50 hover:bg-slate-100 flex justify-between items-center transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-purple-600 font-bold">{openFaq === index ? '−' : '+'}</span>
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
          
          {/* Visual Schedule Creation Card */}
         

          {/* Quick Tracking Insight */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
            <h3 className="text-base font-bold text-slate-900">Consistency Over Speed</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              It is often much faster for a parent to tie a child&apos;s shoes, feed them, or dress them out of a hurry to leave the house. 
            </p>
            <p className="text-xs text-amber-800 font-medium bg-amber-50 p-2 rounded border border-amber-200">
              ⚠️ Tip: Dedicate unhurried weekend slots specifically to practicing these life skills, allowing your child to work through the steps at their own natural pace.
            </p>
          </div>

          {/* Hub Navigation Tracker */}
          

        </aside>

      </main>
              <ResourceHubNavigation currentPage="/resources/daily-living-support" />
      {/* Footer Layout */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 border-t border-slate-800 text-center text-xs mt-16">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="text-slate-300 font-medium text-sm">Project Jugnu — Lighting paths for unique minds.</p>
          <p>The daily care methodologies shared here are intended to support general functional independence. For complex feeding structural difficulties or severe physical motor delays, seek specialized medical input from a licensed dysphagia expert or physical therapist.</p>
          <p className="pt-4 text-slate-600">&copy; 2026 Project Jugnu Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}