import React, { Component } from 'react'

class DetallePelicula extends Component {

    constructor (){
        super();
        this.state = {
            id: 985939,
            detalle: {},
        }
    }

 componentDidMount(){
        const url = `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=924a6f16470b17afdd20524ec31c09be`
        fetch(url)
            .then((res)=> res.json())
            .then(datos =>{ 
                    return this.setState({
                    detalle: datos.results
                })
            })
            .catch( err => console.log(err))
     }

     
     render(){
         const img = 'https://image.tmdb.org/t/p/w342';
        return(
            <>
                <img src={img + this.state.detalle.poster_path} alt={this.state.detalle.title}/>
                <h1> {this.state.detalle.title} </h1>
                <p> Calificacion: {this.state.detalle.vote_average} </p>
                <p> Fecha de estreno: {this.state.detalle.release_date} </p>
                <p> Duracion: {this.state.detalle.runtime} </p>
                <p> Sinopsis: {this.state.detalle.overview} </p>
            </>
        )
     }

}


export default DetallePelicula;