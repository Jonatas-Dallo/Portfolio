import React from 'react';
import { useInView } from 'react-intersection-observer';
import githubImagem from '../../assets/icons/github.png';
import linkedinImagem from '../../assets/icons/linkedin.png';
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
                Developer
                <a href="https://github.com/Jonatas-Dallo" target="_blank" rel="noopener noreferrer" className='circular-image-github'>
                  <img src={githubImagem} alt="logo do github" />
                </a>
              </p>
            </div>
            <p>Full Stack</p>
            <div className='nome-container'>
              <p className='nome-text'>
                Jonatas Dallo
                <a href="https://www.linkedin.com/in/jonatas-mathias-147638206/" target="_blank" rel="noopener noreferrer" className='circular-image-linkedin'>
                  <img src={linkedinImagem} alt="logo do linkedin" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
