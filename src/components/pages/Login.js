import styles from "./Login.module.css"
import logo from "../img/logo.svg"
import menino from "../img/Menino com celular.svg"
import google from "../img/Google.svg"
import onda from "../img/Rectangle 7.svg"
import ondablue from "../img/Rectangle 11.svg"

function Login(){
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
                    <button className={styles.button} type="submit" id="botao">Continue com Google</button>
                    <img src = {google} className={styles.g}></img>
                </div>       
        </div>

      
    )
}

export default Login;