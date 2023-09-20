import Noticias from "./Noticias";

export default function Carregador({currentNews, currentPage}){
    return(
        <div className='newsPart'>
        <h1 className="paginaAtual">Página {currentPage}</h1>
        {currentNews.map(news => (
            <Noticias thisNews={news}/>
        ))}

        </div>
    )
}