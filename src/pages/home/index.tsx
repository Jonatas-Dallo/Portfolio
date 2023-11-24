import React, { useState, useEffect } from "react";
import { Fundo, Container, TituloPrincipal, SegundoTitulo, TerceiroTitulo, BackgroundImage } from "./styled";
import MinhaFoto from "../../assets/img/foto-minha.png";

const Home: React.FC = () => {
  const [subtitulo, setSubtitulo] = useState<string>("Desenvolvedor JS");

  useEffect(() => {
    const textos = ["Desenvolvedor Js", "Desenvolvedor Ts", "Desenvolvedor Fullstack"];
    let IndexAtual = 0;

    const IntervaloId = setInterval(() => {
      IndexAtual = (IndexAtual + 1) % textos.length;
      setSubtitulo(textos[IndexAtual]);
    }, 3000);

    return () => clearInterval(IntervaloId);
  }, []);

  return (
    <Fundo>
      <Container>
        <div className='container'>
          <div className="col-lg-12">
            <div className='row'>
              <div className="col-sm-10">
              <TituloPrincipal>Olá, meu nome é Jonatas</TituloPrincipal>
              <SegundoTitulo>{subtitulo}</SegundoTitulo>
              <TerceiroTitulo>Seja bem vindo!</TerceiroTitulo>
              </div>
            </div>
            
          </div>
        </div>
        <div style={{borderColor:" 3px solid white"}}>
          <BackgroundImage src={MinhaFoto} alt="" className="img-fluid"/>
        </div>
      </Container>
    </Fundo>
  );
};

export default Home;
