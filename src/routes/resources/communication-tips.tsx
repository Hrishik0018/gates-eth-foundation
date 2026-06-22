import React, { useState } from 'react';
import { createFileRoute, Link } from "@tanstack/react-router";
import ResourceHubNavigation from "../../components/ResourceHubNavigation";
export const Route = createFileRoute("/resources/communication-tips")({
  component: CommunicationTips,
});
// SEO Metadata for reference:
// Title: Autism Communication Tips & AAC Strategies | Project Jugnu
// Description: Practical frameworks for expanding verbal and non-verbal communication in autistic children. Learn about PECS, handling echolalia, and utilizing AAC apps.

interface StrategyCard {
  title: string;
  concept: string;
  application: string;
  actionItems: string[];
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function CommunicationTips() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const strategies: StrategyCard[] = [
    {
      title: "Utilizing PECS (Picture Exchange Communication System)",
      concept: "Teaching the child to exchange a physical picture card or cutout symbol for an object they intensely desire, grounding the abstract concept of communication into a tangible action.",
      application: "Start with a single picture card of their absolute favorite snack (e.g., a biscuit) or toy.",
      actionItems: [
        "When the child reaches for the biscuit, guide their hand to pick up the biscuit card instead and hand it to you.",
        "The moment the card touches your hand, immediately give them the biscuit while stating the word clearly: 'Biscuit!'",
        "Gradually expand this to a communication board where they can choose between multiple pictures to express specific options."
      ]
    },
    {
      title: "Understanding and Channeling Echolalia",
      concept: "Echolalia is the repetition of words, phrases, or entire cartoon scripts. It is not meaningless noise; it is a valid, foundational step toward functional language processing.",
      application: "Acknowledge the emotional tone or underlying intent of the repeated phrase instead of correcting their grammar.",
      actionItems: [
        "If your child repeats a line from a cartoon when they are anxious, treat it as a sign of sensory distress and reduce environmental noise.",
        "Use interactive pause techniques. If they say 'Do you want water?' to mean they are thirsty, validate and rephrase smoothly: 'Yes, I want water,' and hand it over.",
        "Do not tell them to 'Stop repeating.' Use their scripts to transition into interactive play by taking turns reciting the lines."
      ]
    },
    {
      title: "Deploying High-Tech AAC (Augmentative Apps)",
      concept: "Using digital tablet or mobile applications (like Avaz, Jellow, or Proloquo2Go) where pressing icons outputs synthesized speech, giving non-verbal children an immediate digital voice.",
      application: "Integrate the device into daily domestic routines as an interactive communication tool, not a video entertainment platform.",
      actionItems: [
        "Model the application consistently: tap the 'Eat' icon yourself right before serving lunch so they see you using the system too.",
        "Keep the device easily accessible at their eye level throughout the day; do not hide it away in a drawer or lock it behind a parental password.",
        "Start with broad, high-frequency core words ('Want', 'More', 'Stop', 'Go') rather than focusing exclusively on specific noun labels."
      ]
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "Why does my child look away when I tell them to 'Look into my eyes' while talking?",
      answer: "For many individuals on the autism spectrum, processing auditory information (listening to your words) while simultaneously processing intense visual information (maintaining direct eye contact) can cause cognitive and sensory overload. Your child might actually understand and listen to you much better when they turn their ear toward you instead of forcing eye contact."
    },
    {
      question: "How can I reduce my child's intense frustration when they cannot express what they want?",
      answer: "Frustration tantrums often occur when a child feels completely trapped by a lack of communication options. Introduce visual choice boards. Instead of asking an open-ended question like 'What do you want to eat?', hold up two physical items (e.g., an apple and a banana) at their eye level and let them tap or point to their choice."
    },
    {
      question: "Is it a good strategy to pretend I don't understand their gestures to force them to speak?",
      answer: "No, this approach can often backfire. Intentionally ignoring a child's genuine attempt to communicate via gestures or pointing can spike cortisol levels and lead to meltdowns or withdrawal. Instead, accept their gesture, label the item clearly ('Oh, you want the toy!'), and model the phrase for them without forcing them to repeat it back."
    },
    {
      question: "Does using a mix of languages at home (like Hindi and English) confuse an autistic child?",
      answer: "Consistency is helpful, but exposing your child to multiple languages used naturally at home does not cause or worsen language delays. Focus on speaking in short, grammatically simple sentences, and use clear visual cues alongside whatever language you are using to help them process meaning."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8 text-center shadow-md">
        <div className="max-w-4xl mx-auto">
          <span className="bg-cyan-400 text-cyan-950 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full">
            Project Jugnu • Resource Guide 5
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Connecting Voices: Intentional Tools for Functional Communication
          </h1>
          <p className="text-lg md:text-xl text-cyan-50 max-w-2xl mx-auto leading-relaxed">
            Communication extends far beyond spoken words. Learn to implement visual frameworks, understand echolalia, and leverage digital tools to support your child's expression.
          </p>
        </div>
      </header>

      {/* Main Layout Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Core Content Element */}
        <article className="lg:col-span-2 space-y-12 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100">
          
          {/* Section 1: Rethinking Speech */}
          <section className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-cyan-100 pb-2 mb-4">
              1. Shifting Focus from 'Speech' to 'Communication'
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              In many traditional settings across India, parental and clinical anxiety centers exclusively on the physical production of spoken words. However, speech is simply the mechanical output of language. True communication is the meaningful exchange of information, intent, and emotion between two people.
            </p>
            <p className="text-slate-600 leading-relaxed">
              If a child can point to a picture card to indicate they are in pain, or press a button on an application to request water, they are communicating effectively. By broadening our approach to include visual, gestural, and digital tools, we can lower frustration levels and open up clearer paths for spoken language to develop naturally.
            </p>
          </section>

          {/* Section 2: Concrete Frameworks */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-cyan-100 pb-2 mb-4">
              2. Core Communication Intervention Frameworks
            </h2>

            <div className="space-y-6">
              {strategies.map((strat, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl p-6 bg-slate-50/50 hover:border-cyan-300 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                    {strat.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-2 leading-relaxed"><strong className="text-slate-800">The Core Concept:</strong> {strat.concept}</p>
                  <p className="text-slate-600 text-sm mb-4"><strong className="text-slate-800">Where to Start:</strong> {strat.application}</p>

                  <div className="bg-white p-4 rounded-lg border border-slate-100">
                    <h4 className="text-xs font-bold text-cyan-800 uppercase tracking-wider mb-2">Step-by-Step Implementation:</h4>
                    <ul className="space-y-1.5 text-xs text-slate-600 list-inside list-decimal">
                      {strat.actionItems.map((item, iIdx) => (
                        <li key={iIdx} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: The 4-Step Communication Principle */}
          <section className="bg-slate-900 text-slate-100 p-6 sm:p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-cyan-400 mb-3">
              3. The 'OWL' Technique for Everyday Interaction
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Developed by early speech language experts worldwide, this structural habit helps parents slow down and build communication opportunities into daily routines:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mt-4">
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <span className="font-bold text-cyan-400 text-sm block mb-1">O - Observe</span>
                <p className="text-slate-300 text-xs">Don't jump in immediately. Watch your child's body language, eye gaze, and gestures to discover what currently captures their interest.</p>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <span className="font-bold text-cyan-400 text-sm block mb-1">W - Wait</span>
                <p className="text-slate-300 text-xs">Stop talking and pause for a slow count of 10. Give your child's brain the necessary processing time to initiate a response or gesture.</p>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <span className="font-bold text-cyan-400 text-sm block mb-1">L - Listen</span>
                <p className="text-slate-300 text-xs">Pay attention to every sound, partial word, or echo they make. Treat every single vocalization as an intentional communicative act.</p>
              </div>
            </div>
          </section>

          {/* Section 4: FAQs */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-cyan-100 pb-2 mb-6">
              Language Expansion &amp; Communication FAQs
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left font-semibold text-slate-900 p-4 bg-slate-50 hover:bg-slate-100 flex justify-between items-center transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-cyan-600 font-bold">{openFaq === index ? '−' : '+'}</span>
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
          
          {/* Quick Language Rule Card */}
          

          {/* Environmental Sabotage Tip */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
            <h3 className="text-base font-bold text-slate-900">Creating Reasons to Talk</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When everything is within easy reach, a child has no functional need to communicate. Try these structured adjustments:
            </p>
            <ul className="space-y-2 text-xs text-slate-600 list-none pl-0">
              <li>🔒 Place highly sought-after toys on shelves that are visible but out of reach.</li>
              <li>unzip Serve preferred snacks in small, clear containers that require help to open.</li>
              <li>🧩 Hand over toys piece-by-piece (e.g., give one puzzle piece at a time) so they need to request 'more'.</li>
            </ul>
          </div>

          {/* Tracker Hub Tracker */}
         

        </aside>

      </main>
      <ResourceHubNavigation currentPage="/resources/communication-tips" />

      {/* Footer Element */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 border-t border-slate-800 text-center text-xs mt-16">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="text-slate-300 font-medium text-sm">Project Jugnu — Lighting paths for unique minds.</p>
          <p>Communication development tracks vary extensively across neurodevelopmental models. Always coordinate home communication efforts under the functional direction of an RCI-registered or certified Speech-Language Pathologist.</p>
          <p className="pt-4 text-slate-600">&copy; 2026 Project Jugnu Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}