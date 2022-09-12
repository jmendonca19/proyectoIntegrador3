import React from 'react'
import {Link} from 'react-router-dom'

function Card({pelicula}) {
    const img = 'https://image.tmdb.org/t/p/w342'; /* Primer parte de la url de la imagen, se complementa con el poster_path */

    let {poster_path, title, id} = pelicula

  return (
    <> 
        <article className="card">
            <img src={img + poster_path} alt={title} />
            <h2>{title}</h2>
            <Link to={`/detallePelicula/id/${id}`} className="" >Detalle</Link>
        </article>
    </>
  )
}

export default Card