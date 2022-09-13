import React from 'react'
import {Link} from 'react-router-dom'
import "./Card.css"

function Card(props) {
    const img = 'https://image.tmdb.org/t/p/w342'; /* Primer parte de la url de la imagen, se complementa con el poster_path */

    let {poster_path, title, id} = props.pelicula

  return (
    <> 
        <article className="card">
            <img src={img + poster_path} alt={title} />
            <h2>{title}</h2>
            
            <button className="boton"><Link to={`/detallePelicula/id/${id}`} className="detalle">Detalle</Link></button>
            <button className="boton" onClick={()=>{props.favorito(props.pelicula)}}>Favoritos</button>
        </article>
    </>
  )
}

export default Card