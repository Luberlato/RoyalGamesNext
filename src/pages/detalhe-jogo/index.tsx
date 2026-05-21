import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import style from "./detalhe.module.css"

const DetalheProduto = () => {
    return(
        <>
            <Header/>
            <section id={style.bannerJogo}>
                <h1>Detalhe de Jogo</h1>
            </section>
            <Footer/>

        </>
    )
}
export default DetalheProduto;