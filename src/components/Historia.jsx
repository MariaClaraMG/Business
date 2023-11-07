import styled from "./Historia.module.css"
import CardTextos from "./HistoriaCard";
import HistoriaCard from "./HistoriaCard";

function Historia() {
    return(
        <div className={"row gx-5 gy-5 " + styled.Historia}>
            <div className="col-md-12">
                <h2 className={styled.Titulo} >Histórias de sucesso de clientes reais da Berrytech</h2>
                <h5 className={styled.Subtitulo} >Junte-se a nós e você vai estar em ótima companhia. Veja e entenda como empresas do Brasil inteiro estão elevando o nível do seu jogo com a Berrytech.</h5>
            </div>

            <HistoriaCard img="/img/chippers.png"
                          titulo="Chippers"
                          subtitulo="Parceria entre Chippers e Berrytech resultou em redução de 24% nas despesas de frete, aumento na satisfação dos clientes e melhores condições de pagamento com fornecedores.">
                >
            </HistoriaCard>

            <HistoriaCard img="/img/novitta_estetica.png"
                          titulo="Novittá Estética Especializada"
                          subtitulo="Parceria entre Novittá Estética Especializada e Berrytech resultou em aumento expressivo de vendas e otimização de processos comerciais.">
                >
            </HistoriaCard>

            <HistoriaCard img="/img/guta_batata_suica.png"
                          titulo="Batata Suíça em Casa CWB"
                          subtitulo="A consultoria da Berrytech ajudou a Batata Suíça em Casa CWB a sair do vermelho, quintuplicar suas vendas e criar um capital de giro de segurança, garantindo maior estabilidade financeira.">
                >
            </HistoriaCard>

            <HistoriaCard img="/img/sabor-bueno.jpeg"
                          titulo="Restaurante Sabor Bueno"
                          subtitulo="O Restaurante Sabor Bueno superou desafios financeiros e comerciais com a ajuda da consultoria, aumentando suas vendas e aprimorando seu fluxo de caixa. A colaboração entre as equipes foi fundamental para o sucesso do estabelecimento no mercado gastronômico.">
                >
            </HistoriaCard>

            <HistoriaCard img="/img/supermercado_cotia.png"
                          titulo="Supermercado Cotia"
                          subtitulo="Consultoria da Berrytech ajudou Supermercado Cotia a aumentar margem em 5% na temporada e 3% fora, com aumento de 64% nas vendas e redução de custos.">
                >
            </HistoriaCard>
        </div>
    )
}
export default Historia

