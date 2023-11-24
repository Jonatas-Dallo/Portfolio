import { ProgressBars, StyledProgressBar, StyledProgressBarWrapper, StyledProgressBarTecnologia, DivComTexto, Texto, TextoUltimo, TextoPrimeiro } from "./styled";


export default function BarraDeProgressoSoftSkills() {
    return (
        <div className="container">
            <div className="row">
                <DivComTexto>
                    <TextoPrimeiro>Habilidades sociais</TextoPrimeiro>
                    <Texto>Muito baixo</Texto>
                    <Texto>Baixo</Texto>
                    <Texto>Médio</Texto>
                    <Texto>Alto</Texto>
                    <TextoUltimo>Muito alto</TextoUltimo>
                </DivComTexto>

                <ProgressBars>
                    <StyledProgressBarWrapper>
                        <StyledProgressBarTecnologia variant="dark" now={100} label="Criatividade" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={2} />
                        <StyledProgressBar striped animated now={100} label="" key={3} />
                        <StyledProgressBar striped animated now={100} label="" key={4} />
                        <StyledProgressBar striped animated now={30} label="" key={5} />
                    </StyledProgressBarWrapper>
                    <StyledProgressBarWrapper>
                        <StyledProgressBarTecnologia variant="dark" now={100} label="Colaboração" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={2} />
                        <StyledProgressBar striped animated now={100} label="" key={3} />
                        <StyledProgressBar striped animated now={100} label="" key={4} />
                        <StyledProgressBar striped animated now={0} label="" key={5} />
                    </StyledProgressBarWrapper>

                    <StyledProgressBarWrapper>
                        <StyledProgressBarTecnologia variant="dark" now={100} label="Resiliencia" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={2} />
                        <StyledProgressBar striped animated now={100} label="" key={3} />
                        <StyledProgressBar striped animated now={100} label="" key={4} />
                        <StyledProgressBar striped animated now={0} label="" key={5} />
                    </StyledProgressBarWrapper>

                    <StyledProgressBarWrapper>
                        <StyledProgressBarTecnologia variant="dark" now={100} label="Capacidade de aprendizado" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={2} />
                        <StyledProgressBar striped animated now={100} label="" key={3} />
                        <StyledProgressBar striped animated now={80} label="" key={4} />
                        <StyledProgressBar striped animated now={0} label="" key={5} />
                    </StyledProgressBarWrapper>

                    <StyledProgressBarWrapper>
                        <StyledProgressBarTecnologia variant="dark" now={100} label="Flexibilidade" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={2} />
                        <StyledProgressBar striped animated now={100} label="" key={3} />
                        <StyledProgressBar striped animated now={80} label="" key={4} />
                        <StyledProgressBar striped animated now={0} label="" key={5} />
                    </StyledProgressBarWrapper>

                    <StyledProgressBarWrapper>
                        <StyledProgressBarTecnologia variant="dark" now={100} label="Trabalho em equipe" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={2} />
                        <StyledProgressBar striped animated now={100} label="" key={3} />
                        <StyledProgressBar striped animated now={70} label="" key={4} />
                        <StyledProgressBar striped animated now={0} label="" key={5} />
                    </StyledProgressBarWrapper>

                    <StyledProgressBarWrapper>
                        <StyledProgressBarTecnologia variant="dark" now={100} label="Autoconfiança" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={2} />
                        <StyledProgressBar striped animated now={1000} label="" key={3} />
                        <StyledProgressBar striped animated now={60} label="" key={4} />
                        <StyledProgressBar striped animated now={0} label="" key={5} />
                    </StyledProgressBarWrapper>

                    <StyledProgressBarWrapper>
                        <StyledProgressBarTecnologia variant="dark" now={100} label="Liderança de equipe" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={2} />
                        <StyledProgressBar striped animated now={100} label="" key={3} />
                        <StyledProgressBar striped animated now={50} label="" key={4} />
                        <StyledProgressBar striped animated now={0} label="" key={5} />
                    </StyledProgressBarWrapper>

                    <StyledProgressBarWrapper>
                        <StyledProgressBarTecnologia variant="dark" now={100} label="Organizção" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={2} />
                        <StyledProgressBar striped animated now={100} label="" key={3} />
                        <StyledProgressBar striped animated now={0} label="" key={4} />
                        <StyledProgressBar striped animated now={0} label="" key={5} />
                    </StyledProgressBarWrapper>

                    <StyledProgressBarWrapper>
                        <StyledProgressBarTecnologia variant="dark" now={100} label="Empatia" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={2} />
                        <StyledProgressBar striped animated now={100} label="" key={3} />
                        <StyledProgressBar striped animated now={0} label="" key={4} />
                        <StyledProgressBar striped animated now={0} label="" key={5} />
                    </StyledProgressBarWrapper>

                    <StyledProgressBarWrapper>
                        <StyledProgressBarTecnologia variant="dark" now={100} label="Comunicação" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={2} />
                        <StyledProgressBar striped animated now={80} label="" key={3} />
                        <StyledProgressBar striped animated now={0} label="" key={4} />
                        <StyledProgressBar striped animated now={0} label="" key={5} />
                    </StyledProgressBarWrapper>

                    <StyledProgressBarWrapper>
                        <StyledProgressBarTecnologia variant="dark" now={100} label="Inteligência emocional" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={2} />
                        <StyledProgressBar striped animated now={80} label="" key={3} />
                        <StyledProgressBar striped animated now={0} label="" key={4} />
                        <StyledProgressBar striped animated now={0} label="" key={5} />
                    </StyledProgressBarWrapper>

                    <StyledProgressBarWrapper>
                        <StyledProgressBarTecnologia variant="dark" now={100} label="Planejamento" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={2} />
                        <StyledProgressBar striped animated now={50} label="" key={3} />
                        <StyledProgressBar striped animated now={0} label="" key={4} />
                        <StyledProgressBar striped animated now={0} label="" key={5} />
                    </StyledProgressBarWrapper>

                    <StyledProgressBarWrapper>
                        <StyledProgressBarTecnologia variant="dark" now={100} label="Gerenciamento de tempo" key={1} />
                        <StyledProgressBar striped animated now={100} label="" key={1} />
                        <StyledProgressBar striped animated now={50} label="" key={2} />
                        <StyledProgressBar striped animated now={0} label="" key={3} />
                        <StyledProgressBar striped animated now={0} label="" key={4} />
                        <StyledProgressBar striped animated now={0} label="" key={5} />
                    </StyledProgressBarWrapper>
                </ProgressBars>
            </div>
        </div>
    );
}