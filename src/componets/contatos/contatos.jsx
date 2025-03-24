import React from 'react';
import { useInView } from 'react-intersection-observer';
import './contatos.css';

const Contatos = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  
  return (
    <div ref={ref} className={`section ${inView ? 'visible' : 'hidden'}`}>
      <div className="contatos-card">
        <h2>Contatos</h2>
        <br />
        <p>Este é o card de Contatos.</p>
      </div>
    </div>
  );
};

export default Contatos;