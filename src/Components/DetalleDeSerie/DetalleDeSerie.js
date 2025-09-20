import React, {Component} from "react";

class DetalleDeSerie extends Component{
    constructor(props){
        super(props)
        this.state ={}
    }

    render(){
        return(
            <React.Fragment>
                <h2 className="alert alert-warning">{this.props.info.name}</h2>
                <section className="row">
                    <section className="col-md-6 info">
                        <h3>Descripción</h3>
                        <p className="description">{this.props.info.desc}</p>
                        <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> 2025-08-27</p>
                        <p class="mt-0 mb-0" id="episodes"><strong>Número de capítulos:</strong> 7</p>
                        <p class="mt-0 seasons"><strong>Temporadas:</strong> 1</p>
                    </section>
                    <img class="col-md-6" src={this.props.info.img} alt=""/>
                </section>
            </React.Fragment>
        )
    }
};

export default DetalleDeSerie;