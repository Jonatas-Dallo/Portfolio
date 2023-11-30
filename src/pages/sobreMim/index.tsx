import React, { useState } from 'react';
import styled from 'styled-components';
import { Botoes, Container, ContainerBotoes } from './styled';
import BarraDeProgressoHardSkills from '../../componets/HardSkillBarProgress';
import BarraDeProgressoSoftSkills from '../../componets/SoftSkillBarProgress';
import SobreMimComponente from '../../componets/SobreMimComponente';

const Botao = styled.button<{ active?: boolean; clicked?: boolean }>`
  color: ${(props) => (props.active ? '#f9004d' : 'white')};
  font-size: 30px;
  font-weight: 500;
  line-height: 45px;
  text-decoration: none;
  position: relative;
  background-color: #000;
  border: none;
  overflow: hidden;

  &:hover {
    color: #f9004d;
  }

  &::after {
    content: '';
    display: block;
    height: 2px;
    width: ${(props) => (props.clicked ? '100%' : '40%')};
    background-color: ${(props) => (props.clicked ? '#f9004d' : 'white')};
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  ${(props) =>
        props.active &&
        `&::after {
      width: 100%;
    }`}
`;

const ComponenteDinamico = ({ activeButton }: { activeButton: string }) => {
    switch (activeButton) {
      case 'Sobre Mim':
        return <SobreMimComponente />;
      case 'Hard Skills':
        return <BarraDeProgressoHardSkills />;
      case 'Soft Skills':
        return <BarraDeProgressoSoftSkills />;
      default:
        return null;
    }
  };

export default function SobreMim() {
    const [activeButton, setActiveButton] = useState('');
    const [clickedButton, setClickedButton] = useState('');

    function handleButtonClick(buttonName: string) {
        setActiveButton(buttonName);
        setClickedButton(buttonName);
    }

    return (
        <Container>
            <div className='container'>
                <div className="col-lg-12">
                    <div className="row">
                        <ContainerBotoes>
                            <Botoes>
                                <Botao active={activeButton === 'Sobre Mim'} clicked={clickedButton === 'Sobre Mim'} onClick={() => handleButtonClick('Informações')}>
                                    Sobre Mim
                                </Botao>
                            </Botoes>
                        </ContainerBotoes>
                    </div>
                </div>
            </div>

            <div>
            <ComponenteDinamico activeButton={activeButton} />
            </div>
        </Container>
    );
}
