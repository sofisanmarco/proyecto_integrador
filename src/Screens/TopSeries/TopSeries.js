import React, {Component} from "react";
import Header from "../../Components/Header/Header";
import Serie from "../../Components/Serie/Serie";
import Filtrar from "../../Components/Filtrar/Filtrar";


class TopSeries extends Component{
    constructor(props){
        super(props)
        this.state = {valor: "", data: [], boton:"Cargar mas", page: 1, loading: true, dataFiltrada: []}
    }
    componentDidMount(){
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWQxNzUwYTU5YTMxZDFjZmY0MmI5NDZhYWE3MDQyZiIsIm5iZiI6MTc1ODM4MTcxMi43OTQsInN1YiI6IjY4Y2VjNjkwYzliZWIyZmZjYmQ0MTI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0oHwn2HqoqSvfFiPbgi8EH9XlPxWosViWUbgLIVoRT0'
            }
        };

        fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1", options)
        .then( response => response.json() )
        .then( data => this.setState({data: data.results, loading:false, dataFiltrada: data.results}))
        .catch( error => {console.log(error); this.setState({loading:false}) });
 
    };

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
        .then( data => this.setState({dataFiltrada: this.state.data.concat(data.results), page: nextPage, loading:false}))
        .catch( error => {console.log(error); this.setState({loading:false}) });;
    }

    filtrarPeliculas(valor){
      let filtradas = this.state.data.filter(serie => serie.name.toLowerCase().includes(valor.toLowerCase()) );
      this.setState({
        dataFiltrada: filtradas
        })
    };

    render(){

         if (this.state.loading){
            return <h3 className="Cargando">Cargando...</h3>
        }

        return(
            <div class="container">
                <Header/>
                    <Filtrar filtrar={(id) => this.filtrarPeliculas(id)} />       
                        
                    {this.state.data === "" ?
                    <h3> Cargando... </h3> :
                    <section className="row cards all-series" id="series">
                        {this.state.dataFiltrada.map((item, idx) => <Serie key = {item + idx} info = {item}/>)}
                    </section>} 

                    <div className="cargarMasContainer"> <button className="cargarMas" onClick={() => this.masSeries()}> Cargar mas </button> </div>


            </div>
    )
    }
    
};

export default TopSeries;