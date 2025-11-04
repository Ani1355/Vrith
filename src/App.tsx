import { lazy, Suspense } from 'react';
import Hero from './components/Hero';
import { ErrorBoundary } from './components/ui/ErrorBoundary';

// Defer below-the-fold sections to cut initial JS and speed up TTI
const Process = lazy(() => import('./components/Process'));
const Pricing = lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })));
const Footer = lazy(() => import('./components/Footer'));
const Gallery4 = lazy(() => import('./components/ui/Gallery4').then(m => ({ default: m.Gallery4 })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-primary-50 scroll-smooth">
        <Hero />
        {/* Section wrappers with scroll-margin for pixel-perfect navigation */}
        <Suspense fallback={<div className="h-12" />}> 
          <section id="process" className="section-scroll">
            <Process />
          </section>
          <section id="projects" className="section-scroll">
            <Gallery4 />
          </section>
          <section id="pricing" className="section-scroll">
            <Pricing />
          </section>
          <section id="testimonials" className="section-scroll">
            <Testimonials />
          </section>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
