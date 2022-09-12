import React, { Component } from 'react'
import Card from '../Card/Card';

class Peliculas extends Component {

    constructor() {
        super();
        this.state = {
            peliculas: [],
        };
    }

    img = 'https://image.tmdb.org/t/p/w342'; /* Primer parte de la url de la imagen, se complementa con el poster_path */

    componentDidMount(){
        const url = "https://api.themoviedb.org/3/movie/popular/?api_key=924a6f16470b17afdd20524ec31c09be"
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

  render() {
    return (
      <div className='peliculas'>

      {
          this.state.peliculas.map(peliculas => (
              <Card key={peliculas.id} peliculas={peliculas}/>)
            )
      }
      </div>
    )
  }
}

export default Peliculas;