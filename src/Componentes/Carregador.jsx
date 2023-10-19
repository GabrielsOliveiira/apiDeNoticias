import Noticias from "./Noticias";

export default function Carregador({currentNews}){
    return(
        <div className='newsPart'>
        {currentNews.map(news => (
            <Noticias key={news.id} thisNews={news}/>
        ))}

        </div>
    )
}