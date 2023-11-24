import { Descricao, Titulo } from "./styled";

export default function GestorCobrancas() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Titulo>Sistema para gerir cobranças</Titulo>
                    <Descricao>
                        Na primeira metade do ano em 2023, foi iniciado o desáfio do semestre com a empresa parceira sendo a Pro4Tech, que veio com um problema inusitado para ser resolvido, relacionado a gestão de cobranças, que precisava de uma solução contendo cadastro de clientes, registro de cobranças das parcelas a receber e dos pagamentos efetuados, além da geração de relatórios de cobrança com diferentes tipos de busca por data e situação das parcelas.
                        <br/>
                        Tecnologias <br/>
                        Documentação com mapeamento das regras de negócio do cliente <br/>
                        Java <br/>
                        JavaScript <br/>
                        TypeScript <br/>
                        MySql <br/>
                        Minhas contribuições <br/>
                        Ao longo das 4 sprint, fiquei responsável por fazer o front end da página onde seriam realizado o cadastro das cobranças, utilizando a biblioteca React e Primereact, fui a criando até ter um desafio que nunca havia realizado antes, relacionado a como valores monetários, tinham que começar da direita para a esquerda, além de ter pontuações e virgulas. Inicialmente, fiz o codigo manualmente com manipulação de texto no JavaScript, o que se mostrou muito mais difícil e complicado que em python, mas no fim havia funcionado, ou era o que eu imaginava até descobri-se um bug visual, onde acima de 11 digitos o valor ia substituindo o 9 digito, então se eu tivesse 333,222,111.00 e colocasse mais 4, ao inves de ficar 4,333,222,111.00 acabaria como 334,222,111.00 e em seguida ia substituindo os outros valores até voltar no mesmo lugar. Para resolver o problema, fui atrás e descobri uma biblioteca que tornava valores monetários, dessa forma conseguindo resolver o problemas. Também criei uma verificação por cpf, onde o cadastro da venda ficava bloqueado, até que se colocasse um cpf de um cliente cadastrado no sistema, trazendo suas informações na tela e liberando o cadastro. Também criei uma tabela de listagem, que trazia os clientes já cadastrados na página de cadastro de cliente, criando as opções de edição e deletar, onde na edição as informações atuais eram exibidas no placeholder, e apenas ocorria o update de campos com novas informações, mantendo salvo as mesmas anteriores de campos vazios. Criei a página de login, que mantinha a senha escondida podendo a tornar visível, e trabalhe junto com meu companheiro, para fazer o bloqueio das rotas no frontend, permitindo apenas com o token assim como usar os métodos do backend. Após 2 sprint mexendo bastante no no frontend, decidi ir para nosso backend em Java, para aprender e pegar experiencia na linguagem, ficando responsável pelo CRUD do funcionário, criação de métodos específicos necessários, seguindo as normas do HATEOS para manter o projeto como RESTful, e fiz adaptações que após pegar experiencia, se tornaram mais fáceis de realizar para problemas do frontend, do que mudar o código do front end em si.
                        Por fim, arrumei bugs no sistema em geral, como alterações na barra de pesquisa, adicionar alertas customizadas faltando, concertar pequenos erros de concatenação que salvavam errado no banco, lógica do login conectado ao backend, para mandar o email e senha liberando login com o token sendo usado, e código que fazia logout automático quando o token expirava.
                        <br/>
                        Hard-skills <br/>
                        TypeScript <br/>
                        JavaScript <br/>
                        Java <br/>
                        React <br/>
                        Primereact <br/>
                        Axios <br/>
                        Soft-skills <br/>
                        - Trabalhar usando submodulos do github, mantendo assim o codigo separado em micro serviços, exigindo organização. <br/>
                        - Aprendizado em relação a ter que conversar e planejar com meus colegas, sobre a arquitetura do projeto e quais soluções usar. <br/>
                        - Planejamento de tempo para realizar minhas task em tempo hábil, sem levar para os meus finais de semana. <br/>
                        - Uso de ferramenta Jira, usando o sistema de task a fazer, Em andamento e Concluídas além de seguir um gráfico de burndown, baseado em itens concluídos ao invés de tempo. <br/>
                    </Descricao>
                </div>
            </div>
        </div>
    )
}