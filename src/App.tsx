import { ArrowRight, Circle, Plus } from 'lucide-react';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import BusinessOperations from './components/BusinessOperations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <Hero />
      <Capabilities />
      <BusinessOperations />
      <Footer />
    </div>
  );
}

export default App;
