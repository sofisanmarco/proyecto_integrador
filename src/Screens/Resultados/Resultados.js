import React, {Component} from "react";
import SeriePopular from "../../Components/SeriePopular/SeriePopular";
import PopularMovie from "../../Components/PopularMovie/PopularMovie";

class Resultados extends Component{
    constructor(props){
        super(props);
        this.state={
            resultados:[],
            loading:true
        };
    }
}

componentDidMount(){

}

render(){

    if (this.state.loading){
        return <h3 className="Cargando">Cargando...</h3>
    }

    if (this.state.resultados.length === 0){
        return <p className="Cargando">No se encontraron resultados</p>
    }

    return(
        <div>

            <h2 className="error404" >Resultados de busqueda</h2>
            <section className="row cards">

                {this.state.resultados.map((item, idx)=>this.state.tipo==="serie" ? (<SeriePopular key={item.id + idx} info={item}/>):(<PopularMovie key={item.id + idx} info={item}/>)  )}

            </section>
        </div>
    )
}