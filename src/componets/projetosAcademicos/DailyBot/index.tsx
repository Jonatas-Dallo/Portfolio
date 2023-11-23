import { Descricao, Titulo } from "./styled";

export default function DailyBot() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Titulo>Daily Bot</Titulo>
                    <Descricao>
                        Projeto com a  proposta de desenvolver Crawler que consiga buscar, ler o arquivo e identificar o conteúdo relacionado aos Professores Associados, realizar os cruzamentos necessários com as bases de dados de associados, que suportarão está solução, gravar todos os processos publicados relacionados aos associados, e emitir relatório diário para que a equipe consiga disparar os e-mails para os professores citados no Diário Oficial. Caso consigam também realizar a automação do disparo destes e-mails seria uma sofisticação para a solução.
                    </Descricao>
                </div>
            </div>
        </div>
    )
}