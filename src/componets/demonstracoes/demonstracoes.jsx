import React from 'react';
import { useInView } from 'react-intersection-observer';
import './demonstracoes.css';

const Demonstracoes = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  
  return (
    <div ref={ref} className={`section ${inView ? 'visible' : 'hidden'}`}>
      <div className="demonstracoes-card">
        <h2>Demonstracoes</h2>
        <br />
        <p>Este é o card de Demonstracoes.</p>
      </div>
    </div>
  );
};

export default Demonstracoes;