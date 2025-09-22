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
    boton: "Ver descripcion",
    };
}


switch = () => {
    this.setState((prev) => ({
    descripcion: !prev.descripcion,
    boton: prev.descripcion ? "Ver descripcion" : "Ocultar descripcion",
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
    <>
        <Header />

        <h2 className="alert alert-primary">Películas favoritas</h2>

        {peliculas.length === 0 ? (
        <p className="noFav">No tenes películas favoritas.</p>
        ) : (
        peliculas.map((peli) => {
            const id = peli.id;
            let titulo = peli.title;
            if (titulo === undefined) titulo = peli.titulo;
            if (titulo === undefined) titulo = 'Sin título';
            const poster = peli.poster_path;

            return (
            <section class="row cards" id="movies">
            <article className="single-card-movie" key={`movie-${id}`}>
                <img
                src={`https://image.tmdb.org/t/p/original${poster}`}
                className="card-img-top"
                alt={titulo}
                />
                <div className="cardBody">
                <h5 className="card-title">{titulo}</h5>

                {this.state.descripcion ? (
                    <p className="card-text">{peli.overview}</p>
                ) : (
                    ""
                )}

                <div>
                    <button
                    className="btn alert-primary"
                    onClick={this.switch}
                    >
                    {this.state.boton}
                    </button>
                </div>

                <Link to={`/peliculas/${id}`} className="btn btn-primary">
                    Ver más
                </Link>

                <div>
                    <button
                    className="btn alert-primary"
                    onClick={() => this.quitarDeFavoritos(id)}
                    title="Quitar de favoritos"
                    >
                    ♥️
                    </button>
                </div>
                </div>
            </article>
            </section>
            );
        })
        )}

        <h2 className="alert alert-warning">Series favoritas</h2>

        {series.length === 0 ? (
        <p className="noFav">No tenes series favoritas.</p>
        ) : (
        series.map((serie) => {
            const id = serie.id;
            let titulo = serie.name;
            if (titulo === undefined) titulo = serie.titulo;
            if (titulo === undefined) titulo = 'Sin título';
            const poster = serie.poster_path;

            return (
            <section class="row cards" id="movies">
            <article className="single-card-tv" key={`tv-${id}`}>
                <img
                src={`https://image.tmdb.org/t/p/original${poster}`}
                className="card-img-top"
                alt={titulo}
                />
                <div className="cardBody">
                <h5 className="card-title">{titulo}</h5>

                {this.state.descripcion ? (
                    <p className="card-text">{serie.overview}</p>
                ) : (
                    ""
                )}

                <div>
                    <button
                    className="btn alert-primary"
                    onClick={this.switch}
                    >
                    {this.state.boton}
                    </button>
                </div>

                <Link to={`/series/${id}`} className="btn btn-primary">
                    Ver más
                </Link>

                <div>
                    <button
                    className="btn alert-primary"
                    onClick={() => this.quitarDeFavoritos(id)}
                    title="Quitar de favoritos"
                    >
                    ♥️
                    </button>
                </div>
                </div>
            </article>
            </section>
            );
        })
        )}
    </></div>
    );
}
}

export default Favoritos;
