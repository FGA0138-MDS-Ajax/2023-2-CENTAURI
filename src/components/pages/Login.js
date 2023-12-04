import { useEffect } from 'react';
import styles from "./Login.module.css";
import logo from "../img/logo.svg";
import menino from "../img/Menino com celular.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import Axios from "axios";
import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const paginainicial = () => {
    navigate("/");
  };

  const handleLoginSuccess = () => {
    window.open("http://localhost:8800/auth/google", "_self", 'toolbar=no, scrollbars=yes, resizable=no, width=1000, height=auto');
  };

  useEffect(() => {
    Axios.get("http://localhost:8800/auth/login/success", {
      withCredentials: true,
    })
    .then((res) => {
      if (res.status === 200) {
        // Chame a função login do contexto para salvar as informações do usuário
        login({ name: res.data.user[0], email: res.data.user[1] });
        // Redirecione para a página desejada após o login
        navigate('/pesquisa');
      } else {
        console.log("No status");
      }
    })
    .catch((err) => console.log(err));
  }, [login, navigate]);


  return (
    <div className={styles.login_container}>
      <img src={logo} className={styles.logo} onClick={paginainicial} alt="logo"></img>
      <img src={menino} className={styles.Menino}></img>
      <h1 className={styles.bv}>Bem vindos ao UnBuscas</h1>
      <div className={styles.c1}>
        <h1>Entre na sua conta</h1>
        <hr />
        
          
        <GoogleOAuthProvider clientId="829989984645-1n9j5s35r34n85fkj83hjiiisc6jg20e.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => {
              console.log('Login Failed');
            }}
            />
        </GoogleOAuthProvider>
       
      </div>
    </div>
  );
}

export default Login;
