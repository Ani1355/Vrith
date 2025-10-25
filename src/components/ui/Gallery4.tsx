import { ArrowRight } from "lucide-react";
import { ScrollAnimation } from './ScrollAnimation';

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: Gallery4Item[];
}

const data = [
  {
    id: "fintech-app",
    title: "FinTech Mobile Banking Platform",
    description:
      "A comprehensive mobile banking solution built with React Native and Node.js, featuring real-time transactions, AI-powered fraud detection, and seamless user experience for over 100K active users.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Marketplace Platform",
    description:
      "A scalable e-commerce platform built with Next.js and Supabase, featuring multi-vendor support, real-time inventory management, and integrated payment processing with 99.9% uptime.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "healthcare-saas",
    title: "Healthcare Management SaaS",
    description:
      "A HIPAA-compliant healthcare management system built with TypeScript and PostgreSQL, streamlining patient records, appointment scheduling, and telemedicine consultations for medical practices.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "ai-analytics",
    title: "AI-Powered Analytics Dashboard",
    description:
      "An intelligent analytics platform built with React and Python, providing real-time data visualization, predictive analytics, and automated reporting for enterprise clients across multiple industries.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "logistics-platform",
    title: "Supply Chain Logistics Platform",
    description:
      "A comprehensive logistics management system built with Vue.js and Express.js, optimizing supply chain operations, tracking shipments in real-time, and reducing operational costs by 30%.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Gallery4 = ({
  title = "Projects",
  description = "Discover how we've helped startups and enterprises build exceptional digital products. These case studies showcase our expertise in delivering scalable, user-focused solutions that drive real business results.",
  items = data,
}: Gallery4Props) => {
  return (
    <section className="py-20 px-4 bg-primary-50">
      <div className="max-w-[1320px] mx-auto">
        <ScrollAnimation animation="slideUp">
          <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
            <div className="flex flex-col gap-4">
              <div className="text-[12px] text-gray-500 uppercase tracking-[0.15em] mb-3 font-medium">
                (02) PORTFOLIO
              </div>
              <h2 className="text-[40px] font-normal tracking-[-0.01em] mb-4 text-[#1a1a1a]">
                {title}
              </h2>
              <p className="max-w-lg text-[14px] text-gray-600 leading-relaxed">{description}</p>
            </div>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeIn" delay={200}>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:60s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {/* Duplicate projects for seamless loop */}
              {items.map((item, i) => (
                <div key={`first-${i}`} className="max-w-[320px] lg:max-w-[360px]">
                  <a href={item.href} className="group rounded-xl block">
                    <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9] border border-gray-200/80 hover:border-gray-300 transition-all hover:shadow-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                        <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                          {item.title}
                        </div>
                        <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9 text-gray-200">
                          {item.description}
                        </div>
                        <div className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                          View project{" "}
                          <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
              {items.map((item, i) => (
                <div key={`second-${i}`} className="max-w-[320px] lg:max-w-[360px]">
                  <a href={item.href} className="group rounded-xl block">
                    <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9] border border-gray-200/80 hover:border-gray-300 transition-all hover:shadow-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                        <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                          {item.title}
                        </div>
                        <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9 text-gray-200">
                          {item.description}
                        </div>
                        <div className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                          View project{" "}
                          <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-primary-50 sm:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-primary-50 sm:block" />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export { Gallery4 };