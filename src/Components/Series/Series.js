import React, {Component} from "react";
import Serie from "../Serie/Serie";

class Series extends Component{
    constructor (props){
    super(props);
    this.state = {valor: "", data: [], boton:"Cargar mas" ,page:1, loading:true}}

    /*componentDidMount(){
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWQxNzUwYTU5YTMxZDFjZmY0MmI5NDZhYWE3MDQyZiIsIm5iZiI6MTc1ODM4MTcxMi43OTQsInN1YiI6IjY4Y2VjNjkwYzliZWIyZmZjYmQ0MTI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0oHwn2HqoqSvfFiPbgi8EH9XlPxWosViWUbgLIVoRT0'
            }
        };

        fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", options)
        .then( response => response.json() )
        .then( data => this.setState({data: data.results, loading:false}))
        .catch( error => {console.log(error); this.setState({loading:false}) });;
    }*/

    evitarSubmit(event) {
        event.preventDefault();
    };

    controlarCambios(event) {
        this.setState({valor: event.target.value});
    };

    filtrarPersonajes(valor){
        return this.state.data.filter(personaje => personaje.name.toLowerCase().includes(valor.toLowerCase()) );
        }
    
    masSeries(){
        const nextPage = this.state.page + 1;
        const options = {
            method: "GET",
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWQxNzUwYTU5YTMxZDFjZmY0MmI5NDZhYWE3MDQyZiIsIm5iZiI6MTc1ODM4MTcxMi43OTQsInN1YiI6IjY4Y2VjNjkwYzliZWIyZmZjYmQ0MTI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0oHwn2HqoqSvfFiPbgi8EH9XlPxWosViWUbgLIVoRT0'
            }
        };

        fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${nextPage}`, options)
        .then( response => response.json() )
        .then( data => this.setState({data: this.state.data.concat(data.results), page: nextPage, loading:false}))
        .catch( error => {console.log(error); this.setState({loading:false}) });;
    }



        render(){
            
        if (this.state.loading){
            return <h3 className="Cargando">Cargando...</h3>
        }

            const personajesFiltrados = this.filtrarPersonajes(this.state.valor)

            return(
                <div>
                    <form className="search-form" onSubmit={(event)=>this.evitarSubmit(event)}>
                        <label>Serie: </label>
                        <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
                        <input type="submit" value="Submit" />
                    </form>    
                        
                    {this.state.data === "" ?
                    <h3> Cargando... </h3> :
                    <section className="row cards all-series" id="series">
                        {personajesFiltrados.map((item, idx) => <Serie key = {item + idx} info = {item}/>)}
                    </section>} 

                        <div className="cargarMasContainer"> <button className="cargarMas" onClick={() => this.masSeries()}> Cargar mas </button> </div>

                </div>
            )
        }
}
export default Series;

