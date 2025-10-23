import { ArrowRight, Code, Zap, Target, Shield } from 'lucide-react';
import WhyVrithLabs from './WhyVrithLabs';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-gray-800/50 to-transparent" />
      </div>

      <div className="relative z-10 flex items-start justify-center min-h-screen pt-8 px-4">
        <div className="w-full max-w-[960px] bg-[#f8f8f6] rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,0.3)] overflow-hidden">
          <header className="flex items-center justify-between px-12 py-7">
            <div className="flex items-center gap-2">
              <span className="text-[22px] font-semibold tracking-tight">Vrith labs</span>
            </div>
            <nav className="flex items-center gap-9 text-[14px] font-medium">
              <a href="#" className="text-gray-700 hover:text-black transition-colors">Process</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">Projects</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">FAQ</a>
            </nav>
            <button className="bg-[#1a1a1a] text-white px-6 py-2.5 rounded-full text-[14px] font-medium hover:bg-black transition-colors">
              Book a Slot
            </button>
          </header>

          <div className="px-12 pt-8 pb-12">
            <h1 className="text-[72px] leading-[1.05] font-normal mb-7 tracking-[-0.02em]">
            From Concept  {' '}
              
              <br />to Users in 21 Days<br />
              
            </h1>

            <p className="text-[15px] leading-[1.6] text-gray-700 mb-7 max-w-[680px]">
            Founder-led, AI-powered, done-for-you MVPs and landing pages. From idea to launch, Vrith Labs moves at startup speed.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-9">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full text-[13px] font-medium">
                <Code size={14} />
                TypeScript-first
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full text-[13px] font-medium">
                <Zap size={14} />
                Edge-ready
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full text-[13px] font-medium">
                <Target size={14} />
                AI-native
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full text-[13px] font-medium">
                <Shield size={14} />
                Secure by default
              </span>
            </div>

            <div className="flex gap-4">
              <button className="bg-[#1a1a1a] text-white px-7 py-3 rounded-full text-[15px] font-medium flex items-center gap-2 hover:bg-black transition-all hover:shadow-lg">
                Book a Slot
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>
              <button className="bg-transparent text-[#1a1a1a] px-7 py-3 rounded-full text-[15px] font-medium hover:bg-black/5 transition-colors">
                View work
              </button>
            </div>
          </div>

          {/* Why Vrith Labs Section - Black Box Inside White Container */}
          <div className="px-12 pb-12 mt-8">
            <WhyVrithLabs />
          </div>
        </div>
      </div>
    </div>
  );
}
