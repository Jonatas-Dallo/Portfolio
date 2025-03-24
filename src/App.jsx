import React from 'react';
import './App.css';
import Inicio from "./componets/inicio/inicio.jsx";
import SobreMim from './componets/sobreMim/sobreMim';
import SoftSkills from './componets/softSkills/softSkills';
import HardSkill from './componets/hardSkills/hardSkills';
import Projetos from './componets/projetos/projetos';
import Certificados from './componets/certificados/certificados';
import Contatos from './componets/contatos/contatos';
import NavBarTop from './componets/navBar';
import BotaoTopo from './componets/botaoTopo';

function App() {
  return (
    <div className="App">
      <NavBarTop/>
      <div id="inicio"><Inicio/></div>
      <div id="sobreMim"><SobreMim/></div>
      <div id="softSkills"><SoftSkills/></div>
      <div id="hardSkills"><HardSkill/></div>
      <div id="projetos"><Projetos/></div>
      <div id="certificados"><Certificados/></div>
      <div id="contatos"><Contatos/></div>
      <BotaoTopo/>
    </div>
  );
}

export default App;
