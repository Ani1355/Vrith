import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleUp' | 'slideDown';
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
}

const animationClasses = {
  fadeIn: {
    initial: 'opacity-0',
    animate: 'opacity-100',
  },
  slideUp: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  slideLeft: {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  slideRight: {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  scaleUp: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
  },
  slideDown: {
    initial: 'opacity-0 -translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
};

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 600,
  className,
  triggerOnce = true,
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce,
  });

  const animationConfig = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isIntersecting ? animationConfig.animate : animationConfig.initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Staggered animation wrapper for multiple children
interface StaggeredAnimationProps {
  children: React.ReactNode;
  staggerDelay?: number;
  animation?: ScrollAnimationProps['animation'];
  className?: string;
}

export const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  staggerDelay = 100,
  animation = 'fadeIn',
  className,
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <ScrollAnimation
          key={index}
          animation={animation}
          delay={index * staggerDelay}
        >
          {child}
        </ScrollAnimation>
      ))}
    </div>
  );
};
