import styles from "./Login.module.css"
import logo from "../img/logo.svg"
import menino from "../img/Menino com celular.svg"
import google from "../img/Google.svg"
import onda from "../img/Rectangle 7.svg"
import ondablue from "../img/Rectangle 11.svg"
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    return(
        <div className={styles.login_container}>
            <img src = {ondablue} className={styles.ondablue}></img>
            <img src = {onda} className={styles.onda}></img>
            <img src = {logo} className={styles.logo}></img>
            <img src = {menino} className={styles.Menino}></img>
            <h1 className={styles.bv}>Bem vindos ao UnBuscas</h1>
                <div className={styles.c1}>
                    <h1>Entre na sua conta</h1>  
                    <hr/> 
                    <GoogleOAuthProvider clientId="829989984645-1n9j5s35r34n85fkj83hjiiisc6jg20e.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            const decoded = jwtDecode(credentialResponse.credential);
                            navigate("/");
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        />
                        
                    </GoogleOAuthProvider>
                </div>       
        </div>

      
    )
}

export default Login;