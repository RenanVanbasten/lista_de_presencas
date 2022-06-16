import './styles.css'

const ig = new URL("./assets/insta.png", import.meta.url);
const wa = new URL("./assets/whatsapp.png", import.meta.url);
const gh = new URL("./assets/github.png", import.meta.url);
const li = new URL("./assets/linkedin.png", import.meta.url);

export function Footer(){
    return(
        
        <footer>
        <p>Desenvolvido por Renan Vanbasten</p>

        <div className="rodape">
            <nav>

                <a href={"https://web.whatsapp.com/send?phone=5581996843923"} target="_blank"> <img src={wa} alt="" /></a>
                
                <a href="https://www.instagram.com/renanvanbasten/" target="_blank"> <img src={ig} alt="" /></a>

                <a href="https://github.com/RenanVanbasten" 
                target="_blank"> <img src={gh} alt="" /></a>

                <a href="https://www.linkedin.com/in/renan-vanbasten-bb899817b/" target="_blank"> <img src={li} alt="" /></a>
            </nav>
        </div>

    </footer>

    )
}

