import { Centralizar, Descricao, Imagem } from "./styled";
import Mel from "../../assets/img/Mel.png";

export default function SobreMimComponente() {
    return (
        <div className="container">
            <div className="row">
                <Centralizar>
                    <Descricao>
                    Programador em formação aqui, como vai? 😄 
                    <br/>
                    
                    <br/>
                    A cada dia, venho me desafiando a aprender e me tornar um profissional de qualidade. Atualmente, estou cursando o 4º semestre de Desenvolvimento de Softwares Multiplataforma na Fatec Jessen Vidal. Estou em busca de uma oportunidade para colocar em prática tudo que venho aprendendo e me desenvolver profissionalmente.
                    <br/>

                    <br/>
                    Nas horas livres, gosto de jogar, conversar com meus amigos e participar de sessões de RPG de mesa! São muito divertidas, e até mesmo chego a mestrar algumas sessões para meus amigos. Também gosto de ler bastante histórias e novels, tendo criado o hábito de leitura a ponto de preferir ler do que assistir séries na maior parte do tempo. Bem, o que posso fazer? Capítulos de história saem rápido! Não dá para comparar com séries que levam semanas, meses ou até anos.
                    <br/>

                    <br/>
                    Moro com meus pais e tenho uma cachorrinha muito fofa chamada Mel. Ela é um doce e muito carinhosa, mas tem medo até da própria sombra. Acredite em mim, ela é muito medrosa! Se você fizer um barulho que seja sem ela estar vendo, ela já dá um latido de susto! Mesmo assim, ela é super carinhosa e manhosa, chorando por atenção quando chego da faculdade para almoçar e agradecendo pelo carinho com lambidinhas.
                    </Descricao>
                    <Imagem src={Mel} alt="" />

                    <Descricao>
                    Fiz o ensino médio em São José dos Campos, em uma das melhores escolas da época chamada Francisco Pereira da Silva. A escola era integral, e eu precisava pegar meia hora de ônibus para ir e voltar. Mesmo assim, no primeiro semestre, tive menos de 5 faltas, e no segundo, muito poucas também. Um dos motivos era o sacrifício dos meus pais para me fazer entrar naquela escola pública. Para se matricular, era feita uma fila, e em ordem de chegada, as pessoas iam se matriculando até atingir a cota. Como eram, no máximo, 40 alunos, existia a chance de eu não conseguir entrar. E se eu te disser que minha mãe entrou em contato com uma moradora da rua da escola e pediu para avisar quando uma fila começasse a se formar? Inacreditável, certo? Mas o pior é que deu certo. No entanto, a fila começou no dia anterior às matrículas! Minha mãe teve que ir e passar o dia lá. Depois, meu pai virou a noite, e na manhã seguinte, minha mãe voltou no lugar da fila para finalmente conseguir me matricular na escola. Se não fosse por esse esforço dos meus pais, nunca teríamos conseguido, já que a fila virou pelo quarteirão duas vezes, e quase não entrei mesmo assim. Para não deixar esse esforço em vão, e porque gostava do ambiente da escola, fui um dos alunos mais presentes da turma, indo todos os dias, fazendo todas as atividades e conseguindo terminar meu ensino médio, embora meu terceiro ano tenha sido complicado devido a um certo vírus. Queres saber a experiência de alguém que teve o final do ensino médio e a fase de ir atrás de emprego ou continuar a estudar em plena pandemia?                    </Descricao>
                </Centralizar>
            </div>
        </div>
    );
}