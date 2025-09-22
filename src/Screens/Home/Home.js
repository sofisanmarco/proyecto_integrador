import React, {Component} from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Buscador from "../../Components/Buscador/Buscador";
import Serie from "../../Components/Serie/Serie";
import Movie from "../../Components/Movie/Movie"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {topMovies: [], popularSeries: [], popularMovies: [], topSeries: []}
    }

    componentDidMount(){
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWQxNzUwYTU5YTMxZDFjZmY0MmI5NDZhYWE3MDQyZiIsIm5iZiI6MTc1ODM4MTcxMi43OTQsInN1YiI6IjY4Y2VjNjkwYzliZWIyZmZjYmQ0MTI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0oHwn2HqoqSvfFiPbgi8EH9XlPxWosViWUbgLIVoRT0'
            }
        };

        fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
        .then( response => response.json() )
        .then( topMovies => this.setState({topMovies: topMovies.results.filter((pelicula, idx) => idx < 4), loading:false}))
        .catch( error => {console.log(error); this.setState({loading:false}) });;

        fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options)
        .then( response => response.json() )
        .then( popularMovies => this.setState({popularMovies: popularMovies.results.filter((pelicula, idx) => idx < 4), loading:false}))
        .catch( error => {console.log(error); this.setState({loading:false}) });;

        fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", options)
        .then( response => response.json() )
        .then( popularSeries => this.setState({popularSeries: popularSeries.results.filter((serie, idx) => idx < 4), loading:false}))
        .catch( error => {console.log(error); this.setState({loading:false}) });

        fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1", options)
        .then( response => response.json() )
        .then( topSeries => this.setState({topSeries: topSeries.results.filter((serie, idx) => idx < 4), loading:false}))
        .catch( error => {console.log(error); this.setState({loading:false}) });
 
    };



render(){
    console.log(this.state.topMovies);
    
    return(
            <div class="container">
                <Header/>
                <Buscador/>
                    <main>
                        <Link to={"/peliculas"}><h2 class="alert alert-primary">Top rated Movies</h2></Link>
                        <section class="row cards" id="movies">
                            {this.state.topMovies.map(peli => {
                                return <Movie info={peli} />
                            })}
                        </section>

                        <Link to={"/popularMovies"}><h2 class="alert alert-primary">Popular Movies this week</h2></Link>
                        <section class="row cards" id="movies">
                        {this.state.popularMovies.map(peli => {
                            return <Movie info={peli} />
                        })}
                        </section>

                        <Link to={"/topSeries"}><h2 className="alert alert-warning">Top rated TV shows</h2></Link>
                        <section class="row cards" id="movies">
                        {this.state.topSeries.map(peli => {
                            return <Serie info={peli} />
                        })}
                        </section>

                        <Link to={"/series"}> <h2 className="alert alert-warning">Popular TV shows this week</h2></Link> 
                        <section class="row cards" id="movies">
                        {this.state.popularSeries.map(peli => {
                            return <Serie info={peli} />
                        })}
                        </section>
                    
                    </main>
                <Footer/>
            </div>

            
    )}
}

export default Home;