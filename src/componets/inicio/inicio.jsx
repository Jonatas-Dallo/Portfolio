import React from 'react';
import { useInView } from 'react-intersection-observer';
import './inicio.css';

const Inicio = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div ref={ref} className={`section ${inView ? 'visible' : 'hidden'}`}>
      <div className="inicio-card">
        <div>
            <p>Developer</p>
            <img src="" alt="" />
        </div>
        <div>
            <p>Full Stack</p>
            <img src="" alt="" />
        </div>
        <div>
            <p>JonaTas Dallo</p>
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
