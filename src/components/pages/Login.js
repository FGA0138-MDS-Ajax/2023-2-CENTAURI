import styles from "./Login.module.css";
import logo from "../img/logo.svg";
import menino from "../img/Menino com celular.svg";
import onda from "../img/Rectangle 7.svg";
import ondablue from "../img/Rectangle 11.svg";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import Grid from "../Grid.js"

import Form from "../Form.js";

function Login() {
    let [aux, setAux] = useState();
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState();
    const ref = useRef();


    const getUsers = async () => {
        try {
            const res = await axios.get("http://localhost:8800");
            setUsers(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
        } catch (error) {
            toast.error(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, [setUsers]);


    return (
        <div>
            <div className={styles.login_container}>
                <img src={ondablue} className={styles.ondablue} alt="onda azul"></img>
                <img src={onda} className={styles.onda} alt="onda"></img>
                <img src={logo} className={styles.logo} alt="logotipo"></img>
                <img src={menino} className={styles.Menino} alt="menino"></img>
                <h1 className={styles.bv}>Bem vindos ao UnBuscas</h1>
                
                <div className={styles.google_container}>
                    <div>
                        <h1>Entre na sua conta</h1>
                        <button>
                            <a className="botao_google" href="http://localhost:8800/auth/google/callback" >Login with Google</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login
