import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Process() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const processSteps = [
    {
      id: 1,
      title: "Initial Consultation",
      bullets: [
        "Understands your product idea, objectives, and user base.",
        "Plans roadmap and strategy for the MVP build."
      ]
    },
    {
      id: 2,
      title: "Strategy",
      bullets: [
        "Maps features for rapid delivery and market validation.",
        "Prioritizes core components to maximize impact."
      ]
    },
    {
      id: 3,
      title: "Code",
      bullets: [
        "Builds product using AI-assisted tools and modern stack (Next.js, Supabase, TailwindCSS).",
        "Delivers a live web app with 3–4 essential features for launch."
      ]
    },
    {
      id: 4,
      title: "Launch",
      bullets: [
        "Deploys the product for real users, investor pitch, or feedback.",
        "Offers handoff or continued support for scaling or additional features."
      ]
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="py-20 px-4 bg-[#f8f8f6]">
      <div className="max-w-[1320px] mx-auto">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[32px] p-12 text-white shadow-2xl">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-[64px] font-normal tracking-[-0.02em] leading-none">Process</h2>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="flex items-center justify-between p-5 bg-gradient-to-r from-white/[0.03] to-white/[0.01] hover:from-white/[0.06] hover:to-white/[0.03] rounded-2xl cursor-pointer transition-all duration-300 group border border-white/[0.05] hover:border-white/[0.1]"
                onClick={() => toggleExpanded(step.id)}
              >
                <div className="flex items-center gap-5">
                  <span className="text-[13px] text-gray-600 font-mono w-12">
                    [{step.id.toString().padStart(3, '0')}]
                  </span>
                  <span className="text-[17px] font-medium">{step.title}</span>
                </div>
                <div className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-all duration-300 group-hover:rotate-90">
                  {expandedItem === step.id ? (
                    <Minus size={18} className="text-gray-400 group-hover:text-white transition-colors" strokeWidth={2} />
                  ) : (
                    <Plus size={18} className="text-gray-400 group-hover:text-white transition-colors" strokeWidth={2} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Expanded content for each step */}
          {processSteps.map((step) => (
            expandedItem === step.id && (
              <div key={`expanded-${step.id}`} className="mt-6 p-6 bg-white/[0.02] rounded-2xl border border-white/[0.05]">
                <ul className="space-y-3">
                  {step.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
