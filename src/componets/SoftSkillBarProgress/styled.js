import styled from 'styled-components';
import ProgressBar from 'react-bootstrap/ProgressBar';

export const ProgressBars = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  
`;

export const Centralizando = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledProgressBarWrapper = styled.div`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 0 2px #f9004d;
  display: flex;
  height: 27px;
  margin-bottom: 20px;
`;

export const StyledProgressBar = styled(ProgressBar)`
  height: 100%;
  width: 80%;
  flex-grow: 1;
  background-color: #1d1d24;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Arial';
  box-shadow: 0 0 0 3px #f9004d;
  border-radius: 0px;
  margim-top: 20px;
  margim-bottom: 20px;
`;

export const StyledProgressBarTecnologia = styled(ProgressBar)`
  height: 100%;
  width: 120%;
  flex-grow: 1;
  background-color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Arial';
  box-shadow: 0 0 0 3px #f9004d;
  border-radius: 0px;
`;

export const DivComTexto = styled.div`
  width: 1500px;
  display: flex;
  justify-content: space-between;
  position: relative; 
  border-right: none;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const TextoPrimeiro = styled.span`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
`;

export const Texto = styled.span`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
`;

export const TextoUltimo = styled.span`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  border-bottom: 2px solid white;
`;