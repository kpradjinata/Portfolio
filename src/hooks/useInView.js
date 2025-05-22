import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element is in the viewport.
 * @param {object} options - IntersectionObserver options (e.g., root, rootMargin, threshold).
 * @returns {[React.MutableRefObject, boolean]} - A ref to attach to the element and a boolean indicating if it's in view.
 */
const useInView = (options) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      // Update state based on whether the element is currently intersecting the viewport.
      setIsInView(entry.isIntersecting);
    }, options);

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options, ref]); // Added ref to dependencies to re-observe if the ref itself changes, though less common.

  return [ref, isInView];
};

export default useInView; 