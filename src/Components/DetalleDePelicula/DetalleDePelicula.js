import React, {Component} from "react";


class DetalleDePelicula extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <React.Fragment>
                <h2 className="alert alert-primary">{this.props.detalle.title}</h2>
            <section className="row">
                    <img className="col-md-6" src={`https://image.tmdb.org/t/p/original${this.props.detalle.poster_path}`} alt=""/>
                <section className="col-md-6 info">
                    <h3>Descripción</h3>
                    <p className="description"> {this.props.detalle.overview}</p>
                    <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.props.detalle.release_date}</p>
                    <p className="mt-0 mb-0 length"><strong>Duración:</strong> {this.props.detalle.runtime}</p>
                    <p classNamw="mt-0" id="votes"><strong>Puntuación:</strong> {this.props.detalle.vote_average}</p>
                    <p classNamw="mt-0" id="votes"><strong>Genero:</strong> </p>
                </section>
            </section>
            </React.Fragment>
        )
    }
}

export default DetalleDePelicula