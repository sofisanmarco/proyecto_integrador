import React, {Component} from "react";
import Header from "../../Components/Header/Header";
import DetalleDeSerie from "../../Components/DetalleDeSerie/DetalleDeSerie";

class SerieDetalle extends Component{
    constructor(props){
        super(props)
        this.state = {detalle: {}, id: props.match.params.id}
    }

    componentDidMount(){
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWQxNzUwYTU5YTMxZDFjZmY0MmI5NDZhYWE3MDQyZiIsIm5iZiI6MTc1ODM4MTcxMi43OTQsInN1YiI6IjY4Y2VjNjkwYzliZWIyZmZjYmQ0MTI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0oHwn2HqoqSvfFiPbgi8EH9XlPxWosViWUbgLIVoRT0'
            }
        };

        fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?language=en-US`, options)
        .then( response => response.json() )
        .then( detalle => this.setState({detalle}))
        .catch( error => console.log(error) );
        }
 
       render(){
        return(
            <div className="container">
                <h1>UdeSA Movies</h1>
                <Header/>
                <DetalleDeSerie detalle={this.state.detalle}/>
                
            </div>
        )
    };
};

export default SerieDetalle;
