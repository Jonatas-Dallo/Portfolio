import React from 'react';
import { useInView } from 'react-intersection-observer';
import './hardSkils.css';

const HardSkill = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  
  return (
    <div ref={ref} className={`section ${inView ? 'visible' : 'hidden'}`}>
      <div className="hardSkills-card">
        <h2>HardSkill</h2>
        <br />
        <p>Este é o card de HardSkill.</p>
      </div>
    </div>
  );
};

export default HardSkill;