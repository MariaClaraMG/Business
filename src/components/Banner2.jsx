import styled from "./Banner2.module.css"

function Banner2() {
    return (
        <div id="Banner" className="row banner">
            <div className="col" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0}}>
                <img style={{width: "100%"}} className={"banner" + styled.Tamanho} src='/img/banner.png'/>
            </div>
        </div>
    )
}
export default Banner2