import React from 'react';
import { useInView } from 'react-intersection-observer';
import './certificados.css';

const Certificados = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  
  return (
    <div ref={ref} className={`section ${inView ? 'visible' : 'hidden'}`}>
      <div className="certificados-card">
        <h2>Certificados</h2>
        <br />
        <p>Este é o card de Certificados.</p>
      </div>
    </div>
  );
};

export default Certificados;