import Link from "next/link";
import style from "./lista_produto.module.css"
const ListaProduto = () => {
    return (
        <>
            <section id={style.cardProduto}>
                <img src="../imgs/ImagemMinecraft.svg" alt="" />
                <h2 id={style.titulo}>Minecraft</h2>
                <button id={style.botao}><Link href="/detalhe-jogo">Detalhes</Link></button>
            </section>
        </>
    )
}
export default ListaProduto;