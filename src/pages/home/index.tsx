import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import style from "./home.module.css"

const Home = () => {
    return (
        <>
            <Header />
            <section id={style.banner}>
                
                <div id={style.textoBanner}>
                    <h1>Conheça nossos jogos</h1>
                    <p>Navegue por títulos de todas as gerações, descubra plataformas,
                        gêneros e detalhes completos antes de escolher sua próxima aventura.
                        Seu próximo jogo favorito começa aqui.</p>
                </div>
                <img src="../imgs/ImagemBanner.svg" alt="" />
            </section>

            <section id={style.corpo}>
                <h2>Catalogo de jogos</h2>
                <label htmlFor="pesquisa"></label>
            </section>
            <Footer />
        </>
    )
}
export default Home