import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Showcase from './components/Showcase';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" lang="en">
      <Navbar />
      <main className="pt-16">
        <Home />
        <Showcase />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
