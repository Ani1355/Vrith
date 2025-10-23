import { Plus, Sparkles } from 'lucide-react';

export default function Capabilities() {
  const capabilities = [
    { id: '001', title: 'Full-stack product development' },
    { id: '002', title: 'Frontend systems & performance' },
    { id: '003', title: 'AI integrations & agents' },
    { id: '004', title: 'Cloud & DevOps' }
  ];

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
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-5 bg-gradient-to-r from-white/[0.03] to-white/[0.01] hover:from-white/[0.06] hover:to-white/[0.03] rounded-2xl cursor-pointer transition-all duration-300 group border border-white/[0.05] hover:border-white/[0.1]"
              >
                <div className="flex items-center gap-5">
                  <span className="text-[13px] text-gray-600 font-mono w-12">[{capability.id}]</span>
                  <span className="text-[17px] font-medium">{capability.title}</span>
                </div>
                <div className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-all duration-300 group-hover:rotate-90">
                  <Plus size={18} className="text-gray-400 group-hover:text-white transition-colors" strokeWidth={2} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
