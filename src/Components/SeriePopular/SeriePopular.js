import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class SeriePopular extends Component{
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
            <article class="single-card-tv">
                <img src={`https://image.tmdb.org/t/p/original${this.props.info.poster_path}`} className="card-img-top"alt= "..." />
                <div class="cardBody">
                    <h5 className="card-title">{this.props.info.name} </h5> 
                    {this.state.descripcion ? (<p className="card-text">{this.props.info.overview}</p>) : ""}
                    <div><button className="btn alert-primary" onClick={() => this.switch() }>{this.state.boton}</button></div>

                    <Link to={`/series/${this.props.info.id}`} className="btn btn-primary">Details</Link>

                    {this.state.favoritos ? <div ><button className="btn alert-primary" onClick={() => this.quitarDeFavoritos()} >♥️</button></div>
                    : <div><button className="btn alert-primary" onClick={() => this.agregarFavoritos()} >🩶</button></div>} 

                </div>
            </article>
        </React.Fragment>
    )
    }
}


export default SeriePopular