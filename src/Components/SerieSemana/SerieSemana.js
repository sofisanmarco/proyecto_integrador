import React from "react";

function SerieSemana(props){
    return(
        <React.Fragment>
        <article className="single-card-on-air mb-3">
                <img src={props.img} className="card-img-top" alt={props.name}/>
                <div className="cardBody">
                    <h5 className="card-title"> {props.name} </h5>
                    <p className="card-text"> {props.desc} </p>
                    <a href="serie.html" className="btn btn-primary">Ver más</a>
                    <a href="" className="btn alert-primary">🩶</a>
                </div>
            </article>
            </React.Fragment>
    )
}


export default SerieSemana