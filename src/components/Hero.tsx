import { ArrowRight, Code, Zap, Target, Shield } from 'lucide-react';
import { Button } from './ui/design-system/Button';
import { Typography } from './ui/design-system/Typography';
import { Card } from './ui/design-system/Card';
import { ScrollAnimation } from './ui/ScrollAnimation';
import WhyVrithLabs from './WhyVrithLabs';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-gray-800/50 to-transparent" />
      </div>

      <div className="relative z-10 flex items-start justify-center min-h-screen pt-8 px-4">
        <Card 
          variant="glass" 
          padding="xl" 
          radius="xl" 
          className="w-full max-w-[960px] shadow-brand overflow-hidden"
        >
          {/* Header */}
          <ScrollAnimation animation="slideDown" delay={0}>
            <header className="flex items-center justify-between mb-32">
              <div className="flex items-center gap-2">
                <Typography variant="heading-4" className="font-semibold text-[25px]">
                  Vrith labs
                </Typography>
              </div>
              <nav className="flex items-center gap-9">
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary-900 transition-colors duration-normal">
                  Process
                </a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary-900 transition-colors duration-normal">
                  Projects
                </a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary-900 transition-colors duration-normal">
                  Pricing
                </a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary-900 transition-colors duration-normal">
                  FAQ
                </a>
              </nav>
              <Button size="sm" variant="primary">
                Book a Slot
              </Button>
            </header>
          </ScrollAnimation>

          {/* Main Content */}
          <ScrollAnimation animation="slideUp" delay={200}>
            <div className="mb-8">
              <Typography 
                variant="display-1" 
                className="mb-6"
                as="h1"
              >
                From Concept {' '}
                <br />to Users in 21 Days<br />
              </Typography>

              <Typography 
                variant="body-large" 
                color="muted" 
                className="mb-6 max-w-[680px]"
              >
                Founder-led, AI-powered, done-for-you MVPs and landing pages. From idea to launch, Vrith Labs moves at startup speed.
              </Typography>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full text-xs font-medium">
                  <Code size={14} />
                  TypeScript-first
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full text-xs font-medium">
                  <Zap size={14} />
                  Edge-ready
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full text-xs font-medium">
                  <Target size={14} />
                  AI-native
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full text-xs font-medium">
                  <Shield size={14} />
                  Secure by default
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button size="lg" variant="primary" className="flex items-center gap-2">
                  Book a Slot
                  <ArrowRight size={16} strokeWidth={2.5} />
                </Button>
                <Button size="lg" variant="secondary">
                  View work
                </Button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Why Vrith Labs Section */}
          <ScrollAnimation animation="fadeIn" delay={400}>
            <div className="mt-8">
              <WhyVrithLabs />
            </div>
          </ScrollAnimation>
        </Card>
      </div>
    </div>
  );
}
