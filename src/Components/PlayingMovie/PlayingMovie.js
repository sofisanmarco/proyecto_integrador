import React from "react";

function PlayingMovie(props){
    return(
        <article className="single-card-playing">
                <img src={props.img} class="card-img-top" alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">{props.desc}</p>
                    <a href="movie.html" className="btn btn-primary">Ver más</a>
                    <a href="" className="btn alert-primary">🩶</a>
                </div>
            </article>
    )
};

export default PlayingMovie