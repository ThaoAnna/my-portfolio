import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <div>
      <Navbar />
      </div>
      <div>
        <main className="pt-16"> {/* pt-16 to avoid navbar overlap */}
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </main>
      </div>
    </div>
  );
};

export default App;
