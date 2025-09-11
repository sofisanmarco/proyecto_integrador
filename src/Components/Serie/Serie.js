import React from "react";

function Serie(props){
    return(
        <React.Fragment>
            <article class="single-card-tv">
                    <img src={props.img} class="card-img-top" alt={props.nombre}/>
                    <div class="cardBody">
                        <h5 class="card-title">{props.nombre}</h5>
                        <p class="card-text">{props.desc}</p>
                        <a href="serie.html" class="btn btn-primary">Ver más</a>
                    </div>
                </article>
        </React.Fragment>
    )
};

export default Serie