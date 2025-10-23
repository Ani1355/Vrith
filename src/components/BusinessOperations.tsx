import { ArrowRight, Circle } from 'lucide-react';

export default function BusinessOperations() {
  return (
    <div className="py-20 px-4 bg-[#f8f8f6]">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex items-start justify-between mb-12">
          <div>
            <div className="text-[12px] text-gray-500 uppercase tracking-[0.15em] mb-3 font-medium">
              (02) PLATFORM
            </div>
            <h2 className="text-[40px] font-normal tracking-[-0.01em]">Scale your business operations.</h2>
          </div>
          <button className="flex items-center gap-2 text-[14px] text-gray-700 hover:text-black font-medium mt-8 group">
            Explore platform
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-[24px] p-8 border border-gray-200/80 hover:border-gray-300 transition-all hover:shadow-lg group">
            <div className="flex items-center gap-2 mb-5">
              <Circle size={6} fill="#10b981" stroke="none" />
              <span className="text-[13px] text-gray-600 font-medium">Revenue Engine</span>
            </div>
            <h3 className="text-[24px] font-medium mb-3 tracking-[-0.01em]">Revenue & Analytics</h3>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
              Transform your business with intelligent revenue tracking, predictive analytics, and real-time insights.
            </p>
          </div>

          <div className="bg-white rounded-[24px] p-8 border border-gray-200/80 hover:border-gray-300 transition-all hover:shadow-lg group">
            <div className="flex items-center gap-2 mb-5">
              <Circle size={6} fill="#f59e0b" stroke="none" />
              <span className="text-[13px] text-gray-600 font-medium">Collaboration Hub</span>
            </div>
            <h3 className="text-[24px] font-medium mb-3 tracking-[-0.01em]">Team Collaboration</h3>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
              Streamline teamwork with unified workspaces, real-time collaboration, and intelligent task management.
            </p>
          </div>

          <div className="bg-white rounded-[24px] p-8 border border-gray-200/80 hover:border-gray-300 transition-all hover:shadow-lg group">
            <div className="flex items-center gap-2 mb-5">
              <Circle size={6} fill="#8b5cf6" stroke="none" />
              <span className="text-[13px] text-gray-600 font-medium">AI Intelligence</span>
            </div>
            <h3 className="text-[24px] font-medium mb-3 tracking-[-0.01em]">AI-Powered Insights</h3>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
              Leverage artificial intelligence for proactive analytics, automated decision-making, and predictive modeling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
