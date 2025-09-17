import React from "react";

function Movie(props){
    <article className="single-card-movie">
                <img src={props.img} className="card-img-top"alt={props.name}/>
                <div className="cardBody">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.desc}</p>
                    <a href="movie.html" className="btn btn-primary">Ver más</a>
                </div>
            </article>
}

export default Movie;