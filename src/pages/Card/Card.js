import React from 'react'

function Card({peliculas}) {
    const img = 'https://image.tmdb.org/t/p/w342'; /* Primer parte de la url de la imagen, se complementa con el poster_path */

    let {poster_path, title} = peliculas

  return (
    <> 
        <article className="card">
            <img src={img + poster_path} alt={title} />
            <h2>{title}</h2>
        </article>
    </>
  )
}

export default Card