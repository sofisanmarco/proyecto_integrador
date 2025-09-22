import React, {Component} from "react";
import Header from "../../Components/Header/Header";
import Movie from "../../Components/Movie/Movie";

class MoviesPlaying extends Component{
   constructor(props){
        super(props)
        this.state={data: []}
    }
    
    componentDidMount(){
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWQxNzUwYTU5YTMxZDFjZmY0MmI5NDZhYWE3MDQyZiIsIm5iZiI6MTc1ODM4MTcxMi43OTQsInN1YiI6IjY4Y2VjNjkwYzliZWIyZmZjYmQ0MTI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0oHwn2HqoqSvfFiPbgi8EH9XlPxWosViWUbgLIVoRT0'
            }
        };

        fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options)
        .then( response => response.json() )
        .then( data => this.setState({data: data.results, loading:false}))
        .catch( error => {console.log(error); this.setState({loading:false}) })
    }

    render(){

        if (this.state.loading){
            return <h3 className="Cargando">Cargando...</h3>
        }

        return(
        <div className ="container">
            <Header/>
            {this.state.data === "" ?
                    <h3> Cargando... </h3> :
                    <section class="row cards" id="now-playing">
                        {this.state.data.map((item, idx) => <Movie key = {item + idx} info = {item}/>)}
                    </section>}
        </div>

        )
    };
};


export default MoviesPlaying