import style from "./header.module.css";
const Header = () => {
    return (
        <>
            <header id={style.container}>
                <div>
                    <img src="../imgs/LogoHeader.svg" alt="" />
                </div>
                <div id={style.link}>
                    <a href="#catalogo">Catalogo</a>
                    <a href="/login" id={style.botaoLogin}>Login</a>
                </div>
            </header>
        </>
    )
}
export default Header;