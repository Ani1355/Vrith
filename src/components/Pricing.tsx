import { PricingCardProps } from "@/components/ui/animated-glassy-pricing";
import { PricingCard } from "@/components/ui/animated-glassy-pricing";
import { Typography } from './ui/design-system/Typography';
import { ScrollAnimation, StaggeredAnimation } from './ui/ScrollAnimation';

const vrithLabsPricingPlans: PricingCardProps[] = [
  { 
    planName: 'MVP', 
    description: 'Perfect for validating your startup idea quickly.', 
    price: '4,999', 
    features: [
      '21-day delivery', 
      '3-4 core features', 
      'Modern tech stack', 
      'Mobile responsive', 
      'Basic analytics'
    ], 
    buttonText: 'Start MVP', 
    buttonVariant: 'secondary'
  },
  { 
    planName: 'PRO', 
    description: 'Complete product development with advanced features.', 
    price: '9,999', 
    features: [
      '14-day delivery', 
      '5-7 features', 
      'AI integration', 
      'User authentication', 
      'Payment processing', 
      'Advanced analytics'
    ], 
    buttonText: 'Choose Pro Plan', 
    isPopular: true, 
    buttonVariant: 'primary' 
  },
  
];

export const Pricing = () => {
  return (
    <section className="section-spacing bg-primary-50">
      <div className="max-w-container mx-auto">
        <ScrollAnimation animation="slideUp">
          <div className="mb-16 flex items-end justify-between">
            <div className="flex flex-col gap-4">
              <Typography variant="caption" color="muted" className="mb-3">
                (03) PRICING
              </Typography>
              <Typography variant="heading-1" className="mb-4">
                Choose Your <span className="text-accent">Launch Plan</span>
              </Typography>
              <Typography variant="body-small" color="muted" className="max-w-lg">
                From idea to users in record time. Pick the plan that matches your startup's needs.
              </Typography>
            </div>
          </div>
        </ScrollAnimation>
        
        <StaggeredAnimation animation="scaleUp" staggerDelay={200}>
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 justify-center items-stretch w-full max-w-6xl mx-auto">
            {vrithLabsPricingPlans.map((plan) => (
              <PricingCard key={plan.planName} {...plan} />
            ))}
          </div>
        </StaggeredAnimation>
      </div>
    </section>
  );
};
