import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Services from './components/Services';
import About from './components/About';
import Corporate from './components/Corporate';
import Achievement from './components/Achievement';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Loading from './components/Loading';
import ChatBot from './components/ChatBot';

function App() {
  const [loading, setLoading] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const visited = localStorage.getItem('hasVisited');
    setHasVisited(!!visited);

    // Set visited flag for future visits
    if (!visited) {
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  if (!hasVisited && loading) {
    return <Loading onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#0A0B1E]">
      <Navbar />
      <Hero />
      <Industries />
      <Services />
      <About />
      <Corporate />
      <Achievement />
      <CTA />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;