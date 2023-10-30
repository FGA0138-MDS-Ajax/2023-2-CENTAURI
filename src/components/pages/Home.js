import { useState } from 'react'
import styles from "./Home.module.css"
import botaoPesquisa from '../img/botaoPesquisa.svg'
import logo from "../img/logo.svg"
import botaoPlus from "../img/Plus Button.svg"
import onda from "../img/Rectangle9.svg"
import menina from "../img/meninaNotebook.svg"
import fundo from "../img/fundoMenina.svg"
const { MeiliSearch } = require('meilisearch')


function Home(){
    const [searchResults, setSearchResults] = useState([]);
    const client = new MeiliSearch({
      host: 'http://127.0.0.1:7700',
      apiKey: 'masterKey',
    })

    const searchDocuments = async (e)=> {
        client
            .index("documents")
            .search(e.target.value)
            .then((results) => {
                setSearchResults(results.hits);
        });
    };
    return(
        <div className={styles.home_container}>
            <button className = {styles.botaoLogin}>LOGIN</button>
            <img src = {logo} className={styles.logo} alt="logo"></img>
            {/* <form className={styles.search_bar}>
                <input type="text" placeholder="Faça sua pesquisa"/>
                <button type="submit" className={styles.botaoPesquisa}><img src={botaoPesquisa} alt="botão de pesquisar"></img></button>
            </form> */}
            <div className = {styles.h}>
                <h1>Confira mais sobre o Projeto</h1>
                <button type="submit"><img src={botaoPlus} alt="botão de conferir mais"></img></button>               
            </div>
            <div>  
                <img src={onda} className={styles.onda} alt="onda"></img>
                <img src={fundo} className={styles.fundo} alt="fundo da página inicial"></img>
                <img src = {menina} className={styles.menina} alt="menina"></img>
                <h1 className={styles.titulo}>Sobre o UnBuscas</h1>
                <p className={styles.texto}>Um recurso de pesquisa rápida<br />
                    feita por estudantes da UnB<br />
                    para os próprios estudantes da UnB</p>
                <p className={styles.texto2}>A plataforma web UnBuscas tem como seu principal<br /> 
                    objetivo buscar documentos da UnB de forma rápida e eficiente</p>
            </div>
        </div>
    )
}

export default Home;