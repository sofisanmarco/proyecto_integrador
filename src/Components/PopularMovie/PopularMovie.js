import React from "react";

function PopularMovie(props){
    return(
        <React.Fragment>
            <article className="single-card-movie">
                <img src={props.img} className="card-img-top" alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.desc}</p>
                    <a href="movie.html" className="btn btn-primary">Ver más</a>
                    <a href="" className="btn alert-primary">🩶</a>
                </div>
            </article>
        </React.Fragment>
    )
};

export default PopularMovie