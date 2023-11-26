import styles from "./Error.module.css"
import meditando from "../img/meditando.svg"
import topo from "../img/topoPagina.svg"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function Error(){
    return(
       <div className = {styles.error_container}>
       <img src = {topo} className = {styles.imagem}></img>
       <h1 className = {styles.texto1}>
              Ops! 
        </h1>
        <p className = {styles.texto2}>
            Página não encontrada
Respire e relaxe já iremos resolver 
        </p>
        <img src = {meditando} className = {styles.meditando}></img>
        <Link to='/'><button className = {styles.botao}>Retornar</button></Link>
        </div>
    )
}

export default Error;