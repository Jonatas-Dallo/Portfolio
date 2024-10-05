import React from 'react';
import { useInView } from 'react-intersection-observer';
import './softSkills.css';

const SoftSkills = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  
  return (
    <div ref={ref} className={`section ${inView ? 'visible' : 'hidden'}`}>
      <div className="softSkills-card">
        <h2>SoftSkills</h2>
        <br />
        <p>Este é o card de SoftSkills.</p>
      </div>
    </div>
  );
};

export default SoftSkills;