import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Showcase from './components/Showcase';
import Work from './components/Work';
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
                <Showcase />
                <Work />
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
