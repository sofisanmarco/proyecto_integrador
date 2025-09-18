import React from "react";

function SeriePopular(props){
    return(
        <React.Fragment>
             <article class="single-card-tv">
                <img src = {`https://image.tmdb.org/t/p/w500 ${props.img}`} className="card-img-top"alt= {props.name} />
                <div class="cardBody">
                    <h5 className="card-title">{props.name} </h5> 
                    <p className= "card-text"> {props.desc} </p>
                    <a href="serie.html" className="btn btn-primary">Ver más</a>
                    <a href="" className="btn alert-primary">♥️</a>
                </div>
             </article>
        </React.Fragment>
    )
}


export default SeriePopular