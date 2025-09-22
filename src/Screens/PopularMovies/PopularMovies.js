import React, {Component} from "react";
import Header from "../../Components/Header/Header";
import Movie from "../../Components/Movie/Movie";

class PopularMovies extends Component{
    constructor(props){
        super(props)
        this.state = {data: [], valor: "", boton: "Cargar más", page: 1, loading: true}
    }

    componentDidMount(){
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWQxNzUwYTU5YTMxZDFjZmY0MmI5NDZhYWE3MDQyZiIsIm5iZiI6MTc1ODM4MTcxMi43OTQsInN1YiI6IjY4Y2VjNjkwYzliZWIyZmZjYmQ0MTI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0oHwn2HqoqSvfFiPbgi8EH9XlPxWosViWUbgLIVoRT0'
            }
        };

        fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options)
        .then( response => response.json() )
        .then( data => this.setState({data: data.results, loading:false}))
        .catch( error => {console.log(error); this.setState({loading:false}) });;
    };

    masPeliculas(){
            const nextPage = this.state.page + 1;
            const options ={
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWQxNzUwYTU5YTMxZDFjZmY0MmI5NDZhYWE3MDQyZiIsIm5iZiI6MTc1ODM4MTcxMi43OTQsInN1YiI6IjY4Y2VjNjkwYzliZWIyZmZjYmQ0MTI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0oHwn2HqoqSvfFiPbgi8EH9XlPxWosViWUbgLIVoRT0'
                }
            };

            fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${nextPage}`, options)
            .then((response) => response.json())
            .then(data => this.setState({
                data: this.state.data.concat(data.results),
                page: nextPage
        }))
            .catch((error) => console.log('El error fue: ' + error));
    }

    render(){
        return(
            <div class="container">
                <Header/>
                <h2 class="alert alert-primary">Popular Movies this week</h2>

                {this.state.data === "" ?
                    <h3> Cargando... </h3> :
                    <section className="row cards all-movies" id="movies">
                        {this.state.data.map((item,idx) => <Movie key = {item + idx} info = {item}/>)}
                    </section>}
                
                <div className="cargarMasContainer"> <button className="cargarMas" onClick={() => this.masPeliculas()}> Cargar mas </button> </div>
            </div>
        )
    }
}

export default PopularMovies;