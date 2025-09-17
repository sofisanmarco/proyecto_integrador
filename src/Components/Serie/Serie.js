import React from "react";

function Serie(props){
    return(
        <React.Fragment>
            <article className="single-card-tv">
                    <img src={props.img} className="card-img-top" alt={props.nombre}/>
                    <div class="cardBody">
                        <h5 className="card-title">{props.nombre}</h5>
                        <p className="card-text">{props.desc}</p>
                        <a href="serie.html" className="btn btn-primary">Ver más</a>
                    </div>
                </article>
        </React.Fragment>
    )
};

export default Serie;