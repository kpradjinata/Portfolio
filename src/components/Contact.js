import React, { useEffect, useRef, useState } from 'react';
import useInView from '../hooks/useInView';

const Contact = () => {
  const [titleRef, isTitleInView] = useInView({ threshold: 0.3, rootMargin: '0px 0px -50px 0px' });
  const [textRef, isTextInView] = useInView({ threshold: 0.5, rootMargin: '0px 0px -50px 0px' });
  const [buttonContainerRef, isButtonContainerInView] = useInView({ threshold: 0.8, rootMargin: '0px 0px -20px 0px' });

  const emailButtonRef = useRef(null);
  const [buttonAnimationClass, setButtonAnimationClass] = useState(''); // Simplified to single class string
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Initial animation: boing then settles to mediumWiggle
    if (isButtonContainerInView) {
      setButtonAnimationClass('animate-boing animate-mediumWiggle [animation-play-state:running] [animation-delay:0s,0.7s]');
      // After boing finishes (0.7s), mediumWiggle continues.
      // We rely on animate-boing being 'forwards' fill mode.
    } else {
      setButtonAnimationClass(''); // No animation if not in view
    }
  }, [isButtonContainerInView]);


  useEffect(() => {
    const button = emailButtonRef.current;
    if (!button || !isButtonContainerInView) return;

    const handleMouseMove = (event) => {
      if (!emailButtonRef.current) return;
      const rect = emailButtonRef.current.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;
      
      const distance = Math.sqrt(
        Math.pow(event.clientX - buttonCenterX, 2) +
        Math.pow(event.clientY - buttonCenterY, 2)
      );

      let newWiggleClass = 'animate-mediumWiggle'; // Default if far or after boing

      if (isHovering) {
        newWiggleClass = 'animate-extremePopWiggle';
      } else if (distance < 100) { // Closest proximity (strongest non-hover wiggle)
        newWiggleClass = 'animate-strongWiggle';
      } else if (distance < 200) { // Medium proximity
        newWiggleClass = 'animate-mediumWiggle';
      } else if (distance < 350) { // Furthest noticeable proximity
        newWiggleClass = 'animate-subtleWiggle';
      } else { // Outside proximity range, revert to a default or less noticeable wiggle
        newWiggleClass = 'animate-subtleWiggle'; // Or even remove class if you want it static when far
      }
      
      // If boing is active and hasn't finished, we might not want to override it immediately
      // For simplicity, this logic assumes boing completes, then mouse interactions take over wiggle.
      // The initial useEffect sets boing then mediumWiggle.
      // This mousemove effect will then adjust the wiggle part.
      if (buttonAnimationClass.includes('animate-boing') && !isHovering && distance > 350) {
        // If boing is set and mouse is far and not hovering, let boing finish into mediumWiggle as set initially.
        // Or, if boing has a `forwards` fill and we want to ensure it's not overridden by a far-mouse subtleWiggle too soon:
        // This part is tricky without more complex state management for the boing animation completion.
        // The current initial setup tries to handle this: `animate-boing animate-mediumWiggle [animation-delay:0s,0.7s]`
        // This means mediumWiggle starts *after* boing. So this mousemove logic should primarily just set the wiggle.
      }

      setButtonAnimationClass(newWiggleClass);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      // When mouse leaves, revert to a base wiggle depending on distance, or default to mediumWiggle
      // The next mousemove event will handle this, or we can set a default here.
      // For now, relying on next mousemove event to set appropriate non-hover wiggle.
      // Or explicitly set to mediumWiggle if that's the desired resting state post-hover:
      // setButtonAnimationClass('animate-mediumWiggle'); 
    };

    window.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (button) {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  // Depend on isButtonContainerInView to re-attach listeners if element was hidden then shown
  // Depend on isHovering to immediately re-evaluate classes on hover change
  // buttonAnimationClass is not a dependency here to avoid loops if setButtonAnimationClass triggers re-render and this effect again with old class value.
  }, [isButtonContainerInView, isHovering, buttonAnimationClass]);

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 
          ref={titleRef}
          className={`text-4xl font-bold mb-6 uppercase tracking-wider transition-all duration-700 ease-out 
                      ${isTitleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Contact Me
        </h2>
        <p 
          ref={textRef}
          className={`text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out delay-200 
                      ${isTextInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Feel free to reach out! Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div 
          ref={buttonContainerRef} 
          className={`flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 
                      transition-opacity duration-500 ${isButtonContainerInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <a 
            ref={emailButtonRef}
            href="mailto:kepradjinata@gmail.com"
            className={`font-semibold py-2 px-6 rounded-md shadow-md text-base 
                        bg-blue-500 text-white 
                        hover:bg-purple-500 hover:text-yellow-300 
                        dark:bg-blue-600 dark:hover:bg-purple-600 dark:hover:text-yellow-200 
                        focus:outline-none focus:ring-4 focus:ring-green-500 dark:focus:ring-green-400 
                        transition-colors duration-300 ease-in-out transform 
                        ${buttonAnimationClass}` // Animation classes managed by JS
                      }
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;