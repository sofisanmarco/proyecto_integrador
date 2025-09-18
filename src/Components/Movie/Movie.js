import React, {Component} from "react";

class Movie extends Component{
    constructor (props){
    super(props);
    this.state = {}}

    render(){
        return(
            <React.Fragment>
            <article className="single-card-movie">
                <img src={this.props.info.img} className="card-img-top"alt={this.props.info.name}/>
                <div className="cardBody">
                    <h5 className="card-title">{this.props.info.name}</h5>
                    <p className="card-text">{this.props.info.desc}</p>
                    <a href="movie.html" className="btn btn-primary">Ver más</a>
                </div>
            </article>
            </React.Fragment>
        )
    }
}

export default Movie;