import styled from './Footer.module.css'
function Footer(){
    return(
        <div className={'row ' + styled.fundo}>
            <div className={'col-md-3 col-sm-4 ' + styled.centralizar}>
                <img className={styled.logo} src={'/img/logoproj.png'}/>
            </div>

            <div className={'col-md-3 col-sm-4'}>
                <p className={styled.tituloFooter} >Atendimento</p>
                <p className={styled.pFooter} >Segunda a sexta, das 8hs as 17hs</p>
            </div>

            <div className={'col-md-3 col-sm-4'}>
                <p className={styled.tituloFooter} >Contato</p>
                <p className={styled.pFooter} >(18) 99196-8778</p>
            </div>

            <div className={'col-md-3 col-sm-4 ' + styled.centralizar}>
                <p className={styled.tituloFooter} >Redes sociais</p>
                <img className={styled.iconsImg} src={'/img/instagram.svg'}/>
                <img className={styled.iconsImg} src={'/img/facebook.svg'}/>
                <img className={styled.iconsImg} src={'/img/whatsapp.svg'}/>
            </div>
        </div>
    )
}

export default Footer