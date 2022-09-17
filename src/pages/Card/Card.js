import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "./Card.css"
class Card extends Component {
    constructor() {
        super();
        this.state = {
            favoritos: [],
            claseDescripcion: 'hide',
            textoDescripcion: 'Ver descripcion',
        }
    }

    /* componentDidMount(){
       this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos'))})
       if(this.state.favoritos.some(fav => this.props.pelicula.id === fav.id)){
        this.setState({textFav: "Quitar de favoritos"})
       } else {
        this.setState({textFav: "Agregar a favoritos"})
       }
    } */

    verDescripcion(){
        /* Hacemos la funcion de ver la descripcion. Nos preguntamos si en el estado esta oculto y dependiendo de eso la mostramos y alteramos el estado */
        if(this.state.claseDescripcion === 'hide'){
            this.setState({
                claseDescripcion: 'show', textoDescripcion: 'Ocultar descripcion'
            })
        } else {
            this.setState({
                claseDescripcion: 'hide', textoDescripcion: 'Ver descripcion'
            })
        }
    }

    render() {
        let img = 'https://image.tmdb.org/t/p/w342'; /* Primer parte de la url de la imagen, se complementa con el poster_path */
        
        let {poster_path, title, id, overview} = this.props.pelicula 
     return (
        <> 
            <article className="card">
                <Link to={`/detallePelicula/id/${id}`} className="detalle">
                <img src={img + poster_path} alt={title} />
                <h2>{title}</h2>
                </Link>

                <button className="boton" onClick={()=>{this.props.favorito(this.props.pelicula)}}>{this.props.textFav}</button>
                
                <p onClick={() => this.verDescripcion()} className='more'> {this.state.textoDescripcion} </p>

                <p className={this.state.claseDescripcion}>Descripcion: {overview}</p>
            </article>
        </>
     )
    }
}

export default Card