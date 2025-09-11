import React from "react";

function Movie(props){
    <article class="single-card-movie">
                <img src={props.img} class="card-img-top"alt={props.name}/>
                <div class="cardBody">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.desc}</p>
                    <a href="movie.html" class="btn btn-primary">Ver más</a>
                </div>
            </article>
}

export default Movie;