// src/components/AnimatedSection.js
import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, zoomType = 'zoomIn' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation happens once
    threshold: 0.1,    // Start animation when 10% of the element is in view
  });

  return (
    <div
      ref={ref}
      className={`transition-transform duration-1000 ${
        inView ? `animate-${zoomType}` : 'scale-75 opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
