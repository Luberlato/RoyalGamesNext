import style from "./footer.module.css";
const Footer = () => {
    return (
        <>
            <footer id={style.footer}>
                <div>
                    <img src="../imgs/LogoHeader.svg" alt="" />
                </div>
                <div id={style.contatos}>
                    <p>(11)99475-3057</p>
                    <p>luigi.berlato06@gmail.com</p>
                    <p>@royalgames</p>
                </div>
            </footer>
        </>
    )
}

export default Footer