import { ProgressBars, StyledProgressBar, StyledProgressBarWrapper, StyledProgressBarTecnologia, DivComTexto, Texto, TextoUltimo } from "./styled";

export default function BarraDeProgressoHardSkills() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <DivComTexto>
                        <Texto>Tecnologias</Texto>
                        <Texto>Iniciante</Texto>
                        <Texto>Intermediário</Texto>
                        <Texto>Avançado</Texto>
                        <Texto>Experiente</Texto>
                        <TextoUltimo>Especialista</TextoUltimo>
                    </DivComTexto>

                    <ProgressBars>
                        <StyledProgressBarWrapper>
                            <StyledProgressBarTecnologia variant="dark" now={100} label="HTML" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={2} />
                            <StyledProgressBar striped animated now={100} label="100%" key={3} />
                            <StyledProgressBar striped animated now={0} label="" key={4} />
                            <StyledProgressBar striped animated now={0} label="" key={5} />
                        </StyledProgressBarWrapper>

                        <StyledProgressBarWrapper>
                            <StyledProgressBarTecnologia variant="dark" now={100} label="CSS" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={2} />
                            <StyledProgressBar striped animated now={100} label="100%" key={3} />
                            <StyledProgressBar striped animated now={0} label="" key={4} />
                            <StyledProgressBar striped animated now={0} label="" key={5} />
                        </StyledProgressBarWrapper>

                        <StyledProgressBarWrapper>
                            <StyledProgressBarTecnologia variant="dark" now={100} label="TypeScript" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={2} />
                            <StyledProgressBar striped animated now={40} label="40%" key={3} />
                            <StyledProgressBar striped animated now={0} label="" key={4} />
                            <StyledProgressBar striped animated now={0} label="" key={5} />
                        </StyledProgressBarWrapper>

                        <StyledProgressBarWrapper>
                            <StyledProgressBarTecnologia variant="dark" now={100} label="JavaScript" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%z" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={2} />
                            <StyledProgressBar striped animated now={30} label="30%" key={3} />
                            <StyledProgressBar striped animated now={0} label="" key={4} />
                            <StyledProgressBar striped animated now={0} label="" key={5} />
                        </StyledProgressBarWrapper>

                        <StyledProgressBarWrapper>
                            <StyledProgressBarTecnologia variant="dark" now={100} label="React" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={2} />
                            <StyledProgressBar striped animated now={25} label="25%" key={3} />
                            <StyledProgressBar striped animated now={0} label="" key={4} />
                            <StyledProgressBar striped animated now={0} label="" key={5} />
                        </StyledProgressBarWrapper>

                        <StyledProgressBarWrapper>
                            <StyledProgressBarTecnologia variant="dark" now={100} label="Styled Component" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={2} />
                            <StyledProgressBar striped animated now={0} label="" key={3} />
                            <StyledProgressBar striped animated now={0} label="" key={4} />
                            <StyledProgressBar striped animated now={0} label="" key={5} />
                        </StyledProgressBarWrapper>

                        <StyledProgressBarWrapper>
                            <StyledProgressBarTecnologia variant="dark" now={100} label="Mysql" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={2} />
                            <StyledProgressBar striped animated now={0} label="" key={3} />
                            <StyledProgressBar striped animated now={0} label="" key={4} />
                            <StyledProgressBar striped animated now={0} label="" key={5} />
                        </StyledProgressBarWrapper>

                        <StyledProgressBarWrapper>
                            <StyledProgressBarTecnologia variant="dark" now={100} label="MongoDB" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={2} />
                            <StyledProgressBar striped animated now={0} label="" key={3} />
                            <StyledProgressBar striped animated now={0} label="" key={4} />
                            <StyledProgressBar striped animated now={0} label="" key={5} />
                        </StyledProgressBarWrapper>

                        <StyledProgressBarWrapper>
                            <StyledProgressBarTecnologia variant="dark" now={100} label="Node" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={2} />
                            <StyledProgressBar striped animated now={0} label="" key={3} />
                            <StyledProgressBar striped animated now={0} label="" key={4} />
                            <StyledProgressBar striped animated now={0} label="" key={5} />
                        </StyledProgressBarWrapper>

                        <StyledProgressBarWrapper>
                            <StyledProgressBarTecnologia variant="dark" now={100} label="Express" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={2} />
                            <StyledProgressBar striped animated now={0} label="" key={3} />
                            <StyledProgressBar striped animated now={0} label="" key={4} />
                            <StyledProgressBar striped animated now={0} label="" key={5} />
                        </StyledProgressBarWrapper>

                        <StyledProgressBarWrapper>
                            <StyledProgressBarTecnologia variant="dark" now={100} label="Java" key={1} />
                            <StyledProgressBar striped animated now={100} label="100%" key={1} />
                            <StyledProgressBar striped animated now={20} label="20%" key={2} />
                            <StyledProgressBar striped animated now={0} label="" key={3} />
                            <StyledProgressBar striped animated now={0} label="" key={4} />
                            <StyledProgressBar striped animated now={0} label="" key={5} />
                        </StyledProgressBarWrapper>

                        <StyledProgressBarWrapper>
                            <StyledProgressBarTecnologia variant="dark" now={100} label="C++" key={1} />
                            <StyledProgressBar striped animated now={50} label="40%" key={1} />
                            <StyledProgressBar striped animated now={0} label="" key={2} />
                            <StyledProgressBar striped animated now={0} label="" key={3} />
                            <StyledProgressBar striped animated now={0} label="" key={4} />
                            <StyledProgressBar striped animated now={0} label="" key={5} />
                        </StyledProgressBarWrapper>

                        <StyledProgressBarWrapper>
                            <StyledProgressBarTecnologia variant="dark" now={100} label="Docker" key={1} />
                            <StyledProgressBar striped animated now={40} label="40%" key={1} />
                            <StyledProgressBar striped animated now={0} label="" key={2} />
                            <StyledProgressBar striped animated now={0} label="" key={3} />
                            <StyledProgressBar striped animated now={0} label="" key={4} />
                            <StyledProgressBar striped animated now={0} label="" key={5} />
                        </StyledProgressBarWrapper>

                        <StyledProgressBarWrapper>
                            <StyledProgressBarTecnologia variant="dark" now={100} label="Aws" key={1} />
                            <StyledProgressBar striped animated now={30} label="30%" key={1} />
                            <StyledProgressBar striped animated now={0} label="" key={2} />
                            <StyledProgressBar striped animated now={0} label="" key={3} />
                            <StyledProgressBar striped animated now={0} label="" key={4} />
                            <StyledProgressBar striped animated now={0} label="" key={5} />
                        </StyledProgressBarWrapper>

                        <StyledProgressBarWrapper>
                            <StyledProgressBarTecnologia variant="dark" now={100} label="Php" key={1} />
                            <StyledProgressBar striped animated now={20} label="20%" key={1} />
                            <StyledProgressBar striped animated now={0} label="" key={2} />
                            <StyledProgressBar striped animated now={0} label="" key={3} />
                            <StyledProgressBar striped animated now={0} label="" key={4} />
                            <StyledProgressBar striped animated now={0} label="" key={5} />
                        </StyledProgressBarWrapper>

                    </ProgressBars>
                </div>
            </div>
        </>
    );
}
