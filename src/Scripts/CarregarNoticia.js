const itemsPerPage = 10; // Quantidade de notícias por página

// Calcular índices para exibir a página atual
function escolherPagina (currentPage, news){
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = news.slice(startIndex, endIndex);
  return currentNews
}

export {escolherPagina}