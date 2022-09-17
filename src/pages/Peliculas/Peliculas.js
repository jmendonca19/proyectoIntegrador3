import React, { Component } from 'react'
import Card from '../Card/Card';
import "./Peliculas.css"

class Peliculas extends Component {

    constructor() {
        super();
        this.state = {
            peliculas: [],
            favoritos: [],
            pageurl: "",
            
        };
    }

    img = 'https://image.tmdb.org/t/p/w342'; /* Primer parte de la url de la imagen, se complementa con el poster_path */

    componentDidMount(){
        const url = `https://api.themoviedb.org/3/movie/popular/?api_key=924a6f16470b17afdd20524ec31c09be&page=1`
        
        this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos')) || []})

        fetch(url)
            .then((res)=> res.json())
            .then(datos =>{ 
                    console.log(datos)
                    return this.setState({
                    peliculas: datos.results,
                    pageurl: `https://api.themoviedb.org/3/movie/popular/?api_key=924a6f16470b17afdd20524ec31c09be&page=2`
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
    
  masPeliculas(){
    const url = this.state.pageurl
    
   
    fetch(url)
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        this.setState({
          pageurl: `https://api.themoviedb.org/3/movie/popular/?api_key=924a6f16470b17afdd20524ec31c09be&page=3`,
          peliculas: this.state.peliculas.concat(data.results)
        })
        .catch( err => console.log(err))
      })
  } 
  
  render() {
    return (
      <div className='peliculas'>

      {
          this.state.peliculas.map(pelicula => (
                <Card 
                    key={pelicula.id} 
                    pelicula={pelicula}
                    favorito={(pelisValoradas) => this.handleFavoritos(pelisValoradas)}
                    textFav={this.state.textFav}
                />)
            )
      }
      <button class="boton" onClick={()=>this.masPeliculas()}> ver más peliculas  </button>
      </div>
    )
  }
}

export default Peliculas;