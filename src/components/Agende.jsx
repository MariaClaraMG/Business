import styled from "./Agende.module.css"

function Agende() {
    return(
        <div className={"row gx-5 gy-5 " + styled.Agende}>
            <h1 className={styled.Titulo} >Grandes decisões geram grandes resultados.</h1>
            <h5 className={styled.Subtitulo} >Não tenha medo de decidir e ver sua empresa crescer.</h5>
            <button className={styled.botao}>Quero decolar minha empresa</button>
        </div>
    )
}
export default Agende

