import React, {Component} from "react";

class PlayingMovie extends Component{
    constructor (props){
    super(props);
    this.state = {}}

    render(){
        return(
            <article className="single-card-playing">
                    <img src={this.props.info.img} class="card-img-top" alt="..."/>
                    <div className="cardBody">
                        <h5 className="card-title">{this.props.info.nombre}</h5>
                        <p className="card-text">{this.props.info.desc}</p>
                        <a href="movie.html" className="btn btn-primary">Ver más</a>
                        <a href="" className="btn alert-primary">🩶</a>
                    </div>
                </article>
        )
    }

};

export default PlayingMovie