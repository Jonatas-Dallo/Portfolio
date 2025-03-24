import React from 'react';
import { useInView } from 'react-intersection-observer';
import './sobreMim.css';

const SobreMim = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  
  return (
    <div ref={ref} className={`section ${inView ? 'visible' : 'hidden'}`}>
      <div className="sobreMim-card">
        <h2>SobreMim</h2>
        <br />
        <p>Este é o card de SobreMim.</p>
      </div>
    </div>
  );
};

export default SobreMim;