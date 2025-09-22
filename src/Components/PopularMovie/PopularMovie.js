import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./PopularMovie.css"

class PopularMovie extends Component{
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

    agregarFavoritos(){
        this.setState({
            favs: true
        })

        let recuperarFavoritos = localStorage.getItem('favoritos')

        if(recuperarFavoritos == null){
            let arrayFavs = []
            arrayFavs.push(this.props.info.id)
            let arrayToString = JSON.stringify(arrayFavs)
            localStorage.setItem('favoritos', arrayToString)
        } 
        else {
            let parseoFavs = JSON.parse(recuperarFavoritos)
            parseoFavs.push(this.props.info.id)
            let arrayToString = JSON.stringify(parseoFavs) 
            localStorage.setItem('favoritos', arrayToString)
        }
    };

    quitarDeFavoritos(){
        let recuperarfavs = localStorage.getItem('favoritos');
        let parseoFavs = JSON.parse(recuperarfavs)
        let filtrados = parseoFavs.filter(id => id != this.props.info.id)
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
            <article className="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/original${this.props.info.poster_path}`} className="card-img-top" alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">{this.props.info.title}</h5>
                    
                    {this.state.descripcion ? (<p className="card-text">{this.props.info.overview}</p>) : ""}
                    <div><button className="btn alert-primary" onClick={() => this.switch() }>{this.state.boton}</button></div>

                    <Link to={`/peliculas/${this.props.info.id}`} className="btn btn-primary">Ver más</Link>

                    {this.state.favoritos ? <div ><button className="btn alert-primary" onClick={() => this.quitarDeFavoritos()} >♥️</button></div>
                    : <div><button className="btn alert-primary" onClick={() => this.agregarFavoritos()} >🩶</button></div>} 

                </div>
            </article>
        </React.Fragment>
    )
    };
};

export default PopularMovie