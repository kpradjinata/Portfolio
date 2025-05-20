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
    const observer = new IntersectionObserver(([entry]) => {
      // Update state when the element's intersection status changes.
      // We only want to trigger the animation once when it becomes visible.
      if (entry.isIntersecting) {
        setIsInView(true);
        // Unobserve after it's in view to trigger the animation only once.
        if (ref.current) { // Ensure ref.current exists before trying to unobserve
          observer.unobserve(ref.current);
        }
      }
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
  }, [options]); // Re-run effect if options change

  return [ref, isInView];
};

export default useInView; 