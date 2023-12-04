import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from "./Pesquisa.module.css";
import { MeiliSearch } from 'meilisearch';
import onda from "../img/Rectangle 8.svg";
import logo from "../img/logo.svg";
import filtro from "../img/Filter Button.svg";
import unb from "../img/pdf1.svg";
import bolinhas from "../img/bolinhas.svg";
import download from "../img/Download.svg";
import coracao from "../img/Coracao.svg";
import login from "../img/Login.svg";
import lupa from "../img/lupa.svg";
import onda2 from "../img/Rectangle 22.svg";
import { useAuth } from '../contexts/AuthContext';
import axios from "axios";
// import { useFavoriteContext } from '../contexts/Favorites.js';


function Pesquisa({id}) {
  const [searchResults, setSearchResults] = useState([]);
  const [originalResults, setOriginalResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [sortOption, setSortOption] = useState('relevance');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [periodDropdownOpen, setPeriodDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filterControlsVisible, setFilterControlsVisible] = useState(false);
  const [selectedDocumentId, setSelectedDocumentId] = useState(null);
  //const {favorite, addFavorite} = useFavoriteContext();
  // const isFavorite = favorite.some((fav) => fav.id === id)
  const [favorite, setFavorite] = useState({
      favoritesId: '',
      userToken: '',
      documentId: ''
  });
  const [inputErrorList, setInputErrorList] = useState({});
  const [noResults, setNoResults] = useState(false); 

  const { isLoggedIn, logout, user, setUser } = useAuth(); 

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userToken, setUserToken] = useState("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSearchQuery = queryParams.get('query') || '';


  const paginainicial = () => {
    navigate("/");
  };

  useEffect(() => {
    if (initialSearchQuery) {
      // Perform the initial search with the query from the URL
      searchDocuments(initialSearchQuery);
    }
  }, [initialSearchQuery]);

  useEffect(() => {
    axios.get("http://localhost:8800/auth/login/success", {
      withCredentials: true,
    })
      .then((res) => {
        if (res.status == 200) {
          console.log("testee", res.data);
          console.log(res.data.user[0]);
          console.log(res.data.user[1]);
          console.log(res.data.user[2]);


          setUserName( res.data.user[0]);
          setUserEmail(res.data.user[1]);
          setUserToken(res.data.user[2]);
        } else {
          console.log("No status");
        }
      })
      .catch((err) => console.log(err));
  }, []);



  const client = new MeiliSearch({
    host: 'http://127.0.0.1:7700',
    apiKey: 'aSampleMasterKey',
  });

  const navigate = useNavigate();

  const searchDocuments = async (query) => {
    client
      .index("entries")
      .search(query)
      .then((results) => {
        const hits = results.hits;
        setSearchResults(hits);
        setOriginalResults(hits);
        setFilteredResults(hits);

        // Adicione a lógica para verificar se há resultados
        if (hits.length === 0) {
          setNoResults(true);
        } else {
          setNoResults(false);
        }
      });
  };

  const sortResults = () => {
    switch (sortOption) {
      case 'newest':
        setFilteredResults([...filteredResults].sort((a, b) => b.date - a.date));
        break;
      case 'oldest':
        setFilteredResults([...filteredResults].sort((a, b) => a.date - b.date));
        break;
      case 'relevance':
      default:
        setFilteredResults([...originalResults]);
        break;
    }
  };

  const filterResults = () => {
    let resultsToFilter = [...originalResults];

    if (selectedType) {
      resultsToFilter = resultsToFilter.filter(entry => entry.type === selectedType);
    }

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      resultsToFilter = resultsToFilter.filter(entry => {
        const entryDate = new Date(entry.date * 1000);
        return entryDate >= start && entryDate <= end;
      });
    }

    setFilteredResults(resultsToFilter);
  };

  useEffect(() => {
    sortResults();
  }, [sortOption]);

  useEffect(() => {
    filterResults();
  }, [startDate, endDate, selectedType]);

  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleTogglePeriodDropdown = () => {
    setPeriodDropdownOpen(!periodDropdownOpen);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleToggleFilters = () => {
    setFiltersVisible(!filtersVisible);
    setFilterControlsVisible(!filterControlsVisible);
  };

  const handleToggleBolinhaMenu = (documentId) => {
    setSelectedDocumentId(documentId === selectedDocumentId ? null : documentId);
  };

  const handleDownloadClick = (resource) => {
    window.open(resource.link, '_blank');
  };

  // const handleFavoriteClick = (documentId) => {
  //   addFavorite({ id: documentId }); // Adiciona ou remove o documento dos favorito
  // };
  function getRandom() {
    return Math.random();
  }

  async function saveFavorite (documentId){
    setFavorite({
      userToken: user.token,
      documentId: documentId,
    });
    
    // const data = {
    //   favoritesId: "1",
    //   userToken: userToken,
    //   documentId: documentId
    // };
    // console.log(data);
    await axios.post('http://localhost:8800/create_favorite', {
      favoritesId: getRandom(4),
      userToken: userToken,
      documentId: documentId
    }, {headers: {
      'Content-Type': 'application/json'
      }})
      .then(res => {
        alert("documento adicionado com sucesso!");
        console.log("deu certo?");
      })
      .catch(error => {
        if (error.response && error.response.status === 404 || error.response.status === 500) {
          alert("documento já foi anteriormente adicionado");
          console.error("não fez a requisição " + error.response);
          console.log(error.config.data);
        }else{
          console.log(error.config.data);
          console.log(error);
        }
      });
  
  };

  const handleLogoutSucess = () => {
    logout();
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, [setUser]);

  return (
    <div className={styles.search_container}>
      {noResults && navigate('/error')}
  
      <div>
        <img src={onda} className={styles.onda} alt="onda" />
        <img src={onda2} className={styles.onda2} alt="onda" />
        <img src={logo} className={styles.logo} alt="logo" onClick={paginainicial}/>
        {!isLoggedIn && (
          <div className={styles.button_login_container}>
            <div>
              <button className={styles.botaoLogin} onClick={() => navigate('/login')}>
                LOGIN
              </button>
            </div>
          </div>
        )}
  
        {isLoggedIn && (
          <div>
            <button className={styles.botaologout} onClick={handleLogoutSucess}>
              Logout
            </button>
            <Link to="/usuario">
              <div>
                <img src={login} className={styles.login} alt="login" />
                <p className={styles.profile}>{user?.name}</p>
              </div>
            </Link>
          </div>
        )}
        <img src={filtro} className={styles.filtro} alt="filtro" onClick={handleToggleFilters} />
      </div>
  
      <form className={styles.search_bar}>
        <input
          type="text"
          placeholder="Pesquise um documento aqui"
          onChange={(e) => searchDocuments(e.target.value)}
        />
        <button type="submit" className={styles.botaoPesquisa}>
          <img src={lupa} alt="botão de pesquisar" />
        </button>
      </form>
  
      {filterControlsVisible && (
        <div>
          <div className={styles.sortingFilteringControls}>
            <select
              className={styles.relevance}
              onChange={(e) => handleSortOptionChange(e.target.value)}
            >
              <option value="relevance">Relevância</option>
              <option value="newest">Mais recentes</option>
              <option value="oldest">Mais antigos</option>
            </select>
  
            <div className={styles.periodDropdown}>
              <button
                className={styles.periodo}
                type="button"
                onClick={handleTogglePeriodDropdown}
              >
                Período
              </button>
              {periodDropdownOpen && (
                <div className={styles.periodDropdownContent}>
                  <label>Data Inicio:</label>
                  <input type="date" onChange={(e) => handleStartDateChange(e.target.value)} />
  
                  <label>Data Final:</label>
                  <input type="date" onChange={(e) => handleEndDateChange(e.target.value)} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
  
      <div className={styles.grid}>
        {filteredResults.map((resource) => (
          <div key={resource.id} className={styles.documentContainer}>
            <img
              src={bolinhas}
              className={styles.bolinha}
              onClick={() => handleToggleBolinhaMenu(resource.id)}
            />
            {selectedDocumentId === resource.id && (
              <div className={styles.bolinhaMenu}>
                <div
                  className={styles.downloadAll}
                  onClick={() => handleDownloadClick(resource)}
                >
                  <img src={download} alt="Download" />
                  <p className={styles.downloadText}>Download</p>
                </div>
                {isLoggedIn && (
                  <div
                    className={styles.botaoFav}
                    /*onClick={() => handleFavoriteClick(resource.id)}*/
                    onClick={() => saveFavorite(resource.id)}
              
                  >
                    <img src={coracao} className={styles.coracao} />
                    <p className={styles.coracaoText}>Salve como seu favorito</p>
                  </div>
                )}
              </div>
            )}
            <img src={unb} className={styles.documentImage} alt="Document" />
            <div className={styles.documentInfo}>
              <h3 className={styles.titulo}>{resource.title}</h3>
              <p>{resource.content.substring(0, 400)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );      
}

export default Pesquisa;

