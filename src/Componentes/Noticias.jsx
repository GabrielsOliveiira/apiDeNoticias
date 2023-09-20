export default function Noticias({thisNews}){
    return(
        <div className='news' key={thisNews.id}>
            <h2 className='newsTitle'>{thisNews.titulo}</h2>
            <p className='introduction'>{thisNews.introducao}</p>
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