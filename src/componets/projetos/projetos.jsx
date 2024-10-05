import React from 'react';
import { useInView } from 'react-intersection-observer';
import './projetos.css';

const Projetos = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  
  return (
    <div ref={ref} className={`section ${inView ? 'visible' : 'hidden'}`}>
      <div className="projetos-card">
        <h2>Projetos</h2>
        <br />
        <p>Este é o card de Projetos.</p>
      </div>
    </div>
  );
};

export default Projetos;