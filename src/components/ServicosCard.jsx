import styled from "./ServicosCard.module.css"

function ServicosCard(props) {
    return(
        <div className={"col-md-4 col-sm-6 "}>
            <div className={styled.Servicos}>
                <p className={styled.titulo}>{props.titulo}</p>
                <p className={styled.subtitulo}>{props.subtitulo}</p>
            </div>
        </div>
    )
}
export default ServicosCard
