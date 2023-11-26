import React, { useState, useEffect } from "react";
import axios from "axios";
import decode from "./Login.js";
import styles from "./Usuario.module.css";
import topo from "../img/topoPagina.svg";
import retangulo from "../img/RetanguloUsuario.svg";
import retanguloBranco from "../img/RetanguloUsuarioB.svg";
import menina from "../img/meninaUsuario.svg";
import estrela from "../img/estrela.svg";
import onda from "../img/Rectangle23.svg";
import botaoPesquisa from '../img/botaoPesquisa.svg';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';


function Usuario() {
    const { isLoggedIn, user } = useAuth();
    const navigate = useNavigate();
  

    useEffect(() => {
      if (!isLoggedIn) {
        navigate('/error');
      }
    }, [isLoggedIn, navigate]);
  
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);
  
    function handleInputChange(event) {
      users[event.target.decode.name] = event.target.value;
      setUsers(users);
    }
  
    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8800");
        setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
        console.log(res);
        ;
      } catch (error) {
        console.log(error);
        return error;
      }
    };
  
    useEffect(() => {
      getUsers();
    }, [setUsers]);
  
    return (
      <div>
        {isLoggedIn ? (
          <div>
            <button className={styles.sair}>Sair da conta</button>
            <div>
              <form action="" className={styles.search_bar}>
                <input type="text" placeholder="Faça sua pesquisa" />
                <button type="submit" className={styles.botaoPesquisa}><img src={botaoPesquisa}></img></button>
              </form>
              <img src={topo} className={styles.imagem}></img>
              <img src={retangulo} className={styles.retangulo}></img>
              <h1 className={styles.ola}>Olá, {user?.name}</h1>
              <img src={retanguloBranco} className={styles.retanguloBranco}></img>
              <p className={styles.nome}>Nome: {user?.name}</p>
              <p className={styles.email}>Email: {user?.email}</p>
              <img src={menina} className={styles.menina}></img>
              <img src={onda} className={styles.onda}></img>
              <div className={styles.onda}><img src={estrela} className={styles.estrela}></img>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
  
  export default Usuario;
  