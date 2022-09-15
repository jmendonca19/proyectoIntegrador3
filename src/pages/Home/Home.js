import React, { Component } from 'react'
import Card from '../Card/Card'
import "./Home.css"

 class Home extends Component {

    constructor() {
        super();
        this.state = {
            peliculas: [],
            pelisValoradas: [],
            cargando: false,
            resultados: [],
            filterBy:'',
            favoritos: [],
        };
    }

    img = 'https://image.tmdb.org/t/p/w342'; /* Primer parte de la url de la imagen, se complementa con el poster_path */

    componentDidMount(){
        const url = "https://api.themoviedb.org/3/movie/popular/?api_key=924a6f16470b17afdd20524ec31c09be"

        const peliculasMasValoradas = 'https://api.themoviedb.org/3/movie/top_rated/?api_key=924a6f16470b17afdd20524ec31c09be'

        console.log(this.state.favoritos) 
        this.setState({favoritos: JSON.parse(localStorage.getItem('favoritos')) || []})

        fetch(url)
            .then((res)=> res.json())
            .then(datos =>{ 
                    console.log(datos)
                    return this.setState({
                    peliculas: datos.results.slice(0,5),
                    cargando: true
                })
            })
            .catch( err => console.log(err))

        fetch(peliculasMasValoradas)
            .then((res)=> res.json())
            .then(datos =>{ 
                    console.log(datos)
                    return this.setState({
                    pelisValoradas: datos.results.slice(0,5),
                    cargando: true
                })
            })
            .catch( err => console.log(err))
     }
    PeliculasFiltradas(palabra){
        if (palabra === ""){
            return
        } else {

        const url = `https://api.themoviedb.org/3/search/movie?api_key=9806568902844c6f593c59bcdb4afcac&language=en-US&query=${palabra}`
        
        fetch(url)
            .then((res)=> res.json())
            .then(datos =>{ 
                console.log(datos)
                return this.setState({
                resultados: datos.results,
            })
        })
        .catch( err => console.log(err))}
    }
    handleChange(e){
        this.setState({
          filterBy: e.target.value
        },()=>{
          this.PeliculasFiltradas(this.state.filterBy)
        })
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

    <>
    <div className='buscador'> 
    <form method="GET"> 
        <input  onChange={(e)=>{this.handleChange(e)}} type="search" name="buscar" placeholder="Buscador..." value={this.state.filterBy} />
     </form>
    </div>
     
   
    
    {this.state.filterBy === "" ?
    <>
     <section className="banner"></section>

        <span className="titleSection">Peliculas mas Populares</span>

        <div className='peliculas'>
        { 
            this.state.cargando === false ? (
                <p>Cargando</p>
        ) : (
                this.state.peliculas.map(pelicula => (
                    <Card 
                        key={pelicula.id} 
                        pelicula={pelicula}
                        favorito={(pelicula) => this.handleFavoritos(pelicula)}
                    />)
                )
            )
        }
        </div>

    <span className="titleSection">Peliculas mas Valoradas</span>
    
        <div className='peliculas'>
        {
        
            this.state.cargando === false ? (
            <p>Cargando</p>
        ) : (
                this.state.pelisValoradas.map(pelisValoradas => (
                    <Card 
                        key={pelisValoradas.id} 
                        pelicula={pelisValoradas}
                        favorito={(pelisValoradas) => this.handleFavoritos(pelisValoradas)}
                    />)
                )
            )
        }
        </div>
    </>
    : 
    <>
    { 
        this.state.cargando === false ? (
        <p>Cargando</p>
    ) : 
    (
            this.state.resultados.map(resultado => (
                <Card key={resultado.id} pelicula={resultado}/>)
            )
        )
    }
</>}
</>
  )
 }
}

export default Home;