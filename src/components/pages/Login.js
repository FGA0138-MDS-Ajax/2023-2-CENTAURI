import styles from "./Login.module.css"
import logo from "../img/logo.svg"
import menino from "../img/Menino com celular.svg"
import google from "../img/Google.svg"

function Login(){
    return(
        <div className={styles.login_container}>
            <img src = {logo} className={styles.logo}></img>
            <img src = {menino} className={styles.Menino}></img>
            <h1 className={styles.bv}>Bem vindo ao UnBuscas</h1>
            <div className={styles.c1}>
             <h1>Entre na sua conta</h1>  
             <hr/> 
            <button className={styles.button} type="submit" id="botao">Continue com Google</button>
            <img src = {google}></img>            
            </div>
        </div>

      
    )
}

export default Login;