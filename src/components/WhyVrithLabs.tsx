import { Circle, Plus } from 'lucide-react';

export default function WhyVrithLabs() {
  return (
    <div className="relative">
        <div className="bg-[#1a1a1a] rounded-[32px] p-8 md:p-10 text-white shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
          <div className="mb-10">
            <h2 className="text-[56px] leading-[1.1] font-normal tracking-[-0.02em]">
              Why Vrith Labs?
            </h2>
          </div>

           <div className="flex justify-center">
             <div className="grid grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
               {/* Traditional Way - Left Box */}
               <div className="bg-gradient-to-br from-[#2a2a2a] to-[#222] rounded-2xl p-8 relative group hover:from-[#333] hover:to-[#282828] transition-all cursor-pointer border border-white/5 backdrop-blur-sm">
                 <h3 className="text-xl font-semibold mb-6 text-white">Traditional Way</h3>
                 <ul className="space-y-4 text-sm text-gray-300">
                   <li className="flex items-start gap-3">
                     <Circle size={16} className="mt-1 flex-shrink-0 text-red-400" />
                     <span>3-6 months for MVP launch</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Circle size={16} className="mt-1 flex-shrink-0 text-red-400" />
                     <span>Slow process, multi-team, endless handoffs</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Circle size={16} className="mt-1 flex-shrink-0 text-red-400" />
                     <span>Hourly billing, unpredictable cost</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Circle size={16} className="mt-1 flex-shrink-0 text-red-400" />
                     <span>Overbuilt features, delayed market validation</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Circle size={16} className="mt-1 flex-shrink-0 text-red-400" />
                     <span>High risk, results come late</span>
                   </li>
                 </ul>
               </div>

               {/* Vrith Labs Way - Right Box */}
               <div className="bg-gradient-to-br from-[#2a2a2a] to-[#222] rounded-2xl p-8 relative group hover:from-[#333] hover:to-[#282828] transition-all cursor-pointer border border-white/5 backdrop-blur-sm">
                 <h3 className="text-xl font-semibold mb-6 text-white">Vrith Labs Way</h3>
                 <ul className="space-y-4 text-sm text-gray-300">
                   <li className="flex items-start gap-3">
                     <Plus size={16} className="mt-1 flex-shrink-0 text-green-400" />
                     <span>21 days for MVP launch</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Plus size={16} className="mt-1 flex-shrink-0 text-green-400" />
                     <span>One team, founder-focused, rapid execution</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Plus size={16} className="mt-1 flex-shrink-0 text-green-400" />
                     <span>Fixed, all-inclusive, transparent pricing</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Plus size={16} className="mt-1 flex-shrink-0 text-green-400" />
                     <span>Lean core features, instant market feedback</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Plus size={16} className="mt-1 flex-shrink-0 text-green-400" />
                     <span>Fast, launch-ready MVP, ready for feedback</span>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
        </div>
    </div>
  );
}
