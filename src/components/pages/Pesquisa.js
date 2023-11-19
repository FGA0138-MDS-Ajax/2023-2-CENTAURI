import React, { useState, useEffect } from 'react';
import styles from "./Pesquisa.module.css";
import { MeiliSearch } from 'meilisearch';
import onda from "../img/Rectangle 8.svg";
import logo from "../img/logo.svg";
import filtro from "../img/Filter Button.svg";
import unb from "../img/pdf1.svg";
import bolinhas from "../img/bolinhas.svg";
import download from "../img/Download.svg"
import coracao from "../img/Coracao.svg"

function Pesquisa() {
  const [searchResults, setSearchResults] = useState([]);
  const [originalResults, setOriginalResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [sortOption, setSortOption] = useState('relevance');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [periodDropdownOpen, setPeriodDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [selectedDocumentId, setSelectedDocumentId] = useState(null);

  const client = new MeiliSearch({
    host: 'http://127.0.0.1:7700',
    apiKey: 'aSampleMasterKey',
  });

  const searchDocuments = async (query) => {
    client
      .index("entries")
      .search(query)
      .then((results) => {
        const hits = results.hits;
        setSearchResults(hits);
        setOriginalResults(hits);
        setFilteredResults(hits);
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
  };

  const handleToggleBolinhaMenu = (documentId) => {
    setSelectedDocumentId(documentId === selectedDocumentId ? null : documentId);
  };

  const handleDownloadClick = (resource) => {
    window.open(resource.link, '_blank');
  };

  return (
    <div className={styles.search_container}>
      <div>
        <img src={onda} className={styles.onda} alt="onda"></img>
        <img src={logo} className={styles.logo} alt="logo"></img>
        <img src={filtro} className={styles.filtro} alt="filtro" onClick={handleToggleFilters}></img>
      </div>

      <form className={styles.search_bar}>
        <input
          type="text"
          placeholder="Pesquise um documento aqui"
          onChange={(e) => searchDocuments(e.target.value)}
        />
      </form>

      {filtersVisible && (
        <div>
          <div className={styles.sortingFilteringControls}>
            <select className={styles.relevance} value={sortOption} onChange={(e) => handleSortOptionChange(e.target.value)}>
              <option value="relevance">Relevância</option>
              <option value="newest">Mais recentes</option>
              <option value="oldest">Mais antigos</option>
            </select>

            <div className={styles.periodDropdown}>
              <button className={styles.periodo} type="button" onClick={handleTogglePeriodDropdown}>
                Período
              </button>
              {periodDropdownOpen && (
                <div className={styles.periodDropdownContent}>
                  <label>Start Date:</label>
                  <input type="date" value={startDate} onChange={(e) => handleStartDateChange(e.target.value)} />

                  <label>End Date:</label>
                  <input type="date" value={endDate} onChange={(e) => handleEndDateChange(e.target.value)} />
                </div>
              )}
            </div>

            <div className={styles.todos1}>
              <select className={styles.todos} value={selectedType} onChange={(e) => handleTypeChange(e.target.value)}>
                <option value="">Todos</option>
                <option value="Normativo">Normativo</option>
                <option value="Deliberativo">Deliberativo</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <div className={styles.grid}>
        {filteredResults.map((resource) => (
          <div key={resource.id} className={styles.documentContainer}>
            <img src={bolinhas} className={styles.bolinha} onClick={() => handleToggleBolinhaMenu(resource.id)}></img>
            {selectedDocumentId === resource.id && (
              <div className={styles.bolinhaMenu}>
                <div 
                    className={styles.downloadAll}
                    onClick={() => handleDownloadClick(resource)}>
                  <img
                    src={download}
                  ></img>
                  <p className={styles.downloadText}>Download</p>
                </div>
                <div>
                  <img src={coracao} className={styles.coracao}></img>
                  <p className={styles.coracaoText}>Salve como seu favorito</p>
                </div>
              </div>
            )}
            <img src={unb} className={styles.documentImage} alt="Document"></img>
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