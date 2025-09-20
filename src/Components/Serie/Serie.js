import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Serie extends Component{
    constructor (props){
    super(props);
    this.state = {valor: props.value}}

    render(){
        return(
        <React.Fragment>
            <article className="single-card-tv">
                    <img src={this.props.info.img} className="card-img-top" alt={this.props.info.nombre}/>
                    <div class="cardBody">
                        <h5 className="card-title">{this.props.info.nombre}</h5>
                        <p className="card-text">{this.props.info.desc}</p>
                        <Link to={`/series/${this.props.info.id}`} className="btn btn-primary">Ver más</Link>
                    </div>
                </article>
        </React.Fragment>
    )
    }
};

export default Serie;