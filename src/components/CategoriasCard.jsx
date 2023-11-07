import styled from "./CategoriasCard.module.css"

function CategoriasCard(props) {
    return(
        <div className={"col-md-3 col-sm-6 " + styled.Categorias}>
            <img className={styled.check} src="/img/check.svg" />
            <p className={styled.titulo}>{props.titulo}</p>
        </div>
    )
}
export default CategoriasCard
