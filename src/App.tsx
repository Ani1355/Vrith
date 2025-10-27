import Hero from './components/Hero';
import Process from './components/Process';
import { Gallery4 } from './components/ui/Gallery4';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import Footer from './components/Footer';
import { ErrorBoundary } from './components/ui/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-primary-50 scroll-smooth">
        <Hero />
        <section id="process">
          <Process />
        </section>
        <section id="projects">
          <Gallery4 />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <Testimonials />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
