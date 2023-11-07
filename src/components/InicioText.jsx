import styled from "./InicioText.module.css"

function InicioText() {
    return (
        <div id="InicioText" className={styled.InicioText} >
            <div>
                <img className={styled.Inicio} src="/img/Inicio.png"/>
            </div>

            <div>
                <h2 className={styled.Titulo} >Não planejar é planejar o fracasso:</h2>
                <h5 className={styled.Subtitulo} >Nós criamos junto com você um planejamento estratégico, definimos os processos e pessoas ideais para organizar e expandir seu negócio sem que você empreendedor fique preso no operacional.</h5>
            </div>



        </div>
    )
}
export default InicioText