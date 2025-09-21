import React, { Component } from "react";
import { Link } from "react-router-dom";

const AUTH_HEADER = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmUxNDZjMWIwMmUxZmI5ODZmNzEyYWM1ZDQ5NzcyYSIsIm5iZiI6MTc1Nzk2MzgzOS43MzksInN1YiI6IjY4Yzg2NjNmYmMzYjEzYWZlZGEwZjdjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GTkMeloFBEw22Du7AOtng1Dq8vMR7_XTB6txsWNiw9o";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default class PlayingMovies extends Component {
    constructor(props) {
        super(props);

        const raw = localStorage.getItem("favorites");
        let favs = [];

        if (raw !== null) {
            const firstChar = raw.charAt(0);
            if (firstChar === "[") {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) {
                    favs = parsed;
                }
            } else if (firstChar === "{") {
                const parsedObj = JSON.parse(raw);
                if (Array.isArray(parsedObj)) {
                    favs = parsedObj;
                }
            }
        }

        this.state = {
            movies: [],
            loading: true,
            expandedIds: [],
            favorites: favs
        };
    }

    componentDidMount() {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: AUTH_HEADER
            }
        };

        fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options)
            .then((res) => res.json())
            .then((json) => {
                const results = (json && json.results) ? json.results : [];
                this.setState({ movies: results, loading: false });
            })
            .catch((err) => {
                console.error("Error fetching now playing movies:", err);
                this.setState({ movies: [], loading: false });
            });
    }

    toggleExpanded = (id) => {
        this.setState((prev) => {
            const exists = prev.expandedIds.includes(id);
            return exists
                ? { expandedIds: prev.expandedIds.filter((x) => x !== id) }
                : { expandedIds: [...prev.expandedIds, id] };
        });
    }

    toggleFavorite = (id) => {
        this.setState((prev) => {
            const isFav = prev.favorites.includes(id);
            const updated = isFav
                ? prev.favorites.filter((x) => x !== id)
                : [...prev.favorites, id];
            return { favorites: updated };
        }, () => {
            localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
        });
    }

    takeFirst(arr, n) {
        return arr.slice(0, n);
    }

    renderCard(movie) {
        // Usar imagen de la API si existe; si no, caer a la imagen default
        let imgUrl = "/assets/img/imagendefault.png";
        if (movie && movie.poster_path) {
            imgUrl = IMAGE_BASE + movie.poster_path;
        } else if (movie && movie.backdrop_path) {
            imgUrl = IMAGE_BASE + movie.backdrop_path;
        }

        const isExpanded = this.state.expandedIds.includes(movie.id);
        const isFav = this.state.favorites.includes(movie.id);

        return (
            <article key={movie.id} className="single-card-playing">
                <img
                    src={imgUrl}
                    className="card-img-top"
                    alt={movie.title}
                    onError={(e) => { e.target.src = "/assets/img/imagendefault.png"; }}
                />
                <div className="cardBody">
                    <h5 className="card-title">{movie.title}</h5>

                    { isExpanded ? <p className="card-text">{movie.overview ? movie.overview : "Sin descripción."}</p> : null }

                    <Link to={"/peliculas/" + movie.id} className="btn btn-primary">Ver más</Link>

                    <a
                        href="#"
                        className="btn alert-primary"
                        aria-pressed={isFav}
                        onClick={(e) => { e.preventDefault(); this.toggleFavorite(movie.id); }}
                    >
                        { isFav ? "💗" : "🩶" }
                    </a>

                    <button onClick={() => this.toggleExpanded(movie.id)} className="btn btn-link">
                        { isExpanded ? "Ocultar descripción" : "Ver descripción" }
                    </button>
                </div>
            </article>
        );
    }

    render() {
        const moviesToShow = this.takeFirst(this.state.movies, 4);

        return (
            <section className="row cards" id="now-playing">
                { this.state.loading ? <p>Cargando...</p> :
                    ( moviesToShow.length === 0 ? <p>No hay resultados.</p> :
                        moviesToShow.map((m) => this.renderCard(m))
                    )
                }
            </section>
        );
    }
}
