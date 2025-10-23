import { ArrowRight, Circle, Plus } from 'lucide-react';
import Hero from './components/Hero';
import AIWorkforce from './components/AIWorkforce';
import RecentBuilds from './components/RecentBuilds';
import Capabilities from './components/Capabilities';
import BusinessOperations from './components/BusinessOperations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <Hero />
      <AIWorkforce />
      <RecentBuilds />
      <Capabilities />
      <BusinessOperations />
      <Footer />
    </div>
  );
}

export default App;
