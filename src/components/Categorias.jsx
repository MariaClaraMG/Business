import styled from "./Categorias.module.css"
import CardTextos from "./CategoriasCard";

function Categorias() {
    return(
        <div className={"row gx-5 gy-5 " + styled.Categorias}>
            <CardTextos
                titulo="Melhores profissionais">
            </CardTextos>

            <CardTextos
                titulo="Melhores técnicas">
            </CardTextos>

            <CardTextos
                titulo="Experiência">
            </CardTextos>

            <CardTextos
                titulo="Sua empresa voando alto">
            </CardTextos>

        </div>
    )
}
export default Categorias

