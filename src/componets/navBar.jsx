import React, { useState } from 'react';
import './styled.css';

const NavBarTop = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Novo estado para controlar o menu

  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Fecha o menu ao clicar em um item
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna entre abrir e fechar o menu
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Ícone de menu "hamburger" */}
      </div>
      <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
        <li className={`nav-item ${activeSection === 'inicio' ? 'active' : ''}`} onClick={() => handleClick('inicio')}>Início</li>
        <li className={`nav-item ${activeSection === 'sobreMim' ? 'active' : ''}`} onClick={() => handleClick('sobreMim')}>Sobre Mim</li>
        <li className={`nav-item ${activeSection === 'softSkills' ? 'active' : ''}`} onClick={() => handleClick('softSkills')}>Software Skills</li>
        <li className={`nav-item ${activeSection === 'hardSkills' ? 'active' : ''}`} onClick={() => handleClick('hardSkills')}>Hardware Skills</li>
        <li className={`nav-item ${activeSection === 'projetos' ? 'active' : ''}`} onClick={() => handleClick('projetos')}>Projetos</li>
        <li className={`nav-item ${activeSection === 'demonstracoes' ? 'active' : ''}`} onClick={() => handleClick('demonstracoes')}>Demonstrações</li>
        <li className={`nav-item ${activeSection === 'certificados' ? 'active' : ''}`} onClick={() => handleClick('certificados')}>Certificados</li>
        <li className={`nav-item ${activeSection === 'contatos' ? 'active' : ''}`} onClick={() => handleClick('contatos')}>Contatos</li>
      </ul>
      <div className="underline" />
    </nav>
  );
};

export default NavBarTop;
