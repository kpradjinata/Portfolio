import React, { useState } from 'react';
import useInView from '../hooks/useInView';
import profileImage from '../assets/images/profile.png';
import designerGraphic from '../assets/images/designer-graphic.jpg';
import developerGraphic from '../assets/images/developer-graphic.png';
import { useTheme } from '../context/ThemeContext';
import Modal from './Modal';

const FUN_FACTS = [
  "I love building things that blend design and code!",
  "I once built a full-stack app in a single weekend.",
  "I play piano and love jazz improvisation.",
  "I can solve a Rubik's cube in under a minute.",
  "I enjoy hiking and landscape photography.",
  "I speak three languages!",
  "I have a secret /secret page on this site... 😉",
  "I believe in lifelong learning and curiosity.",
];

// Typewriter effect hook
function useTypewriter(words, speed = 80, pause = 1200) {
  const [index, setIndex] = React.useState(0);
  const [display, setDisplay] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let timeout;
    const current = words[index % words.length];
    if (!isDeleting) {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), speed / 2);
      } else {
        setIsDeleting(false);
        setIndex((i) => i + 1);
      }
    }
    return () => clearTimeout(timeout);
  }, [display, isDeleting, index, words, speed, pause]);
  return display;
}

const Home = () => {
  const [homeRef, isHomeInView] = useInView({ threshold: 0.1 });
  const [arrowRef, isArrowInView] = useInView({ threshold: 0.1, triggerOnce: false });
  const designerText = useTypewriter(['Designer']);
  const developerText = useTypewriter(['Developer']);
  // Easter egg state
  const [easterEgg, setEasterEgg] = useState(false);
  const [showFact, setShowFact] = useState(false);
  const [fact, setFact] = useState('');

  // Confetti effect (simple SVG burst)
  const [showConfetti, setShowConfetti] = useState(false);
  const triggerEasterEgg = () => {
    setEasterEgg(true);
    setShowConfetti(true);
    setFact(FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)]);
    setShowFact(true);
    setTimeout(() => setEasterEgg(false), 1200);
    setTimeout(() => setShowConfetti(false), 1800);
  };

  return (
    <section 
      ref={homeRef}
      id="home" 
      className={`min-h-[85vh] flex items-start justify-center relative
                 bg-white text-gray-800 dark:bg-black dark:text-white 
                 overflow-x-hidden`}
    >
      <div className="container mx-auto px-4 pt-16 pb-16 md:pt-20">
        <div className="flex flex-col md:flex-row items-stretch justify-around text-center md:text-left space-y-12 md:space-y-0 md:space-x-8">
          {/* Designer Section - Image with opacity and parallax */}
          <div 
            className={`md:w-1/3 transition-all duration-700 ease-out transform relative min-h-[450px] md:min-h-[500px] rounded-lg overflow-hidden 
                        ${isHomeInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
            style={{
              backgroundAttachment: 'fixed',
              backgroundImage: `url(${designerGraphic})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              zIndex: 1
            }}
          >
            <div className="relative z-10 p-8 space-y-4 flex flex-col justify-center items-center h-full bg-white/70 dark:bg-black/60">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 text-shadow">
                {designerText}
                <span className="blinking-cursor">|</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-200 text-shadow-sm text-center md:text-center">
                Blending creativity and usability to craft stunning and user-friendly interfaces.
              </p>
            </div>
          </div>
          {/* Profile Image Section with Easter Egg */}
          <div className={`md:w-1/3 flex flex-col justify-center items-center transition-all duration-700 ease-out delay-200 transform 
                          ${isHomeInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <img 
              src={profileImage} 
              alt="Kevin Pradjinata headshot" 
              className={`rounded-full w-56 h-56 md:w-72 md:h-72 object-cover border-4 border-gray-300 dark:border-gray-700 shadow-xl cursor-pointer transition-transform duration-500 ${easterEgg ? 'animate-spin scale-125' : ''}`}
              loading="lazy"
              onClick={triggerEasterEgg}
            />
            {/* Confetti burst */}
            {showConfetti && (
              <svg className="absolute pointer-events-none" style={{top: '50%', left: '50%', transform: 'translate(-50%, -60%)'}} width="180" height="120">
                {[...Array(18)].map((_, i) => (
                  <circle key={i} cx="90" cy="60" r="6" fill={`hsl(${i*20},90%,60%)`} style={{
                    transform: `rotate(${i*20}deg) translate(0,-50px)`,
                    transformOrigin: '90px 60px',
                    opacity: 0.8
                  }} />
                ))}
              </svg>
            )}
          </div>
          {/* Developer Section - Image with opacity, scale, and left alignment */}
          <div 
            className={`md:w-1/3 transition-all duration-700 ease-out transform relative min-h-[450px] md:min-h-[500px] rounded-lg overflow-hidden 
                        ${isHomeInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
          >
            <img 
              src={developerGraphic} 
              alt="Abstract code graphic" 
              className="absolute inset-0 w-full h-full object-contain opacity-55 origin-left scale-137.5"
              loading="lazy"
            />
            <div className="relative z-10 p-8 space-y-4 flex flex-col justify-center items-center h-full bg-white/70 dark:bg-black/60">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 text-shadow">
                {developerText}
                <span className="blinking-cursor">|</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-200 text-shadow-sm text-center md:text-center">
                Committed to creating robust solutions with a focus on efficiency and adaptability to emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Down Arrow */}
      {isHomeInView && (
        <div 
          ref={arrowRef} 
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${isArrowInView ? 'opacity-100' : 'opacity-0'}`}>
          <svg 
            className="w-8 h-8 text-gray-600 dark:text-gray-400 animate-bounceArrow"
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      )}
      <Modal isOpen={showFact} onClose={() => setShowFact(false)}>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-2">🎉 Fun Fact</h2>
          <p className="mb-2">{fact}</p>
          <p className="text-xs text-gray-400">(Try the Konami code on your keyboard!)</p>
        </div>
      </Modal>
      <style>{`.blinking-cursor{animation:blink 1s steps(2,start) infinite}@keyframes blink{to{opacity:.0}}`}</style>
    </section>
  );
};

export default Home;