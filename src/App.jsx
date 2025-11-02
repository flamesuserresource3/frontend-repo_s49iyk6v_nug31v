import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  const [active, setActive] = useState('Home');

  // Update document title and hash for simple in-app navigation feedback
  useEffect(() => {
    document.title = `${active} • PixelPulse Studio`;
  }, [active]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar active={active} onNavigate={setActive} />

      <main className="pt-28">
        {/* Home (visible by default) */}
        {active === 'Home' && (
          <HomeSection onSeeWork={() => setActive('Projects')} />
        )}

        {/* Other sections managed via active state */}
        <Sections active={active} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
