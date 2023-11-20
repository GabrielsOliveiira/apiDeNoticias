export default function Noticias({thisNews}){
  const tituloTratado = `\u00a0\u00a0${thisNews.titulo}`;
  const introducaoTratado = `\u00a0\u00a0${thisNews.introducao}`
    return(
        <div className='news' key={thisNews.id}>
            <h2 className='newsTitle'>  {tituloTratado}</h2>
            <p className='introduction'>  {introducaoTratado}</p>
            <div className="bottom">
              <div className='references'>
                <p className='editorials'>{thisNews.editorias}</p>
                <p className='publicationDate'>{thisNews.data_publicacao}</p>
              </div>
              <a className='materiaLink' href={thisNews.link} target='_blank'>Ver detalhes</a>
            </div>
          </div>
    )
}