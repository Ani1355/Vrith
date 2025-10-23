import { ArrowRight, Circle, Plus } from 'lucide-react';

export default function AIWorkforce() {
  return (
    <div className="relative -mt-[200px] px-4 pb-24">
      <div className="max-w-[960px] mx-auto">
        <div className="bg-[#1a1a1a] rounded-[32px] p-10 text-white shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
          <div className="mb-10">
            <h2 className="text-[56px] leading-[1.1] font-normal tracking-[-0.02em]">
              Why Vrith Labs?
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-3.5 w-[320px]">
              <div className="bg-gradient-to-br from-[#2a2a2a] to-[#222] rounded-2xl p-5 relative group hover:from-[#333] hover:to-[#282828] transition-all cursor-pointer border border-white/5">
                <div className="h-[180px]"></div>
              </div>

              <div className="bg-gradient-to-br from-[#2a2a2a] to-[#222] rounded-2xl p-5 relative group hover:from-[#333] hover:to-[#282828] transition-all cursor-pointer border border-white/5">
                <div className="h-[180px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
