import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class DetalleDeSerie extends Component{
    constructor(props){
        super(props)
        this.state = { favoritos: false}}

    componentDidMount (){
        let recuperarfavs = localStorage.getItem('favoritosPelicula');
        if (recuperarfavs !== null) {
        let parseoFavs = JSON.parse(recuperarfavs);
        let filtrados = parseoFavs.filter(id => id == this.props.detalle.id);
        if (filtrados.length > 0) {
            this.setState({ favoritos: true });
        }
        }
    }

    agregarFavoritos(){
        let recuperarfavs = localStorage.getItem('favoritosSerie');
        if (recuperarfavs === null){
            let arrayFavs= []
            arrayFavs.push(this.props.detalle.id)
            let arrayToString = JSON.stringify(arrayFavs)
            localStorage.setItem('favoritosSerie', arrayToString)
        } else{
            let parseoFavs = JSON.parse(recuperarfavs)
            parseoFavs.push(this.props.detalle.id)
            let arrayToString = JSON.stringify(parseoFavs)
            localStorage.setItem('favoritosSerie', arrayToString)
        }
        
        this.setState({
            favoritos: true
        }) 
    }

    quitarDeFavoritos(){
        let recuperarfavs = localStorage.getItem('favoritosSerie');
        let parseoFavs = JSON.parse(recuperarfavs)
        let filtrados = parseoFavs.filter(id => id != this.props.detalle.id)
        let arrayToString = JSON.stringify(filtrados)
        localStorage.setItem('favoritosSerie', arrayToString)
    
        this.setState({
        favoritos: false
        })
  
  }


    render(){
        return(
            <React.Fragment>
                <h2 className="alert alert-warning">{this.props.detalle.name}</h2>
                <section className="row">
                    <section className="col-md-6 info">
                        <h3>Overview</h3>
                        <p className="description">{this.props.detalle.overview}</p>
                        <p class="mt-0 mb-0" id="release-date"><strong>Rating:</strong>{this.props.detalle.vote_average}</p>
                        <p class="mt-0 mb-0" id="release-date"><strong>Release Date:</strong>{this.props.detalle.first_air_date}</p>
                        <p class="mt-0 mb-0" id="release-date"><strong>Genre:</strong>{this.props.detalle.genre}</p>
                        <p class="mt-0 mb-0" id="episodes"><strong>Number of Episodes:</strong> {this.props.detalle.number_of_episodes}</p>
                        <p class="mt-0 seasons"><strong>Seasons:</strong> {this.props.detalle.number_of_seasons}</p>
                        
                    {this.state.favoritos ? <div ><button className="btn alert-primary" onClick={() => this.quitarDeFavoritos()} >♥️</button></div>
                    : <div><button className="btn alert-primary" onClick={() => this.agregarFavoritos()} >🩶</button></div>} 
                    </section>
                    <img class="col-md-6" src={`https://image.tmdb.org/t/p/original${this.props.detalle.poster_path}`} alt=""/>
                </section>
            </React.Fragment>
        )
    }
};

export default DetalleDeSerie;