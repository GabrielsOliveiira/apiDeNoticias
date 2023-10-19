function NextPage({nextPage, prevPage, currentPage, numberPage = false}){

  return (
    <div className="pagination">
    <div>
      <a href="#"><button onClick={prevPage} disabled={currentPage === 1}>Página Anterior</button></a>
      <a href="#"><button onClick={nextPage}>Próxima Página</button></a>
    </div>
    {numberPage == true &&(
        <h1 className="paginaAtual">Página {currentPage}</h1>
    )}
    </div>
)
}

export default NextPage