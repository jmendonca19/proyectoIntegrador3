import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "./Card.css"
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /* hacemos un estado que nos devuelve true o false, donde preguntamos si en el localStorage tiene la pelicula seleccionada*/
            boton: JSON.parse(localStorage.getItem('favoritos')).some((fav)=> fav.id === this.props.pelicula.id),
            favoritos: [],
            claseDescripcion: 'hide',
            textoDescripcion: 'Ver descripcion',
        }
    }

    handleButton(){
        this.setState({
            /* cuando el usuario clickea en agregar a fav, cambia el estado de true a false y viceversa */
            boton: !this.state.boton
        }, 
        /* luego en el callback, se ejecuta la funcion que se le pasa como parametro a card, es decir, la funcion que se encuentra en home y en favoritos (handleFavoritos) y como parametro se le pasa la pelicula */
        ()=>{this.props.favorito(this.props.pelicula)
        })
    }

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

                <button className="boton" onClick={()=> this.handleButton()}>{this.state.boton === true ? "Quitar de Favoritos" : "Agregar a Favoritos"}</button>
                
                <p onClick={() => this.verDescripcion()} className='more'> {this.state.textoDescripcion} </p>

                <p className={this.state.claseDescripcion}>Descripcion: {overview}</p>
            </article>
        </>
     )
    }
}

export default Card