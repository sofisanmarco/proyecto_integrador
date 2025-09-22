import React, {Component} from "react";
import {Link} from "react-router-dom/cjs/react-router-dom.min";

class Movie extends Component{
    constructor (props){
    super(props);
    this.state = {valor: props.value}}

    render(){
        return(
            <React.Fragment>
            <article className="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/original${this.props.info.poster_path}`} className="card-img-top"alt={this.props.info.name}/>
                <div className="cardBody">
                    <h5 className="card-title">{this.props.info.title}</h5>
                    <p className="card-text">{this.props.info.overview}</p>
                    <Link to={`/peliculas/${this.props.info.id}`} className="btn btn-primary">Details</Link>
                </div>
            </article>
            </React.Fragment>
        )
    }
}

export default Movie;