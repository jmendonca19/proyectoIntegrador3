import React, { Component } from 'react'
import "./Detail.css"

class DetallePelicula extends Component {

    constructor (props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            detalle: {},
        }
    }

 componentDidMount(){
        const url = `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=924a6f16470b17afdd20524ec31c09be`
        fetch(url)
            .then((res)=> res.json())
            .then(datos =>{ 
                console.log(datos)
                    return this.setState({
                    detalle: datos
                })
            })
            .catch( err => console.log(err))
     }

     
     render(){
         const img = 'https://image.tmdb.org/t/p/w342';
        return(
            <div className='mainSeries'>
            <section className="bannerSeries">
                <img src={img + this.state.detalle.poster_path} alt={this.state.detalle.title}/>
            </section>
        <section className="descripcionSeries">
            <article className="descripcionArticulo">
                <h2 className="tituloArticulo"> {this.state.detalle.title} </h2>
                <ul className="ulArticulo">
                    <li className="calificacionPeli">Calificación: {this.state.detalle.vote_average} </li>
                    <li className="duracionPeli">Duración: {this.state.detalle.runtime}  </li>
                    <li className="estrenoPeli">Fecha de Estreno: {this.state.detalle.release_date}</li>
                </ul>
                <p className="sinopsisPeli"> {this.state.detalle.overview} </p>
            </article>
        </section>
            </div>
            )
            }
        }   

export default DetallePelicula;