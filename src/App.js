import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Expertise from './components/Expertise';
import HighlightedProjects from './components/HighlightedProjects';
import ProjectsList from './components/ProjectsList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailPage from './components/ProjectDetailPage';

function App() {
  return (
    <Router>
      <div className="App" lang="en">
        <Navbar />
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
