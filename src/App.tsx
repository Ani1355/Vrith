import Hero from './components/Hero';
import Process from './components/Process';
import { Gallery4 } from './components/ui/Gallery4';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary-50 scroll-smooth">
      <Hero />
      <Process />
      <Gallery4 />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
