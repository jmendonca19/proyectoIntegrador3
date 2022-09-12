import React, { Component } from 'react'
import Card from '../Card/Card';

class Favoritos extends Component {
    constructor(){
        super()
        this.state={
            favoritos:[]
        }
    }

    componentDidMount(){
        this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos'))})
    }

  render() {
    return (
      <div className='peliculas'>
        {this.state.favoritos.map( pelicula => (
            <Card 
                key={pelicula.id} 
                pelicula={pelicula}
            />
        ))}
      </div>
    )
  }
}

export default Favoritos