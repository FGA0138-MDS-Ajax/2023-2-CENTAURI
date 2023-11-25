import { useEffect } from 'react';
import { useState } from 'react';
import styles from "./Login.module.css";
import logo from "../img/logo.svg";
import menino from "../img/Menino com celular.svg";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';

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
    login();
    navigate("/pesquisa");
  };

  return (
    <div className={styles.login_container}>
      <img src={logo} className={styles.logo} alt="logo"></img>
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