import { ArrowRight } from 'lucide-react';
import { Button } from './ui/design-system/Button';
import { Typography } from './ui/design-system/Typography';
import { Card } from './ui/design-system/Card';
import { ScrollAnimation } from './ui/ScrollAnimation';
import WhyVrithLabs from './WhyVrithLabs';
import { scrollToSection } from '@/lib/smoothScroll';
import { ContactFormModal } from './ui/ContactFormModal';
import { useState } from 'react';

export default function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleBookSlot = () => {
    setIsContactModalOpen(true);
  };

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
              {/* Logo - Left Side */}
              <div className="flex items-center">
                <Typography variant="heading-4" className="font-semibold text-[25px]">
                  Vrith labs
                </Typography>
              </div>
              
              {/* Navigation - Center */}
              <nav className="flex items-center gap-9">
                <button 
                  onClick={() => scrollToSection('process')}
                  className="text-sm font-medium text-gray-700 hover:text-primary-900 transition-colors duration-normal"
                  aria-label="Navigate to Process section"
                >
                  Process
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-sm font-medium text-gray-700 hover:text-primary-900 transition-colors duration-normal"
                  aria-label="Navigate to Projects section"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-sm font-medium text-gray-700 hover:text-primary-900 transition-colors duration-normal"
                  aria-label="Navigate to Pricing section"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-sm font-medium text-gray-700 hover:text-primary-900 transition-colors duration-normal"
                  aria-label="Navigate to Testimonials section"
                >
                  Testimonials
                </button>
              </nav>
              
              {/* Empty div for balance */}
              <div className="w-[100px]"></div>
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
                Stop making excuses<br />
                Start shipping
              </Typography>

              <Typography 
                variant="body-large" 
                color="muted" 
                className="mb-12 max-w-[680px]"
              >
                You talk, we build. Your idea, live in 3 weeks—whether you can code or not. Go.
              </Typography>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  variant="primary" 
                  className="flex items-center gap-2"
                  onClick={handleBookSlot}
                >
                  Book a Slot
                  <ArrowRight size={16} strokeWidth={2.5} />
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
      
      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
