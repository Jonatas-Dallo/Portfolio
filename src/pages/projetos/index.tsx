import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import { Titulo, ContainerStyle, CardStyle } from './styled';

export default function Projetos() {
  const navigate = useNavigate();

  const handleCardClick = (cardName: string) => {

    if (cardName === 'Service Desk') {
      navigate('/projetos/serviceDesk');
    } else if (cardName === 'Daily Bot') {
      navigate('/projetos/dailyBot');
    } else if (cardName === 'Sistema para gerir cobranças') {
      navigate('/projetos/gestorCobrancas');
    } else if (cardName === 'Sistema de Coleta de Dados de Estações Meteorológicas') {
      navigate('/');
    }
  };

  const handleCardHover = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    card.style.transform = 'scale(1.1)';
    card.style.backgroundImage = 'linear-gradient(to bottom, #ff5e62, #f9004d)';
  };

  const handleCardLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    card.style.transform = 'scale(1)';
    card.style.backgroundImage = `linear-gradient(to bottom, #000, #000)`;
  };

  return (
    <ContainerStyle>
      <div>
        <Titulo>Meus projetos acadêmicos</Titulo>
      </div>
      <div className='row creative-service'>
        <div className="col-lg-12">
          <div className='row'>

            <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left my-4'>
              <CardStyle
                className="card"
                onClick={() => handleCardClick('Service Desk')}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <div className="card-body">
                  <h5 className="card-title">Service Desk</h5>
                  <hr />
                  <p className="card-text">Em modo geral, uma Central de Serviços é uma ferramenta que presta assessoria para solucionar problemas integrado no ambiente de tecnologia da informação. Este projeto será realizado baseado na metodologia ágil SCRUM, que foca no desenvolvimento da proatividade, autonomia e uma melhora da produtividade do time como um todo.</p>
                </div>
              </CardStyle>

            </div>

            <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left my-4'>
              <CardStyle
                className="card"
                onClick={() => handleCardClick('Daily Bot')}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <div className="card-body">
                  <h5 className="card-title">Daily Bot</h5>
                  <hr />
                  <p className="card-text">Projeto com a  proposta de desenvolver Crawler que consiga buscar, ler o arquivo e identificar o conteúdo relacionado aos Professores Associados, realizar os cruzamentos necessários com as bases de dados de associados, que suportarão está solução, gravar todos os processos publicados relacionados aos associados, e emitir relatório diário para que a equipe consiga disparar os e-mails para os professores citados no Diário Oficial. Caso consigam também realizar a automação do disparo destes e-mails seria uma sofisticação para a solução.</p>
                </div>
              </CardStyle>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left my-4'>
              <CardStyle
                className="card"
                onClick={() => handleCardClick('Sistema para gerir cobranças')}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <div className="card-body">
                  <h5 className="card-title">Sistema para gerir cobranças</h5>
                  <hr />
                  <p className="card-text">Em modo geral, uma Central de Serviços é uma ferramenta que presta assessoria para solucionar problemas integrado no ambiente de tecnologia da informação. Este projeto será realizado baseado na metodologia ágil SCRUM, que foca no desenvolvimento da proatividade, autonomia e uma melhora da produtividade do time como um todo.</p>
                </div>
              </CardStyle>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left my-4'>
              <CardStyle
                className="card"
                onClick={() => handleCardClick('Sistema de Coleta de Dados de Estações Meteorológicas')}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <div className="card-body">
                  <h5 className="card-title">Sistema de Coleta de Dados de Estações Meteorológicas</h5>
                  <hr />
                  <p className="card-text">Em modo geral, uma Central de Serviços é uma ferramenta que presta assessoria para solucionar problemas integrado no ambiente de tecnologia da informação. Este projeto será realizado baseado na metodologia ágil SCRUM, que foca no desenvolvimento da proatividade, autonomia e uma melhora da produtividade do time como um todo.</p>
                </div>
              </CardStyle>
            </div>

          </div>
        </div>
      </div>


      <div>
        <Titulo>Meus projetos profissionais</Titulo>
      </div>
      <div className='row creative-service'>
        <div className="col-lg-12">
          <div className='row'>

            <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left my-4'>
              <CardStyle
                className="card"
                onClick={() => handleCardClick('Service Desk')}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <div className="card-body">
                  <h5 className="card-title">Service Desk - 2022</h5>
                  <hr />
                  <p className="card-text">Em modo geral, uma Central de Serviços é uma ferramenta que presta assessoria para solucionar problemas integrado no ambiente de tecnologia da informação. Este projeto será realizado baseado na metodologia ágil SCRUM, que foca no desenvolvimento da proatividade, autonomia e uma melhora da produtividade do time como um todo.</p>
                </div>
              </CardStyle>

            </div>

            <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left my-4'>
              <CardStyle
                className="card"
                onClick={() => handleCardClick('Daily Bot')}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <div className="card-body">
                  <h5 className="card-title">Daily Bot - 2022</h5>
                  <hr />
                  <p className="card-text">Projeto com a  proposta de desenvolver Crawler que consiga buscar, ler o arquivo e identificar o conteúdo relacionado aos Professores Associados, realizar os cruzamentos necessários com as bases de dados de associados, que suportarão está solução, gravar todos os processos publicados relacionados aos associados, e emitir relatório diário para que a equipe consiga disparar os e-mails para os professores citados no Diário Oficial. Caso consigam também realizar a automação do disparo destes e-mails seria uma sofisticação para a solução.</p>
                </div>
              </CardStyle>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left my-4'>
              <CardStyle
                className="card"
                onClick={() => handleCardClick('Sistema para gerir cobranças')}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <div className="card-body">
                  <h5 className="card-title">Sistema para gerir cobranças - 2023</h5>
                  <hr />
                  <p className="card-text">Em modo geral, uma Central de Serviços é uma ferramenta que presta assessoria para solucionar problemas integrado no ambiente de tecnologia da informação. Este projeto será realizado baseado na metodologia ágil SCRUM, que foca no desenvolvimento da proatividade, autonomia e uma melhora da produtividade do time como um todo.</p>
                </div>
              </CardStyle>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left my-4'>
              <CardStyle
                className="card"
                onClick={() => handleCardClick('Sistema de Coleta de Dados de Estações Meteorológicas')}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <div className="card-body">
                  <h5 className="card-title">Sistema de Coleta de Dados de Estações Meteorológicas</h5>
                  <hr />
                  <p className="card-text">Em modo geral, uma Central de Serviços é uma ferramenta que presta assessoria para solucionar problemas integrado no ambiente de tecnologia da informação. Este projeto será realizado baseado na metodologia ágil SCRUM, que foca no desenvolvimento da proatividade, autonomia e uma melhora da produtividade do time como um todo.</p>
                </div>
              </CardStyle>
            </div>

          </div>
        </div>
      </div>
    </ContainerStyle>
  );
}
