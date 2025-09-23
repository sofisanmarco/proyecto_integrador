import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Movie extends Component{
    constructor (props){
    super(props);
    this.state = {descripcion: false, boton: "See Overview", favoritos: false}}

    switch(){
        if (this.state.descripcion == false){
            this.setState({
                descripcion: true,
                boton: "Close overview"
            }); 
            } else {
            this.setState({
                descripcion: false,
                boton: "See Overview"    
            }); 
        }
    };

    componentDidMount (){
        let recuperarfavs = localStorage.getItem('favoritosPelicula');
        if (recuperarfavs !== null) {
        let parseoFavs = JSON.parse(recuperarfavs);
        let filtrados = parseoFavs.filter(id => id == this.props.info.id);
        if (filtrados.length > 0) {
            this.setState({ favoritos: true });
        }
        }
    }

    agregarFavoritos(){
        let recuperarfavs = localStorage.getItem('favoritosPelicula');
        if (recuperarfavs === null){
            let arrayFavs= []
            arrayFavs.push(this.props.info.id)
            let arrayToString = JSON.stringify(arrayFavs)
            localStorage.setItem('favoritosPelicula', arrayToString)
        } else{
            let parseoFavs = JSON.parse(recuperarfavs)
            parseoFavs.push(this.props.info.id)
            let arrayToString = JSON.stringify(parseoFavs)
            localStorage.setItem('favoritosPelicula', arrayToString)
        }
        
        this.setState({
            favoritos: true
        }) 
    }

    quitarDeFavoritos(){
        let recuperarfavs = localStorage.getItem('favoritosPelicula');
        let parseoFavs = JSON.parse(recuperarfavs)
        let filtrados = parseoFavs.filter(id => id != this.props.info.id)
        let arrayToString = JSON.stringify(filtrados)
        localStorage.setItem('favoritosPelicula', arrayToString)
    
        this.setState({
        favoritos: false
        })
  
  }



    render(){
        return(
        <React.Fragment>
            <article className="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/original${this.props.info.poster_path}`} className="card-img-top" alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">{this.props.info.title}</h5>
                    
                    {this.state.descripcion ? (<p className="card-text">{this.props.info.overview}</p>) : ""}
                    <div><button className="btn alert-primary" onClick={() => this.switch() }>{this.state.boton}</button></div>

                    <Link to={`/peliculas/${this.props.info.id}`} className="btn btn-primary">Details</Link>

                    {this.state.favoritos ? <div ><button className="btn alert-primary" onClick={() => this.quitarDeFavoritos()} >♥️</button></div>
                    : <div><button className="btn alert-primary" onClick={() => this.agregarFavoritos()} >🩶</button></div>} 

                </div>
            </article>
        </React.Fragment>
    )
    };
};

export default Movie;