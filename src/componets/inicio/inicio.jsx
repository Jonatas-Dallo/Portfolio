import React from 'react';
import { useInView } from 'react-intersection-observer';
import githubImagem from '../../assets/icons/github.png';
<<<<<<< HEAD
=======
import linkedinImagem from '../../assets/icons/linkedin.png';
>>>>>>> 6f98f4c11e9a2e91b212addc0f4192529403c2cc
import './inicio.css';

const Inicio = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div ref={ref} className={`section ${inView ? 'visible' : 'hidden'}`}>
      <div className="inicio-card">
        <div className='inicio-texto'>
          <div className='linha1'>
            <div className='developer-container'>
              <p className='developer-text'>
                Devel
                <a href="https://github.com/Jonatas-Dallo" target="_blank" rel="noopener noreferrer" className='circular-image-github'>
                  <img src={githubImagem} alt="logo do github" />
                </a>
                per
              </p>
            </div>
            <p>Full Stack</p>
            <div className='nome-container'>
              <p className='nome-text'>
                Jonatas Dallo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
