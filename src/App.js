import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Expertise from './components/Expertise';
import HighlightedProjects from './components/HighlightedProjects';
import ProjectsList from './components/ProjectsList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailPage from './components/ProjectDetailPage';
import ScrollToTop from './components/ScrollToTop';
import Modal from './components/Modal';

const SECRET_MESSAGE = `
👋 Hello, developer! You found the console easter egg.
Want to collaborate? Email me at kepradjinata@gmail.com
`;

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'
];

const SecretPage = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
    <h1 className="text-4xl font-bold mb-4">🎉 Secret Unlocked!</h1>
    <p className="text-lg mb-4">You found the hidden page. You must be curious!<br/>Email me with the subject "I found the secret" for a surprise.</p>
    <a href="/" className="text-blue-500 underline">Back to Home</a>
  </div>
);

// A wrapper component to handle routed content
const AnimatedRoutes = () => {
  return (
    <main className="pt-16">
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Expertise />
            <HighlightedProjects />
            <ProjectsList />
            <Contact />
          </>
        } />
        <Route path="/project/:projectId" element={<ProjectDetailPage />} />
        <Route path="/secret" element={<SecretPage />} />
      </Routes>
    </main>
  );
};

function App() {
  const [showKonamiModal, setShowKonamiModal] = useState(false);
  useEffect(() => {
    // Console easter egg
    // eslint-disable-next-line no-console
    console.log(SECRET_MESSAGE);
    // Konami code listener
    let keyBuffer = [];
    const handleKeyDown = (e) => {
      keyBuffer.push(e.key);
      if (keyBuffer.length > KONAMI_CODE.length) keyBuffer.shift();
      if (KONAMI_CODE.every((k, i) => keyBuffer[i - KONAMI_CODE.length + keyBuffer.length] === k)) {
        setShowKonamiModal(true);
        keyBuffer = [];
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <Router basename={"/Portfolio"}>
        <ScrollToTop />
        <div className="App" lang="en">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
          <Modal isOpen={showKonamiModal} onClose={() => setShowKonamiModal(false)}>
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold mb-2">Konami Code Activated!</h2>
              <p className="mb-4">You discovered the secret easter egg. <span role="img" aria-label="party">🎉</span></p>
              <p className="text-sm text-gray-500">(Try clicking my profile image too!)</p>
            </div>
          </Modal>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
