import { X, Check } from 'lucide-react';
import { ScrollAnimation, StaggeredAnimation } from './ui/ScrollAnimation';

export default function WhyVrithLabs() {
  const traditionalPoints = [
    { text: "3-6 months for MVP launch", highlight: "3-6 months" },
    { text: "Slow process, multi-team, endless handoffs", highlight: "Slow process" },
    { text: "Hourly billing, unpredictable cost", highlight: "unpredictable cost" },
    { text: "Overbuilt features, delayed market validation", highlight: "delayed market validation" },
    { text: "High risk, results come late", highlight: "High risk" }
  ];

  const vrithLabsPoints = [
    { text: "21 days for MVP launch", highlight: "21 days" },
    { text: "One team, founder-focused, rapid execution", highlight: "rapid execution" },
    { text: "Fixed, all-inclusive, transparent pricing", highlight: "transparent pricing" },
    { text: "Lean core features, instant market feedback", highlight: "instant market feedback" },
    { text: "Fast, launch-ready MVP, ready for feedback", highlight: "Fast, launch-ready" }
  ];

  return (
    <div className="relative">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[32px] p-12 md:p-16 text-white shadow-2xl">
          <ScrollAnimation animation="slideUp">
            <div className="mb-16">
              <h2 className="text-[56px] leading-[1.1] font-normal tracking-[-0.02em] text-center">
                Why Vrith Labs?
              </h2>
            </div>
          </ScrollAnimation>

           <div className="flex justify-center">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
               {/* Traditional Way - Left Box */}
               <ScrollAnimation animation="slideLeft" delay={200}>
                 <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl p-10 relative group hover:from-gray-700/70 hover:to-gray-800/70 transition-all duration-300 cursor-pointer border border-white/10 backdrop-blur-sm">
                   <h3 className="text-2xl font-semibold mb-10 text-white">Traditional Way</h3>
                   <StaggeredAnimation animation="fadeIn" staggerDelay={150}>
                     <ul className="space-y-8 text-base text-gray-300">
                       {traditionalPoints.map((point, index) => (
                         <li key={index} className="flex items-start gap-5">
                           <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                             <X size={14} className="text-white" />
                           </div>
                           <span className="leading-relaxed">
                             {point.text.split(point.highlight).map((part, i) => (
                               i === 0 ? part : (
                                 <span key={i}>
                                   <strong className="text-white font-semibold">{point.highlight}</strong>
                                   {part}
                                 </span>
                               )
                             ))}
                           </span>
                         </li>
                       ))}
                     </ul>
                   </StaggeredAnimation>
                 </div>
               </ScrollAnimation>

               {/* Vrith Labs Way - Right Box */}
               <ScrollAnimation animation="slideRight" delay={400}>
                 <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl p-10 relative group hover:from-gray-700/70 hover:to-gray-800/70 transition-all duration-300 cursor-pointer border border-white/10 backdrop-blur-sm">
                   <h3 className="text-2xl font-semibold mb-10 text-white">Vrith Labs Way</h3>
                   <StaggeredAnimation animation="fadeIn" staggerDelay={150}>
                     <ul className="space-y-8 text-base text-gray-300">
                       {vrithLabsPoints.map((point, index) => (
                         <li key={index} className="flex items-start gap-5">
                           <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                             <Check size={14} className="text-white" />
                           </div>
                           <span className="leading-relaxed">
                             {point.text.split(point.highlight).map((part, i) => (
                               i === 0 ? part : (
                                 <span key={i}>
                                   <strong className="text-white font-semibold">{point.highlight}</strong>
                                   {part}
                                 </span>
                               )
                             ))}
                           </span>
                         </li>
                       ))}
                     </ul>
                   </StaggeredAnimation>
                 </div>
               </ScrollAnimation>
             </div>
           </div>
        </div>
    </div>
  );
}
