import { useEffect } from 'react';
import { useState } from 'react';
import styles from "./Login.module.css";
import logo from "../img/logo.svg";
import menino from "../img/Menino com celular.svg";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';
import Axios from "axios";
import React from "react";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
      navigate("/pesquisa");
    }
  }, [navigate]);

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);

    login({
      name: decoded.name,
      email: decoded.email,
    });

    navigate("/pesquisa"); 
  };

  const paginainicial = () => {
    navigate("/");
  }

  const signInWithGoogle = (credentialResponse) => {
    
    window.open("http://localhost:8800/auth/google", "_self", 'toolbar=no, scrollbars=yes, resizable=no, width=1000, height=auto')

  }

  React.useEffect(() => {
    Axios.get("http://localhost:8800/auth/login/success", {
      withCredentials: true,
    })
      .then((res) => {
        if (res.status == 200) {
          navigate('/login')
        } else {
          console.log("No status");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.login_container}>
      
      <img src={logo} className={styles.logo} onClick={paginainicial} alt="logo"></img>
      <img src={menino} className={styles.Menino}></img>
      <h1 className={styles.bv}>Bem vindos ao UnBuscas</h1>
      <div className={styles.c1}>
        <h1>Entre na sua conta</h1>
        <hr />

        

        {/* <GoogleOAuthProvider clientId="829989984645-1n9j5s35r34n85fkj83hjiiisc6jg20e.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>
        <button>
            <a className="botao_google" href="http://localhost:8800/auth/google/callback" >Login with Google</a>
        </button> */}
      </div>
      <button onClick={signInWithGoogle}>logue aq</button>
    </div>
  );
}

export default Login;
