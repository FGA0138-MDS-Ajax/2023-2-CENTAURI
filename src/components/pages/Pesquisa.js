import { useState } from 'react'
import styles from "./Pesquisa.module.css"
const { MeiliSearch } = require('meilisearch')


function Pesquisa(){
    const [searchResults, setSearchResults] = useState([]);
    // const [order, setOrder] = useState(1);
    // const [collumnOrder, setColumnOrder] = useState('resource.date');

    // const handleOrder = date => {
    //     setOrder(order)
    //     setColumnOrder(date)
    // }

    // searchResults = searchResults.sort((a, b) => {
    //     return a[collumnOrder] < b[collumnOrder] ? -order : order;
    // })

    const client = new MeiliSearch({
      host: 'http://127.0.0.1:7700',
      apiKey: 'aSampleMasterKey',
    })

    const searchDocuments = async (e)=> {
        client
            .index("entries")
            .search(e.target.value)
            .then((results) => {
                setSearchResults(results.hits);
        });
    };
  return (
      <div className={styles.search_container}>
        <form className={styles.search_bar}>
            <input 
            
            type="text" 
            placeholder="Pesquise um documento aqui"
            onChange={(e) => searchDocuments(e)}/> 
            {/* <button type="submit" onClick={(e) => handleOrder(e)}>buscar</button> */}
        </form>
        
        <div className={styles.grid}>
            {searchResults.map((resource) => {
                return <tr key={resource.id}>
                        <td><h3>{resource.title}</h3></td>
                        <td><p>{resource.content.substring(0, 400)}...</p></td>
                        <td><a href={resource.link}>Baixe aqui o documento</a>
                        <br/></td>
                    </tr>
            }
            )}
            </div>
        </div>
)};

export default Pesquisa;