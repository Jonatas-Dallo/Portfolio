import { Descricao, Titulo } from "./styled";

export default function ServiceDesk() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Titulo>Service Desk</Titulo>
                    <Descricao>Em modo geral, uma Central de Serviços é uma ferramenta que presta assessoria para solucionar problemas integrado no ambiente de tecnologia da informação. Este projeto será realizado baseado na metodologia ágil SCRUM, que foca no desenvolvimento da proatividade, autonomia e uma melhora da produtividade do time como um todo.</Descricao>
                </div>
            </div>
        </div>
    )
}