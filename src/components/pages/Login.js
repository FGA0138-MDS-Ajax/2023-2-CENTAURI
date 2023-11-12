import styles from "./Login.module.css"
import logo from "../img/logo.svg"
import menino from "../img/Menino com celular.svg"
// import google from "../img/Google.svg"
import onda from "../img/Rectangle 7.svg"
import ondablue from "../img/Rectangle 11.svg"
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";




function Login(){
    let [aux, setAux] = useState();
    // const [user, setUser] = useState([]);
    // const [ref, setRef] = useState([]);
    const [users, setUsers] = useState([]);

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


    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = [...aux];
        
        await axios
        .post("http://localhost:8800", {
            name: user.name.value,
            email: user.email.value,
            sub: user.sub.value
        })
        .then(({ data }) => toast.success(data.message))
        .catch(({ response }) => {
            if (response) {
              toast.error(response.data.error || 'Erro interno do servidor');
            } else {
              toast.error('Erro de conexão com o servidor');
            }
          });
        
        
        getUsers();
    };

    

    return(
        <div>
            <div className={styles.login_container}>
                <img src = {ondablue} className={styles.ondablue} alt="onda azul"></img>
                <img src = {onda} className={styles.onda} alt="onda"></img>
                <img src = {logo} className={styles.logo} alt="logotipo"></img>
                <img src = {menino} className={styles.Menino} alt="menino"></img>
                <h1 className={styles.bv}>Bem vindos ao UnBuscas</h1>
                    <div className={styles.google_container}>
                        <h1>Entre na sua conta</h1>
                        <hr/> 
                        <GoogleOAuthProvider clientId="829989984645-1n9j5s35r34n85fkj83hjiiisc6jg20e.apps.googleusercontent.com">
                        <GoogleLogin 
                            onSubmit={handleSubmit}
                            onSuccess={credentialResponse => {
                                const decoded = jwtDecode(credentialResponse.credential);
                                aux = decoded;
                                console.log(aux);
                            }}
                            />
                        </GoogleOAuthProvider>
                    </div>
            </div>
        </div>

      
    )
}

export default Login;