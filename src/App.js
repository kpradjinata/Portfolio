import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

// A wrapper component to handle routed content
const AnimatedRoutes = () => {
  const location = useLocation(); // Keep location if needed for other route-based logic in the future

  return (
    <main 
      className="pt-16" // Removed opacity transition classes
    >
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
      </Routes>
    </main>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App" lang="en">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
