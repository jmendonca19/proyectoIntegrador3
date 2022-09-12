import React, { Component } from 'react'

class DetallePelicula extends Component {
    
    constructor (){
        super();
        this.state = {
            data: {}
        }
    }

 componentDidMount(){
        const url = "https://api.themoviedb.org/3/movie/${id}?api_key=924a6f16470b17afdd20524ec31c09be"
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

     render(){
        return(
            <>
                <img>  </img>
                <h1> {this.state.data.title} </h1>
                <p> Calificacion: {this.state.data.vote_average} </p>
                <p> Fecha de estreno: {this.state.data.release_date} </p>
                <p> Duracion: {this.state.data.runtime} </p>
                <p> Sinopsis: {this.state.data.overview} </p>
                <p> Genero: {this.state} </p>
                <button> </button>
            </>
        )
     }

}


export default DetallePelicula;