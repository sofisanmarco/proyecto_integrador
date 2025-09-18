import React, {Component} from "react";

class SeriePopular extends Component{
    constructor (props){
    super(props);
    this.state = {}}

    render(){
        return(
        <React.Fragment>
             <article class="single-card-tv">
                <img src = {this.props.info.img} className="card-img-top"alt= {this.props.info.name} />
                <div class="cardBody">
                    <h5 className="card-title">{this.props.info.name} </h5> 
                    <p className= "card-text"> {this.props.info.desc} </p>
                    <a href="serie.html" className="btn btn-primary">Ver más</a>
                    <a href="" className="btn alert-primary">♥️</a>
                </div>
             </article>
        </React.Fragment>
    )
    }
}


export default SeriePopular