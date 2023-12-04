import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Usuario.module.css";
import retanguloBranco from "../img/RetanguloUsuarioB.svg";
import menina from "../img/meninaUsuario.svg";
import estrela from "../img/estrela.svg";
import onda from "../img/Rectangle23.svg";
import botaoPesquisa from '../img/botaoPesquisa.svg';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Usuario() {
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();
  const [favoriteDocuments, setFavoriteDocuments] = useState([]);
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  console.log(user);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/error');
    }
  }, [isLoggedIn, navigate]);

  function handleInputChange(event) {
    users[event.target.decode.name] = event.target.value;
    setUsers(users);
  }

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
      console.log(res);
    } catch (error) {
      console.log("Erro para pegar usuarios:",error);
      return error;
    }
  };

  const getFavoriteDocuments = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/usuario/favoritos/${user.id}`);
      setFavoriteDocuments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
    if (isLoggedIn) {
      getFavoriteDocuments();
    }
  }, [isLoggedIn, user, getUsers, getFavoriteDocuments]);

  const handleLogout = () => {
    logout();
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('user');
    navigate('/pesquisa');
  };

  return (
    <body className="before-login-body">
      {isLoggedIn ? (
        <body className={styles.userPage} alt="logged-body">
          <div className={styles.containerSuperior} alt="superior-container">
            <button className={styles.sair} onClick={handleLogout}>Sair da conta</button>
            {/* <form action="" className={styles.search_bar}>
                <input type="text" placeholder="Faça sua pesquisa" />
                <button type="submit" className={styles.botaoPesquisa}><img src={botaoPesquisa} alt="Ícone de pesquisa" /></button>
            </form> */}
          </div>
          <div className={styles.containerPrincipal} alt="main-container">
            <div alt="user-info-container">
              <div className={styles.userPanel} alt="user-panel">
                <h1 className={styles.ola}>Olá, {user?.name}</h1>
              </div>
              
              <img src={retanguloBranco} className={styles.retanguloBranco} alt="Retângulo branco"></img>
                <p className={styles.nome}>Nome: {user?.name}</p>
                <p className={styles.email}>Email: {user?.email}</p>
            </div>
            <img src={menina} className={styles.menina} alt="Desenho de uma menina"></img>
            <img src={onda} className={styles.onda} alt="Fundo com uma onda"></img>
            <div className={styles.onda}>
              <img src={estrela} className={styles.estrela} alt="Estrela para favoritar itens"></img>
            </div>
          </div>
        </body>
      ) : null}
    </body>
  );
}

export default Usuario;
