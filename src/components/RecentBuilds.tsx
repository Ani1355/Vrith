import { ArrowRight } from 'lucide-react';

export default function RecentBuilds() {
  const projects = [
    {
      client: "SaaS + Analytics",
      project: "Telemetry Cloud",
      image: 'https://images.pexels.com/photos/1042140/pexels-photo-1042140.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bgColor: 'from-black/90 to-black'
    },
    {
      client: "DevEx + Docs",
      project: "Launchpad Portal",
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bgColor: 'from-black/90 to-black'
    },
    {
      client: "AI + Product",
      project: "Pair AI",
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bgColor: 'from-gray-500 to-gray-600'
    },
    {
      client: "Fintech + Platform",
      project: "LedgerFlow",
      image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bgColor: 'from-gray-800 to-black'
    },
    {
      client: "Infra + DevOps",
      project: "Runway Pipelines",
      image: 'https://images.pexels.com/photos/3862370/pexels-photo-3862370.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bgColor: 'from-blue-900 to-blue-950'
    },
    {
      client: "Realtime + Collab",
      project: "Syncloud",
      image: 'https://images.pexels.com/photos/3862385/pexels-photo-3862385.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bgColor: 'from-black to-gray-900'
    }
  ];

  return (
    <div className="py-20 px-4 bg-[#f8f8f6]">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex items-start justify-between mb-10">
          <div>
            <div className="text-[12px] text-gray-500 uppercase tracking-[0.15em] mb-3 font-medium">
              (01) SHIP LOG
            </div>
            <h2 className="text-[40px] font-normal tracking-[-0.01em]">Recent builds we're proud of.</h2>
          </div>
          <button className="flex items-center gap-2 text-[14px] text-gray-700 hover:text-black font-medium mt-8 group">
            Explore all
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${project.bgColor} rounded-[24px] aspect-square relative group cursor-pointer hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg`}
            >
              <div className="absolute inset-0 opacity-70 group-hover:opacity-80 transition-opacity">
                <img src={project.image} alt={project.project} className="w-full h-full object-cover" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <div className="text-[12px] text-gray-300 mb-1.5 font-medium">{project.client}</div>
                <div className="text-[20px] font-medium">{project.project}</div>
              </div>

              <div className="absolute top-6 right-6 z-10">
                <div className="w-9 h-9 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/20">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
