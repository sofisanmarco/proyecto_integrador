import React, {Component} from "react";
import SeriePopular from "../SeriePopular/SeriePopular";

class SeriesPopulares extends Component{
    constructor (props){
    super(props);
    this.state = {data: []}}

     componentDidMount(){
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWQxNzUwYTU5YTMxZDFjZmY0MmI5NDZhYWE3MDQyZiIsIm5iZiI6MTc1ODM4MTcxMi43OTQsInN1YiI6IjY4Y2VjNjkwYzliZWIyZmZjYmQ0MTI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0oHwn2HqoqSvfFiPbgi8EH9XlPxWosViWUbgLIVoRT0'
            }
        };

        fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1 ", options)
        .then( response => response.json() )
        .then( data => this.setState({data: data.results.filter((serie, idx) => idx < 4)}))
        .catch( error => console.log(error) );
    }


    render(){

        return(
            <div>
            {this.state.data === "" ?
                    <h3> Cargando... </h3> :
                    <section class="row cards" id="movies">
                        {this.state.data.map((item, idx) => <SeriePopular key = {item + idx} info = {item}/>)}
                    </section>}
        </div>
        )
    }
}

export default SeriesPopulares