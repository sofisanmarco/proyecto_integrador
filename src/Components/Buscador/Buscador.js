import React,{Component} from "react";
import { withRouter } from "react-router-dom";

class Buscador extends Component{
    constructor(props) {
        super(props);
        this.state ={
            valor:"",
            tipo:"pelicula"
        };
    }

    evitarSubmit = (evento => {
        evento.preventDefault();
        this.props.history.push(`/resultados?query=${this.state.valor}&type=${this.state.tipo}`)
    });

    controlarCambios = (event=> {
    this.setState({valor: event.target.value});
    });

    controlarTipo = (event=> {
    this.setState({tipo: event.target.value});
    });

    render(){
        return(
            <form onSubmit={this.evitarSubmit} className="search-form">

                <input
                    type="text"
                    className=""
                    name="searchData"
                    placeholder="Buscar..."
                    onChange={this.controlarCambios}
                    value={this.state.valor}
                />

                <select onChange={this.controlarTipo} value={this.state.tipo}>
                    <option value="pelicula">Peliculas</option>
                    <option value="serie">Series</option>
                </select>

                <button type="submit" className="btn btn-success btn-sm">Buscar</button>

            </form>
        )
    }

}
    
export default withRouter(Buscador);
