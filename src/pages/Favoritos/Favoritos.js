import React, { Component } from 'react'
import Card from '../Card/Card';
import "./Favoritos.css"
class Favoritos extends Component {
    constructor(){
        super()
        this.state={
            favoritos:[]
        }
    }

    componentDidMount(){
        console.log(this.state.favoritos);
        this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos'))})
    }

  render() {
      return (
        <>
            <h2 className="tituloFavoritos">Tus Peliculas Favoritas</h2>
            <div className='peliculas'>
                { this.state.favoritos != 0 ? (
                    this.state.favoritos.map( pelicula => (
                        <Card 
                            key={pelicula.id} 
                            pelicula={pelicula}
                        />
                    ))) : (
                        <h2 className="tituloFavoritos">No tenes peliculas favoritas seleccionadas</h2>
                    ) 
                } 
            </div>
        </>
    )
  }
}

export default Favoritos