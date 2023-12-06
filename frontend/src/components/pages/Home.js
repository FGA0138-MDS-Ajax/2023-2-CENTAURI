import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { MeiliSearch } from 'meilisearch';

import styles from './Home.module.css';

import botaoPesquisa from '../img/botaoPesquisa.svg';
import logo from '../img/logo.svg';
import login from '../img/Login.svg'
import menina from '../img/meninaNotebook.svg';
import bolinha1 from '../img/Bolinha 1.svg';
import bolinha2 from '../img/Bolinha 2.svg';
import bolinha3 from '../img/Bolinha3.svg';

import Plus from '../Plus.js';

function Home(){
    const [searchResults, setSearchResults] = useState([]);
    const { isLoggedIn, logout, user, setUser } = useAuth(); 
    const client = new MeiliSearch({
      host: 'http://127.0.0.1:7700',
      apiKey: 'masterKey',
    })
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
      
        // Obtém o valor da barra de pesquisa corretamente
        const searchQuery = e.target.querySelector('input[type="text"]').value || '';
      
        // Navega para a página de pesquisa com o parâmetro de consulta
        navigate(`/pesquisa?query=${encodeURIComponent(searchQuery)}`);
    };

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
    };

    return(
        <div className={styles.home_container}>
            {!isLoggedIn && (
            <div className={styles.button_login_container}>
                <div>
                    <button  className = {styles.botaoLogin} onClick={() => navigate('/login')}>LOGIN</button>
                </div>
            </div> )}    
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
                    <form className={styles.search_bar}  onSubmit={handleSearchSubmit}>
                        <input type="text" placeholder="Faça sua pesquisa"/>
                        <button type="submit" className={styles.botaoPesquisa}><img src={botaoPesquisa} alt="botão de pesquisar"></img></button>
                    </form>
                </div>
                <div className = {styles.descricao_container}>
                    <div>
                        <h1>Confira mais sobre o Projeto</h1>
                    </div>
                    <div className = {styles.plus}>
                        <Plus/>               
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
                            <img src = {menina} className={styles.menina} alt="menina"  id="menina"></img>
                        </div>
                    
                </div>
                <div className={styles.facilidades_container}>
                <div className={styles.facilidades_titulo}>
                <h1>Nossas Facilidades</h1> 
                </div>
                <div className={styles.bolinhas}>
                    <img src={bolinha1}></img>
                    <img src={bolinha2}></img>
                    <img src={bolinha3}></img>
                </div>

                <div className={styles.bolinhas}>
                    <p className={styles.titulo3}>Centralização de documentos oficiais</p>
                    <p className={styles.titulo3}>Tenha seu próprio perfil</p>
                    <p className={styles.titulo3}>Busca rápida e eficiente</p>
                </div>

                <div className={styles.bolinhas}>
                    <p className={styles.texto3}>Com uma interface intuitiva e fácil de usar, nosso website é perfeito para você encontrar documentos oficiais da UnB em um só lugar.</p>
                    <p className={styles.texto3}>Você pode salvar os seus documentos preferidos em seu próprio perfil e visualizá-los quando quiser.</p>
                    <p className={styles.texto3}>Não perca mais tempo com buscas demoradas e ineficazes. Use o UnBuscas agora e experimente a eficiência e rapidez que você merece.</p>
                </div>
                
                </div>
            </div>
        </div>
    )
}

export default Home