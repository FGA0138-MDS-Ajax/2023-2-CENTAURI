import { useState } from 'react'
import styles from "./Home.module.css"
import botaoPesquisa from '../img/botaoPesquisa.svg'
import logo from "../img/logo.svg"
import login from "../img/Login.svg";
import botaoPlus from "../img/Plus Button.svg"
import onda from "../img/Rectangle9.svg"
import menina from "../img/meninaNotebook.svg"
import fundo from "../img/fundoMenina.svg"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';
const { MeiliSearch } = require('meilisearch')


function Home(){
    const [searchResults, setSearchResults] = useState([]);
    const { isLoggedIn, logout, user, setUser } = useAuth(); 
    const client = new MeiliSearch({
      host: 'http://127.0.0.1:7700',
      apiKey: 'masterKey',
    })
    const navigate = useNavigate();

    const searchDocuments = async (e)=> {
        client
            .index("documents")
            .search(e.target.value)
            .then((results) => {
                setSearchResults(results.hits);
        });
    };
    const handleLogout = () => {
        logout();
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('user');
    };

      
    return(
        <div className={styles.home_container}>
            
        {!isLoggedIn && (    
            <div className={styles.button_login_container}>
                <div>
                <button className={styles.botaoLogin} onClick={() => navigate("/login")}>LOGIN</button>
                </div>
            </div>
        )}        
        {isLoggedIn && (
          <div>
            <button className={styles.botaologout} onClick={handleLogout}>Logout</button>
            <Link to="/usuario">
              <div>
                <img src={login} className={styles.login} alt="login"></img>
                <p className={styles.profile}>{user?.name}</p>
              </div>
            </Link>
          </div>
        )}
            <div className={styles.body}>
                <div className={styles.logo_container}>
                    <img src = {logo} className={styles.logo} alt="logo"></img>

                </div>
                <div>
                    <form className={styles.search_bar}>
                        <input type="text" placeholder="Faça sua pesquisa"/>
                        <button type="submit" className={styles.botaoPesquisa}><img src={botaoPesquisa} alt="botão de pesquisar"></img></button>
                    </form>
                </div>
                <div className = {styles.descricao_container}>
                    <div>
                        <h1>Confira mais sobre o Projeto</h1>
                    </div>
                    <div>
                        <button type="submit"><img src={botaoPlus} alt="botão de conferir mais"></img></button>               
                    </div>
                </div>
                <div className={styles.sobreUnBusca_container}>
                        <div>
                                <h1 className={styles.titulo}>Sobre o UnBuscas</h1>
                                <p className={styles.texto}>Um recurso de pesquisa rápida<br />
                                    feita por estudantes da UnB<br />
                                    para os próprios estudantes da UnB</p>
                                <p className={styles.texto2}>A plataforma web UnBuscas tem como seu principal<br /> 
                                    objetivo buscar documentos da UnB de forma rápida e eficiente</p>
                        </div>
                        <div className={styles.menina_container}>
                            <img src = {menina} className={styles.menina} alt="menina"></img>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;