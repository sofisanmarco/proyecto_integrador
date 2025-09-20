import React from "react";

class DetalleDePelicula extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <React.Fragment>
                <h2 className="alert alert-primary">Superman</h2>
            <section className="row">
                    <img className="col-md-6" src={this.props.info.img} alt=""/>
                <section className="col-md-6 info">
                    <h3>Descripción</h3>
                    <p className="description"> {this.props.info.desc}</p>
                    <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> 2025-07-09</p>
                    <p className="mt-0 mb-0 length"><strong>Duración:</strong> 130</p>
                    <p classNamw="mt-0" id="votes"><strong>Puntuación:</strong> 7.534</p>
                </section>
            </section>
            </React.Fragment>
        )
    }
}

export default DetalleDePelicula