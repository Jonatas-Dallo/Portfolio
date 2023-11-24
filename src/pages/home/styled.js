import styled from "styled-components";

export const Fundo = styled.div`
  background-color: #000000;
  height: 100%;
  display: flex;
  align-items: center; 
  justify-content: center; 
`;

export const Container = styled.div`
  max-width: 960px; 
  width: 100%;
  height: 100%;
  margin: auto; 
  display: flex;
  align-items: center; 
  flex-direction: column; 
  padding-top: 13%;
`;

export const TituloPrincipal = styled.h1`
  color: white;
  font-size: 52px;
  line-height: 68px;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  margin: 0; 
  margin-left: -30px;
`;

export const SegundoTitulo = styled.h2`
  color: #f9004d;
  font-size: 52px;
  line-height: 68px;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  margin: 0; 
  margin-left: -30px;
`;

export const TerceiroTitulo = styled.h1`
  color: white;
  font-size: 50px;
  line-height: 68px;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  margin: 0; 
  margin-left: -30px;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  right: 0; /* Ajuste conforme necessário */
  top: 25%;
  bottom: 0;
  left: 70%;
  width: 22%;
  height: 50%;
  z-index: 0;
  border: 2px solid white;
  border-radius: 50%;
`;
