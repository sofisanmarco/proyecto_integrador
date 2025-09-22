import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class PlayingMovie extends Component{
    constructor (props){
    super(props);
    this.state = {descripcion: false, boton: "Ver descripcion", favs: false}}

    switch(){
        if (this.state.descripcion == false){
            this.setState({
                descripcion: true,
                boton: "Ocultar descripcion"
            }); 
            } else {
            this.setState({
                descripcion: false,
                boton: "Ver descripcion"    
            }); 
        }
    };

    render(){
        return(
            <article className="single-card-playing">
                    <img src={`https://image.tmdb.org/t/p/w342/${this.props.info.poster_path}`} class="card-img-top" alt="..."/>
                    <div className="cardBody">
                        <h5 className="card-title">{this.props.info.title}</h5>

                        {this.state.descripcion ? (<p className="card-text">{this.props.info.overview}</p>) : ""}
                        <div><button className="btn alert-primary" onClick={() => this.switch() }>{this.state.boton}</button></div>

                        <Link to={`/peliculas/${this.props.info.id}`} className="btn btn-primary">Ver más</Link>
                        <a href="" className="btn alert-primary">🩶</a>
                    </div>
                </article>
        )
    }

};

export default PlayingMovie