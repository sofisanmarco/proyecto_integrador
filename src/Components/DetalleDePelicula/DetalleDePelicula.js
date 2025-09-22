import React, {Component} from "react";


class DetalleDePelicula extends Component{
    constructor(props){
        super(props)
        this.state = {favoritos: false}
    }

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
                <h2 className="alert alert-primary">{this.props.detalle.title}</h2>
            <section className="row">
                    <img className="col-md-6" src={`https://image.tmdb.org/t/p/original${this.props.detalle.poster_path}`} alt=""/>
                <section className="col-md-6 info">
                    <h3>Overview</h3>
                    <p className="description"> {this.props.detalle.overview}</p>
                    <p className="mt-0 mb-0" id="release-date"><strong>Release Date:</strong> {this.props.detalle.release_date}</p>
                    <p className="mt-0 mb-0 length"><strong>Runtime:</strong> {this.props.detalle.runtime}</p>
                    <p classNamw="mt-0" id="votes"><strong>Rating:</strong> {this.props.detalle.vote_average}</p>
                    <p classNamw="mt-0" id="votes"><strong>Genere:</strong> </p>
                    
                    {this.state.favoritos ? <div ><button className="btn alert-primary" onClick={() => this.quitarDeFavoritos()} >♥️</button></div>
                    : <div><button className="btn alert-primary" onClick={() => this.agregarFavoritos()} >🩶</button></div>}
                </section>
            </section>
            </React.Fragment>
        )
    }
}

export default DetalleDePelicula