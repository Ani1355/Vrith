import { Typography } from './ui/design-system/Typography';
import { ScrollAnimation } from './ui/ScrollAnimation';
import { LazyImage } from './ui/LazyImage';
import { optimizeUnsplashUrl } from '@/lib/imageUtils';

const vrithLabsTestimonials = [
  {
    author: {
      name: "Sarah Chen",
      handle: "@sarahstartup",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    text: "Vrith Labs delivered our MVP in just 18 days! The quality exceeded our expectations and we launched to 10K users in the first month.",
    href: "https://twitter.com/sarahstartup"
  },
  {
    author: {
      name: "Marcus Rodriguez",
      handle: "@marcustech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    text: "From concept to market in 21 days is no joke. Vrith Labs made it happen. Our fintech app is now processing $2M+ monthly transactions.",
    href: "https://twitter.com/marcustech"
  },
  {
    author: {
      name: "Emily Watson",
      handle: "@emilyai",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    text: "The AI integration was seamless. Vrith Labs understood our vision and built exactly what we needed. Game-changing development speed.",
    href: "https://twitter.com/emilyai"
  },
  {
    author: {
      name: "David Kim",
      handle: "@davidfounder",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    text: "Best investment we made. Vrith Labs turned our idea into a working product faster than any traditional agency could dream of.",
    href: "https://twitter.com/davidfounder"
  },
  {
    author: {
      name: "Lisa Thompson",
      handle: "@lisasocial",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    text: "Our social platform MVP was ready in 14 days. The team's expertise in modern tech stacks saved us months of development time.",
    href: "https://twitter.com/lisasocial"
  },
  {
    author: {
      name: "Alex Johnson",
      handle: "@alexhealth",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    text: "Healthcare compliance is complex, but Vrith Labs handled it perfectly. Our telemedicine platform launched without a hitch.",
    href: "https://twitter.com/alexhealth"
  }
]

export const Testimonials = () => {
  return (
    <section className="section-spacing bg-primary-50">
      <div className="max-w-container mx-auto">
        <ScrollAnimation animation="slideUp">
          <div className="mb-16 flex items-end justify-between">
            <div className="flex flex-col gap-4">
              <Typography variant="caption" color="muted" className="mb-3">
                (04) TESTIMONIALS
              </Typography>
              <Typography variant="heading-1" className="mb-4">
                Trusted by <span className="text-accent">Successful Founders</span>
              </Typography>
              <Typography variant="body-small" color="muted" className="max-w-lg">
                See how Vrith Labs has helped startups go from idea to market leaders in record time.
              </Typography>
            </div>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeIn" delay={200}>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {/* Duplicate testimonials for seamless loop */}
              {vrithLabsTestimonials.map((testimonial, i) => (
                <div 
                  key={`first-${i}`}
                  className="flex flex-col rounded-lg border-t bg-gradient-to-b from-white/80 to-white/60 p-4 text-start sm:p-6 hover:from-white/90 hover:to-white/70 max-w-[320px] sm:max-w-[320px] transition-colors duration-normal"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
                      <LazyImage
                        src={optimizeUnsplashUrl(testimonial.author.avatar, { width: 150, height: 150, quality: 80 })}
                        alt={`${testimonial.author.name} - ${testimonial.author.handle}`}
                        className="aspect-square h-full w-full"
                        fallbackText={testimonial.author.name.charAt(0)}
                        loading="lazy"
                        isAvatar={true}
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <Typography variant="label" className="leading-none">
                        {testimonial.author.name}
                      </Typography>
                      <Typography variant="body-small" color="muted">
                        {testimonial.author.handle}
                      </Typography>
                    </div>
                  </div>
                  <Typography variant="body-small" color="muted" className="mt-4">
                    {testimonial.text}
                  </Typography>
                </div>
              ))}
              {vrithLabsTestimonials.map((testimonial, i) => (
                <div 
                  key={`second-${i}`}
                  className="flex flex-col rounded-lg border-t bg-gradient-to-b from-white/80 to-white/60 p-4 text-start sm:p-6 hover:from-white/90 hover:to-white/70 max-w-[320px] sm:max-w-[320px] transition-colors duration-normal"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
                      <LazyImage
                        src={optimizeUnsplashUrl(testimonial.author.avatar, { width: 150, height: 150, quality: 80 })}
                        alt={`${testimonial.author.name} - ${testimonial.author.handle}`}
                        className="aspect-square h-full w-full"
                        fallbackText={testimonial.author.name.charAt(0)}
                        loading="lazy"
                        isAvatar={true}
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <Typography variant="label" className="leading-none">
                        {testimonial.author.name}
                      </Typography>
                      <Typography variant="body-small" color="muted">
                        {testimonial.author.handle}
                      </Typography>
                    </div>
                  </div>
                  <Typography variant="body-small" color="muted" className="mt-4">
                    {testimonial.text}
                  </Typography>
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
  )
}
