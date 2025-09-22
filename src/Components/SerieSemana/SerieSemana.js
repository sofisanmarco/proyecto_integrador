import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class SerieSemana extends Component{
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
        <React.Fragment>
            <article className="single-card-on-air mb-3">
                    <img src={`https://image.tmdb.org/t/p/w342/${this.props.info.poster_path}`} className="card-img-top" alt="..."/>
                    <div className="cardBody">
                        <h5 className="card-title"> {this.props.info.name} </h5>

                        {this.state.descripcion ? (<p className="card-text">{this.props.info.overview}</p>) : ""}
                        <div><button className="btn alert-primary" onClick={() => this.switch() }>{this.state.boton}</button></div>

                        <Link to={`/series/${this.props.info.id}`} className="btn btn-primary">Ver más</Link>
                        <a href="" className="btn alert-primary">🩶</a>
                    </div>
                </article>
            </React.Fragment>
    )
    }
}


export default SerieSemana