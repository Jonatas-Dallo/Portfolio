import React from 'react';
import './styled.css'; // Adicione um arquivo de estilos para o botão

const BotaoTopo = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="scroll-to-top" onClick={handleScrollToTop}>
      Voltar Ao Topo
    </button>
  );
};

export default BotaoTopo;
