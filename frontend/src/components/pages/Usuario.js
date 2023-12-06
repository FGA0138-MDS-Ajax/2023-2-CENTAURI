// Import necessary libraries and components
import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./Usuario.module.css";

import menina from "../img/meninaUsuario.svg";
import estrela from "../img/estrela.svg";
import logo from "../img/logo.svg";

import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Usuario() {
  // Destructure authentication information from useAuth
  const [filteredResults, setFilteredResults] = useState([]);
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  const paginainicial = () => {
    navigate("/");
  };

  // State to hold the list of favorite documents
  const [favoriteDocuments, setFavoriteDocuments] = useState([]);
  const [userEmail, setUserEmail] = useState();
  // Effect to fetch favorite documents when component mounts
  useEffect(() => {
    if (isLoggedIn) {
      getFavoriteDocuments();
    }
  }, [isLoggedIn, user]);

  // Function to fetch the list of favorite documents
  async function getFavoriteDocuments (userEmail){
    setUserEmail({
      userEmail: user?.email
    })
    console.log("useremail-->>>>", userEmail)

    await axios.get('http://localhost:8800/list_user_favorites', {
        userEmail: userEmail 
      }, {headers: {
        'Content-Type': 'application/json'
        }}).then(res => {
          console.log('Favorite Documents:', res.data.documents);
        }).catch (error =>{
          if(error.response.status === 400 || 500){
            console.error('Error fetching favorite documents:', error);
            console.error(error.config.data);

          }

        }) 
  };
  // Function to handle user logout
  const handleLogout = () => {
    logout();
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('user');
    navigate('/pesquisa');
  };

  // JSX structure of the Usuario component
  return (
    <body className="before-login-body">
      {isLoggedIn ? (
        <body className={styles.userPage} alt="logged-body">

          <div className={styles.containerSuperior} alt="superior-container">
            <img className={styles.logo} src={logo} onClick={paginainicial} />
            <button className={styles.sair} onClick={handleLogout}>Sair da conta</button>

          </div>

          <div className={styles.containerPrincipal} alt="main-container">

            <div className={styles.userContainer} alt="user-info-container">

              <div className={styles.userPanel} alt="user-panel">

                <h1>Olá, confira seus dados:</h1>
                
                <div className={styles.userCard} alt="user-card">

                  <p>Nome: {user?.name}</p>
                  <p>Email: {user?.email}</p>

                </div>

              </div>

              <img src={menina} className={styles.menina} alt="Desenho de uma menina"></img>

            </div>

            <div className={styles.favoritesContainer} alt="favorites-container">
              
              <img src={estrela} className={styles.estrela} alt="Estrela"></img>

              <h1> Favoritos </h1>
              
              <div class="input-box">{filteredResults.map((resource) =>(
                <div key={resource.id} className={styles.documentContainer}>

                </div>
              ))}

                <label for="teste"> Pesquisa_titulo_owfgG</label>

              </div>

            </div>

          </div>

        </body>

      ) : null}
    </body>
  );
}

export default Usuario;
