import React, {Component} from "react";

class Filtrar extends Component{
    constructor(props){
        super(props)
        this.state = {valor: ""}
    }

    evitarSubmit(event) {
        event.preventDefault();
    };

    controlarCambios(event) {
        this.setState({valor: event.target.value}, () => this.props.filtrar(this.state.valor));
    };

    render(){
        return(
            <form className="search-form" onSubmit={(event)=>this.evitarSubmit(event)}>
                <label>Title: </label>
                <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
            </form>
        )
    }
};

export default Filtrar;
