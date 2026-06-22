import React, { useState } from 'react';
import { createFileRoute, Link } from "@tanstack/react-router";
import ResourceHubNavigation from "../../components/ResourceHubNavigation";
export const Route = createFileRoute("/resources/behaviour-support")({
  component: BehaviorSupport,
});
// SEO Metadata for reference:
// Title: Autism Behavior Support & Meltdown Strategies | Project Jugnu
// Description: Evidence-based approaches to understanding autistic behaviors. Learn the ABC data framework, distinguishing meltdowns from tantrums, and sensory regulation.

interface BehaviorTool {
  title: string;
  concept: string;
  example: string;
  steps: string[];
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function BehaviorSupport() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tools: BehaviorTool[] = [
    {
      title: "The ABC Tracking Framework",
      concept: "Behaviors do not happen in a vacuum. The ABC framework decodes *why* a behavior occurs by tracking what happened immediately before and after it.",
      example: "Tracking a recurring screaming episode during homework time to find the hidden pattern.",
      steps: [
        "Antecedent (A): Document exactly what happened before the behavior. (e.g., Mother turned off the cartoon and sat down with a math worksheet).",
        "Behavior (B): Describe the exact physical action clearly. (e.g., Child threw the pencil, dropped to the floor, and screamed).",
        "Consequence (C): Note what happened immediately after. (e.g., Worksheet was put away, and child was sent to their room for a break). *Insight: The behavior successfully allowed the child to escape the math task.*"
      ]
    },
    {
      title: "Co-Regulation & Meltdown De-escalation",
      concept: "A meltdown is an involuntary neurological overload, not a behavioral choice. During a meltdown, a child's nervous system is in a state of fight-or-flight, meaning logic or discipline will not work.",
      example: "Supporting a child who is sobbing, rocking, or flailing due to a sudden change in plans.",
      steps: [
        "Prioritize physical safety by silently clearing the immediate area of sharp objects, hard edges, or onlookers.",
        "Lower your voice tone, slow your breathing, and drop to their eye level. Your calm nervous system acts as an anchor for theirs.",
        "Keep your words to an absolute minimum. Use short phrases like 'You are safe' or 'I am right here' rather than asking questions or lecturing."
      ]
    },
    {
      title: "Visual Schedules and Proactive Transitions",
      concept: "Anxiety caused by unpredictability frequently manifests as intense resistance or behavioral outbursts. Visual schedules make abstract daily transitions concrete and predictable.",
      example: "Transitioning smoothly from weekend playtime to getting ready for school on a Monday morning.",
      steps: [
        "Create a simple vertical checklist using clear icons or photos representing: Brush Teeth ➔ Eat Breakfast ➔ Wear Shoes ➔ School Bus.",
        "Give clear, sensory-guided transition warnings: 'In 5 minutes, the tablet goes away, and we put on shoes.' Use a physical visual timer where the red section disappears as time runs out.",
        "Let the child physically flip over or cross off the completed task to give them a satisfying sense of control over their schedule."
      ]
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "How do I tell the difference between a behavioral tantrum and a sensory meltdown?",
      answer: "A tantrum is goal-directed; the child is trying to obtain something they want (e.g., a toy or candy) and will usually look to see if you are watching. If you give them the item, the behavior stops instantly. A meltdown is a total neurological system crash due to sensory or emotional overload. The child has lost control, does not care if they have an audience, and will not stop immediately even if given an incentive."
    },
    {
      question: "What should I do when my child starts hitting themselves or banging their head?",
      answer: "Self-injurious behavior is often an extreme form of communication or sensory regulation. First, block the impact immediately using something soft (like sliding a cushion or your hand between their head and the wall) without pinning them down. Long-term, work with an Occupational Therapist to find safe sensory alternatives that offer similar deep-pressure input, such as weighted items or deep joint compressions."
    },
    {
      question: "Is it okay to use time-outs when my child acts out aggressively?",
      answer: "Traditional isolating time-outs are rarely effective for autistic children because they don't teach a replacement skill and can feel like terrifying abandonment, escalating anxiety. Instead, try a 'Time-In' or a dedicated 'Calm-Down Corner' stocked with their favorite sensory tools. Go with them to this safe space to help them regulate their emotions before you try to address or discuss what went wrong."
    },
    {
      question: "Why does my child cover their ears and scream in busy places like grocery stores or markets?",
      answer: "This is a classic sensory avoidance response. To a hyper-sensitive nervous system, a crowded Indian market can feel like a painful assault of overlapping sounds, bright lights, and smells. They cover their ears to block out the overwhelming sensory input. Providing them with high-quality noise-canceling headphones before you step into these crowded spaces can significantly lower their distress."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16 px-4 sm:px-6 lg:px-8 text-center shadow-md">
        <div className="max-w-4xl mx-auto">
          <span className="bg-emerald-400 text-emerald-950 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full">
            Project Jugnu • Resource Guide 6
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Decoding Behavior: A Compassionate, Analytical Approach
          </h1>
          <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto leading-relaxed">
            Every behavior is a form of communication. Learn to look past the surface actions to read the hidden sensory, environmental, and emotional needs your child is trying to express.
          </p>
        </div>
      </header>

      {/* Main Layout Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Core Content Element */}
        <article className="lg:col-span-2 space-y-12 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100">
          
          {/* Section 1: Behavior as Communication */}
          <section className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-emerald-100 pb-2 mb-4">
              1. Moving Beyond Compliance and Punishment
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              When an autistic child screams, bites, throws objects, or shuts down, it is easy to view these actions as willful defiance. However, these intense behaviors are almost always an emergency response to feeling completely overwhelmed, misunderstood, or unable to communicate using words.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our goal shouldn't be to force quiet compliance through fear or punishment, but to act as detectives. When we find and treat the underlying trigger—whether it's an unexpressed pain, a loud ambient noise, or a confusing transition—the challenging behavior naturally decreases because it is no longer needed.
            </p>
          </section>

          {/* Section 2: Frameworks & Intervention */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-emerald-100 pb-2 mb-4">
              2. Practical Behavior Support Frameworks
            </h2>

            <div className="space-y-6">
              {tools.map((tool, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl p-6 bg-slate-50/50 hover:border-emerald-300 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {tool.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-2 leading-relaxed"><strong className="text-slate-800">The Analytical Lens:</strong> {tool.concept}</p>
                  <p className="text-slate-600 text-sm mb-4"><strong className="text-slate-800">Real-World Case:</strong> {tool.example}</p>

                  <div className="bg-white p-4 rounded-lg border border-slate-100">
                    <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">How to Put This Into Practice:</h4>
                    <ul className="space-y-1.5 text-xs text-slate-600 list-inside list-disc">
                      {tool.steps.map((step, sIdx) => (
                        <li key={sIdx} className="leading-relaxed">{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: The Four Functions of Behavior Table */}
          <section className="bg-slate-900 text-slate-100 p-6 sm:p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-emerald-400 mb-3">
              3. The Four Core Functions of Behavior
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Behavioral science shows that almost all human behaviors serve at least one of these four fundamental functions. Recognizing the function helps you choose the correct response:
            </p>
            <div className="overflow-x-auto text-xs mt-4">
              <table className="w-full border-collapse border border-slate-700 text-left">
                <thead>
                  <tr className="bg-slate-800 text-emerald-400">
                    <th className="p-2 border border-slate-700">Function</th>
                    <th className="p-2 border border-slate-700">What It Means</th>
                    <th className="p-2 border border-slate-700">The Right Response</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr>
                    <td className="p-2 border border-slate-700 font-bold">Escape / Avoidance</td>
                    <td className="p-2 border border-slate-700">Trying to get away from an uncomfortable task, person, or environment.</td>
                    <td className="p-2 border border-slate-700">Break tasks into much smaller steps; provide regular, predictable breaks.</td>
                  </tr>
                  <tr className="bg-slate-850">
                    <td className="p-2 border border-slate-700 font-bold">Tangible Access</td>
                    <td className="p-2 border border-slate-700">Trying to get a specific physical object, food item, or favorite activity.</td>
                    <td className="p-2 border border-slate-700">Teach them to use a picture card or word to request it calmly before giving it.</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-700 font-bold">Attention Seeking</td>
                    <td className="p-2 border border-slate-700">Desiring connection, reaction, or eye contact from a parent or caregiver.</td>
                    <td className="p-2 border border-slate-700">Provide lots of positive attention when they are calm; ignore minor behaviors.</td>
                  </tr>
                  <tr className="bg-slate-850">
                    <td className="p-2 border border-slate-700 font-bold">Sensory / Automatic</td>
                    <td className="p-2 border border-slate-700">The behavior itself feels physically good or relieves inner sensory pain.</td>
                    <td className="p-2 border border-slate-700">Do not stop safe stimming; provide alternative tools like chew toys or swings.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: FAQs */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-emerald-100 pb-2 mb-6">
              Behavioral Regulation &amp; Crisis FAQs
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left font-semibold text-slate-900 p-4 bg-slate-50 hover:bg-slate-100 flex justify-between items-center transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-emerald-600 font-bold">{openFaq === index ? '−' : '+'}</span>
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
          
          {/* Meltdown vs Tantrum Visual Breakdown */}
          <div className="bg-emerald-600 text-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold mb-2">The Quick Crisis Rule</h3>
            <p className="text-xs text-emerald-100 leading-relaxed mb-3">
              Your response must match the root cause of the behavior. Reacting to a meltdown with discipline can make things much worse:
            </p>
            <div className="space-y-3 text-xs bg-emerald-700 p-3 rounded text-emerald-50">
              <p>🚨 **If it is a Tantrum (Goal-Driven):** Stay firm, maintain your boundaries, ignore the outburst, and reward them once they calm down.</p>
              <p>🤍 **If it is a Meltdown (System Overload):** Drop all demands, remove sensory stressors, focus entirely on comfort, and assure their safety.</p>
            </div>
          </div>

          {/* Proactive Environmental Management */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
            <h3 className="text-base font-bold text-slate-900">Setting Up a Sensory De-escalation Space</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Instead of sending a distressed child to their room as a punishment, encourage them to head to a cozy, quiet corner to help regulate their system:
            </p>
            <ul className="space-y-2 text-xs text-slate-600 list-none pl-0">
              <li>⛺ **The Setup:** A small tent, pop-up pod, or a quiet corner behind a sofa with soft pillows and heavy blankets.</li>
              <li>🎒 **The Kit:** Pack a storage basket with noise-canceling headphones, fidget spinners, sensory pop-its, and smooth textures.</li>
              <li>💡 **The Environment:** Keep the lighting low and dim. Avoid harsh fluorescent bulbs or loud background televisions.</li>
            </ul>
          </div>

          {/* Navigation Hub */}
         

        </aside>

      </main>
      <ResourceHubNavigation currentPage="/resources/behaviour-support" />

      {/* Footer Element */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 border-t border-slate-800 text-center text-xs mt-16">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="text-slate-300 font-medium text-sm">Project Jugnu — Lighting paths for unique minds.</p>
          <p>Behavioral profiles are highly individualized. The strategies outlined above serve as foundational educational guidance and should ideally be adapted in partnership with an RCI-registered Behavior Analyst, Clinical Psychologist, or licensed Occupational Therapist.</p>
          <p className="pt-4 text-slate-600">&copy; 2026 Project Jugnu Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}