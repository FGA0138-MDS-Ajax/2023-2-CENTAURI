import styles from "./Usuario.module.css"
import topo from "../img/topoPagina.svg"
import retangulo from "../img/RetanguloUsuario.svg"
import retanguloBranco from "../img/RetanguloUsuarioB.svg"
import menina from "../img/meninaUsuario.svg"
import estrela from "../img/estrela.svg"
import onda from "../img/Rectangle 23.svg"
import botaoPesquisa from '../img/botaoPesquisa.svg'

function Usuario(){
    return(
        <div>
            <h1 className={styles.sair}>Sair da conta</h1>
        <div>
        <form action="" className={styles.search_bar}>
            <input type="text" placeholder="Faça sua pesquisa"/>
            <button type="submit" className={styles.botaoPesquisa}><img src={botaoPesquisa}></img></button>
        </form>
        <img src = {topo} className={styles.imagem}></img>

        <img src = {retangulo} className={styles.retangulo}></img>
        <h1 className={styles.ola}>Olá, Username</h1>
        <img src = {retanguloBranco} className={styles.retanguloBranco}></img>
        <p className={styles.nome}>Nome:</p>
        <p className={styles.email}>Email:</p>
        <img src = {menina} className={styles.menina}></img>
        <img src = {onda} className={styles.onda}></img>
        <img src = {estrela} className = {styles.estrela}></img>

        </div>
        </div>

    )
}

export default Usuario;