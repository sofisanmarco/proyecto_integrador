import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class DetalleDeSerie extends Component{
    constructor(props){
        super(props)
        this.state = { favoritos: false}}

        agregarFavoritos(){
        this.setState({
            favoritos: true
        })

        let recuperarFavoritos = localStorage.getItem('favoritos')

        if(recuperarFavoritos == null){
            let arrayFavs = []
            arrayFavs.push(this.props.info)
            let arrayToString = JSON.stringify(arrayFavs)
            localStorage.setItem('favoritos', arrayToString)
        } 
        else {
            let parseoFavs = JSON.parse(recuperarFavoritos)
            parseoFavs.push(this.props.info)
            let arrayToString = JSON.stringify(parseoFavs) 
            localStorage.setItem('favoritos', arrayToString)
        }
    };

    quitarDeFavoritos(){
        let recuperarfavs = localStorage.getItem('favoritos');
        let parseoFavs = JSON.parse(recuperarfavs)
        let filtrados = parseoFavs.filter(item => item.id != this.props.info.id)
        let arrayToString = JSON.stringify(filtrados)
        localStorage.setItem('favoritos', arrayToString)

        this.setState({
            favoritos: false
        })
    };

    componentDidMount(){
        let recuperarfavs = localStorage.getItem('favoritos')
    };


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