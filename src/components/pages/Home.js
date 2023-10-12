import styles from "./Home.module.css"
import search from '../img/search.png'

function Home(){
    return(
        <div className={styles.home_container}>
            <form action="" className={styles.search_bar}>
            <input type="text" placeholder="Faça sua pesquisa"/>
            <button type="submit"><img src={search}></img></button>
            </form>
        </div>
    )
}

export default Home;