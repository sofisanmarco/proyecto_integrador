import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";

class Favoritos extends Component {
constructor(props) {
    super(props);
    this.state = {
    peliculas: [],
    series: [],
    descripcion: false,
    boton: "See Overview",
    };
}


switch = () => {
    this.setState((prev) => ({
    descripcion: !prev.descripcion,
    boton: prev.descripcion ? "See Overview" : "Close Overview",
    }));
};

componentDidMount() {
    this.cargarFavoritos();
}

cargarFavoritos = () => {
    const recuperarfavs = localStorage.getItem("favoritos");

    if (recuperarfavs === null) {
    this.setState({ peliculas: [], series: [] });
    return;
    }

    if (recuperarfavs === "") {
    this.setState({ peliculas: [], series: [] });
    return;
    }


    const parseoFavs = JSON.parse(recuperarfavs);

    const peliculas = parseoFavs.filter((it) => it && it.title);
    const series = parseoFavs.filter((it) => it && it.name);

    this.setState({ peliculas: peliculas, series: series });
};

quitarDeFavoritos = (id) => {
    const recuperarfavs = localStorage.getItem("favoritos");
    if (recuperarfavs === null) return;
    if (recuperarfavs === '') return;

    const parseoFavs = JSON.parse(recuperarfavs);
    const filtrados = parseoFavs.filter((item) => item.id !== id);
    localStorage.setItem('favoritos', JSON.stringify(filtrados));

    this.setState({
    peliculas: filtrados.filter((it) => it && it.title),
    series: filtrados.filter((it) => it && it.name),
    });
};

render() {
    
    const peliculas = this.state.peliculas;
    const series = this.state.series;

    return (
        <div class="container">
        <Header />

        <h2 className="alert alert-primary">Favorite Movies</h2>

        {peliculas.length === 0 ? (<p className="noFav">You dont have favorite movies.</p>) 
        : (peliculas.map((peli) => {
            return (
                <section class="row cards" id="movies">
                    <article className="single-card-movie" key={`movie-${peli.id}`}>
                        <img className="card-img-top" src={`https://image.tmdb.org/t/p/original${peli.poster_path}`} alt={peli.title}/>
                        
                        <div className="cardBody">
                            <h5 className="card-title">{peli.title}</h5>

                            {this.state.descripcion ? (<p className="card-text">{peli.overview}</p>) : ""}
                            <div>
                                <button className="btn alert-primary" onClick={this.switch}>{this.state.boton}</button>
                            </div>
                            <Link to={`/peliculas/${peli.id}`} className="btn btn-primary">Details</Link>

                            <div>
                                <button className="btn alert-primary" onClick={() => this.quitarDeFavoritos(peli.id)} title="Quitar de favoritos">♥️</button>
                            </div>
                        </div>
                    </article>
                </section>
            );
            })
        )}

        <h2 className="alert alert-warning">Favorite TV shows</h2>

        {series.length === 0 ? (<p className="noFav">You dont have favorite TV shows.</p>
        ) : (
        series.map((serie) => {
            return (
                <section class="row cards" id="movies">
                    <article className="single-card-tv" key={`tv-${serie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/original${serie.poster_path}`} className="card-img-top" alt={serie.name}/>
                        <div className="cardBody">
                            <h5 className="card-title">{serie.name}</h5>
                            {this.state.descripcion ? (<p className="card-text">{serie.overview}</p>) : ""}
                            <div>
                                <button className="btn alert-primary" onClick={this.switch}>{this.state.boton}</button>
                            </div>
                            <Link to={`/series/${serie.id}`} className="btn btn-primary">Details</Link>
                            <div>
                                <button className="btn alert-primary" onClick={() => this.quitarDeFavoritos(serie.id)} title="Quitar de favoritos">♥️</button>
                            </div>
                        </div>
                    </article>
                </section>
            );
        })
        )}
    </div>
    );
}
}

export default Favoritos;
