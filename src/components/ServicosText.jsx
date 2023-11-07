import styled from "./ServicosText.module.css"
import CardTextos from "./ServicosCard";

function ServicosText() {
    return(
        <div className={"row gx-5 gy-5 " + styled.Servicos}>
            <div className="col-md-12">
                <h2 className={styled.Titulo} >Plano de Crescimento Estruturado e Efetivo</h2>
                <h5 className={styled.Subtitulo} >Transforme sua empresa da análise à execução, descubra os passos fundamentais para organizar, fortalecer e expandir o seu negócio de maneira eficaz.</h5>
            </div>

            <CardTextos
                titulo="Diagnóstico"
                subtitulo="Vamos mergulhar no seu negócio, detectando os desafios e oportunidades que clamam por ação. Prepare-se para uma verdadeira autópsia comercial!">
            </CardTextos>


            <CardTextos
                titulo="Mapeando processos e pessoas"
                subtitulo="Sua empresa deve operar como uma orquestra bem afinada, e você é o maestro. Vamos ajudá-lo a conectar as melhores pessoas aos processos certos!">
            </CardTextos>


            <CardTextos
                titulo="Criação do Roteiro Estratégico"
                subtitulo="Navegar é preciso. Para onde sua empresa está indo? Aqui, traçamos a rota para a realização dos seus sonhos empresariais. Vamos além do horizonte!">
            </CardTextos>


            <CardTextos
                titulo="Seleção de Metodologias"
                subtitulo="Esse é o grande vilão que talvez tenha prejudicado sua empresa: a falta de um guia confiável. Mas, fique tranquilo! Estamos aqui para direcioná-lo às melhores práticas e ferramentas.">
            </CardTextos>


            <CardTextos
                titulo="Implementação de OKR"
                subtitulo="Definiremos juntos os Objetivos e Resultados-Chave (OKR) que darão vida ao nosso planejamento, sempre em sintonia com a sua visão de negócio. Que tal?">
            </CardTextos>


            <CardTextos
                titulo="Execução do plano de ação"
                subtitulo="Você é um líder, não um faz-tudo. Estaremos ao seu lado para colocar nosso plano em prática, monitorar o progresso e garantir o cumprimento do roteiro estratégico. Sua empresa nas mãos certas!">
            </CardTextos>

        </div>
    )
}
export default ServicosText

