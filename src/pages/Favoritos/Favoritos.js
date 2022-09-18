import React, { Component } from 'react'
import Card from '../Card/Card';
import "./Favoritos.css"

class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state={
            favoritos:[],
        }
    }

    componentDidMount(){
        this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos')) || ['']},  console.log(this.state.favoritos))
    }

    handleFavoritos(card){
        if (this.state.favoritos.some(fav => card.id === fav.id)) {
            this.setState({favoritos: this.state.favoritos.filter(item => item.id !== card.id)}, () => {
                localStorage.setItem("favoritos", JSON.stringify(this.state.favoritos))
            })
            console.log(this.state.favoritos.filter(item => item.id !== card.id))
        } else {
            this.setState({favoritos: [...this.state.favoritos, card]}, () => {
                localStorage.setItem("favoritos", JSON.stringify(this.state.favoritos))
            })
        }
    }

  render() {
      return (
        <>
            <h2 className="tituloFavoritos">Tus Peliculas Favoritas</h2>
            <div className='peliculas'>
                { this.state.favoritos.length !== 0 ? 
                (this.state.favoritos.map(pelicula => (
                        <Card 
                            key={pelicula.id} 
                            pelicula={pelicula}
                            favorito={(fav) => this.handleFavoritos(fav)}
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