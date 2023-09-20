function NextPage({nextPage, prevPage, currentPage}){

    return (
    <div className="pagination">
    <a href="#"><button onClick={prevPage} disabled={currentPage === 1}>Página Anterior</button></a>
      <a href="#"><button onClick={nextPage}>Próxima Página</button></a>
    </div>
    )
}

export default NextPage