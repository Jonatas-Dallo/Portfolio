import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './projetos.css';

const Projetos = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null); // Nova variável para conteúdo do modal

  // Dados dos projetos
  const projects = [
    { id: 1, title: 'Service Desk - (2022)', description: 'Em modo geral, uma Central de Serviços é uma ferramenta que presta assessoria para solucionar problemas integrado no ambiente de tecnologia da informação. Este projeto será realizado baseado na metodologia ágil SCRUM, que foca no desenvolvimento da proatividade, autonomia e uma melhora da produtividade do time como um todo.', images: ['github.png'] },
    { id: 2, title: 'Daily Bot - (2022)', description: 'Projeto com a proposta de desenvolver Crawler que consiga buscar, ler o arquivo e identificar o conteúdo relacionado aos Professores Associados, realizar os cruzamentos necessários com as bases de dados de associados, que suportarão está solução, gravar todos os processos publicados relacionados aos associados, e emitir relatório diário para que a equipe consiga disparar os e-mails para os professores citados no Diário Oficial. Caso consigam também realizar a automação do disparo destes e-mails seria uma sofisticação para a solução.', images: ['linguagem3.png', 'linguagem4.png'] },
    { id: 3, title: 'Sistema para Gerir Cobranças - (2023)', description: 'Em modo geral, uma Central de Serviços é uma ferramenta que presta assessoria para solucionar problemas integrado no ambiente de tecnologia da informação. Este projeto será realizado baseado na metodologia ágil SCRUM, que foca no desenvolvimento da proatividade, autonomia e uma melhora da produtividade do time como um todo.', images: ['linguagem5.png', 'linguagem6.png'] },
    { id: 4, title: 'Projeto 4', description: 'Descrição do Projeto 4', images: ['linguagem5.png', 'linguagem6.png'] },
  ];

  // Dados do conteúdo do modal (diferente da descrição no card)
  const model = [
    { id: 1, title: 'Service Desk - (2022)', description: 'Nesse projeto eu fiz...', images: ['linguagem5.png', 'linguagem6.png'] },
    { id: 2, title: 'Daily Bot - (2022)', description: 'Aqui está a descrição detalhada do Daily Bot...', images: ['linguagem3.png', 'linguagem4.png'] },
    { id: 3, title: 'Sistema para Gerir Cobranças - (2023)', description: 'Esse sistema foi desenvolvido para...', images: ['linguagem5.png', 'linguagem6.png'] },
    { id: 4, title: 'Projeto 4', description: 'Descrição detalhada do Projeto 4...', images: ['linguagem5.png', 'linguagem6.png'] },
  ];

  // Função para abrir o modal
  const openModal = (projectId) => {
    // Encontra o conteúdo do modal baseado no id do projeto
    const selectedModalContent = model.find((item) => item.id === projectId);
    setModalContent(selectedModalContent); // Armazena o conteúdo do modal
    setIsModalOpen(true); // Abre o modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null); // Limpa o conteúdo do modal quando fechado
  };

  return (
    <div ref={ref} className={`section ${inView ? 'visible' : 'hidden'}`}>
      <div className="projetos-card">
        <h2>Projetos</h2>
        <div className="projetos-container">
          {projects.map((project) => (
            <div
              key={project.id}
              className="projeto-item"
              onClick={() => openModal(project.id)} // Passa o id do projeto para abrir o modal com conteúdo específico
            >
              <h3>{project.title}</h3>
              <div className="line"></div> {/* Linha separadora do título */}
              <p>{project.description}</p>
              <div className="footer">
                {project.images.map((img, index) => (
                  <img key={index} src={`../../assets/icons/${img}`} alt={`Linguagem ${index + 1}`} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && modalContent && (  // Usa o modalContent para exibir o conteúdo do modal
          <div className="modal">
            <div className="modal-content">
              <h2>{modalContent.title}</h2>
              <p>{modalContent.description}</p>
              <div className="modal-images">
                {modalContent.images.map((img, index) => (
                  <img key={index} src={`../../assets/icons/${img}`} alt={`Imagem ${index + 1}`} />
                ))}
              </div>
              <button onClick={closeModal}>Fechar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projetos;
