import React, { Component } from 'react'
import Card from '../Card/Card';

class Peliculas extends Component {

    constructor() {
        super();
        this.state = {
            peliculas: [],
            favoritos: []
        };
    }

    img = 'https://image.tmdb.org/t/p/w342'; /* Primer parte de la url de la imagen, se complementa con el poster_path */

    componentDidMount(){
        const url = "https://api.themoviedb.org/3/movie/popular/?api_key=924a6f16470b17afdd20524ec31c09be"
        
        this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos')) || []})

        fetch(url)
            .then((res)=> res.json())
            .then(datos =>{ 
                    console.log(datos)
                    return this.setState({
                    peliculas: datos.results
                })
            })
            .catch( err => console.log(err))
     }
     
     handleFavoritos(card){
        if(this.state.favoritos.some(fav => card.id === fav.id)){
        // texto agregar a favoritos
        this.setState({favoritos: this.state.favoritos.filter( item => item.id !== card.id)}, ()=>{
          localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
          // texto quitar de favoritos
        })
        console.log(this.state.favoritos.filter( item => item.id !== card.id))
        }else {
          this.setState({favoritos: [...this.state.favoritos, card]}, ()=>{
          localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
          // texto quitar de favoritos
        })}
      }
      
  render() {
    return (
      <div className='peliculas'>

      {
          this.state.peliculas.map(pelicula => (
                <Card 
                    key={pelicula.id} 
                    pelicula={pelicula}
                    favorito={(pelicula) => this.handleFavoritos(pelicula)}
                />)
            )
      }
      </div>
    )
  }
}

export default Peliculas;