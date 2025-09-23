import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Movies from "../../Components/Movies/Movies";
import Series from "../../Components/Series/Series";
import Footer from "../../Components/Footer/Footer";

class Favoritos extends Component {
constructor(props) {
    super(props);
    this.state = {
    peliculas: [],
    series: [],
    };
}

    componentDidMount(){
        let recuperarPeliculas= localStorage.getItem('favoritosPelicula')
        let parseoPelicula = JSON.parse(recuperarPeliculas)

        let recuperarSeries= localStorage.getItem('favoritosSerie')
        let parseoSeries = JSON.parse(recuperarSeries)

        
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGFkNTljMGNjMDA5MGE3MDFiZmFjYjg5M2Y2MmE4MyIsIm5iZiI6MTc1NzQ0OTc3Ny41NTksInN1YiI6IjY4YzA4ZTMxYmRiOGY3MzY2MjliZDNjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AE7116u_74D_hCFnsAHtj8OeB6PtVVgIVIU8VhMf_do'
         },
          };

        let favPelis = []
        parseoPelicula.map(id => {
            fetch("https://api.themoviedb.org/3/account/null/favorite/movies?language=en-US&page=1&sort_by=created_at.asc ", options)
            .then( response => response.json())
            .then( data =>{favPelis.push(data) 
                this.setState({peliculas: favPelis})} )
            .catch( error =>	console.log('El error fue: ' + error))
        })

        let favSeries = []
        parseoSeries.map(id => {
            fetch("https://api.themoviedb.org/3/account/null/favorite/tv?language=en-US&page=1&sort_by=created_at.asc ", options)
            .then( response => response.json())
            .then( data =>{favSeries.push(data) 
                this.setState({series: favSeries})} )
            .catch( error =>	console.log('El error fue: ' + error))
        })

    }

    render(){
        return(
              <div className="container">
                <h1>The Watchlist</h1>
        <Header />
            <h1>Favorite Movies</h1>
        <section className="row cards all-movies">
            {this.state.peliculas.map(peli => (<Movies key={peli.id} data={peli} info={peli} borrar={this.props.borrar}/>))}
             </section>

            <h1>Favorite TV Shows </h1>
            <section className="row cards all-movies">
            
              {this.state.series.map(serie => (<Series key={serie.id} data={serie} info={serie} borrar={this.props.borrar} />))}
          </section>
          <Footer/>
    </div>

        )
    }




}

export default Favoritos;
