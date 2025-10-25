import { useState } from 'react';
import { ScrollAnimation } from './ui/ScrollAnimation';

export default function Process() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

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

  const handleMouseEnter = (id: number) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="py-20 px-4 bg-primary-50">
      <div className="max-w-[1320px] mx-auto">
        <ScrollAnimation animation="slideUp">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[32px] p-12 text-white shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-[64px] font-normal tracking-[-0.02em] leading-none">Process</h2>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              {processSteps.map((step, index) => (
                <ScrollAnimation key={step.id} animation="slideLeft" delay={index * 100}>
                  <div
                    className="p-5 bg-gradient-to-r from-white/[0.03] to-white/[0.01] hover:from-white/[0.06] hover:to-white/[0.03] rounded-2xl transition-all duration-300 group border border-white/[0.05] hover:border-white/[0.1]"
                    onMouseEnter={() => handleMouseEnter(step.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-center gap-5 mb-3">
                      <span className="text-[13px] text-gray-600 font-mono w-12">
                        [{step.id.toString().padStart(3, '0')}]
                      </span>
                      <span className="text-[17px] font-medium">{step.title}</span>
                    </div>
                    
                    {/* Description appears on hover */}
                    {hoveredItem === step.id && (
                      <div className="mt-3 pl-16">
                        <ul className="space-y-2">
                          {step.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start gap-3 text-gray-300">
                              <span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-sm leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </ScrollAnimation>
              ))}
            </div>

          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
