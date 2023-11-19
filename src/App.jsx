import React, { useEffect, useState } from 'react';
import './App.css'
import NextPage from './Componentes/NextPage';
import Carregador from './Componentes/Carregador';
import Titulo from './Componentes/Titulo';
import { escolherPagina } from './Scripts/CarregarNoticia';

function NewsList() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  async function fetchNews() {
    const response = await fetch("https://servicodados.ibge.gov.br/api/v3/noticias/");
    const data = await response.json();
    return data.items;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const [initialData] = await Promise.all([fetchNews(currentPage)]);
        setNews(initialData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // setLoading(false);
      }
    }

    fetchData();
  }, [currentPage]);

  const currentNews = escolherPagina(currentPage, news)

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  return (
    <>
      <Titulo title={"Notícias"} />
      <NextPage nextPage ={nextPage} prevPage={prevPage} currentPage={currentPage} numberPage={true}></NextPage>
      {loading ? <p className='loading'>Carregando...</p> : <Carregador currentNews={currentNews} currentPage={currentPage} />}
      <NextPage nextPage ={nextPage} prevPage={prevPage} currentPage={currentPage}></NextPage>
    </>
  );
}

export default NewsList;
