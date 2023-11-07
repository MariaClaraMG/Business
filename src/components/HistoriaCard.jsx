import styled from "./HistoriaCard.module.css"

function HistoriaCard(props) {
    return(
        <div className={"col-md-12 col-sm-12 "}>
            <div className={styled.Historia}>
                <img style={{width: "100px", height:"100px"}} src={props.img}/>
                <div>
                    <p className={styled.titulo}>{props.titulo}</p>
                    <p className={styled.subtitulo}>{props.subtitulo}</p>
                </div>

            </div>

        </div>
    )
}
export default HistoriaCard
