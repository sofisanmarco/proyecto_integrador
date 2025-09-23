import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Serie from "../../Components/Serie/Serie";
import Movie from "../../Components/Movie/Movie";

class Favoritos extends Component {
constructor(props) {
    super(props);
    this.state = {
    peliculas: [],
    series: [],
    };
}

    componentDidMount(){
        
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGFkNTljMGNjMDA5MGE3MDFiZmFjYjg5M2Y2MmE4MyIsIm5iZiI6MTc1NzQ0OTc3Ny41NTksInN1YiI6IjY4YzA4ZTMxYmRiOGY3MzY2MjliZDNjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AE7116u_74D_hCFnsAHtj8OeB6PtVVgIVIU8VhMf_do'
            },
          };

        let recuperarPeliculas= localStorage.getItem('favoritosPelicula')
        let recuperarSeries= localStorage.getItem('favoritosSerie')
        
        if (recuperarPeliculas){        
            let parseoPelicula = JSON.parse(recuperarPeliculas)
            let favPelis = []
            parseoPelicula.map(fav => {
            const id = this.props.match.params.id

            fetch(`https://api.themoviedb.org/3/movie/${fav}?language=en-US`, options)
            .then( response => response.json())
            .then( data =>{favPelis.push(data) 
                this.setState({peliculas: favPelis})} )
            .catch( error =>	console.log('El error fue: ' + error))
        })
        } 

        if (recuperarSeries){
            let parseoSeries = JSON.parse(recuperarSeries)
            let favSeries = []
            parseoSeries.map(fav => {
            const id = this.props.match.params.id

            fetch(`https://api.themoviedb.org/3/tv/${fav}?language=en-US`, options)
            .then( response => response.json())
            .then( data =>{favSeries.push(data) 
                this.setState({series: favSeries})} )
            .catch( error =>	console.log('El error fue: ' + error))
        })
        } 
    }

    render(){
        return(
              <div className="container">
                <Header />
                    <h1>Favorite Movies</h1>
                    <section className="row cards all-movies">
                    {this.state.peliculas.map(peli => (<Movie key={peli.id} info={peli}/>))}
                    </section>

                    <h1>Favorite TV Shows </h1>
                    <section className="row cards all-movies">
                    
                    {this.state.series.map(serie => (<Serie key={serie.id} info={serie}/>))}
                </section>
                <Footer/>
            </div>
        )
    }
}

export default Favoritos;